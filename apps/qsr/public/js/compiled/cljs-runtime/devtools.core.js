goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.context');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__34682 = feature;
var G__34682__$1 = (((G__34682 instanceof cljs.core.Keyword))?G__34682.fqn:null);
switch (G__34682__$1) {
case "formatters":
return (devtools.formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.available_QMARK_.call(null));

break;
case "hints":
return (devtools.hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.hints.available_QMARK_.call(null));

break;
case "async":
return (devtools.async.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.async.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.async.available_QMARK_.call(null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34682__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__34684 = arguments.length;
switch (G__34684) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__34685 = feature;
var G__34685__$1 = (((G__34685 instanceof cljs.core.Keyword))?G__34685.fqn:null);
switch (G__34685__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_();

break;
case "hints":
return devtools.hints.installed_QMARK_();

break;
case "async":
return devtools.async.installed_QMARK_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34685__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__34687 = arguments.length;
switch (G__34687) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__34689 = arguments.length;
switch (G__34689) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_())){
return devtools.util.display_advanced_build_warning_if_needed_BANG_();
} else {
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_(features,cljs.core.deref(devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_("config overrides prior install:\n");

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_();

devtools.hints.uninstall_BANG_();

return devtools.async.uninstall_BANG_();
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_(new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs();
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_(pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/set-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34728 = arguments.length;
var i__4731__auto___34729 = (0);
while(true){
if((i__4731__auto___34729 < len__4730__auto___34728)){
args__4736__auto__.push((arguments[i__4731__auto___34729]));

var G__34730 = (i__4731__auto___34729 + (1));
i__4731__auto___34729 = G__34730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq34700){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34700));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34731 = arguments.length;
var i__4731__auto___34732 = (0);
while(true){
if((i__4731__auto___34732 < len__4730__auto___34731)){
args__4736__auto__.push((arguments[i__4731__auto___34732]));

var G__34733 = (i__4731__auto___34732 + (1));
i__4731__auto___34732 = G__34733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq34701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34701));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/single-feature-available? was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34741 = arguments.length;
var i__4731__auto___34742 = (0);
while(true){
if((i__4731__auto___34742 < len__4730__auto___34741)){
args__4736__auto__.push((arguments[i__4731__auto___34742]));

var G__34743 = (i__4731__auto___34742 + (1));
i__4731__auto___34742 = G__34743;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/feature-available? was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq34703){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34703));
});


//# sourceMappingURL=devtools.core.js.map
