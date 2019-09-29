goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49871 = arguments.length;
var i__4731__auto___49872 = (0);
while(true){
if((i__4731__auto___49872 < len__4730__auto___49871)){
args__4736__auto__.push((arguments[i__4731__auto___49872]));

var G__49873 = (i__4731__auto___49872 + (1));
i__4731__auto___49872 = G__49873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49713){
var G__49714 = cljs.core.first(seq49713);
var seq49713__$1 = cljs.core.next(seq49713);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49714,seq49713__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49717){
var map__49718 = p__49717;
var map__49718__$1 = (((((!((map__49718 == null))))?(((((map__49718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49718):map__49718);
var src = map__49718__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49718__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49718__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49721 = cljs.core.seq(sources);
var chunk__49722 = null;
var count__49723 = (0);
var i__49724 = (0);
while(true){
if((i__49724 < count__49723)){
var map__49733 = chunk__49722.cljs$core$IIndexed$_nth$arity$2(null,i__49724);
var map__49733__$1 = (((((!((map__49733 == null))))?(((((map__49733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49733):map__49733);
var src = map__49733__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49735){var e_49874 = e49735;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49874);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49874.message)].join('')));
}

var G__49875 = seq__49721;
var G__49876 = chunk__49722;
var G__49877 = count__49723;
var G__49878 = (i__49724 + (1));
seq__49721 = G__49875;
chunk__49722 = G__49876;
count__49723 = G__49877;
i__49724 = G__49878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49721);
if(temp__5735__auto__){
var seq__49721__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49721__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49721__$1);
var G__49879 = cljs.core.chunk_rest(seq__49721__$1);
var G__49880 = c__4550__auto__;
var G__49881 = cljs.core.count(c__4550__auto__);
var G__49882 = (0);
seq__49721 = G__49879;
chunk__49722 = G__49880;
count__49723 = G__49881;
i__49724 = G__49882;
continue;
} else {
var map__49736 = cljs.core.first(seq__49721__$1);
var map__49736__$1 = (((((!((map__49736 == null))))?(((((map__49736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49736):map__49736);
var src = map__49736__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49738){var e_49883 = e49738;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49883);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49883.message)].join('')));
}

var G__49884 = cljs.core.next(seq__49721__$1);
var G__49885 = null;
var G__49886 = (0);
var G__49887 = (0);
seq__49721 = G__49884;
chunk__49722 = G__49885;
count__49723 = G__49886;
i__49724 = G__49887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49739 = cljs.core.seq(js_requires);
var chunk__49740 = null;
var count__49741 = (0);
var i__49742 = (0);
while(true){
if((i__49742 < count__49741)){
var js_ns = chunk__49740.cljs$core$IIndexed$_nth$arity$2(null,i__49742);
var require_str_49888 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49888);


var G__49889 = seq__49739;
var G__49890 = chunk__49740;
var G__49891 = count__49741;
var G__49892 = (i__49742 + (1));
seq__49739 = G__49889;
chunk__49740 = G__49890;
count__49741 = G__49891;
i__49742 = G__49892;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49739);
if(temp__5735__auto__){
var seq__49739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49739__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49739__$1);
var G__49893 = cljs.core.chunk_rest(seq__49739__$1);
var G__49894 = c__4550__auto__;
var G__49895 = cljs.core.count(c__4550__auto__);
var G__49896 = (0);
seq__49739 = G__49893;
chunk__49740 = G__49894;
count__49741 = G__49895;
i__49742 = G__49896;
continue;
} else {
var js_ns = cljs.core.first(seq__49739__$1);
var require_str_49897 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49897);


var G__49898 = cljs.core.next(seq__49739__$1);
var G__49899 = null;
var G__49900 = (0);
var G__49901 = (0);
seq__49739 = G__49898;
chunk__49740 = G__49899;
count__49741 = G__49900;
i__49742 = G__49901;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49745 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49745) : callback.call(null,G__49745));
} else {
var G__49746 = shadow.cljs.devtools.client.env.files_url();
var G__49747 = ((function (G__49746){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__49746))
;
var G__49748 = "POST";
var G__49749 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49750 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49746,G__49747,G__49748,G__49749,G__49750);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49752){
var map__49753 = p__49752;
var map__49753__$1 = (((((!((map__49753 == null))))?(((((map__49753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49753):map__49753);
var msg = map__49753__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49753__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49753__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49755 = info;
var map__49755__$1 = (((((!((map__49755 == null))))?(((((map__49755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49755):map__49755);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49755__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49755__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49757(s__49758){
return (new cljs.core.LazySeq(null,((function (map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info){
return (function (){
var s__49758__$1 = s__49758;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49758__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49763 = cljs.core.first(xs__6292__auto__);
var map__49763__$1 = (((((!((map__49763 == null))))?(((((map__49763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49763):map__49763);
var src = map__49763__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49763__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49763__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__49758__$1,map__49763,map__49763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49757_$_iter__49759(s__49760){
return (new cljs.core.LazySeq(null,((function (s__49758__$1,map__49763,map__49763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info){
return (function (){
var s__49760__$1 = s__49760;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49760__$1);
if(temp__5735__auto____$1){
var s__49760__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49760__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__49760__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49762 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__49761 = (0);
while(true){
if((i__49761 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__49761);
cljs.core.chunk_append(b__49762,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49902 = (i__49761 + (1));
i__49761 = G__49902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49762),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49757_$_iter__49759(cljs.core.chunk_rest(s__49760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49762),null);
}
} else {
var warning = cljs.core.first(s__49760__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49757_$_iter__49759(cljs.core.rest(s__49760__$2)));
}
} else {
return null;
}
break;
}
});})(s__49758__$1,map__49763,map__49763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info))
,null,null));
});})(s__49758__$1,map__49763,map__49763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49757(cljs.core.rest(s__49758__$1)));
} else {
var G__49903 = cljs.core.rest(s__49758__$1);
s__49758__$1 = G__49903;
continue;
}
} else {
var G__49904 = cljs.core.rest(s__49758__$1);
s__49758__$1 = G__49904;
continue;
}
} else {
return null;
}
break;
}
});})(map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info))
,null,null));
});})(map__49755,map__49755__$1,sources,compiled,map__49753,map__49753__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__49765_49905 = cljs.core.seq(warnings);
var chunk__49766_49906 = null;
var count__49767_49907 = (0);
var i__49768_49908 = (0);
while(true){
if((i__49768_49908 < count__49767_49907)){
var map__49773_49909 = chunk__49766_49906.cljs$core$IIndexed$_nth$arity$2(null,i__49768_49908);
var map__49773_49910__$1 = (((((!((map__49773_49909 == null))))?(((((map__49773_49909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49773_49909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49773_49909):map__49773_49909);
var w_49911 = map__49773_49910__$1;
var msg_49912__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49773_49910__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49773_49910__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49773_49910__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49773_49910__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49915)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49913),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49914),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49912__$1)].join(''));


var G__49916 = seq__49765_49905;
var G__49917 = chunk__49766_49906;
var G__49918 = count__49767_49907;
var G__49919 = (i__49768_49908 + (1));
seq__49765_49905 = G__49916;
chunk__49766_49906 = G__49917;
count__49767_49907 = G__49918;
i__49768_49908 = G__49919;
continue;
} else {
var temp__5735__auto___49920 = cljs.core.seq(seq__49765_49905);
if(temp__5735__auto___49920){
var seq__49765_49921__$1 = temp__5735__auto___49920;
if(cljs.core.chunked_seq_QMARK_(seq__49765_49921__$1)){
var c__4550__auto___49922 = cljs.core.chunk_first(seq__49765_49921__$1);
var G__49923 = cljs.core.chunk_rest(seq__49765_49921__$1);
var G__49924 = c__4550__auto___49922;
var G__49925 = cljs.core.count(c__4550__auto___49922);
var G__49926 = (0);
seq__49765_49905 = G__49923;
chunk__49766_49906 = G__49924;
count__49767_49907 = G__49925;
i__49768_49908 = G__49926;
continue;
} else {
var map__49775_49927 = cljs.core.first(seq__49765_49921__$1);
var map__49775_49928__$1 = (((((!((map__49775_49927 == null))))?(((((map__49775_49927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49775_49927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49775_49927):map__49775_49927);
var w_49929 = map__49775_49928__$1;
var msg_49930__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49775_49928__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49775_49928__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49775_49928__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49775_49928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49933)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49931),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49932),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49930__$1)].join(''));


var G__49934 = cljs.core.next(seq__49765_49921__$1);
var G__49935 = null;
var G__49936 = (0);
var G__49937 = (0);
seq__49765_49905 = G__49934;
chunk__49766_49906 = G__49935;
count__49767_49907 = G__49936;
i__49768_49908 = G__49937;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info){
return (function (p__49777){
var map__49778 = p__49777;
var map__49778__$1 = (((((!((map__49778 == null))))?(((((map__49778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49778):map__49778);
var src = map__49778__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info){
return (function (p__49780){
var map__49781 = p__49780;
var map__49781__$1 = (((((!((map__49781 == null))))?(((((map__49781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49781):map__49781);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49781__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info){
return (function (p__49783){
var map__49784 = p__49783;
var map__49784__$1 = (((((!((map__49784 == null))))?(((((map__49784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49784):map__49784);
var rc = map__49784__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info){
return (function (p1__49751_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49751_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__49755,map__49755__$1,sources,compiled,warnings,map__49753,map__49753__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49786){
var map__49787 = p__49786;
var map__49787__$1 = (((((!((map__49787 == null))))?(((((map__49787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49787):map__49787);
var msg = map__49787__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49789 = cljs.core.seq(updates);
var chunk__49791 = null;
var count__49792 = (0);
var i__49793 = (0);
while(true){
if((i__49793 < count__49792)){
var path = chunk__49791.cljs$core$IIndexed$_nth$arity$2(null,i__49793);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49821_49938 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49824_49939 = null;
var count__49825_49940 = (0);
var i__49826_49941 = (0);
while(true){
if((i__49826_49941 < count__49825_49940)){
var node_49942 = chunk__49824_49939.cljs$core$IIndexed$_nth$arity$2(null,i__49826_49941);
var path_match_49943 = shadow.cljs.devtools.client.browser.match_paths(node_49942.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49943)){
var new_link_49944 = (function (){var G__49831 = node_49942.cloneNode(true);
G__49831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49943),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49831;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49943], 0));

goog.dom.insertSiblingAfter(new_link_49944,node_49942);

goog.dom.removeNode(node_49942);


var G__49945 = seq__49821_49938;
var G__49946 = chunk__49824_49939;
var G__49947 = count__49825_49940;
var G__49948 = (i__49826_49941 + (1));
seq__49821_49938 = G__49945;
chunk__49824_49939 = G__49946;
count__49825_49940 = G__49947;
i__49826_49941 = G__49948;
continue;
} else {
var G__49949 = seq__49821_49938;
var G__49950 = chunk__49824_49939;
var G__49951 = count__49825_49940;
var G__49952 = (i__49826_49941 + (1));
seq__49821_49938 = G__49949;
chunk__49824_49939 = G__49950;
count__49825_49940 = G__49951;
i__49826_49941 = G__49952;
continue;
}
} else {
var temp__5735__auto___49953 = cljs.core.seq(seq__49821_49938);
if(temp__5735__auto___49953){
var seq__49821_49954__$1 = temp__5735__auto___49953;
if(cljs.core.chunked_seq_QMARK_(seq__49821_49954__$1)){
var c__4550__auto___49955 = cljs.core.chunk_first(seq__49821_49954__$1);
var G__49956 = cljs.core.chunk_rest(seq__49821_49954__$1);
var G__49957 = c__4550__auto___49955;
var G__49958 = cljs.core.count(c__4550__auto___49955);
var G__49959 = (0);
seq__49821_49938 = G__49956;
chunk__49824_49939 = G__49957;
count__49825_49940 = G__49958;
i__49826_49941 = G__49959;
continue;
} else {
var node_49960 = cljs.core.first(seq__49821_49954__$1);
var path_match_49961 = shadow.cljs.devtools.client.browser.match_paths(node_49960.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49961)){
var new_link_49962 = (function (){var G__49832 = node_49960.cloneNode(true);
G__49832.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49961),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49832;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49961], 0));

goog.dom.insertSiblingAfter(new_link_49962,node_49960);

goog.dom.removeNode(node_49960);


var G__49963 = cljs.core.next(seq__49821_49954__$1);
var G__49964 = null;
var G__49965 = (0);
var G__49966 = (0);
seq__49821_49938 = G__49963;
chunk__49824_49939 = G__49964;
count__49825_49940 = G__49965;
i__49826_49941 = G__49966;
continue;
} else {
var G__49967 = cljs.core.next(seq__49821_49954__$1);
var G__49968 = null;
var G__49969 = (0);
var G__49970 = (0);
seq__49821_49938 = G__49967;
chunk__49824_49939 = G__49968;
count__49825_49940 = G__49969;
i__49826_49941 = G__49970;
continue;
}
}
} else {
}
}
break;
}


var G__49971 = seq__49789;
var G__49972 = chunk__49791;
var G__49973 = count__49792;
var G__49974 = (i__49793 + (1));
seq__49789 = G__49971;
chunk__49791 = G__49972;
count__49792 = G__49973;
i__49793 = G__49974;
continue;
} else {
var G__49975 = seq__49789;
var G__49976 = chunk__49791;
var G__49977 = count__49792;
var G__49978 = (i__49793 + (1));
seq__49789 = G__49975;
chunk__49791 = G__49976;
count__49792 = G__49977;
i__49793 = G__49978;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49789);
if(temp__5735__auto__){
var seq__49789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49789__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49789__$1);
var G__49979 = cljs.core.chunk_rest(seq__49789__$1);
var G__49980 = c__4550__auto__;
var G__49981 = cljs.core.count(c__4550__auto__);
var G__49982 = (0);
seq__49789 = G__49979;
chunk__49791 = G__49980;
count__49792 = G__49981;
i__49793 = G__49982;
continue;
} else {
var path = cljs.core.first(seq__49789__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49833_49983 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49836_49984 = null;
var count__49837_49985 = (0);
var i__49838_49986 = (0);
while(true){
if((i__49838_49986 < count__49837_49985)){
var node_49987 = chunk__49836_49984.cljs$core$IIndexed$_nth$arity$2(null,i__49838_49986);
var path_match_49988 = shadow.cljs.devtools.client.browser.match_paths(node_49987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49988)){
var new_link_49989 = (function (){var G__49843 = node_49987.cloneNode(true);
G__49843.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49843;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49988], 0));

goog.dom.insertSiblingAfter(new_link_49989,node_49987);

goog.dom.removeNode(node_49987);


var G__49990 = seq__49833_49983;
var G__49991 = chunk__49836_49984;
var G__49992 = count__49837_49985;
var G__49993 = (i__49838_49986 + (1));
seq__49833_49983 = G__49990;
chunk__49836_49984 = G__49991;
count__49837_49985 = G__49992;
i__49838_49986 = G__49993;
continue;
} else {
var G__49994 = seq__49833_49983;
var G__49995 = chunk__49836_49984;
var G__49996 = count__49837_49985;
var G__49997 = (i__49838_49986 + (1));
seq__49833_49983 = G__49994;
chunk__49836_49984 = G__49995;
count__49837_49985 = G__49996;
i__49838_49986 = G__49997;
continue;
}
} else {
var temp__5735__auto___49998__$1 = cljs.core.seq(seq__49833_49983);
if(temp__5735__auto___49998__$1){
var seq__49833_49999__$1 = temp__5735__auto___49998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49833_49999__$1)){
var c__4550__auto___50000 = cljs.core.chunk_first(seq__49833_49999__$1);
var G__50001 = cljs.core.chunk_rest(seq__49833_49999__$1);
var G__50002 = c__4550__auto___50000;
var G__50003 = cljs.core.count(c__4550__auto___50000);
var G__50004 = (0);
seq__49833_49983 = G__50001;
chunk__49836_49984 = G__50002;
count__49837_49985 = G__50003;
i__49838_49986 = G__50004;
continue;
} else {
var node_50005 = cljs.core.first(seq__49833_49999__$1);
var path_match_50006 = shadow.cljs.devtools.client.browser.match_paths(node_50005.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50006)){
var new_link_50007 = (function (){var G__49844 = node_50005.cloneNode(true);
G__49844.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50006),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49844;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50006], 0));

goog.dom.insertSiblingAfter(new_link_50007,node_50005);

goog.dom.removeNode(node_50005);


var G__50008 = cljs.core.next(seq__49833_49999__$1);
var G__50009 = null;
var G__50010 = (0);
var G__50011 = (0);
seq__49833_49983 = G__50008;
chunk__49836_49984 = G__50009;
count__49837_49985 = G__50010;
i__49838_49986 = G__50011;
continue;
} else {
var G__50012 = cljs.core.next(seq__49833_49999__$1);
var G__50013 = null;
var G__50014 = (0);
var G__50015 = (0);
seq__49833_49983 = G__50012;
chunk__49836_49984 = G__50013;
count__49837_49985 = G__50014;
i__49838_49986 = G__50015;
continue;
}
}
} else {
}
}
break;
}


var G__50016 = cljs.core.next(seq__49789__$1);
var G__50017 = null;
var G__50018 = (0);
var G__50019 = (0);
seq__49789 = G__50016;
chunk__49791 = G__50017;
count__49792 = G__50018;
i__49793 = G__50019;
continue;
} else {
var G__50020 = cljs.core.next(seq__49789__$1);
var G__50021 = null;
var G__50022 = (0);
var G__50023 = (0);
seq__49789 = G__50020;
chunk__49791 = G__50021;
count__49792 = G__50022;
i__49793 = G__50023;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49845){
var map__49846 = p__49845;
var map__49846__$1 = (((((!((map__49846 == null))))?(((((map__49846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49846):map__49846);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__49846,map__49846__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__49846,map__49846__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49848,done){
var map__49849 = p__49848;
var map__49849__$1 = (((((!((map__49849 == null))))?(((((map__49849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49849):map__49849);
var msg = map__49849__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49849__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49849__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49849__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49849__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__49849,map__49849__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__49851){
var map__49852 = p__49851;
var map__49852__$1 = (((((!((map__49852 == null))))?(((((map__49852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49852):map__49852);
var src = map__49852__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49852__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__49849,map__49849__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__49849,map__49849__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49854){var e = e49854;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__49849,map__49849__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49855,done){
var map__49856 = p__49855;
var map__49856__$1 = (((((!((map__49856 == null))))?(((((map__49856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49856):map__49856);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__49856,map__49856__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__49856,map__49856__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49858){
var map__49859 = p__49858;
var map__49859__$1 = (((((!((map__49859 == null))))?(((((map__49859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49859):map__49859);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49861,done){
var map__49862 = p__49861;
var map__49862__$1 = (((((!((map__49862 == null))))?(((((map__49862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49862):map__49862);
var msg = map__49862__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49864_50024 = type;
var G__49864_50025__$1 = (((G__49864_50024 instanceof cljs.core.Keyword))?G__49864_50024.fqn:null);
switch (G__49864_50025__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__49865 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49866 = ((function (G__49865){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__49865))
;
var G__49867 = "POST";
var G__49868 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49869 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49865,G__49866,G__49867,G__49868,G__49869);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e49870){var e = e49870;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50027 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50027)){
var s_50028 = temp__5735__auto___50027;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_50028.onclose = ((function (s_50028,temp__5735__auto___50027){
return (function (e){
return null;
});})(s_50028,temp__5735__auto___50027))
;

s_50028.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
