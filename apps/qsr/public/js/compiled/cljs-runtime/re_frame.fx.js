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
var _STAR_current_trace_STAR__orig_val__42962 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42963 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42963;

try{try{var seq__42965 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42966 = null;
var count__42967 = (0);
var i__42968 = (0);
while(true){
if((i__42968 < count__42967)){
var vec__42975 = chunk__42966.cljs$core$IIndexed$_nth$arity$2(null,i__42968);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42975,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42975,(1),null);
var temp__5733__auto___43047 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43047)){
var effect_fn_43048 = temp__5733__auto___43047;
(effect_fn_43048.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43048.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43048.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43049 = seq__42965;
var G__43050 = chunk__42966;
var G__43051 = count__42967;
var G__43052 = (i__42968 + (1));
seq__42965 = G__43049;
chunk__42966 = G__43050;
count__42967 = G__43051;
i__42968 = G__43052;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42965);
if(temp__5735__auto__){
var seq__42965__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42965__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42965__$1);
var G__43053 = cljs.core.chunk_rest(seq__42965__$1);
var G__43054 = c__4550__auto__;
var G__43055 = cljs.core.count(c__4550__auto__);
var G__43056 = (0);
seq__42965 = G__43053;
chunk__42966 = G__43054;
count__42967 = G__43055;
i__42968 = G__43056;
continue;
} else {
var vec__42983 = cljs.core.first(seq__42965__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42983,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42983,(1),null);
var temp__5733__auto___43057 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43057)){
var effect_fn_43058 = temp__5733__auto___43057;
(effect_fn_43058.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43058.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43058.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43060 = cljs.core.next(seq__42965__$1);
var G__43061 = null;
var G__43062 = (0);
var G__43063 = (0);
seq__42965 = G__43060;
chunk__42966 = G__43061;
count__42967 = G__43062;
i__42968 = G__43063;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42702__auto___43065 = re_frame.interop.now();
var duration__42703__auto___43066 = (end__42702__auto___43065 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42703__auto___43066,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42702__auto___43065);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42962;
}} else {
var seq__42995 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42996 = null;
var count__42997 = (0);
var i__42998 = (0);
while(true){
if((i__42998 < count__42997)){
var vec__43010 = chunk__42996.cljs$core$IIndexed$_nth$arity$2(null,i__42998);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(1),null);
var temp__5733__auto___43072 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43072)){
var effect_fn_43074 = temp__5733__auto___43072;
(effect_fn_43074.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43074.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43074.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43076 = seq__42995;
var G__43077 = chunk__42996;
var G__43078 = count__42997;
var G__43079 = (i__42998 + (1));
seq__42995 = G__43076;
chunk__42996 = G__43077;
count__42997 = G__43078;
i__42998 = G__43079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42995);
if(temp__5735__auto__){
var seq__42995__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42995__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42995__$1);
var G__43082 = cljs.core.chunk_rest(seq__42995__$1);
var G__43083 = c__4550__auto__;
var G__43084 = cljs.core.count(c__4550__auto__);
var G__43085 = (0);
seq__42995 = G__43082;
chunk__42996 = G__43083;
count__42997 = G__43084;
i__42998 = G__43085;
continue;
} else {
var vec__43013 = cljs.core.first(seq__42995__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43013,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43013,(1),null);
var temp__5733__auto___43091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43091)){
var effect_fn_43092 = temp__5733__auto___43091;
(effect_fn_43092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43093 = cljs.core.next(seq__42995__$1);
var G__43094 = null;
var G__43095 = (0);
var G__43096 = (0);
seq__42995 = G__43093;
chunk__42996 = G__43094;
count__42997 = G__43095;
i__42998 = G__43096;
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
var seq__43016 = cljs.core.seq(value);
var chunk__43017 = null;
var count__43018 = (0);
var i__43019 = (0);
while(true){
if((i__43019 < count__43018)){
var map__43025 = chunk__43017.cljs$core$IIndexed$_nth$arity$2(null,i__43019);
var map__43025__$1 = (((((!((map__43025 == null))))?(((((map__43025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43025):map__43025);
var effect = map__43025__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43025__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43025__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43016,chunk__43017,count__43018,i__43019,map__43025,map__43025__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43016,chunk__43017,count__43018,i__43019,map__43025,map__43025__$1,effect,ms,dispatch))
,ms);
}


var G__43105 = seq__43016;
var G__43106 = chunk__43017;
var G__43107 = count__43018;
var G__43108 = (i__43019 + (1));
seq__43016 = G__43105;
chunk__43017 = G__43106;
count__43018 = G__43107;
i__43019 = G__43108;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43016);
if(temp__5735__auto__){
var seq__43016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43016__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43016__$1);
var G__43112 = cljs.core.chunk_rest(seq__43016__$1);
var G__43113 = c__4550__auto__;
var G__43114 = cljs.core.count(c__4550__auto__);
var G__43115 = (0);
seq__43016 = G__43112;
chunk__43017 = G__43113;
count__43018 = G__43114;
i__43019 = G__43115;
continue;
} else {
var map__43031 = cljs.core.first(seq__43016__$1);
var map__43031__$1 = (((((!((map__43031 == null))))?(((((map__43031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43031):map__43031);
var effect = map__43031__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43016,chunk__43017,count__43018,i__43019,map__43031,map__43031__$1,effect,ms,dispatch,seq__43016__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43016,chunk__43017,count__43018,i__43019,map__43031,map__43031__$1,effect,ms,dispatch,seq__43016__$1,temp__5735__auto__))
,ms);
}


var G__43117 = cljs.core.next(seq__43016__$1);
var G__43118 = null;
var G__43119 = (0);
var G__43120 = (0);
seq__43016 = G__43117;
chunk__43017 = G__43118;
count__43018 = G__43119;
i__43019 = G__43120;
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
var seq__43038 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43039 = null;
var count__43040 = (0);
var i__43041 = (0);
while(true){
if((i__43041 < count__43040)){
var event = chunk__43039.cljs$core$IIndexed$_nth$arity$2(null,i__43041);
re_frame.router.dispatch(event);


var G__43125 = seq__43038;
var G__43126 = chunk__43039;
var G__43127 = count__43040;
var G__43128 = (i__43041 + (1));
seq__43038 = G__43125;
chunk__43039 = G__43126;
count__43040 = G__43127;
i__43041 = G__43128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43038);
if(temp__5735__auto__){
var seq__43038__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43038__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43038__$1);
var G__43132 = cljs.core.chunk_rest(seq__43038__$1);
var G__43133 = c__4550__auto__;
var G__43134 = cljs.core.count(c__4550__auto__);
var G__43135 = (0);
seq__43038 = G__43132;
chunk__43039 = G__43133;
count__43040 = G__43134;
i__43041 = G__43135;
continue;
} else {
var event = cljs.core.first(seq__43038__$1);
re_frame.router.dispatch(event);


var G__43136 = cljs.core.next(seq__43038__$1);
var G__43137 = null;
var G__43138 = (0);
var G__43139 = (0);
seq__43038 = G__43136;
chunk__43039 = G__43137;
count__43040 = G__43138;
i__43041 = G__43139;
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
var seq__43042 = cljs.core.seq(value);
var chunk__43043 = null;
var count__43044 = (0);
var i__43045 = (0);
while(true){
if((i__43045 < count__43044)){
var event = chunk__43043.cljs$core$IIndexed$_nth$arity$2(null,i__43045);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43143 = seq__43042;
var G__43144 = chunk__43043;
var G__43145 = count__43044;
var G__43146 = (i__43045 + (1));
seq__43042 = G__43143;
chunk__43043 = G__43144;
count__43044 = G__43145;
i__43045 = G__43146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43042);
if(temp__5735__auto__){
var seq__43042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43042__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43042__$1);
var G__43147 = cljs.core.chunk_rest(seq__43042__$1);
var G__43148 = c__4550__auto__;
var G__43149 = cljs.core.count(c__4550__auto__);
var G__43150 = (0);
seq__43042 = G__43147;
chunk__43043 = G__43148;
count__43044 = G__43149;
i__43045 = G__43150;
continue;
} else {
var event = cljs.core.first(seq__43042__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43151 = cljs.core.next(seq__43042__$1);
var G__43152 = null;
var G__43153 = (0);
var G__43154 = (0);
seq__43042 = G__43151;
chunk__43043 = G__43152;
count__43044 = G__43153;
i__43045 = G__43154;
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
