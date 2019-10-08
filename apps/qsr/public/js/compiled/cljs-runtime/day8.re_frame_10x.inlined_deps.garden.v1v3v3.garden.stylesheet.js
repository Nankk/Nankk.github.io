goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36271 = arguments.length;
var i__4731__auto___36272 = (0);
while(true){
if((i__4731__auto___36272 < len__4730__auto___36271)){
args__4736__auto__.push((arguments[i__4731__auto___36272]));

var G__36273 = (i__4731__auto___36272 + (1));
i__4731__auto___36272 = G__36273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__36274__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__36274 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__36276__i = 0, G__36276__a = new Array(arguments.length -  0);
while (G__36276__i < G__36276__a.length) {G__36276__a[G__36276__i] = arguments[G__36276__i + 0]; ++G__36276__i;}
  children = new cljs.core.IndexedSeq(G__36276__a,0,null);
} 
return G__36274__delegate.call(this,children);};
G__36274.cljs$lang$maxFixedArity = 0;
G__36274.cljs$lang$applyTo = (function (arglist__36277){
var children = cljs.core.seq(arglist__36277);
return G__36274__delegate(children);
});
G__36274.cljs$core$IFn$_invoke$arity$variadic = G__36274__delegate;
return G__36274;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq36249){
var G__36250 = cljs.core.first(seq36249);
var seq36249__$1 = cljs.core.next(seq36249);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36250,seq36249__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__36281__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__36281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36283__i = 0, G__36283__a = new Array(arguments.length -  0);
while (G__36283__i < G__36283__a.length) {G__36283__a[G__36283__i] = arguments[G__36283__i + 0]; ++G__36283__i;}
  args = new cljs.core.IndexedSeq(G__36283__a,0,null);
} 
return G__36281__delegate.call(this,args);};
G__36281.cljs$lang$maxFixedArity = 0;
G__36281.cljs$lang$applyTo = (function (arglist__36284){
var args = cljs.core.seq(arglist__36284);
return G__36281__delegate(args);
});
G__36281.cljs$core$IFn$_invoke$arity$variadic = G__36281__delegate;
return G__36281;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36286 = arguments.length;
var i__4731__auto___36287 = (0);
while(true){
if((i__4731__auto___36287 < len__4730__auto___36286)){
args__4736__auto__.push((arguments[i__4731__auto___36287]));

var G__36288 = (i__4731__auto___36287 + (1));
i__4731__auto___36287 = G__36288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq36251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36251));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__36255 = arguments.length;
switch (G__36255) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___36290 = arguments.length;
var i__4731__auto___36291 = (0);
while(true){
if((i__4731__auto___36291 < len__4730__auto___36290)){
args_arr__4751__auto__.push((arguments[i__4731__auto___36291]));

var G__36292 = (i__4731__auto___36291 + (1));
i__4731__auto___36291 = G__36292;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq36253){
var G__36254 = cljs.core.first(seq36253);
var seq36253__$1 = cljs.core.next(seq36253);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36254,seq36253__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36298 = arguments.length;
var i__4731__auto___36299 = (0);
while(true){
if((i__4731__auto___36299 < len__4730__auto___36298)){
args__4736__auto__.push((arguments[i__4731__auto___36299]));

var G__36300 = (i__4731__auto___36299 + (1));
i__4731__auto___36299 = G__36300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq36259){
var G__36260 = cljs.core.first(seq36259);
var seq36259__$1 = cljs.core.next(seq36259);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36260,seq36259__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36301 = arguments.length;
var i__4731__auto___36302 = (0);
while(true){
if((i__4731__auto___36302 < len__4730__auto___36301)){
args__4736__auto__.push((arguments[i__4731__auto___36302]));

var G__36304 = (i__4731__auto___36302 + (1));
i__4731__auto___36302 = G__36304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq36264){
var G__36265 = cljs.core.first(seq36264);
var seq36264__$1 = cljs.core.next(seq36264);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36265,seq36264__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.js.map
