(ns rock-paper-scissors.views
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [clojure.string :as str]))

;;; With hiccup

(defn start-button [label]
  [:button {:class "btn btn-info"
            :type "button"
            :on-click #(re-frame/dispatch [::events/next-game])}
   label])

(defn hands []
  (map (fn [h]
         ^{:key h}
         [:div {:class "col-md-4"}
          [:button {:class "btn btn-primary"
                    :type "button"
                    :on-click #(re-frame/dispatch [::events/select-your-hand h])}
           (str/capitalize (name h))]])
       [::rps/rock ::rps/paper ::rps/scissors]))

(defn result []
  (let [r @(re-frame/subscribe [::subs/last-result])
        c @(re-frame/subscribe [::subs/result-color])]
    [:h2 {:style {:color c}} r]))

(defn result-table []
  [:div {:class "container"}
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
          [:td (-> results (nth i) :result)]]))]]])

(defn main-panel []
  [:div {:class "container"}
   (case @(re-frame/subscribe [::subs/scene])
     ::db/start [start-button "Game Start"]
     ::db/now-playing [:div {:class "row"}
                       (hands)]
     ::db/over [:div
                [:h1 @(re-frame/subscribe [::subs/you-and-enemy-hands])]
                [result]
                [start-button "Next Game"]
                [result-table]])])
