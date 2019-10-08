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
var len__4730__auto___50163 = arguments.length;
var i__4731__auto___50164 = (0);
while(true){
if((i__4731__auto___50164 < len__4730__auto___50163)){
args__4736__auto__.push((arguments[i__4731__auto___50164]));

var G__50165 = (i__4731__auto___50164 + (1));
i__4731__auto___50164 = G__50165;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49903){
var G__49904 = cljs.core.first(seq49903);
var seq49903__$1 = cljs.core.next(seq49903);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49904,seq49903__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49914){
var map__49915 = p__49914;
var map__49915__$1 = (((((!((map__49915 == null))))?(((((map__49915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49915):map__49915);
var src = map__49915__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49915__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49915__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49917 = cljs.core.seq(sources);
var chunk__49918 = null;
var count__49919 = (0);
var i__49920 = (0);
while(true){
if((i__49920 < count__49919)){
var map__49930 = chunk__49918.cljs$core$IIndexed$_nth$arity$2(null,i__49920);
var map__49930__$1 = (((((!((map__49930 == null))))?(((((map__49930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49930):map__49930);
var src = map__49930__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49930__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49930__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49930__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49932){var e_50170 = e49932;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50170);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50170.message)].join('')));
}

var G__50172 = seq__49917;
var G__50173 = chunk__49918;
var G__50174 = count__49919;
var G__50175 = (i__49920 + (1));
seq__49917 = G__50172;
chunk__49918 = G__50173;
count__49919 = G__50174;
i__49920 = G__50175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49917);
if(temp__5735__auto__){
var seq__49917__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49917__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49917__$1);
var G__50177 = cljs.core.chunk_rest(seq__49917__$1);
var G__50178 = c__4550__auto__;
var G__50179 = cljs.core.count(c__4550__auto__);
var G__50180 = (0);
seq__49917 = G__50177;
chunk__49918 = G__50178;
count__49919 = G__50179;
i__49920 = G__50180;
continue;
} else {
var map__49934 = cljs.core.first(seq__49917__$1);
var map__49934__$1 = (((((!((map__49934 == null))))?(((((map__49934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49934):map__49934);
var src = map__49934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49936){var e_50182 = e49936;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50182);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50182.message)].join('')));
}

var G__50183 = cljs.core.next(seq__49917__$1);
var G__50184 = null;
var G__50185 = (0);
var G__50186 = (0);
seq__49917 = G__50183;
chunk__49918 = G__50184;
count__49919 = G__50185;
i__49920 = G__50186;
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
var seq__49949 = cljs.core.seq(js_requires);
var chunk__49950 = null;
var count__49951 = (0);
var i__49952 = (0);
while(true){
if((i__49952 < count__49951)){
var js_ns = chunk__49950.cljs$core$IIndexed$_nth$arity$2(null,i__49952);
var require_str_50189 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50189);


var G__50190 = seq__49949;
var G__50191 = chunk__49950;
var G__50192 = count__49951;
var G__50193 = (i__49952 + (1));
seq__49949 = G__50190;
chunk__49950 = G__50191;
count__49951 = G__50192;
i__49952 = G__50193;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49949);
if(temp__5735__auto__){
var seq__49949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49949__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49949__$1);
var G__50194 = cljs.core.chunk_rest(seq__49949__$1);
var G__50195 = c__4550__auto__;
var G__50196 = cljs.core.count(c__4550__auto__);
var G__50197 = (0);
seq__49949 = G__50194;
chunk__49950 = G__50195;
count__49951 = G__50196;
i__49952 = G__50197;
continue;
} else {
var js_ns = cljs.core.first(seq__49949__$1);
var require_str_50199 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50199);


var G__50200 = cljs.core.next(seq__49949__$1);
var G__50201 = null;
var G__50202 = (0);
var G__50203 = (0);
seq__49949 = G__50200;
chunk__49950 = G__50201;
count__49951 = G__50202;
i__49952 = G__50203;
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
var G__49961 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49961) : callback.call(null,G__49961));
} else {
var G__49962 = shadow.cljs.devtools.client.env.files_url();
var G__49963 = ((function (G__49962){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__49962))
;
var G__49964 = "POST";
var G__49965 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49966 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49962,G__49963,G__49964,G__49965,G__49966);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49968){
var map__49969 = p__49968;
var map__49969__$1 = (((((!((map__49969 == null))))?(((((map__49969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49969):map__49969);
var msg = map__49969__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49969__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49969__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49971 = info;
var map__49971__$1 = (((((!((map__49971 == null))))?(((((map__49971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49971):map__49971);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49971__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49971__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49974(s__49975){
return (new cljs.core.LazySeq(null,((function (map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info){
return (function (){
var s__49975__$1 = s__49975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49975__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49981 = cljs.core.first(xs__6292__auto__);
var map__49981__$1 = (((((!((map__49981 == null))))?(((((map__49981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49981):map__49981);
var src = map__49981__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49981__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__49975__$1,map__49981,map__49981__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49974_$_iter__49976(s__49977){
return (new cljs.core.LazySeq(null,((function (s__49975__$1,map__49981,map__49981__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info){
return (function (){
var s__49977__$1 = s__49977;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49977__$1);
if(temp__5735__auto____$1){
var s__49977__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49977__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__49977__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49979 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__49978 = (0);
while(true){
if((i__49978 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__49978);
cljs.core.chunk_append(b__49979,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50208 = (i__49978 + (1));
i__49978 = G__50208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49979),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49974_$_iter__49976(cljs.core.chunk_rest(s__49977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49979),null);
}
} else {
var warning = cljs.core.first(s__49977__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49974_$_iter__49976(cljs.core.rest(s__49977__$2)));
}
} else {
return null;
}
break;
}
});})(s__49975__$1,map__49981,map__49981__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info))
,null,null));
});})(s__49975__$1,map__49981,map__49981__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49974(cljs.core.rest(s__49975__$1)));
} else {
var G__50209 = cljs.core.rest(s__49975__$1);
s__49975__$1 = G__50209;
continue;
}
} else {
var G__50210 = cljs.core.rest(s__49975__$1);
s__49975__$1 = G__50210;
continue;
}
} else {
return null;
}
break;
}
});})(map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info))
,null,null));
});})(map__49971,map__49971__$1,sources,compiled,map__49969,map__49969__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__49983_50212 = cljs.core.seq(warnings);
var chunk__49984_50213 = null;
var count__49985_50214 = (0);
var i__49986_50215 = (0);
while(true){
if((i__49986_50215 < count__49985_50214)){
var map__49991_50216 = chunk__49984_50213.cljs$core$IIndexed$_nth$arity$2(null,i__49986_50215);
var map__49991_50217__$1 = (((((!((map__49991_50216 == null))))?(((((map__49991_50216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49991_50216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49991_50216):map__49991_50216);
var w_50218 = map__49991_50217__$1;
var msg_50219__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991_50217__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991_50217__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991_50217__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991_50217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50222)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50220),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50221),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50219__$1)].join(''));


var G__50224 = seq__49983_50212;
var G__50225 = chunk__49984_50213;
var G__50226 = count__49985_50214;
var G__50227 = (i__49986_50215 + (1));
seq__49983_50212 = G__50224;
chunk__49984_50213 = G__50225;
count__49985_50214 = G__50226;
i__49986_50215 = G__50227;
continue;
} else {
var temp__5735__auto___50228 = cljs.core.seq(seq__49983_50212);
if(temp__5735__auto___50228){
var seq__49983_50229__$1 = temp__5735__auto___50228;
if(cljs.core.chunked_seq_QMARK_(seq__49983_50229__$1)){
var c__4550__auto___50230 = cljs.core.chunk_first(seq__49983_50229__$1);
var G__50231 = cljs.core.chunk_rest(seq__49983_50229__$1);
var G__50232 = c__4550__auto___50230;
var G__50233 = cljs.core.count(c__4550__auto___50230);
var G__50234 = (0);
seq__49983_50212 = G__50231;
chunk__49984_50213 = G__50232;
count__49985_50214 = G__50233;
i__49986_50215 = G__50234;
continue;
} else {
var map__49993_50235 = cljs.core.first(seq__49983_50229__$1);
var map__49993_50236__$1 = (((((!((map__49993_50235 == null))))?(((((map__49993_50235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49993_50235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49993_50235):map__49993_50235);
var w_50237 = map__49993_50236__$1;
var msg_50238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993_50236__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993_50236__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993_50236__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993_50236__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50241)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50239),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50240),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50238__$1)].join(''));


var G__50243 = cljs.core.next(seq__49983_50229__$1);
var G__50244 = null;
var G__50245 = (0);
var G__50246 = (0);
seq__49983_50212 = G__50243;
chunk__49984_50213 = G__50244;
count__49985_50214 = G__50245;
i__49986_50215 = G__50246;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info){
return (function (p__49995){
var map__49996 = p__49995;
var map__49996__$1 = (((((!((map__49996 == null))))?(((((map__49996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49996):map__49996);
var src = map__49996__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49996__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info){
return (function (p__50002){
var map__50003 = p__50002;
var map__50003__$1 = (((((!((map__50003 == null))))?(((((map__50003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50003):map__50003);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info){
return (function (p__50007){
var map__50008 = p__50007;
var map__50008__$1 = (((((!((map__50008 == null))))?(((((map__50008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50008):map__50008);
var rc = map__50008__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info){
return (function (p1__49967_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49967_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__49971,map__49971__$1,sources,compiled,warnings,map__49969,map__49969__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50013){
var map__50014 = p__50013;
var map__50014__$1 = (((((!((map__50014 == null))))?(((((map__50014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50014):map__50014);
var msg = map__50014__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50014__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50020 = cljs.core.seq(updates);
var chunk__50022 = null;
var count__50023 = (0);
var i__50024 = (0);
while(true){
if((i__50024 < count__50023)){
var path = chunk__50022.cljs$core$IIndexed$_nth$arity$2(null,i__50024);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50054_50254 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50057_50255 = null;
var count__50058_50256 = (0);
var i__50059_50257 = (0);
while(true){
if((i__50059_50257 < count__50058_50256)){
var node_50258 = chunk__50057_50255.cljs$core$IIndexed$_nth$arity$2(null,i__50059_50257);
var path_match_50261 = shadow.cljs.devtools.client.browser.match_paths(node_50258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50261)){
var new_link_50262 = (function (){var G__50064 = node_50258.cloneNode(true);
G__50064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50261),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50064;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50261], 0));

goog.dom.insertSiblingAfter(new_link_50262,node_50258);

goog.dom.removeNode(node_50258);


var G__50263 = seq__50054_50254;
var G__50264 = chunk__50057_50255;
var G__50265 = count__50058_50256;
var G__50266 = (i__50059_50257 + (1));
seq__50054_50254 = G__50263;
chunk__50057_50255 = G__50264;
count__50058_50256 = G__50265;
i__50059_50257 = G__50266;
continue;
} else {
var G__50267 = seq__50054_50254;
var G__50268 = chunk__50057_50255;
var G__50269 = count__50058_50256;
var G__50270 = (i__50059_50257 + (1));
seq__50054_50254 = G__50267;
chunk__50057_50255 = G__50268;
count__50058_50256 = G__50269;
i__50059_50257 = G__50270;
continue;
}
} else {
var temp__5735__auto___50275 = cljs.core.seq(seq__50054_50254);
if(temp__5735__auto___50275){
var seq__50054_50276__$1 = temp__5735__auto___50275;
if(cljs.core.chunked_seq_QMARK_(seq__50054_50276__$1)){
var c__4550__auto___50278 = cljs.core.chunk_first(seq__50054_50276__$1);
var G__50279 = cljs.core.chunk_rest(seq__50054_50276__$1);
var G__50280 = c__4550__auto___50278;
var G__50281 = cljs.core.count(c__4550__auto___50278);
var G__50282 = (0);
seq__50054_50254 = G__50279;
chunk__50057_50255 = G__50280;
count__50058_50256 = G__50281;
i__50059_50257 = G__50282;
continue;
} else {
var node_50288 = cljs.core.first(seq__50054_50276__$1);
var path_match_50289 = shadow.cljs.devtools.client.browser.match_paths(node_50288.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50289)){
var new_link_50292 = (function (){var G__50065 = node_50288.cloneNode(true);
G__50065.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50289),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50065;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50289], 0));

goog.dom.insertSiblingAfter(new_link_50292,node_50288);

goog.dom.removeNode(node_50288);


var G__50299 = cljs.core.next(seq__50054_50276__$1);
var G__50300 = null;
var G__50301 = (0);
var G__50302 = (0);
seq__50054_50254 = G__50299;
chunk__50057_50255 = G__50300;
count__50058_50256 = G__50301;
i__50059_50257 = G__50302;
continue;
} else {
var G__50308 = cljs.core.next(seq__50054_50276__$1);
var G__50309 = null;
var G__50310 = (0);
var G__50311 = (0);
seq__50054_50254 = G__50308;
chunk__50057_50255 = G__50309;
count__50058_50256 = G__50310;
i__50059_50257 = G__50311;
continue;
}
}
} else {
}
}
break;
}


var G__50312 = seq__50020;
var G__50313 = chunk__50022;
var G__50314 = count__50023;
var G__50315 = (i__50024 + (1));
seq__50020 = G__50312;
chunk__50022 = G__50313;
count__50023 = G__50314;
i__50024 = G__50315;
continue;
} else {
var G__50316 = seq__50020;
var G__50317 = chunk__50022;
var G__50318 = count__50023;
var G__50319 = (i__50024 + (1));
seq__50020 = G__50316;
chunk__50022 = G__50317;
count__50023 = G__50318;
i__50024 = G__50319;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50020);
if(temp__5735__auto__){
var seq__50020__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50020__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50020__$1);
var G__50320 = cljs.core.chunk_rest(seq__50020__$1);
var G__50321 = c__4550__auto__;
var G__50322 = cljs.core.count(c__4550__auto__);
var G__50323 = (0);
seq__50020 = G__50320;
chunk__50022 = G__50321;
count__50023 = G__50322;
i__50024 = G__50323;
continue;
} else {
var path = cljs.core.first(seq__50020__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50066_50324 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50069_50325 = null;
var count__50070_50326 = (0);
var i__50071_50327 = (0);
while(true){
if((i__50071_50327 < count__50070_50326)){
var node_50328 = chunk__50069_50325.cljs$core$IIndexed$_nth$arity$2(null,i__50071_50327);
var path_match_50329 = shadow.cljs.devtools.client.browser.match_paths(node_50328.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50329)){
var new_link_50330 = (function (){var G__50080 = node_50328.cloneNode(true);
G__50080.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50329),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50080;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50329], 0));

goog.dom.insertSiblingAfter(new_link_50330,node_50328);

goog.dom.removeNode(node_50328);


var G__50331 = seq__50066_50324;
var G__50332 = chunk__50069_50325;
var G__50333 = count__50070_50326;
var G__50334 = (i__50071_50327 + (1));
seq__50066_50324 = G__50331;
chunk__50069_50325 = G__50332;
count__50070_50326 = G__50333;
i__50071_50327 = G__50334;
continue;
} else {
var G__50335 = seq__50066_50324;
var G__50336 = chunk__50069_50325;
var G__50337 = count__50070_50326;
var G__50338 = (i__50071_50327 + (1));
seq__50066_50324 = G__50335;
chunk__50069_50325 = G__50336;
count__50070_50326 = G__50337;
i__50071_50327 = G__50338;
continue;
}
} else {
var temp__5735__auto___50339__$1 = cljs.core.seq(seq__50066_50324);
if(temp__5735__auto___50339__$1){
var seq__50066_50340__$1 = temp__5735__auto___50339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50066_50340__$1)){
var c__4550__auto___50341 = cljs.core.chunk_first(seq__50066_50340__$1);
var G__50342 = cljs.core.chunk_rest(seq__50066_50340__$1);
var G__50343 = c__4550__auto___50341;
var G__50344 = cljs.core.count(c__4550__auto___50341);
var G__50345 = (0);
seq__50066_50324 = G__50342;
chunk__50069_50325 = G__50343;
count__50070_50326 = G__50344;
i__50071_50327 = G__50345;
continue;
} else {
var node_50347 = cljs.core.first(seq__50066_50340__$1);
var path_match_50348 = shadow.cljs.devtools.client.browser.match_paths(node_50347.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50348)){
var new_link_50349 = (function (){var G__50081 = node_50347.cloneNode(true);
G__50081.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50348),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50081;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50348], 0));

goog.dom.insertSiblingAfter(new_link_50349,node_50347);

goog.dom.removeNode(node_50347);


var G__50350 = cljs.core.next(seq__50066_50340__$1);
var G__50351 = null;
var G__50352 = (0);
var G__50353 = (0);
seq__50066_50324 = G__50350;
chunk__50069_50325 = G__50351;
count__50070_50326 = G__50352;
i__50071_50327 = G__50353;
continue;
} else {
var G__50354 = cljs.core.next(seq__50066_50340__$1);
var G__50355 = null;
var G__50356 = (0);
var G__50357 = (0);
seq__50066_50324 = G__50354;
chunk__50069_50325 = G__50355;
count__50070_50326 = G__50356;
i__50071_50327 = G__50357;
continue;
}
}
} else {
}
}
break;
}


var G__50358 = cljs.core.next(seq__50020__$1);
var G__50359 = null;
var G__50360 = (0);
var G__50361 = (0);
seq__50020 = G__50358;
chunk__50022 = G__50359;
count__50023 = G__50360;
i__50024 = G__50361;
continue;
} else {
var G__50362 = cljs.core.next(seq__50020__$1);
var G__50363 = null;
var G__50364 = (0);
var G__50365 = (0);
seq__50020 = G__50362;
chunk__50022 = G__50363;
count__50023 = G__50364;
i__50024 = G__50365;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50082){
var map__50083 = p__50082;
var map__50083__$1 = (((((!((map__50083 == null))))?(((((map__50083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50083):map__50083);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50083__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__50083,map__50083__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__50083,map__50083__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50089,done){
var map__50090 = p__50089;
var map__50090__$1 = (((((!((map__50090 == null))))?(((((map__50090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50090):map__50090);
var msg = map__50090__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50090,map__50090__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__50092){
var map__50093 = p__50092;
var map__50093__$1 = (((((!((map__50093 == null))))?(((((map__50093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50093):map__50093);
var src = map__50093__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50093__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__50090,map__50090__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__50090,map__50090__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50095){var e = e50095;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__50090,map__50090__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50108,done){
var map__50109 = p__50108;
var map__50109__$1 = (((((!((map__50109 == null))))?(((((map__50109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50109):map__50109);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50109__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__50109,map__50109__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__50109,map__50109__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50117){
var map__50118 = p__50117;
var map__50118__$1 = (((((!((map__50118 == null))))?(((((map__50118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50118):map__50118);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50118__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50118__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50122,done){
var map__50123 = p__50122;
var map__50123__$1 = (((((!((map__50123 == null))))?(((((map__50123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50123):map__50123);
var msg = map__50123__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50123__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50127_50452 = type;
var G__50127_50453__$1 = (((G__50127_50452 instanceof cljs.core.Keyword))?G__50127_50452.fqn:null);
switch (G__50127_50453__$1) {
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
var G__50143 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50144 = ((function (G__50143){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__50143))
;
var G__50145 = "POST";
var G__50146 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50147 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50143,G__50144,G__50145,G__50146,G__50147);
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
}catch (e50153){var e = e50153;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50456 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50456)){
var s_50457 = temp__5735__auto___50456;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_50457.onclose = ((function (s_50457,temp__5735__auto___50456){
return (function (e){
return null;
});})(s_50457,temp__5735__auto___50456))
;

s_50457.close();

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
