goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36672__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36673__i = 0, G__36673__a = new Array(arguments.length -  0);
while (G__36673__i < G__36673__a.length) {G__36673__a[G__36673__i] = arguments[G__36673__i + 0]; ++G__36673__i;}
  args = new cljs.core.IndexedSeq(G__36673__a,0,null);
} 
return G__36672__delegate.call(this,args);};
G__36672.cljs$lang$maxFixedArity = 0;
G__36672.cljs$lang$applyTo = (function (arglist__36674){
var args = cljs.core.seq(arglist__36674);
return G__36672__delegate(args);
});
G__36672.cljs$core$IFn$_invoke$arity$variadic = G__36672__delegate;
return G__36672;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36675__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36676__i = 0, G__36676__a = new Array(arguments.length -  0);
while (G__36676__i < G__36676__a.length) {G__36676__a[G__36676__i] = arguments[G__36676__i + 0]; ++G__36676__i;}
  args = new cljs.core.IndexedSeq(G__36676__a,0,null);
} 
return G__36675__delegate.call(this,args);};
G__36675.cljs$lang$maxFixedArity = 0;
G__36675.cljs$lang$applyTo = (function (arglist__36677){
var args = cljs.core.seq(arglist__36677);
return G__36675__delegate(args);
});
G__36675.cljs$core$IFn$_invoke$arity$variadic = G__36675__delegate;
return G__36675;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.js.map
