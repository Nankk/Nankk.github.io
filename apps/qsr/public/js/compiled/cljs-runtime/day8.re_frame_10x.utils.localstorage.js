goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__43249 = arguments.length;
switch (G__43249) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__43255 = cljs.core.seq(Object.keys(localStorage));
var chunk__43256 = null;
var count__43257 = (0);
var i__43258 = (0);
while(true){
if((i__43258 < count__43257)){
var k = chunk__43256.cljs$core$IIndexed$_nth$arity$2(null,i__43258);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__43283 = seq__43255;
var G__43284 = chunk__43256;
var G__43285 = count__43257;
var G__43286 = (i__43258 + (1));
seq__43255 = G__43283;
chunk__43256 = G__43284;
count__43257 = G__43285;
i__43258 = G__43286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43255);
if(temp__5735__auto__){
var seq__43255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43255__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43255__$1);
var G__43291 = cljs.core.chunk_rest(seq__43255__$1);
var G__43292 = c__4550__auto__;
var G__43293 = cljs.core.count(c__4550__auto__);
var G__43294 = (0);
seq__43255 = G__43291;
chunk__43256 = G__43292;
count__43257 = G__43293;
i__43258 = G__43294;
continue;
} else {
var k = cljs.core.first(seq__43255__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__43295 = cljs.core.next(seq__43255__$1);
var G__43296 = null;
var G__43297 = (0);
var G__43298 = (0);
seq__43255 = G__43295;
chunk__43256 = G__43296;
count__43257 = G__43297;
i__43258 = G__43298;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
