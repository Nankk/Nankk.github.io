// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.views.result');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.subs');
goog.require('rock_paper_scissors.events');
goog.require('rock_paper_scissors.rps');
goog.require('rock_paper_scissors.db');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('cljsjs.chartjs');
rock_paper_scissors.views.result.result_table = (function rock_paper_scissors$views$result$result_table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Round"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Your hand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Competitor's hand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Result"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var results = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","results","rock-paper-scissors.subs/results",-264293568)], null)));
var iter__4523__auto__ = ((function (results){
return (function rock_paper_scissors$views$result$result_table_$_iter__38973(s__38974){
return (new cljs.core.LazySeq(null,((function (results){
return (function (){
var s__38974__$1 = s__38974;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38974__$1);
if(temp__5735__auto__){
var s__38974__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38974__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38974__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38976 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38975 = (0);
while(true){
if((i__38975 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__38975);
cljs.core.chunk_append.call(null,b__38976,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null)], null));

var G__38977 = (i__38975 + (1));
i__38975 = G__38977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38976),rock_paper_scissors$views$result$result_table_$_iter__38973.call(null,cljs.core.chunk_rest.call(null,s__38974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38976),null);
}
} else {
var i = cljs.core.first.call(null,s__38974__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,results,i))], null)], null),rock_paper_scissors$views$result$result_table_$_iter__38973.call(null,cljs.core.rest.call(null,s__38974__$2)));
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
})()], null)], null);
});
rock_paper_scissors.views.result.table_panel = (function rock_paper_scissors$views$result$table_panel(){
return rock_paper_scissors.views.result.result_table.call(null);
});
rock_paper_scissors.views.result.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"], null);
rock_paper_scissors.views.result.pie_chart = (function rock_paper_scissors$views$result$pie_chart(id){
var ctx = document.getElementById(id).getContext("2d");
var r = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","results","rock-paper-scissors.subs/results",-264293568)], null)));
var hands = cljs.core.frequencies.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"you","you",-541661311),r));
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"doughnut",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.keys.call(null,hands),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vals.call(null,hands),new cljs.core.Keyword(null,"label","label",1718410804),"Rev in MM",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),rock_paper_scissors.views.result.colors], null)], null)], null)], null);
return (new Chart(ctx,cljs.core.clj__GT_js.call(null,data)));
});
rock_paper_scissors.views.result.combination_chart = (function rock_paper_scissors$views$result$combination_chart(id){
var ctx = document.getElementById(id).getContext("2d");
var r = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","results","rock-paper-scissors.subs/results",-264293568)], null)));
var you = cljs.core.frequencies.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"you","you",-541661311),r));
var enemy = cljs.core.frequencies.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"enemy","enemy",-956472047),r));
var win_rate = (function (){var iter__4523__auto__ = ((function (ctx,r,you,enemy){
return (function rock_paper_scissors$views$result$combination_chart_$_iter__38979(s__38980){
return (new cljs.core.LazySeq(null,((function (ctx,r,you,enemy){
return (function (){
var s__38980__$1 = s__38980;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38980__$1);
if(temp__5735__auto__){
var s__38980__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38980__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38980__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38982 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38981 = (0);
while(true){
if((i__38981 < size__4522__auto__)){
var h = cljs.core._nth.call(null,c__4521__auto__,i__38981);
cljs.core.chunk_append.call(null,b__38982,cljs.core.PersistentArrayMap.createAsIfByAssoc([h,(cljs.core.count.call(null,cljs.core.filter.call(null,((function (i__38981,h,c__4521__auto__,size__4522__auto__,b__38982,s__38980__$2,temp__5735__auto__,ctx,r,you,enemy){
return (function (p1__38978_SHARP_){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(p1__38978_SHARP_),h)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__38978_SHARP_),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864))));
});})(i__38981,h,c__4521__auto__,size__4522__auto__,b__38982,s__38980__$2,temp__5735__auto__,ctx,r,you,enemy))
,r)) / h.call(null,you))]));

var G__38983 = (i__38981 + (1));
i__38981 = G__38983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38982),rock_paper_scissors$views$result$combination_chart_$_iter__38979.call(null,cljs.core.chunk_rest.call(null,s__38980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38982),null);
}
} else {
var h = cljs.core.first.call(null,s__38980__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([h,(cljs.core.count.call(null,cljs.core.filter.call(null,((function (h,s__38980__$2,temp__5735__auto__,ctx,r,you,enemy){
return (function (p1__38978_SHARP_){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"you","you",-541661311).cljs$core$IFn$_invoke$arity$1(p1__38978_SHARP_),h)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__38978_SHARP_),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864))));
});})(h,s__38980__$2,temp__5735__auto__,ctx,r,you,enemy))
,r)) / h.call(null,you))]),rock_paper_scissors$views$result$combination_chart_$_iter__38979.call(null,cljs.core.rest.call(null,s__38980__$2)));
}
} else {
return null;
}
break;
}
});})(ctx,r,you,enemy))
,null,null));
});})(ctx,r,you,enemy))
;
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625)], null));
})();
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.keys.call(null,you),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vals.call(null,you),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),rock_paper_scissors.views.result.colors.call(null,(0))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vals.call(null,enemy),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),rock_paper_scissors.views.result.colors.call(null,(1))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,win_rate)),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),rock_paper_scissors.views.result.colors.call(null,(1))], null)], null)], null)], null);
return (new Chart(ctx,cljs.core.clj__GT_js.call(null,data)));
});
rock_paper_scissors.views.result.next_chart_idx = (function (){var n = cljs.core.atom.call(null,(0));
return ((function (n){
return (function (){
cljs.core.swap_BANG_.call(null,n,cljs.core.inc);

return cljs.core.deref.call(null,n);
});
;})(n))
})();
rock_paper_scissors.views.result.chartjs_component = (function rock_paper_scissors$views$result$chartjs_component(chart){
var idx = rock_paper_scissors.views.result.next_chart_idx.call(null);
var id = ["chart-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (idx,id){
return (function (){
return chart.call(null,id);
});})(idx,id))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"chartjs-component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (idx,id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});})(idx,id))
], null));
});
rock_paper_scissors.views.result.charts_panel = (function rock_paper_scissors$views$result$charts_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Breakdown of your hands"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result.chartjs_component,rock_paper_scissors.views.result.pie_chart], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"What's this...?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result.chartjs_component,rock_paper_scissors.views.result.combination_chart], null)], null)], null)], null)], null);
});

//# sourceMappingURL=result.js.map?rel=1564996254084
