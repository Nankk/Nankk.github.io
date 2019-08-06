// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.rps');
goog.require('clojure.string');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914),(function (db,_){
return new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","page","rock-paper-scissors.subs/page",1851219920),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826),(function (db,_){
return cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null),(function (p__38114,_){
var map__38115 = p__38114;
var map__38115__$1 = (((((!((map__38115 == null))))?(((((map__38115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38115):map__38115);
var you = cljs.core.get.call(null,map__38115__$1,new cljs.core.Keyword(null,"you","you",-541661311));
var enemy = cljs.core.get.call(null,map__38115__$1,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,you)))," (YOU) VS ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,enemy)))," (ENEMY)"].join('');
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","last-result","rock-paper-scissors.subs/last-result",-1761807583),(function (db,_){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","results","rock-paper-scissors.subs/results",-264293568),(function (db,_){
return db.call(null,new cljs.core.Keyword(null,"results","results",-1134170113));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","last-result","rock-paper-scissors.subs/last-result",-1761807583)], null),(function (r,_){
var G__38117 = r;
var G__38117__$1 = (((G__38117 instanceof cljs.core.Keyword))?G__38117.fqn:null);
switch (G__38117__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38117__$1)].join('')));

}
}));

//# sourceMappingURL=subs.js.map?rel=1564647593019
