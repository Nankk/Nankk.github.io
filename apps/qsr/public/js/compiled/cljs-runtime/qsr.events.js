goog.provide('qsr.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('qsr.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","initialize-db","qsr.events/initialize-db",-493943915),(function (_,___$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qsr.db.default_db], 0));

return qsr.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),(function (db,p__32266){
var vec__32267 = p__32266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32267,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32267,(1),null);
var vs_sub = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vs,(3));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vs_sub,vec__32267,_,vs){
return (function (i,v){
var url_raw = cljs.core.first(v);
var img_id = cljs.core.second(cljs.core.re_matches(/.*file\/d\/([^\/]+).*/,url_raw));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"sample",new cljs.core.Keyword(null,"id","id",-1388402092),img_id,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"url","url",276297046),["http://drive.google.com/uc?export=view&id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img_id)].join('')], null);
});})(vs_sub,vec__32267,_,vs))
,vs_sub)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","select-item","qsr.events/select-item",1651707309),(function (db,p__32273){
var vec__32274 = p__32273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32274,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32274,(1),null);
var items = (function (){var G__32277 = new cljs.core.Keyword(null,"items","items",1031954938);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__32277) : db.call(null,G__32277));
})();
var select_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (items,vec__32274,_,item){
return (function (p1__32271_SHARP_,p2__32270_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__32278 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (p2__32270_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__32270_SHARP_.cljs$core$IFn$_invoke$arity$1(G__32278) : p2__32270_SHARP_.call(null,G__32278));
})(),(function (){var G__32279 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32279) : item.call(null,G__32279));
})())){
return p1__32271_SHARP_;
} else {
return null;
}
});})(items,vec__32274,_,item))
,items));
var unselected_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),((function (items,select_idx,vec__32274,_,item){
return (function (item__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items,select_idx,vec__32274,_,item){
return (function (p1__32272_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32272_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});})(items,select_idx,vec__32274,_,item))
,item__$1));
});})(items,select_idx,vec__32274,_,item))
);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unselected_db], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(unselected_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),select_idx,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),((function (items,select_idx,unselected_db,vec__32274,_,item){
return (function (){
return cljs.core.constantly(true);
});})(items,select_idx,unselected_db,vec__32274,_,item))
);
}));

//# sourceMappingURL=qsr.events.js.map
