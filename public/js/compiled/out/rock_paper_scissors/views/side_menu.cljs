(ns rock-paper-scissors.views.side-menu
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.subs :as subs]
            [rock-paper-scissors.events :as events]
            [rock-paper-scissors.rps :as rps]
            [rock-paper-scissors.db :as db]
            [clojure.string :as str]))

(defn accordion-menu []
  ;; Fight
  [:div {:class "list-group"}
   [:a {:href "#menu1"
        :class "list-group-item"
        :on-click #(re-frame/dispatch [::events/move-page-to ::db/fight])}
    [:i {:class "fa fa-fist-raised"}]
    [:span {:class "hidden-xs hidden-sm collapsed"} " Fight"]]

   ;; Result
   [:a {:href "#menu2"
        :class "list-group-item collapsed"
        :data-toggle "collapse"
        :data-parent "#sidebar"
        :aria-expanded "false"}
    [:i {:class "fa fa-poll"}]
    [:span {:class "hidden-xs hidden-sm"} " Result"]]
   ;; Result-subs
   [:div {:class "collapse" :id "menu2"}
    [:a {:href "#menu2sub1"
         :class "list-group-item"
         :on-click #(re-frame/dispatch [::events/move-page-to ::db/result-table])}
     [:i {:class "fa fa-table"}]
     [:span {:class "collapsed"} " Table"]]
    [:a {:href "#menu2sub2"
         :class "list-group-item"
         :on-click #(re-frame/dispatch [::events/move-page-to ::db/result-charts])}
     [:i {:class "fa fa-chart-pie"}]
     [:span {:class "collapsed"} " Charts"]]]

   ;; External link
   [:a {:href "#menu3"
        :class "list-group-item"
        :on-click #(re-frame/dispatch [::events/move-page-to ::db/external-link])}
    [:i {:class "fa fa-link"}]
    [:span {:class "hidden-xs hidden-sm collapsed"} " External link"]]])
