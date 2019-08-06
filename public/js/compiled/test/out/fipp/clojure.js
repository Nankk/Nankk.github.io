// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3406 = arguments.length;
var i__4731__auto___3407 = (0);
while(true){
if((i__4731__auto___3407 < len__4730__auto___3406)){
args__4736__auto__.push((arguments[i__4731__auto___3407]));

var G__3408 = (i__4731__auto___3407 + (1));
i__4731__auto___3407 = G__3408;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq3405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3405));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__3409){
var vec__3410 = p__3409;
var test = cljs.core.nth.call(null,vec__3410,(0),null);
var result = cljs.core.nth.call(null,vec__3410,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__3414){
var vec__3415 = p__3414;
var seq__3416 = cljs.core.seq.call(null,vec__3415);
var first__3417 = cljs.core.first.call(null,seq__3416);
var seq__3416__$1 = cljs.core.next.call(null,seq__3416);
var head = first__3417;
var first__3417__$1 = cljs.core.first.call(null,seq__3416__$1);
var seq__3416__$2 = cljs.core.next.call(null,seq__3416__$1);
var expr = first__3417__$1;
var more = seq__3416__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__3415,seq__3416,first__3417,seq__3416__$1,head,first__3417__$1,seq__3416__$2,expr,more){
return (function (p1__3413_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__3413_SHARP_);
});})(clauses,default$,vec__3415,seq__3416,first__3417,seq__3416__$1,head,first__3417__$1,seq__3416__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__3419){
var vec__3420 = p__3419;
var seq__3421 = cljs.core.seq.call(null,vec__3420);
var first__3422 = cljs.core.first.call(null,seq__3421);
var seq__3421__$1 = cljs.core.next.call(null,seq__3421);
var head = first__3422;
var more = seq__3421__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__3420,seq__3421,first__3422,seq__3421__$1,head,more){
return (function (p1__3418_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__3418_SHARP_);
});})(clauses,vec__3420,seq__3421,first__3422,seq__3421__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__3424){
var vec__3425 = p__3424;
var seq__3426 = cljs.core.seq.call(null,vec__3425);
var first__3427 = cljs.core.first.call(null,seq__3426);
var seq__3426__$1 = cljs.core.next.call(null,seq__3426);
var head = first__3427;
var first__3427__$1 = cljs.core.first.call(null,seq__3426__$1);
var seq__3426__$2 = cljs.core.next.call(null,seq__3426__$1);
var pred = first__3427__$1;
var first__3427__$2 = cljs.core.first.call(null,seq__3426__$2);
var seq__3426__$3 = cljs.core.next.call(null,seq__3426__$2);
var expr = first__3427__$2;
var more = seq__3426__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__3425,seq__3426,first__3427,seq__3426__$1,head,first__3427__$1,seq__3426__$2,pred,first__3427__$2,seq__3426__$3,expr,more){
return (function (p1__3423_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__3423_SHARP_);
});})(clauses,default$,vec__3425,seq__3426,first__3427,seq__3426__$1,head,first__3427__$1,seq__3426__$2,pred,first__3427__$2,seq__3426__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__3429){
var vec__3430 = p__3429;
var seq__3431 = cljs.core.seq.call(null,vec__3430);
var first__3432 = cljs.core.first.call(null,seq__3431);
var seq__3431__$1 = cljs.core.next.call(null,seq__3431);
var head = first__3432;
var stmts = seq__3431__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__3430,seq__3431,first__3432,seq__3431__$1,head,stmts){
return (function (p1__3428_SHARP_){
return fipp.visit.visit.call(null,p,p1__3428_SHARP_);
});})(vec__3430,seq__3431,first__3432,seq__3431__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__3434){
var vec__3435 = p__3434;
var seq__3436 = cljs.core.seq.call(null,vec__3435);
var first__3437 = cljs.core.first.call(null,seq__3436);
var seq__3436__$1 = cljs.core.next.call(null,seq__3436);
var head = first__3437;
var first__3437__$1 = cljs.core.first.call(null,seq__3436__$1);
var seq__3436__$2 = cljs.core.next.call(null,seq__3436__$1);
var test = first__3437__$1;
var more = seq__3436__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__3435,seq__3436,first__3437,seq__3436__$1,head,first__3437__$1,seq__3436__$2,test,more){
return (function (p1__3433_SHARP_){
return fipp.visit.visit.call(null,p,p1__3433_SHARP_);
});})(vec__3435,seq__3436,first__3437,seq__3436__$1,head,first__3437__$1,seq__3436__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__3439){
var vec__3440 = p__3439;
var seq__3441 = cljs.core.seq.call(null,vec__3440);
var first__3442 = cljs.core.first.call(null,seq__3441);
var seq__3441__$1 = cljs.core.next.call(null,seq__3441);
var params = first__3442;
var body = seq__3441__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__3440,seq__3441,first__3442,seq__3441__$1,params,body){
return (function (p1__3438_SHARP_){
return fipp.visit.visit.call(null,p,p1__3438_SHARP_);
});})(vec__3440,seq__3441,first__3442,seq__3441__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__3445){
var vec__3446 = p__3445;
var seq__3447 = cljs.core.seq.call(null,vec__3446);
var first__3448 = cljs.core.first.call(null,seq__3447);
var seq__3447__$1 = cljs.core.next.call(null,seq__3447);
var head = first__3448;
var first__3448__$1 = cljs.core.first.call(null,seq__3447__$1);
var seq__3447__$2 = cljs.core.next.call(null,seq__3447__$1);
var fn_name = first__3448__$1;
var more = seq__3447__$2;
var vec__3449 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__3449,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__3449,(1),null);
var vec__3452 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__3452,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__3452,(1),null);
var vec__3455 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__3455,(0),null);
var body = cljs.core.nth.call(null,vec__3455,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4120__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4120__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__3449,docstring,more__$1,vec__3452,attr_map,more__$2,vec__3455,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__3446,seq__3447,first__3448,seq__3447__$1,head,first__3448__$1,seq__3447__$2,fn_name,more){
return (function (p1__3443_SHARP_){
return fipp.visit.visit.call(null,p,p1__3443_SHARP_);
});})(vec__3449,docstring,more__$1,vec__3452,attr_map,more__$2,vec__3455,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__3446,seq__3447,first__3448,seq__3447__$1,head,first__3448__$1,seq__3447__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__3449,docstring,more__$1,vec__3452,attr_map,more__$2,vec__3455,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__3446,seq__3447,first__3448,seq__3447__$1,head,first__3448__$1,seq__3447__$2,fn_name,more){
return (function (p1__3444_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__3444_SHARP_);
});})(vec__3449,docstring,more__$1,vec__3452,attr_map,more__$2,vec__3455,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__3446,seq__3447,first__3448,seq__3447__$1,head,first__3448__$1,seq__3447__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__3460){
var vec__3461 = p__3460;
var seq__3462 = cljs.core.seq.call(null,vec__3461);
var first__3463 = cljs.core.first.call(null,seq__3462);
var seq__3462__$1 = cljs.core.next.call(null,seq__3462);
var head = first__3463;
var more = seq__3462__$1;
var vec__3464 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__3464,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__3464,(1),null);
var vec__3467 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__3467,(0),null);
var body = cljs.core.nth.call(null,vec__3467,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__3464,fn_name,more__$1,vec__3467,params,body,vec__3461,seq__3462,first__3463,seq__3462__$1,head,more){
return (function (p1__3458_SHARP_){
return fipp.visit.visit.call(null,p,p1__3458_SHARP_);
});})(vec__3464,fn_name,more__$1,vec__3467,params,body,vec__3461,seq__3462,first__3463,seq__3462__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__3464,fn_name,more__$1,vec__3467,params,body,vec__3461,seq__3462,first__3463,seq__3462__$1,head,more){
return (function (p1__3459_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__3459_SHARP_);
});})(vec__3464,fn_name,more__$1,vec__3467,params,body,vec__3461,seq__3462,first__3463,seq__3462__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__3473){
var vec__3474 = p__3473;
var _ = cljs.core.nth.call(null,vec__3474,(0),null);
var params = cljs.core.nth.call(null,vec__3474,(1),null);
var body = cljs.core.nth.call(null,vec__3474,(2),null);
var form = vec__3474;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__3477 = cljs.core.split_with.call(null,((function (vec__3474,_,params,body,form){
return (function (p1__3470_SHARP_){
return cljs.core.not_EQ_.call(null,p1__3470_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__3474,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__3477,(0),null);
var rests = cljs.core.nth.call(null,vec__3477,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__3477,inits,rests,vec__3474,_,params,body,form){
return (function (p1__3471_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__3471_SHARP_ + (1)))].join(''));
});})(vec__3477,inits,rests,vec__3474,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__3477,inits,rests,params_STAR_,body_STAR_,vec__3474,_,params,body,form){
return (function (p1__3472_SHARP_){
return fipp.visit.visit.call(null,p,p1__3472_SHARP_);
});})(vec__3477,inits,rests,params_STAR_,body_STAR_,vec__3474,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__3481){
var vec__3482 = p__3481;
var seq__3483 = cljs.core.seq.call(null,vec__3482);
var first__3484 = cljs.core.first.call(null,seq__3483);
var seq__3483__$1 = cljs.core.next.call(null,seq__3483);
var head = first__3484;
var clauses = seq__3483__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__3482,seq__3483,first__3484,seq__3483__$1,head,clauses){
return (function (p1__3480_SHARP_){
return fipp.visit.visit.call(null,p,p1__3480_SHARP_);
});})(vec__3482,seq__3483,first__3484,seq__3483__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__3486){
var vec__3487 = p__3486;
var seq__3488 = cljs.core.seq.call(null,vec__3487);
var first__3489 = cljs.core.first.call(null,seq__3488);
var seq__3488__$1 = cljs.core.next.call(null,seq__3488);
var head = first__3489;
var first__3489__$1 = cljs.core.first.call(null,seq__3488__$1);
var seq__3488__$2 = cljs.core.next.call(null,seq__3488__$1);
var ns_sym = first__3489__$1;
var more = seq__3488__$2;
var vec__3490 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__3490,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__3490,(1),null);
var vec__3493 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__3493,(0),null);
var specs = cljs.core.nth.call(null,vec__3493,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__3490,docstring,more__$1,vec__3493,attr_map,specs,vec__3487,seq__3488,first__3489,seq__3488__$1,head,first__3489__$1,seq__3488__$2,ns_sym,more){
return (function (p1__3485_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__3485_SHARP_);
});})(vec__3490,docstring,more__$1,vec__3493,attr_map,specs,vec__3487,seq__3488,first__3489,seq__3488__$1,head,first__3489__$1,seq__3488__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__3496){
var vec__3497 = p__3496;
var macro = cljs.core.nth.call(null,vec__3497,(0),null);
var arg = cljs.core.nth.call(null,vec__3497,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__3500 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__3500__$1 = (((G__3500 instanceof cljs.core.Keyword))?G__3500.fqn:null);
switch (G__3500__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3500__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__3502(s__3503){
return (new cljs.core.LazySeq(null,(function (){
var s__3503__$1 = s__3503;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3503__$1);
if(temp__5735__auto__){
var s__3503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3503__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3503__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3505 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3504 = (0);
while(true){
if((i__3504 < size__4522__auto__)){
var vec__3506 = cljs.core._nth.call(null,c__4521__auto__,i__3504);
var k = cljs.core.nth.call(null,vec__3506,(0),null);
var v = cljs.core.nth.call(null,vec__3506,(1),null);
cljs.core.chunk_append.call(null,b__3505,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__3512 = (i__3504 + (1));
i__3504 = G__3512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3505),fipp$clojure$pretty_bindings_$_iter__3502.call(null,cljs.core.chunk_rest.call(null,s__3503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3505),null);
}
} else {
var vec__3509 = cljs.core.first.call(null,s__3503__$2);
var k = cljs.core.nth.call(null,vec__3509,(0),null);
var v = cljs.core.nth.call(null,vec__3509,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__3502.call(null,cljs.core.rest.call(null,s__3503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__3514){
var vec__3515 = p__3514;
var seq__3516 = cljs.core.seq.call(null,vec__3515);
var first__3517 = cljs.core.first.call(null,seq__3516);
var seq__3516__$1 = cljs.core.next.call(null,seq__3516);
var head = first__3517;
var first__3517__$1 = cljs.core.first.call(null,seq__3516__$1);
var seq__3516__$2 = cljs.core.next.call(null,seq__3516__$1);
var bvec = first__3517__$1;
var body = seq__3516__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__3515,seq__3516,first__3517,seq__3516__$1,head,first__3517__$1,seq__3516__$2,bvec,body){
return (function (p1__3513_SHARP_){
return fipp.visit.visit.call(null,p,p1__3513_SHARP_);
});})(vec__3515,seq__3516,first__3517,seq__3516__$1,head,first__3517__$1,seq__3516__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__3518_SHARP_){
return fipp.visit.visit.call(null,p,p1__3518_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__3519){
var vec__3520 = p__3519;
var seq__3521 = cljs.core.seq.call(null,vec__3520);
var first__3522 = cljs.core.first.call(null,seq__3521);
var seq__3521__$1 = cljs.core.next.call(null,seq__3521);
var head = first__3522;
var first__3522__$1 = cljs.core.first.call(null,seq__3521__$1);
var seq__3521__$2 = cljs.core.next.call(null,seq__3521__$1);
var fields = first__3522__$1;
var opts_PLUS_specs = seq__3521__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__3523){
var vec__3524 = p__3523;
var seq__3525 = cljs.core.seq.call(null,vec__3524);
var first__3526 = cljs.core.first.call(null,seq__3525);
var seq__3525__$1 = cljs.core.next.call(null,seq__3525);
var head = first__3526;
var opts_PLUS_specs = seq__3525__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__3527(s__3528){
return (new cljs.core.LazySeq(null,(function (){
var s__3528__$1 = s__3528;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3528__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__3535 = cljs.core.first.call(null,xs__6292__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__3535,(0),null);
var syms = cljs.core.nth.call(null,vec__3535,(1),null);
var iterys__4519__auto__ = ((function (s__3528__$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__3527_$_iter__3529(s__3530){
return (new cljs.core.LazySeq(null,((function (s__3528__$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3530__$1 = s__3530;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3530__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var sym = cljs.core.first.call(null,xs__6292__auto____$1);
var iterys__4519__auto__ = ((function (s__3530__$1,s__3528__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__3527_$_iter__3529_$_iter__3531(s__3532){
return (new cljs.core.LazySeq(null,((function (s__3530__$1,s__3528__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3532__$1 = s__3532;
while(true){
var temp__5735__auto____$2 = cljs.core.seq.call(null,s__3532__$1);
if(temp__5735__auto____$2){
var s__3532__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3532__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3532__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3534 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3533 = (0);
while(true){
if((i__3533 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__3533);
cljs.core.chunk_append.call(null,b__3534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__3538 = (i__3533 + (1));
i__3533 = G__3538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3534),fipp$clojure$build_symbol_map_$_iter__3527_$_iter__3529_$_iter__3531.call(null,cljs.core.chunk_rest.call(null,s__3532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3534),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__3532__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__3527_$_iter__3529_$_iter__3531.call(null,cljs.core.rest.call(null,s__3532__$2)));
}
} else {
return null;
}
break;
}
});})(s__3530__$1,s__3528__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3530__$1,s__3528__$1,sym,xs__6292__auto____$1,temp__5735__auto____$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__3527_$_iter__3529.call(null,cljs.core.rest.call(null,s__3530__$1)));
} else {
var G__3539 = cljs.core.rest.call(null,s__3530__$1);
s__3530__$1 = G__3539;
continue;
}
} else {
return null;
}
break;
}
});})(s__3528__$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3528__$1,vec__3535,pretty_fn,syms,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__3527.call(null,cljs.core.rest.call(null,s__3528__$1)));
} else {
var G__3540 = cljs.core.rest.call(null,s__3528__$1);
s__3528__$1 = G__3540;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__3542 = arguments.length;
switch (G__3542) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
