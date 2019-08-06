(ns rock-paper-scissors.views
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [clojure.string :as str]))

;;; With hiccup

(defn start-button [label]
  [:input {:type "button"
           :on-click #(re-frame/dispatch [::events/next-game])
           :value label}])

(defn hands []
  [:div (map (fn [h]
               ^{:key h}
               [:input {:type "button"
                        :on-click #(re-frame/dispatch [::events/select-your-hand h])
                        :value (str/capitalize (name h))}])
             [::rps/rock ::rps/paper ::rps/scissors])])

(defn result []
  (let [r @(re-frame/subscribe [::subs/last-result])
        c @(re-frame/subscribe [::subs/result-color])]
    [:h2 {:style {:color c}} r]))

(defn main-panel []
  (case @(re-frame/subscribe [::subs/scene])
    ::db/start [start-button "Game Start"]
    ::db/now-playing [hands]
    ::db/over [:div
               [:h1 @(re-frame/subscribe [::subs/you-and-enemy-hands])]
               [result]
               [start-button "Next Game"]]))
