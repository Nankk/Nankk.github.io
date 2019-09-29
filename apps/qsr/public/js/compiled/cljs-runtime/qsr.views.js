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
qsr.views.post_request = (function qsr$views$post_request(request){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-request called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request], 0));

return cljs_http.client.post(request);
});
qsr.views.on_item_click = (function qsr$views$on_item_click(item){
var api_url = "https://vrcpanorama-get-image.herokuapp.com/index.php";
var req_url = [api_url,"?type=move&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34612 = new cljs.core.Keyword(null,"index","index",-1531685915);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34612) : item.call(null,G__34612));
})())].join('');
return qsr.views.post_request(req_url);
});
qsr.views.item_card = (function qsr$views$item_card(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"transparent",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return qsr.views.on_item_click(item);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-img-top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover"], null),new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__34613 = new cljs.core.Keyword(null,"url","url",276297046);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34613) : item.call(null,G__34613));
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),(function (){var G__34614 = new cljs.core.Keyword(null,"name","name",1843675177);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34614) : item.call(null,G__34614));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Index: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34616 = new cljs.core.Keyword(null,"index","index",-1531685915);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34616) : item.call(null,G__34616));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Drive ID:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34618 = new cljs.core.Keyword(null,"id","id",-1388402092);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__34618) : item.call(null,G__34618));
})())].join('')], null)], null)], null)], null);
});
qsr.views.item_list_row = (function qsr$views$item_list_row(pair){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(pair)], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,cljs.core.first(pair)], null)], null),(((!((cljs.core.second(pair) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_card,cljs.core.second(pair)], null)], null):null)], null);
});
qsr.views.item_list = (function qsr$views$item_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(function (){var items = cljs.core.deref((function (){var G__34619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.subs","items","qsr.subs/items",-1064730551)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__34619) : re_frame.core.subscribe.call(null,G__34619));
})());
var pairs = (function (){var queue = items;
var item_pairs = cljs.core.PersistentVector.EMPTY;
while(true){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["queue: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queue)].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["item-pairs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_pairs)].join('')], 0));

if(cljs.core.truth_(cljs.core.not_empty(queue))){
var G__34626 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(queue),(1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(queue,null):cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(queue,(2)));
var G__34627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(item_pairs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(queue),cljs.core.second(queue)], null));
queue = G__34626;
item_pairs = G__34627;
continue;
} else {
return item_pairs;
}
break;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0));

var iter__4523__auto__ = ((function (items,pairs){
return (function qsr$views$item_list_$_iter__34620(s__34621){
return (new cljs.core.LazySeq(null,((function (items,pairs){
return (function (){
var s__34621__$1 = s__34621;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34621__$1);
if(temp__5735__auto__){
var s__34621__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34621__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34621__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34623 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34622 = (0);
while(true){
if((i__34622 < size__4522__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34622);
cljs.core.chunk_append(b__34623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list_row,pair], null));

var G__34628 = (i__34622 + (1));
i__34622 = G__34628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34623),qsr$views$item_list_$_iter__34620(cljs.core.chunk_rest(s__34621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34623),null);
}
} else {
var pair = cljs.core.first(s__34621__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list_row,pair], null),qsr$views$item_list_$_iter__34620(cljs.core.rest(s__34621__$2)));
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
qsr.views.main_panel = (function qsr$views$main_panel(){
var refresh_fn = (function (){
return qsr.gapis.get_values_from_sheet("1vkNkO71CfPhft-gRYFkvTwtg23-O75Dyaq0IIiF_-Dg","Default!A:A");
});
refresh_fn();

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.large-container","div.large-container",-640483170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hi I am Main Panel."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),refresh_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sync-alt",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)," Refresh"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qsr.views.item_list], null)], null);
});

//# sourceMappingURL=qsr.views.js.map
