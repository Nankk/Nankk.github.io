// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e48823){if((e48823 instanceof Error)){
var e = e48823;
return "Error: Unable to stringify";
} else {
throw e48823;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48826 = arguments.length;
switch (G__48826) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48824_SHARP_){
if(typeof p1__48824_SHARP_ === 'string'){
return p1__48824_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48824_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48829 = arguments.length;
var i__4731__auto___48830 = (0);
while(true){
if((i__4731__auto___48830 < len__4730__auto___48829)){
args__4736__auto__.push((arguments[i__4731__auto___48830]));

var G__48831 = (i__4731__auto___48830 + (1));
i__4731__auto___48830 = G__48831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48828));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48833 = arguments.length;
var i__4731__auto___48834 = (0);
while(true){
if((i__4731__auto___48834 < len__4730__auto___48833)){
args__4736__auto__.push((arguments[i__4731__auto___48834]));

var G__48835 = (i__4731__auto___48834 + (1));
i__4731__auto___48834 = G__48835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48832));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48836){
var map__48837 = p__48836;
var map__48837__$1 = (((((!((map__48837 == null))))?(((((map__48837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48837):map__48837);
var message = cljs.core.get.call(null,map__48837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48837__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__45793__auto___48916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___48916,ch){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___48916,ch){
return (function (state_48888){
var state_val_48889 = (state_48888[(1)]);
if((state_val_48889 === (7))){
var inst_48884 = (state_48888[(2)]);
var state_48888__$1 = state_48888;
var statearr_48890_48917 = state_48888__$1;
(statearr_48890_48917[(2)] = inst_48884);

(statearr_48890_48917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (1))){
var state_48888__$1 = state_48888;
var statearr_48891_48918 = state_48888__$1;
(statearr_48891_48918[(2)] = null);

(statearr_48891_48918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (4))){
var inst_48841 = (state_48888[(7)]);
var inst_48841__$1 = (state_48888[(2)]);
var state_48888__$1 = (function (){var statearr_48892 = state_48888;
(statearr_48892[(7)] = inst_48841__$1);

return statearr_48892;
})();
if(cljs.core.truth_(inst_48841__$1)){
var statearr_48893_48919 = state_48888__$1;
(statearr_48893_48919[(1)] = (5));

} else {
var statearr_48894_48920 = state_48888__$1;
(statearr_48894_48920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (15))){
var inst_48848 = (state_48888[(8)]);
var inst_48863 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48848);
var inst_48864 = cljs.core.first.call(null,inst_48863);
var inst_48865 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48864);
var inst_48866 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48865)].join('');
var inst_48867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48866);
var state_48888__$1 = state_48888;
var statearr_48895_48921 = state_48888__$1;
(statearr_48895_48921[(2)] = inst_48867);

(statearr_48895_48921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (13))){
var inst_48872 = (state_48888[(2)]);
var state_48888__$1 = state_48888;
var statearr_48896_48922 = state_48888__$1;
(statearr_48896_48922[(2)] = inst_48872);

(statearr_48896_48922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (6))){
var state_48888__$1 = state_48888;
var statearr_48897_48923 = state_48888__$1;
(statearr_48897_48923[(2)] = null);

(statearr_48897_48923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (17))){
var inst_48870 = (state_48888[(2)]);
var state_48888__$1 = state_48888;
var statearr_48898_48924 = state_48888__$1;
(statearr_48898_48924[(2)] = inst_48870);

(statearr_48898_48924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (3))){
var inst_48886 = (state_48888[(2)]);
var state_48888__$1 = state_48888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48888__$1,inst_48886);
} else {
if((state_val_48889 === (12))){
var inst_48847 = (state_48888[(9)]);
var inst_48861 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48847,opts);
var state_48888__$1 = state_48888;
if(inst_48861){
var statearr_48899_48925 = state_48888__$1;
(statearr_48899_48925[(1)] = (15));

} else {
var statearr_48900_48926 = state_48888__$1;
(statearr_48900_48926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (2))){
var state_48888__$1 = state_48888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48888__$1,(4),ch);
} else {
if((state_val_48889 === (11))){
var inst_48848 = (state_48888[(8)]);
var inst_48853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48854 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48848);
var inst_48855 = cljs.core.async.timeout.call(null,(1000));
var inst_48856 = [inst_48854,inst_48855];
var inst_48857 = (new cljs.core.PersistentVector(null,2,(5),inst_48853,inst_48856,null));
var state_48888__$1 = state_48888;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48888__$1,(14),inst_48857);
} else {
if((state_val_48889 === (9))){
var inst_48848 = (state_48888[(8)]);
var inst_48874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48875 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48848);
var inst_48876 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48875);
var inst_48877 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48876)].join('');
var inst_48878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48877);
var state_48888__$1 = (function (){var statearr_48901 = state_48888;
(statearr_48901[(10)] = inst_48874);

return statearr_48901;
})();
var statearr_48902_48927 = state_48888__$1;
(statearr_48902_48927[(2)] = inst_48878);

(statearr_48902_48927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (5))){
var inst_48841 = (state_48888[(7)]);
var inst_48843 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48844 = (new cljs.core.PersistentArrayMap(null,2,inst_48843,null));
var inst_48845 = (new cljs.core.PersistentHashSet(null,inst_48844,null));
var inst_48846 = figwheel.client.focus_msgs.call(null,inst_48845,inst_48841);
var inst_48847 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48846);
var inst_48848 = cljs.core.first.call(null,inst_48846);
var inst_48849 = figwheel.client.autoload_QMARK_.call(null);
var state_48888__$1 = (function (){var statearr_48903 = state_48888;
(statearr_48903[(9)] = inst_48847);

(statearr_48903[(8)] = inst_48848);

return statearr_48903;
})();
if(cljs.core.truth_(inst_48849)){
var statearr_48904_48928 = state_48888__$1;
(statearr_48904_48928[(1)] = (8));

} else {
var statearr_48905_48929 = state_48888__$1;
(statearr_48905_48929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (14))){
var inst_48859 = (state_48888[(2)]);
var state_48888__$1 = state_48888;
var statearr_48906_48930 = state_48888__$1;
(statearr_48906_48930[(2)] = inst_48859);

(statearr_48906_48930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (16))){
var state_48888__$1 = state_48888;
var statearr_48907_48931 = state_48888__$1;
(statearr_48907_48931[(2)] = null);

(statearr_48907_48931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (10))){
var inst_48880 = (state_48888[(2)]);
var state_48888__$1 = (function (){var statearr_48908 = state_48888;
(statearr_48908[(11)] = inst_48880);

return statearr_48908;
})();
var statearr_48909_48932 = state_48888__$1;
(statearr_48909_48932[(2)] = null);

(statearr_48909_48932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48889 === (8))){
var inst_48847 = (state_48888[(9)]);
var inst_48851 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48847,opts);
var state_48888__$1 = state_48888;
if(cljs.core.truth_(inst_48851)){
var statearr_48910_48933 = state_48888__$1;
(statearr_48910_48933[(1)] = (11));

} else {
var statearr_48911_48934 = state_48888__$1;
(statearr_48911_48934[(1)] = (12));

}

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
}
}
}
}
}
}
}
});})(c__45793__auto___48916,ch))
;
return ((function (switch__45698__auto__,c__45793__auto___48916,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____0 = (function (){
var statearr_48912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48912[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__);

(statearr_48912[(1)] = (1));

return statearr_48912;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____1 = (function (state_48888){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48913){if((e48913 instanceof Object)){
var ex__45702__auto__ = e48913;
var statearr_48914_48935 = state_48888;
(statearr_48914_48935[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48936 = state_48888;
state_48888 = G__48936;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__ = function(state_48888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____1.call(this,state_48888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45699__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___48916,ch))
})();
var state__45795__auto__ = (function (){var statearr_48915 = f__45794__auto__.call(null);
(statearr_48915[(6)] = c__45793__auto___48916);

return statearr_48915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___48916,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48937_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48937_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48943 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48943){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48939 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48940 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48941 = true;
var _STAR_print_fn_STAR__temp_val__48942 = ((function (_STAR_print_newline_STAR__orig_val__48939,_STAR_print_fn_STAR__orig_val__48940,_STAR_print_newline_STAR__temp_val__48941,sb,base_path_48943){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__48939,_STAR_print_fn_STAR__orig_val__48940,_STAR_print_newline_STAR__temp_val__48941,sb,base_path_48943))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48941;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48942;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48940;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48939;
}}catch (e48938){if((e48938 instanceof Error)){
var e = e48938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48943], null));
} else {
var e = e48938;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48943))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48944){
var map__48945 = p__48944;
var map__48945__$1 = (((((!((map__48945 == null))))?(((((map__48945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48945):map__48945);
var opts = map__48945__$1;
var build_id = cljs.core.get.call(null,map__48945__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48945,map__48945__$1,opts,build_id){
return (function (p__48947){
var vec__48948 = p__48947;
var seq__48949 = cljs.core.seq.call(null,vec__48948);
var first__48950 = cljs.core.first.call(null,seq__48949);
var seq__48949__$1 = cljs.core.next.call(null,seq__48949);
var map__48951 = first__48950;
var map__48951__$1 = (((((!((map__48951 == null))))?(((((map__48951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48951):map__48951);
var msg = map__48951__$1;
var msg_name = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48949__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48948,seq__48949,first__48950,seq__48949__$1,map__48951,map__48951__$1,msg,msg_name,_,map__48945,map__48945__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48948,seq__48949,first__48950,seq__48949__$1,map__48951,map__48951__$1,msg,msg_name,_,map__48945,map__48945__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48945,map__48945__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48953){
var vec__48954 = p__48953;
var seq__48955 = cljs.core.seq.call(null,vec__48954);
var first__48956 = cljs.core.first.call(null,seq__48955);
var seq__48955__$1 = cljs.core.next.call(null,seq__48955);
var map__48957 = first__48956;
var map__48957__$1 = (((((!((map__48957 == null))))?(((((map__48957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48957):map__48957);
var msg = map__48957__$1;
var msg_name = cljs.core.get.call(null,map__48957__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48955__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48959){
var map__48960 = p__48959;
var map__48960__$1 = (((((!((map__48960 == null))))?(((((map__48960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48960):map__48960);
var on_compile_warning = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48960,map__48960__$1,on_compile_warning,on_compile_fail){
return (function (p__48962){
var vec__48963 = p__48962;
var seq__48964 = cljs.core.seq.call(null,vec__48963);
var first__48965 = cljs.core.first.call(null,seq__48964);
var seq__48964__$1 = cljs.core.next.call(null,seq__48964);
var map__48966 = first__48965;
var map__48966__$1 = (((((!((map__48966 == null))))?(((((map__48966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48966):map__48966);
var msg = map__48966__$1;
var msg_name = cljs.core.get.call(null,map__48966__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48964__$1;
var pred__48968 = cljs.core._EQ_;
var expr__48969 = msg_name;
if(cljs.core.truth_(pred__48968.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48969))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48968.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48969))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48960,map__48960__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__,msg_hist,msg_names,msg){
return (function (state_49058){
var state_val_49059 = (state_49058[(1)]);
if((state_val_49059 === (7))){
var inst_48978 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
if(cljs.core.truth_(inst_48978)){
var statearr_49060_49107 = state_49058__$1;
(statearr_49060_49107[(1)] = (8));

} else {
var statearr_49061_49108 = state_49058__$1;
(statearr_49061_49108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (20))){
var inst_49052 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49062_49109 = state_49058__$1;
(statearr_49062_49109[(2)] = inst_49052);

(statearr_49062_49109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (27))){
var inst_49048 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49063_49110 = state_49058__$1;
(statearr_49063_49110[(2)] = inst_49048);

(statearr_49063_49110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (1))){
var inst_48971 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49058__$1 = state_49058;
if(cljs.core.truth_(inst_48971)){
var statearr_49064_49111 = state_49058__$1;
(statearr_49064_49111[(1)] = (2));

} else {
var statearr_49065_49112 = state_49058__$1;
(statearr_49065_49112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (24))){
var inst_49050 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49066_49113 = state_49058__$1;
(statearr_49066_49113[(2)] = inst_49050);

(statearr_49066_49113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (4))){
var inst_49056 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49058__$1,inst_49056);
} else {
if((state_val_49059 === (15))){
var inst_49054 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49067_49114 = state_49058__$1;
(statearr_49067_49114[(2)] = inst_49054);

(statearr_49067_49114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (21))){
var inst_49007 = (state_49058[(2)]);
var inst_49008 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49009 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49008);
var state_49058__$1 = (function (){var statearr_49068 = state_49058;
(statearr_49068[(7)] = inst_49007);

return statearr_49068;
})();
var statearr_49069_49115 = state_49058__$1;
(statearr_49069_49115[(2)] = inst_49009);

(statearr_49069_49115[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (31))){
var inst_49037 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_49037){
var statearr_49070_49116 = state_49058__$1;
(statearr_49070_49116[(1)] = (34));

} else {
var statearr_49071_49117 = state_49058__$1;
(statearr_49071_49117[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (32))){
var inst_49046 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49072_49118 = state_49058__$1;
(statearr_49072_49118[(2)] = inst_49046);

(statearr_49072_49118[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (33))){
var inst_49033 = (state_49058[(2)]);
var inst_49034 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49035 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49034);
var state_49058__$1 = (function (){var statearr_49073 = state_49058;
(statearr_49073[(8)] = inst_49033);

return statearr_49073;
})();
var statearr_49074_49119 = state_49058__$1;
(statearr_49074_49119[(2)] = inst_49035);

(statearr_49074_49119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (13))){
var inst_48992 = figwheel.client.heads_up.clear.call(null);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(16),inst_48992);
} else {
if((state_val_49059 === (22))){
var inst_49013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49014 = figwheel.client.heads_up.append_warning_message.call(null,inst_49013);
var state_49058__$1 = state_49058;
var statearr_49075_49120 = state_49058__$1;
(statearr_49075_49120[(2)] = inst_49014);

(statearr_49075_49120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (36))){
var inst_49044 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49076_49121 = state_49058__$1;
(statearr_49076_49121[(2)] = inst_49044);

(statearr_49076_49121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (29))){
var inst_49024 = (state_49058[(2)]);
var inst_49025 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49026 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49025);
var state_49058__$1 = (function (){var statearr_49077 = state_49058;
(statearr_49077[(9)] = inst_49024);

return statearr_49077;
})();
var statearr_49078_49122 = state_49058__$1;
(statearr_49078_49122[(2)] = inst_49026);

(statearr_49078_49122[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (6))){
var inst_48973 = (state_49058[(10)]);
var state_49058__$1 = state_49058;
var statearr_49079_49123 = state_49058__$1;
(statearr_49079_49123[(2)] = inst_48973);

(statearr_49079_49123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (28))){
var inst_49020 = (state_49058[(2)]);
var inst_49021 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49022 = figwheel.client.heads_up.display_warning.call(null,inst_49021);
var state_49058__$1 = (function (){var statearr_49080 = state_49058;
(statearr_49080[(11)] = inst_49020);

return statearr_49080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(29),inst_49022);
} else {
if((state_val_49059 === (25))){
var inst_49018 = figwheel.client.heads_up.clear.call(null);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(28),inst_49018);
} else {
if((state_val_49059 === (34))){
var inst_49039 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(37),inst_49039);
} else {
if((state_val_49059 === (17))){
var inst_48998 = (state_49058[(2)]);
var inst_48999 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49000 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48999);
var state_49058__$1 = (function (){var statearr_49081 = state_49058;
(statearr_49081[(12)] = inst_48998);

return statearr_49081;
})();
var statearr_49082_49124 = state_49058__$1;
(statearr_49082_49124[(2)] = inst_49000);

(statearr_49082_49124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (3))){
var inst_48990 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_48990){
var statearr_49083_49125 = state_49058__$1;
(statearr_49083_49125[(1)] = (13));

} else {
var statearr_49084_49126 = state_49058__$1;
(statearr_49084_49126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (12))){
var inst_48986 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49085_49127 = state_49058__$1;
(statearr_49085_49127[(2)] = inst_48986);

(statearr_49085_49127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (2))){
var inst_48973 = (state_49058[(10)]);
var inst_48973__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49058__$1 = (function (){var statearr_49086 = state_49058;
(statearr_49086[(10)] = inst_48973__$1);

return statearr_49086;
})();
if(cljs.core.truth_(inst_48973__$1)){
var statearr_49087_49128 = state_49058__$1;
(statearr_49087_49128[(1)] = (5));

} else {
var statearr_49088_49129 = state_49058__$1;
(statearr_49088_49129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (23))){
var inst_49016 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_49016){
var statearr_49089_49130 = state_49058__$1;
(statearr_49089_49130[(1)] = (25));

} else {
var statearr_49090_49131 = state_49058__$1;
(statearr_49090_49131[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (35))){
var state_49058__$1 = state_49058;
var statearr_49091_49132 = state_49058__$1;
(statearr_49091_49132[(2)] = null);

(statearr_49091_49132[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (19))){
var inst_49011 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_49011){
var statearr_49092_49133 = state_49058__$1;
(statearr_49092_49133[(1)] = (22));

} else {
var statearr_49093_49134 = state_49058__$1;
(statearr_49093_49134[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (11))){
var inst_48982 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49094_49135 = state_49058__$1;
(statearr_49094_49135[(2)] = inst_48982);

(statearr_49094_49135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (9))){
var inst_48984 = figwheel.client.heads_up.clear.call(null);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(12),inst_48984);
} else {
if((state_val_49059 === (5))){
var inst_48975 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49058__$1 = state_49058;
var statearr_49095_49136 = state_49058__$1;
(statearr_49095_49136[(2)] = inst_48975);

(statearr_49095_49136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (14))){
var inst_49002 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_49002){
var statearr_49096_49137 = state_49058__$1;
(statearr_49096_49137[(1)] = (18));

} else {
var statearr_49097_49138 = state_49058__$1;
(statearr_49097_49138[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (26))){
var inst_49028 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49058__$1 = state_49058;
if(inst_49028){
var statearr_49098_49139 = state_49058__$1;
(statearr_49098_49139[(1)] = (30));

} else {
var statearr_49099_49140 = state_49058__$1;
(statearr_49099_49140[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (16))){
var inst_48994 = (state_49058[(2)]);
var inst_48995 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48996 = figwheel.client.heads_up.display_exception.call(null,inst_48995);
var state_49058__$1 = (function (){var statearr_49100 = state_49058;
(statearr_49100[(13)] = inst_48994);

return statearr_49100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(17),inst_48996);
} else {
if((state_val_49059 === (30))){
var inst_49030 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49031 = figwheel.client.heads_up.display_warning.call(null,inst_49030);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(33),inst_49031);
} else {
if((state_val_49059 === (10))){
var inst_48988 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49101_49141 = state_49058__$1;
(statearr_49101_49141[(2)] = inst_48988);

(statearr_49101_49141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (18))){
var inst_49004 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49005 = figwheel.client.heads_up.display_exception.call(null,inst_49004);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(21),inst_49005);
} else {
if((state_val_49059 === (37))){
var inst_49041 = (state_49058[(2)]);
var state_49058__$1 = state_49058;
var statearr_49102_49142 = state_49058__$1;
(statearr_49102_49142[(2)] = inst_49041);

(statearr_49102_49142[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49059 === (8))){
var inst_48980 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49058__$1 = state_49058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(11),inst_48980);
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
}
}
}
}
}
}
}
});})(c__45793__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45698__auto__,c__45793__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____0 = (function (){
var statearr_49103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49103[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__);

(statearr_49103[(1)] = (1));

return statearr_49103;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____1 = (function (state_49058){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_49058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e49104){if((e49104 instanceof Object)){
var ex__45702__auto__ = e49104;
var statearr_49105_49143 = state_49058;
(statearr_49105_49143[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49144 = state_49058;
state_49058 = G__49144;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__ = function(state_49058){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____1.call(this,state_49058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__,msg_hist,msg_names,msg))
})();
var state__45795__auto__ = (function (){var statearr_49106 = f__45794__auto__.call(null);
(statearr_49106[(6)] = c__45793__auto__);

return statearr_49106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__,msg_hist,msg_names,msg))
);

return c__45793__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45793__auto___49173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___49173,ch){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___49173,ch){
return (function (state_49159){
var state_val_49160 = (state_49159[(1)]);
if((state_val_49160 === (1))){
var state_49159__$1 = state_49159;
var statearr_49161_49174 = state_49159__$1;
(statearr_49161_49174[(2)] = null);

(statearr_49161_49174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49160 === (2))){
var state_49159__$1 = state_49159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49159__$1,(4),ch);
} else {
if((state_val_49160 === (3))){
var inst_49157 = (state_49159[(2)]);
var state_49159__$1 = state_49159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49159__$1,inst_49157);
} else {
if((state_val_49160 === (4))){
var inst_49147 = (state_49159[(7)]);
var inst_49147__$1 = (state_49159[(2)]);
var state_49159__$1 = (function (){var statearr_49162 = state_49159;
(statearr_49162[(7)] = inst_49147__$1);

return statearr_49162;
})();
if(cljs.core.truth_(inst_49147__$1)){
var statearr_49163_49175 = state_49159__$1;
(statearr_49163_49175[(1)] = (5));

} else {
var statearr_49164_49176 = state_49159__$1;
(statearr_49164_49176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49160 === (5))){
var inst_49147 = (state_49159[(7)]);
var inst_49149 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49147);
var state_49159__$1 = state_49159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49159__$1,(8),inst_49149);
} else {
if((state_val_49160 === (6))){
var state_49159__$1 = state_49159;
var statearr_49165_49177 = state_49159__$1;
(statearr_49165_49177[(2)] = null);

(statearr_49165_49177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49160 === (7))){
var inst_49155 = (state_49159[(2)]);
var state_49159__$1 = state_49159;
var statearr_49166_49178 = state_49159__$1;
(statearr_49166_49178[(2)] = inst_49155);

(statearr_49166_49178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49160 === (8))){
var inst_49151 = (state_49159[(2)]);
var state_49159__$1 = (function (){var statearr_49167 = state_49159;
(statearr_49167[(8)] = inst_49151);

return statearr_49167;
})();
var statearr_49168_49179 = state_49159__$1;
(statearr_49168_49179[(2)] = null);

(statearr_49168_49179[(1)] = (2));


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
});})(c__45793__auto___49173,ch))
;
return ((function (switch__45698__auto__,c__45793__auto___49173,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45699__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45699__auto____0 = (function (){
var statearr_49169 = [null,null,null,null,null,null,null,null,null];
(statearr_49169[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45699__auto__);

(statearr_49169[(1)] = (1));

return statearr_49169;
});
var figwheel$client$heads_up_plugin_$_state_machine__45699__auto____1 = (function (state_49159){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_49159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e49170){if((e49170 instanceof Object)){
var ex__45702__auto__ = e49170;
var statearr_49171_49180 = state_49159;
(statearr_49171_49180[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49181 = state_49159;
state_49159 = G__49181;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45699__auto__ = function(state_49159){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45699__auto____1.call(this,state_49159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45699__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45699__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___49173,ch))
})();
var state__45795__auto__ = (function (){var statearr_49172 = f__45794__auto__.call(null);
(statearr_49172[(6)] = c__45793__auto___49173);

return statearr_49172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___49173,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_49187){
var state_val_49188 = (state_49187[(1)]);
if((state_val_49188 === (1))){
var inst_49182 = cljs.core.async.timeout.call(null,(3000));
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49187__$1,(2),inst_49182);
} else {
if((state_val_49188 === (2))){
var inst_49184 = (state_49187[(2)]);
var inst_49185 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49187__$1 = (function (){var statearr_49189 = state_49187;
(statearr_49189[(7)] = inst_49184);

return statearr_49189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49187__$1,inst_49185);
} else {
return null;
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____0 = (function (){
var statearr_49190 = [null,null,null,null,null,null,null,null];
(statearr_49190[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__);

(statearr_49190[(1)] = (1));

return statearr_49190;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____1 = (function (state_49187){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_49187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e49191){if((e49191 instanceof Object)){
var ex__45702__auto__ = e49191;
var statearr_49192_49194 = state_49187;
(statearr_49192_49194[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49195 = state_49187;
state_49187 = G__49195;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__ = function(state_49187){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____1.call(this,state_49187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45699__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_49193 = f__45794__auto__.call(null);
(statearr_49193[(6)] = c__45793__auto__);

return statearr_49193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__,figwheel_version,temp__5735__auto__){
return (function (state_49202){
var state_val_49203 = (state_49202[(1)]);
if((state_val_49203 === (1))){
var inst_49196 = cljs.core.async.timeout.call(null,(2000));
var state_49202__$1 = state_49202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49202__$1,(2),inst_49196);
} else {
if((state_val_49203 === (2))){
var inst_49198 = (state_49202[(2)]);
var inst_49199 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49200 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49199);
var state_49202__$1 = (function (){var statearr_49204 = state_49202;
(statearr_49204[(7)] = inst_49198);

return statearr_49204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49202__$1,inst_49200);
} else {
return null;
}
}
});})(c__45793__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____0 = (function (){
var statearr_49205 = [null,null,null,null,null,null,null,null];
(statearr_49205[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__);

(statearr_49205[(1)] = (1));

return statearr_49205;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____1 = (function (state_49202){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_49202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e49206){if((e49206 instanceof Object)){
var ex__45702__auto__ = e49206;
var statearr_49207_49209 = state_49202;
(statearr_49207_49209[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49210 = state_49202;
state_49202 = G__49210;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__ = function(state_49202){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____1.call(this,state_49202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__,figwheel_version,temp__5735__auto__))
})();
var state__45795__auto__ = (function (){var statearr_49208 = f__45794__auto__.call(null);
(statearr_49208[(6)] = c__45793__auto__);

return statearr_49208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__,figwheel_version,temp__5735__auto__))
);

return c__45793__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49211){
var map__49212 = p__49211;
var map__49212__$1 = (((((!((map__49212 == null))))?(((((map__49212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49212):map__49212);
var file = cljs.core.get.call(null,map__49212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49212__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49212__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49214 = "";
var G__49214__$1 = (cljs.core.truth_(file)?[G__49214,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49214);
var G__49214__$2 = (cljs.core.truth_(line)?[G__49214__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49214__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__49214__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49214__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49215){
var map__49216 = p__49215;
var map__49216__$1 = (((((!((map__49216 == null))))?(((((map__49216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49216):map__49216);
var ed = map__49216__$1;
var exception_data = cljs.core.get.call(null,map__49216__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49216__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_49219 = (function (){var G__49218 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49218)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__49218;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_49219);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49220){
var map__49221 = p__49220;
var map__49221__$1 = (((((!((map__49221 == null))))?(((((map__49221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49221):map__49221);
var w = map__49221__$1;
var message = cljs.core.get.call(null,map__49221__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49223 = cljs.core.seq.call(null,plugins);
var chunk__49224 = null;
var count__49225 = (0);
var i__49226 = (0);
while(true){
if((i__49226 < count__49225)){
var vec__49233 = cljs.core._nth.call(null,chunk__49224,i__49226);
var k = cljs.core.nth.call(null,vec__49233,(0),null);
var plugin = cljs.core.nth.call(null,vec__49233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49223,chunk__49224,count__49225,i__49226,pl_49239,vec__49233,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49239.call(null,msg_hist);
});})(seq__49223,chunk__49224,count__49225,i__49226,pl_49239,vec__49233,k,plugin))
);
} else {
}


var G__49240 = seq__49223;
var G__49241 = chunk__49224;
var G__49242 = count__49225;
var G__49243 = (i__49226 + (1));
seq__49223 = G__49240;
chunk__49224 = G__49241;
count__49225 = G__49242;
i__49226 = G__49243;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__49223);
if(temp__5735__auto__){
var seq__49223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49223__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__49223__$1);
var G__49244 = cljs.core.chunk_rest.call(null,seq__49223__$1);
var G__49245 = c__4550__auto__;
var G__49246 = cljs.core.count.call(null,c__4550__auto__);
var G__49247 = (0);
seq__49223 = G__49244;
chunk__49224 = G__49245;
count__49225 = G__49246;
i__49226 = G__49247;
continue;
} else {
var vec__49236 = cljs.core.first.call(null,seq__49223__$1);
var k = cljs.core.nth.call(null,vec__49236,(0),null);
var plugin = cljs.core.nth.call(null,vec__49236,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49248 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49223,chunk__49224,count__49225,i__49226,pl_49248,vec__49236,k,plugin,seq__49223__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49248.call(null,msg_hist);
});})(seq__49223,chunk__49224,count__49225,i__49226,pl_49248,vec__49236,k,plugin,seq__49223__$1,temp__5735__auto__))
);
} else {
}


var G__49249 = cljs.core.next.call(null,seq__49223__$1);
var G__49250 = null;
var G__49251 = (0);
var G__49252 = (0);
seq__49223 = G__49249;
chunk__49224 = G__49250;
count__49225 = G__49251;
i__49226 = G__49252;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__49254 = arguments.length;
switch (G__49254) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49255_49260 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49256_49261 = null;
var count__49257_49262 = (0);
var i__49258_49263 = (0);
while(true){
if((i__49258_49263 < count__49257_49262)){
var msg_49264 = cljs.core._nth.call(null,chunk__49256_49261,i__49258_49263);
figwheel.client.socket.handle_incoming_message.call(null,msg_49264);


var G__49265 = seq__49255_49260;
var G__49266 = chunk__49256_49261;
var G__49267 = count__49257_49262;
var G__49268 = (i__49258_49263 + (1));
seq__49255_49260 = G__49265;
chunk__49256_49261 = G__49266;
count__49257_49262 = G__49267;
i__49258_49263 = G__49268;
continue;
} else {
var temp__5735__auto___49269 = cljs.core.seq.call(null,seq__49255_49260);
if(temp__5735__auto___49269){
var seq__49255_49270__$1 = temp__5735__auto___49269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49255_49270__$1)){
var c__4550__auto___49271 = cljs.core.chunk_first.call(null,seq__49255_49270__$1);
var G__49272 = cljs.core.chunk_rest.call(null,seq__49255_49270__$1);
var G__49273 = c__4550__auto___49271;
var G__49274 = cljs.core.count.call(null,c__4550__auto___49271);
var G__49275 = (0);
seq__49255_49260 = G__49272;
chunk__49256_49261 = G__49273;
count__49257_49262 = G__49274;
i__49258_49263 = G__49275;
continue;
} else {
var msg_49276 = cljs.core.first.call(null,seq__49255_49270__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49276);


var G__49277 = cljs.core.next.call(null,seq__49255_49270__$1);
var G__49278 = null;
var G__49279 = (0);
var G__49280 = (0);
seq__49255_49260 = G__49277;
chunk__49256_49261 = G__49278;
count__49257_49262 = G__49279;
i__49258_49263 = G__49280;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49285 = arguments.length;
var i__4731__auto___49286 = (0);
while(true){
if((i__4731__auto___49286 < len__4730__auto___49285)){
args__4736__auto__.push((arguments[i__4731__auto___49286]));

var G__49287 = (i__4731__auto___49286 + (1));
i__4731__auto___49286 = G__49287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49282){
var map__49283 = p__49282;
var map__49283__$1 = (((((!((map__49283 == null))))?(((((map__49283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49283):map__49283);
var opts = map__49283__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49281){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49281));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49288){if((e49288 instanceof Error)){
var e = e49288;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49288;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49289){
var map__49290 = p__49289;
var map__49290__$1 = (((((!((map__49290 == null))))?(((((map__49290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49290):map__49290);
var msg_name = cljs.core.get.call(null,map__49290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563379481140
