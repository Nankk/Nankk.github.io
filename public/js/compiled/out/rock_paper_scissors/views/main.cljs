(ns rock-paper-scissors.views.main
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [rock-paper-scissors.views.fight :as views.fight]
            [rock-paper-scissors.views.result :as views.result]
            [clojure.string :as str]
            [rock-paper-scissors.views.side-menu :as menu]))

(defn main-panel []
  [:div {:class "container-fluid"}
   [:div {:class "row"}
    [:div {:class "col-md-3 col-xs-1 p-l-0 p-r-0" :id "sidebar"}
     (menu/accordion-menu)]
    [:main {:class "col-md-9 col-xs-11 large-container"}
     (case @(re-frame/subscribe [::subs/page])
       ::db/fight [views.fight/fight-panel]
       ::db/result-table [views.result/table-panel]
       ::db/result-charts [views.result/charts-panel]
       ::db/external-link [:p "External links will be shown here."])]]])
