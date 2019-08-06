// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.db');
goog.require('rock_paper_scissors.cofx');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677),(function (_,___$1){
return rock_paper_scissors.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("rock-paper-scissors.cofx","select-enemy-hand","rock-paper-scissors.cofx/select-enemy-hand",630497030))], null),(function (p__4611,p__4612){
var map__4613 = p__4611;
var map__4613__$1 = (((((!((map__4613 == null))))?(((((map__4613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4613):map__4613);
var db = cljs.core.get.call(null,map__4613__$1,new cljs.core.Keyword(null,"db","db",993250759));
var enemy_hand = cljs.core.get.call(null,map__4613__$1,new cljs.core.Keyword(null,"enemy-hand","enemy-hand",1886778452));
var vec__4614 = p__4612;
var _ = cljs.core.nth.call(null,vec__4614,(0),null);
var h = cljs.core.nth.call(null,vec__4614,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"you","you",-541661311),h,new cljs.core.Keyword(null,"enemy","enemy",-956472047),enemy_hand,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889))], null);
}));

//# sourceMappingURL=events.js.map
