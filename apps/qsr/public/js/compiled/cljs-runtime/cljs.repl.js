goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44356){
var map__44357 = p__44356;
var map__44357__$1 = (((((!((map__44357 == null))))?(((((map__44357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44357):map__44357);
var m = map__44357__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44359_44495 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44360_44496 = null;
var count__44361_44497 = (0);
var i__44362_44498 = (0);
while(true){
if((i__44362_44498 < count__44361_44497)){
var f_44499 = chunk__44360_44496.cljs$core$IIndexed$_nth$arity$2(null,i__44362_44498);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44499], 0));


var G__44500 = seq__44359_44495;
var G__44501 = chunk__44360_44496;
var G__44502 = count__44361_44497;
var G__44503 = (i__44362_44498 + (1));
seq__44359_44495 = G__44500;
chunk__44360_44496 = G__44501;
count__44361_44497 = G__44502;
i__44362_44498 = G__44503;
continue;
} else {
var temp__5735__auto___44507 = cljs.core.seq(seq__44359_44495);
if(temp__5735__auto___44507){
var seq__44359_44509__$1 = temp__5735__auto___44507;
if(cljs.core.chunked_seq_QMARK_(seq__44359_44509__$1)){
var c__4550__auto___44512 = cljs.core.chunk_first(seq__44359_44509__$1);
var G__44513 = cljs.core.chunk_rest(seq__44359_44509__$1);
var G__44514 = c__4550__auto___44512;
var G__44515 = cljs.core.count(c__4550__auto___44512);
var G__44516 = (0);
seq__44359_44495 = G__44513;
chunk__44360_44496 = G__44514;
count__44361_44497 = G__44515;
i__44362_44498 = G__44516;
continue;
} else {
var f_44517 = cljs.core.first(seq__44359_44509__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44517], 0));


var G__44518 = cljs.core.next(seq__44359_44509__$1);
var G__44519 = null;
var G__44520 = (0);
var G__44521 = (0);
seq__44359_44495 = G__44518;
chunk__44360_44496 = G__44519;
count__44361_44497 = G__44520;
i__44362_44498 = G__44521;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44523 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44523], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44523)))?cljs.core.second(arglists_44523):arglists_44523)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44363_44525 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44364_44526 = null;
var count__44365_44527 = (0);
var i__44366_44528 = (0);
while(true){
if((i__44366_44528 < count__44365_44527)){
var vec__44377_44529 = chunk__44364_44526.cljs$core$IIndexed$_nth$arity$2(null,i__44366_44528);
var name_44530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377_44529,(0),null);
var map__44380_44531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377_44529,(1),null);
var map__44380_44532__$1 = (((((!((map__44380_44531 == null))))?(((((map__44380_44531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44380_44531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44380_44531):map__44380_44531);
var doc_44533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44380_44532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44380_44532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44530], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44534], 0));

if(cljs.core.truth_(doc_44533)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44533], 0));
} else {
}


var G__44541 = seq__44363_44525;
var G__44542 = chunk__44364_44526;
var G__44543 = count__44365_44527;
var G__44544 = (i__44366_44528 + (1));
seq__44363_44525 = G__44541;
chunk__44364_44526 = G__44542;
count__44365_44527 = G__44543;
i__44366_44528 = G__44544;
continue;
} else {
var temp__5735__auto___44547 = cljs.core.seq(seq__44363_44525);
if(temp__5735__auto___44547){
var seq__44363_44548__$1 = temp__5735__auto___44547;
if(cljs.core.chunked_seq_QMARK_(seq__44363_44548__$1)){
var c__4550__auto___44549 = cljs.core.chunk_first(seq__44363_44548__$1);
var G__44550 = cljs.core.chunk_rest(seq__44363_44548__$1);
var G__44551 = c__4550__auto___44549;
var G__44552 = cljs.core.count(c__4550__auto___44549);
var G__44553 = (0);
seq__44363_44525 = G__44550;
chunk__44364_44526 = G__44551;
count__44365_44527 = G__44552;
i__44366_44528 = G__44553;
continue;
} else {
var vec__44382_44554 = cljs.core.first(seq__44363_44548__$1);
var name_44555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44382_44554,(0),null);
var map__44385_44556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44382_44554,(1),null);
var map__44385_44557__$1 = (((((!((map__44385_44556 == null))))?(((((map__44385_44556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44385_44556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44385_44556):map__44385_44556);
var doc_44558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385_44557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385_44557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44555], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44559], 0));

if(cljs.core.truth_(doc_44558)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44558], 0));
} else {
}


var G__44562 = cljs.core.next(seq__44363_44548__$1);
var G__44563 = null;
var G__44564 = (0);
var G__44565 = (0);
seq__44363_44525 = G__44562;
chunk__44364_44526 = G__44563;
count__44365_44527 = G__44564;
i__44366_44528 = G__44565;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44387 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44388 = null;
var count__44389 = (0);
var i__44390 = (0);
while(true){
if((i__44390 < count__44389)){
var role = chunk__44388.cljs$core$IIndexed$_nth$arity$2(null,i__44390);
var temp__5735__auto___44566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44566__$1)){
var spec_44567 = temp__5735__auto___44566__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44567)], 0));
} else {
}


var G__44569 = seq__44387;
var G__44570 = chunk__44388;
var G__44571 = count__44389;
var G__44572 = (i__44390 + (1));
seq__44387 = G__44569;
chunk__44388 = G__44570;
count__44389 = G__44571;
i__44390 = G__44572;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44387);
if(temp__5735__auto____$1){
var seq__44387__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44387__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44387__$1);
var G__44575 = cljs.core.chunk_rest(seq__44387__$1);
var G__44576 = c__4550__auto__;
var G__44577 = cljs.core.count(c__4550__auto__);
var G__44578 = (0);
seq__44387 = G__44575;
chunk__44388 = G__44576;
count__44389 = G__44577;
i__44390 = G__44578;
continue;
} else {
var role = cljs.core.first(seq__44387__$1);
var temp__5735__auto___44579__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44579__$2)){
var spec_44580 = temp__5735__auto___44579__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44580)], 0));
} else {
}


var G__44581 = cljs.core.next(seq__44387__$1);
var G__44582 = null;
var G__44583 = (0);
var G__44584 = (0);
seq__44387 = G__44581;
chunk__44388 = G__44582;
count__44389 = G__44583;
i__44390 = G__44584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44589 = cljs.core.ex_cause(t);
via = G__44588;
t = G__44589;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44397 = datafied_throwable;
var map__44397__$1 = (((((!((map__44397 == null))))?(((((map__44397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44397):map__44397);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44397__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44397__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44397__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44398 = cljs.core.last(via);
var map__44398__$1 = (((((!((map__44398 == null))))?(((((map__44398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44398):map__44398);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44399 = data;
var map__44399__$1 = (((((!((map__44399 == null))))?(((((map__44399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44399):map__44399);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44399__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44399__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44399__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44400 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44400__$1 = (((((!((map__44400 == null))))?(((((map__44400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44400):map__44400);
var top_data = map__44400__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44405 = phase;
var G__44405__$1 = (((G__44405 instanceof cljs.core.Keyword))?G__44405.fqn:null);
switch (G__44405__$1) {
case "read-source":
var map__44406 = data;
var map__44406__$1 = (((((!((map__44406 == null))))?(((((map__44406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44406):map__44406);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44406__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44406__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44408 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44408__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44408,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44408);
var G__44408__$2 = (cljs.core.truth_((function (){var fexpr__44409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44409.cljs$core$IFn$_invoke$arity$1 ? fexpr__44409.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44409.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44408__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44408__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44408__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44410 = top_data;
var G__44410__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44410,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44410);
var G__44410__$2 = (cljs.core.truth_((function (){var fexpr__44411 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44411.cljs$core$IFn$_invoke$arity$1 ? fexpr__44411.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44411.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44410__$1);
var G__44410__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44410__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44410__$2);
var G__44410__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44410__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44410__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44410__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44410__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44416 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(3),null);
var G__44419 = top_data;
var G__44419__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44419,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44419);
var G__44419__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44419__$1);
var G__44419__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44419__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44419__$2);
var G__44419__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44419__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44419__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44419__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44419__$4;
}

break;
case "execution":
var vec__44427 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44427,source__$1,method,file,line,G__44405,G__44405__$1,map__44397,map__44397__$1,via,trace,phase,map__44398,map__44398__$1,type,message,data,map__44399,map__44399__$1,problems,fn,caller,map__44400,map__44400__$1,top_data,source){
return (function (p1__44396_SHARP_){
var or__4131__auto__ = (p1__44396_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44431.cljs$core$IFn$_invoke$arity$1 ? fexpr__44431.cljs$core$IFn$_invoke$arity$1(p1__44396_SHARP_) : fexpr__44431.call(null,p1__44396_SHARP_));
}
});})(vec__44427,source__$1,method,file,line,G__44405,G__44405__$1,map__44397,map__44397__$1,via,trace,phase,map__44398,map__44398__$1,type,message,data,map__44399,map__44399__$1,problems,fn,caller,map__44400,map__44400__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44432 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44432__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44432,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44432);
var G__44432__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44432__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44432__$1);
var G__44432__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44432__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44432__$2);
var G__44432__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44432__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44432__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44432__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44432__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44405__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44440){
var map__44441 = p__44440;
var map__44441__$1 = (((((!((map__44441 == null))))?(((((map__44441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44441):map__44441);
var triage_data = map__44441__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44449 = phase;
var G__44449__$1 = (((G__44449 instanceof cljs.core.Keyword))?G__44449.fqn:null);
switch (G__44449__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44450 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44452 = loc;
var G__44453 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44454_44658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44455_44659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44456_44660 = true;
var _STAR_print_fn_STAR__temp_val__44457_44661 = ((function (_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44456_44660;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44457_44661;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,_STAR_print_fn_STAR__temp_val__44457_44661,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,_STAR_print_fn_STAR__temp_val__44457_44661,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44437_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44437_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,_STAR_print_fn_STAR__temp_val__44457_44661,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44454_44658,_STAR_print_fn_STAR__orig_val__44455_44659,_STAR_print_newline_STAR__temp_val__44456_44660,_STAR_print_fn_STAR__temp_val__44457_44661,sb__4661__auto__,G__44450,G__44451,G__44452,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44455_44659;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44454_44658;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44450,G__44451,G__44452,G__44453) : format.call(null,G__44450,G__44451,G__44452,G__44453));

break;
case "macroexpansion":
var G__44459 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44460 = cause_type;
var G__44461 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44462 = loc;
var G__44463 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44459,G__44460,G__44461,G__44462,G__44463) : format.call(null,G__44459,G__44460,G__44461,G__44462,G__44463));

break;
case "compile-syntax-check":
var G__44465 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44466 = cause_type;
var G__44467 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44468 = loc;
var G__44469 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44465,G__44466,G__44467,G__44468,G__44469) : format.call(null,G__44465,G__44466,G__44467,G__44468,G__44469));

break;
case "compilation":
var G__44470 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44471 = cause_type;
var G__44472 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44473 = loc;
var G__44474 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44470,G__44471,G__44472,G__44473,G__44474) : format.call(null,G__44470,G__44471,G__44472,G__44473,G__44474));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44475 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44476 = symbol;
var G__44477 = loc;
var G__44478 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44479_44668 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44480_44669 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44481_44670 = true;
var _STAR_print_fn_STAR__temp_val__44482_44671 = ((function (_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44481_44670;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44482_44671;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,_STAR_print_fn_STAR__temp_val__44482_44671,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,_STAR_print_fn_STAR__temp_val__44482_44671,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44439_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44439_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,_STAR_print_fn_STAR__temp_val__44482_44671,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44479_44668,_STAR_print_fn_STAR__orig_val__44480_44669,_STAR_print_newline_STAR__temp_val__44481_44670,_STAR_print_fn_STAR__temp_val__44482_44671,sb__4661__auto__,G__44475,G__44476,G__44477,G__44449,G__44449__$1,loc,class_name,simple_class,cause_type,format,map__44441,map__44441__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44480_44669;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44479_44668;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44475,G__44476,G__44477,G__44478) : format.call(null,G__44475,G__44476,G__44477,G__44478));
} else {
var G__44483 = "Execution error%s at %s(%s).\n%s\n";
var G__44484 = cause_type;
var G__44485 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44486 = loc;
var G__44487 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44483,G__44484,G__44485,G__44486,G__44487) : format.call(null,G__44483,G__44484,G__44485,G__44486,G__44487));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44449__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
