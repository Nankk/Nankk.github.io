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
qsr.gapis.auth = (new module$node_modules$google_auth_library$build$src$index.JWT((function (){var G__33985 = new cljs.core.Keyword(null,"client_email","client_email",-38325066);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__33985) : qsr.embedded.credentials.call(null,G__33985));
})(),null,(function (){var G__33986 = new cljs.core.Keyword(null,"private_key","private_key",-1385039332);
return (qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1 ? qsr.embedded.credentials.cljs$core$IFn$_invoke$arity$1(G__33986) : qsr.embedded.credentials.call(null,G__33986));
})(),qsr.gapis.scopes));
qsr.gapis.sheets = (function (){var constructor$ = module$node_modules$google_sheets$index.sheets_v4.Sheets;
return (new constructor$((function (){var obj33988 = ({"version":"v4","auth":qsr.gapis.auth});
return obj33988;
})()));
})();
qsr.gapis.get_values_from_sheet = (function qsr$gapis$get_values_from_sheet(sheet_id,range,callback_fn){
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spreadsheetId","spreadsheetId",-216493358),sheet_id,new cljs.core.Keyword(null,"range","range",1639692286),range], null));
var cbf = callback_fn;
return qsr.gapis.sheets.spreadsheets.values.get(params,cbf);
});
qsr.gapis.drive = (function (){var constructor$ = module$node_modules$google_drive$index.drive_v3.Drive;
return (new constructor$((function (){var obj33990 = ({"version":"v3","auth":qsr.gapis.auth});
return obj33990;
})()));
})();
qsr.gapis.get_items_in_directory = (function qsr$gapis$get_items_in_directory(dir_id,page_size,fields,callback_fn){
var params_33992 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_id),"' in parents"].join(''),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),page_size,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields], null));
var cbf_33993 = callback_fn;
var files_33994 = qsr.gapis.drive.files;
files_33994.list(params_33992,cbf_33993);

return (0);
});

//# sourceMappingURL=qsr.gapis.js.map
