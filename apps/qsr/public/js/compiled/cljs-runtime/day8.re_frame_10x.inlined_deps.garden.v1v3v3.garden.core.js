goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36794 = arguments.length;
var i__4731__auto___36795 = (0);
while(true){
if((i__4731__auto___36795 < len__4730__auto___36794)){
args__4736__auto__.push((arguments[i__4731__auto___36795]));

var G__36796 = (i__4731__auto___36795 + (1));
i__4731__auto___36795 = G__36796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css,rules);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq36792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36792));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36797 = arguments.length;
var i__4731__auto___36798 = (0);
while(true){
if((i__4731__auto___36798 < len__4730__auto___36797)){
args__4736__auto__.push((arguments[i__4731__auto___36798]));

var G__36799 = (i__4731__auto___36798 + (1));
i__4731__auto___36798 = G__36799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_style(maps);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq36793){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36793));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.js.map
