// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.cofx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.rps');
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("rock-paper-scissors.cofx","select-enemy-hand","rock-paper-scissors.cofx/select-enemy-hand",630497030),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"enemy-hand","enemy-hand",1886778452),rock_paper_scissors.rps.__GT_hand.call(null,cljs.core.rand_int.call(null,(3))));
}));

//# sourceMappingURL=cofx.js.map?rel=1563379455519
