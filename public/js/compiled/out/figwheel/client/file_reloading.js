// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47800_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47800_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47801 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47802 = null;
var count__47803 = (0);
var i__47804 = (0);
while(true){
if((i__47804 < count__47803)){
var n = cljs.core._nth.call(null,chunk__47802,i__47804);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47805 = seq__47801;
var G__47806 = chunk__47802;
var G__47807 = count__47803;
var G__47808 = (i__47804 + (1));
seq__47801 = G__47805;
chunk__47802 = G__47806;
count__47803 = G__47807;
i__47804 = G__47808;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47801);
if(temp__5735__auto__){
var seq__47801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47801__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47801__$1);
var G__47809 = cljs.core.chunk_rest.call(null,seq__47801__$1);
var G__47810 = c__4550__auto__;
var G__47811 = cljs.core.count.call(null,c__4550__auto__);
var G__47812 = (0);
seq__47801 = G__47809;
chunk__47802 = G__47810;
count__47803 = G__47811;
i__47804 = G__47812;
continue;
} else {
var n = cljs.core.first.call(null,seq__47801__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47813 = cljs.core.next.call(null,seq__47801__$1);
var G__47814 = null;
var G__47815 = (0);
var G__47816 = (0);
seq__47801 = G__47813;
chunk__47802 = G__47814;
count__47803 = G__47815;
i__47804 = G__47816;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47817){
var vec__47818 = p__47817;
var _ = cljs.core.nth.call(null,vec__47818,(0),null);
var v = cljs.core.nth.call(null,vec__47818,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__47821){
var vec__47822 = p__47821;
var k = cljs.core.nth.call(null,vec__47822,(0),null);
var v = cljs.core.nth.call(null,vec__47822,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47834_47842 = cljs.core.seq.call(null,deps);
var chunk__47835_47843 = null;
var count__47836_47844 = (0);
var i__47837_47845 = (0);
while(true){
if((i__47837_47845 < count__47836_47844)){
var dep_47846 = cljs.core._nth.call(null,chunk__47835_47843,i__47837_47845);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_47846;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47846));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47846,(depth + (1)),state);
} else {
}


var G__47847 = seq__47834_47842;
var G__47848 = chunk__47835_47843;
var G__47849 = count__47836_47844;
var G__47850 = (i__47837_47845 + (1));
seq__47834_47842 = G__47847;
chunk__47835_47843 = G__47848;
count__47836_47844 = G__47849;
i__47837_47845 = G__47850;
continue;
} else {
var temp__5735__auto___47851 = cljs.core.seq.call(null,seq__47834_47842);
if(temp__5735__auto___47851){
var seq__47834_47852__$1 = temp__5735__auto___47851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47834_47852__$1)){
var c__4550__auto___47853 = cljs.core.chunk_first.call(null,seq__47834_47852__$1);
var G__47854 = cljs.core.chunk_rest.call(null,seq__47834_47852__$1);
var G__47855 = c__4550__auto___47853;
var G__47856 = cljs.core.count.call(null,c__4550__auto___47853);
var G__47857 = (0);
seq__47834_47842 = G__47854;
chunk__47835_47843 = G__47855;
count__47836_47844 = G__47856;
i__47837_47845 = G__47857;
continue;
} else {
var dep_47858 = cljs.core.first.call(null,seq__47834_47852__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_47858;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47858));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47858,(depth + (1)),state);
} else {
}


var G__47859 = cljs.core.next.call(null,seq__47834_47852__$1);
var G__47860 = null;
var G__47861 = (0);
var G__47862 = (0);
seq__47834_47842 = G__47859;
chunk__47835_47843 = G__47860;
count__47836_47844 = G__47861;
i__47837_47845 = G__47862;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47838){
var vec__47839 = p__47838;
var seq__47840 = cljs.core.seq.call(null,vec__47839);
var first__47841 = cljs.core.first.call(null,seq__47840);
var seq__47840__$1 = cljs.core.next.call(null,seq__47840);
var x = first__47841;
var xs = seq__47840__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47839,seq__47840,first__47841,seq__47840__$1,x,xs,get_deps__$1){
return (function (p1__47825_SHARP_){
return clojure.set.difference.call(null,p1__47825_SHARP_,x);
});})(vec__47839,seq__47840,first__47841,seq__47840__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47863 = cljs.core.seq.call(null,provides);
var chunk__47864 = null;
var count__47865 = (0);
var i__47866 = (0);
while(true){
if((i__47866 < count__47865)){
var prov = cljs.core._nth.call(null,chunk__47864,i__47866);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47875_47883 = cljs.core.seq.call(null,requires);
var chunk__47876_47884 = null;
var count__47877_47885 = (0);
var i__47878_47886 = (0);
while(true){
if((i__47878_47886 < count__47877_47885)){
var req_47887 = cljs.core._nth.call(null,chunk__47876_47884,i__47878_47886);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47887,prov);


var G__47888 = seq__47875_47883;
var G__47889 = chunk__47876_47884;
var G__47890 = count__47877_47885;
var G__47891 = (i__47878_47886 + (1));
seq__47875_47883 = G__47888;
chunk__47876_47884 = G__47889;
count__47877_47885 = G__47890;
i__47878_47886 = G__47891;
continue;
} else {
var temp__5735__auto___47892 = cljs.core.seq.call(null,seq__47875_47883);
if(temp__5735__auto___47892){
var seq__47875_47893__$1 = temp__5735__auto___47892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47875_47893__$1)){
var c__4550__auto___47894 = cljs.core.chunk_first.call(null,seq__47875_47893__$1);
var G__47895 = cljs.core.chunk_rest.call(null,seq__47875_47893__$1);
var G__47896 = c__4550__auto___47894;
var G__47897 = cljs.core.count.call(null,c__4550__auto___47894);
var G__47898 = (0);
seq__47875_47883 = G__47895;
chunk__47876_47884 = G__47896;
count__47877_47885 = G__47897;
i__47878_47886 = G__47898;
continue;
} else {
var req_47899 = cljs.core.first.call(null,seq__47875_47893__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47899,prov);


var G__47900 = cljs.core.next.call(null,seq__47875_47893__$1);
var G__47901 = null;
var G__47902 = (0);
var G__47903 = (0);
seq__47875_47883 = G__47900;
chunk__47876_47884 = G__47901;
count__47877_47885 = G__47902;
i__47878_47886 = G__47903;
continue;
}
} else {
}
}
break;
}


var G__47904 = seq__47863;
var G__47905 = chunk__47864;
var G__47906 = count__47865;
var G__47907 = (i__47866 + (1));
seq__47863 = G__47904;
chunk__47864 = G__47905;
count__47865 = G__47906;
i__47866 = G__47907;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47863);
if(temp__5735__auto__){
var seq__47863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47863__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47863__$1);
var G__47908 = cljs.core.chunk_rest.call(null,seq__47863__$1);
var G__47909 = c__4550__auto__;
var G__47910 = cljs.core.count.call(null,c__4550__auto__);
var G__47911 = (0);
seq__47863 = G__47908;
chunk__47864 = G__47909;
count__47865 = G__47910;
i__47866 = G__47911;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47863__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47879_47912 = cljs.core.seq.call(null,requires);
var chunk__47880_47913 = null;
var count__47881_47914 = (0);
var i__47882_47915 = (0);
while(true){
if((i__47882_47915 < count__47881_47914)){
var req_47916 = cljs.core._nth.call(null,chunk__47880_47913,i__47882_47915);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47916,prov);


var G__47917 = seq__47879_47912;
var G__47918 = chunk__47880_47913;
var G__47919 = count__47881_47914;
var G__47920 = (i__47882_47915 + (1));
seq__47879_47912 = G__47917;
chunk__47880_47913 = G__47918;
count__47881_47914 = G__47919;
i__47882_47915 = G__47920;
continue;
} else {
var temp__5735__auto___47921__$1 = cljs.core.seq.call(null,seq__47879_47912);
if(temp__5735__auto___47921__$1){
var seq__47879_47922__$1 = temp__5735__auto___47921__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47879_47922__$1)){
var c__4550__auto___47923 = cljs.core.chunk_first.call(null,seq__47879_47922__$1);
var G__47924 = cljs.core.chunk_rest.call(null,seq__47879_47922__$1);
var G__47925 = c__4550__auto___47923;
var G__47926 = cljs.core.count.call(null,c__4550__auto___47923);
var G__47927 = (0);
seq__47879_47912 = G__47924;
chunk__47880_47913 = G__47925;
count__47881_47914 = G__47926;
i__47882_47915 = G__47927;
continue;
} else {
var req_47928 = cljs.core.first.call(null,seq__47879_47922__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47928,prov);


var G__47929 = cljs.core.next.call(null,seq__47879_47922__$1);
var G__47930 = null;
var G__47931 = (0);
var G__47932 = (0);
seq__47879_47912 = G__47929;
chunk__47880_47913 = G__47930;
count__47881_47914 = G__47931;
i__47882_47915 = G__47932;
continue;
}
} else {
}
}
break;
}


var G__47933 = cljs.core.next.call(null,seq__47863__$1);
var G__47934 = null;
var G__47935 = (0);
var G__47936 = (0);
seq__47863 = G__47933;
chunk__47864 = G__47934;
count__47865 = G__47935;
i__47866 = G__47936;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47937_47941 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47938_47942 = null;
var count__47939_47943 = (0);
var i__47940_47944 = (0);
while(true){
if((i__47940_47944 < count__47939_47943)){
var ns_47945 = cljs.core._nth.call(null,chunk__47938_47942,i__47940_47944);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47945);


var G__47946 = seq__47937_47941;
var G__47947 = chunk__47938_47942;
var G__47948 = count__47939_47943;
var G__47949 = (i__47940_47944 + (1));
seq__47937_47941 = G__47946;
chunk__47938_47942 = G__47947;
count__47939_47943 = G__47948;
i__47940_47944 = G__47949;
continue;
} else {
var temp__5735__auto___47950 = cljs.core.seq.call(null,seq__47937_47941);
if(temp__5735__auto___47950){
var seq__47937_47951__$1 = temp__5735__auto___47950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47937_47951__$1)){
var c__4550__auto___47952 = cljs.core.chunk_first.call(null,seq__47937_47951__$1);
var G__47953 = cljs.core.chunk_rest.call(null,seq__47937_47951__$1);
var G__47954 = c__4550__auto___47952;
var G__47955 = cljs.core.count.call(null,c__4550__auto___47952);
var G__47956 = (0);
seq__47937_47941 = G__47953;
chunk__47938_47942 = G__47954;
count__47939_47943 = G__47955;
i__47940_47944 = G__47956;
continue;
} else {
var ns_47957 = cljs.core.first.call(null,seq__47937_47951__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47957);


var G__47958 = cljs.core.next.call(null,seq__47937_47951__$1);
var G__47959 = null;
var G__47960 = (0);
var G__47961 = (0);
seq__47937_47941 = G__47958;
chunk__47938_47942 = G__47959;
count__47939_47943 = G__47960;
i__47940_47944 = G__47961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47962__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47963__i = 0, G__47963__a = new Array(arguments.length -  0);
while (G__47963__i < G__47963__a.length) {G__47963__a[G__47963__i] = arguments[G__47963__i + 0]; ++G__47963__i;}
  args = new cljs.core.IndexedSeq(G__47963__a,0,null);
} 
return G__47962__delegate.call(this,args);};
G__47962.cljs$lang$maxFixedArity = 0;
G__47962.cljs$lang$applyTo = (function (arglist__47964){
var args = cljs.core.seq(arglist__47964);
return G__47962__delegate(args);
});
G__47962.cljs$core$IFn$_invoke$arity$variadic = G__47962__delegate;
return G__47962;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47965_SHARP_,p2__47966_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47965_SHARP_)),p2__47966_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47967_SHARP_,p2__47968_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47967_SHARP_),p2__47968_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47969 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47969.addCallback(((function (G__47969){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47969))
);

G__47969.addErrback(((function (G__47969){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47969))
);

return G__47969;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47970){if((e47970 instanceof Error)){
var e = e47970;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47970;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47971){if((e47971 instanceof Error)){
var e = e47971;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47971;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47972 = cljs.core._EQ_;
var expr__47973 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47972.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47973))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47972.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47973))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47972.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47973))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47972,expr__47973){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47972,expr__47973))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47975,callback){
var map__47976 = p__47975;
var map__47976__$1 = (((((!((map__47976 == null))))?(((((map__47976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47976):map__47976);
var file_msg = map__47976__$1;
var request_url = cljs.core.get.call(null,map__47976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47976,map__47976__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47976,map__47976__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_48014){
var state_val_48015 = (state_48014[(1)]);
if((state_val_48015 === (7))){
var inst_48010 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
var statearr_48016_48042 = state_48014__$1;
(statearr_48016_48042[(2)] = inst_48010);

(statearr_48016_48042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (1))){
var state_48014__$1 = state_48014;
var statearr_48017_48043 = state_48014__$1;
(statearr_48017_48043[(2)] = null);

(statearr_48017_48043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (4))){
var inst_47980 = (state_48014[(7)]);
var inst_47980__$1 = (state_48014[(2)]);
var state_48014__$1 = (function (){var statearr_48018 = state_48014;
(statearr_48018[(7)] = inst_47980__$1);

return statearr_48018;
})();
if(cljs.core.truth_(inst_47980__$1)){
var statearr_48019_48044 = state_48014__$1;
(statearr_48019_48044[(1)] = (5));

} else {
var statearr_48020_48045 = state_48014__$1;
(statearr_48020_48045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (15))){
var inst_47993 = (state_48014[(8)]);
var inst_47995 = (state_48014[(9)]);
var inst_47997 = inst_47995.call(null,inst_47993);
var state_48014__$1 = state_48014;
var statearr_48021_48046 = state_48014__$1;
(statearr_48021_48046[(2)] = inst_47997);

(statearr_48021_48046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (13))){
var inst_48004 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
var statearr_48022_48047 = state_48014__$1;
(statearr_48022_48047[(2)] = inst_48004);

(statearr_48022_48047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (6))){
var state_48014__$1 = state_48014;
var statearr_48023_48048 = state_48014__$1;
(statearr_48023_48048[(2)] = null);

(statearr_48023_48048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (17))){
var inst_48001 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
var statearr_48024_48049 = state_48014__$1;
(statearr_48024_48049[(2)] = inst_48001);

(statearr_48024_48049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (3))){
var inst_48012 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48014__$1,inst_48012);
} else {
if((state_val_48015 === (12))){
var state_48014__$1 = state_48014;
var statearr_48025_48050 = state_48014__$1;
(statearr_48025_48050[(2)] = null);

(statearr_48025_48050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (2))){
var state_48014__$1 = state_48014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48014__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48015 === (11))){
var inst_47985 = (state_48014[(10)]);
var inst_47991 = figwheel.client.file_reloading.blocking_load.call(null,inst_47985);
var state_48014__$1 = state_48014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48014__$1,(14),inst_47991);
} else {
if((state_val_48015 === (9))){
var inst_47985 = (state_48014[(10)]);
var state_48014__$1 = state_48014;
if(cljs.core.truth_(inst_47985)){
var statearr_48026_48051 = state_48014__$1;
(statearr_48026_48051[(1)] = (11));

} else {
var statearr_48027_48052 = state_48014__$1;
(statearr_48027_48052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (5))){
var inst_47980 = (state_48014[(7)]);
var inst_47986 = (state_48014[(11)]);
var inst_47985 = cljs.core.nth.call(null,inst_47980,(0),null);
var inst_47986__$1 = cljs.core.nth.call(null,inst_47980,(1),null);
var state_48014__$1 = (function (){var statearr_48028 = state_48014;
(statearr_48028[(10)] = inst_47985);

(statearr_48028[(11)] = inst_47986__$1);

return statearr_48028;
})();
if(cljs.core.truth_(inst_47986__$1)){
var statearr_48029_48053 = state_48014__$1;
(statearr_48029_48053[(1)] = (8));

} else {
var statearr_48030_48054 = state_48014__$1;
(statearr_48030_48054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (14))){
var inst_47985 = (state_48014[(10)]);
var inst_47995 = (state_48014[(9)]);
var inst_47993 = (state_48014[(2)]);
var inst_47994 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47995__$1 = cljs.core.get.call(null,inst_47994,inst_47985);
var state_48014__$1 = (function (){var statearr_48031 = state_48014;
(statearr_48031[(8)] = inst_47993);

(statearr_48031[(9)] = inst_47995__$1);

return statearr_48031;
})();
if(cljs.core.truth_(inst_47995__$1)){
var statearr_48032_48055 = state_48014__$1;
(statearr_48032_48055[(1)] = (15));

} else {
var statearr_48033_48056 = state_48014__$1;
(statearr_48033_48056[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (16))){
var inst_47993 = (state_48014[(8)]);
var inst_47999 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47993);
var state_48014__$1 = state_48014;
var statearr_48034_48057 = state_48014__$1;
(statearr_48034_48057[(2)] = inst_47999);

(statearr_48034_48057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (10))){
var inst_48006 = (state_48014[(2)]);
var state_48014__$1 = (function (){var statearr_48035 = state_48014;
(statearr_48035[(12)] = inst_48006);

return statearr_48035;
})();
var statearr_48036_48058 = state_48014__$1;
(statearr_48036_48058[(2)] = null);

(statearr_48036_48058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (8))){
var inst_47986 = (state_48014[(11)]);
var inst_47988 = eval(inst_47986);
var state_48014__$1 = state_48014;
var statearr_48037_48059 = state_48014__$1;
(statearr_48037_48059[(2)] = inst_47988);

(statearr_48037_48059[(1)] = (10));


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
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45699__auto__ = null;
var figwheel$client$file_reloading$state_machine__45699__auto____0 = (function (){
var statearr_48038 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48038[(0)] = figwheel$client$file_reloading$state_machine__45699__auto__);

(statearr_48038[(1)] = (1));

return statearr_48038;
});
var figwheel$client$file_reloading$state_machine__45699__auto____1 = (function (state_48014){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48039){if((e48039 instanceof Object)){
var ex__45702__auto__ = e48039;
var statearr_48040_48060 = state_48014;
(statearr_48040_48060[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48061 = state_48014;
state_48014 = G__48061;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45699__auto__ = function(state_48014){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45699__auto____1.call(this,state_48014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45699__auto____0;
figwheel$client$file_reloading$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45699__auto____1;
return figwheel$client$file_reloading$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_48041 = f__45794__auto__.call(null);
(statearr_48041[(6)] = c__45793__auto__);

return statearr_48041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48063 = arguments.length;
switch (G__48063) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48065,callback){
var map__48066 = p__48065;
var map__48066__$1 = (((((!((map__48066 == null))))?(((((map__48066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48066):map__48066);
var file_msg = map__48066__$1;
var namespace = cljs.core.get.call(null,map__48066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48066,map__48066__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48066,map__48066__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48068){
var map__48069 = p__48068;
var map__48069__$1 = (((((!((map__48069 == null))))?(((((map__48069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48069):map__48069);
var file_msg = map__48069__$1;
var namespace = cljs.core.get.call(null,map__48069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48071){
var map__48072 = p__48071;
var map__48072__$1 = (((((!((map__48072 == null))))?(((((map__48072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48072):map__48072);
var file_msg = map__48072__$1;
var namespace = cljs.core.get.call(null,map__48072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48074,callback){
var map__48075 = p__48074;
var map__48075__$1 = (((((!((map__48075 == null))))?(((((map__48075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48075):map__48075);
var file_msg = map__48075__$1;
var request_url = cljs.core.get.call(null,map__48075__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__45793__auto___48125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___48125,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___48125,out){
return (function (state_48110){
var state_val_48111 = (state_48110[(1)]);
if((state_val_48111 === (1))){
var inst_48084 = cljs.core.seq.call(null,files);
var inst_48085 = cljs.core.first.call(null,inst_48084);
var inst_48086 = cljs.core.next.call(null,inst_48084);
var inst_48087 = files;
var state_48110__$1 = (function (){var statearr_48112 = state_48110;
(statearr_48112[(7)] = inst_48086);

(statearr_48112[(8)] = inst_48087);

(statearr_48112[(9)] = inst_48085);

return statearr_48112;
})();
var statearr_48113_48126 = state_48110__$1;
(statearr_48113_48126[(2)] = null);

(statearr_48113_48126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (2))){
var inst_48087 = (state_48110[(8)]);
var inst_48093 = (state_48110[(10)]);
var inst_48092 = cljs.core.seq.call(null,inst_48087);
var inst_48093__$1 = cljs.core.first.call(null,inst_48092);
var inst_48094 = cljs.core.next.call(null,inst_48092);
var inst_48095 = (inst_48093__$1 == null);
var inst_48096 = cljs.core.not.call(null,inst_48095);
var state_48110__$1 = (function (){var statearr_48114 = state_48110;
(statearr_48114[(11)] = inst_48094);

(statearr_48114[(10)] = inst_48093__$1);

return statearr_48114;
})();
if(inst_48096){
var statearr_48115_48127 = state_48110__$1;
(statearr_48115_48127[(1)] = (4));

} else {
var statearr_48116_48128 = state_48110__$1;
(statearr_48116_48128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (3))){
var inst_48108 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48110__$1,inst_48108);
} else {
if((state_val_48111 === (4))){
var inst_48093 = (state_48110[(10)]);
var inst_48098 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48093);
var state_48110__$1 = state_48110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48110__$1,(7),inst_48098);
} else {
if((state_val_48111 === (5))){
var inst_48104 = cljs.core.async.close_BANG_.call(null,out);
var state_48110__$1 = state_48110;
var statearr_48117_48129 = state_48110__$1;
(statearr_48117_48129[(2)] = inst_48104);

(statearr_48117_48129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (6))){
var inst_48106 = (state_48110[(2)]);
var state_48110__$1 = state_48110;
var statearr_48118_48130 = state_48110__$1;
(statearr_48118_48130[(2)] = inst_48106);

(statearr_48118_48130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48111 === (7))){
var inst_48094 = (state_48110[(11)]);
var inst_48100 = (state_48110[(2)]);
var inst_48101 = cljs.core.async.put_BANG_.call(null,out,inst_48100);
var inst_48087 = inst_48094;
var state_48110__$1 = (function (){var statearr_48119 = state_48110;
(statearr_48119[(8)] = inst_48087);

(statearr_48119[(12)] = inst_48101);

return statearr_48119;
})();
var statearr_48120_48131 = state_48110__$1;
(statearr_48120_48131[(2)] = null);

(statearr_48120_48131[(1)] = (2));


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
});})(c__45793__auto___48125,out))
;
return ((function (switch__45698__auto__,c__45793__auto___48125,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____0 = (function (){
var statearr_48121 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48121[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__);

(statearr_48121[(1)] = (1));

return statearr_48121;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____1 = (function (state_48110){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48122){if((e48122 instanceof Object)){
var ex__45702__auto__ = e48122;
var statearr_48123_48132 = state_48110;
(statearr_48123_48132[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48133 = state_48110;
state_48110 = G__48133;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__ = function(state_48110){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____1.call(this,state_48110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___48125,out))
})();
var state__45795__auto__ = (function (){var statearr_48124 = f__45794__auto__.call(null);
(statearr_48124[(6)] = c__45793__auto___48125);

return statearr_48124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___48125,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48134,opts){
var map__48135 = p__48134;
var map__48135__$1 = (((((!((map__48135 == null))))?(((((map__48135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48135):map__48135);
var eval_body = cljs.core.get.call(null,map__48135__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48137){var e = e48137;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__48138_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48138_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__48139){
var vec__48140 = p__48139;
var k = cljs.core.nth.call(null,vec__48140,(0),null);
var v = cljs.core.nth.call(null,vec__48140,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48143){
var vec__48144 = p__48143;
var k = cljs.core.nth.call(null,vec__48144,(0),null);
var v = cljs.core.nth.call(null,vec__48144,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48150,p__48151){
var map__48152 = p__48150;
var map__48152__$1 = (((((!((map__48152 == null))))?(((((map__48152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48152):map__48152);
var opts = map__48152__$1;
var before_jsload = cljs.core.get.call(null,map__48152__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48152__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48152__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48153 = p__48151;
var map__48153__$1 = (((((!((map__48153 == null))))?(((((map__48153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48153):map__48153);
var msg = map__48153__$1;
var files = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48307){
var state_val_48308 = (state_48307[(1)]);
if((state_val_48308 === (7))){
var inst_48167 = (state_48307[(7)]);
var inst_48168 = (state_48307[(8)]);
var inst_48169 = (state_48307[(9)]);
var inst_48170 = (state_48307[(10)]);
var inst_48175 = cljs.core._nth.call(null,inst_48168,inst_48170);
var inst_48176 = figwheel.client.file_reloading.eval_body.call(null,inst_48175,opts);
var inst_48177 = (inst_48170 + (1));
var tmp48309 = inst_48167;
var tmp48310 = inst_48168;
var tmp48311 = inst_48169;
var inst_48167__$1 = tmp48309;
var inst_48168__$1 = tmp48310;
var inst_48169__$1 = tmp48311;
var inst_48170__$1 = inst_48177;
var state_48307__$1 = (function (){var statearr_48312 = state_48307;
(statearr_48312[(11)] = inst_48176);

(statearr_48312[(7)] = inst_48167__$1);

(statearr_48312[(8)] = inst_48168__$1);

(statearr_48312[(9)] = inst_48169__$1);

(statearr_48312[(10)] = inst_48170__$1);

return statearr_48312;
})();
var statearr_48313_48396 = state_48307__$1;
(statearr_48313_48396[(2)] = null);

(statearr_48313_48396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (20))){
var inst_48210 = (state_48307[(12)]);
var inst_48218 = figwheel.client.file_reloading.sort_files.call(null,inst_48210);
var state_48307__$1 = state_48307;
var statearr_48314_48397 = state_48307__$1;
(statearr_48314_48397[(2)] = inst_48218);

(statearr_48314_48397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (27))){
var state_48307__$1 = state_48307;
var statearr_48315_48398 = state_48307__$1;
(statearr_48315_48398[(2)] = null);

(statearr_48315_48398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (1))){
var inst_48159 = (state_48307[(13)]);
var inst_48156 = before_jsload.call(null,files);
var inst_48157 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48158 = (function (){return ((function (inst_48159,inst_48156,inst_48157,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48147_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48147_SHARP_);
});
;})(inst_48159,inst_48156,inst_48157,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48159__$1 = cljs.core.filter.call(null,inst_48158,files);
var inst_48160 = cljs.core.not_empty.call(null,inst_48159__$1);
var state_48307__$1 = (function (){var statearr_48316 = state_48307;
(statearr_48316[(14)] = inst_48157);

(statearr_48316[(15)] = inst_48156);

(statearr_48316[(13)] = inst_48159__$1);

return statearr_48316;
})();
if(cljs.core.truth_(inst_48160)){
var statearr_48317_48399 = state_48307__$1;
(statearr_48317_48399[(1)] = (2));

} else {
var statearr_48318_48400 = state_48307__$1;
(statearr_48318_48400[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (24))){
var state_48307__$1 = state_48307;
var statearr_48319_48401 = state_48307__$1;
(statearr_48319_48401[(2)] = null);

(statearr_48319_48401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (39))){
var inst_48260 = (state_48307[(16)]);
var state_48307__$1 = state_48307;
var statearr_48320_48402 = state_48307__$1;
(statearr_48320_48402[(2)] = inst_48260);

(statearr_48320_48402[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (46))){
var inst_48302 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48321_48403 = state_48307__$1;
(statearr_48321_48403[(2)] = inst_48302);

(statearr_48321_48403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (4))){
var inst_48204 = (state_48307[(2)]);
var inst_48205 = cljs.core.List.EMPTY;
var inst_48206 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48205);
var inst_48207 = (function (){return ((function (inst_48204,inst_48205,inst_48206,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48148_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48148_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48148_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48148_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_48204,inst_48205,inst_48206,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48208 = cljs.core.filter.call(null,inst_48207,files);
var inst_48209 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48210 = cljs.core.concat.call(null,inst_48208,inst_48209);
var state_48307__$1 = (function (){var statearr_48322 = state_48307;
(statearr_48322[(12)] = inst_48210);

(statearr_48322[(17)] = inst_48204);

(statearr_48322[(18)] = inst_48206);

return statearr_48322;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48323_48404 = state_48307__$1;
(statearr_48323_48404[(1)] = (16));

} else {
var statearr_48324_48405 = state_48307__$1;
(statearr_48324_48405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (15))){
var inst_48194 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48325_48406 = state_48307__$1;
(statearr_48325_48406[(2)] = inst_48194);

(statearr_48325_48406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (21))){
var inst_48220 = (state_48307[(19)]);
var inst_48220__$1 = (state_48307[(2)]);
var inst_48221 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48220__$1);
var state_48307__$1 = (function (){var statearr_48326 = state_48307;
(statearr_48326[(19)] = inst_48220__$1);

return statearr_48326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48307__$1,(22),inst_48221);
} else {
if((state_val_48308 === (31))){
var inst_48305 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48307__$1,inst_48305);
} else {
if((state_val_48308 === (32))){
var inst_48260 = (state_48307[(16)]);
var inst_48265 = inst_48260.cljs$lang$protocol_mask$partition0$;
var inst_48266 = (inst_48265 & (64));
var inst_48267 = inst_48260.cljs$core$ISeq$;
var inst_48268 = (cljs.core.PROTOCOL_SENTINEL === inst_48267);
var inst_48269 = ((inst_48266) || (inst_48268));
var state_48307__$1 = state_48307;
if(cljs.core.truth_(inst_48269)){
var statearr_48327_48407 = state_48307__$1;
(statearr_48327_48407[(1)] = (35));

} else {
var statearr_48328_48408 = state_48307__$1;
(statearr_48328_48408[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (40))){
var inst_48282 = (state_48307[(20)]);
var inst_48281 = (state_48307[(2)]);
var inst_48282__$1 = cljs.core.get.call(null,inst_48281,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48283 = cljs.core.get.call(null,inst_48281,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48284 = cljs.core.not_empty.call(null,inst_48282__$1);
var state_48307__$1 = (function (){var statearr_48329 = state_48307;
(statearr_48329[(20)] = inst_48282__$1);

(statearr_48329[(21)] = inst_48283);

return statearr_48329;
})();
if(cljs.core.truth_(inst_48284)){
var statearr_48330_48409 = state_48307__$1;
(statearr_48330_48409[(1)] = (41));

} else {
var statearr_48331_48410 = state_48307__$1;
(statearr_48331_48410[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (33))){
var state_48307__$1 = state_48307;
var statearr_48332_48411 = state_48307__$1;
(statearr_48332_48411[(2)] = false);

(statearr_48332_48411[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (13))){
var inst_48180 = (state_48307[(22)]);
var inst_48184 = cljs.core.chunk_first.call(null,inst_48180);
var inst_48185 = cljs.core.chunk_rest.call(null,inst_48180);
var inst_48186 = cljs.core.count.call(null,inst_48184);
var inst_48167 = inst_48185;
var inst_48168 = inst_48184;
var inst_48169 = inst_48186;
var inst_48170 = (0);
var state_48307__$1 = (function (){var statearr_48333 = state_48307;
(statearr_48333[(7)] = inst_48167);

(statearr_48333[(8)] = inst_48168);

(statearr_48333[(9)] = inst_48169);

(statearr_48333[(10)] = inst_48170);

return statearr_48333;
})();
var statearr_48334_48412 = state_48307__$1;
(statearr_48334_48412[(2)] = null);

(statearr_48334_48412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (22))){
var inst_48224 = (state_48307[(23)]);
var inst_48223 = (state_48307[(24)]);
var inst_48220 = (state_48307[(19)]);
var inst_48228 = (state_48307[(25)]);
var inst_48223__$1 = (state_48307[(2)]);
var inst_48224__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48223__$1);
var inst_48225 = (function (){var all_files = inst_48220;
var res_SINGLEQUOTE_ = inst_48223__$1;
var res = inst_48224__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48224,inst_48223,inst_48220,inst_48228,inst_48223__$1,inst_48224__$1,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48149_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48149_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48224,inst_48223,inst_48220,inst_48228,inst_48223__$1,inst_48224__$1,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48226 = cljs.core.filter.call(null,inst_48225,inst_48223__$1);
var inst_48227 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48228__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48227);
var inst_48229 = cljs.core.not_empty.call(null,inst_48228__$1);
var state_48307__$1 = (function (){var statearr_48335 = state_48307;
(statearr_48335[(23)] = inst_48224__$1);

(statearr_48335[(24)] = inst_48223__$1);

(statearr_48335[(25)] = inst_48228__$1);

(statearr_48335[(26)] = inst_48226);

return statearr_48335;
})();
if(cljs.core.truth_(inst_48229)){
var statearr_48336_48413 = state_48307__$1;
(statearr_48336_48413[(1)] = (23));

} else {
var statearr_48337_48414 = state_48307__$1;
(statearr_48337_48414[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (36))){
var state_48307__$1 = state_48307;
var statearr_48338_48415 = state_48307__$1;
(statearr_48338_48415[(2)] = false);

(statearr_48338_48415[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (41))){
var inst_48282 = (state_48307[(20)]);
var inst_48286 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48287 = cljs.core.map.call(null,inst_48286,inst_48282);
var inst_48288 = cljs.core.pr_str.call(null,inst_48287);
var inst_48289 = ["figwheel-no-load meta-data: ",inst_48288].join('');
var inst_48290 = figwheel.client.utils.log.call(null,inst_48289);
var state_48307__$1 = state_48307;
var statearr_48339_48416 = state_48307__$1;
(statearr_48339_48416[(2)] = inst_48290);

(statearr_48339_48416[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (43))){
var inst_48283 = (state_48307[(21)]);
var inst_48293 = (state_48307[(2)]);
var inst_48294 = cljs.core.not_empty.call(null,inst_48283);
var state_48307__$1 = (function (){var statearr_48340 = state_48307;
(statearr_48340[(27)] = inst_48293);

return statearr_48340;
})();
if(cljs.core.truth_(inst_48294)){
var statearr_48341_48417 = state_48307__$1;
(statearr_48341_48417[(1)] = (44));

} else {
var statearr_48342_48418 = state_48307__$1;
(statearr_48342_48418[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (29))){
var inst_48260 = (state_48307[(16)]);
var inst_48224 = (state_48307[(23)]);
var inst_48223 = (state_48307[(24)]);
var inst_48220 = (state_48307[(19)]);
var inst_48228 = (state_48307[(25)]);
var inst_48226 = (state_48307[(26)]);
var inst_48256 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48259 = (function (){var all_files = inst_48220;
var res_SINGLEQUOTE_ = inst_48223;
var res = inst_48224;
var files_not_loaded = inst_48226;
var dependencies_that_loaded = inst_48228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48260,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48256,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48258){
var map__48343 = p__48258;
var map__48343__$1 = (((((!((map__48343 == null))))?(((((map__48343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48343):map__48343);
var namespace = cljs.core.get.call(null,map__48343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48260,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48256,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48260__$1 = cljs.core.group_by.call(null,inst_48259,inst_48226);
var inst_48262 = (inst_48260__$1 == null);
var inst_48263 = cljs.core.not.call(null,inst_48262);
var state_48307__$1 = (function (){var statearr_48345 = state_48307;
(statearr_48345[(16)] = inst_48260__$1);

(statearr_48345[(28)] = inst_48256);

return statearr_48345;
})();
if(inst_48263){
var statearr_48346_48419 = state_48307__$1;
(statearr_48346_48419[(1)] = (32));

} else {
var statearr_48347_48420 = state_48307__$1;
(statearr_48347_48420[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (44))){
var inst_48283 = (state_48307[(21)]);
var inst_48296 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48283);
var inst_48297 = cljs.core.pr_str.call(null,inst_48296);
var inst_48298 = ["not required: ",inst_48297].join('');
var inst_48299 = figwheel.client.utils.log.call(null,inst_48298);
var state_48307__$1 = state_48307;
var statearr_48348_48421 = state_48307__$1;
(statearr_48348_48421[(2)] = inst_48299);

(statearr_48348_48421[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (6))){
var inst_48201 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48349_48422 = state_48307__$1;
(statearr_48349_48422[(2)] = inst_48201);

(statearr_48349_48422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (28))){
var inst_48226 = (state_48307[(26)]);
var inst_48253 = (state_48307[(2)]);
var inst_48254 = cljs.core.not_empty.call(null,inst_48226);
var state_48307__$1 = (function (){var statearr_48350 = state_48307;
(statearr_48350[(29)] = inst_48253);

return statearr_48350;
})();
if(cljs.core.truth_(inst_48254)){
var statearr_48351_48423 = state_48307__$1;
(statearr_48351_48423[(1)] = (29));

} else {
var statearr_48352_48424 = state_48307__$1;
(statearr_48352_48424[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (25))){
var inst_48224 = (state_48307[(23)]);
var inst_48240 = (state_48307[(2)]);
var inst_48241 = cljs.core.not_empty.call(null,inst_48224);
var state_48307__$1 = (function (){var statearr_48353 = state_48307;
(statearr_48353[(30)] = inst_48240);

return statearr_48353;
})();
if(cljs.core.truth_(inst_48241)){
var statearr_48354_48425 = state_48307__$1;
(statearr_48354_48425[(1)] = (26));

} else {
var statearr_48355_48426 = state_48307__$1;
(statearr_48355_48426[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (34))){
var inst_48276 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
if(cljs.core.truth_(inst_48276)){
var statearr_48356_48427 = state_48307__$1;
(statearr_48356_48427[(1)] = (38));

} else {
var statearr_48357_48428 = state_48307__$1;
(statearr_48357_48428[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (17))){
var state_48307__$1 = state_48307;
var statearr_48358_48429 = state_48307__$1;
(statearr_48358_48429[(2)] = recompile_dependents);

(statearr_48358_48429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (3))){
var state_48307__$1 = state_48307;
var statearr_48359_48430 = state_48307__$1;
(statearr_48359_48430[(2)] = null);

(statearr_48359_48430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (12))){
var inst_48197 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48360_48431 = state_48307__$1;
(statearr_48360_48431[(2)] = inst_48197);

(statearr_48360_48431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (2))){
var inst_48159 = (state_48307[(13)]);
var inst_48166 = cljs.core.seq.call(null,inst_48159);
var inst_48167 = inst_48166;
var inst_48168 = null;
var inst_48169 = (0);
var inst_48170 = (0);
var state_48307__$1 = (function (){var statearr_48361 = state_48307;
(statearr_48361[(7)] = inst_48167);

(statearr_48361[(8)] = inst_48168);

(statearr_48361[(9)] = inst_48169);

(statearr_48361[(10)] = inst_48170);

return statearr_48361;
})();
var statearr_48362_48432 = state_48307__$1;
(statearr_48362_48432[(2)] = null);

(statearr_48362_48432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (23))){
var inst_48224 = (state_48307[(23)]);
var inst_48223 = (state_48307[(24)]);
var inst_48220 = (state_48307[(19)]);
var inst_48228 = (state_48307[(25)]);
var inst_48226 = (state_48307[(26)]);
var inst_48231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48233 = (function (){var all_files = inst_48220;
var res_SINGLEQUOTE_ = inst_48223;
var res = inst_48224;
var files_not_loaded = inst_48226;
var dependencies_that_loaded = inst_48228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48231,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48232){
var map__48363 = p__48232;
var map__48363__$1 = (((((!((map__48363 == null))))?(((((map__48363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48363):map__48363);
var request_url = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48231,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48234 = cljs.core.reverse.call(null,inst_48228);
var inst_48235 = cljs.core.map.call(null,inst_48233,inst_48234);
var inst_48236 = cljs.core.pr_str.call(null,inst_48235);
var inst_48237 = figwheel.client.utils.log.call(null,inst_48236);
var state_48307__$1 = (function (){var statearr_48365 = state_48307;
(statearr_48365[(31)] = inst_48231);

return statearr_48365;
})();
var statearr_48366_48433 = state_48307__$1;
(statearr_48366_48433[(2)] = inst_48237);

(statearr_48366_48433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (35))){
var state_48307__$1 = state_48307;
var statearr_48367_48434 = state_48307__$1;
(statearr_48367_48434[(2)] = true);

(statearr_48367_48434[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (19))){
var inst_48210 = (state_48307[(12)]);
var inst_48216 = figwheel.client.file_reloading.expand_files.call(null,inst_48210);
var state_48307__$1 = state_48307;
var statearr_48368_48435 = state_48307__$1;
(statearr_48368_48435[(2)] = inst_48216);

(statearr_48368_48435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (11))){
var state_48307__$1 = state_48307;
var statearr_48369_48436 = state_48307__$1;
(statearr_48369_48436[(2)] = null);

(statearr_48369_48436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (9))){
var inst_48199 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48370_48437 = state_48307__$1;
(statearr_48370_48437[(2)] = inst_48199);

(statearr_48370_48437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (5))){
var inst_48169 = (state_48307[(9)]);
var inst_48170 = (state_48307[(10)]);
var inst_48172 = (inst_48170 < inst_48169);
var inst_48173 = inst_48172;
var state_48307__$1 = state_48307;
if(cljs.core.truth_(inst_48173)){
var statearr_48371_48438 = state_48307__$1;
(statearr_48371_48438[(1)] = (7));

} else {
var statearr_48372_48439 = state_48307__$1;
(statearr_48372_48439[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (14))){
var inst_48180 = (state_48307[(22)]);
var inst_48189 = cljs.core.first.call(null,inst_48180);
var inst_48190 = figwheel.client.file_reloading.eval_body.call(null,inst_48189,opts);
var inst_48191 = cljs.core.next.call(null,inst_48180);
var inst_48167 = inst_48191;
var inst_48168 = null;
var inst_48169 = (0);
var inst_48170 = (0);
var state_48307__$1 = (function (){var statearr_48373 = state_48307;
(statearr_48373[(32)] = inst_48190);

(statearr_48373[(7)] = inst_48167);

(statearr_48373[(8)] = inst_48168);

(statearr_48373[(9)] = inst_48169);

(statearr_48373[(10)] = inst_48170);

return statearr_48373;
})();
var statearr_48374_48440 = state_48307__$1;
(statearr_48374_48440[(2)] = null);

(statearr_48374_48440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (45))){
var state_48307__$1 = state_48307;
var statearr_48375_48441 = state_48307__$1;
(statearr_48375_48441[(2)] = null);

(statearr_48375_48441[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (26))){
var inst_48224 = (state_48307[(23)]);
var inst_48223 = (state_48307[(24)]);
var inst_48220 = (state_48307[(19)]);
var inst_48228 = (state_48307[(25)]);
var inst_48226 = (state_48307[(26)]);
var inst_48243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48245 = (function (){var all_files = inst_48220;
var res_SINGLEQUOTE_ = inst_48223;
var res = inst_48224;
var files_not_loaded = inst_48226;
var dependencies_that_loaded = inst_48228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48243,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48244){
var map__48376 = p__48244;
var map__48376__$1 = (((((!((map__48376 == null))))?(((((map__48376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48376):map__48376);
var namespace = cljs.core.get.call(null,map__48376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48376__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48243,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48246 = cljs.core.map.call(null,inst_48245,inst_48224);
var inst_48247 = cljs.core.pr_str.call(null,inst_48246);
var inst_48248 = figwheel.client.utils.log.call(null,inst_48247);
var inst_48249 = (function (){var all_files = inst_48220;
var res_SINGLEQUOTE_ = inst_48223;
var res = inst_48224;
var files_not_loaded = inst_48226;
var dependencies_that_loaded = inst_48228;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48243,inst_48245,inst_48246,inst_48247,inst_48248,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48224,inst_48223,inst_48220,inst_48228,inst_48226,inst_48243,inst_48245,inst_48246,inst_48247,inst_48248,state_val_48308,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48250 = setTimeout(inst_48249,(10));
var state_48307__$1 = (function (){var statearr_48378 = state_48307;
(statearr_48378[(33)] = inst_48243);

(statearr_48378[(34)] = inst_48248);

return statearr_48378;
})();
var statearr_48379_48442 = state_48307__$1;
(statearr_48379_48442[(2)] = inst_48250);

(statearr_48379_48442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (16))){
var state_48307__$1 = state_48307;
var statearr_48380_48443 = state_48307__$1;
(statearr_48380_48443[(2)] = reload_dependents);

(statearr_48380_48443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (38))){
var inst_48260 = (state_48307[(16)]);
var inst_48278 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48260);
var state_48307__$1 = state_48307;
var statearr_48381_48444 = state_48307__$1;
(statearr_48381_48444[(2)] = inst_48278);

(statearr_48381_48444[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (30))){
var state_48307__$1 = state_48307;
var statearr_48382_48445 = state_48307__$1;
(statearr_48382_48445[(2)] = null);

(statearr_48382_48445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (10))){
var inst_48180 = (state_48307[(22)]);
var inst_48182 = cljs.core.chunked_seq_QMARK_.call(null,inst_48180);
var state_48307__$1 = state_48307;
if(inst_48182){
var statearr_48383_48446 = state_48307__$1;
(statearr_48383_48446[(1)] = (13));

} else {
var statearr_48384_48447 = state_48307__$1;
(statearr_48384_48447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (18))){
var inst_48214 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
if(cljs.core.truth_(inst_48214)){
var statearr_48385_48448 = state_48307__$1;
(statearr_48385_48448[(1)] = (19));

} else {
var statearr_48386_48449 = state_48307__$1;
(statearr_48386_48449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (42))){
var state_48307__$1 = state_48307;
var statearr_48387_48450 = state_48307__$1;
(statearr_48387_48450[(2)] = null);

(statearr_48387_48450[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (37))){
var inst_48273 = (state_48307[(2)]);
var state_48307__$1 = state_48307;
var statearr_48388_48451 = state_48307__$1;
(statearr_48388_48451[(2)] = inst_48273);

(statearr_48388_48451[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48308 === (8))){
var inst_48167 = (state_48307[(7)]);
var inst_48180 = (state_48307[(22)]);
var inst_48180__$1 = cljs.core.seq.call(null,inst_48167);
var state_48307__$1 = (function (){var statearr_48389 = state_48307;
(statearr_48389[(22)] = inst_48180__$1);

return statearr_48389;
})();
if(inst_48180__$1){
var statearr_48390_48452 = state_48307__$1;
(statearr_48390_48452[(1)] = (10));

} else {
var statearr_48391_48453 = state_48307__$1;
(statearr_48391_48453[(1)] = (11));

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
});})(c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45698__auto__,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____0 = (function (){
var statearr_48392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48392[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__);

(statearr_48392[(1)] = (1));

return statearr_48392;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____1 = (function (state_48307){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_48307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e48393){if((e48393 instanceof Object)){
var ex__45702__auto__ = e48393;
var statearr_48394_48454 = state_48307;
(statearr_48394_48454[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48455 = state_48307;
state_48307 = G__48455;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__ = function(state_48307){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____1.call(this,state_48307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45795__auto__ = (function (){var statearr_48395 = f__45794__auto__.call(null);
(statearr_48395[(6)] = c__45793__auto__);

return statearr_48395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__,map__48152,map__48152__$1,opts,before_jsload,on_jsload,reload_dependents,map__48153,map__48153__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45793__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48458,link){
var map__48459 = p__48458;
var map__48459__$1 = (((((!((map__48459 == null))))?(((((map__48459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48459):map__48459);
var file = cljs.core.get.call(null,map__48459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__48459,map__48459__$1,file){
return (function (p1__48456_SHARP_,p2__48457_SHARP_){
if(cljs.core._EQ_.call(null,p1__48456_SHARP_,p2__48457_SHARP_)){
return p1__48456_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__48459,map__48459__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48462){
var map__48463 = p__48462;
var map__48463__$1 = (((((!((map__48463 == null))))?(((((map__48463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48463):map__48463);
var match_length = cljs.core.get.call(null,map__48463__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48463__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48461_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48461_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48465_SHARP_,p2__48466_SHARP_){
return cljs.core.assoc.call(null,p1__48465_SHARP_,cljs.core.get.call(null,p2__48466_SHARP_,key),p2__48466_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_48467 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48467);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48467);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48468,p__48469){
var map__48470 = p__48468;
var map__48470__$1 = (((((!((map__48470 == null))))?(((((map__48470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48470):map__48470);
var on_cssload = cljs.core.get.call(null,map__48470__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48471 = p__48469;
var map__48471__$1 = (((((!((map__48471 == null))))?(((((map__48471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48471):map__48471);
var files_msg = map__48471__$1;
var files = cljs.core.get.call(null,map__48471__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563379480656
