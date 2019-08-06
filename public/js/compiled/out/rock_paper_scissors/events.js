// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.db');
goog.require('rock_paper_scissors.cofx');
goog.require('rock_paper_scissors.rps');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677),(function (_,___$1){
return rock_paper_scissors.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("rock-paper-scissors.cofx","select-enemy-hand","rock-paper-scissors.cofx/select-enemy-hand",630497030))], null),(function (p__37912,p__37913){
var map__37914 = p__37912;
var map__37914__$1 = (((((!((map__37914 == null))))?(((((map__37914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37914):map__37914);
var db = cljs.core.get.call(null,map__37914__$1,new cljs.core.Keyword(null,"db","db",993250759));
var enemy_hand = cljs.core.get.call(null,map__37914__$1,new cljs.core.Keyword(null,"enemy-hand","enemy-hand",1886778452));
var vec__37915 = p__37913;
var _ = cljs.core.nth.call(null,vec__37915,(0),null);
var h = cljs.core.nth.call(null,vec__37915,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"you","you",-541661311),h,new cljs.core.Keyword(null,"enemy","enemy",-956472047),enemy_hand,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj.call(null,db.call(null,new cljs.core.Keyword(null,"results","results",-1134170113)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"you","you",-541661311),h,new cljs.core.Keyword(null,"enemy","enemy",-956472047),enemy_hand,new cljs.core.Keyword(null,"result","result",1415092211),rock_paper_scissors.rps.fight.call(null,h,enemy_hand)], null)))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rock-paper-scissors.events","move-page-to","rock-paper-scissors.events/move-page-to",883727750),(function (db,p__37919){
var vec__37920 = p__37919;
var _ = cljs.core.nth.call(null,vec__37920,(0),null);
var page_key = cljs.core.nth.call(null,vec__37920,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page_key);
}));

//# sourceMappingURL=events.js.map?rel=1564651417671
