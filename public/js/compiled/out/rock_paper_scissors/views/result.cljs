(ns rock-paper-scissors.views.result
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [cljsjs.chartjs]))

(defn result-table []
  [:table {:class "table table-striped"}
   [:thead
    [:tr
     [:th "Round"]
     [:th "Your hand"]
     [:th "Competitor's hand"]
     [:th "Result"]]]
   [:tbody
    (let [results @(re-frame/subscribe [::subs/results])]
      (for [i (range (count results))]
        [:tr
         [:td (inc i)]
         [:td (-> results (nth i) :you)]
         [:td (-> results (nth i) :enemy)]
         [:td (-> results (nth i) :result)]]))]])

(defn table-panel []
  (result-table))

(def colors ["#2ecc71" "#3498db" "#95a5a6" "#9b59b6" "#f1c40f" "#e74c3c" "#34495e"])

(defn pie-chart [id]
  (let [ctx (.getContext (.getElementById js/document id) "2d")
        r @(re-frame/subscribe [::subs/results])
        hands (->> r (map :you) frequencies)
        data {:type "doughnut"
              :data {:labels (keys hands)
                     :datasets [{:data (vals hands)
                                 :label "Rev in MM"
                                 :backgroundColor colors}]}}]
    (js/Chart. ctx (clj->js data))))

(defn combination-chart [id]
  (let [ctx (.getContext (.getElementById js/document id) "2d")
        r @(re-frame/subscribe [::subs/results])
        you (->> r (map :you) frequencies)
        enemy (->> r (map :enemy) frequencies)
        win-rate (for [h [::rps/rock ::rps/paper ::rps/scissors]]
                   {h
                    (/ (count (filter #(and (= (:you %) h) (= (:result %) ::rps/win)) r))
                       (h you))})
        data {:type "bar"
              :data {:labels (keys you)
                     :datasets [{:type "bar"
                                 :data (vals you)
                                 :backgroundColor (colors 0)}
                                {:type "bar"
                                 :data (vals enemy)
                                 :backgroundColor (colors 1)}
                                {:type "line"
                                 :data (vals (into {} win-rate))
                                 :backgroundColor (colors 1)}]}}]
    (js/Chart. ctx (clj->js data))))

(def next-chart-idx
  (let [n (atom 0)]
    (fn [] (do (swap! n inc) @n))))

(defn chartjs-component
  [chart]
  (let [idx (next-chart-idx)
        id (str "chart-" idx)]
    (reagent/create-class
     {:component-did-mount #(chart id)
      :display-name        "chartjs-component"
      :reagent-render      (fn []
                             [:canvas {:id id}])})))

(defn charts-panel []
  [:div {:class "row"}
   [:div {:class "col-sm-6"}
    [:div {:class "card"}
     [:div {:class "card-header"}
      [:h4 "Breakdown of your hands"]]
     [:div {:class "card-body"}
      [chartjs-component pie-chart]]]]
   [:div {:class "col-sm-6"}
    [:div {:class "card"}
     [:div {:class "card-header"}
      [:h4 "What's this...?"]]
     [:div {:class "card-body"}
      [chartjs-component combination-chart]]]]])

