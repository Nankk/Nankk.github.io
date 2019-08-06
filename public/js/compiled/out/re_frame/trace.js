// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34002){
var map__34003 = p__34002;
var map__34003__$1 = (((((!((map__34003 == null))))?(((((map__34003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34003):map__34003);
var operation = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__34005_34025 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34006_34026 = null;
var count__34007_34027 = (0);
var i__34008_34028 = (0);
while(true){
if((i__34008_34028 < count__34007_34027)){
var vec__34017_34029 = cljs.core._nth.call(null,chunk__34006_34026,i__34008_34028);
var k_34030 = cljs.core.nth.call(null,vec__34017_34029,(0),null);
var cb_34031 = cljs.core.nth.call(null,vec__34017_34029,(1),null);
try{cb_34031.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34020){var e_34032 = e34020;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34030,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34032);
}

var G__34033 = seq__34005_34025;
var G__34034 = chunk__34006_34026;
var G__34035 = count__34007_34027;
var G__34036 = (i__34008_34028 + (1));
seq__34005_34025 = G__34033;
chunk__34006_34026 = G__34034;
count__34007_34027 = G__34035;
i__34008_34028 = G__34036;
continue;
} else {
var temp__5735__auto___34037 = cljs.core.seq.call(null,seq__34005_34025);
if(temp__5735__auto___34037){
var seq__34005_34038__$1 = temp__5735__auto___34037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34005_34038__$1)){
var c__4550__auto___34039 = cljs.core.chunk_first.call(null,seq__34005_34038__$1);
var G__34040 = cljs.core.chunk_rest.call(null,seq__34005_34038__$1);
var G__34041 = c__4550__auto___34039;
var G__34042 = cljs.core.count.call(null,c__4550__auto___34039);
var G__34043 = (0);
seq__34005_34025 = G__34040;
chunk__34006_34026 = G__34041;
count__34007_34027 = G__34042;
i__34008_34028 = G__34043;
continue;
} else {
var vec__34021_34044 = cljs.core.first.call(null,seq__34005_34038__$1);
var k_34045 = cljs.core.nth.call(null,vec__34021_34044,(0),null);
var cb_34046 = cljs.core.nth.call(null,vec__34021_34044,(1),null);
try{cb_34046.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34024){var e_34047 = e34024;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34045,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34047);
}

var G__34048 = cljs.core.next.call(null,seq__34005_34038__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__34005_34025 = G__34048;
chunk__34006_34026 = G__34049;
count__34007_34027 = G__34050;
i__34008_34028 = G__34051;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1563379454874
