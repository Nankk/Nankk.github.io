goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34622 = arguments.length;
var i__4731__auto___34623 = (0);
while(true){
if((i__4731__auto___34623 < len__4730__auto___34622)){
args__4736__auto__.push((arguments[i__4731__auto___34623]));

var G__34624 = (i__4731__auto___34623 + (1));
i__4731__auto___34623 = G__34624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq34588){
var G__34589 = cljs.core.first(seq34588);
var seq34588__$1 = cljs.core.next(seq34588);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34589,seq34588__$1);
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"_",true);

var G__34590_34625 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str;
var G__34591_34626 = "_";
var G__34592_34627 = ((function (G__34590_34625,G__34591_34626){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__34590_34625,G__34591_34626))
;
goog.object.set(G__34590_34625,G__34591_34626,G__34592_34627);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"null",true);

var G__34593_34628 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str;
var G__34594_34629 = "null";
var G__34595_34630 = ((function (G__34593_34628,G__34594_34629){
return (function (this$){
return "";
});})(G__34593_34628,G__34594_34629))
;
goog.object.set(G__34593_34628,G__34594_34629,G__34595_34630);
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34631 = arguments.length;
var i__4731__auto___34632 = (0);
while(true){
if((i__4731__auto___34632 < len__4730__auto___34631)){
args__4736__auto__.push((arguments[i__4731__auto___34632]));

var G__34633 = (i__4731__auto___34632 + (1));
i__4731__auto___34632 = G__34633;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,args));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq34596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34596));
});

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34636 = arguments.length;
var i__4731__auto___34637 = (0);
while(true){
if((i__4731__auto___34637 < len__4730__auto___34636)){
args__4736__auto__.push((arguments[i__4731__auto___34637]));

var G__34638 = (i__4731__auto___34637 + (1));
i__4731__auto___34637 = G__34638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__34601){
var vec__34602 = p__34601;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34602,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq34599){
var G__34600 = cljs.core.first(seq34599);
var seq34599__$1 = cljs.core.next(seq34599);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34600,seq34599__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34641 = arguments.length;
var i__4731__auto___34643 = (0);
while(true){
if((i__4731__auto___34643 < len__4730__auto___34641)){
args__4736__auto__.push((arguments[i__4731__auto___34643]));

var G__34645 = (i__4731__auto___34643 + (1));
i__4731__auto___34643 = G__34645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__34607){
var vec__34608 = p__34607;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34608,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq34605){
var G__34606 = cljs.core.first(seq34605);
var seq34605__$1 = cljs.core.next(seq34605);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34606,seq34605__$1);
});

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__34611(s__34612){
return (new cljs.core.LazySeq(null,(function (){
var s__34612__$1 = s__34612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34612__$1);
if(temp__5735__auto__){
var s__34612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34612__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34612__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34614 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34613 = (0);
while(true){
if((i__34613 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34613);
cljs.core.chunk_append(b__34614,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(x)));

var G__34648 = (i__34613 + (1));
i__34613 = G__34648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34614),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__34611(cljs.core.chunk_rest(s__34612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34614),null);
}
} else {
var x = cljs.core.first(s__34612__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__34611(cljs.core.rest(s__34612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__34615 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34651 = arguments.length;
var i__4731__auto___34652 = (0);
while(true){
if((i__4731__auto___34652 < len__4730__auto___34651)){
args__4736__auto__.push((arguments[i__4731__auto___34652]));

var G__34653 = (i__4731__auto___34652 + (1));
i__4731__auto___34652 = G__34653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq34618){
var G__34619 = cljs.core.first(seq34618);
var seq34618__$1 = cljs.core.next(seq34618);
var G__34620 = cljs.core.first(seq34618__$1);
var seq34618__$2 = cljs.core.next(seq34618__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34619,G__34620,seq34618__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34654 = arguments.length;
var i__4731__auto___34655 = (0);
while(true){
if((i__4731__auto___34655 < len__4730__auto___34654)){
args__4736__auto__.push((arguments[i__4731__auto___34655]));

var G__34656 = (i__4731__auto___34655 + (1));
i__4731__auto___34655 = G__34656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__34657 = (i - (1));
var G__34658 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__34657;
v_seqs__$2 = G__34658;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq34621){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34621));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.js.map
