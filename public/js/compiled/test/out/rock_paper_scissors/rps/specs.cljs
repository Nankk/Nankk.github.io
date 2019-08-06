(ns rock-paper-scissors.rps.specs
  (:require [cljs.spec.alpha :as s :include-macros true]
            [rock-paper-scissors.rps :as rps]))

;; 基本となるスペックの定義
(s/def ::hand #{::rps/rock ::rps/paper ::rps/scissors})
(s/def ::hand-num (s/int-in 0 3))
(s/def ::result #{::rps/win ::rps/lose ::rps/draw})

;; …を、関数定義で使いまわす。定義済みの仕様がハッキリしてるとここもスッキリする
(s/fdef rps/<-hand
  :args (s/cat :hand ::hand)
  :ret ::hand-num)

(s/fdef rps/->hand
  :args (s/cat :num ::hand-num)
  :ret ::hand)

(s/fdef rps/fight
  :args (s/cat :you ::hand :enemy ::hand)
  :ret ::result)
