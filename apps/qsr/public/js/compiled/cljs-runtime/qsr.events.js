goog.provide('qsr.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('qsr.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","initialize-db","qsr.events/initialize-db",-493943915),(function (_,___$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qsr.db.default_db], 0));

return qsr.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","select-item","qsr.events/select-item",1651707309),(function (db,p__33957){
var vec__33958 = p__33957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(1),null);
var items = (function (){var G__33961 = new cljs.core.Keyword(null,"items","items",1031954938);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__33961) : db.call(null,G__33961));
})();
var select_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (items,vec__33958,_,item){
return (function (p1__33955_SHARP_,p2__33954_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__33962 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (p2__33954_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__33954_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33962) : p2__33954_SHARP_.call(null,G__33962));
})(),(function (){var G__33963 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__33963) : item.call(null,G__33963));
})())){
return p1__33955_SHARP_;
} else {
return null;
}
});})(items,vec__33958,_,item))
,items));
var unselected_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),((function (items,select_idx,vec__33958,_,item){
return (function (item__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items,select_idx,vec__33958,_,item){
return (function (p1__33956_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33956_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});})(items,select_idx,vec__33958,_,item))
,item__$1));
});})(items,select_idx,vec__33958,_,item))
);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(unselected_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),select_idx,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),((function (items,select_idx,unselected_db,vec__33958,_,item){
return (function (){
return cljs.core.constantly(true);
});})(items,select_idx,unselected_db,vec__33958,_,item))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),(function (db,p__33964){
var vec__33965 = p__33964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),items);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","set-sort-by","qsr.events/set-sort-by",200106096),(function (db,p__33968){
var vec__33969 = p__33968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),by);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","set-sort-order","qsr.events/set-sort-order",1720084650),(function (db,p__33972){
var vec__33973 = p__33972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),order);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","sort-items","qsr.events/sort-items",-1774463180),(function (db,_){
var sorted_items = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var G__33976 = new cljs.core.Keyword(null,"sort-by","sort-by",-322599303);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__33976) : db.call(null,G__33976));
})(),(function (){var G__33977 = new cljs.core.Keyword(null,"items","items",1031954938);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__33977) : db.call(null,G__33977));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__33978 = (function (){var G__33979 = new cljs.core.Keyword(null,"sort-order","sort-order",1853277479);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__33979) : db.call(null,G__33979));
})();
var G__33978__$1 = (((G__33978 instanceof cljs.core.Keyword))?G__33978.fqn:null);
switch (G__33978__$1) {
case "ascending":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,sorted_items);

break;
case "descending":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(sorted_items));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33978__$1)].join('')));

}
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("qsr.events","on-manually-sorted","qsr.events/on-manually-sorted",-1269403411),(function (db,p__33981){
var vec__33982 = p__33981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33982,(0),null);
var from_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33982,(1),null);
var from = (from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0)));
var to = (from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"items","items",1031954938),((function (from,to,vec__33982,_,from_to){
return (function (p1__33980_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__33980_SHARP_,to,(p1__33980_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33980_SHARP_.cljs$core$IFn$_invoke$arity$1(from) : p1__33980_SHARP_.call(null,from)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,(p1__33980_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33980_SHARP_.cljs$core$IFn$_invoke$arity$1(to) : p1__33980_SHARP_.call(null,to))], 0)));
});})(from,to,vec__33982,_,from_to))
);
}));

//# sourceMappingURL=qsr.events.js.map
