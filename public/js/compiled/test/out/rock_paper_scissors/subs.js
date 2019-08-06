// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.rps');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914),(function (db,_){
return new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826),(function (db,_){
return cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null),(function (p__6354,_){
var map__6355 = p__6354;
var map__6355__$1 = (((((!((map__6355 == null))))?(((((map__6355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6355):map__6355);
var you = cljs.core.get.call(null,map__6355__$1,new cljs.core.Keyword(null,"you","you",-541661311));
var enemy = cljs.core.get.call(null,map__6355__$1,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
return [cljs.core.name.call(null,you),"(YOU) VS ",cljs.core.name.call(null,enemy),"(ENEMY)"].join('');
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null),(function (p__6357,_){
var map__6358 = p__6357;
var map__6358__$1 = (((((!((map__6358 == null))))?(((((map__6358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6358):map__6358);
var you = cljs.core.get.call(null,map__6358__$1,new cljs.core.Keyword(null,"you","you",-541661311));
var enemy = cljs.core.get.call(null,map__6358__$1,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
return rock_paper_scissors.rps.fight.call(null,you,enemy);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null),(function (r,_){
var G__6360 = r;
var G__6360__$1 = (((G__6360 instanceof cljs.core.Keyword))?G__6360.fqn:null);
switch (G__6360__$1) {
case "rock-paper-scissors.rps/win":
return "red";

break;
case "rock-paper-scissors.rps/lose":
return "blue";

break;
case "rock-paper-scissors.rps/draw":
return "gray";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6360__$1)].join('')));

}
}));

//# sourceMappingURL=subs.js.map
