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
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind)))){
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
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38314 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38315 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38315;

try{try{var seq__38316 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38317 = null;
var count__38318 = (0);
var i__38319 = (0);
while(true){
if((i__38319 < count__38318)){
var vec__38327 = chunk__38317.cljs$core$IIndexed$_nth$arity$2(null,i__38319);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38327,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38327,(1),null);
var temp__5733__auto___38410 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38410)){
var effect_fn_38411 = temp__5733__auto___38410;
(effect_fn_38411.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38411.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38411.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38412 = seq__38316;
var G__38413 = chunk__38317;
var G__38414 = count__38318;
var G__38415 = (i__38319 + (1));
seq__38316 = G__38412;
chunk__38317 = G__38413;
count__38318 = G__38414;
i__38319 = G__38415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38316);
if(temp__5735__auto__){
var seq__38316__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38316__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38316__$1);
var G__38416 = cljs.core.chunk_rest(seq__38316__$1);
var G__38417 = c__4550__auto__;
var G__38418 = cljs.core.count(c__4550__auto__);
var G__38419 = (0);
seq__38316 = G__38416;
chunk__38317 = G__38417;
count__38318 = G__38418;
i__38319 = G__38419;
continue;
} else {
var vec__38332 = cljs.core.first(seq__38316__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(1),null);
var temp__5733__auto___38420 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38420)){
var effect_fn_38421 = temp__5733__auto___38420;
(effect_fn_38421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38421.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38422 = cljs.core.next(seq__38316__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__38316 = G__38422;
chunk__38317 = G__38423;
count__38318 = G__38424;
i__38319 = G__38425;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__38073__auto___38426 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__38074__auto___38427 = (end__38073__auto___38426 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38074__auto___38427,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__38073__auto___38426);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38314;
}} else {
var seq__38337 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38338 = null;
var count__38339 = (0);
var i__38340 = (0);
while(true){
if((i__38340 < count__38339)){
var vec__38352 = chunk__38338.cljs$core$IIndexed$_nth$arity$2(null,i__38340);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38352,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38352,(1),null);
var temp__5733__auto___38428 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38428)){
var effect_fn_38429 = temp__5733__auto___38428;
(effect_fn_38429.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38429.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38429.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38430 = seq__38337;
var G__38431 = chunk__38338;
var G__38432 = count__38339;
var G__38433 = (i__38340 + (1));
seq__38337 = G__38430;
chunk__38338 = G__38431;
count__38339 = G__38432;
i__38340 = G__38433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38337);
if(temp__5735__auto__){
var seq__38337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38337__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38337__$1);
var G__38434 = cljs.core.chunk_rest(seq__38337__$1);
var G__38435 = c__4550__auto__;
var G__38436 = cljs.core.count(c__4550__auto__);
var G__38437 = (0);
seq__38337 = G__38434;
chunk__38338 = G__38435;
count__38339 = G__38436;
i__38340 = G__38437;
continue;
} else {
var vec__38361 = cljs.core.first(seq__38337__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38361,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38361,(1),null);
var temp__5733__auto___38438 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38438)){
var effect_fn_38439 = temp__5733__auto___38438;
(effect_fn_38439.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38439.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38439.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38440 = cljs.core.next(seq__38337__$1);
var G__38441 = null;
var G__38442 = (0);
var G__38443 = (0);
seq__38337 = G__38440;
chunk__38338 = G__38441;
count__38339 = G__38442;
i__38340 = G__38443;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38366 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38367 = null;
var count__38368 = (0);
var i__38369 = (0);
while(true){
if((i__38369 < count__38368)){
var map__38377 = chunk__38367.cljs$core$IIndexed$_nth$arity$2(null,i__38369);
var map__38377__$1 = (((((!((map__38377 == null))))?(((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38377):map__38377);
var effect = map__38377__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__38366,chunk__38367,count__38368,i__38369,map__38377,map__38377__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__38366,chunk__38367,count__38368,i__38369,map__38377,map__38377__$1,effect,ms,dispatch))
,ms);
}


var G__38444 = seq__38366;
var G__38445 = chunk__38367;
var G__38446 = count__38368;
var G__38447 = (i__38369 + (1));
seq__38366 = G__38444;
chunk__38367 = G__38445;
count__38368 = G__38446;
i__38369 = G__38447;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38366);
if(temp__5735__auto__){
var seq__38366__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38366__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38366__$1);
var G__38451 = cljs.core.chunk_rest(seq__38366__$1);
var G__38452 = c__4550__auto__;
var G__38453 = cljs.core.count(c__4550__auto__);
var G__38454 = (0);
seq__38366 = G__38451;
chunk__38367 = G__38452;
count__38368 = G__38453;
i__38369 = G__38454;
continue;
} else {
var map__38380 = cljs.core.first(seq__38366__$1);
var map__38380__$1 = (((((!((map__38380 == null))))?(((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38380):map__38380);
var effect = map__38380__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__38366,chunk__38367,count__38368,i__38369,map__38380,map__38380__$1,effect,ms,dispatch,seq__38366__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__38366,chunk__38367,count__38368,i__38369,map__38380,map__38380__$1,effect,ms,dispatch,seq__38366__$1,temp__5735__auto__))
,ms);
}


var G__38455 = cljs.core.next(seq__38366__$1);
var G__38456 = null;
var G__38457 = (0);
var G__38458 = (0);
seq__38366 = G__38455;
chunk__38367 = G__38456;
count__38368 = G__38457;
i__38369 = G__38458;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__38386 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38387 = null;
var count__38388 = (0);
var i__38389 = (0);
while(true){
if((i__38389 < count__38388)){
var event = chunk__38387.cljs$core$IIndexed$_nth$arity$2(null,i__38389);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__38459 = seq__38386;
var G__38460 = chunk__38387;
var G__38461 = count__38388;
var G__38462 = (i__38389 + (1));
seq__38386 = G__38459;
chunk__38387 = G__38460;
count__38388 = G__38461;
i__38389 = G__38462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38386);
if(temp__5735__auto__){
var seq__38386__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38386__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38386__$1);
var G__38463 = cljs.core.chunk_rest(seq__38386__$1);
var G__38464 = c__4550__auto__;
var G__38465 = cljs.core.count(c__4550__auto__);
var G__38466 = (0);
seq__38386 = G__38463;
chunk__38387 = G__38464;
count__38388 = G__38465;
i__38389 = G__38466;
continue;
} else {
var event = cljs.core.first(seq__38386__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__38469 = cljs.core.next(seq__38386__$1);
var G__38470 = null;
var G__38471 = (0);
var G__38472 = (0);
seq__38386 = G__38469;
chunk__38387 = G__38470;
count__38388 = G__38471;
i__38389 = G__38472;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38406 = cljs.core.seq(value);
var chunk__38407 = null;
var count__38408 = (0);
var i__38409 = (0);
while(true){
if((i__38409 < count__38408)){
var event = chunk__38407.cljs$core$IIndexed$_nth$arity$2(null,i__38409);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38473 = seq__38406;
var G__38474 = chunk__38407;
var G__38475 = count__38408;
var G__38476 = (i__38409 + (1));
seq__38406 = G__38473;
chunk__38407 = G__38474;
count__38408 = G__38475;
i__38409 = G__38476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38406);
if(temp__5735__auto__){
var seq__38406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38406__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38406__$1);
var G__38479 = cljs.core.chunk_rest(seq__38406__$1);
var G__38480 = c__4550__auto__;
var G__38481 = cljs.core.count(c__4550__auto__);
var G__38482 = (0);
seq__38406 = G__38479;
chunk__38407 = G__38480;
count__38408 = G__38481;
i__38409 = G__38482;
continue;
} else {
var event = cljs.core.first(seq__38406__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38483 = cljs.core.next(seq__38406__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__38406 = G__38483;
chunk__38407 = G__38484;
count__38408 = G__38485;
i__38409 = G__38486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.js.map
