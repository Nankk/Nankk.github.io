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
var _STAR_current_trace_STAR__orig_val__34151 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34152 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34152;

try{try{var seq__34153 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34154 = null;
var count__34155 = (0);
var i__34156 = (0);
while(true){
if((i__34156 < count__34155)){
var vec__34163 = cljs.core._nth.call(null,chunk__34154,i__34156);
var effect_key = cljs.core.nth.call(null,vec__34163,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34163,(1),null);
var temp__5733__auto___34185 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34185)){
var effect_fn_34186 = temp__5733__auto___34185;
effect_fn_34186.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34187 = seq__34153;
var G__34188 = chunk__34154;
var G__34189 = count__34155;
var G__34190 = (i__34156 + (1));
seq__34153 = G__34187;
chunk__34154 = G__34188;
count__34155 = G__34189;
i__34156 = G__34190;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34153);
if(temp__5735__auto__){
var seq__34153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34153__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34153__$1);
var G__34191 = cljs.core.chunk_rest.call(null,seq__34153__$1);
var G__34192 = c__4550__auto__;
var G__34193 = cljs.core.count.call(null,c__4550__auto__);
var G__34194 = (0);
seq__34153 = G__34191;
chunk__34154 = G__34192;
count__34155 = G__34193;
i__34156 = G__34194;
continue;
} else {
var vec__34166 = cljs.core.first.call(null,seq__34153__$1);
var effect_key = cljs.core.nth.call(null,vec__34166,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34166,(1),null);
var temp__5733__auto___34195 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34195)){
var effect_fn_34196 = temp__5733__auto___34195;
effect_fn_34196.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34197 = cljs.core.next.call(null,seq__34153__$1);
var G__34198 = null;
var G__34199 = (0);
var G__34200 = (0);
seq__34153 = G__34197;
chunk__34154 = G__34198;
count__34155 = G__34199;
i__34156 = G__34200;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33980__auto___34201 = re_frame.interop.now.call(null);
var duration__33981__auto___34202 = (end__33980__auto___34201 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33981__auto___34202,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33980__auto___34201);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34151;
}} else {
var seq__34169 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34170 = null;
var count__34171 = (0);
var i__34172 = (0);
while(true){
if((i__34172 < count__34171)){
var vec__34179 = cljs.core._nth.call(null,chunk__34170,i__34172);
var effect_key = cljs.core.nth.call(null,vec__34179,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34179,(1),null);
var temp__5733__auto___34203 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34203)){
var effect_fn_34204 = temp__5733__auto___34203;
effect_fn_34204.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34205 = seq__34169;
var G__34206 = chunk__34170;
var G__34207 = count__34171;
var G__34208 = (i__34172 + (1));
seq__34169 = G__34205;
chunk__34170 = G__34206;
count__34171 = G__34207;
i__34172 = G__34208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34169);
if(temp__5735__auto__){
var seq__34169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34169__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34169__$1);
var G__34209 = cljs.core.chunk_rest.call(null,seq__34169__$1);
var G__34210 = c__4550__auto__;
var G__34211 = cljs.core.count.call(null,c__4550__auto__);
var G__34212 = (0);
seq__34169 = G__34209;
chunk__34170 = G__34210;
count__34171 = G__34211;
i__34172 = G__34212;
continue;
} else {
var vec__34182 = cljs.core.first.call(null,seq__34169__$1);
var effect_key = cljs.core.nth.call(null,vec__34182,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34182,(1),null);
var temp__5733__auto___34213 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34213)){
var effect_fn_34214 = temp__5733__auto___34213;
effect_fn_34214.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34215 = cljs.core.next.call(null,seq__34169__$1);
var G__34216 = null;
var G__34217 = (0);
var G__34218 = (0);
seq__34169 = G__34215;
chunk__34170 = G__34216;
count__34171 = G__34217;
i__34172 = G__34218;
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
var seq__34219 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34220 = null;
var count__34221 = (0);
var i__34222 = (0);
while(true){
if((i__34222 < count__34221)){
var map__34227 = cljs.core._nth.call(null,chunk__34220,i__34222);
var map__34227__$1 = (((((!((map__34227 == null))))?(((((map__34227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34227):map__34227);
var effect = map__34227__$1;
var ms = cljs.core.get.call(null,map__34227__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34227__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34219,chunk__34220,count__34221,i__34222,map__34227,map__34227__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34219,chunk__34220,count__34221,i__34222,map__34227,map__34227__$1,effect,ms,dispatch))
,ms);
}


var G__34231 = seq__34219;
var G__34232 = chunk__34220;
var G__34233 = count__34221;
var G__34234 = (i__34222 + (1));
seq__34219 = G__34231;
chunk__34220 = G__34232;
count__34221 = G__34233;
i__34222 = G__34234;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34219);
if(temp__5735__auto__){
var seq__34219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34219__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34219__$1);
var G__34235 = cljs.core.chunk_rest.call(null,seq__34219__$1);
var G__34236 = c__4550__auto__;
var G__34237 = cljs.core.count.call(null,c__4550__auto__);
var G__34238 = (0);
seq__34219 = G__34235;
chunk__34220 = G__34236;
count__34221 = G__34237;
i__34222 = G__34238;
continue;
} else {
var map__34229 = cljs.core.first.call(null,seq__34219__$1);
var map__34229__$1 = (((((!((map__34229 == null))))?(((((map__34229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34229):map__34229);
var effect = map__34229__$1;
var ms = cljs.core.get.call(null,map__34229__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34229__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34219,chunk__34220,count__34221,i__34222,map__34229,map__34229__$1,effect,ms,dispatch,seq__34219__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34219,chunk__34220,count__34221,i__34222,map__34229,map__34229__$1,effect,ms,dispatch,seq__34219__$1,temp__5735__auto__))
,ms);
}


var G__34239 = cljs.core.next.call(null,seq__34219__$1);
var G__34240 = null;
var G__34241 = (0);
var G__34242 = (0);
seq__34219 = G__34239;
chunk__34220 = G__34240;
count__34221 = G__34241;
i__34222 = G__34242;
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
var seq__34243 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34244 = null;
var count__34245 = (0);
var i__34246 = (0);
while(true){
if((i__34246 < count__34245)){
var event = cljs.core._nth.call(null,chunk__34244,i__34246);
re_frame.router.dispatch.call(null,event);


var G__34247 = seq__34243;
var G__34248 = chunk__34244;
var G__34249 = count__34245;
var G__34250 = (i__34246 + (1));
seq__34243 = G__34247;
chunk__34244 = G__34248;
count__34245 = G__34249;
i__34246 = G__34250;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34243);
if(temp__5735__auto__){
var seq__34243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34243__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34243__$1);
var G__34251 = cljs.core.chunk_rest.call(null,seq__34243__$1);
var G__34252 = c__4550__auto__;
var G__34253 = cljs.core.count.call(null,c__4550__auto__);
var G__34254 = (0);
seq__34243 = G__34251;
chunk__34244 = G__34252;
count__34245 = G__34253;
i__34246 = G__34254;
continue;
} else {
var event = cljs.core.first.call(null,seq__34243__$1);
re_frame.router.dispatch.call(null,event);


var G__34255 = cljs.core.next.call(null,seq__34243__$1);
var G__34256 = null;
var G__34257 = (0);
var G__34258 = (0);
seq__34243 = G__34255;
chunk__34244 = G__34256;
count__34245 = G__34257;
i__34246 = G__34258;
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
var seq__34259 = cljs.core.seq.call(null,value);
var chunk__34260 = null;
var count__34261 = (0);
var i__34262 = (0);
while(true){
if((i__34262 < count__34261)){
var event = cljs.core._nth.call(null,chunk__34260,i__34262);
clear_event.call(null,event);


var G__34263 = seq__34259;
var G__34264 = chunk__34260;
var G__34265 = count__34261;
var G__34266 = (i__34262 + (1));
seq__34259 = G__34263;
chunk__34260 = G__34264;
count__34261 = G__34265;
i__34262 = G__34266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34259);
if(temp__5735__auto__){
var seq__34259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34259__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34259__$1);
var G__34267 = cljs.core.chunk_rest.call(null,seq__34259__$1);
var G__34268 = c__4550__auto__;
var G__34269 = cljs.core.count.call(null,c__4550__auto__);
var G__34270 = (0);
seq__34259 = G__34267;
chunk__34260 = G__34268;
count__34261 = G__34269;
i__34262 = G__34270;
continue;
} else {
var event = cljs.core.first.call(null,seq__34259__$1);
clear_event.call(null,event);


var G__34271 = cljs.core.next.call(null,seq__34259__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__34259 = G__34271;
chunk__34260 = G__34272;
count__34261 = G__34273;
i__34262 = G__34274;
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

//# sourceMappingURL=fx.js.map?rel=1563379455166
