goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42086__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42087__i = 0, G__42087__a = new Array(arguments.length -  0);
while (G__42087__i < G__42087__a.length) {G__42087__a[G__42087__i] = arguments[G__42087__i + 0]; ++G__42087__i;}
  args = new cljs.core.IndexedSeq(G__42087__a,0,null);
} 
return G__42086__delegate.call(this,args);};
G__42086.cljs$lang$maxFixedArity = 0;
G__42086.cljs$lang$applyTo = (function (arglist__42088){
var args = cljs.core.seq(arglist__42088);
return G__42086__delegate(args);
});
G__42086.cljs$core$IFn$_invoke$arity$variadic = G__42086__delegate;
return G__42086;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42089__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42090__i = 0, G__42090__a = new Array(arguments.length -  0);
while (G__42090__i < G__42090__a.length) {G__42090__a[G__42090__i] = arguments[G__42090__i + 0]; ++G__42090__i;}
  args = new cljs.core.IndexedSeq(G__42090__a,0,null);
} 
return G__42089__delegate.call(this,args);};
G__42089.cljs$lang$maxFixedArity = 0;
G__42089.cljs$lang$applyTo = (function (arglist__42091){
var args = cljs.core.seq(arglist__42091);
return G__42089__delegate(args);
});
G__42089.cljs$core$IFn$_invoke$arity$variadic = G__42089__delegate;
return G__42089;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
