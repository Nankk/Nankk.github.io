(ns rock-paper-scissors.events
  (:require [re-frame.core :as re-frame]
            [rock-paper-scissors.db :as db]
            [rock-paper-scissors.cofx :as cofx]
            [rock-paper-scissors.rps :as rps]))

(re-frame/reg-event-db ::initialize-db
                       (fn [_ _]
                         db/default-db))

(re-frame/reg-event-db ::next-game
                       (fn [db _]
                         (assoc db :scene ::db/now-playing)))

(re-frame/reg-event-fx ::select-your-hand
                       [(re-frame/inject-cofx ::cofx/select-enemy-hand)]
                       (fn [{:keys [db enemy-hand]} [_ h]]
                         {:db (assoc db
                                     :you h
                                     :enemy enemy-hand
                                     :scene ::db/over
                                     :results (conj (db :results)
                                                    {:you h
                                                     :enemy enemy-hand
                                                     :result (rps/fight h enemy-hand)}))}))

(re-frame/reg-event-db ::move-page-to
                       (fn [db [_ page-key]]
                         (assoc db :page page-key)))

