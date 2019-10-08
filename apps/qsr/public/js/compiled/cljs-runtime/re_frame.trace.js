goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__42722){
var map__42723 = p__42722;
var map__42723__$1 = (((((!((map__42723 == null))))?(((((map__42723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42723):map__42723);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42723__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__42725_42752 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__42726_42753 = null;
var count__42727_42754 = (0);
var i__42728_42755 = (0);
while(true){
if((i__42728_42755 < count__42727_42754)){
var vec__42739_42756 = chunk__42726_42753.cljs$core$IIndexed$_nth$arity$2(null,i__42728_42755);
var k_42757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42739_42756,(0),null);
var cb_42758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42739_42756,(1),null);
try{var G__42743_42759 = cljs.core.deref(re_frame.trace.traces);
(cb_42758.cljs$core$IFn$_invoke$arity$1 ? cb_42758.cljs$core$IFn$_invoke$arity$1(G__42743_42759) : cb_42758.call(null,G__42743_42759));
}catch (e42742){var e_42760 = e42742;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42757,"while storing",cljs.core.deref(re_frame.trace.traces),e_42760], 0));
}

var G__42761 = seq__42725_42752;
var G__42762 = chunk__42726_42753;
var G__42763 = count__42727_42754;
var G__42764 = (i__42728_42755 + (1));
seq__42725_42752 = G__42761;
chunk__42726_42753 = G__42762;
count__42727_42754 = G__42763;
i__42728_42755 = G__42764;
continue;
} else {
var temp__5735__auto___42765 = cljs.core.seq(seq__42725_42752);
if(temp__5735__auto___42765){
var seq__42725_42766__$1 = temp__5735__auto___42765;
if(cljs.core.chunked_seq_QMARK_(seq__42725_42766__$1)){
var c__4550__auto___42767 = cljs.core.chunk_first(seq__42725_42766__$1);
var G__42768 = cljs.core.chunk_rest(seq__42725_42766__$1);
var G__42769 = c__4550__auto___42767;
var G__42770 = cljs.core.count(c__4550__auto___42767);
var G__42771 = (0);
seq__42725_42752 = G__42768;
chunk__42726_42753 = G__42769;
count__42727_42754 = G__42770;
i__42728_42755 = G__42771;
continue;
} else {
var vec__42744_42772 = cljs.core.first(seq__42725_42766__$1);
var k_42773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42744_42772,(0),null);
var cb_42774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42744_42772,(1),null);
try{var G__42748_42775 = cljs.core.deref(re_frame.trace.traces);
(cb_42774.cljs$core$IFn$_invoke$arity$1 ? cb_42774.cljs$core$IFn$_invoke$arity$1(G__42748_42775) : cb_42774.call(null,G__42748_42775));
}catch (e42747){var e_42776 = e42747;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42773,"while storing",cljs.core.deref(re_frame.trace.traces),e_42776], 0));
}

var G__42777 = cljs.core.next(seq__42725_42766__$1);
var G__42778 = null;
var G__42779 = (0);
var G__42780 = (0);
seq__42725_42752 = G__42777;
chunk__42726_42753 = G__42778;
count__42727_42754 = G__42779;
i__42728_42755 = G__42780;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
