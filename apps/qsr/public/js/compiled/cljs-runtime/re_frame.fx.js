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
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42781 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42782 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42782;

try{try{var seq__42783 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42784 = null;
var count__42785 = (0);
var i__42786 = (0);
while(true){
if((i__42786 < count__42785)){
var vec__42794 = chunk__42784.cljs$core$IIndexed$_nth$arity$2(null,i__42786);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42794,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42794,(1),null);
var temp__5733__auto___42856 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42856)){
var effect_fn_42857 = temp__5733__auto___42856;
(effect_fn_42857.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42857.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42857.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42858 = seq__42783;
var G__42859 = chunk__42784;
var G__42860 = count__42785;
var G__42861 = (i__42786 + (1));
seq__42783 = G__42858;
chunk__42784 = G__42859;
count__42785 = G__42860;
i__42786 = G__42861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42783);
if(temp__5735__auto__){
var seq__42783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42783__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42783__$1);
var G__42862 = cljs.core.chunk_rest(seq__42783__$1);
var G__42863 = c__4550__auto__;
var G__42864 = cljs.core.count(c__4550__auto__);
var G__42865 = (0);
seq__42783 = G__42862;
chunk__42784 = G__42863;
count__42785 = G__42864;
i__42786 = G__42865;
continue;
} else {
var vec__42799 = cljs.core.first(seq__42783__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799,(1),null);
var temp__5733__auto___42866 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42866)){
var effect_fn_42867 = temp__5733__auto___42866;
(effect_fn_42867.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42867.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42867.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42868 = cljs.core.next(seq__42783__$1);
var G__42869 = null;
var G__42870 = (0);
var G__42871 = (0);
seq__42783 = G__42868;
chunk__42784 = G__42869;
count__42785 = G__42870;
i__42786 = G__42871;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42525__auto___42872 = re_frame.interop.now();
var duration__42526__auto___42873 = (end__42525__auto___42872 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42526__auto___42873,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42525__auto___42872);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42781;
}} else {
var seq__42803 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42804 = null;
var count__42805 = (0);
var i__42806 = (0);
while(true){
if((i__42806 < count__42805)){
var vec__42814 = chunk__42804.cljs$core$IIndexed$_nth$arity$2(null,i__42806);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814,(1),null);
var temp__5733__auto___42881 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42881)){
var effect_fn_42882 = temp__5733__auto___42881;
(effect_fn_42882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42882.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42883 = seq__42803;
var G__42884 = chunk__42804;
var G__42885 = count__42805;
var G__42886 = (i__42806 + (1));
seq__42803 = G__42883;
chunk__42804 = G__42884;
count__42805 = G__42885;
i__42806 = G__42886;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42803);
if(temp__5735__auto__){
var seq__42803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42803__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42803__$1);
var G__42890 = cljs.core.chunk_rest(seq__42803__$1);
var G__42891 = c__4550__auto__;
var G__42892 = cljs.core.count(c__4550__auto__);
var G__42893 = (0);
seq__42803 = G__42890;
chunk__42804 = G__42891;
count__42805 = G__42892;
i__42806 = G__42893;
continue;
} else {
var vec__42817 = cljs.core.first(seq__42803__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42817,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42817,(1),null);
var temp__5733__auto___42894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42894)){
var effect_fn_42895 = temp__5733__auto___42894;
(effect_fn_42895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42895.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42896 = cljs.core.next(seq__42803__$1);
var G__42897 = null;
var G__42898 = (0);
var G__42899 = (0);
seq__42803 = G__42896;
chunk__42804 = G__42897;
count__42805 = G__42898;
i__42806 = G__42899;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__42820 = cljs.core.seq(value);
var chunk__42821 = null;
var count__42822 = (0);
var i__42823 = (0);
while(true){
if((i__42823 < count__42822)){
var map__42829 = chunk__42821.cljs$core$IIndexed$_nth$arity$2(null,i__42823);
var map__42829__$1 = (((((!((map__42829 == null))))?(((((map__42829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42829):map__42829);
var effect = map__42829__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42820,chunk__42821,count__42822,i__42823,map__42829,map__42829__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42820,chunk__42821,count__42822,i__42823,map__42829,map__42829__$1,effect,ms,dispatch))
,ms);
}


var G__42907 = seq__42820;
var G__42908 = chunk__42821;
var G__42909 = count__42822;
var G__42910 = (i__42823 + (1));
seq__42820 = G__42907;
chunk__42821 = G__42908;
count__42822 = G__42909;
i__42823 = G__42910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42820);
if(temp__5735__auto__){
var seq__42820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42820__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42820__$1);
var G__42914 = cljs.core.chunk_rest(seq__42820__$1);
var G__42915 = c__4550__auto__;
var G__42916 = cljs.core.count(c__4550__auto__);
var G__42917 = (0);
seq__42820 = G__42914;
chunk__42821 = G__42915;
count__42822 = G__42916;
i__42823 = G__42917;
continue;
} else {
var map__42833 = cljs.core.first(seq__42820__$1);
var map__42833__$1 = (((((!((map__42833 == null))))?(((((map__42833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42833):map__42833);
var effect = map__42833__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__42820,chunk__42821,count__42822,i__42823,map__42833,map__42833__$1,effect,ms,dispatch,seq__42820__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__42820,chunk__42821,count__42822,i__42823,map__42833,map__42833__$1,effect,ms,dispatch,seq__42820__$1,temp__5735__auto__))
,ms);
}


var G__42918 = cljs.core.next(seq__42820__$1);
var G__42919 = null;
var G__42920 = (0);
var G__42921 = (0);
seq__42820 = G__42918;
chunk__42821 = G__42919;
count__42822 = G__42920;
i__42823 = G__42921;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__42835 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42836 = null;
var count__42837 = (0);
var i__42838 = (0);
while(true){
if((i__42838 < count__42837)){
var event = chunk__42836.cljs$core$IIndexed$_nth$arity$2(null,i__42838);
re_frame.router.dispatch(event);


var G__42922 = seq__42835;
var G__42923 = chunk__42836;
var G__42924 = count__42837;
var G__42925 = (i__42838 + (1));
seq__42835 = G__42922;
chunk__42836 = G__42923;
count__42837 = G__42924;
i__42838 = G__42925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42835);
if(temp__5735__auto__){
var seq__42835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42835__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42835__$1);
var G__42927 = cljs.core.chunk_rest(seq__42835__$1);
var G__42928 = c__4550__auto__;
var G__42929 = cljs.core.count(c__4550__auto__);
var G__42930 = (0);
seq__42835 = G__42927;
chunk__42836 = G__42928;
count__42837 = G__42929;
i__42838 = G__42930;
continue;
} else {
var event = cljs.core.first(seq__42835__$1);
re_frame.router.dispatch(event);


var G__42931 = cljs.core.next(seq__42835__$1);
var G__42932 = null;
var G__42933 = (0);
var G__42934 = (0);
seq__42835 = G__42931;
chunk__42836 = G__42932;
count__42837 = G__42933;
i__42838 = G__42934;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__42840 = cljs.core.seq(value);
var chunk__42841 = null;
var count__42842 = (0);
var i__42843 = (0);
while(true){
if((i__42843 < count__42842)){
var event = chunk__42841.cljs$core$IIndexed$_nth$arity$2(null,i__42843);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42935 = seq__42840;
var G__42936 = chunk__42841;
var G__42937 = count__42842;
var G__42938 = (i__42843 + (1));
seq__42840 = G__42935;
chunk__42841 = G__42936;
count__42842 = G__42937;
i__42843 = G__42938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42840);
if(temp__5735__auto__){
var seq__42840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42840__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42840__$1);
var G__42939 = cljs.core.chunk_rest(seq__42840__$1);
var G__42940 = c__4550__auto__;
var G__42941 = cljs.core.count(c__4550__auto__);
var G__42942 = (0);
seq__42840 = G__42939;
chunk__42841 = G__42940;
count__42842 = G__42941;
i__42843 = G__42942;
continue;
} else {
var event = cljs.core.first(seq__42840__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__42943 = cljs.core.next(seq__42840__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42840 = G__42943;
chunk__42841 = G__42944;
count__42842 = G__42945;
i__42843 = G__42946;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
