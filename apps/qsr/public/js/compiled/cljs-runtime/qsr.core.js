goog.provide('qsr.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('qsr.events');
goog.require('qsr.views');
goog.require('qsr.config');
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
qsr.core.init = (function qsr$core$init(){
var G__32336_32337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","initialize-db","qsr.events/initialize-db",-493943915)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__32336_32337) : re_frame.core.dispatch_sync.call(null,G__32336_32337));

qsr.core.dev_setup();

return qsr.core.mount_root();
});

//# sourceMappingURL=qsr.core.js.map
