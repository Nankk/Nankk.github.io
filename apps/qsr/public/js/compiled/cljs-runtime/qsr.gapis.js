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
qsr.gapis.auth = (new module$node_modules$google_auth_library$build$src$index.JWT((function (){var G__34529 = new cljs.core.Keyword(null,"client_email","client_email",-38325066);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__34529) : qsr.embedded.credentials.call(null,G__34529));
})(),null,(function (){var G__34530 = new cljs.core.Keyword(null,"private_key","private_key",-1385039332);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__34530) : qsr.embedded.credentials.call(null,G__34530));
})(),qsr.gapis.scopes));
qsr.gapis.sheets = (function (){var constructor$ = module$node_modules$google_sheets$index.sheets_v4.Sheets;
return (new constructor$((function (){var obj34532 = ({"version":"v4","auth":qsr.gapis.auth});
return obj34532;
})()));
})();
qsr.gapis.sheets_callback = (function qsr$gapis$sheets_callback(err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

var vs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res.data.values);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["sheets-callback received: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vs)].join('')], 0));

var G__34533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("qsr.events","set-items","qsr.events/set-items",-312944702),vs], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34533) : re_frame.core.dispatch_sync.call(null,G__34533));
});
qsr.gapis.get_values_from_sheet = (function qsr$gapis$get_values_from_sheet(sheet_id,range){
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spreadsheetId","spreadsheetId",-216493358),sheet_id,new cljs.core.Keyword(null,"range","range",1639692286),range], null));
var cbf = qsr.gapis.sheets_callback;
return qsr.gapis.sheets.spreadsheets.values.get(params,cbf);
});
qsr.gapis.drive = (function (){var constructor$ = module$node_modules$google_drive$index.drive_v3.Drive;
return (new constructor$((function (){var obj34535 = ({"version":"v3","auth":qsr.gapis.auth});
return obj34535;
})()));
})();
qsr.gapis.drive_callback = (function qsr$gapis$drive_callback(err,res){
if(cljs.core.truth_(err)){
throw err;
} else {
}

var files = res.data.files;
var seq__34536 = cljs.core.seq(files);
var chunk__34537 = null;
var count__34538 = (0);
var i__34539 = (0);
while(true){
if((i__34539 < count__34538)){
var file = chunk__34537.cljs$core$IIndexed$_nth$arity$2(null,i__34539);
console.log(file);


var G__34540 = seq__34536;
var G__34541 = chunk__34537;
var G__34542 = count__34538;
var G__34543 = (i__34539 + (1));
seq__34536 = G__34540;
chunk__34537 = G__34541;
count__34538 = G__34542;
i__34539 = G__34543;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34536);
if(temp__5735__auto__){
var seq__34536__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34536__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34536__$1);
var G__34544 = cljs.core.chunk_rest(seq__34536__$1);
var G__34545 = c__4550__auto__;
var G__34546 = cljs.core.count(c__4550__auto__);
var G__34547 = (0);
seq__34536 = G__34544;
chunk__34537 = G__34545;
count__34538 = G__34546;
i__34539 = G__34547;
continue;
} else {
var file = cljs.core.first(seq__34536__$1);
console.log(file);


var G__34548 = cljs.core.next(seq__34536__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__34536 = G__34548;
chunk__34537 = G__34549;
count__34538 = G__34550;
i__34539 = G__34551;
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
var params_34552 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_id),"' in parents"].join(''),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),page_size,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields], null));
var cbf_34553 = qsr.gapis.drive_callback;
var files_34554 = qsr.gapis.drive.files;
files_34554.list(params_34552,cbf_34553);

return (0);
});

//# sourceMappingURL=qsr.gapis.js.map
