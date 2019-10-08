goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44533){
var map__44534 = p__44533;
var map__44534__$1 = (((((!((map__44534 == null))))?(((((map__44534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44534):map__44534);
var m = map__44534__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44536_44695 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44537_44696 = null;
var count__44538_44697 = (0);
var i__44539_44698 = (0);
while(true){
if((i__44539_44698 < count__44538_44697)){
var f_44703 = chunk__44537_44696.cljs$core$IIndexed$_nth$arity$2(null,i__44539_44698);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44703], 0));


var G__44704 = seq__44536_44695;
var G__44705 = chunk__44537_44696;
var G__44706 = count__44538_44697;
var G__44707 = (i__44539_44698 + (1));
seq__44536_44695 = G__44704;
chunk__44537_44696 = G__44705;
count__44538_44697 = G__44706;
i__44539_44698 = G__44707;
continue;
} else {
var temp__5735__auto___44715 = cljs.core.seq(seq__44536_44695);
if(temp__5735__auto___44715){
var seq__44536_44717__$1 = temp__5735__auto___44715;
if(cljs.core.chunked_seq_QMARK_(seq__44536_44717__$1)){
var c__4550__auto___44718 = cljs.core.chunk_first(seq__44536_44717__$1);
var G__44719 = cljs.core.chunk_rest(seq__44536_44717__$1);
var G__44720 = c__4550__auto___44718;
var G__44721 = cljs.core.count(c__4550__auto___44718);
var G__44722 = (0);
seq__44536_44695 = G__44719;
chunk__44537_44696 = G__44720;
count__44538_44697 = G__44721;
i__44539_44698 = G__44722;
continue;
} else {
var f_44723 = cljs.core.first(seq__44536_44717__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44723], 0));


var G__44724 = cljs.core.next(seq__44536_44717__$1);
var G__44725 = null;
var G__44726 = (0);
var G__44727 = (0);
seq__44536_44695 = G__44724;
chunk__44537_44696 = G__44725;
count__44538_44697 = G__44726;
i__44539_44698 = G__44727;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44728 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44728], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44728)))?cljs.core.second(arglists_44728):arglists_44728)], 0));
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
var seq__44540_44736 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44541_44737 = null;
var count__44542_44738 = (0);
var i__44543_44739 = (0);
while(true){
if((i__44543_44739 < count__44542_44738)){
var vec__44558_44741 = chunk__44541_44737.cljs$core$IIndexed$_nth$arity$2(null,i__44543_44739);
var name_44742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44558_44741,(0),null);
var map__44561_44743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44558_44741,(1),null);
var map__44561_44744__$1 = (((((!((map__44561_44743 == null))))?(((((map__44561_44743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44561_44743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44561_44743):map__44561_44743);
var doc_44745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44561_44744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44561_44744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44742], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44746], 0));

if(cljs.core.truth_(doc_44745)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44745], 0));
} else {
}


var G__44751 = seq__44540_44736;
var G__44752 = chunk__44541_44737;
var G__44753 = count__44542_44738;
var G__44754 = (i__44543_44739 + (1));
seq__44540_44736 = G__44751;
chunk__44541_44737 = G__44752;
count__44542_44738 = G__44753;
i__44543_44739 = G__44754;
continue;
} else {
var temp__5735__auto___44755 = cljs.core.seq(seq__44540_44736);
if(temp__5735__auto___44755){
var seq__44540_44756__$1 = temp__5735__auto___44755;
if(cljs.core.chunked_seq_QMARK_(seq__44540_44756__$1)){
var c__4550__auto___44757 = cljs.core.chunk_first(seq__44540_44756__$1);
var G__44758 = cljs.core.chunk_rest(seq__44540_44756__$1);
var G__44759 = c__4550__auto___44757;
var G__44760 = cljs.core.count(c__4550__auto___44757);
var G__44761 = (0);
seq__44540_44736 = G__44758;
chunk__44541_44737 = G__44759;
count__44542_44738 = G__44760;
i__44543_44739 = G__44761;
continue;
} else {
var vec__44563_44762 = cljs.core.first(seq__44540_44756__$1);
var name_44763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563_44762,(0),null);
var map__44566_44764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563_44762,(1),null);
var map__44566_44765__$1 = (((((!((map__44566_44764 == null))))?(((((map__44566_44764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44566_44764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44566_44764):map__44566_44764);
var doc_44766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44566_44765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44566_44765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44763], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44767], 0));

if(cljs.core.truth_(doc_44766)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44766], 0));
} else {
}


var G__44768 = cljs.core.next(seq__44540_44756__$1);
var G__44769 = null;
var G__44770 = (0);
var G__44771 = (0);
seq__44540_44736 = G__44768;
chunk__44541_44737 = G__44769;
count__44542_44738 = G__44770;
i__44543_44739 = G__44771;
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

var seq__44576 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44577 = null;
var count__44578 = (0);
var i__44579 = (0);
while(true){
if((i__44579 < count__44578)){
var role = chunk__44577.cljs$core$IIndexed$_nth$arity$2(null,i__44579);
var temp__5735__auto___44773__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44773__$1)){
var spec_44774 = temp__5735__auto___44773__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44774)], 0));
} else {
}


var G__44775 = seq__44576;
var G__44776 = chunk__44577;
var G__44777 = count__44578;
var G__44778 = (i__44579 + (1));
seq__44576 = G__44775;
chunk__44577 = G__44776;
count__44578 = G__44777;
i__44579 = G__44778;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44576);
if(temp__5735__auto____$1){
var seq__44576__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44576__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44576__$1);
var G__44779 = cljs.core.chunk_rest(seq__44576__$1);
var G__44780 = c__4550__auto__;
var G__44781 = cljs.core.count(c__4550__auto__);
var G__44782 = (0);
seq__44576 = G__44779;
chunk__44577 = G__44780;
count__44578 = G__44781;
i__44579 = G__44782;
continue;
} else {
var role = cljs.core.first(seq__44576__$1);
var temp__5735__auto___44783__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44783__$2)){
var spec_44784 = temp__5735__auto___44783__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44784)], 0));
} else {
}


var G__44789 = cljs.core.next(seq__44576__$1);
var G__44790 = null;
var G__44791 = (0);
var G__44792 = (0);
seq__44576 = G__44789;
chunk__44577 = G__44790;
count__44578 = G__44791;
i__44579 = G__44792;
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
var G__44793 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44794 = cljs.core.ex_cause(t);
via = G__44793;
t = G__44794;
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
var map__44594 = datafied_throwable;
var map__44594__$1 = (((((!((map__44594 == null))))?(((((map__44594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44594):map__44594);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44594__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44594__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44594__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44595 = cljs.core.last(via);
var map__44595__$1 = (((((!((map__44595 == null))))?(((((map__44595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44595):map__44595);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44595__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44595__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44595__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44596 = data;
var map__44596__$1 = (((((!((map__44596 == null))))?(((((map__44596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44596):map__44596);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44596__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44596__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44596__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44597 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44597__$1 = (((((!((map__44597 == null))))?(((((map__44597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44597):map__44597);
var top_data = map__44597__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44609 = phase;
var G__44609__$1 = (((G__44609 instanceof cljs.core.Keyword))?G__44609.fqn:null);
switch (G__44609__$1) {
case "read-source":
var map__44611 = data;
var map__44611__$1 = (((((!((map__44611 == null))))?(((((map__44611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44611):map__44611);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44614 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44614__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44614,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44614);
var G__44614__$2 = (cljs.core.truth_((function (){var fexpr__44615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44615.cljs$core$IFn$_invoke$arity$1 ? fexpr__44615.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44615.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44614__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44614__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44614__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44617 = top_data;
var G__44617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44617);
var G__44617__$2 = (cljs.core.truth_((function (){var fexpr__44618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44618.cljs$core$IFn$_invoke$arity$1 ? fexpr__44618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44617__$1);
var G__44617__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44617__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44617__$2);
var G__44617__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44617__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44617__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44619 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44619,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44619,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44619,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44619,(3),null);
var G__44622 = top_data;
var G__44622__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44622,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44622);
var G__44622__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44622__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44622__$1);
var G__44622__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44622__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44622__$2);
var G__44622__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44622__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44622__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44622__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44622__$4;
}

break;
case "execution":
var vec__44629 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44629,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44629,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44629,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44629,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44629,source__$1,method,file,line,G__44609,G__44609__$1,map__44594,map__44594__$1,via,trace,phase,map__44595,map__44595__$1,type,message,data,map__44596,map__44596__$1,problems,fn,caller,map__44597,map__44597__$1,top_data,source){
return (function (p1__44593_SHARP_){
var or__4131__auto__ = (p1__44593_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44635.cljs$core$IFn$_invoke$arity$1 ? fexpr__44635.cljs$core$IFn$_invoke$arity$1(p1__44593_SHARP_) : fexpr__44635.call(null,p1__44593_SHARP_));
}
});})(vec__44629,source__$1,method,file,line,G__44609,G__44609__$1,map__44594,map__44594__$1,via,trace,phase,map__44595,map__44595__$1,type,message,data,map__44596,map__44596__$1,problems,fn,caller,map__44597,map__44597__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44636 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44636__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44636,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44636);
var G__44636__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44636__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44636__$1);
var G__44636__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44636__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44636__$2);
var G__44636__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44636__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44636__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44636__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44636__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44609__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44641){
var map__44642 = p__44641;
var map__44642__$1 = (((((!((map__44642 == null))))?(((((map__44642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44642):map__44642);
var triage_data = map__44642__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__44644 = phase;
var G__44644__$1 = (((G__44644 instanceof cljs.core.Keyword))?G__44644.fqn:null);
switch (G__44644__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44645 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44647 = loc;
var G__44648 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44652_44809 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44653_44810 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44654_44811 = true;
var _STAR_print_fn_STAR__temp_val__44655_44812 = ((function (_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44654_44811;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44655_44812;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,_STAR_print_fn_STAR__temp_val__44655_44812,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,_STAR_print_fn_STAR__temp_val__44655_44812,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44639_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44639_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,_STAR_print_fn_STAR__temp_val__44655_44812,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44652_44809,_STAR_print_fn_STAR__orig_val__44653_44810,_STAR_print_newline_STAR__temp_val__44654_44811,_STAR_print_fn_STAR__temp_val__44655_44812,sb__4661__auto__,G__44645,G__44646,G__44647,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44653_44810;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44652_44809;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44645,G__44646,G__44647,G__44648) : format.call(null,G__44645,G__44646,G__44647,G__44648));

break;
case "macroexpansion":
var G__44660 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44661 = cause_type;
var G__44662 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44663 = loc;
var G__44664 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44660,G__44661,G__44662,G__44663,G__44664) : format.call(null,G__44660,G__44661,G__44662,G__44663,G__44664));

break;
case "compile-syntax-check":
var G__44665 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44666 = cause_type;
var G__44667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44668 = loc;
var G__44669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44665,G__44666,G__44667,G__44668,G__44669) : format.call(null,G__44665,G__44666,G__44667,G__44668,G__44669));

break;
case "compilation":
var G__44670 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44671 = cause_type;
var G__44672 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44673 = loc;
var G__44674 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44670,G__44671,G__44672,G__44673,G__44674) : format.call(null,G__44670,G__44671,G__44672,G__44673,G__44674));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44677 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44678 = symbol;
var G__44679 = loc;
var G__44680 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44682_44835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44683_44836 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44684_44837 = true;
var _STAR_print_fn_STAR__temp_val__44685_44838 = ((function (_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44684_44837;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44685_44838;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,_STAR_print_fn_STAR__temp_val__44685_44838,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,_STAR_print_fn_STAR__temp_val__44685_44838,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44640_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44640_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,_STAR_print_fn_STAR__temp_val__44685_44838,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44682_44835,_STAR_print_fn_STAR__orig_val__44683_44836,_STAR_print_newline_STAR__temp_val__44684_44837,_STAR_print_fn_STAR__temp_val__44685_44838,sb__4661__auto__,G__44677,G__44678,G__44679,G__44644,G__44644__$1,loc,class_name,simple_class,cause_type,format,map__44642,map__44642__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44683_44836;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44682_44835;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44677,G__44678,G__44679,G__44680) : format.call(null,G__44677,G__44678,G__44679,G__44680));
} else {
var G__44690 = "Execution error%s at %s(%s).\n%s\n";
var G__44691 = cause_type;
var G__44692 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44693 = loc;
var G__44694 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44690,G__44691,G__44692,G__44693,G__44694) : format.call(null,G__44690,G__44691,G__44692,G__44693,G__44694));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44644__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
