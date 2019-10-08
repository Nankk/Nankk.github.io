goog.provide('qsr.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('qsr.events');
goog.require('qsr.views');
goog.require('qsr.config');
var module$node_modules$sortablejs$Sortable=shadow.js.require("module$node_modules$sortablejs$Sortable", {});
qsr.core.dev_setup = (function qsr$core$dev_setup(){
if(qsr.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
qsr.core.mount_root = (function qsr$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.main_panel], null),document.getElementById("app"));
});
qsr.core.sortable_init = (function qsr$core$sortable_init(){
return (new module$node_modules$sortablejs$Sortable(document.getElementById("item-list"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),"g1",new cljs.core.Keyword(null,"animation","animation",-1248293244),(200),new cljs.core.Keyword(null,"onEnd","onEnd",350981180),(function (e){
var old = e.oldIndex;
var new$ = e.newIndex;
var from_to = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null);
var G__34132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","on-manually-sorted","qsr.events/on-manually-sorted",-1269403411),from_to], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34132) : re_frame.core.dispatch_sync.call(null,G__34132));
})], null))));
});
qsr.core.init = (function qsr$core$init(){
var G__34133_34135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","initialize-db","qsr.events/initialize-db",-493943915)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34133_34135) : re_frame.core.dispatch_sync.call(null,G__34133_34135));

qsr.core.dev_setup();

qsr.core.mount_root();

return qsr.core.sortable_init();
});

//# sourceMappingURL=qsr.core.js.map
