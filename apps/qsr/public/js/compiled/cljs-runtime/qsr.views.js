goog.provide('qsr.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('qsr.subs');
goog.require('qsr.events');
goog.require('qsr.db');
goog.require('clojure.string');
goog.require('qsr.gapis');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('qsr.const$');
qsr.views.on_item_click = (function qsr$views$on_item_click(item){
var G__33995_34128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","select-item","qsr.events/select-item",1651707309),item], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__33995_34128) : re_frame.core.dispatch_sync.call(null,G__33995_34128));

var api_url = "https://vrcpanorama-get-image.herokuapp.com/index.php";
var req_url = [api_url,"?type=move&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33997 = new cljs.core.Keyword(null,"sheet-idx","sheet-idx",-1602234416);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__33997) : item.call(null,G__33997));
})())].join('');
var c__32111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32111__auto__,api_url,req_url){
return (function (){
var f__32112__auto__ = (function (){var switch__32088__auto__ = ((function (c__32111__auto__,api_url,req_url){
return (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (1))){
var inst_33998 = cljs_http.client.get(req_url);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34000__$1,inst_33998);
} else {
return null;
}
});})(c__32111__auto__,api_url,req_url))
;
return ((function (switch__32088__auto__,c__32111__auto__,api_url,req_url){
return (function() {
var qsr$views$on_item_click_$_state_machine__32089__auto__ = null;
var qsr$views$on_item_click_$_state_machine__32089__auto____0 = (function (){
var statearr_34002 = [null,null,null,null,null,null,null];
(statearr_34002[(0)] = qsr$views$on_item_click_$_state_machine__32089__auto__);

(statearr_34002[(1)] = (1));

return statearr_34002;
});
var qsr$views$on_item_click_$_state_machine__32089__auto____1 = (function (state_34000){
while(true){
var ret_value__32090__auto__ = (function (){try{while(true){
var result__32091__auto__ = switch__32088__auto__(state_34000);
if(cljs.core.keyword_identical_QMARK_(result__32091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32091__auto__;
}
break;
}
}catch (e34003){if((e34003 instanceof Object)){
var ex__32092__auto__ = e34003;
var statearr_34004_34129 = state_34000;
(statearr_34004_34129[(5)] = ex__32092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_34000;
state_34000 = G__34130;
continue;
} else {
return ret_value__32090__auto__;
}
break;
}
});
qsr$views$on_item_click_$_state_machine__32089__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return qsr$views$on_item_click_$_state_machine__32089__auto____0.call(this);
case 1:
return qsr$views$on_item_click_$_state_machine__32089__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qsr$views$on_item_click_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$0 = qsr$views$on_item_click_$_state_machine__32089__auto____0;
qsr$views$on_item_click_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$1 = qsr$views$on_item_click_$_state_machine__32089__auto____1;
return qsr$views$on_item_click_$_state_machine__32089__auto__;
})()
;})(switch__32088__auto__,c__32111__auto__,api_url,req_url))
})();
var state__32113__auto__ = (function (){var statearr_34005 = (f__32112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32112__auto__.cljs$core$IFn$_invoke$arity$0() : f__32112__auto__.call(null));
(statearr_34005[(6)] = c__32111__auto__);

return statearr_34005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32113__auto__);
});})(c__32111__auto__,api_url,req_url))
);

return c__32111__auto__;
});
qsr.views.item_card = (function qsr$views$item_card(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"transparent",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return qsr.views.on_item_click(item);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["card hoverable",(cljs.core.truth_((function (){var G__34007 = new cljs.core.Keyword(null,"selected?","selected?",-742502788);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34007) : item.call(null,G__34007));
})())?" selected":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-sizes","data-sizes",-2100898124),"auto",new cljs.core.Keyword(null,"data-src","data-src",73887895),(function (){var G__34008 = new cljs.core.Keyword(null,"url","url",276297046);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34008) : item.call(null,G__34008));
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"card-img-top lazyload"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),["sheet index: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34010 = new cljs.core.Keyword(null,"sheet-idx","sheet-idx",-1602234416);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34010) : item.call(null,G__34010));
})())].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34012 = new cljs.core.Keyword(null,"name","name",1843675177);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34012) : item.call(null,G__34012));
})())].join('')], null)], null)], null)], null);
});
qsr.views.item_list = (function qsr$views$item_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"item-list",new cljs.core.Keyword(null,"class","class",-2030961996),"wrap-list"], null),(function (){var items = cljs.core.deref((function (){var G__34013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.subs","items","qsr.subs/items",-1064730551)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__34013) : re_frame.core.subscribe.call(null,G__34013));
})());
var iter__4523__auto__ = ((function (items){
return (function qsr$views$item_list_$_iter__34014(s__34015){
return (new cljs.core.LazySeq(null,((function (items){
return (function (){
var s__34015__$1 = s__34015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34015__$1);
if(temp__5735__auto__){
var s__34015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34015__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34015__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34017 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34016 = (0);
while(true){
if((i__34016 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34016);
cljs.core.chunk_append(b__34017,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__34131 = (i__34016 + (1));
i__34016 = G__34131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34017),qsr$views$item_list_$_iter__34014(cljs.core.chunk_rest(s__34015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34017),null);
}
} else {
var item = cljs.core.first(s__34015__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),qsr$views$item_list_$_iter__34014(cljs.core.rest(s__34015__$2)));
}
} else {
return null;
}
break;
}
});})(items))
,null,null));
});})(items))
;
return iter__4523__auto__(items);
})()], null);
});
qsr.views.gapi_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
qsr.views.formatted_sheets_data = (function qsr$views$formatted_sheets_data(vs){
var vs_sub = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vs,(3));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vs_sub){
return (function (i,v){
var url_raw = cljs.core.first(v);
var img_id = cljs.core.second(cljs.core.re_matches(/.*file\/d\/([^\/]+).*/,url_raw));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),img_id,new cljs.core.Keyword(null,"sheet-idx","sheet-idx",-1602234416),i,new cljs.core.Keyword(null,"url","url",276297046),["https://drive.google.com/uc?export=view&id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img_id)].join('')], null);
});})(vs_sub))
,vs_sub));
});
qsr.views.formatted_drive_data = (function qsr$views$formatted_drive_data(vs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function qsr$views$formatted_drive_data_$_iter__34018(s__34019){
return (new cljs.core.LazySeq(null,(function (){
var s__34019__$1 = s__34019;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34019__$1);
if(temp__5735__auto__){
var s__34019__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34019__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34019__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34021 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34020 = (0);
while(true){
if((i__34020 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34020);
cljs.core.chunk_append(b__34021,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"id"),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"name")], null));

var G__34134 = (i__34020 + (1));
i__34020 = G__34134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34021),qsr$views$formatted_drive_data_$_iter__34018(cljs.core.chunk_rest(s__34019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34021),null);
}
} else {
var v = cljs.core.first(s__34019__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"id"),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"name")], null),qsr$views$formatted_drive_data_$_iter__34018(cljs.core.rest(s__34019__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(vs);
})());
});
qsr.views.items = (function qsr$views$items(rs){
var s_vs = qsr.views.formatted_sheets_data((function (){var G__34022 = new cljs.core.Keyword(null,"sheets","sheets",987485515);
return (rs.cljs$core$IFn$_invoke$arity$1 ? rs.cljs$core$IFn$_invoke$arity$1(G__34022) : rs.call(null,G__34022));
})());
var d_vs = qsr.views.formatted_drive_data((function (){var G__34023 = new cljs.core.Keyword(null,"drive","drive",855170688);
return (rs.cljs$core$IFn$_invoke$arity$1 ? rs.cljs$core$IFn$_invoke$arity$1(G__34023) : rs.call(null,G__34023));
})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (s_vs,d_vs){
return (function qsr$views$items_$_iter__34024(s__34025){
return (new cljs.core.LazySeq(null,((function (s_vs,d_vs){
return (function (){
var s__34025__$1 = s__34025;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34025__$1);
if(temp__5735__auto__){
var s__34025__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34025__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34025__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34027 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34026 = (0);
while(true){
if((i__34026 < size__4522__auto__)){
var s_v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34026);
cljs.core.chunk_append(b__34027,(function (){var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__34026,s_v,c__4521__auto__,size__4522__auto__,b__34027,s__34025__$2,temp__5735__auto__,s_vs,d_vs){
return (function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34028 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__34028) : v.call(null,G__34028));
})(),(function (){var G__34029 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (s_v.cljs$core$IFn$_invoke$arity$1 ? s_v.cljs$core$IFn$_invoke$arity$1(G__34029) : s_v.call(null,G__34029));
})())){
return i;
} else {
return null;
}
});})(i__34026,s_v,c__4521__auto__,size__4522__auto__,b__34027,s__34025__$2,temp__5735__auto__,s_vs,d_vs))
,d_vs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s_v,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(d_vs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})());

var G__34136 = (i__34026 + (1));
i__34026 = G__34136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34027),qsr$views$items_$_iter__34024(cljs.core.chunk_rest(s__34025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34027),null);
}
} else {
var s_v = cljs.core.first(s__34025__$2);
return cljs.core.cons((function (){var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (s_v,s__34025__$2,temp__5735__auto__,s_vs,d_vs){
return (function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34030 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__34030) : v.call(null,G__34030));
})(),(function (){var G__34031 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (s_v.cljs$core$IFn$_invoke$arity$1 ? s_v.cljs$core$IFn$_invoke$arity$1(G__34031) : s_v.call(null,G__34031));
})())){
return i;
} else {
return null;
}
});})(s_v,s__34025__$2,temp__5735__auto__,s_vs,d_vs))
,d_vs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s_v,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(d_vs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
})(),qsr$views$items_$_iter__34024(cljs.core.rest(s__34025__$2)));
}
} else {
return null;
}
break;
}
});})(s_vs,d_vs))
,null,null));
});})(s_vs,d_vs))
;
return iter__4523__auto__(s_vs);
})());
});
var c__32111__auto___34137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32111__auto___34137){
return (function (){
var f__32112__auto__ = (function (){var switch__32088__auto__ = ((function (c__32111__auto___34137){
return (function (state_34063){
var state_val_34064 = (state_34063[(1)]);
if((state_val_34064 === (7))){
var inst_34059 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34065_34138 = state_34063__$1;
(statearr_34065_34138[(2)] = inst_34059);

(statearr_34065_34138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (1))){
var inst_34032 = cljs.core.PersistentHashMap.EMPTY;
var inst_34033 = inst_34032;
var state_34063__$1 = (function (){var statearr_34066 = state_34063;
(statearr_34066[(7)] = inst_34033);

return statearr_34066;
})();
var statearr_34067_34139 = state_34063__$1;
(statearr_34067_34139[(2)] = null);

(statearr_34067_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (4))){
var inst_34036 = (state_34063[(8)]);
var inst_34036__$1 = (state_34063[(2)]);
var state_34063__$1 = (function (){var statearr_34068 = state_34063;
(statearr_34068[(8)] = inst_34036__$1);

return statearr_34068;
})();
if(cljs.core.truth_(inst_34036__$1)){
var statearr_34069_34140 = state_34063__$1;
(statearr_34069_34140[(1)] = (5));

} else {
var statearr_34070_34141 = state_34063__$1;
(statearr_34070_34141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (6))){
var state_34063__$1 = state_34063;
var statearr_34071_34142 = state_34063__$1;
(statearr_34071_34142[(2)] = null);

(statearr_34071_34142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (3))){
var inst_34061 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34063__$1,inst_34061);
} else {
if((state_val_34064 === (2))){
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34063__$1,(4),qsr.views.gapi_ch);
} else {
if((state_val_34064 === (9))){
var inst_34040 = (state_34063[(9)]);
var inst_34033 = inst_34040;
var state_34063__$1 = (function (){var statearr_34072 = state_34063;
(statearr_34072[(7)] = inst_34033);

return statearr_34072;
})();
var statearr_34073_34143 = state_34063__$1;
(statearr_34073_34143[(2)] = null);

(statearr_34073_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (5))){
var inst_34033 = (state_34063[(7)]);
var inst_34036 = (state_34063[(8)]);
var inst_34040 = (state_34063[(9)]);
var inst_34038 = (function (){var G__34074 = new cljs.core.Keyword(null,"type","type",1174270348);
return (inst_34036.cljs$core$IFn$_invoke$arity$1 ? inst_34036.cljs$core$IFn$_invoke$arity$1(G__34074) : inst_34036.call(null,G__34074));
})();
var inst_34039 = (function (){var G__34075 = new cljs.core.Keyword(null,"content","content",15833224);
return (inst_34036.cljs$core$IFn$_invoke$arity$1 ? inst_34036.cljs$core$IFn$_invoke$arity$1(G__34075) : inst_34036.call(null,G__34075));
})();
var inst_34040__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_34033,inst_34038,inst_34039);
var inst_34041 = cljs.core.contains_QMARK_(inst_34040__$1,new cljs.core.Keyword(null,"drive","drive",855170688));
var inst_34042 = cljs.core.contains_QMARK_(inst_34040__$1,new cljs.core.Keyword(null,"sheets","sheets",987485515));
var inst_34043 = ((inst_34041) && (inst_34042));
var state_34063__$1 = (function (){var statearr_34076 = state_34063;
(statearr_34076[(9)] = inst_34040__$1);

return statearr_34076;
})();
if(cljs.core.truth_(inst_34043)){
var statearr_34077_34144 = state_34063__$1;
(statearr_34077_34144[(1)] = (8));

} else {
var statearr_34078_34145 = state_34063__$1;
(statearr_34078_34145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (10))){
var inst_34056 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34079_34146 = state_34063__$1;
(statearr_34079_34146[(2)] = inst_34056);

(statearr_34079_34146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (8))){
var inst_34040 = (state_34063[(9)]);
var inst_34045 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gonna set-items!"], 0));
var inst_34046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34047 = qsr.views.items(inst_34040);
var inst_34048 = [new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),inst_34047];
var inst_34049 = (new cljs.core.PersistentVector(null,2,(5),inst_34046,inst_34048,null));
var inst_34050 = (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(inst_34049) : re_frame.core.dispatch_sync.call(null,inst_34049));
var inst_34051 = cljs.core.PersistentHashMap.EMPTY;
var inst_34033 = inst_34051;
var state_34063__$1 = (function (){var statearr_34080 = state_34063;
(statearr_34080[(7)] = inst_34033);

(statearr_34080[(10)] = inst_34045);

(statearr_34080[(11)] = inst_34050);

return statearr_34080;
})();
var statearr_34081_34147 = state_34063__$1;
(statearr_34081_34147[(2)] = null);

(statearr_34081_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32111__auto___34137))
;
return ((function (switch__32088__auto__,c__32111__auto___34137){
return (function() {
var qsr$views$state_machine__32089__auto__ = null;
var qsr$views$state_machine__32089__auto____0 = (function (){
var statearr_34082 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34082[(0)] = qsr$views$state_machine__32089__auto__);

(statearr_34082[(1)] = (1));

return statearr_34082;
});
var qsr$views$state_machine__32089__auto____1 = (function (state_34063){
while(true){
var ret_value__32090__auto__ = (function (){try{while(true){
var result__32091__auto__ = switch__32088__auto__(state_34063);
if(cljs.core.keyword_identical_QMARK_(result__32091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32091__auto__;
}
break;
}
}catch (e34083){if((e34083 instanceof Object)){
var ex__32092__auto__ = e34083;
var statearr_34084_34148 = state_34063;
(statearr_34084_34148[(5)] = ex__32092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34149 = state_34063;
state_34063 = G__34149;
continue;
} else {
return ret_value__32090__auto__;
}
break;
}
});
qsr$views$state_machine__32089__auto__ = function(state_34063){
switch(arguments.length){
case 0:
return qsr$views$state_machine__32089__auto____0.call(this);
case 1:
return qsr$views$state_machine__32089__auto____1.call(this,state_34063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qsr$views$state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$0 = qsr$views$state_machine__32089__auto____0;
qsr$views$state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$1 = qsr$views$state_machine__32089__auto____1;
return qsr$views$state_machine__32089__auto__;
})()
;})(switch__32088__auto__,c__32111__auto___34137))
})();
var state__32113__auto__ = (function (){var statearr_34085 = (f__32112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32112__auto__.cljs$core$IFn$_invoke$arity$0() : f__32112__auto__.call(null));
(statearr_34085[(6)] = c__32111__auto___34137);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32113__auto__);
});})(c__32111__auto___34137))
);

qsr.views.refresh = (function qsr$views$refresh(){
qsr.gapis.get_values_from_sheet("1vkNkO71CfPhft-gRYFkvTwtg23-O75Dyaq0IIiF_-Dg","Default!A:A",(function (err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

console.log("got values from sheet.");

var vs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res.data.values);
var c__32111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32111__auto__,vs){
return (function (){
var f__32112__auto__ = (function (){var switch__32088__auto__ = ((function (c__32111__auto__,vs){
return (function (state_34092){
var state_val_34093 = (state_34092[(1)]);
if((state_val_34093 === (1))){
var inst_34086 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_34087 = [new cljs.core.Keyword(null,"sheets","sheets",987485515),vs];
var inst_34088 = cljs.core.PersistentHashMap.fromArrays(inst_34086,inst_34087);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34092__$1,(2),qsr.views.gapi_ch,inst_34088);
} else {
if((state_val_34093 === (2))){
var inst_34090 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34092__$1,inst_34090);
} else {
return null;
}
}
});})(c__32111__auto__,vs))
;
return ((function (switch__32088__auto__,c__32111__auto__,vs){
return (function() {
var qsr$views$refresh_$_state_machine__32089__auto__ = null;
var qsr$views$refresh_$_state_machine__32089__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null];
(statearr_34094[(0)] = qsr$views$refresh_$_state_machine__32089__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var qsr$views$refresh_$_state_machine__32089__auto____1 = (function (state_34092){
while(true){
var ret_value__32090__auto__ = (function (){try{while(true){
var result__32091__auto__ = switch__32088__auto__(state_34092);
if(cljs.core.keyword_identical_QMARK_(result__32091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32091__auto__;
}
break;
}
}catch (e34095){if((e34095 instanceof Object)){
var ex__32092__auto__ = e34095;
var statearr_34096_34150 = state_34092;
(statearr_34096_34150[(5)] = ex__32092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34151 = state_34092;
state_34092 = G__34151;
continue;
} else {
return ret_value__32090__auto__;
}
break;
}
});
qsr$views$refresh_$_state_machine__32089__auto__ = function(state_34092){
switch(arguments.length){
case 0:
return qsr$views$refresh_$_state_machine__32089__auto____0.call(this);
case 1:
return qsr$views$refresh_$_state_machine__32089__auto____1.call(this,state_34092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qsr$views$refresh_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$0 = qsr$views$refresh_$_state_machine__32089__auto____0;
qsr$views$refresh_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$1 = qsr$views$refresh_$_state_machine__32089__auto____1;
return qsr$views$refresh_$_state_machine__32089__auto__;
})()
;})(switch__32088__auto__,c__32111__auto__,vs))
})();
var state__32113__auto__ = (function (){var statearr_34097 = (f__32112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32112__auto__.cljs$core$IFn$_invoke$arity$0() : f__32112__auto__.call(null));
(statearr_34097[(6)] = c__32111__auto__);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32113__auto__);
});})(c__32111__auto__,vs))
);

return c__32111__auto__;
}));

return qsr.gapis.get_items_in_directory("1V86RuISEWxMeg8vIuKz190oBNEJIxNq0",(1000),"files(name, id)",(function (err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

console.log("got items in directory.");

var vs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res.data.files);
var c__32111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32111__auto__,vs){
return (function (){
var f__32112__auto__ = (function (){var switch__32088__auto__ = ((function (c__32111__auto__,vs){
return (function (state_34104){
var state_val_34105 = (state_34104[(1)]);
if((state_val_34105 === (1))){
var inst_34098 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_34099 = [new cljs.core.Keyword(null,"drive","drive",855170688),vs];
var inst_34100 = cljs.core.PersistentHashMap.fromArrays(inst_34098,inst_34099);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34104__$1,(2),qsr.views.gapi_ch,inst_34100);
} else {
if((state_val_34105 === (2))){
var inst_34102 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34104__$1,inst_34102);
} else {
return null;
}
}
});})(c__32111__auto__,vs))
;
return ((function (switch__32088__auto__,c__32111__auto__,vs){
return (function() {
var qsr$views$refresh_$_state_machine__32089__auto__ = null;
var qsr$views$refresh_$_state_machine__32089__auto____0 = (function (){
var statearr_34106 = [null,null,null,null,null,null,null];
(statearr_34106[(0)] = qsr$views$refresh_$_state_machine__32089__auto__);

(statearr_34106[(1)] = (1));

return statearr_34106;
});
var qsr$views$refresh_$_state_machine__32089__auto____1 = (function (state_34104){
while(true){
var ret_value__32090__auto__ = (function (){try{while(true){
var result__32091__auto__ = switch__32088__auto__(state_34104);
if(cljs.core.keyword_identical_QMARK_(result__32091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32091__auto__;
}
break;
}
}catch (e34107){if((e34107 instanceof Object)){
var ex__32092__auto__ = e34107;
var statearr_34108_34152 = state_34104;
(statearr_34108_34152[(5)] = ex__32092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34153 = state_34104;
state_34104 = G__34153;
continue;
} else {
return ret_value__32090__auto__;
}
break;
}
});
qsr$views$refresh_$_state_machine__32089__auto__ = function(state_34104){
switch(arguments.length){
case 0:
return qsr$views$refresh_$_state_machine__32089__auto____0.call(this);
case 1:
return qsr$views$refresh_$_state_machine__32089__auto____1.call(this,state_34104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qsr$views$refresh_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$0 = qsr$views$refresh_$_state_machine__32089__auto____0;
qsr$views$refresh_$_state_machine__32089__auto__.cljs$core$IFn$_invoke$arity$1 = qsr$views$refresh_$_state_machine__32089__auto____1;
return qsr$views$refresh_$_state_machine__32089__auto__;
})()
;})(switch__32088__auto__,c__32111__auto__,vs))
})();
var state__32113__auto__ = (function (){var statearr_34109 = (f__32112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32112__auto__.cljs$core$IFn$_invoke$arity$0() : f__32112__auto__.call(null));
(statearr_34109[(6)] = c__32111__auto__);

return statearr_34109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32113__auto__);
});})(c__32111__auto__,vs))
);

return c__32111__auto__;
}));
});
qsr.views.dropdown_sort_by = (function qsr$views$dropdown_sort_by(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-light dropdown-toggle",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),false], null),cljs.core.name(cljs.core.deref((function (){var G__34110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.subs","sort-by","qsr.subs/sort-by",1277026124)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__34110) : re_frame.core.subscribe.call(null,G__34110));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"dropdown1"], null),(function (){var iter__4523__auto__ = (function qsr$views$dropdown_sort_by_$_iter__34111(s__34112){
return (new cljs.core.LazySeq(null,(function (){
var s__34112__$1 = s__34112;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34112__$1);
if(temp__5735__auto__){
var s__34112__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34112__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34112__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34114 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34113 = (0);
while(true){
if((i__34113 < size__4522__auto__)){
var by = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34113);
cljs.core.chunk_append(b__34114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),by,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34113,by,c__4521__auto__,size__4522__auto__,b__34114,s__34112__$2,temp__5735__auto__){
return (function (_){
var G__34115_34154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-sort-by","qsr.events/set-sort-by",200106096),by], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34115_34154) : re_frame.core.dispatch_sync.call(null,G__34115_34154));

var G__34116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","sort-items","qsr.events/sort-items",-1774463180)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34116) : re_frame.core.dispatch_sync.call(null,G__34116));
});})(i__34113,by,c__4521__auto__,size__4522__auto__,b__34114,s__34112__$2,temp__5735__auto__))
], null),cljs.core.name(by)], null));

var G__34155 = (i__34113 + (1));
i__34113 = G__34155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34114),qsr$views$dropdown_sort_by_$_iter__34111(cljs.core.chunk_rest(s__34112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34114),null);
}
} else {
var by = cljs.core.first(s__34112__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),by,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (by,s__34112__$2,temp__5735__auto__){
return (function (_){
var G__34117_34156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-sort-by","qsr.events/set-sort-by",200106096),by], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34117_34156) : re_frame.core.dispatch_sync.call(null,G__34117_34156));

var G__34118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","sort-items","qsr.events/sort-items",-1774463180)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34118) : re_frame.core.dispatch_sync.call(null,G__34118));
});})(by,s__34112__$2,temp__5735__auto__))
], null),cljs.core.name(by)], null),qsr$views$dropdown_sort_by_$_iter__34111(cljs.core.rest(s__34112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sheet-idx","sheet-idx",-1602234416),new cljs.core.Keyword(null,"name","name",1843675177)], null));
})()], null)], null);
});
qsr.views.dropdown_sort_order = (function qsr$views$dropdown_sort_order(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-light dropdown-toggle",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),false], null),cljs.core.name(cljs.core.deref((function (){var G__34119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.subs","sort-order","qsr.subs/sort-order",1401875478)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__34119) : re_frame.core.subscribe.call(null,G__34119));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"dropdown2"], null),(function (){var iter__4523__auto__ = (function qsr$views$dropdown_sort_order_$_iter__34120(s__34121){
return (new cljs.core.LazySeq(null,(function (){
var s__34121__$1 = s__34121;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34121__$1);
if(temp__5735__auto__){
var s__34121__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34121__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34121__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34123 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34122 = (0);
while(true){
if((i__34122 < size__4522__auto__)){
var order = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34122);
cljs.core.chunk_append(b__34123,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),order,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34122,order,c__4521__auto__,size__4522__auto__,b__34123,s__34121__$2,temp__5735__auto__){
return (function (_){
var G__34124_34157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-sort-order","qsr.events/set-sort-order",1720084650),order], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34124_34157) : re_frame.core.dispatch_sync.call(null,G__34124_34157));

var G__34125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","sort-items","qsr.events/sort-items",-1774463180)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34125) : re_frame.core.dispatch_sync.call(null,G__34125));
});})(i__34122,order,c__4521__auto__,size__4522__auto__,b__34123,s__34121__$2,temp__5735__auto__))
], null),cljs.core.name(order)], null));

var G__34158 = (i__34122 + (1));
i__34122 = G__34158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34123),qsr$views$dropdown_sort_order_$_iter__34120(cljs.core.chunk_rest(s__34121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34123),null);
}
} else {
var order = cljs.core.first(s__34121__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),order,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (order,s__34121__$2,temp__5735__auto__){
return (function (_){
var G__34126_34159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-sort-order","qsr.events/set-sort-order",1720084650),order], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34126_34159) : re_frame.core.dispatch_sync.call(null,G__34126_34159));

var G__34127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","sort-items","qsr.events/sort-items",-1774463180)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34127) : re_frame.core.dispatch_sync.call(null,G__34127));
});})(order,s__34121__$2,temp__5735__auto__))
], null),cljs.core.name(order)], null),qsr$views$dropdown_sort_order_$_iter__34120(cljs.core.rest(s__34121__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascending","ascending",-988350486),new cljs.core.Keyword(null,"descending","descending",-24766135)], null));
})()], null)], null);
});
qsr.views.main_panel = (function qsr$views$main_panel(){
qsr.views.refresh();

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),qsr.const$.random_word()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return qsr.views.refresh();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sync-alt",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null),"\u3000Reload sheet data"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),"Sort by\u3000",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.dropdown_sort_by], null),"\u3000in\u3000",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.dropdown_sort_order], null),"\u3000order"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list], null)], null);
});

//# sourceMappingURL=qsr.views.js.map
