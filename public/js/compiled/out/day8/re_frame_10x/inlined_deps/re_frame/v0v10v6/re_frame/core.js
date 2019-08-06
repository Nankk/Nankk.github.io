// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors');
goog.require('clojure.set');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.clear_sub = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.clear_fx = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.clear_cofx = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$reg_event_db(var_args){
var G__41700 = arguments.length;
switch (G__41700) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$reg_event_fx(var_args){
var G__41703 = arguments.length;
switch (G__41703) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$reg_event_ctx(var_args){
var G__41706 = arguments.length;
switch (G__41706) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_41712 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_41713 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction)));
var seq__41708_41714 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_41713,original_subs_41712));
var chunk__41709_41715 = null;
var count__41710_41716 = (0);
var i__41711_41717 = (0);
while(true){
if((i__41711_41717 < count__41710_41716)){
var sub_41718 = cljs.core._nth.call(null,chunk__41709_41715,i__41711_41717);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,sub_41718);


var G__41719 = seq__41708_41714;
var G__41720 = chunk__41709_41715;
var G__41721 = count__41710_41716;
var G__41722 = (i__41711_41717 + (1));
seq__41708_41714 = G__41719;
chunk__41709_41715 = G__41720;
count__41710_41716 = G__41721;
i__41711_41717 = G__41722;
continue;
} else {
var temp__5735__auto___41723 = cljs.core.seq.call(null,seq__41708_41714);
if(temp__5735__auto___41723){
var seq__41708_41724__$1 = temp__5735__auto___41723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41708_41724__$1)){
var c__4550__auto___41725 = cljs.core.chunk_first.call(null,seq__41708_41724__$1);
var G__41726 = cljs.core.chunk_rest.call(null,seq__41708_41724__$1);
var G__41727 = c__4550__auto___41725;
var G__41728 = cljs.core.count.call(null,c__4550__auto___41725);
var G__41729 = (0);
seq__41708_41714 = G__41726;
chunk__41709_41715 = G__41727;
count__41710_41716 = G__41728;
i__41711_41717 = G__41729;
continue;
} else {
var sub_41730 = cljs.core.first.call(null,seq__41708_41724__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,sub_41730);


var G__41731 = cljs.core.next.call(null,seq__41708_41724__$1);
var G__41732 = null;
var G__41733 = (0);
var G__41734 = (0);
seq__41708_41714 = G__41731;
chunk__41709_41715 = G__41732;
count__41710_41716 = G__41733;
i__41711_41717 = G__41734;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.purge.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$add_post_event_callback(var_args){
var G__41736 = arguments.length;
switch (G__41736) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.call(null,f,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.add_post_event_callback.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue,id,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.remove_post_event_callback.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.event_queue,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$register_handler(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41739 = arguments.length;
var i__4731__auto___41740 = (0);
while(true){
if((i__4731__auto___41740 < len__4730__auto___41739)){
args__4736__auto__.push((arguments[i__4731__auto___41740]));

var G__41741 = (i__4731__auto___41740 + (1));
i__4731__auto___41740 = G__41741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_event_db,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq41738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41738));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$core$register_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41743 = arguments.length;
var i__4731__auto___41744 = (0);
while(true){
if((i__4731__auto___41744 < len__4730__auto___41743)){
args__4736__auto__.push((arguments[i__4731__auto___41744]));

var G__41745 = (i__4731__auto___41744 + (1));
i__4731__auto___41744 = G__41745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub_raw,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq41742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41742));
});


//# sourceMappingURL=core.js.map?rel=1563379475365
