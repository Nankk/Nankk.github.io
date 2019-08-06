(ns rock-paper-scissors.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [rock-paper-scissors.events :as events]
   [rock-paper-scissors.views.main :as mainview]
   [rock-paper-scissors.config :as config]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [mainview/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
