// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.views.main');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.subs');
goog.require('rock_paper_scissors.events');
goog.require('rock_paper_scissors.rps');
goog.require('rock_paper_scissors.db');
goog.require('rock_paper_scissors.views.fight');
goog.require('rock_paper_scissors.views.result');
goog.require('clojure.string');
goog.require('rock_paper_scissors.views.side_menu');
rock_paper_scissors.views.main.main_panel = (function rock_paper_scissors$views$main$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-fluid"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-3 col-xs-1 p-l-0 p-r-0",new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),rock_paper_scissors.views.side_menu.accordion_menu.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-9 col-xs-11 large-container"], null),(function (){var G__38986 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","page","rock-paper-scissors.subs/page",1851219920)], null)));
var G__38986__$1 = (((G__38986 instanceof cljs.core.Keyword))?G__38986.fqn:null);
switch (G__38986__$1) {
case "rock-paper-scissors.db/fight":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.fight.fight_panel], null);

break;
case "rock-paper-scissors.db/result-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result.table_panel], null);

break;
case "rock-paper-scissors.db/result-charts":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.result.charts_panel], null);

break;
case "rock-paper-scissors.db/external-link":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"External links will be shown here."], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38986__$1)].join('')));

}
})()], null)], null)], null);
});

//# sourceMappingURL=main.js.map?rel=1564996254094
