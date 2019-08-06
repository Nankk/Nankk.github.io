// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48648 = arguments.length;
var i__4731__auto___48649 = (0);
while(true){
if((i__4731__auto___48649 < len__4730__auto___48648)){
args__4736__auto__.push((arguments[i__4731__auto___48649]));

var G__48650 = (i__4731__auto___48649 + (1));
i__4731__auto___48649 = G__48650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__48640_48651 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__48641_48652 = null;
var count__48642_48653 = (0);
var i__48643_48654 = (0);
while(true){
if((i__48643_48654 < count__48642_48653)){
var k_48655 = cljs.core._nth.call(null,chunk__48641_48652,i__48643_48654);
e.setAttribute(cljs.core.name.call(null,k_48655),cljs.core.get.call(null,attrs,k_48655));


var G__48656 = seq__48640_48651;
var G__48657 = chunk__48641_48652;
var G__48658 = count__48642_48653;
var G__48659 = (i__48643_48654 + (1));
seq__48640_48651 = G__48656;
chunk__48641_48652 = G__48657;
count__48642_48653 = G__48658;
i__48643_48654 = G__48659;
continue;
} else {
var temp__5735__auto___48660 = cljs.core.seq.call(null,seq__48640_48651);
if(temp__5735__auto___48660){
var seq__48640_48661__$1 = temp__5735__auto___48660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48640_48661__$1)){
var c__4550__auto___48662 = cljs.core.chunk_first.call(null,seq__48640_48661__$1);
var G__48663 = cljs.core.chunk_rest.call(null,seq__48640_48661__$1);
var G__48664 = c__4550__auto___48662;
var G__48665 = cljs.core.count.call(null,c__4550__auto___48662);
var G__48666 = (0);
seq__48640_48651 = G__48663;
chunk__48641_48652 = G__48664;
count__48642_48653 = G__48665;
i__48643_48654 = G__48666;
continue;
} else {
var k_48667 = cljs.core.first.call(null,seq__48640_48661__$1);
e.setAttribute(cljs.core.name.call(null,k_48667),cljs.core.get.call(null,attrs,k_48667));


var G__48668 = cljs.core.next.call(null,seq__48640_48661__$1);
var G__48669 = null;
var G__48670 = (0);
var G__48671 = (0);
seq__48640_48651 = G__48668;
chunk__48641_48652 = G__48669;
count__48642_48653 = G__48670;
i__48643_48654 = G__48671;
continue;
}
} else {
}
}
break;
}

var seq__48644_48672 = cljs.core.seq.call(null,children);
var chunk__48645_48673 = null;
var count__48646_48674 = (0);
var i__48647_48675 = (0);
while(true){
if((i__48647_48675 < count__48646_48674)){
var ch_48676 = cljs.core._nth.call(null,chunk__48645_48673,i__48647_48675);
e.appendChild(ch_48676);


var G__48677 = seq__48644_48672;
var G__48678 = chunk__48645_48673;
var G__48679 = count__48646_48674;
var G__48680 = (i__48647_48675 + (1));
seq__48644_48672 = G__48677;
chunk__48645_48673 = G__48678;
count__48646_48674 = G__48679;
i__48647_48675 = G__48680;
continue;
} else {
var temp__5735__auto___48681 = cljs.core.seq.call(null,seq__48644_48672);
if(temp__5735__auto___48681){
var seq__48644_48682__$1 = temp__5735__auto___48681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48644_48682__$1)){
var c__4550__auto___48683 = cljs.core.chunk_first.call(null,seq__48644_48682__$1);
var G__48684 = cljs.core.chunk_rest.call(null,seq__48644_48682__$1);
var G__48685 = c__4550__auto___48683;
var G__48686 = cljs.core.count.call(null,c__4550__auto___48683);
var G__48687 = (0);
seq__48644_48672 = G__48684;
chunk__48645_48673 = G__48685;
count__48646_48674 = G__48686;
i__48647_48675 = G__48687;
continue;
} else {
var ch_48688 = cljs.core.first.call(null,seq__48644_48682__$1);
e.appendChild(ch_48688);


var G__48689 = cljs.core.next.call(null,seq__48644_48682__$1);
var G__48690 = null;
var G__48691 = (0);
var G__48692 = (0);
seq__48644_48672 = G__48689;
chunk__48645_48673 = G__48690;
count__48646_48674 = G__48691;
i__48647_48675 = G__48692;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq48637){
var G__48638 = cljs.core.first.call(null,seq48637);
var seq48637__$1 = cljs.core.next.call(null,seq48637);
var G__48639 = cljs.core.first.call(null,seq48637__$1);
var seq48637__$2 = cljs.core.next.call(null,seq48637__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48638,G__48639,seq48637__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_48693 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_48693.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_48693.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_48693.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_48693);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__48694,st_map){
var map__48695 = p__48694;
var map__48695__$1 = (((((!((map__48695 == null))))?(((((map__48695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48695):map__48695);
var container_el = cljs.core.get.call(null,map__48695__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__48695,map__48695__$1,container_el){
return (function (p__48697){
var vec__48698 = p__48697;
var k = cljs.core.nth.call(null,vec__48698,(0),null);
var v = cljs.core.nth.call(null,vec__48698,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__48695,map__48695__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__48701,dom_str){
var map__48702 = p__48701;
var map__48702__$1 = (((((!((map__48702 == null))))?(((((map__48702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48702):map__48702);
var c = map__48702__$1;
var content_area_el = cljs.core.get.call(null,map__48702__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__48704){
var map__48705 = p__48704;
var map__48705__$1 = (((((!((map__48705 == null))))?(((((map__48705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48705):map__48705);
var content_area_el = cljs.core.get.call(null,map__48705__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_48722){
var state_val_48723 = (state_48722[(1)]);
if((state_val_48723 === (1))){
var inst_48707 = (state_48722[(7)]);
var inst_48707__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48708 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48709 = ["10px","10px","100%","68px","1.0"];
var inst_48710 = cljs.core.PersistentHashMap.fromArrays(inst_48708,inst_48709);
var inst_48711 = cljs.core.merge.call(null,inst_48710,style);
var inst_48712 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48707__$1,inst_48711);
var inst_48713 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48707__$1,msg);
var inst_48714 = cljs.core.async.timeout.call(null,(300));
var state_48722__$1 = (function (){var statearr_48724 = state_48722;
(statearr_48724[(8)] = inst_48713);

(statearr_48724[(7)] = inst_48707__$1);

(statearr_48724[(9)] = inst_48712);

return statearr_48724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48722__$1,(2),inst_48714);
} else {
if((state_val_48723 === (2))){
var inst_48707 = (state_48722[(7)]);
var inst_48716 = (state_48722[(2)]);
var inst_48717 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_48718 = ["auto"];
var inst_48719 = cljs.core.PersistentHashMap.fromArrays(inst_48717,inst_48718);
var inst_48720 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48707,inst_48719);
var state_48722__$1 = (function (){var statearr_48725 = state_48722;
(statearr_48725[(10)] = inst_48716);

return statearr_48725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48722__$1,inst_48720);
} else {
return null;
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____0 = (function (){
var statearr_48726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48726[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__);

(statearr_48726[(1)] = (1));

return statearr_48726;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____1 = (function (state_48722){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48727){if((e48727 instanceof Object)){
var ex__45702__auto__ = e48727;
var statearr_48728_48730 = state_48722;
(statearr_48728_48730[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48731 = state_48722;
state_48722 = G__48731;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__ = function(state_48722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____1.call(this,state_48722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_48729 = f__45794__auto__.call(null);
(statearr_48729[(6)] = c__45793__auto__);

return statearr_48729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__48733 = arguments.length;
switch (G__48733) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__48735){
var map__48736 = p__48735;
var map__48736__$1 = (((((!((map__48736 == null))))?(((((map__48736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48736):map__48736);
var file = cljs.core.get.call(null,map__48736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48736__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48736__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4131__auto__ = file;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__48738){
var vec__48739 = p__48738;
var typ = cljs.core.nth.call(null,vec__48739,(0),null);
var line_number = cljs.core.nth.call(null,vec__48739,(1),null);
var line = cljs.core.nth.call(null,vec__48739,(2),null);
var pred__48742 = cljs.core._EQ_;
var expr__48743 = typ;
if(cljs.core.truth_(pred__48742.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__48743))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__48742.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__48743))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__48742.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__48743))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__48745_SHARP_){
return cljs.core.update_in.call(null,p1__48745_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__48746_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__48746_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__48749){
var map__48750 = p__48749;
var map__48750__$1 = (((((!((map__48750 == null))))?(((((map__48750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48750):map__48750);
var exception = map__48750__$1;
var message = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__48750__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48750,map__48750__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48747_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48747_SHARP_),"</div>"].join('');
});})(last_message,map__48750,map__48750__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):""),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__48750,map__48750__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48748_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__48748_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__48748_SHARP_)))].join('');
});})(last_message,map__48750,map__48750__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__48752){
var map__48753 = p__48752;
var map__48753__$1 = (((((!((map__48753 == null))))?(((((map__48753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48753):map__48753);
var file = cljs.core.get.call(null,map__48753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48753__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48753__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__48756 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__48756__$1 = (((((!((map__48756 == null))))?(((((map__48756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48756):map__48756);
var head = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__48759){
var map__48760 = p__48759;
var map__48760__$1 = (((((!((map__48760 == null))))?(((((map__48760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48760):map__48760);
var warning_data = map__48760__$1;
var file = cljs.core.get.call(null,map__48760__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48760__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48760__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__48760__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__48760__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48760,map__48760__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__48758_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48758_SHARP_),"</div>"].join('');
});})(last_message,map__48760,map__48760__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__48762 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__48762__$1 = (((((!((map__48762 == null))))?(((((map__48762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48762):map__48762);
var head = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48762__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__48764){
var map__48765 = p__48764;
var map__48765__$1 = (((((!((map__48765 == null))))?(((((map__48765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48765):map__48765);
var warning_data = map__48765__$1;
var message = cljs.core.get.call(null,map__48765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48765__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48765__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48767 = message;
var G__48767__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48767)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48767);
var G__48767__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48767__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__48767__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48767__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__48767__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__48768){
var map__48769 = p__48768;
var map__48769__$1 = (((((!((map__48769 == null))))?(((((map__48769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48769):map__48769);
var warning_data = map__48769__$1;
var message = cljs.core.get.call(null,map__48769__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48769__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48769__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__48771 = figwheel.client.heads_up.ensure_container.call(null);
var map__48771__$1 = (((((!((map__48771 == null))))?(((((map__48771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48771):map__48771);
var content_area_el = cljs.core.get.call(null,map__48771__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5735__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5735__auto__)){
var last_child = temp__5735__auto__;
var temp__5733__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5733__auto__)){
var message_count = temp__5733__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_48790){
var state_val_48791 = (state_48790[(1)]);
if((state_val_48791 === (1))){
var inst_48773 = (state_48790[(7)]);
var inst_48773__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48774 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48775 = ["0.0"];
var inst_48776 = cljs.core.PersistentHashMap.fromArrays(inst_48774,inst_48775);
var inst_48777 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48773__$1,inst_48776);
var inst_48778 = cljs.core.async.timeout.call(null,(300));
var state_48790__$1 = (function (){var statearr_48792 = state_48790;
(statearr_48792[(7)] = inst_48773__$1);

(statearr_48792[(8)] = inst_48777);

return statearr_48792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48790__$1,(2),inst_48778);
} else {
if((state_val_48791 === (2))){
var inst_48773 = (state_48790[(7)]);
var inst_48780 = (state_48790[(2)]);
var inst_48781 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_48782 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_48783 = cljs.core.PersistentHashMap.fromArrays(inst_48781,inst_48782);
var inst_48784 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48773,inst_48783);
var inst_48785 = cljs.core.async.timeout.call(null,(200));
var state_48790__$1 = (function (){var statearr_48793 = state_48790;
(statearr_48793[(9)] = inst_48784);

(statearr_48793[(10)] = inst_48780);

return statearr_48793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48790__$1,(3),inst_48785);
} else {
if((state_val_48791 === (3))){
var inst_48773 = (state_48790[(7)]);
var inst_48787 = (state_48790[(2)]);
var inst_48788 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48773,"");
var state_48790__$1 = (function (){var statearr_48794 = state_48790;
(statearr_48794[(11)] = inst_48787);

return statearr_48794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48790__$1,inst_48788);
} else {
return null;
}
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__45699__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__45699__auto____0 = (function (){
var statearr_48795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48795[(0)] = figwheel$client$heads_up$clear_$_state_machine__45699__auto__);

(statearr_48795[(1)] = (1));

return statearr_48795;
});
var figwheel$client$heads_up$clear_$_state_machine__45699__auto____1 = (function (state_48790){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48796){if((e48796 instanceof Object)){
var ex__45702__auto__ = e48796;
var statearr_48797_48799 = state_48790;
(statearr_48797_48799[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48800 = state_48790;
state_48790 = G__48800;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__45699__auto__ = function(state_48790){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__45699__auto____1.call(this,state_48790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__45699__auto____0;
figwheel$client$heads_up$clear_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__45699__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_48798 = f__45794__auto__.call(null);
(statearr_48798[(6)] = c__45793__auto__);

return statearr_48798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_48811){
var state_val_48812 = (state_48811[(1)]);
if((state_val_48812 === (1))){
var inst_48801 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_48811__$1 = state_48811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48811__$1,(2),inst_48801);
} else {
if((state_val_48812 === (2))){
var inst_48803 = (state_48811[(2)]);
var inst_48804 = cljs.core.async.timeout.call(null,(400));
var state_48811__$1 = (function (){var statearr_48813 = state_48811;
(statearr_48813[(7)] = inst_48803);

return statearr_48813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48811__$1,(3),inst_48804);
} else {
if((state_val_48812 === (3))){
var inst_48806 = (state_48811[(2)]);
var inst_48807 = figwheel.client.heads_up.clear.call(null);
var state_48811__$1 = (function (){var statearr_48814 = state_48811;
(statearr_48814[(8)] = inst_48806);

return statearr_48814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48811__$1,(4),inst_48807);
} else {
if((state_val_48812 === (4))){
var inst_48809 = (state_48811[(2)]);
var state_48811__$1 = state_48811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48811__$1,inst_48809);
} else {
return null;
}
}
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____0 = (function (){
var statearr_48815 = [null,null,null,null,null,null,null,null,null];
(statearr_48815[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__);

(statearr_48815[(1)] = (1));

return statearr_48815;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____1 = (function (state_48811){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48816){if((e48816 instanceof Object)){
var ex__45702__auto__ = e48816;
var statearr_48817_48819 = state_48811;
(statearr_48817_48819[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48820 = state_48811;
state_48811 = G__48820;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__ = function(state_48811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____1.call(this,state_48811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_48818 = f__45794__auto__.call(null);
(statearr_48818[(6)] = c__45793__auto__);

return statearr_48818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5735__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1563379480929
