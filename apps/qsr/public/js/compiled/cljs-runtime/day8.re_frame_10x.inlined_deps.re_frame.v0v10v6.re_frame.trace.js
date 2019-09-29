goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$start_trace(p__37922){
var map__37923 = p__37922;
var map__37923__$1 = (((((!((map__37923 == null))))?(((((map__37923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37923):map__37923);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__37925_37952 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__37926_37953 = null;
var count__37927_37954 = (0);
var i__37928_37955 = (0);
while(true){
if((i__37928_37955 < count__37927_37954)){
var vec__37939_37956 = chunk__37926_37953.cljs$core$IIndexed$_nth$arity$2(null,i__37928_37955);
var k_37957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939_37956,(0),null);
var cb_37958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939_37956,(1),null);
try{var G__37943_37959 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces);
(cb_37958.cljs$core$IFn$_invoke$arity$1 ? cb_37958.cljs$core$IFn$_invoke$arity$1(G__37943_37959) : cb_37958.call(null,G__37943_37959));
}catch (e37942){var e_37960 = e37942;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37957,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_37960], 0));
}

var G__37961 = seq__37925_37952;
var G__37962 = chunk__37926_37953;
var G__37963 = count__37927_37954;
var G__37964 = (i__37928_37955 + (1));
seq__37925_37952 = G__37961;
chunk__37926_37953 = G__37962;
count__37927_37954 = G__37963;
i__37928_37955 = G__37964;
continue;
} else {
var temp__5735__auto___37965 = cljs.core.seq(seq__37925_37952);
if(temp__5735__auto___37965){
var seq__37925_37966__$1 = temp__5735__auto___37965;
if(cljs.core.chunked_seq_QMARK_(seq__37925_37966__$1)){
var c__4550__auto___37967 = cljs.core.chunk_first(seq__37925_37966__$1);
var G__37968 = cljs.core.chunk_rest(seq__37925_37966__$1);
var G__37969 = c__4550__auto___37967;
var G__37970 = cljs.core.count(c__4550__auto___37967);
var G__37971 = (0);
seq__37925_37952 = G__37968;
chunk__37926_37953 = G__37969;
count__37927_37954 = G__37970;
i__37928_37955 = G__37971;
continue;
} else {
var vec__37944_37972 = cljs.core.first(seq__37925_37966__$1);
var k_37973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37944_37972,(0),null);
var cb_37974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37944_37972,(1),null);
try{var G__37948_37975 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces);
(cb_37974.cljs$core$IFn$_invoke$arity$1 ? cb_37974.cljs$core$IFn$_invoke$arity$1(G__37948_37975) : cb_37974.call(null,G__37948_37975));
}catch (e37947){var e_37976 = e37947;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37973,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_37976], 0));
}

var G__37977 = cljs.core.next(seq__37925_37966__$1);
var G__37978 = null;
var G__37979 = (0);
var G__37980 = (0);
seq__37925_37952 = G__37977;
chunk__37926_37953 = G__37978;
count__37927_37954 = G__37979;
i__37928_37955 = G__37980;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.js.map
