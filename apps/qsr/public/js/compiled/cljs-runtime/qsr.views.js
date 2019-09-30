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
qsr.views.on_item_click = (function qsr$views$on_item_click(item){
var G__32306_32330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","select-item","qsr.events/select-item",1651707309),item], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__32306_32330) : re_frame.core.dispatch_sync.call(null,G__32306_32330));

var api_url = "https://vrcpanorama-get-image.herokuapp.com/index.php";
var req_url = [api_url,"?type=move&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32308 = new cljs.core.Keyword(null,"index","index",-1531685915);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32308) : item.call(null,G__32308));
})())].join('');
var c__32135__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32135__auto__,api_url,req_url){
return (function (){
var f__32136__auto__ = (function (){var switch__32112__auto__ = ((function (c__32135__auto__,api_url,req_url){
return (function (state_32311){
var state_val_32312 = (state_32311[(1)]);
if((state_val_32312 === (1))){
var inst_32309 = cljs_http.client.get(req_url);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32311__$1,inst_32309);
} else {
return null;
}
});})(c__32135__auto__,api_url,req_url))
;
return ((function (switch__32112__auto__,c__32135__auto__,api_url,req_url){
return (function() {
var qsr$views$on_item_click_$_state_machine__32113__auto__ = null;
var qsr$views$on_item_click_$_state_machine__32113__auto____0 = (function (){
var statearr_32313 = [null,null,null,null,null,null,null];
(statearr_32313[(0)] = qsr$views$on_item_click_$_state_machine__32113__auto__);

(statearr_32313[(1)] = (1));

return statearr_32313;
});
var qsr$views$on_item_click_$_state_machine__32113__auto____1 = (function (state_32311){
while(true){
var ret_value__32114__auto__ = (function (){try{while(true){
var result__32115__auto__ = switch__32112__auto__(state_32311);
if(cljs.core.keyword_identical_QMARK_(result__32115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32115__auto__;
}
break;
}
}catch (e32314){if((e32314 instanceof Object)){
var ex__32116__auto__ = e32314;
var statearr_32315_32331 = state_32311;
(statearr_32315_32331[(5)] = ex__32116__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32332 = state_32311;
state_32311 = G__32332;
continue;
} else {
return ret_value__32114__auto__;
}
break;
}
});
qsr$views$on_item_click_$_state_machine__32113__auto__ = function(state_32311){
switch(arguments.length){
case 0:
return qsr$views$on_item_click_$_state_machine__32113__auto____0.call(this);
case 1:
return qsr$views$on_item_click_$_state_machine__32113__auto____1.call(this,state_32311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
qsr$views$on_item_click_$_state_machine__32113__auto__.cljs$core$IFn$_invoke$arity$0 = qsr$views$on_item_click_$_state_machine__32113__auto____0;
qsr$views$on_item_click_$_state_machine__32113__auto__.cljs$core$IFn$_invoke$arity$1 = qsr$views$on_item_click_$_state_machine__32113__auto____1;
return qsr$views$on_item_click_$_state_machine__32113__auto__;
})()
;})(switch__32112__auto__,c__32135__auto__,api_url,req_url))
})();
var state__32137__auto__ = (function (){var statearr_32316 = (f__32136__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32136__auto__.cljs$core$IFn$_invoke$arity$0() : f__32136__auto__.call(null));
(statearr_32316[(6)] = c__32135__auto__);

return statearr_32316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32137__auto__);
});})(c__32135__auto__,api_url,req_url))
);

return c__32135__auto__;
});
qsr.views.item_card = (function qsr$views$item_card(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"transparent",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return qsr.views.on_item_click(item);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["card hoverable",(cljs.core.truth_((function (){var G__32318 = new cljs.core.Keyword(null,"selected?","selected?",-742502788);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32318) : item.call(null,G__32318));
})())?" selected":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-img-top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover"], null),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__32319 = new cljs.core.Keyword(null,"url","url",276297046);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32319) : item.call(null,G__32319));
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),(function (){var G__32320 = new cljs.core.Keyword(null,"name","name",1843675177);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32320) : item.call(null,G__32320));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Index: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32322 = new cljs.core.Keyword(null,"index","index",-1531685915);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32322) : item.call(null,G__32322));
})())].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["Drive ID:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32324 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32324) : item.call(null,G__32324));
})())].join('')], null)], null)], null)], null);
});
qsr.views.item_list_row = (function qsr$views$item_list_row(pair){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,cljs.core.first(pair)], null)], null),(((!((cljs.core.second(pair) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,cljs.core.second(pair)], null)], null):null)], null);
});
qsr.views.item_list = (function qsr$views$item_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var items = cljs.core.deref((function (){var G__32325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.subs","items","qsr.subs/items",-1064730551)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32325) : re_frame.core.subscribe.call(null,G__32325));
})());
var pairs = (function (){var queue = items;
var item_pairs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(queue))){
var new_queue = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(queue),(1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(queue,null):cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(queue,(2)));
var G__32333 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(queue),(1)))?cljs.core.PersistentVector.EMPTY:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(queue,(2)));
var G__32334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(item_pairs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(queue),cljs.core.second(queue)], null));
queue = G__32333;
item_pairs = G__32334;
continue;
} else {
return item_pairs;
}
break;
}
})();
var iter__4523__auto__ = ((function (items,pairs){
return (function qsr$views$item_list_$_iter__32326(s__32327){
return (new cljs.core.LazySeq(null,((function (items,pairs){
return (function (){
var s__32327__$1 = s__32327;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32327__$1);
if(temp__5735__auto__){
var s__32327__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32327__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__32327__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__32329 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__32328 = (0);
while(true){
if((i__32328 < size__4522__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__32328);
cljs.core.chunk_append(b__32329,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list_row,pair], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pair], null)));

var G__32335 = (i__32328 + (1));
i__32328 = G__32335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32329),qsr$views$item_list_$_iter__32326(cljs.core.chunk_rest(s__32327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32329),null);
}
} else {
var pair = cljs.core.first(s__32327__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list_row,pair], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pair], null)),qsr$views$item_list_$_iter__32326(cljs.core.rest(s__32327__$2)));
}
} else {
return null;
}
break;
}
});})(items,pairs))
,null,null));
});})(items,pairs))
;
return iter__4523__auto__(pairs);
})()], null);
});
qsr.views.greeting = (function qsr$views$greeting(){
var hr_now = (new Date()).getHours();
if((hr_now < (5))){
return "Hi, hard-worker ;-)";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hr_now,(5))){
return "The sun is raising...";
} else {
if(((((5) < hr_now)) && ((hr_now < (11))))){
return "Good morning Sir/Ma'am, how are you doing?";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hr_now,(11))){
return "Lunch is around the corner.";
} else {
if(((((11) < hr_now)) && ((hr_now < (18))))){
return "Hello Sir/Ma'am, how are you doing?";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hr_now,(18))){
return "Shall we take a break?";
} else {
if(((((18) < hr_now)) && ((hr_now < (24))))){
return "Good evening, Sir/Ma'am.";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hr_now,(24))){
return "You'd better go to bed for tommorow, right?";
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
});
qsr.views.main_panel = (function qsr$views$main_panel(){
var refresh_fn = (function (){
return qsr.gapis.get_values_from_sheet("1vkNkO71CfPhft-gRYFkvTwtg23-O75Dyaq0IIiF_-Dg","Default!A:A");
});
refresh_fn();

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),qsr.views.greeting()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),refresh_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sync-alt",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)," Sync"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list], null)], null);
});

//# sourceMappingURL=qsr.views.js.map
