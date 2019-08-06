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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-info",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));
})], null),label], null);
});
rock_paper_scissors.views.hands = (function rock_paper_scissors$views$hands(){
return cljs.core.map.call(null,(function (h){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),h], null));
})], null),clojure.string.capitalize.call(null,cljs.core.name.call(null,h))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625)], null));
});
rock_paper_scissors.views.result = (function rock_paper_scissors$views$result(){
var r = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","last-result","rock-paper-scissors.subs/last-result",-1761807583)], null)));
var c = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null)], null),r], null);
});
rock_paper_scissors.views.result_table = (function rock_paper_scissors$views$result_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Round"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Your hand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Competitor's hand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Result"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var results = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","results","rock-paper-scissors.subs/results",-264293568)], null)));
var iter__4523__auto__ = ((function (results){
return (function rock_paper_scissors$views$result_table_$_iter__37952(s__37953){
return (new cljs.core.LazySeq(null,((function (results){
return (function (){
var s__37953__$1 = s__37953;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__37953__$1);
if(temp__5735__auto__){
var s__37953__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37953__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37953__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37955 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37954 = (0);
while(true){
if((i__37954 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__37954);
cljs.core.chunk_append.call(null,b__37955,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null)], null));

var G__37956 = (i__37954 + (1));
i__37954 = G__37956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37955),rock_paper_scissors$views$result_table_$_iter__37952.call(null,cljs.core.chunk_rest.call(null,s__37953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37955),null);
}
} else {
var i = cljs.core.first.call(null,s__37953__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null)], null),rock_paper_scissors$views$result_table_$_iter__37952.call(null,cljs.core.rest.call(null,s__37953__$2)));
}
} else {
return null;
}
break;
}
});})(results))
,null,null));
});})(results))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,results)));
})()], null)], null)], null);
});
rock_paper_scissors.views.main_panel = (function rock_paper_scissors$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),(function (){var G__37957 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)));
var G__37957__$1 = (((G__37957 instanceof cljs.core.Keyword))?G__37957.fqn:null);
switch (G__37957__$1) {
case "rock-paper-scissors.db/start":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.start_button,"Game Start"], null);

break;
case "rock-paper-scissors.db/now-playing":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),rock_paper_scissors.views.hands.call(null)], null);

break;
case "rock-paper-scissors.db/over":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.start_button,"Next Game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result_table], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37957__$1)].join('')));

}
})()], null);
});

//# sourceMappingURL=views.js.map?rel=1563517307201
