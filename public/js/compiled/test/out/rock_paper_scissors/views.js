// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.subs');
goog.require('rock_paper_scissors.events');
goog.require('rock_paper_scissors.rps');
goog.require('rock_paper_scissors.db');
goog.require('clojure.string');
rock_paper_scissors.views.start_button = (function rock_paper_scissors$views$start_button(label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));
}),new cljs.core.Keyword(null,"value","value",305978217),label], null)], null);
});
rock_paper_scissors.views.hands = (function rock_paper_scissors$views$hands(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (h){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),h], null));
}),new cljs.core.Keyword(null,"value","value",305978217),clojure.string.capitalize.call(null,cljs.core.name.call(null,h))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625)], null))], null);
});
rock_paper_scissors.views.result = (function rock_paper_scissors$views$result(){
var r = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)));
var c = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),r], null);
});
rock_paper_scissors.views.main_panel = (function rock_paper_scissors$views$main_panel(){
var G__8307 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)));
var G__8307__$1 = (((G__8307 instanceof cljs.core.Keyword))?G__8307.fqn:null);
switch (G__8307__$1) {
case "rock-paper-scissors.db/start":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.start_button,"Game Start"], null);

break;
case "rock-paper-scissors.db/now-playing":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.hands], null);

break;
case "rock-paper-scissors.db/over":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.start_button,"Next Game"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8307__$1)].join('')));

}
});

//# sourceMappingURL=views.js.map
