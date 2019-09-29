goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__43006_43506 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__43007_43507 = ((function (G__43006_43506){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__43006_43506))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43006_43506,G__43007_43507) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43006_43506,G__43007_43507));
var G__43008_43509 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__43009_43510 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43010_43511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43011_43512 = ((function (G__43008_43509,G__43009_43510,G__43010_43511){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__43008_43509,G__43009_43510,G__43010_43511))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43008_43509,G__43009_43510,G__43010_43511,G__43011_43512) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43008_43509,G__43009_43510,G__43010_43511,G__43011_43512));
var G__43012_43513 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__43013_43514 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43014_43515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__43015_43516 = ((function (G__43012_43513,G__43013_43514,G__43014_43515){
return (function (panel_width_PERCENT_,p__43016){
var vec__43017 = p__43016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43017,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43017,(1),null);
return (((function (){var G__43020 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__43020);
})() * n) / 100.0);
});})(G__43012_43513,G__43013_43514,G__43014_43515))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43012_43513,G__43013_43514,G__43014_43515,G__43015_43516) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43012_43513,G__43013_43514,G__43014_43515,G__43015_43516));
var G__43021_43517 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__43022_43518 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43023_43519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43024_43520 = ((function (G__43021_43517,G__43022_43518,G__43023_43519){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__43021_43517,G__43022_43518,G__43023_43519))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43021_43517,G__43022_43518,G__43023_43519,G__43024_43520) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43021_43517,G__43022_43518,G__43023_43519,G__43024_43520));
var G__43025_43523 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__43026_43524 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43027_43525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__43028_43526 = ((function (G__43025_43523,G__43026_43524,G__43027_43525){
return (function (width,p__43029){
var vec__43030 = p__43029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43030,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43030,(1),null);
return ((function (){var G__43033 = (width / n);
return Math.ceil(G__43033);
})() * n);
});})(G__43025_43523,G__43026_43524,G__43027_43525))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43025_43523,G__43026_43524,G__43027_43525,G__43028_43526) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43025_43523,G__43026_43524,G__43027_43525,G__43028_43526));
var G__43034_43530 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__43035_43531 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43036_43532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43037_43533 = ((function (G__43034_43530,G__43035_43531,G__43036_43532){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__43034_43530,G__43035_43531,G__43036_43532))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43034_43530,G__43035_43531,G__43036_43532,G__43037_43533) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43034_43530,G__43035_43531,G__43036_43532,G__43037_43533));
var G__43038_43534 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__43039_43535 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43040_43536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43041_43537 = ((function (G__43038_43534,G__43039_43535,G__43040_43536){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__43038_43534,G__43039_43535,G__43040_43536))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43038_43534,G__43039_43535,G__43040_43536,G__43041_43537) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43038_43534,G__43039_43535,G__43040_43536,G__43041_43537));
var G__43042_43540 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__43043_43541 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43044_43542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43045_43543 = ((function (G__43042_43540,G__43043_43541,G__43044_43542){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__43042_43540,G__43043_43541,G__43044_43542))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43042_43540,G__43043_43541,G__43044_43542,G__43045_43543) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43042_43540,G__43043_43541,G__43044_43542,G__43045_43543));
var G__43046_43544 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__43047_43545 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43048_43546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43049_43547 = ((function (G__43046_43544,G__43047_43545,G__43048_43546){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__43046_43544,G__43047_43545,G__43048_43546))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43046_43544,G__43047_43545,G__43048_43546,G__43049_43547) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43046_43544,G__43047_43545,G__43048_43546,G__43049_43547));
var G__43052_43548 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__43053_43549 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43054_43550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43055_43551 = ((function (G__43052_43548,G__43053_43549,G__43054_43550){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__43052_43548,G__43053_43549,G__43054_43550))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43052_43548,G__43053_43549,G__43054_43550,G__43055_43551) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43052_43548,G__43053_43549,G__43054_43550,G__43055_43551));
var G__43056_43552 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__43057_43553 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43058_43554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43059_43555 = ((function (G__43056_43552,G__43057_43553,G__43058_43554){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__43056_43552,G__43057_43553,G__43058_43554))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43056_43552,G__43057_43553,G__43058_43554,G__43059_43555) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43056_43552,G__43057_43553,G__43058_43554,G__43059_43555));
var G__43060_43556 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__43061_43557 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43062_43558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43063_43559 = ((function (G__43060_43556,G__43061_43557,G__43062_43558){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__43060_43556,G__43061_43557,G__43062_43558))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43060_43556,G__43061_43557,G__43062_43558,G__43063_43559) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43060_43556,G__43061_43557,G__43062_43558,G__43063_43559));
var G__43064_43560 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__43065_43561 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43066_43562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__43067_43563 = ((function (G__43064_43560,G__43065_43561,G__43066_43562){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__43064_43560,G__43065_43561,G__43066_43562))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43064_43560,G__43065_43561,G__43066_43562,G__43067_43563) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43064_43560,G__43065_43561,G__43066_43562,G__43067_43563));
var G__43068_43564 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__43069_43565 = ((function (G__43068_43564){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__43068_43564))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43068_43564,G__43069_43565) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43068_43564,G__43069_43565));
var G__43070_43566 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__43071_43567 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43072_43568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__43073_43569 = ((function (G__43070_43566,G__43071_43567,G__43072_43568){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__43070_43566,G__43071_43567,G__43072_43568))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43070_43566,G__43071_43567,G__43072_43568,G__43073_43569) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43070_43566,G__43071_43567,G__43072_43568,G__43073_43569));
var G__43075_43574 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__43076_43575 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43077_43576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__43078_43577 = ((function (G__43075_43574,G__43076_43575,G__43077_43576){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__43075_43574,G__43076_43575,G__43077_43576))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43075_43574,G__43076_43575,G__43077_43576,G__43078_43577) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43075_43574,G__43076_43575,G__43077_43576,G__43078_43577));
var G__43081_43578 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__43082_43579 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43083_43580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__43084_43581 = ((function (G__43081_43578,G__43082_43579,G__43083_43580){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__43081_43578,G__43082_43579,G__43083_43580){
return (function (p1__43080_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__43080_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__43080_SHARP_));
});})(G__43081_43578,G__43082_43579,G__43083_43580))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__43081_43578,G__43082_43579,G__43083_43580))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43081_43578,G__43082_43579,G__43083_43580,G__43084_43581) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43081_43578,G__43082_43579,G__43083_43580,G__43084_43581));
var G__43086_43582 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__43087_43583 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43088_43584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__43089_43585 = ((function (G__43086_43582,G__43087_43583,G__43088_43584){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__43086_43582,G__43087_43583,G__43088_43584))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43086_43582,G__43087_43583,G__43088_43584,G__43089_43585) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43086_43582,G__43087_43583,G__43088_43584,G__43089_43585));
var G__43090_43586 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__43091_43587 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43092_43588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__43093_43589 = ((function (G__43090_43586,G__43091_43587,G__43092_43588){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__43090_43586,G__43091_43587,G__43092_43588))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43090_43586,G__43091_43587,G__43092_43588,G__43093_43589) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43090_43586,G__43091_43587,G__43092_43588,G__43093_43589));
var G__43094_43590 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__43095_43591 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43096_43592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__43097_43593 = ((function (G__43094_43590,G__43095_43591,G__43096_43592){
return (function (expansions,p__43098){
var vec__43100 = p__43098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43100,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43100,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__43094_43590,G__43095_43591,G__43096_43592))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43094_43590,G__43095_43591,G__43096_43592,G__43097_43593) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43094_43590,G__43095_43591,G__43096_43592,G__43097_43593));
var G__43103_43594 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__43104_43595 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43105_43596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__43106_43597 = ((function (G__43103_43594,G__43104_43595,G__43105_43596){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__43103_43594,G__43104_43595,G__43105_43596))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43103_43594,G__43104_43595,G__43105_43596,G__43106_43597) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43103_43594,G__43104_43595,G__43105_43596,G__43106_43597));
var G__43107_43600 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__43108_43601 = ((function (G__43107_43600){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43107_43600))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43107_43600,G__43108_43601) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43107_43600,G__43108_43601));
var G__43109_43602 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__43110_43603 = ((function (G__43109_43602){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43109_43602))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43109_43602,G__43110_43603) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43109_43602,G__43110_43603));
var G__43111_43604 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__43112_43605 = ((function (G__43111_43604){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__43111_43604))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43111_43604,G__43112_43605) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43111_43604,G__43112_43605));
var G__43113_43606 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__43114_43607 = ((function (G__43113_43606){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__43113_43606))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43113_43606,G__43114_43607) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43113_43606,G__43114_43607));
var G__43115_43608 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__43116_43609 = ((function (G__43115_43608){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__43115_43608))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43115_43608,G__43116_43609) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43115_43608,G__43116_43609));
var G__43117_43610 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__43118_43611 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43119_43612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__43120_43613 = ((function (G__43117_43610,G__43118_43611,G__43119_43612){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__43117_43610,G__43118_43611,G__43119_43612))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43117_43610,G__43118_43611,G__43119_43612,G__43120_43613) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43117_43610,G__43118_43611,G__43119_43612,G__43120_43613));
var G__43122_43615 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__43123_43616 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43124_43617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__43125_43618 = ((function (G__43122_43615,G__43123_43616,G__43124_43617){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__43122_43615,G__43123_43616,G__43124_43617))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43122_43615,G__43123_43616,G__43124_43617,G__43125_43618) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43122_43615,G__43123_43616,G__43124_43617,G__43125_43618));
var G__43126_43619 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__43127_43620 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43128_43621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__43129_43622 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43130_43623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__43131_43624 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43132_43625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__43133_43626 = ((function (G__43126_43619,G__43127_43620,G__43128_43621,G__43129_43622,G__43130_43623,G__43131_43624,G__43132_43625){
return (function (p__43134,_){
var vec__43135 = p__43134;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43135,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43135,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43135,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__43126_43619,G__43127_43620,G__43128_43621,G__43129_43622,G__43130_43623,G__43131_43624,G__43132_43625))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__43126_43619,G__43127_43620,G__43128_43621,G__43129_43622,G__43130_43623,G__43131_43624,G__43132_43625,G__43133_43626) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43126_43619,G__43127_43620,G__43128_43621,G__43129_43622,G__43130_43623,G__43131_43624,G__43132_43625,G__43133_43626));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__43139,_){
var vec__43140 = p__43139;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43140,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43140,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__43140,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__43140,traces,filtered_views))
),traces);
});
var G__43143_43632 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__43144_43633 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43145_43634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43146_43635 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43147_43636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__43148_43637 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43143_43632,G__43144_43633,G__43145_43634,G__43146_43635,G__43147_43636,G__43148_43637) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43143_43632,G__43144_43633,G__43145_43634,G__43146_43635,G__43147_43636,G__43148_43637));
var G__43149_43642 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__43150_43643 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43151_43644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__43152_43645 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43153_43646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__43154_43647 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43149_43642,G__43150_43643,G__43151_43644,G__43152_43645,G__43153_43646,G__43154_43647) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43149_43642,G__43150_43643,G__43151_43644,G__43152_43645,G__43153_43646,G__43154_43647));
var G__43155_43648 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__43156_43649 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43157_43650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__43158_43651 = ((function (G__43155_43648,G__43156_43649,G__43157_43650){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__43155_43648,G__43156_43649,G__43157_43650))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43155_43648,G__43156_43649,G__43157_43650,G__43158_43651) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43155_43648,G__43156_43649,G__43157_43650,G__43158_43651));
var G__43159_43652 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__43160_43653 = ((function (G__43159_43652){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__43159_43652))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43159_43652,G__43160_43653) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43159_43652,G__43160_43653));
var G__43161_43654 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__43162_43655 = ((function (G__43161_43654){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43161_43654))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43161_43654,G__43162_43655) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43161_43654,G__43162_43655));
var G__43163_43656 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__43164_43657 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43165_43658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__43166_43659 = ((function (G__43163_43656,G__43164_43657,G__43165_43658){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__43163_43656,G__43164_43657,G__43165_43658))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43163_43656,G__43164_43657,G__43165_43658,G__43166_43659) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43163_43656,G__43164_43657,G__43165_43658,G__43166_43659));
var G__43167_43661 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__43168_43662 = ((function (G__43167_43661){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43167_43661))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43167_43661,G__43168_43662) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43167_43661,G__43168_43662));
var G__43169_43663 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__43170_43664 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43171_43665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43172_43666 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43173_43667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__43174_43668 = ((function (G__43169_43663,G__43170_43664,G__43171_43665,G__43172_43666,G__43173_43667){
return (function (p__43175,_){
var vec__43176 = p__43175;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43176,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43176,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__43169_43663,G__43170_43664,G__43171_43665,G__43172_43666,G__43173_43667))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43169_43663,G__43170_43664,G__43171_43665,G__43172_43666,G__43173_43667,G__43174_43668) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43169_43663,G__43170_43664,G__43171_43665,G__43172_43666,G__43173_43667,G__43174_43668));
var G__43179_43671 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__43180_43672 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43181_43673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__43182_43674 = ((function (G__43179_43671,G__43180_43672,G__43181_43673){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__43179_43671,G__43180_43672,G__43181_43673))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43179_43671,G__43180_43672,G__43181_43673,G__43182_43674) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43179_43671,G__43180_43672,G__43181_43673,G__43182_43674));
var G__43183_43675 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__43184_43676 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43185_43677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__43186_43678 = ((function (G__43183_43675,G__43184_43676,G__43185_43677){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__43183_43675,G__43184_43676,G__43185_43677))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43183_43675,G__43184_43676,G__43185_43677,G__43186_43678) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43183_43675,G__43184_43676,G__43185_43677,G__43186_43678));
var G__43187_43679 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__43188_43680 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43189_43681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__43190_43682 = ((function (G__43187_43679,G__43188_43680,G__43189_43681){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__43187_43679,G__43188_43680,G__43189_43681))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43187_43679,G__43188_43680,G__43189_43681,G__43190_43682) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43187_43679,G__43188_43680,G__43189_43681,G__43190_43682));
var G__43191_43685 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__43192_43686 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43193_43687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43194_43688 = ((function (G__43191_43685,G__43192_43686,G__43193_43687){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__43191_43685,G__43192_43686,G__43193_43687))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43191_43685,G__43192_43686,G__43193_43687,G__43194_43688) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43191_43685,G__43192_43686,G__43193_43687,G__43194_43688));
var G__43195_43695 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__43196_43696 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43197_43698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43198_43701 = ((function (G__43195_43695,G__43196_43696,G__43197_43698){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__43195_43695,G__43196_43696,G__43197_43698))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43195_43695,G__43196_43696,G__43197_43698,G__43198_43701) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43195_43695,G__43196_43696,G__43197_43698,G__43198_43701));
var G__43199_43709 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__43200_43710 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43201_43711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__43202_43712 = ((function (G__43199_43709,G__43200_43710,G__43201_43711){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__43199_43709,G__43200_43710,G__43201_43711))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43199_43709,G__43200_43710,G__43201_43711,G__43202_43712) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43199_43709,G__43200_43710,G__43201_43711,G__43202_43712));
var G__43203_43718 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__43204_43719 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43205_43720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43206_43721 = ((function (G__43203_43718,G__43204_43719,G__43205_43720){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__43203_43718,G__43204_43719,G__43205_43720))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43203_43718,G__43204_43719,G__43205_43720,G__43206_43721) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43203_43718,G__43204_43719,G__43205_43720,G__43206_43721));
var G__43207_43723 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__43208_43724 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43209_43725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__43210_43726 = ((function (G__43207_43723,G__43208_43724,G__43209_43725){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__43207_43723,G__43208_43724,G__43209_43725))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43207_43723,G__43208_43724,G__43209_43725,G__43210_43726) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43207_43723,G__43208_43724,G__43209_43725,G__43210_43726));
var G__43211_43727 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__43212_43728 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43213_43729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__43214_43730 = ((function (G__43211_43727,G__43212_43728,G__43213_43729){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__43211_43727,G__43212_43728,G__43213_43729))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43211_43727,G__43212_43728,G__43213_43729,G__43214_43730) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43211_43727,G__43212_43728,G__43213_43729,G__43214_43730));
var G__43215_43734 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__43216_43735 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43217_43736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__43218_43737 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43219_43738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__43220_43739 = ((function (G__43215_43734,G__43216_43735,G__43217_43736,G__43218_43737,G__43219_43738){
return (function (p__43221){
var vec__43222 = p__43221;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43222,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43222,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__43215_43734,G__43216_43735,G__43217_43736,G__43218_43737,G__43219_43738))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43215_43734,G__43216_43735,G__43217_43736,G__43218_43737,G__43219_43738,G__43220_43739) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43215_43734,G__43216_43735,G__43217_43736,G__43218_43737,G__43219_43738,G__43220_43739));
var G__43225_43744 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__43226_43745 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43227_43746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__43228_43747 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43229_43748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__43230_43749 = ((function (G__43225_43744,G__43226_43745,G__43227_43746,G__43228_43747,G__43229_43748){
return (function (p__43231){
var vec__43232 = p__43231;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__43225_43744,G__43226_43745,G__43227_43746,G__43228_43747,G__43229_43748))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43225_43744,G__43226_43745,G__43227_43746,G__43228_43747,G__43229_43748,G__43230_43749) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43225_43744,G__43226_43745,G__43227_43746,G__43228_43747,G__43229_43748,G__43230_43749));
var G__43235_43757 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__43236_43758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43237_43759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43238_43760 = ((function (G__43235_43757,G__43236_43758,G__43237_43759){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__43235_43757,G__43236_43758,G__43237_43759))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43235_43757,G__43236_43758,G__43237_43759,G__43238_43760) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43235_43757,G__43236_43758,G__43237_43759,G__43238_43760));
var G__43240_43765 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__43241_43766 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43242_43767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43243_43768 = ((function (G__43240_43765,G__43241_43766,G__43242_43767){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__43240_43765,G__43241_43766,G__43242_43767){
return (function (p1__43239_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__43239_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__43239_SHARP_)));
});})(G__43240_43765,G__43241_43766,G__43242_43767))
,traces);
});})(G__43240_43765,G__43241_43766,G__43242_43767))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43240_43765,G__43241_43766,G__43242_43767,G__43243_43768) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43240_43765,G__43241_43766,G__43242_43767,G__43243_43768));
var G__43244_43769 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__43245_43770 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43246_43771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__43247_43772 = ((function (G__43244_43769,G__43245_43770,G__43246_43771){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__43244_43769,G__43245_43770,G__43246_43771))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43244_43769,G__43245_43770,G__43246_43771,G__43247_43772) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43244_43769,G__43245_43770,G__43246_43771,G__43247_43772));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__43254 = arguments.length;
switch (G__43254) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___43774 = arguments.length;
var i__4731__auto___43775 = (0);
while(true){
if((i__4731__auto___43775 < len__4730__auto___43774)){
args_arr__4751__auto__.push((arguments[i__4731__auto___43775]));

var G__43776 = (i__4731__auto___43775 + (1));
i__4731__auto___43775 = G__43776;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq43251){
var G__43252 = cljs.core.first(seq43251);
var seq43251__$1 = cljs.core.next(seq43251);
var G__43253 = cljs.core.first(seq43251__$1);
var seq43251__$2 = cljs.core.next(seq43251__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43252,G__43253,seq43251__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__43259_43779 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__43260_43780 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43261_43781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__43262_43782 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43263_43783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43264_43784 = ((function (G__43259_43779,G__43260_43780,G__43261_43781,G__43262_43782,G__43263_43783){
return (function (p__43265,p__43266){
var vec__43267 = p__43265;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43267,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43267,(1),null);
var vec__43270 = p__43266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43270,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43270,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__43273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43273,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43273,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__43259_43779,G__43260_43780,G__43261_43781,G__43262_43782,G__43263_43783))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43259_43779,G__43260_43780,G__43261_43781,G__43262_43782,G__43263_43783,G__43264_43784) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43259_43779,G__43260_43780,G__43261_43781,G__43262_43782,G__43263_43783,G__43264_43784));
var G__43277_43790 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__43278_43791 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43279_43792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__43280_43793 = ((function (G__43277_43790,G__43278_43791,G__43279_43792){
return (function (match){
var map__43281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__43281__$1 = (((((!((map__43281 == null))))?(((((map__43281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43281):map__43281);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__43277_43790,G__43278_43791,G__43279_43792))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43277_43790,G__43278_43791,G__43279_43792,G__43280_43793) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43277_43790,G__43278_43791,G__43279_43792,G__43280_43793));
var G__43287_43803 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__43288_43804 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43289_43805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43290_43806 = ((function (G__43287_43803,G__43288_43804,G__43289_43805){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__43287_43803,G__43288_43804,G__43289_43805))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43287_43803,G__43288_43804,G__43289_43805,G__43290_43806) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43287_43803,G__43288_43804,G__43289_43805,G__43290_43806));
var G__43299_43810 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__43300_43811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43301_43812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43302_43813 = ((function (G__43299_43810,G__43300_43811,G__43301_43812){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__43299_43810,G__43300_43811,G__43301_43812))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43299_43810,G__43300_43811,G__43301_43812,G__43302_43813) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43299_43810,G__43300_43811,G__43301_43812,G__43302_43813));
var G__43303_43818 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__43304_43819 = ((function (G__43303_43818){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43303_43818))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43303_43818,G__43304_43819) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43303_43818,G__43304_43819));
var G__43305_43820 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__43306_43821 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43307_43822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43308_43823 = ((function (G__43305_43820,G__43306_43821,G__43307_43822){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__43305_43820,G__43306_43821,G__43307_43822))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43305_43820,G__43306_43821,G__43307_43822,G__43308_43823) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43305_43820,G__43306_43821,G__43307_43822,G__43308_43823));
var G__43309_43824 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__43310_43825 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43311_43826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43312_43827 = ((function (G__43309_43824,G__43310_43825,G__43311_43826){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__43309_43824,G__43310_43825,G__43311_43826))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43309_43824,G__43310_43825,G__43311_43826,G__43312_43827) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43309_43824,G__43310_43825,G__43311_43826,G__43312_43827));
var G__43313_43828 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__43314_43829 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43315_43830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__43316_43831 = ((function (G__43313_43828,G__43314_43829,G__43315_43830){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__43313_43828,G__43314_43829,G__43315_43830))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43313_43828,G__43314_43829,G__43315_43830,G__43316_43831) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43313_43828,G__43314_43829,G__43315_43830,G__43316_43831));
var G__43317_43832 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__43318_43833 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43319_43834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__43320_43835 = ((function (G__43317_43832,G__43318_43833,G__43319_43834){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__43317_43832,G__43318_43833,G__43319_43834))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43317_43832,G__43318_43833,G__43319_43834,G__43320_43835) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43317_43832,G__43318_43833,G__43319_43834,G__43320_43835));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__43321_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__43321_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__43322){
return cljs.core.coll_QMARK_(G__43322);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__43323){
return cljs.core.map_QMARK_(G__43323);
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__43323){
return cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__43323){
return ((cljs.core.map_QMARK_(G__43323)) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__43323,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__43337){
return cljs.core.coll_QMARK_(G__43337);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__43340 = sub_type;
var G__43340__$1 = (((G__43340 instanceof cljs.core.Keyword))?G__43340.fqn:null);
switch (G__43340__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__43865 = (exp - (1));
var G__43866 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__43867 = cljs.core.rest(order__$1);
exp = G__43865;
total = G__43866;
order__$1 = G__43867;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__43342 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__43342__$1 = (((G__43342 instanceof cljs.core.Keyword))?G__43342.fqn:null);
switch (G__43342__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__43343,p__43344){
var vec__43345 = p__43343;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(1),null);
var vec__43348 = p__43344;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43348,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__43345,sub_info,sub_state,vec__43348,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__43345,sub_info,sub_state,vec__43348,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__43345,sub_info,sub_state,vec__43348,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__43345,sub_info,sub_state,vec__43348,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__43351_43889 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__43352_43890 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43353_43891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__43354_43892 = ((function (G__43351_43889,G__43352_43890,G__43353_43891){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__43351_43889,G__43352_43890,G__43353_43891))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43351_43889,G__43352_43890,G__43353_43891,G__43354_43892) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43351_43889,G__43352_43890,G__43353_43891,G__43354_43892));
var G__43355_43894 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__43356_43895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43357_43896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__43358_43897 = ((function (G__43355_43894,G__43356_43895,G__43357_43896){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__43355_43894,G__43356_43895,G__43357_43896))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43355_43894,G__43356_43895,G__43357_43896,G__43358_43897) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43355_43894,G__43356_43895,G__43357_43896,G__43358_43897));
var G__43361_43901 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__43362_43902 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43363_43903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__43364_43904 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43365_43905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__43366_43906 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43361_43901,G__43362_43902,G__43363_43903,G__43364_43904,G__43365_43905,G__43366_43906) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43361_43901,G__43362_43902,G__43363_43903,G__43364_43904,G__43365_43905,G__43366_43906));
var G__43370_43908 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__43371_43909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43372_43910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__43373_43911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43374_43912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__43375_43913 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43370_43908,G__43371_43909,G__43372_43910,G__43373_43911,G__43374_43912,G__43375_43913) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43370_43908,G__43371_43909,G__43372_43910,G__43373_43911,G__43374_43912,G__43375_43913));
var G__43376_43918 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__43377_43919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43378_43920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__43379_43921 = ((function (G__43376_43918,G__43377_43919,G__43378_43920){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__43376_43918,G__43377_43919,G__43378_43920))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43376_43918,G__43377_43919,G__43378_43920,G__43379_43921) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43376_43918,G__43377_43919,G__43378_43920,G__43379_43921));
var G__43380_43926 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__43381_43927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43382_43928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__43383_43929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43384_43930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__43385_43931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43386_43932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__43387_43933 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43388_43934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__43389_43935 = ((function (G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934){
return (function (p__43390){
var vec__43391 = p__43390;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43391,(3),null);
var compare_fn = ((function (vec__43391,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__43391,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934))
;
var G__43394 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__43394__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__43394):G__43394);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__43394,G__43394__$1,compare_fn,vec__43391,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934){
return (function (p__43395){
var map__43396 = p__43395;
var map__43396__$1 = (((((!((map__43396 == null))))?(((((map__43396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43396):map__43396);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4131__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__43394,G__43394__$1,compare_fn,vec__43391,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934))
,G__43394__$1);
} else {
return G__43394__$1;
}
});})(G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934,G__43389_43935) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43380_43926,G__43381_43927,G__43382_43928,G__43383_43929,G__43384_43930,G__43385_43931,G__43386_43932,G__43387_43933,G__43388_43934,G__43389_43935));
var G__43402_43956 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__43403_43957 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43404_43958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__43405_43959 = ((function (G__43402_43956,G__43403_43957,G__43404_43958){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__43402_43956,G__43403_43957,G__43404_43958))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43402_43956,G__43403_43957,G__43404_43958,G__43405_43959) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43402_43956,G__43403_43957,G__43404_43958,G__43405_43959));
var G__43406_43960 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__43407_43961 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43408_43962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__43409_43963 = ((function (G__43406_43960,G__43407_43961,G__43408_43962){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__43406_43960,G__43407_43961,G__43408_43962))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43406_43960,G__43407_43961,G__43408_43962,G__43409_43963) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43406_43960,G__43407_43961,G__43408_43962,G__43409_43963));
var G__43410_43968 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__43411_43969 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43412_43970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__43413_43971 = ((function (G__43410_43968,G__43411_43969,G__43412_43970){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__43410_43968,G__43411_43969,G__43412_43970))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43410_43968,G__43411_43969,G__43412_43970,G__43413_43971) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43410_43968,G__43411_43969,G__43412_43970,G__43413_43971));
var G__43414_43976 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__43415_43977 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43416_43978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__43417_43979 = ((function (G__43414_43976,G__43415_43977,G__43416_43978){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__43414_43976,G__43415_43977,G__43416_43978))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43414_43976,G__43415_43977,G__43416_43978,G__43417_43979) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43414_43976,G__43415_43977,G__43416_43978,G__43417_43979));
var G__43418_43983 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__43419_43984 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43420_43985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__43421_43986 = ((function (G__43418_43983,G__43419_43984,G__43420_43985){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__43418_43983,G__43419_43984,G__43420_43985))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43418_43983,G__43419_43984,G__43420_43985,G__43421_43986) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43418_43983,G__43419_43984,G__43420_43985,G__43421_43986));
var G__43422_43993 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__43423_43994 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43424_43995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__43425_43996 = ((function (G__43422_43993,G__43423_43994,G__43424_43995){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__43422_43993,G__43423_43994,G__43424_43995))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43422_43993,G__43423_43994,G__43424_43995,G__43425_43996) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43422_43993,G__43423_43994,G__43424_43995,G__43425_43996));
var G__43426_44000 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__43427_44001 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43428_44002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__43429_44003 = ((function (G__43426_44000,G__43427_44001,G__43428_44002){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__43426_44000,G__43427_44001,G__43428_44002))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43426_44000,G__43427_44001,G__43428_44002,G__43429_44003) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43426_44000,G__43427_44001,G__43428_44002,G__43429_44003));
var G__43432_44007 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__43433_44008 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43434_44009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__43435_44010 = ((function (G__43432_44007,G__43433_44008,G__43434_44009){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__43432_44007,G__43433_44008,G__43434_44009))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43432_44007,G__43433_44008,G__43434_44009,G__43435_44010) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43432_44007,G__43433_44008,G__43434_44009,G__43435_44010));
var G__43436_44013 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__43437_44014 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43438_44015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__43439_44016 = ((function (G__43436_44013,G__43437_44014,G__43438_44015){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__43436_44013,G__43437_44014,G__43438_44015))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43436_44013,G__43437_44014,G__43438_44015,G__43439_44016) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43436_44013,G__43437_44014,G__43438_44015,G__43439_44016));
var G__43440_44020 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__43441_44021 = ((function (G__43440_44020){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43440_44020))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43440_44020,G__43441_44021) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43440_44020,G__43441_44021));
var G__43443_44023 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__43444_44024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43445_44025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__43446_44026 = ((function (G__43443_44023,G__43444_44024,G__43445_44025){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__43443_44023,G__43444_44024,G__43445_44025){
return (function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5739__auto__,G__43443_44023,G__43444_44024,G__43445_44025){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5739__auto__,G__43443_44023,G__43444_44024,G__43445_44025))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__43443_44023,G__43444_44024,G__43445_44025))
,traces);
});})(G__43443_44023,G__43444_44024,G__43445_44025))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43443_44023,G__43444_44024,G__43445_44025,G__43446_44026) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43443_44023,G__43444_44024,G__43445_44025,G__43446_44026));
var G__43447_44039 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__43448_44040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43449_44041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__43450_44042 = ((function (G__43447_44039,G__43448_44040,G__43449_44041){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__43447_44039,G__43448_44040,G__43449_44041))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43447_44039,G__43448_44040,G__43449_44041,G__43450_44042) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43447_44039,G__43448_44040,G__43449_44041,G__43450_44042));
var G__43451_44043 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__43452_44044 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43453_44045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__43454_44046 = ((function (G__43451_44043,G__43452_44044,G__43453_44045){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__43451_44043,G__43452_44044,G__43453_44045))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43451_44043,G__43452_44044,G__43453_44045,G__43454_44046) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43451_44043,G__43452_44044,G__43453_44045,G__43454_44046));
var G__43457_44050 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__43458_44051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43459_44052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__43460_44053 = ((function (G__43457_44050,G__43458_44051,G__43459_44052){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__43457_44050,G__43458_44051,G__43459_44052))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43457_44050,G__43458_44051,G__43459_44052,G__43460_44053) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43457_44050,G__43458_44051,G__43459_44052,G__43460_44053));
var G__43462_44059 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__43463_44060 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43464_44061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__43465_44062 = ((function (G__43462_44059,G__43463_44060,G__43464_44061){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__43462_44059,G__43463_44060,G__43464_44061))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43462_44059,G__43463_44060,G__43464_44061,G__43465_44062) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43462_44059,G__43463_44060,G__43464_44061,G__43465_44062));
var G__43466_44064 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__43467_44065 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43468_44066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__43469_44067 = ((function (G__43466_44064,G__43467_44065,G__43468_44066){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__43466_44064,G__43467_44065,G__43468_44066))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43466_44064,G__43467_44065,G__43468_44066,G__43469_44067) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43466_44064,G__43467_44065,G__43468_44066,G__43469_44067));
var G__43470_44068 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__43471_44069 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43472_44070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__43473_44071 = ((function (G__43470_44068,G__43471_44069,G__43472_44070){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__43470_44068,G__43471_44069,G__43472_44070))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43470_44068,G__43471_44069,G__43472_44070,G__43473_44071) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43470_44068,G__43471_44069,G__43472_44070,G__43473_44071));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__43474_44072 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__43475_44073 = ((function (G__43474_44072){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__43474_44072))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43474_44072,G__43475_44073) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43474_44072,G__43475_44073));
var G__43478_44075 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__43479_44076 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43480_44077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__43481_44078 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43482_44079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__43483_44080 = ((function (G__43478_44075,G__43479_44076,G__43480_44077,G__43481_44078,G__43482_44079){
return (function (p__43485,_){
var vec__43486 = p__43485;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43486,(1),null);
var G__43489 = (window_width / char_width);
return Math.ceil(G__43489);
});})(G__43478_44075,G__43479_44076,G__43480_44077,G__43481_44078,G__43482_44079))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__43478_44075,G__43479_44076,G__43480_44077,G__43481_44078,G__43482_44079,G__43483_44080) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43478_44075,G__43479_44076,G__43480_44077,G__43481_44078,G__43482_44079,G__43483_44080));
var G__43490_44085 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__43491_44086 = ((function (G__43490_44085){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43490_44085))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43490_44085,G__43491_44086) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43490_44085,G__43491_44086));
var G__43492_44087 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__43493_44088 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43494_44089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__43495_44090 = ((function (G__43492_44087,G__43493_44088,G__43494_44089){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__43492_44087,G__43493_44088,G__43494_44089))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43492_44087,G__43493_44088,G__43494_44089,G__43495_44090) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43492_44087,G__43493_44088,G__43494_44089,G__43495_44090));
var G__43499_44095 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__43500_44096 = ((function (G__43499_44095){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__43499_44095))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43499_44095,G__43500_44096) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43499_44095,G__43500_44096));
var G__43501_44097 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__43502_44098 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43503_44099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__43504_44100 = ((function (G__43501_44097,G__43502_44098,G__43503_44099){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__43501_44097,G__43502_44098,G__43503_44099))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43501_44097,G__43502_44098,G__43503_44099,G__43504_44100) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__43501_44097,G__43502_44098,G__43503_44099,G__43504_44100));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
