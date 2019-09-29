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
var _STAR_current_trace_STAR__orig_val__38149 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38150 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38150;

try{try{var seq__38153 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38154 = null;
var count__38155 = (0);
var i__38156 = (0);
while(true){
if((i__38156 < count__38155)){
var vec__38164 = chunk__38154.cljs$core$IIndexed$_nth$arity$2(null,i__38156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(1),null);
var temp__5733__auto___38269 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38269)){
var effect_fn_38270 = temp__5733__auto___38269;
(effect_fn_38270.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38270.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38270.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38271 = seq__38153;
var G__38272 = chunk__38154;
var G__38273 = count__38155;
var G__38274 = (i__38156 + (1));
seq__38153 = G__38271;
chunk__38154 = G__38272;
count__38155 = G__38273;
i__38156 = G__38274;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38153);
if(temp__5735__auto__){
var seq__38153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38153__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38153__$1);
var G__38275 = cljs.core.chunk_rest(seq__38153__$1);
var G__38276 = c__4550__auto__;
var G__38277 = cljs.core.count(c__4550__auto__);
var G__38278 = (0);
seq__38153 = G__38275;
chunk__38154 = G__38276;
count__38155 = G__38277;
i__38156 = G__38278;
continue;
} else {
var vec__38167 = cljs.core.first(seq__38153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(1),null);
var temp__5733__auto___38279 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38279)){
var effect_fn_38280 = temp__5733__auto___38279;
(effect_fn_38280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38280.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38281 = cljs.core.next(seq__38153__$1);
var G__38282 = null;
var G__38283 = (0);
var G__38284 = (0);
seq__38153 = G__38281;
chunk__38154 = G__38282;
count__38155 = G__38283;
i__38156 = G__38284;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__37902__auto___38285 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__37903__auto___38286 = (end__37902__auto___38285 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37903__auto___38286,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__37902__auto___38285);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38149;
}} else {
var seq__38170 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38171 = null;
var count__38172 = (0);
var i__38173 = (0);
while(true){
if((i__38173 < count__38172)){
var vec__38206 = chunk__38171.cljs$core$IIndexed$_nth$arity$2(null,i__38173);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(1),null);
var temp__5733__auto___38287 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38287)){
var effect_fn_38288 = temp__5733__auto___38287;
(effect_fn_38288.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38288.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38288.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38297 = seq__38170;
var G__38298 = chunk__38171;
var G__38299 = count__38172;
var G__38300 = (i__38173 + (1));
seq__38170 = G__38297;
chunk__38171 = G__38298;
count__38172 = G__38299;
i__38173 = G__38300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38170);
if(temp__5735__auto__){
var seq__38170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38170__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38170__$1);
var G__38303 = cljs.core.chunk_rest(seq__38170__$1);
var G__38304 = c__4550__auto__;
var G__38305 = cljs.core.count(c__4550__auto__);
var G__38306 = (0);
seq__38170 = G__38303;
chunk__38171 = G__38304;
count__38172 = G__38305;
i__38173 = G__38306;
continue;
} else {
var vec__38211 = cljs.core.first(seq__38170__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(1),null);
var temp__5733__auto___38307 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38307)){
var effect_fn_38308 = temp__5733__auto___38307;
(effect_fn_38308.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38308.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38308.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38309 = cljs.core.next(seq__38170__$1);
var G__38310 = null;
var G__38311 = (0);
var G__38312 = (0);
seq__38170 = G__38309;
chunk__38171 = G__38310;
count__38172 = G__38311;
i__38173 = G__38312;
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
var seq__38219 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38220 = null;
var count__38221 = (0);
var i__38222 = (0);
while(true){
if((i__38222 < count__38221)){
var map__38235 = chunk__38220.cljs$core$IIndexed$_nth$arity$2(null,i__38222);
var map__38235__$1 = (((((!((map__38235 == null))))?(((((map__38235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38235):map__38235);
var effect = map__38235__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__38219,chunk__38220,count__38221,i__38222,map__38235,map__38235__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__38219,chunk__38220,count__38221,i__38222,map__38235,map__38235__$1,effect,ms,dispatch))
,ms);
}


var G__38313 = seq__38219;
var G__38314 = chunk__38220;
var G__38315 = count__38221;
var G__38316 = (i__38222 + (1));
seq__38219 = G__38313;
chunk__38220 = G__38314;
count__38221 = G__38315;
i__38222 = G__38316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38219);
if(temp__5735__auto__){
var seq__38219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38219__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38219__$1);
var G__38317 = cljs.core.chunk_rest(seq__38219__$1);
var G__38318 = c__4550__auto__;
var G__38319 = cljs.core.count(c__4550__auto__);
var G__38320 = (0);
seq__38219 = G__38317;
chunk__38220 = G__38318;
count__38221 = G__38319;
i__38222 = G__38320;
continue;
} else {
var map__38240 = cljs.core.first(seq__38219__$1);
var map__38240__$1 = (((((!((map__38240 == null))))?(((((map__38240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38240):map__38240);
var effect = map__38240__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38240__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38240__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__38219,chunk__38220,count__38221,i__38222,map__38240,map__38240__$1,effect,ms,dispatch,seq__38219__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__38219,chunk__38220,count__38221,i__38222,map__38240,map__38240__$1,effect,ms,dispatch,seq__38219__$1,temp__5735__auto__))
,ms);
}


var G__38321 = cljs.core.next(seq__38219__$1);
var G__38322 = null;
var G__38323 = (0);
var G__38324 = (0);
seq__38219 = G__38321;
chunk__38220 = G__38322;
count__38221 = G__38323;
i__38222 = G__38324;
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
var seq__38246 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38247 = null;
var count__38248 = (0);
var i__38249 = (0);
while(true){
if((i__38249 < count__38248)){
var event = chunk__38247.cljs$core$IIndexed$_nth$arity$2(null,i__38249);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__38329 = seq__38246;
var G__38330 = chunk__38247;
var G__38331 = count__38248;
var G__38332 = (i__38249 + (1));
seq__38246 = G__38329;
chunk__38247 = G__38330;
count__38248 = G__38331;
i__38249 = G__38332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38246);
if(temp__5735__auto__){
var seq__38246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38246__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38246__$1);
var G__38333 = cljs.core.chunk_rest(seq__38246__$1);
var G__38334 = c__4550__auto__;
var G__38335 = cljs.core.count(c__4550__auto__);
var G__38336 = (0);
seq__38246 = G__38333;
chunk__38247 = G__38334;
count__38248 = G__38335;
i__38249 = G__38336;
continue;
} else {
var event = cljs.core.first(seq__38246__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__38337 = cljs.core.next(seq__38246__$1);
var G__38338 = null;
var G__38339 = (0);
var G__38340 = (0);
seq__38246 = G__38337;
chunk__38247 = G__38338;
count__38248 = G__38339;
i__38249 = G__38340;
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
var seq__38259 = cljs.core.seq(value);
var chunk__38260 = null;
var count__38261 = (0);
var i__38262 = (0);
while(true){
if((i__38262 < count__38261)){
var event = chunk__38260.cljs$core$IIndexed$_nth$arity$2(null,i__38262);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38341 = seq__38259;
var G__38342 = chunk__38260;
var G__38343 = count__38261;
var G__38344 = (i__38262 + (1));
seq__38259 = G__38341;
chunk__38260 = G__38342;
count__38261 = G__38343;
i__38262 = G__38344;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38259);
if(temp__5735__auto__){
var seq__38259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38259__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38259__$1);
var G__38345 = cljs.core.chunk_rest(seq__38259__$1);
var G__38346 = c__4550__auto__;
var G__38347 = cljs.core.count(c__4550__auto__);
var G__38348 = (0);
seq__38259 = G__38345;
chunk__38260 = G__38346;
count__38261 = G__38347;
i__38262 = G__38348;
continue;
} else {
var event = cljs.core.first(seq__38259__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38349 = cljs.core.next(seq__38259__$1);
var G__38350 = null;
var G__38351 = (0);
var G__38352 = (0);
seq__38259 = G__38349;
chunk__38260 = G__38350;
count__38261 = G__38351;
i__38262 = G__38352;
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
