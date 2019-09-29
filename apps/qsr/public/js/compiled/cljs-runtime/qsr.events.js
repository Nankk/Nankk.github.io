goog.provide('qsr.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('qsr.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","initialize-db","qsr.events/initialize-db",-493943915),(function (_,___$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qsr.db.default_db], 0));

return qsr.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),(function (db,p__34525){
var vec__34526 = p__34525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34526,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34526,(1),null);
var vs_sub = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vs,(3));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vs_sub,vec__34526,_,vs){
return (function (i,v){
var url_raw = cljs.core.first(v);
var img_id = cljs.core.second(cljs.core.re_matches(/.*file\/d\/([^\/]+).*/,url_raw));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"sample",new cljs.core.Keyword(null,"id","id",-1388402092),img_id,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"url","url",276297046),["http://drive.google.com/uc?export=view&id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img_id)].join('')], null);
});})(vs_sub,vec__34526,_,vs))
,vs_sub)));
}));

//# sourceMappingURL=qsr.events.js.map
