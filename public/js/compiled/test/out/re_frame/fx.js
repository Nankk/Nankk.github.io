// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__4281 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4282 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4282;

try{try{var seq__4283 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__4284 = null;
var count__4285 = (0);
var i__4286 = (0);
while(true){
if((i__4286 < count__4285)){
var vec__4293 = cljs.core._nth.call(null,chunk__4284,i__4286);
var effect_key = cljs.core.nth.call(null,vec__4293,(0),null);
var effect_value = cljs.core.nth.call(null,vec__4293,(1),null);
var temp__5733__auto___4315 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___4315)){
var effect_fn_4316 = temp__5733__auto___4315;
effect_fn_4316.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__4317 = seq__4283;
var G__4318 = chunk__4284;
var G__4319 = count__4285;
var G__4320 = (i__4286 + (1));
seq__4283 = G__4317;
chunk__4284 = G__4318;
count__4285 = G__4319;
i__4286 = G__4320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4283);
if(temp__5735__auto__){
var seq__4283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4283__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4283__$1);
var G__4321 = cljs.core.chunk_rest.call(null,seq__4283__$1);
var G__4322 = c__4550__auto__;
var G__4323 = cljs.core.count.call(null,c__4550__auto__);
var G__4324 = (0);
seq__4283 = G__4321;
chunk__4284 = G__4322;
count__4285 = G__4323;
i__4286 = G__4324;
continue;
} else {
var vec__4296 = cljs.core.first.call(null,seq__4283__$1);
var effect_key = cljs.core.nth.call(null,vec__4296,(0),null);
var effect_value = cljs.core.nth.call(null,vec__4296,(1),null);
var temp__5733__auto___4325 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___4325)){
var effect_fn_4326 = temp__5733__auto___4325;
effect_fn_4326.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__4327 = cljs.core.next.call(null,seq__4283__$1);
var G__4328 = null;
var G__4329 = (0);
var G__4330 = (0);
seq__4283 = G__4327;
chunk__4284 = G__4328;
count__4285 = G__4329;
i__4286 = G__4330;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__4110__auto___4331 = re_frame.interop.now.call(null);
var duration__4111__auto___4332 = (end__4110__auto___4331 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__4111__auto___4332,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__4110__auto___4331);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4281;
}} else {
var seq__4299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__4300 = null;
var count__4301 = (0);
var i__4302 = (0);
while(true){
if((i__4302 < count__4301)){
var vec__4309 = cljs.core._nth.call(null,chunk__4300,i__4302);
var effect_key = cljs.core.nth.call(null,vec__4309,(0),null);
var effect_value = cljs.core.nth.call(null,vec__4309,(1),null);
var temp__5733__auto___4333 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___4333)){
var effect_fn_4334 = temp__5733__auto___4333;
effect_fn_4334.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__4335 = seq__4299;
var G__4336 = chunk__4300;
var G__4337 = count__4301;
var G__4338 = (i__4302 + (1));
seq__4299 = G__4335;
chunk__4300 = G__4336;
count__4301 = G__4337;
i__4302 = G__4338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4299);
if(temp__5735__auto__){
var seq__4299__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4299__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4299__$1);
var G__4339 = cljs.core.chunk_rest.call(null,seq__4299__$1);
var G__4340 = c__4550__auto__;
var G__4341 = cljs.core.count.call(null,c__4550__auto__);
var G__4342 = (0);
seq__4299 = G__4339;
chunk__4300 = G__4340;
count__4301 = G__4341;
i__4302 = G__4342;
continue;
} else {
var vec__4312 = cljs.core.first.call(null,seq__4299__$1);
var effect_key = cljs.core.nth.call(null,vec__4312,(0),null);
var effect_value = cljs.core.nth.call(null,vec__4312,(1),null);
var temp__5733__auto___4343 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___4343)){
var effect_fn_4344 = temp__5733__auto___4343;
effect_fn_4344.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__4345 = cljs.core.next.call(null,seq__4299__$1);
var G__4346 = null;
var G__4347 = (0);
var G__4348 = (0);
seq__4299 = G__4345;
chunk__4300 = G__4346;
count__4301 = G__4347;
i__4302 = G__4348;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__4349 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__4350 = null;
var count__4351 = (0);
var i__4352 = (0);
while(true){
if((i__4352 < count__4351)){
var map__4357 = cljs.core._nth.call(null,chunk__4350,i__4352);
var map__4357__$1 = (((((!((map__4357 == null))))?(((((map__4357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4357):map__4357);
var effect = map__4357__$1;
var ms = cljs.core.get.call(null,map__4357__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__4357__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__4349,chunk__4350,count__4351,i__4352,map__4357,map__4357__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__4349,chunk__4350,count__4351,i__4352,map__4357,map__4357__$1,effect,ms,dispatch))
,ms);
}


var G__4361 = seq__4349;
var G__4362 = chunk__4350;
var G__4363 = count__4351;
var G__4364 = (i__4352 + (1));
seq__4349 = G__4361;
chunk__4350 = G__4362;
count__4351 = G__4363;
i__4352 = G__4364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4349);
if(temp__5735__auto__){
var seq__4349__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4349__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4349__$1);
var G__4365 = cljs.core.chunk_rest.call(null,seq__4349__$1);
var G__4366 = c__4550__auto__;
var G__4367 = cljs.core.count.call(null,c__4550__auto__);
var G__4368 = (0);
seq__4349 = G__4365;
chunk__4350 = G__4366;
count__4351 = G__4367;
i__4352 = G__4368;
continue;
} else {
var map__4359 = cljs.core.first.call(null,seq__4349__$1);
var map__4359__$1 = (((((!((map__4359 == null))))?(((((map__4359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4359):map__4359);
var effect = map__4359__$1;
var ms = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__4349,chunk__4350,count__4351,i__4352,map__4359,map__4359__$1,effect,ms,dispatch,seq__4349__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__4349,chunk__4350,count__4351,i__4352,map__4359,map__4359__$1,effect,ms,dispatch,seq__4349__$1,temp__5735__auto__))
,ms);
}


var G__4369 = cljs.core.next.call(null,seq__4349__$1);
var G__4370 = null;
var G__4371 = (0);
var G__4372 = (0);
seq__4349 = G__4369;
chunk__4350 = G__4370;
count__4351 = G__4371;
i__4352 = G__4372;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__4373 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__4374 = null;
var count__4375 = (0);
var i__4376 = (0);
while(true){
if((i__4376 < count__4375)){
var event = cljs.core._nth.call(null,chunk__4374,i__4376);
re_frame.router.dispatch.call(null,event);


var G__4377 = seq__4373;
var G__4378 = chunk__4374;
var G__4379 = count__4375;
var G__4380 = (i__4376 + (1));
seq__4373 = G__4377;
chunk__4374 = G__4378;
count__4375 = G__4379;
i__4376 = G__4380;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4373);
if(temp__5735__auto__){
var seq__4373__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4373__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4373__$1);
var G__4381 = cljs.core.chunk_rest.call(null,seq__4373__$1);
var G__4382 = c__4550__auto__;
var G__4383 = cljs.core.count.call(null,c__4550__auto__);
var G__4384 = (0);
seq__4373 = G__4381;
chunk__4374 = G__4382;
count__4375 = G__4383;
i__4376 = G__4384;
continue;
} else {
var event = cljs.core.first.call(null,seq__4373__$1);
re_frame.router.dispatch.call(null,event);


var G__4385 = cljs.core.next.call(null,seq__4373__$1);
var G__4386 = null;
var G__4387 = (0);
var G__4388 = (0);
seq__4373 = G__4385;
chunk__4374 = G__4386;
count__4375 = G__4387;
i__4376 = G__4388;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__4389 = cljs.core.seq.call(null,value);
var chunk__4390 = null;
var count__4391 = (0);
var i__4392 = (0);
while(true){
if((i__4392 < count__4391)){
var event = cljs.core._nth.call(null,chunk__4390,i__4392);
clear_event.call(null,event);


var G__4393 = seq__4389;
var G__4394 = chunk__4390;
var G__4395 = count__4391;
var G__4396 = (i__4392 + (1));
seq__4389 = G__4393;
chunk__4390 = G__4394;
count__4391 = G__4395;
i__4392 = G__4396;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4389);
if(temp__5735__auto__){
var seq__4389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4389__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4389__$1);
var G__4397 = cljs.core.chunk_rest.call(null,seq__4389__$1);
var G__4398 = c__4550__auto__;
var G__4399 = cljs.core.count.call(null,c__4550__auto__);
var G__4400 = (0);
seq__4389 = G__4397;
chunk__4390 = G__4398;
count__4391 = G__4399;
i__4392 = G__4400;
continue;
} else {
var event = cljs.core.first.call(null,seq__4389__$1);
clear_event.call(null,event);


var G__4401 = cljs.core.next.call(null,seq__4389__$1);
var G__4402 = null;
var G__4403 = (0);
var G__4404 = (0);
seq__4389 = G__4401;
chunk__4390 = G__4402;
count__4391 = G__4403;
i__4392 = G__4404;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
