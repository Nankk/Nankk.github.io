goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__32554 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__32554.cljs$core$IFn$_invoke$arity$1 ? fexpr__32554.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__32554.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__32569){
var vec__32570 = p__32569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32570,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__32573 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__32573)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__32573)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__32573)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__32573)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__32573)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32573)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32573)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__32582){
var map__32583 = p__32582;
var map__32583__$1 = (((((!((map__32583 == null))))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32583):map__32583);
var request = map__32583__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__32585 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__32585,default_headers);

cljs_http.core.apply_response_type_BANG_(G__32585,response_type);

G__32585.setTimeoutInterval(timeout);

G__32585.setWithCredentials(send_credentials);

return G__32585;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__32586){
var map__32587 = p__32586;
var map__32587__$1 = (((((!((map__32587 == null))))?(((((map__32587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32587):map__32587);
var request = map__32587__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__32589 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__32589) : cljs_http.core.error_kw.call(null,G__32589));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_32634 = ((function (channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__32590_32635 = xhr;
G__32590_32635.setProgressEventsEnabled(true);

G__32590_32635.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_32634,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__32590_32635.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_32634,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__32193__auto___32636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__32194__auto__ = (function (){var switch__32170__auto__ = ((function (c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_32601){
var state_val_32602 = (state_32601[(1)]);
if((state_val_32602 === (1))){
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32601__$1,(2),cancel);
} else {
if((state_val_32602 === (2))){
var inst_32592 = (state_32601[(2)]);
var inst_32593 = xhr.isComplete();
var inst_32594 = cljs.core.not(inst_32593);
var state_32601__$1 = (function (){var statearr_32603 = state_32601;
(statearr_32603[(7)] = inst_32592);

return statearr_32603;
})();
if(inst_32594){
var statearr_32604_32638 = state_32601__$1;
(statearr_32604_32638[(1)] = (3));

} else {
var statearr_32605_32639 = state_32601__$1;
(statearr_32605_32639[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (3))){
var inst_32596 = xhr.abort();
var state_32601__$1 = state_32601;
var statearr_32606_32640 = state_32601__$1;
(statearr_32606_32640[(2)] = inst_32596);

(statearr_32606_32640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (4))){
var state_32601__$1 = state_32601;
var statearr_32607_32641 = state_32601__$1;
(statearr_32607_32641[(2)] = null);

(statearr_32607_32641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (5))){
var inst_32599 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32601__$1,inst_32599);
} else {
return null;
}
}
}
}
}
});})(c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__32170__auto__,c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__32171__auto__ = null;
var cljs_http$core$xhr_$_state_machine__32171__auto____0 = (function (){
var statearr_32608 = [null,null,null,null,null,null,null,null];
(statearr_32608[(0)] = cljs_http$core$xhr_$_state_machine__32171__auto__);

(statearr_32608[(1)] = (1));

return statearr_32608;
});
var cljs_http$core$xhr_$_state_machine__32171__auto____1 = (function (state_32601){
while(true){
var ret_value__32172__auto__ = (function (){try{while(true){
var result__32173__auto__ = switch__32170__auto__(state_32601);
if(cljs.core.keyword_identical_QMARK_(result__32173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32173__auto__;
}
break;
}
}catch (e32609){if((e32609 instanceof Object)){
var ex__32174__auto__ = e32609;
var statearr_32610_32646 = state_32601;
(statearr_32610_32646[(5)] = ex__32174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32647 = state_32601;
state_32601 = G__32647;
continue;
} else {
return ret_value__32172__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__32171__auto__ = function(state_32601){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__32171__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__32171__auto____1.call(this,state_32601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__32171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__32171__auto____0;
cljs_http$core$xhr_$_state_machine__32171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__32171__auto____1;
return cljs_http$core$xhr_$_state_machine__32171__auto__;
})()
;})(switch__32170__auto__,c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__32195__auto__ = (function (){var statearr_32611 = (f__32194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32194__auto__.cljs$core$IFn$_invoke$arity$0() : f__32194__auto__.call(null));
(statearr_32611[(6)] = c__32193__auto___32636);

return statearr_32611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32195__auto__);
});})(c__32193__auto___32636,channel,request_url,method,headers__$1,xhr,map__32587,map__32587__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__32612){
var map__32613 = p__32612;
var map__32613__$1 = (((((!((map__32613 == null))))?(((((map__32613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32613):map__32613);
var request = map__32613__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32613__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_32649 = jsonp.send(null,((function (channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_32649], null));

if(cljs.core.truth_(cancel)){
var c__32193__auto___32650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__32194__auto__ = (function (){var switch__32170__auto__ = ((function (c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_32619){
var state_val_32620 = (state_32619[(1)]);
if((state_val_32620 === (1))){
var state_32619__$1 = state_32619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32619__$1,(2),cancel);
} else {
if((state_val_32620 === (2))){
var inst_32616 = (state_32619[(2)]);
var inst_32617 = jsonp.cancel(req_32649);
var state_32619__$1 = (function (){var statearr_32621 = state_32619;
(statearr_32621[(7)] = inst_32616);

return statearr_32621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32619__$1,inst_32617);
} else {
return null;
}
}
});})(c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__32170__auto__,c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__32171__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__32171__auto____0 = (function (){
var statearr_32622 = [null,null,null,null,null,null,null,null];
(statearr_32622[(0)] = cljs_http$core$jsonp_$_state_machine__32171__auto__);

(statearr_32622[(1)] = (1));

return statearr_32622;
});
var cljs_http$core$jsonp_$_state_machine__32171__auto____1 = (function (state_32619){
while(true){
var ret_value__32172__auto__ = (function (){try{while(true){
var result__32173__auto__ = switch__32170__auto__(state_32619);
if(cljs.core.keyword_identical_QMARK_(result__32173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32173__auto__;
}
break;
}
}catch (e32623){if((e32623 instanceof Object)){
var ex__32174__auto__ = e32623;
var statearr_32624_32651 = state_32619;
(statearr_32624_32651[(5)] = ex__32174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_32619;
state_32619 = G__32652;
continue;
} else {
return ret_value__32172__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__32171__auto__ = function(state_32619){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__32171__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__32171__auto____1.call(this,state_32619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__32171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__32171__auto____0;
cljs_http$core$jsonp_$_state_machine__32171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__32171__auto____1;
return cljs_http$core$jsonp_$_state_machine__32171__auto__;
})()
;})(switch__32170__auto__,c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__32195__auto__ = (function (){var statearr_32625 = (f__32194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32194__auto__.cljs$core$IFn$_invoke$arity$0() : f__32194__auto__.call(null));
(statearr_32625[(6)] = c__32193__auto___32650);

return statearr_32625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32195__auto__);
});})(c__32193__auto___32650,req_32649,channel,jsonp,map__32613,map__32613__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__32626){
var map__32627 = p__32626;
var map__32627__$1 = (((((!((map__32627 == null))))?(((((map__32627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32627):map__32627);
var request = map__32627__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
