goog.provide('qsr.gapis');
goog.require('cljs.core');
var module$node_modules$google_auth_library$build$src$index=shadow.js.require("module$node_modules$google_auth_library$build$src$index", {});
var module$node_modules$google_drive$index=shadow.js.require("module$node_modules$google_drive$index", {});
var module$node_modules$google_sheets$index=shadow.js.require("module$node_modules$google_sheets$index", {});
goog.require('re_frame.core');
goog.require('qsr.embedded');
goog.require('qsr.subs');
goog.require('qsr.events');
qsr.gapis.scopes = ["https://www.googleapis.com/auth/drive"];
qsr.gapis.auth = (new module$node_modules$google_auth_library$build$src$index.JWT((function (){var G__32280 = new cljs.core.Keyword(null,"client_email","client_email",-38325066);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__32280) : qsr.embedded.credentials.call(null,G__32280));
})(),null,(function (){var G__32281 = new cljs.core.Keyword(null,"private_key","private_key",-1385039332);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__32281) : qsr.embedded.credentials.call(null,G__32281));
})(),qsr.gapis.scopes));
qsr.gapis.sheets = (function (){var constructor$ = module$node_modules$google_sheets$index.sheets_v4.Sheets;
return (new constructor$((function (){var obj32283 = ({"version":"v4","auth":qsr.gapis.auth});
return obj32283;
})()));
})();
qsr.gapis.sheets_callback = (function qsr$gapis$sheets_callback(err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

var vs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res.data.values);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["sheets-callback received: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vs)].join('')], 0));

var G__32284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),vs], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__32284) : re_frame.core.dispatch_sync.call(null,G__32284));
});
qsr.gapis.get_values_from_sheet = (function qsr$gapis$get_values_from_sheet(sheet_id,range){
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spreadsheetId","spreadsheetId",-216493358),sheet_id,new cljs.core.Keyword(null,"range","range",1639692286),range], null));
var cbf = qsr.gapis.sheets_callback;
return qsr.gapis.sheets.spreadsheets.values.get(params,cbf);
});
qsr.gapis.drive = (function (){var constructor$ = module$node_modules$google_drive$index.drive_v3.Drive;
return (new constructor$((function (){var obj32286 = ({"version":"v3","auth":qsr.gapis.auth});
return obj32286;
})()));
})();
qsr.gapis.drive_callback = (function qsr$gapis$drive_callback(err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

var files = res.data.files;
var seq__32287 = cljs.core.seq(files);
var chunk__32288 = null;
var count__32289 = (0);
var i__32290 = (0);
while(true){
if((i__32290 < count__32289)){
var file = chunk__32288.cljs$core$IIndexed$_nth$arity$2(null,i__32290);
console.log(file);


var G__32291 = seq__32287;
var G__32292 = chunk__32288;
var G__32293 = count__32289;
var G__32294 = (i__32290 + (1));
seq__32287 = G__32291;
chunk__32288 = G__32292;
count__32289 = G__32293;
i__32290 = G__32294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32287);
if(temp__5735__auto__){
var seq__32287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32287__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32287__$1);
var G__32295 = cljs.core.chunk_rest(seq__32287__$1);
var G__32296 = c__4550__auto__;
var G__32297 = cljs.core.count(c__4550__auto__);
var G__32298 = (0);
seq__32287 = G__32295;
chunk__32288 = G__32296;
count__32289 = G__32297;
i__32290 = G__32298;
continue;
} else {
var file = cljs.core.first(seq__32287__$1);
console.log(file);


var G__32299 = cljs.core.next(seq__32287__$1);
var G__32300 = null;
var G__32301 = (0);
var G__32302 = (0);
seq__32287 = G__32299;
chunk__32288 = G__32300;
count__32289 = G__32301;
i__32290 = G__32302;
continue;
}
} else {
return null;
}
}
break;
}
});
qsr.gapis.get_items_in_directory = (function qsr$gapis$get_items_in_directory(dir_id,page_size,fields){
var params_32303 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_id),"' in parents"].join(''),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),page_size,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields], null));
var cbf_32304 = qsr.gapis.drive_callback;
var files_32305 = qsr.gapis.drive.files;
files_32305.list(params_32303,cbf_32304);

return (0);
});

//# sourceMappingURL=qsr.gapis.js.map
