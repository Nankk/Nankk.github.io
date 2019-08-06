(ns rock-paper-scissors.subs
  (:require
   [re-frame.core :as re-frame]
   [rock-paper-scissors.rps :as rps]))

(re-frame/reg-sub
 ::scene
 (fn [db _]
   (:scene db)))

(re-frame/reg-sub
  ::you-and-enemy
  (fn [db _]
    (select-keys db [:you :enemy])))

;; ":<-" は、これで指定した他のSubscriptionに変更があった場合のみ処理することを表す。
;; 糖衣構文であり、本当は(subscribe [::xxx])のリストを返すfnを書く。
;; これを指定しないとdbが更新される度に呼ばれることになるため、dbの一部にしか
;; 依存しない値にまで無駄に更新処理が発生してしまう。
(re-frame/reg-sub
  ::you-and-enemy-hands
  :<- [::you-and-enemy]
  (fn [{:keys [you enemy]} _]
    (str (name you) "(YOU) VS " (name enemy) "(ENEMY)")))

(re-frame/reg-sub
  ::last-result
  :<- [::you-and-enemy]
  (fn [{:keys [you enemy]} _]
    (rps/fight you enemy)))

(re-frame/reg-sub
  ::result-color
  :<- [::last-result]
  (fn [r _]
    (case r
      ::rps/win "red"
      ::rps/lose "blue"
      ::rps/draw "gray")))
