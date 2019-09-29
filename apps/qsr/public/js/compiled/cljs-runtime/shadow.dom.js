goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47755 = coll;
var G__47756 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47755,G__47756) : shadow.dom.lazy_native_coll_seq.call(null,G__47755,G__47756));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47784 = arguments.length;
switch (G__47784) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47789 = arguments.length;
switch (G__47789) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47793 = arguments.length;
switch (G__47793) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47800 = arguments.length;
switch (G__47800) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47809 = arguments.length;
switch (G__47809) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47813 = document;
var G__47814 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47813,G__47814);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47816 = shadow.dom.dom_node(parent);
var G__47817 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47816,G__47817);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47821 = shadow.dom.dom_node(el);
var G__47822 = cls;
return goog.dom.classlist.add(G__47821,G__47822);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47825 = shadow.dom.dom_node(el);
var G__47826 = cls;
return goog.dom.classlist.remove(G__47825,G__47826);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47829 = arguments.length;
switch (G__47829) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47831 = shadow.dom.dom_node(el);
var G__47832 = cls;
return goog.dom.classlist.toggle(G__47831,G__47832);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47835){if((e47835 instanceof Object)){
var e = e47835;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47835;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47839 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47840 = null;
var count__47841 = (0);
var i__47842 = (0);
while(true){
if((i__47842 < count__47841)){
var el = chunk__47840.cljs$core$IIndexed$_nth$arity$2(null,i__47842);
var handler_48457__$1 = ((function (seq__47839,chunk__47840,count__47841,i__47842,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47839,chunk__47840,count__47841,i__47842,el))
;
var G__47857_48458 = el;
var G__47858_48459 = cljs.core.name(ev);
var G__47859_48460 = handler_48457__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47857_48458,G__47858_48459,G__47859_48460) : shadow.dom.dom_listen.call(null,G__47857_48458,G__47858_48459,G__47859_48460));


var G__48463 = seq__47839;
var G__48464 = chunk__47840;
var G__48465 = count__47841;
var G__48466 = (i__47842 + (1));
seq__47839 = G__48463;
chunk__47840 = G__48464;
count__47841 = G__48465;
i__47842 = G__48466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47839);
if(temp__5735__auto__){
var seq__47839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47839__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47839__$1);
var G__48469 = cljs.core.chunk_rest(seq__47839__$1);
var G__48470 = c__4550__auto__;
var G__48471 = cljs.core.count(c__4550__auto__);
var G__48472 = (0);
seq__47839 = G__48469;
chunk__47840 = G__48470;
count__47841 = G__48471;
i__47842 = G__48472;
continue;
} else {
var el = cljs.core.first(seq__47839__$1);
var handler_48473__$1 = ((function (seq__47839,chunk__47840,count__47841,i__47842,el,seq__47839__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47839,chunk__47840,count__47841,i__47842,el,seq__47839__$1,temp__5735__auto__))
;
var G__47863_48476 = el;
var G__47864_48477 = cljs.core.name(ev);
var G__47865_48478 = handler_48473__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47863_48476,G__47864_48477,G__47865_48478) : shadow.dom.dom_listen.call(null,G__47863_48476,G__47864_48477,G__47865_48478));


var G__48479 = cljs.core.next(seq__47839__$1);
var G__48480 = null;
var G__48481 = (0);
var G__48482 = (0);
seq__47839 = G__48479;
chunk__47840 = G__48480;
count__47841 = G__48481;
i__47842 = G__48482;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47870 = arguments.length;
switch (G__47870) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47873 = shadow.dom.dom_node(el);
var G__47874 = cljs.core.name(ev);
var G__47875 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47873,G__47874,G__47875) : shadow.dom.dom_listen.call(null,G__47873,G__47874,G__47875));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47879 = shadow.dom.dom_node(el);
var G__47880 = cljs.core.name(ev);
var G__47881 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47879,G__47880,G__47881) : shadow.dom.dom_listen_remove.call(null,G__47879,G__47880,G__47881));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47884 = cljs.core.seq(events);
var chunk__47885 = null;
var count__47886 = (0);
var i__47887 = (0);
while(true){
if((i__47887 < count__47886)){
var vec__47898 = chunk__47885.cljs$core$IIndexed$_nth$arity$2(null,i__47887);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47898,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48491 = seq__47884;
var G__48492 = chunk__47885;
var G__48493 = count__47886;
var G__48494 = (i__47887 + (1));
seq__47884 = G__48491;
chunk__47885 = G__48492;
count__47886 = G__48493;
i__47887 = G__48494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47884);
if(temp__5735__auto__){
var seq__47884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47884__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47884__$1);
var G__48496 = cljs.core.chunk_rest(seq__47884__$1);
var G__48497 = c__4550__auto__;
var G__48498 = cljs.core.count(c__4550__auto__);
var G__48499 = (0);
seq__47884 = G__48496;
chunk__47885 = G__48497;
count__47886 = G__48498;
i__47887 = G__48499;
continue;
} else {
var vec__47902 = cljs.core.first(seq__47884__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47902,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48500 = cljs.core.next(seq__47884__$1);
var G__48501 = null;
var G__48502 = (0);
var G__48503 = (0);
seq__47884 = G__48500;
chunk__47885 = G__48501;
count__47886 = G__48502;
i__47887 = G__48503;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47906 = cljs.core.seq(styles);
var chunk__47907 = null;
var count__47908 = (0);
var i__47909 = (0);
while(true){
if((i__47909 < count__47908)){
var vec__47924 = chunk__47907.cljs$core$IIndexed$_nth$arity$2(null,i__47909);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(1),null);
var G__47927_48506 = dom;
var G__47928_48507 = cljs.core.name(k);
var G__47929_48508 = (((v == null))?"":v);
goog.style.setStyle(G__47927_48506,G__47928_48507,G__47929_48508);


var G__48509 = seq__47906;
var G__48510 = chunk__47907;
var G__48511 = count__47908;
var G__48512 = (i__47909 + (1));
seq__47906 = G__48509;
chunk__47907 = G__48510;
count__47908 = G__48511;
i__47909 = G__48512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47906);
if(temp__5735__auto__){
var seq__47906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47906__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47906__$1);
var G__48514 = cljs.core.chunk_rest(seq__47906__$1);
var G__48515 = c__4550__auto__;
var G__48516 = cljs.core.count(c__4550__auto__);
var G__48517 = (0);
seq__47906 = G__48514;
chunk__47907 = G__48515;
count__47908 = G__48516;
i__47909 = G__48517;
continue;
} else {
var vec__47931 = cljs.core.first(seq__47906__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47931,(1),null);
var G__47934_48518 = dom;
var G__47935_48519 = cljs.core.name(k);
var G__47936_48520 = (((v == null))?"":v);
goog.style.setStyle(G__47934_48518,G__47935_48519,G__47936_48520);


var G__48522 = cljs.core.next(seq__47906__$1);
var G__48523 = null;
var G__48524 = (0);
var G__48525 = (0);
seq__47906 = G__48522;
chunk__47907 = G__48523;
count__47908 = G__48524;
i__47909 = G__48525;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47942_48527 = key;
var G__47942_48528__$1 = (((G__47942_48527 instanceof cljs.core.Keyword))?G__47942_48527.fqn:null);
switch (G__47942_48528__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48537 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_48537,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_48537,"aria-");
}
})())){
el.setAttribute(ks_48537,value);
} else {
(el[ks_48537] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47954 = shadow.dom.dom_node(el);
var G__47955 = cls;
return goog.dom.classlist.contains(G__47954,G__47955);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47956){
var map__47957 = p__47956;
var map__47957__$1 = (((((!((map__47957 == null))))?(((((map__47957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47957):map__47957);
var props = map__47957__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47957__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47959 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47959,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47959,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47959,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47962 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47962,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47962;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47964 = arguments.length;
switch (G__47964) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47967){
var vec__47969 = p__47967;
var seq__47970 = cljs.core.seq(vec__47969);
var first__47971 = cljs.core.first(seq__47970);
var seq__47970__$1 = cljs.core.next(seq__47970);
var nn = first__47971;
var first__47971__$1 = cljs.core.first(seq__47970__$1);
var seq__47970__$2 = cljs.core.next(seq__47970__$1);
var np = first__47971__$1;
var nc = seq__47970__$2;
var node = vec__47969;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47973 = nn;
var G__47974 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47973,G__47974) : create_fn.call(null,G__47973,G__47974));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47977 = nn;
var G__47978 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47977,G__47978) : create_fn.call(null,G__47977,G__47978));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47981 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47981,(1),null);
var seq__47985_48557 = cljs.core.seq(node_children);
var chunk__47986_48558 = null;
var count__47987_48559 = (0);
var i__47988_48560 = (0);
while(true){
if((i__47988_48560 < count__47987_48559)){
var child_struct_48562 = chunk__47986_48558.cljs$core$IIndexed$_nth$arity$2(null,i__47988_48560);
var children_48563 = shadow.dom.dom_node(child_struct_48562);
if(cljs.core.seq_QMARK_(children_48563)){
var seq__48014_48564 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48563));
var chunk__48016_48565 = null;
var count__48017_48566 = (0);
var i__48018_48567 = (0);
while(true){
if((i__48018_48567 < count__48017_48566)){
var child_48568 = chunk__48016_48565.cljs$core$IIndexed$_nth$arity$2(null,i__48018_48567);
if(cljs.core.truth_(child_48568)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48568);


var G__48570 = seq__48014_48564;
var G__48571 = chunk__48016_48565;
var G__48572 = count__48017_48566;
var G__48573 = (i__48018_48567 + (1));
seq__48014_48564 = G__48570;
chunk__48016_48565 = G__48571;
count__48017_48566 = G__48572;
i__48018_48567 = G__48573;
continue;
} else {
var G__48574 = seq__48014_48564;
var G__48575 = chunk__48016_48565;
var G__48576 = count__48017_48566;
var G__48577 = (i__48018_48567 + (1));
seq__48014_48564 = G__48574;
chunk__48016_48565 = G__48575;
count__48017_48566 = G__48576;
i__48018_48567 = G__48577;
continue;
}
} else {
var temp__5735__auto___48579 = cljs.core.seq(seq__48014_48564);
if(temp__5735__auto___48579){
var seq__48014_48580__$1 = temp__5735__auto___48579;
if(cljs.core.chunked_seq_QMARK_(seq__48014_48580__$1)){
var c__4550__auto___48582 = cljs.core.chunk_first(seq__48014_48580__$1);
var G__48583 = cljs.core.chunk_rest(seq__48014_48580__$1);
var G__48584 = c__4550__auto___48582;
var G__48585 = cljs.core.count(c__4550__auto___48582);
var G__48586 = (0);
seq__48014_48564 = G__48583;
chunk__48016_48565 = G__48584;
count__48017_48566 = G__48585;
i__48018_48567 = G__48586;
continue;
} else {
var child_48587 = cljs.core.first(seq__48014_48580__$1);
if(cljs.core.truth_(child_48587)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48587);


var G__48588 = cljs.core.next(seq__48014_48580__$1);
var G__48589 = null;
var G__48590 = (0);
var G__48591 = (0);
seq__48014_48564 = G__48588;
chunk__48016_48565 = G__48589;
count__48017_48566 = G__48590;
i__48018_48567 = G__48591;
continue;
} else {
var G__48592 = cljs.core.next(seq__48014_48580__$1);
var G__48593 = null;
var G__48594 = (0);
var G__48595 = (0);
seq__48014_48564 = G__48592;
chunk__48016_48565 = G__48593;
count__48017_48566 = G__48594;
i__48018_48567 = G__48595;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48563);
}


var G__48596 = seq__47985_48557;
var G__48597 = chunk__47986_48558;
var G__48598 = count__47987_48559;
var G__48599 = (i__47988_48560 + (1));
seq__47985_48557 = G__48596;
chunk__47986_48558 = G__48597;
count__47987_48559 = G__48598;
i__47988_48560 = G__48599;
continue;
} else {
var temp__5735__auto___48600 = cljs.core.seq(seq__47985_48557);
if(temp__5735__auto___48600){
var seq__47985_48601__$1 = temp__5735__auto___48600;
if(cljs.core.chunked_seq_QMARK_(seq__47985_48601__$1)){
var c__4550__auto___48602 = cljs.core.chunk_first(seq__47985_48601__$1);
var G__48603 = cljs.core.chunk_rest(seq__47985_48601__$1);
var G__48604 = c__4550__auto___48602;
var G__48605 = cljs.core.count(c__4550__auto___48602);
var G__48606 = (0);
seq__47985_48557 = G__48603;
chunk__47986_48558 = G__48604;
count__47987_48559 = G__48605;
i__47988_48560 = G__48606;
continue;
} else {
var child_struct_48607 = cljs.core.first(seq__47985_48601__$1);
var children_48608 = shadow.dom.dom_node(child_struct_48607);
if(cljs.core.seq_QMARK_(children_48608)){
var seq__48029_48609 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48608));
var chunk__48031_48610 = null;
var count__48032_48611 = (0);
var i__48033_48612 = (0);
while(true){
if((i__48033_48612 < count__48032_48611)){
var child_48613 = chunk__48031_48610.cljs$core$IIndexed$_nth$arity$2(null,i__48033_48612);
if(cljs.core.truth_(child_48613)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48613);


var G__48614 = seq__48029_48609;
var G__48615 = chunk__48031_48610;
var G__48616 = count__48032_48611;
var G__48617 = (i__48033_48612 + (1));
seq__48029_48609 = G__48614;
chunk__48031_48610 = G__48615;
count__48032_48611 = G__48616;
i__48033_48612 = G__48617;
continue;
} else {
var G__48618 = seq__48029_48609;
var G__48619 = chunk__48031_48610;
var G__48620 = count__48032_48611;
var G__48621 = (i__48033_48612 + (1));
seq__48029_48609 = G__48618;
chunk__48031_48610 = G__48619;
count__48032_48611 = G__48620;
i__48033_48612 = G__48621;
continue;
}
} else {
var temp__5735__auto___48622__$1 = cljs.core.seq(seq__48029_48609);
if(temp__5735__auto___48622__$1){
var seq__48029_48623__$1 = temp__5735__auto___48622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48029_48623__$1)){
var c__4550__auto___48624 = cljs.core.chunk_first(seq__48029_48623__$1);
var G__48625 = cljs.core.chunk_rest(seq__48029_48623__$1);
var G__48626 = c__4550__auto___48624;
var G__48627 = cljs.core.count(c__4550__auto___48624);
var G__48628 = (0);
seq__48029_48609 = G__48625;
chunk__48031_48610 = G__48626;
count__48032_48611 = G__48627;
i__48033_48612 = G__48628;
continue;
} else {
var child_48629 = cljs.core.first(seq__48029_48623__$1);
if(cljs.core.truth_(child_48629)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48629);


var G__48630 = cljs.core.next(seq__48029_48623__$1);
var G__48631 = null;
var G__48632 = (0);
var G__48633 = (0);
seq__48029_48609 = G__48630;
chunk__48031_48610 = G__48631;
count__48032_48611 = G__48632;
i__48033_48612 = G__48633;
continue;
} else {
var G__48634 = cljs.core.next(seq__48029_48623__$1);
var G__48635 = null;
var G__48636 = (0);
var G__48637 = (0);
seq__48029_48609 = G__48634;
chunk__48031_48610 = G__48635;
count__48032_48611 = G__48636;
i__48033_48612 = G__48637;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48608);
}


var G__48641 = cljs.core.next(seq__47985_48601__$1);
var G__48642 = null;
var G__48643 = (0);
var G__48644 = (0);
seq__47985_48557 = G__48641;
chunk__47986_48558 = G__48642;
count__47987_48559 = G__48643;
i__47988_48560 = G__48644;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48052 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48052);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48057 = cljs.core.seq(node);
var chunk__48058 = null;
var count__48059 = (0);
var i__48060 = (0);
while(true){
if((i__48060 < count__48059)){
var n = chunk__48058.cljs$core$IIndexed$_nth$arity$2(null,i__48060);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48649 = seq__48057;
var G__48650 = chunk__48058;
var G__48651 = count__48059;
var G__48652 = (i__48060 + (1));
seq__48057 = G__48649;
chunk__48058 = G__48650;
count__48059 = G__48651;
i__48060 = G__48652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48057);
if(temp__5735__auto__){
var seq__48057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48057__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48057__$1);
var G__48653 = cljs.core.chunk_rest(seq__48057__$1);
var G__48654 = c__4550__auto__;
var G__48655 = cljs.core.count(c__4550__auto__);
var G__48656 = (0);
seq__48057 = G__48653;
chunk__48058 = G__48654;
count__48059 = G__48655;
i__48060 = G__48656;
continue;
} else {
var n = cljs.core.first(seq__48057__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48657 = cljs.core.next(seq__48057__$1);
var G__48658 = null;
var G__48659 = (0);
var G__48660 = (0);
seq__48057 = G__48657;
chunk__48058 = G__48658;
count__48059 = G__48659;
i__48060 = G__48660;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48067 = shadow.dom.dom_node(new$);
var G__48068 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48067,G__48068);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48071 = arguments.length;
switch (G__48071) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48073 = arguments.length;
switch (G__48073) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48078 = arguments.length;
switch (G__48078) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48668 = arguments.length;
var i__4731__auto___48669 = (0);
while(true){
if((i__4731__auto___48669 < len__4730__auto___48668)){
args__4736__auto__.push((arguments[i__4731__auto___48669]));

var G__48673 = (i__4731__auto___48669 + (1));
i__4731__auto___48669 = G__48673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48083_48674 = cljs.core.seq(nodes);
var chunk__48084_48675 = null;
var count__48085_48676 = (0);
var i__48086_48677 = (0);
while(true){
if((i__48086_48677 < count__48085_48676)){
var node_48678 = chunk__48084_48675.cljs$core$IIndexed$_nth$arity$2(null,i__48086_48677);
fragment.appendChild(shadow.dom._to_dom(node_48678));


var G__48679 = seq__48083_48674;
var G__48680 = chunk__48084_48675;
var G__48681 = count__48085_48676;
var G__48682 = (i__48086_48677 + (1));
seq__48083_48674 = G__48679;
chunk__48084_48675 = G__48680;
count__48085_48676 = G__48681;
i__48086_48677 = G__48682;
continue;
} else {
var temp__5735__auto___48683 = cljs.core.seq(seq__48083_48674);
if(temp__5735__auto___48683){
var seq__48083_48684__$1 = temp__5735__auto___48683;
if(cljs.core.chunked_seq_QMARK_(seq__48083_48684__$1)){
var c__4550__auto___48685 = cljs.core.chunk_first(seq__48083_48684__$1);
var G__48686 = cljs.core.chunk_rest(seq__48083_48684__$1);
var G__48687 = c__4550__auto___48685;
var G__48688 = cljs.core.count(c__4550__auto___48685);
var G__48689 = (0);
seq__48083_48674 = G__48686;
chunk__48084_48675 = G__48687;
count__48085_48676 = G__48688;
i__48086_48677 = G__48689;
continue;
} else {
var node_48690 = cljs.core.first(seq__48083_48684__$1);
fragment.appendChild(shadow.dom._to_dom(node_48690));


var G__48691 = cljs.core.next(seq__48083_48684__$1);
var G__48692 = null;
var G__48693 = (0);
var G__48694 = (0);
seq__48083_48674 = G__48691;
chunk__48084_48675 = G__48692;
count__48085_48676 = G__48693;
i__48086_48677 = G__48694;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48082));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48087_48695 = cljs.core.seq(scripts);
var chunk__48088_48696 = null;
var count__48089_48697 = (0);
var i__48090_48698 = (0);
while(true){
if((i__48090_48698 < count__48089_48697)){
var vec__48101_48699 = chunk__48088_48696.cljs$core$IIndexed$_nth$arity$2(null,i__48090_48698);
var script_tag_48700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48101_48699,(0),null);
var script_body_48701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48101_48699,(1),null);
eval(script_body_48701);


var G__48705 = seq__48087_48695;
var G__48706 = chunk__48088_48696;
var G__48707 = count__48089_48697;
var G__48708 = (i__48090_48698 + (1));
seq__48087_48695 = G__48705;
chunk__48088_48696 = G__48706;
count__48089_48697 = G__48707;
i__48090_48698 = G__48708;
continue;
} else {
var temp__5735__auto___48709 = cljs.core.seq(seq__48087_48695);
if(temp__5735__auto___48709){
var seq__48087_48710__$1 = temp__5735__auto___48709;
if(cljs.core.chunked_seq_QMARK_(seq__48087_48710__$1)){
var c__4550__auto___48711 = cljs.core.chunk_first(seq__48087_48710__$1);
var G__48712 = cljs.core.chunk_rest(seq__48087_48710__$1);
var G__48713 = c__4550__auto___48711;
var G__48714 = cljs.core.count(c__4550__auto___48711);
var G__48715 = (0);
seq__48087_48695 = G__48712;
chunk__48088_48696 = G__48713;
count__48089_48697 = G__48714;
i__48090_48698 = G__48715;
continue;
} else {
var vec__48108_48716 = cljs.core.first(seq__48087_48710__$1);
var script_tag_48717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108_48716,(0),null);
var script_body_48718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108_48716,(1),null);
eval(script_body_48718);


var G__48719 = cljs.core.next(seq__48087_48710__$1);
var G__48720 = null;
var G__48721 = (0);
var G__48722 = (0);
seq__48087_48695 = G__48719;
chunk__48088_48696 = G__48720;
count__48089_48697 = G__48721;
i__48090_48698 = G__48722;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48113){
var vec__48115 = p__48113;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48122 = shadow.dom.dom_node(el);
var G__48123 = cls;
return goog.dom.getAncestorByClass(G__48122,G__48123);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48127 = arguments.length;
switch (G__48127) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48131 = shadow.dom.dom_node(el);
var G__48132 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48131,G__48132);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48135 = shadow.dom.dom_node(el);
var G__48136 = cljs.core.name(tag);
var G__48137 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48135,G__48136,G__48137);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48140 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48140);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48144 = shadow.dom.dom_node(dom);
var G__48145 = value;
return goog.dom.forms.setValue(G__48144,G__48145);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48158 = cljs.core.seq(style_keys);
var chunk__48159 = null;
var count__48160 = (0);
var i__48161 = (0);
while(true){
if((i__48161 < count__48160)){
var it = chunk__48159.cljs$core$IIndexed$_nth$arity$2(null,i__48161);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48727 = seq__48158;
var G__48728 = chunk__48159;
var G__48729 = count__48160;
var G__48730 = (i__48161 + (1));
seq__48158 = G__48727;
chunk__48159 = G__48728;
count__48160 = G__48729;
i__48161 = G__48730;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48158);
if(temp__5735__auto__){
var seq__48158__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48158__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48158__$1);
var G__48731 = cljs.core.chunk_rest(seq__48158__$1);
var G__48732 = c__4550__auto__;
var G__48733 = cljs.core.count(c__4550__auto__);
var G__48734 = (0);
seq__48158 = G__48731;
chunk__48159 = G__48732;
count__48160 = G__48733;
i__48161 = G__48734;
continue;
} else {
var it = cljs.core.first(seq__48158__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48735 = cljs.core.next(seq__48158__$1);
var G__48736 = null;
var G__48737 = (0);
var G__48738 = (0);
seq__48158 = G__48735;
chunk__48159 = G__48736;
count__48160 = G__48737;
i__48161 = G__48738;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48167,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48175 = k48167;
var G__48175__$1 = (((G__48175 instanceof cljs.core.Keyword))?G__48175.fqn:null);
switch (G__48175__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48167,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48178){
var vec__48179 = p__48178;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48166){
var self__ = this;
var G__48166__$1 = this;
return (new cljs.core.RecordIter((0),G__48166__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48183 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48183(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48168,other48169){
var self__ = this;
var this48168__$1 = this;
return (((!((other48169 == null)))) && ((this48168__$1.constructor === other48169.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48168__$1.x,other48169.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48168__$1.y,other48169.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48168__$1.__extmap,other48169.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48166){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48185 = cljs.core.keyword_identical_QMARK_;
var expr__48186 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48188 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48189 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48188,G__48189) : pred__48185.call(null,G__48188,G__48189));
})())){
return (new shadow.dom.Coordinate(G__48166,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48190 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48191 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48190,G__48191) : pred__48185.call(null,G__48190,G__48191));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48166,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48166),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48166){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48166,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48172){
var extmap__4424__auto__ = (function (){var G__48192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48172,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48192);
} else {
return G__48192;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48172),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48172),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48194 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48194);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48198 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48198);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48201 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48201);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48205,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48216 = k48205;
var G__48216__$1 = (((G__48216 instanceof cljs.core.Keyword))?G__48216.fqn:null);
switch (G__48216__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48205,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48218){
var vec__48219 = p__48218;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48204){
var self__ = this;
var G__48204__$1 = this;
return (new cljs.core.RecordIter((0),G__48204__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48230 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48230(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48206,other48207){
var self__ = this;
var this48206__$1 = this;
return (((!((other48207 == null)))) && ((this48206__$1.constructor === other48207.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48206__$1.w,other48207.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48206__$1.h,other48207.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48206__$1.__extmap,other48207.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48204){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48234 = cljs.core.keyword_identical_QMARK_;
var expr__48235 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48238 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48239 = expr__48235;
return (pred__48234.cljs$core$IFn$_invoke$arity$2 ? pred__48234.cljs$core$IFn$_invoke$arity$2(G__48238,G__48239) : pred__48234.call(null,G__48238,G__48239));
})())){
return (new shadow.dom.Size(G__48204,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48241 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48242 = expr__48235;
return (pred__48234.cljs$core$IFn$_invoke$arity$2 ? pred__48234.cljs$core$IFn$_invoke$arity$2(G__48241,G__48242) : pred__48234.call(null,G__48241,G__48242));
})())){
return (new shadow.dom.Size(self__.w,G__48204,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48204),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48204){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48204,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48209){
var extmap__4424__auto__ = (function (){var G__48247 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48209,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48247);
} else {
return G__48247;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48209),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48209),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48249 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48249);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__48767 = (i + (1));
var G__48768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48767;
ret = G__48768;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48266){
var vec__48267 = p__48266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48267,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48272 = arguments.length;
switch (G__48272) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48278_48771 = new_node;
var G__48279_48772 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48278_48771,G__48279_48772);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48282_48773 = new_node;
var G__48283_48774 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48282_48773,G__48283_48774);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48775 = ps;
var G__48776 = (i + (1));
el__$1 = G__48775;
i = G__48776;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48290 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48290);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48294 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48294);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48296 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48296);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48299 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48303_48780 = cljs.core.seq(props);
var chunk__48304_48781 = null;
var count__48305_48782 = (0);
var i__48306_48783 = (0);
while(true){
if((i__48306_48783 < count__48305_48782)){
var vec__48318_48784 = chunk__48304_48781.cljs$core$IIndexed$_nth$arity$2(null,i__48306_48783);
var k_48785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318_48784,(0),null);
var v_48786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318_48784,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48785);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48785),v_48786);


var G__48791 = seq__48303_48780;
var G__48792 = chunk__48304_48781;
var G__48793 = count__48305_48782;
var G__48794 = (i__48306_48783 + (1));
seq__48303_48780 = G__48791;
chunk__48304_48781 = G__48792;
count__48305_48782 = G__48793;
i__48306_48783 = G__48794;
continue;
} else {
var temp__5735__auto___48795 = cljs.core.seq(seq__48303_48780);
if(temp__5735__auto___48795){
var seq__48303_48796__$1 = temp__5735__auto___48795;
if(cljs.core.chunked_seq_QMARK_(seq__48303_48796__$1)){
var c__4550__auto___48797 = cljs.core.chunk_first(seq__48303_48796__$1);
var G__48799 = cljs.core.chunk_rest(seq__48303_48796__$1);
var G__48800 = c__4550__auto___48797;
var G__48801 = cljs.core.count(c__4550__auto___48797);
var G__48802 = (0);
seq__48303_48780 = G__48799;
chunk__48304_48781 = G__48800;
count__48305_48782 = G__48801;
i__48306_48783 = G__48802;
continue;
} else {
var vec__48324_48803 = cljs.core.first(seq__48303_48796__$1);
var k_48804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324_48803,(0),null);
var v_48805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324_48803,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48804);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48804),v_48805);


var G__48806 = cljs.core.next(seq__48303_48796__$1);
var G__48807 = null;
var G__48808 = (0);
var G__48809 = (0);
seq__48303_48780 = G__48806;
chunk__48304_48781 = G__48807;
count__48305_48782 = G__48808;
i__48306_48783 = G__48809;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48333 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(1),null);
var seq__48336_48811 = cljs.core.seq(node_children);
var chunk__48338_48812 = null;
var count__48339_48813 = (0);
var i__48340_48814 = (0);
while(true){
if((i__48340_48814 < count__48339_48813)){
var child_struct_48815 = chunk__48338_48812.cljs$core$IIndexed$_nth$arity$2(null,i__48340_48814);
if((!((child_struct_48815 == null)))){
if(typeof child_struct_48815 === 'string'){
var text_48820 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48820),child_struct_48815].join(''));
} else {
var children_48821 = shadow.dom.svg_node(child_struct_48815);
if(cljs.core.seq_QMARK_(children_48821)){
var seq__48354_48822 = cljs.core.seq(children_48821);
var chunk__48356_48823 = null;
var count__48357_48824 = (0);
var i__48358_48825 = (0);
while(true){
if((i__48358_48825 < count__48357_48824)){
var child_48826 = chunk__48356_48823.cljs$core$IIndexed$_nth$arity$2(null,i__48358_48825);
if(cljs.core.truth_(child_48826)){
node.appendChild(child_48826);


var G__48827 = seq__48354_48822;
var G__48828 = chunk__48356_48823;
var G__48829 = count__48357_48824;
var G__48830 = (i__48358_48825 + (1));
seq__48354_48822 = G__48827;
chunk__48356_48823 = G__48828;
count__48357_48824 = G__48829;
i__48358_48825 = G__48830;
continue;
} else {
var G__48831 = seq__48354_48822;
var G__48832 = chunk__48356_48823;
var G__48833 = count__48357_48824;
var G__48834 = (i__48358_48825 + (1));
seq__48354_48822 = G__48831;
chunk__48356_48823 = G__48832;
count__48357_48824 = G__48833;
i__48358_48825 = G__48834;
continue;
}
} else {
var temp__5735__auto___48835 = cljs.core.seq(seq__48354_48822);
if(temp__5735__auto___48835){
var seq__48354_48836__$1 = temp__5735__auto___48835;
if(cljs.core.chunked_seq_QMARK_(seq__48354_48836__$1)){
var c__4550__auto___48837 = cljs.core.chunk_first(seq__48354_48836__$1);
var G__48838 = cljs.core.chunk_rest(seq__48354_48836__$1);
var G__48839 = c__4550__auto___48837;
var G__48840 = cljs.core.count(c__4550__auto___48837);
var G__48841 = (0);
seq__48354_48822 = G__48838;
chunk__48356_48823 = G__48839;
count__48357_48824 = G__48840;
i__48358_48825 = G__48841;
continue;
} else {
var child_48842 = cljs.core.first(seq__48354_48836__$1);
if(cljs.core.truth_(child_48842)){
node.appendChild(child_48842);


var G__48843 = cljs.core.next(seq__48354_48836__$1);
var G__48844 = null;
var G__48845 = (0);
var G__48846 = (0);
seq__48354_48822 = G__48843;
chunk__48356_48823 = G__48844;
count__48357_48824 = G__48845;
i__48358_48825 = G__48846;
continue;
} else {
var G__48847 = cljs.core.next(seq__48354_48836__$1);
var G__48848 = null;
var G__48849 = (0);
var G__48850 = (0);
seq__48354_48822 = G__48847;
chunk__48356_48823 = G__48848;
count__48357_48824 = G__48849;
i__48358_48825 = G__48850;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48821);
}
}


var G__48851 = seq__48336_48811;
var G__48852 = chunk__48338_48812;
var G__48853 = count__48339_48813;
var G__48854 = (i__48340_48814 + (1));
seq__48336_48811 = G__48851;
chunk__48338_48812 = G__48852;
count__48339_48813 = G__48853;
i__48340_48814 = G__48854;
continue;
} else {
var G__48856 = seq__48336_48811;
var G__48857 = chunk__48338_48812;
var G__48858 = count__48339_48813;
var G__48859 = (i__48340_48814 + (1));
seq__48336_48811 = G__48856;
chunk__48338_48812 = G__48857;
count__48339_48813 = G__48858;
i__48340_48814 = G__48859;
continue;
}
} else {
var temp__5735__auto___48860 = cljs.core.seq(seq__48336_48811);
if(temp__5735__auto___48860){
var seq__48336_48861__$1 = temp__5735__auto___48860;
if(cljs.core.chunked_seq_QMARK_(seq__48336_48861__$1)){
var c__4550__auto___48862 = cljs.core.chunk_first(seq__48336_48861__$1);
var G__48863 = cljs.core.chunk_rest(seq__48336_48861__$1);
var G__48864 = c__4550__auto___48862;
var G__48865 = cljs.core.count(c__4550__auto___48862);
var G__48866 = (0);
seq__48336_48811 = G__48863;
chunk__48338_48812 = G__48864;
count__48339_48813 = G__48865;
i__48340_48814 = G__48866;
continue;
} else {
var child_struct_48867 = cljs.core.first(seq__48336_48861__$1);
if((!((child_struct_48867 == null)))){
if(typeof child_struct_48867 === 'string'){
var text_48868 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48868),child_struct_48867].join(''));
} else {
var children_48869 = shadow.dom.svg_node(child_struct_48867);
if(cljs.core.seq_QMARK_(children_48869)){
var seq__48366_48870 = cljs.core.seq(children_48869);
var chunk__48368_48871 = null;
var count__48369_48872 = (0);
var i__48370_48873 = (0);
while(true){
if((i__48370_48873 < count__48369_48872)){
var child_48874 = chunk__48368_48871.cljs$core$IIndexed$_nth$arity$2(null,i__48370_48873);
if(cljs.core.truth_(child_48874)){
node.appendChild(child_48874);


var G__48875 = seq__48366_48870;
var G__48876 = chunk__48368_48871;
var G__48877 = count__48369_48872;
var G__48878 = (i__48370_48873 + (1));
seq__48366_48870 = G__48875;
chunk__48368_48871 = G__48876;
count__48369_48872 = G__48877;
i__48370_48873 = G__48878;
continue;
} else {
var G__48879 = seq__48366_48870;
var G__48880 = chunk__48368_48871;
var G__48881 = count__48369_48872;
var G__48882 = (i__48370_48873 + (1));
seq__48366_48870 = G__48879;
chunk__48368_48871 = G__48880;
count__48369_48872 = G__48881;
i__48370_48873 = G__48882;
continue;
}
} else {
var temp__5735__auto___48883__$1 = cljs.core.seq(seq__48366_48870);
if(temp__5735__auto___48883__$1){
var seq__48366_48884__$1 = temp__5735__auto___48883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48366_48884__$1)){
var c__4550__auto___48885 = cljs.core.chunk_first(seq__48366_48884__$1);
var G__48886 = cljs.core.chunk_rest(seq__48366_48884__$1);
var G__48887 = c__4550__auto___48885;
var G__48888 = cljs.core.count(c__4550__auto___48885);
var G__48889 = (0);
seq__48366_48870 = G__48886;
chunk__48368_48871 = G__48887;
count__48369_48872 = G__48888;
i__48370_48873 = G__48889;
continue;
} else {
var child_48890 = cljs.core.first(seq__48366_48884__$1);
if(cljs.core.truth_(child_48890)){
node.appendChild(child_48890);


var G__48894 = cljs.core.next(seq__48366_48884__$1);
var G__48895 = null;
var G__48896 = (0);
var G__48897 = (0);
seq__48366_48870 = G__48894;
chunk__48368_48871 = G__48895;
count__48369_48872 = G__48896;
i__48370_48873 = G__48897;
continue;
} else {
var G__48900 = cljs.core.next(seq__48366_48884__$1);
var G__48901 = null;
var G__48902 = (0);
var G__48903 = (0);
seq__48366_48870 = G__48900;
chunk__48368_48871 = G__48901;
count__48369_48872 = G__48902;
i__48370_48873 = G__48903;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48869);
}
}


var G__48906 = cljs.core.next(seq__48336_48861__$1);
var G__48907 = null;
var G__48908 = (0);
var G__48909 = (0);
seq__48336_48811 = G__48906;
chunk__48338_48812 = G__48907;
count__48339_48813 = G__48908;
i__48340_48814 = G__48909;
continue;
} else {
var G__48910 = cljs.core.next(seq__48336_48861__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48336_48811 = G__48910;
chunk__48338_48812 = G__48911;
count__48339_48813 = G__48912;
i__48340_48814 = G__48913;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48378_48914 = shadow.dom._to_svg;
var G__48379_48915 = "string";
var G__48380_48916 = ((function (G__48378_48914,G__48379_48915){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__48378_48914,G__48379_48915))
;
goog.object.set(G__48378_48914,G__48379_48915,G__48380_48916);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48384_48917 = shadow.dom._to_svg;
var G__48385_48918 = "null";
var G__48386_48919 = ((function (G__48384_48917,G__48385_48918){
return (function (_){
return null;
});})(G__48384_48917,G__48385_48918))
;
goog.object.set(G__48384_48917,G__48385_48918,G__48386_48919);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48920 = arguments.length;
var i__4731__auto___48921 = (0);
while(true){
if((i__4731__auto___48921 < len__4730__auto___48920)){
args__4736__auto__.push((arguments[i__4731__auto___48921]));

var G__48922 = (i__4731__auto___48921 + (1));
i__4731__auto___48921 = G__48922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq48388){
var G__48389 = cljs.core.first(seq48388);
var seq48388__$1 = cljs.core.next(seq48388);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48389,seq48388__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48398 = arguments.length;
switch (G__48398) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__48403_48926 = shadow.dom.dom_node(el);
var G__48404_48927 = cljs.core.name(event);
var G__48405_48928 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48403_48926,G__48404_48927,G__48405_48928) : shadow.dom.dom_listen.call(null,G__48403_48926,G__48404_48927,G__48405_48928));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__46124__auto___48929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48929,buf,chan,event_fn){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48929,buf,chan,event_fn){
return (function (state_48412){
var state_val_48413 = (state_48412[(1)]);
if((state_val_48413 === (1))){
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48412__$1,(2),once_or_cleanup);
} else {
if((state_val_48413 === (2))){
var inst_48408 = (state_48412[(2)]);
var inst_48409 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48412__$1 = (function (){var statearr_48418 = state_48412;
(statearr_48418[(7)] = inst_48408);

return statearr_48418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48412__$1,inst_48409);
} else {
return null;
}
}
});})(c__46124__auto___48929,buf,chan,event_fn))
;
return ((function (switch__46023__auto__,c__46124__auto___48929,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__46024__auto__ = null;
var shadow$dom$state_machine__46024__auto____0 = (function (){
var statearr_48420 = [null,null,null,null,null,null,null,null];
(statearr_48420[(0)] = shadow$dom$state_machine__46024__auto__);

(statearr_48420[(1)] = (1));

return statearr_48420;
});
var shadow$dom$state_machine__46024__auto____1 = (function (state_48412){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_48412);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e48423){if((e48423 instanceof Object)){
var ex__46027__auto__ = e48423;
var statearr_48425_48930 = state_48412;
(statearr_48425_48930[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48931 = state_48412;
state_48412 = G__48931;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
shadow$dom$state_machine__46024__auto__ = function(state_48412){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46024__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46024__auto____1.call(this,state_48412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46024__auto____0;
shadow$dom$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46024__auto____1;
return shadow$dom$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48929,buf,chan,event_fn))
})();
var state__46126__auto__ = (function (){var statearr_48426 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_48426[(6)] = c__46124__auto___48929);

return statearr_48426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48929,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
