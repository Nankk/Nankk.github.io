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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4132){
var map__4133 = p__4132;
var map__4133__$1 = (((((!((map__4133 == null))))?(((((map__4133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4133):map__4133);
var operation = cljs.core.get.call(null,map__4133__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__4133__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__4133__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__4133__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__4135_4155 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__4136_4156 = null;
var count__4137_4157 = (0);
var i__4138_4158 = (0);
while(true){
if((i__4138_4158 < count__4137_4157)){
var vec__4147_4159 = cljs.core._nth.call(null,chunk__4136_4156,i__4138_4158);
var k_4160 = cljs.core.nth.call(null,vec__4147_4159,(0),null);
var cb_4161 = cljs.core.nth.call(null,vec__4147_4159,(1),null);
try{cb_4161.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e4150){var e_4162 = e4150;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_4160,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_4162);
}

var G__4163 = seq__4135_4155;
var G__4164 = chunk__4136_4156;
var G__4165 = count__4137_4157;
var G__4166 = (i__4138_4158 + (1));
seq__4135_4155 = G__4163;
chunk__4136_4156 = G__4164;
count__4137_4157 = G__4165;
i__4138_4158 = G__4166;
continue;
} else {
var temp__5735__auto___4167 = cljs.core.seq.call(null,seq__4135_4155);
if(temp__5735__auto___4167){
var seq__4135_4168__$1 = temp__5735__auto___4167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4135_4168__$1)){
var c__4550__auto___4169 = cljs.core.chunk_first.call(null,seq__4135_4168__$1);
var G__4170 = cljs.core.chunk_rest.call(null,seq__4135_4168__$1);
var G__4171 = c__4550__auto___4169;
var G__4172 = cljs.core.count.call(null,c__4550__auto___4169);
var G__4173 = (0);
seq__4135_4155 = G__4170;
chunk__4136_4156 = G__4171;
count__4137_4157 = G__4172;
i__4138_4158 = G__4173;
continue;
} else {
var vec__4151_4174 = cljs.core.first.call(null,seq__4135_4168__$1);
var k_4175 = cljs.core.nth.call(null,vec__4151_4174,(0),null);
var cb_4176 = cljs.core.nth.call(null,vec__4151_4174,(1),null);
try{cb_4176.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e4154){var e_4177 = e4154;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_4175,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_4177);
}

var G__4178 = cljs.core.next.call(null,seq__4135_4168__$1);
var G__4179 = null;
var G__4180 = (0);
var G__4181 = (0);
seq__4135_4155 = G__4178;
chunk__4136_4156 = G__4179;
count__4137_4157 = G__4180;
i__4138_4158 = G__4181;
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

//# sourceMappingURL=trace.js.map
