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
return cljs.core.cons((coll[idx]),(function (){var G__47836 = coll;
var G__47837 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47836,G__47837) : shadow.dom.lazy_native_coll_seq.call(null,G__47836,G__47837));
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
var G__47881 = arguments.length;
switch (G__47881) {
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
var G__47894 = arguments.length;
switch (G__47894) {
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
var G__47906 = arguments.length;
switch (G__47906) {
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
var G__47930 = arguments.length;
switch (G__47930) {
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
var G__47949 = arguments.length;
switch (G__47949) {
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
var G__47951 = document;
var G__47952 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47951,G__47952);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47954 = shadow.dom.dom_node(parent);
var G__47955 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47954,G__47955);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47958 = shadow.dom.dom_node(el);
var G__47959 = cls;
return goog.dom.classlist.add(G__47958,G__47959);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47962 = shadow.dom.dom_node(el);
var G__47963 = cls;
return goog.dom.classlist.remove(G__47962,G__47963);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47967 = arguments.length;
switch (G__47967) {
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
var G__47970 = shadow.dom.dom_node(el);
var G__47971 = cls;
return goog.dom.classlist.toggle(G__47970,G__47971);
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
}catch (e47979){if((e47979 instanceof Object)){
var e = e47979;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47979;

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
var seq__47989 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47990 = null;
var count__47991 = (0);
var i__47992 = (0);
while(true){
if((i__47992 < count__47991)){
var el = chunk__47990.cljs$core$IIndexed$_nth$arity$2(null,i__47992);
var handler_48666__$1 = ((function (seq__47989,chunk__47990,count__47991,i__47992,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47989,chunk__47990,count__47991,i__47992,el))
;
var G__48013_48667 = el;
var G__48014_48668 = cljs.core.name(ev);
var G__48015_48669 = handler_48666__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48013_48667,G__48014_48668,G__48015_48669) : shadow.dom.dom_listen.call(null,G__48013_48667,G__48014_48668,G__48015_48669));


var G__48670 = seq__47989;
var G__48671 = chunk__47990;
var G__48672 = count__47991;
var G__48673 = (i__47992 + (1));
seq__47989 = G__48670;
chunk__47990 = G__48671;
count__47991 = G__48672;
i__47992 = G__48673;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47989);
if(temp__5735__auto__){
var seq__47989__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47989__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47989__$1);
var G__48674 = cljs.core.chunk_rest(seq__47989__$1);
var G__48675 = c__4550__auto__;
var G__48676 = cljs.core.count(c__4550__auto__);
var G__48677 = (0);
seq__47989 = G__48674;
chunk__47990 = G__48675;
count__47991 = G__48676;
i__47992 = G__48677;
continue;
} else {
var el = cljs.core.first(seq__47989__$1);
var handler_48678__$1 = ((function (seq__47989,chunk__47990,count__47991,i__47992,el,seq__47989__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47989,chunk__47990,count__47991,i__47992,el,seq__47989__$1,temp__5735__auto__))
;
var G__48021_48679 = el;
var G__48022_48680 = cljs.core.name(ev);
var G__48023_48681 = handler_48678__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48021_48679,G__48022_48680,G__48023_48681) : shadow.dom.dom_listen.call(null,G__48021_48679,G__48022_48680,G__48023_48681));


var G__48682 = cljs.core.next(seq__47989__$1);
var G__48683 = null;
var G__48684 = (0);
var G__48685 = (0);
seq__47989 = G__48682;
chunk__47990 = G__48683;
count__47991 = G__48684;
i__47992 = G__48685;
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
var G__48027 = arguments.length;
switch (G__48027) {
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
var G__48030 = shadow.dom.dom_node(el);
var G__48031 = cljs.core.name(ev);
var G__48032 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48030,G__48031,G__48032) : shadow.dom.dom_listen.call(null,G__48030,G__48031,G__48032));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48034 = shadow.dom.dom_node(el);
var G__48035 = cljs.core.name(ev);
var G__48036 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48034,G__48035,G__48036) : shadow.dom.dom_listen_remove.call(null,G__48034,G__48035,G__48036));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48037 = cljs.core.seq(events);
var chunk__48038 = null;
var count__48039 = (0);
var i__48040 = (0);
while(true){
if((i__48040 < count__48039)){
var vec__48050 = chunk__48038.cljs$core$IIndexed$_nth$arity$2(null,i__48040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48050,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48687 = seq__48037;
var G__48688 = chunk__48038;
var G__48689 = count__48039;
var G__48690 = (i__48040 + (1));
seq__48037 = G__48687;
chunk__48038 = G__48688;
count__48039 = G__48689;
i__48040 = G__48690;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48037);
if(temp__5735__auto__){
var seq__48037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48037__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48037__$1);
var G__48691 = cljs.core.chunk_rest(seq__48037__$1);
var G__48692 = c__4550__auto__;
var G__48693 = cljs.core.count(c__4550__auto__);
var G__48694 = (0);
seq__48037 = G__48691;
chunk__48038 = G__48692;
count__48039 = G__48693;
i__48040 = G__48694;
continue;
} else {
var vec__48056 = cljs.core.first(seq__48037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48695 = cljs.core.next(seq__48037__$1);
var G__48696 = null;
var G__48697 = (0);
var G__48698 = (0);
seq__48037 = G__48695;
chunk__48038 = G__48696;
count__48039 = G__48697;
i__48040 = G__48698;
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
var seq__48063 = cljs.core.seq(styles);
var chunk__48064 = null;
var count__48065 = (0);
var i__48066 = (0);
while(true){
if((i__48066 < count__48065)){
var vec__48085 = chunk__48064.cljs$core$IIndexed$_nth$arity$2(null,i__48066);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48085,(1),null);
var G__48088_48701 = dom;
var G__48089_48702 = cljs.core.name(k);
var G__48090_48703 = (((v == null))?"":v);
goog.style.setStyle(G__48088_48701,G__48089_48702,G__48090_48703);


var G__48704 = seq__48063;
var G__48705 = chunk__48064;
var G__48706 = count__48065;
var G__48707 = (i__48066 + (1));
seq__48063 = G__48704;
chunk__48064 = G__48705;
count__48065 = G__48706;
i__48066 = G__48707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48063);
if(temp__5735__auto__){
var seq__48063__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48063__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48063__$1);
var G__48708 = cljs.core.chunk_rest(seq__48063__$1);
var G__48709 = c__4550__auto__;
var G__48710 = cljs.core.count(c__4550__auto__);
var G__48711 = (0);
seq__48063 = G__48708;
chunk__48064 = G__48709;
count__48065 = G__48710;
i__48066 = G__48711;
continue;
} else {
var vec__48093 = cljs.core.first(seq__48063__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(1),null);
var G__48096_48712 = dom;
var G__48097_48713 = cljs.core.name(k);
var G__48098_48714 = (((v == null))?"":v);
goog.style.setStyle(G__48096_48712,G__48097_48713,G__48098_48714);


var G__48715 = cljs.core.next(seq__48063__$1);
var G__48716 = null;
var G__48717 = (0);
var G__48718 = (0);
seq__48063 = G__48715;
chunk__48064 = G__48716;
count__48065 = G__48717;
i__48066 = G__48718;
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
var G__48101_48719 = key;
var G__48101_48720__$1 = (((G__48101_48719 instanceof cljs.core.Keyword))?G__48101_48719.fqn:null);
switch (G__48101_48720__$1) {
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
var ks_48722 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_48722,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_48722,"aria-");
}
})())){
el.setAttribute(ks_48722,value);
} else {
(el[ks_48722] = value);
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
var G__48112 = shadow.dom.dom_node(el);
var G__48113 = cls;
return goog.dom.classlist.contains(G__48112,G__48113);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48117){
var map__48118 = p__48117;
var map__48118__$1 = (((((!((map__48118 == null))))?(((((map__48118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48118):map__48118);
var props = map__48118__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48122 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48126 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48126,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48126;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48131 = arguments.length;
switch (G__48131) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48140){
var vec__48142 = p__48140;
var seq__48143 = cljs.core.seq(vec__48142);
var first__48144 = cljs.core.first(seq__48143);
var seq__48143__$1 = cljs.core.next(seq__48143);
var nn = first__48144;
var first__48144__$1 = cljs.core.first(seq__48143__$1);
var seq__48143__$2 = cljs.core.next(seq__48143__$1);
var np = first__48144__$1;
var nc = seq__48143__$2;
var node = vec__48142;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48146 = nn;
var G__48147 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48146,G__48147) : create_fn.call(null,G__48146,G__48147));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48148 = nn;
var G__48149 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48148,G__48149) : create_fn.call(null,G__48148,G__48149));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48150 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150,(1),null);
var seq__48153_48730 = cljs.core.seq(node_children);
var chunk__48154_48731 = null;
var count__48155_48732 = (0);
var i__48156_48733 = (0);
while(true){
if((i__48156_48733 < count__48155_48732)){
var child_struct_48735 = chunk__48154_48731.cljs$core$IIndexed$_nth$arity$2(null,i__48156_48733);
var children_48736 = shadow.dom.dom_node(child_struct_48735);
if(cljs.core.seq_QMARK_(children_48736)){
var seq__48190_48737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48736));
var chunk__48192_48738 = null;
var count__48193_48739 = (0);
var i__48194_48740 = (0);
while(true){
if((i__48194_48740 < count__48193_48739)){
var child_48741 = chunk__48192_48738.cljs$core$IIndexed$_nth$arity$2(null,i__48194_48740);
if(cljs.core.truth_(child_48741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48741);


var G__48742 = seq__48190_48737;
var G__48743 = chunk__48192_48738;
var G__48744 = count__48193_48739;
var G__48745 = (i__48194_48740 + (1));
seq__48190_48737 = G__48742;
chunk__48192_48738 = G__48743;
count__48193_48739 = G__48744;
i__48194_48740 = G__48745;
continue;
} else {
var G__48746 = seq__48190_48737;
var G__48747 = chunk__48192_48738;
var G__48748 = count__48193_48739;
var G__48749 = (i__48194_48740 + (1));
seq__48190_48737 = G__48746;
chunk__48192_48738 = G__48747;
count__48193_48739 = G__48748;
i__48194_48740 = G__48749;
continue;
}
} else {
var temp__5735__auto___48750 = cljs.core.seq(seq__48190_48737);
if(temp__5735__auto___48750){
var seq__48190_48751__$1 = temp__5735__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__48190_48751__$1)){
var c__4550__auto___48752 = cljs.core.chunk_first(seq__48190_48751__$1);
var G__48753 = cljs.core.chunk_rest(seq__48190_48751__$1);
var G__48754 = c__4550__auto___48752;
var G__48755 = cljs.core.count(c__4550__auto___48752);
var G__48756 = (0);
seq__48190_48737 = G__48753;
chunk__48192_48738 = G__48754;
count__48193_48739 = G__48755;
i__48194_48740 = G__48756;
continue;
} else {
var child_48758 = cljs.core.first(seq__48190_48751__$1);
if(cljs.core.truth_(child_48758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48758);


var G__48759 = cljs.core.next(seq__48190_48751__$1);
var G__48760 = null;
var G__48761 = (0);
var G__48762 = (0);
seq__48190_48737 = G__48759;
chunk__48192_48738 = G__48760;
count__48193_48739 = G__48761;
i__48194_48740 = G__48762;
continue;
} else {
var G__48763 = cljs.core.next(seq__48190_48751__$1);
var G__48764 = null;
var G__48765 = (0);
var G__48766 = (0);
seq__48190_48737 = G__48763;
chunk__48192_48738 = G__48764;
count__48193_48739 = G__48765;
i__48194_48740 = G__48766;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48736);
}


var G__48767 = seq__48153_48730;
var G__48768 = chunk__48154_48731;
var G__48769 = count__48155_48732;
var G__48770 = (i__48156_48733 + (1));
seq__48153_48730 = G__48767;
chunk__48154_48731 = G__48768;
count__48155_48732 = G__48769;
i__48156_48733 = G__48770;
continue;
} else {
var temp__5735__auto___48771 = cljs.core.seq(seq__48153_48730);
if(temp__5735__auto___48771){
var seq__48153_48772__$1 = temp__5735__auto___48771;
if(cljs.core.chunked_seq_QMARK_(seq__48153_48772__$1)){
var c__4550__auto___48773 = cljs.core.chunk_first(seq__48153_48772__$1);
var G__48774 = cljs.core.chunk_rest(seq__48153_48772__$1);
var G__48775 = c__4550__auto___48773;
var G__48776 = cljs.core.count(c__4550__auto___48773);
var G__48777 = (0);
seq__48153_48730 = G__48774;
chunk__48154_48731 = G__48775;
count__48155_48732 = G__48776;
i__48156_48733 = G__48777;
continue;
} else {
var child_struct_48778 = cljs.core.first(seq__48153_48772__$1);
var children_48779 = shadow.dom.dom_node(child_struct_48778);
if(cljs.core.seq_QMARK_(children_48779)){
var seq__48206_48781 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48779));
var chunk__48208_48782 = null;
var count__48209_48783 = (0);
var i__48210_48784 = (0);
while(true){
if((i__48210_48784 < count__48209_48783)){
var child_48787 = chunk__48208_48782.cljs$core$IIndexed$_nth$arity$2(null,i__48210_48784);
if(cljs.core.truth_(child_48787)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48787);


var G__48788 = seq__48206_48781;
var G__48789 = chunk__48208_48782;
var G__48790 = count__48209_48783;
var G__48791 = (i__48210_48784 + (1));
seq__48206_48781 = G__48788;
chunk__48208_48782 = G__48789;
count__48209_48783 = G__48790;
i__48210_48784 = G__48791;
continue;
} else {
var G__48792 = seq__48206_48781;
var G__48793 = chunk__48208_48782;
var G__48794 = count__48209_48783;
var G__48795 = (i__48210_48784 + (1));
seq__48206_48781 = G__48792;
chunk__48208_48782 = G__48793;
count__48209_48783 = G__48794;
i__48210_48784 = G__48795;
continue;
}
} else {
var temp__5735__auto___48796__$1 = cljs.core.seq(seq__48206_48781);
if(temp__5735__auto___48796__$1){
var seq__48206_48797__$1 = temp__5735__auto___48796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48206_48797__$1)){
var c__4550__auto___48798 = cljs.core.chunk_first(seq__48206_48797__$1);
var G__48799 = cljs.core.chunk_rest(seq__48206_48797__$1);
var G__48800 = c__4550__auto___48798;
var G__48801 = cljs.core.count(c__4550__auto___48798);
var G__48802 = (0);
seq__48206_48781 = G__48799;
chunk__48208_48782 = G__48800;
count__48209_48783 = G__48801;
i__48210_48784 = G__48802;
continue;
} else {
var child_48804 = cljs.core.first(seq__48206_48797__$1);
if(cljs.core.truth_(child_48804)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48804);


var G__48805 = cljs.core.next(seq__48206_48797__$1);
var G__48806 = null;
var G__48807 = (0);
var G__48808 = (0);
seq__48206_48781 = G__48805;
chunk__48208_48782 = G__48806;
count__48209_48783 = G__48807;
i__48210_48784 = G__48808;
continue;
} else {
var G__48810 = cljs.core.next(seq__48206_48797__$1);
var G__48811 = null;
var G__48812 = (0);
var G__48813 = (0);
seq__48206_48781 = G__48810;
chunk__48208_48782 = G__48811;
count__48209_48783 = G__48812;
i__48210_48784 = G__48813;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48779);
}


var G__48815 = cljs.core.next(seq__48153_48772__$1);
var G__48816 = null;
var G__48817 = (0);
var G__48818 = (0);
seq__48153_48730 = G__48815;
chunk__48154_48731 = G__48816;
count__48155_48732 = G__48817;
i__48156_48733 = G__48818;
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
var G__48231 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48231);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48236 = cljs.core.seq(node);
var chunk__48237 = null;
var count__48238 = (0);
var i__48239 = (0);
while(true){
if((i__48239 < count__48238)){
var n = chunk__48237.cljs$core$IIndexed$_nth$arity$2(null,i__48239);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48819 = seq__48236;
var G__48820 = chunk__48237;
var G__48821 = count__48238;
var G__48822 = (i__48239 + (1));
seq__48236 = G__48819;
chunk__48237 = G__48820;
count__48238 = G__48821;
i__48239 = G__48822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48236);
if(temp__5735__auto__){
var seq__48236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48236__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48236__$1);
var G__48823 = cljs.core.chunk_rest(seq__48236__$1);
var G__48824 = c__4550__auto__;
var G__48825 = cljs.core.count(c__4550__auto__);
var G__48826 = (0);
seq__48236 = G__48823;
chunk__48237 = G__48824;
count__48238 = G__48825;
i__48239 = G__48826;
continue;
} else {
var n = cljs.core.first(seq__48236__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48827 = cljs.core.next(seq__48236__$1);
var G__48828 = null;
var G__48829 = (0);
var G__48830 = (0);
seq__48236 = G__48827;
chunk__48237 = G__48828;
count__48238 = G__48829;
i__48239 = G__48830;
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
var G__48245 = shadow.dom.dom_node(new$);
var G__48246 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48245,G__48246);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48248 = arguments.length;
switch (G__48248) {
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
var G__48250 = arguments.length;
switch (G__48250) {
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
var G__48257 = arguments.length;
switch (G__48257) {
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
var len__4730__auto___48841 = arguments.length;
var i__4731__auto___48842 = (0);
while(true){
if((i__4731__auto___48842 < len__4730__auto___48841)){
args__4736__auto__.push((arguments[i__4731__auto___48842]));

var G__48843 = (i__4731__auto___48842 + (1));
i__4731__auto___48842 = G__48843;
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
var seq__48260_48844 = cljs.core.seq(nodes);
var chunk__48261_48845 = null;
var count__48262_48846 = (0);
var i__48263_48847 = (0);
while(true){
if((i__48263_48847 < count__48262_48846)){
var node_48848 = chunk__48261_48845.cljs$core$IIndexed$_nth$arity$2(null,i__48263_48847);
fragment.appendChild(shadow.dom._to_dom(node_48848));


var G__48849 = seq__48260_48844;
var G__48850 = chunk__48261_48845;
var G__48851 = count__48262_48846;
var G__48852 = (i__48263_48847 + (1));
seq__48260_48844 = G__48849;
chunk__48261_48845 = G__48850;
count__48262_48846 = G__48851;
i__48263_48847 = G__48852;
continue;
} else {
var temp__5735__auto___48853 = cljs.core.seq(seq__48260_48844);
if(temp__5735__auto___48853){
var seq__48260_48854__$1 = temp__5735__auto___48853;
if(cljs.core.chunked_seq_QMARK_(seq__48260_48854__$1)){
var c__4550__auto___48855 = cljs.core.chunk_first(seq__48260_48854__$1);
var G__48856 = cljs.core.chunk_rest(seq__48260_48854__$1);
var G__48857 = c__4550__auto___48855;
var G__48858 = cljs.core.count(c__4550__auto___48855);
var G__48859 = (0);
seq__48260_48844 = G__48856;
chunk__48261_48845 = G__48857;
count__48262_48846 = G__48858;
i__48263_48847 = G__48859;
continue;
} else {
var node_48860 = cljs.core.first(seq__48260_48854__$1);
fragment.appendChild(shadow.dom._to_dom(node_48860));


var G__48861 = cljs.core.next(seq__48260_48854__$1);
var G__48862 = null;
var G__48863 = (0);
var G__48864 = (0);
seq__48260_48844 = G__48861;
chunk__48261_48845 = G__48862;
count__48262_48846 = G__48863;
i__48263_48847 = G__48864;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48259){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48259));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48265_48869 = cljs.core.seq(scripts);
var chunk__48266_48870 = null;
var count__48267_48871 = (0);
var i__48268_48872 = (0);
while(true){
if((i__48268_48872 < count__48267_48871)){
var vec__48280_48873 = chunk__48266_48870.cljs$core$IIndexed$_nth$arity$2(null,i__48268_48872);
var script_tag_48874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48280_48873,(0),null);
var script_body_48875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48280_48873,(1),null);
eval(script_body_48875);


var G__48876 = seq__48265_48869;
var G__48877 = chunk__48266_48870;
var G__48878 = count__48267_48871;
var G__48879 = (i__48268_48872 + (1));
seq__48265_48869 = G__48876;
chunk__48266_48870 = G__48877;
count__48267_48871 = G__48878;
i__48268_48872 = G__48879;
continue;
} else {
var temp__5735__auto___48880 = cljs.core.seq(seq__48265_48869);
if(temp__5735__auto___48880){
var seq__48265_48881__$1 = temp__5735__auto___48880;
if(cljs.core.chunked_seq_QMARK_(seq__48265_48881__$1)){
var c__4550__auto___48882 = cljs.core.chunk_first(seq__48265_48881__$1);
var G__48883 = cljs.core.chunk_rest(seq__48265_48881__$1);
var G__48884 = c__4550__auto___48882;
var G__48885 = cljs.core.count(c__4550__auto___48882);
var G__48886 = (0);
seq__48265_48869 = G__48883;
chunk__48266_48870 = G__48884;
count__48267_48871 = G__48885;
i__48268_48872 = G__48886;
continue;
} else {
var vec__48287_48887 = cljs.core.first(seq__48265_48881__$1);
var script_tag_48888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48287_48887,(0),null);
var script_body_48889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48287_48887,(1),null);
eval(script_body_48889);


var G__48890 = cljs.core.next(seq__48265_48881__$1);
var G__48891 = null;
var G__48892 = (0);
var G__48893 = (0);
seq__48265_48869 = G__48890;
chunk__48266_48870 = G__48891;
count__48267_48871 = G__48892;
i__48268_48872 = G__48893;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48292){
var vec__48293 = p__48292;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293,(1),null);
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
var G__48317 = shadow.dom.dom_node(el);
var G__48318 = cls;
return goog.dom.getAncestorByClass(G__48317,G__48318);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48324 = arguments.length;
switch (G__48324) {
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
var G__48328 = shadow.dom.dom_node(el);
var G__48329 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48328,G__48329);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48331 = shadow.dom.dom_node(el);
var G__48333 = cljs.core.name(tag);
var G__48334 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48331,G__48333,G__48334);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48336 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48336);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48337 = shadow.dom.dom_node(dom);
var G__48338 = value;
return goog.dom.forms.setValue(G__48337,G__48338);
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
var seq__48345 = cljs.core.seq(style_keys);
var chunk__48346 = null;
var count__48347 = (0);
var i__48348 = (0);
while(true){
if((i__48348 < count__48347)){
var it = chunk__48346.cljs$core$IIndexed$_nth$arity$2(null,i__48348);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48901 = seq__48345;
var G__48902 = chunk__48346;
var G__48903 = count__48347;
var G__48904 = (i__48348 + (1));
seq__48345 = G__48901;
chunk__48346 = G__48902;
count__48347 = G__48903;
i__48348 = G__48904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48345);
if(temp__5735__auto__){
var seq__48345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48345__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48345__$1);
var G__48905 = cljs.core.chunk_rest(seq__48345__$1);
var G__48906 = c__4550__auto__;
var G__48907 = cljs.core.count(c__4550__auto__);
var G__48908 = (0);
seq__48345 = G__48905;
chunk__48346 = G__48906;
count__48347 = G__48907;
i__48348 = G__48908;
continue;
} else {
var it = cljs.core.first(seq__48345__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48909 = cljs.core.next(seq__48345__$1);
var G__48910 = null;
var G__48911 = (0);
var G__48912 = (0);
seq__48345 = G__48909;
chunk__48346 = G__48910;
count__48347 = G__48911;
i__48348 = G__48912;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48350,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48356 = k48350;
var G__48356__$1 = (((G__48356 instanceof cljs.core.Keyword))?G__48356.fqn:null);
switch (G__48356__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48350,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48357){
var vec__48358 = p__48357;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48349){
var self__ = this;
var G__48349__$1 = this;
return (new cljs.core.RecordIter((0),G__48349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48363 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48363(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48351,other48352){
var self__ = this;
var this48351__$1 = this;
return (((!((other48352 == null)))) && ((this48351__$1.constructor === other48352.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48351__$1.x,other48352.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48351__$1.y,other48352.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48351__$1.__extmap,other48352.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48349){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48372 = cljs.core.keyword_identical_QMARK_;
var expr__48373 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48376 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48377 = expr__48373;
return (pred__48372.cljs$core$IFn$_invoke$arity$2 ? pred__48372.cljs$core$IFn$_invoke$arity$2(G__48376,G__48377) : pred__48372.call(null,G__48376,G__48377));
})())){
return (new shadow.dom.Coordinate(G__48349,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48379 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48380 = expr__48373;
return (pred__48372.cljs$core$IFn$_invoke$arity$2 ? pred__48372.cljs$core$IFn$_invoke$arity$2(G__48379,G__48380) : pred__48372.call(null,G__48379,G__48380));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48349,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48349),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48349){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48349,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48354){
var extmap__4424__auto__ = (function (){var G__48388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48354,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48388);
} else {
return G__48388;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48354),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48354),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48392 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48392);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48395 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48395);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48397 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48397);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48399,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48407 = k48399;
var G__48407__$1 = (((G__48407 instanceof cljs.core.Keyword))?G__48407.fqn:null);
switch (G__48407__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48399,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48410){
var vec__48412 = p__48410;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48412,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48412,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48398){
var self__ = this;
var G__48398__$1 = this;
return (new cljs.core.RecordIter((0),G__48398__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48417 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48417(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48400,other48401){
var self__ = this;
var this48400__$1 = this;
return (((!((other48401 == null)))) && ((this48400__$1.constructor === other48401.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48400__$1.w,other48401.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48400__$1.h,other48401.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48400__$1.__extmap,other48401.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48398){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48426 = cljs.core.keyword_identical_QMARK_;
var expr__48427 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48429 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48430 = expr__48427;
return (pred__48426.cljs$core$IFn$_invoke$arity$2 ? pred__48426.cljs$core$IFn$_invoke$arity$2(G__48429,G__48430) : pred__48426.call(null,G__48429,G__48430));
})())){
return (new shadow.dom.Size(G__48398,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48431 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48432 = expr__48427;
return (pred__48426.cljs$core$IFn$_invoke$arity$2 ? pred__48426.cljs$core$IFn$_invoke$arity$2(G__48431,G__48432) : pred__48426.call(null,G__48431,G__48432));
})())){
return (new shadow.dom.Size(self__.w,G__48398,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48398),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48398){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48398,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48403){
var extmap__4424__auto__ = (function (){var G__48440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48403,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48403)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48440);
} else {
return G__48440;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48403),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48403),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48443 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48443);
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
var G__48938 = (i + (1));
var G__48939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48938;
ret = G__48939;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48458){
var vec__48460 = p__48458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48460,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48465 = arguments.length;
switch (G__48465) {
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
var G__48471_48945 = new_node;
var G__48472_48946 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48471_48945,G__48472_48946);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48475_48947 = new_node;
var G__48476_48948 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48475_48947,G__48476_48948);

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
var G__48949 = ps;
var G__48950 = (i + (1));
el__$1 = G__48949;
i = G__48950;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48485 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48485);
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
var G__48488 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48488);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48489 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48489);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48490 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48490,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48490,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48490,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48493_48953 = cljs.core.seq(props);
var chunk__48494_48954 = null;
var count__48495_48955 = (0);
var i__48496_48956 = (0);
while(true){
if((i__48496_48956 < count__48495_48955)){
var vec__48516_48957 = chunk__48494_48954.cljs$core$IIndexed$_nth$arity$2(null,i__48496_48956);
var k_48958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48516_48957,(0),null);
var v_48959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48516_48957,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48958);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48958),v_48959);


var G__48960 = seq__48493_48953;
var G__48961 = chunk__48494_48954;
var G__48962 = count__48495_48955;
var G__48963 = (i__48496_48956 + (1));
seq__48493_48953 = G__48960;
chunk__48494_48954 = G__48961;
count__48495_48955 = G__48962;
i__48496_48956 = G__48963;
continue;
} else {
var temp__5735__auto___48965 = cljs.core.seq(seq__48493_48953);
if(temp__5735__auto___48965){
var seq__48493_48966__$1 = temp__5735__auto___48965;
if(cljs.core.chunked_seq_QMARK_(seq__48493_48966__$1)){
var c__4550__auto___48967 = cljs.core.chunk_first(seq__48493_48966__$1);
var G__48968 = cljs.core.chunk_rest(seq__48493_48966__$1);
var G__48969 = c__4550__auto___48967;
var G__48970 = cljs.core.count(c__4550__auto___48967);
var G__48971 = (0);
seq__48493_48953 = G__48968;
chunk__48494_48954 = G__48969;
count__48495_48955 = G__48970;
i__48496_48956 = G__48971;
continue;
} else {
var vec__48521_48972 = cljs.core.first(seq__48493_48966__$1);
var k_48973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521_48972,(0),null);
var v_48974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521_48972,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48973);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48973),v_48974);


var G__48975 = cljs.core.next(seq__48493_48966__$1);
var G__48976 = null;
var G__48977 = (0);
var G__48978 = (0);
seq__48493_48953 = G__48975;
chunk__48494_48954 = G__48976;
count__48495_48955 = G__48977;
i__48496_48956 = G__48978;
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
var vec__48530 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48530,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48530,(1),null);
var seq__48534_48979 = cljs.core.seq(node_children);
var chunk__48536_48980 = null;
var count__48537_48981 = (0);
var i__48539_48982 = (0);
while(true){
if((i__48539_48982 < count__48537_48981)){
var child_struct_48983 = chunk__48536_48980.cljs$core$IIndexed$_nth$arity$2(null,i__48539_48982);
if((!((child_struct_48983 == null)))){
if(typeof child_struct_48983 === 'string'){
var text_48984 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48984),child_struct_48983].join(''));
} else {
var children_48985 = shadow.dom.svg_node(child_struct_48983);
if(cljs.core.seq_QMARK_(children_48985)){
var seq__48570_48986 = cljs.core.seq(children_48985);
var chunk__48572_48987 = null;
var count__48573_48988 = (0);
var i__48574_48989 = (0);
while(true){
if((i__48574_48989 < count__48573_48988)){
var child_48990 = chunk__48572_48987.cljs$core$IIndexed$_nth$arity$2(null,i__48574_48989);
if(cljs.core.truth_(child_48990)){
node.appendChild(child_48990);


var G__48991 = seq__48570_48986;
var G__48992 = chunk__48572_48987;
var G__48993 = count__48573_48988;
var G__48994 = (i__48574_48989 + (1));
seq__48570_48986 = G__48991;
chunk__48572_48987 = G__48992;
count__48573_48988 = G__48993;
i__48574_48989 = G__48994;
continue;
} else {
var G__48996 = seq__48570_48986;
var G__48997 = chunk__48572_48987;
var G__48998 = count__48573_48988;
var G__48999 = (i__48574_48989 + (1));
seq__48570_48986 = G__48996;
chunk__48572_48987 = G__48997;
count__48573_48988 = G__48998;
i__48574_48989 = G__48999;
continue;
}
} else {
var temp__5735__auto___49000 = cljs.core.seq(seq__48570_48986);
if(temp__5735__auto___49000){
var seq__48570_49002__$1 = temp__5735__auto___49000;
if(cljs.core.chunked_seq_QMARK_(seq__48570_49002__$1)){
var c__4550__auto___49003 = cljs.core.chunk_first(seq__48570_49002__$1);
var G__49004 = cljs.core.chunk_rest(seq__48570_49002__$1);
var G__49005 = c__4550__auto___49003;
var G__49006 = cljs.core.count(c__4550__auto___49003);
var G__49007 = (0);
seq__48570_48986 = G__49004;
chunk__48572_48987 = G__49005;
count__48573_48988 = G__49006;
i__48574_48989 = G__49007;
continue;
} else {
var child_49008 = cljs.core.first(seq__48570_49002__$1);
if(cljs.core.truth_(child_49008)){
node.appendChild(child_49008);


var G__49009 = cljs.core.next(seq__48570_49002__$1);
var G__49010 = null;
var G__49011 = (0);
var G__49012 = (0);
seq__48570_48986 = G__49009;
chunk__48572_48987 = G__49010;
count__48573_48988 = G__49011;
i__48574_48989 = G__49012;
continue;
} else {
var G__49013 = cljs.core.next(seq__48570_49002__$1);
var G__49014 = null;
var G__49015 = (0);
var G__49016 = (0);
seq__48570_48986 = G__49013;
chunk__48572_48987 = G__49014;
count__48573_48988 = G__49015;
i__48574_48989 = G__49016;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48985);
}
}


var G__49017 = seq__48534_48979;
var G__49018 = chunk__48536_48980;
var G__49019 = count__48537_48981;
var G__49020 = (i__48539_48982 + (1));
seq__48534_48979 = G__49017;
chunk__48536_48980 = G__49018;
count__48537_48981 = G__49019;
i__48539_48982 = G__49020;
continue;
} else {
var G__49021 = seq__48534_48979;
var G__49022 = chunk__48536_48980;
var G__49023 = count__48537_48981;
var G__49024 = (i__48539_48982 + (1));
seq__48534_48979 = G__49021;
chunk__48536_48980 = G__49022;
count__48537_48981 = G__49023;
i__48539_48982 = G__49024;
continue;
}
} else {
var temp__5735__auto___49025 = cljs.core.seq(seq__48534_48979);
if(temp__5735__auto___49025){
var seq__48534_49026__$1 = temp__5735__auto___49025;
if(cljs.core.chunked_seq_QMARK_(seq__48534_49026__$1)){
var c__4550__auto___49027 = cljs.core.chunk_first(seq__48534_49026__$1);
var G__49028 = cljs.core.chunk_rest(seq__48534_49026__$1);
var G__49029 = c__4550__auto___49027;
var G__49030 = cljs.core.count(c__4550__auto___49027);
var G__49031 = (0);
seq__48534_48979 = G__49028;
chunk__48536_48980 = G__49029;
count__48537_48981 = G__49030;
i__48539_48982 = G__49031;
continue;
} else {
var child_struct_49032 = cljs.core.first(seq__48534_49026__$1);
if((!((child_struct_49032 == null)))){
if(typeof child_struct_49032 === 'string'){
var text_49034 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49034),child_struct_49032].join(''));
} else {
var children_49035 = shadow.dom.svg_node(child_struct_49032);
if(cljs.core.seq_QMARK_(children_49035)){
var seq__48581_49036 = cljs.core.seq(children_49035);
var chunk__48583_49037 = null;
var count__48584_49038 = (0);
var i__48585_49039 = (0);
while(true){
if((i__48585_49039 < count__48584_49038)){
var child_49040 = chunk__48583_49037.cljs$core$IIndexed$_nth$arity$2(null,i__48585_49039);
if(cljs.core.truth_(child_49040)){
node.appendChild(child_49040);


var G__49041 = seq__48581_49036;
var G__49042 = chunk__48583_49037;
var G__49043 = count__48584_49038;
var G__49044 = (i__48585_49039 + (1));
seq__48581_49036 = G__49041;
chunk__48583_49037 = G__49042;
count__48584_49038 = G__49043;
i__48585_49039 = G__49044;
continue;
} else {
var G__49045 = seq__48581_49036;
var G__49046 = chunk__48583_49037;
var G__49047 = count__48584_49038;
var G__49048 = (i__48585_49039 + (1));
seq__48581_49036 = G__49045;
chunk__48583_49037 = G__49046;
count__48584_49038 = G__49047;
i__48585_49039 = G__49048;
continue;
}
} else {
var temp__5735__auto___49053__$1 = cljs.core.seq(seq__48581_49036);
if(temp__5735__auto___49053__$1){
var seq__48581_49054__$1 = temp__5735__auto___49053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48581_49054__$1)){
var c__4550__auto___49055 = cljs.core.chunk_first(seq__48581_49054__$1);
var G__49056 = cljs.core.chunk_rest(seq__48581_49054__$1);
var G__49057 = c__4550__auto___49055;
var G__49058 = cljs.core.count(c__4550__auto___49055);
var G__49059 = (0);
seq__48581_49036 = G__49056;
chunk__48583_49037 = G__49057;
count__48584_49038 = G__49058;
i__48585_49039 = G__49059;
continue;
} else {
var child_49060 = cljs.core.first(seq__48581_49054__$1);
if(cljs.core.truth_(child_49060)){
node.appendChild(child_49060);


var G__49062 = cljs.core.next(seq__48581_49054__$1);
var G__49063 = null;
var G__49064 = (0);
var G__49065 = (0);
seq__48581_49036 = G__49062;
chunk__48583_49037 = G__49063;
count__48584_49038 = G__49064;
i__48585_49039 = G__49065;
continue;
} else {
var G__49066 = cljs.core.next(seq__48581_49054__$1);
var G__49067 = null;
var G__49068 = (0);
var G__49069 = (0);
seq__48581_49036 = G__49066;
chunk__48583_49037 = G__49067;
count__48584_49038 = G__49068;
i__48585_49039 = G__49069;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49035);
}
}


var G__49070 = cljs.core.next(seq__48534_49026__$1);
var G__49071 = null;
var G__49072 = (0);
var G__49073 = (0);
seq__48534_48979 = G__49070;
chunk__48536_48980 = G__49071;
count__48537_48981 = G__49072;
i__48539_48982 = G__49073;
continue;
} else {
var G__49074 = cljs.core.next(seq__48534_49026__$1);
var G__49075 = null;
var G__49076 = (0);
var G__49077 = (0);
seq__48534_48979 = G__49074;
chunk__48536_48980 = G__49075;
count__48537_48981 = G__49076;
i__48539_48982 = G__49077;
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

var G__48594_49078 = shadow.dom._to_svg;
var G__48595_49079 = "string";
var G__48596_49080 = ((function (G__48594_49078,G__48595_49079){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__48594_49078,G__48595_49079))
;
goog.object.set(G__48594_49078,G__48595_49079,G__48596_49080);

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

var G__48601_49082 = shadow.dom._to_svg;
var G__48602_49083 = "null";
var G__48603_49084 = ((function (G__48601_49082,G__48602_49083){
return (function (_){
return null;
});})(G__48601_49082,G__48602_49083))
;
goog.object.set(G__48601_49082,G__48602_49083,G__48603_49084);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49085 = arguments.length;
var i__4731__auto___49086 = (0);
while(true){
if((i__4731__auto___49086 < len__4730__auto___49085)){
args__4736__auto__.push((arguments[i__4731__auto___49086]));

var G__49091 = (i__4731__auto___49086 + (1));
i__4731__auto___49086 = G__49091;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq48606){
var G__48607 = cljs.core.first(seq48606);
var seq48606__$1 = cljs.core.next(seq48606);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48607,seq48606__$1);
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
var G__48619 = arguments.length;
switch (G__48619) {
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
var G__48623_49093 = shadow.dom.dom_node(el);
var G__48624_49094 = cljs.core.name(event);
var G__48625_49095 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48623_49093,G__48624_49094,G__48625_49095) : shadow.dom.dom_listen.call(null,G__48623_49093,G__48624_49094,G__48625_49095));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__46301__auto___49096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___49096,buf,chan,event_fn){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___49096,buf,chan,event_fn){
return (function (state_48632){
var state_val_48633 = (state_48632[(1)]);
if((state_val_48633 === (1))){
var state_48632__$1 = state_48632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48632__$1,(2),once_or_cleanup);
} else {
if((state_val_48633 === (2))){
var inst_48629 = (state_48632[(2)]);
var inst_48630 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48632__$1 = (function (){var statearr_48635 = state_48632;
(statearr_48635[(7)] = inst_48629);

return statearr_48635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48632__$1,inst_48630);
} else {
return null;
}
}
});})(c__46301__auto___49096,buf,chan,event_fn))
;
return ((function (switch__46200__auto__,c__46301__auto___49096,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__46201__auto__ = null;
var shadow$dom$state_machine__46201__auto____0 = (function (){
var statearr_48638 = [null,null,null,null,null,null,null,null];
(statearr_48638[(0)] = shadow$dom$state_machine__46201__auto__);

(statearr_48638[(1)] = (1));

return statearr_48638;
});
var shadow$dom$state_machine__46201__auto____1 = (function (state_48632){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_48632);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e48639){if((e48639 instanceof Object)){
var ex__46204__auto__ = e48639;
var statearr_48640_49098 = state_48632;
(statearr_48640_49098[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49099 = state_48632;
state_48632 = G__49099;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
shadow$dom$state_machine__46201__auto__ = function(state_48632){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46201__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46201__auto____1.call(this,state_48632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46201__auto____0;
shadow$dom$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46201__auto____1;
return shadow$dom$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___49096,buf,chan,event_fn))
})();
var state__46303__auto__ = (function (){var statearr_48642 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_48642[(6)] = c__46301__auto___49096);

return statearr_48642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___49096,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
