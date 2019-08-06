(ns rock-paper-scissors.views.fight
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [clojure.string :as str]))

(defn start-button [label]
  [:button {:class "btn btn-success"
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

(defn fight-panel []
  (case @(re-frame/subscribe [::subs/scene])
    ::db/start [start-button "Game Start"]
    ::db/now-playing [:div {:class "row"}
                      (hands)]
    ::db/over [:div
               [:h1 @(re-frame/subscribe [::subs/you-and-enemy-hands])]
               [result]
               [start-button "Next Game"]]))
