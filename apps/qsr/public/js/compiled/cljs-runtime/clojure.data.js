goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__31199){
var vec__31200 = p__31199;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31200,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__31210 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__31214 = arguments.length;
switch (G__31214) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__31235_31321 = clojure.data.equality_partition;
var G__31236_31322 = "null";
var G__31237_31323 = ((function (G__31235_31321,G__31236_31322){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31235_31321,G__31236_31322))
;
goog.object.set(G__31235_31321,G__31236_31322,G__31237_31323);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__31238_31324 = clojure.data.equality_partition;
var G__31239_31325 = "string";
var G__31240_31326 = ((function (G__31238_31324,G__31239_31325){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31238_31324,G__31239_31325))
;
goog.object.set(G__31238_31324,G__31239_31325,G__31240_31326);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__31241_31327 = clojure.data.equality_partition;
var G__31242_31328 = "number";
var G__31243_31329 = ((function (G__31241_31327,G__31242_31328){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31241_31327,G__31242_31328))
;
goog.object.set(G__31241_31327,G__31242_31328,G__31243_31329);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__31244_31330 = clojure.data.equality_partition;
var G__31245_31331 = "array";
var G__31246_31332 = ((function (G__31244_31330,G__31245_31331){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__31244_31330,G__31245_31331))
;
goog.object.set(G__31244_31330,G__31245_31331,G__31246_31332);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__31247_31333 = clojure.data.equality_partition;
var G__31248_31334 = "function";
var G__31249_31335 = ((function (G__31247_31333,G__31248_31334){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31247_31333,G__31248_31334))
;
goog.object.set(G__31247_31333,G__31248_31334,G__31249_31335);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__31250_31336 = clojure.data.equality_partition;
var G__31251_31337 = "boolean";
var G__31252_31338 = ((function (G__31250_31336,G__31251_31337){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31250_31336,G__31251_31337))
;
goog.object.set(G__31250_31336,G__31251_31337,G__31252_31338);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__31255_31340 = clojure.data.equality_partition;
var G__31256_31341 = "_";
var G__31259_31342 = ((function (G__31255_31340,G__31256_31341){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__31255_31340,G__31256_31341))
;
goog.object.set(G__31255_31340,G__31256_31341,G__31259_31342);
goog.object.set(clojure.data.Diff,"null",true);

var G__31267_31352 = clojure.data.diff_similar;
var G__31268_31353 = "null";
var G__31269_31354 = ((function (G__31267_31352,G__31268_31353){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31267_31352,G__31268_31353))
;
goog.object.set(G__31267_31352,G__31268_31353,G__31269_31354);

goog.object.set(clojure.data.Diff,"string",true);

var G__31273_31358 = clojure.data.diff_similar;
var G__31274_31359 = "string";
var G__31275_31360 = ((function (G__31273_31358,G__31274_31359){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31273_31358,G__31274_31359))
;
goog.object.set(G__31273_31358,G__31274_31359,G__31275_31360);

goog.object.set(clojure.data.Diff,"number",true);

var G__31277_31361 = clojure.data.diff_similar;
var G__31278_31362 = "number";
var G__31279_31363 = ((function (G__31277_31361,G__31278_31362){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31277_31361,G__31278_31362))
;
goog.object.set(G__31277_31361,G__31278_31362,G__31279_31363);

goog.object.set(clojure.data.Diff,"array",true);

var G__31281_31364 = clojure.data.diff_similar;
var G__31282_31365 = "array";
var G__31283_31366 = ((function (G__31281_31364,G__31282_31365){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__31281_31364,G__31282_31365))
;
goog.object.set(G__31281_31364,G__31282_31365,G__31283_31366);

goog.object.set(clojure.data.Diff,"function",true);

var G__31287_31370 = clojure.data.diff_similar;
var G__31288_31371 = "function";
var G__31289_31372 = ((function (G__31287_31370,G__31288_31371){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31287_31370,G__31288_31371))
;
goog.object.set(G__31287_31370,G__31288_31371,G__31289_31372);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__31290_31374 = clojure.data.diff_similar;
var G__31291_31375 = "boolean";
var G__31292_31376 = ((function (G__31290_31374,G__31291_31375){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31290_31374,G__31291_31375))
;
goog.object.set(G__31290_31374,G__31291_31375,G__31292_31376);

goog.object.set(clojure.data.Diff,"_",true);

var G__31294_31379 = clojure.data.diff_similar;
var G__31295_31380 = "_";
var G__31296_31381 = ((function (G__31294_31379,G__31295_31380){
return (function (a,b){
var fexpr__31301 = (function (){var G__31302 = clojure.data.equality_partition(a);
var G__31302__$1 = (((G__31302 instanceof cljs.core.Keyword))?G__31302.fqn:null);
switch (G__31302__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31302__$1)].join('')));

}
})();
return (fexpr__31301.cljs$core$IFn$_invoke$arity$2 ? fexpr__31301.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31301.call(null,a,b));
});})(G__31294_31379,G__31295_31380))
;
goog.object.set(G__31294_31379,G__31295_31380,G__31296_31381);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
