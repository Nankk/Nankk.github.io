// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__41467 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41468 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41468;

try{try{var seq__41469 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41470 = null;
var count__41471 = (0);
var i__41472 = (0);
while(true){
if((i__41472 < count__41471)){
var vec__41479 = cljs.core._nth.call(null,chunk__41470,i__41472);
var effect_key = cljs.core.nth.call(null,vec__41479,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41479,(1),null);
var temp__5733__auto___41501 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41501)){
var effect_fn_41502 = temp__5733__auto___41501;
effect_fn_41502.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41503 = seq__41469;
var G__41504 = chunk__41470;
var G__41505 = count__41471;
var G__41506 = (i__41472 + (1));
seq__41469 = G__41503;
chunk__41470 = G__41504;
count__41471 = G__41505;
i__41472 = G__41506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41469);
if(temp__5735__auto__){
var seq__41469__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41469__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41469__$1);
var G__41507 = cljs.core.chunk_rest.call(null,seq__41469__$1);
var G__41508 = c__4550__auto__;
var G__41509 = cljs.core.count.call(null,c__4550__auto__);
var G__41510 = (0);
seq__41469 = G__41507;
chunk__41470 = G__41508;
count__41471 = G__41509;
i__41472 = G__41510;
continue;
} else {
var vec__41482 = cljs.core.first.call(null,seq__41469__$1);
var effect_key = cljs.core.nth.call(null,vec__41482,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41482,(1),null);
var temp__5733__auto___41511 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41511)){
var effect_fn_41512 = temp__5733__auto___41511;
effect_fn_41512.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41513 = cljs.core.next.call(null,seq__41469__$1);
var G__41514 = null;
var G__41515 = (0);
var G__41516 = (0);
seq__41469 = G__41513;
chunk__41470 = G__41514;
count__41471 = G__41515;
i__41472 = G__41516;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41259__auto___41517 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__41260__auto___41518 = (end__41259__auto___41517 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41260__auto___41518,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__41259__auto___41517);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41467;
}} else {
var seq__41485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41486 = null;
var count__41487 = (0);
var i__41488 = (0);
while(true){
if((i__41488 < count__41487)){
var vec__41495 = cljs.core._nth.call(null,chunk__41486,i__41488);
var effect_key = cljs.core.nth.call(null,vec__41495,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41495,(1),null);
var temp__5733__auto___41519 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41519)){
var effect_fn_41520 = temp__5733__auto___41519;
effect_fn_41520.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41521 = seq__41485;
var G__41522 = chunk__41486;
var G__41523 = count__41487;
var G__41524 = (i__41488 + (1));
seq__41485 = G__41521;
chunk__41486 = G__41522;
count__41487 = G__41523;
i__41488 = G__41524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41485);
if(temp__5735__auto__){
var seq__41485__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41485__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41485__$1);
var G__41525 = cljs.core.chunk_rest.call(null,seq__41485__$1);
var G__41526 = c__4550__auto__;
var G__41527 = cljs.core.count.call(null,c__4550__auto__);
var G__41528 = (0);
seq__41485 = G__41525;
chunk__41486 = G__41526;
count__41487 = G__41527;
i__41488 = G__41528;
continue;
} else {
var vec__41498 = cljs.core.first.call(null,seq__41485__$1);
var effect_key = cljs.core.nth.call(null,vec__41498,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41498,(1),null);
var temp__5733__auto___41529 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41529)){
var effect_fn_41530 = temp__5733__auto___41529;
effect_fn_41530.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41531 = cljs.core.next.call(null,seq__41485__$1);
var G__41532 = null;
var G__41533 = (0);
var G__41534 = (0);
seq__41485 = G__41531;
chunk__41486 = G__41532;
count__41487 = G__41533;
i__41488 = G__41534;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41535 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41536 = null;
var count__41537 = (0);
var i__41538 = (0);
while(true){
if((i__41538 < count__41537)){
var map__41543 = cljs.core._nth.call(null,chunk__41536,i__41538);
var map__41543__$1 = (((((!((map__41543 == null))))?(((((map__41543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41543):map__41543);
var effect = map__41543__$1;
var ms = cljs.core.get.call(null,map__41543__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41543__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41535,chunk__41536,count__41537,i__41538,map__41543,map__41543__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41535,chunk__41536,count__41537,i__41538,map__41543,map__41543__$1,effect,ms,dispatch))
,ms);
}


var G__41547 = seq__41535;
var G__41548 = chunk__41536;
var G__41549 = count__41537;
var G__41550 = (i__41538 + (1));
seq__41535 = G__41547;
chunk__41536 = G__41548;
count__41537 = G__41549;
i__41538 = G__41550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41535);
if(temp__5735__auto__){
var seq__41535__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41535__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41535__$1);
var G__41551 = cljs.core.chunk_rest.call(null,seq__41535__$1);
var G__41552 = c__4550__auto__;
var G__41553 = cljs.core.count.call(null,c__4550__auto__);
var G__41554 = (0);
seq__41535 = G__41551;
chunk__41536 = G__41552;
count__41537 = G__41553;
i__41538 = G__41554;
continue;
} else {
var map__41545 = cljs.core.first.call(null,seq__41535__$1);
var map__41545__$1 = (((((!((map__41545 == null))))?(((((map__41545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41545):map__41545);
var effect = map__41545__$1;
var ms = cljs.core.get.call(null,map__41545__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41545__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41535,chunk__41536,count__41537,i__41538,map__41545,map__41545__$1,effect,ms,dispatch,seq__41535__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41535,chunk__41536,count__41537,i__41538,map__41545,map__41545__$1,effect,ms,dispatch,seq__41535__$1,temp__5735__auto__))
,ms);
}


var G__41555 = cljs.core.next.call(null,seq__41535__$1);
var G__41556 = null;
var G__41557 = (0);
var G__41558 = (0);
seq__41535 = G__41555;
chunk__41536 = G__41556;
count__41537 = G__41557;
i__41538 = G__41558;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__41559 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41560 = null;
var count__41561 = (0);
var i__41562 = (0);
while(true){
if((i__41562 < count__41561)){
var event = cljs.core._nth.call(null,chunk__41560,i__41562);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__41563 = seq__41559;
var G__41564 = chunk__41560;
var G__41565 = count__41561;
var G__41566 = (i__41562 + (1));
seq__41559 = G__41563;
chunk__41560 = G__41564;
count__41561 = G__41565;
i__41562 = G__41566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41559);
if(temp__5735__auto__){
var seq__41559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41559__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41559__$1);
var G__41567 = cljs.core.chunk_rest.call(null,seq__41559__$1);
var G__41568 = c__4550__auto__;
var G__41569 = cljs.core.count.call(null,c__4550__auto__);
var G__41570 = (0);
seq__41559 = G__41567;
chunk__41560 = G__41568;
count__41561 = G__41569;
i__41562 = G__41570;
continue;
} else {
var event = cljs.core.first.call(null,seq__41559__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__41571 = cljs.core.next.call(null,seq__41559__$1);
var G__41572 = null;
var G__41573 = (0);
var G__41574 = (0);
seq__41559 = G__41571;
chunk__41560 = G__41572;
count__41561 = G__41573;
i__41562 = G__41574;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__41575 = cljs.core.seq.call(null,value);
var chunk__41576 = null;
var count__41577 = (0);
var i__41578 = (0);
while(true){
if((i__41578 < count__41577)){
var event = cljs.core._nth.call(null,chunk__41576,i__41578);
clear_event.call(null,event);


var G__41579 = seq__41575;
var G__41580 = chunk__41576;
var G__41581 = count__41577;
var G__41582 = (i__41578 + (1));
seq__41575 = G__41579;
chunk__41576 = G__41580;
count__41577 = G__41581;
i__41578 = G__41582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41575);
if(temp__5735__auto__){
var seq__41575__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41575__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41575__$1);
var G__41583 = cljs.core.chunk_rest.call(null,seq__41575__$1);
var G__41584 = c__4550__auto__;
var G__41585 = cljs.core.count.call(null,c__4550__auto__);
var G__41586 = (0);
seq__41575 = G__41583;
chunk__41576 = G__41584;
count__41577 = G__41585;
i__41578 = G__41586;
continue;
} else {
var event = cljs.core.first.call(null,seq__41575__$1);
clear_event.call(null,event);


var G__41587 = cljs.core.next.call(null,seq__41575__$1);
var G__41588 = null;
var G__41589 = (0);
var G__41590 = (0);
seq__41575 = G__41587;
chunk__41576 = G__41588;
count__41577 = G__41589;
i__41578 = G__41590;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1563379475215
