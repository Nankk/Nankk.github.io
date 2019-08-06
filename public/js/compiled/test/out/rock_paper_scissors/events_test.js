// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.events_test');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.test');
goog.require('day8.re_frame.test');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('rock_paper_scissors.cofx');
goog.require('rock_paper_scissors.db');
goog.require('rock_paper_scissors.db.specs');
goog.require('rock_paper_scissors.events');
goog.require('rock_paper_scissors.rps');
goog.require('rock_paper_scissors.rps.specs');
goog.require('rock_paper_scissors.subs');
rock_paper_scissors.events_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
var opts2612 = null;
return cljs.core.reduce.call(null,((function (opts2612){
return (function (ret__890__auto__,p__2613){
var vec__2614 = p__2613;
var ___891__auto__ = cljs.core.nth.call(null,vec__2614,(0),null);
var f__892__auto__ = cljs.core.nth.call(null,vec__2614,(1),null);
var sym__893__auto__ = f__892__auto__.call(null);
var G__2617 = ret__890__auto__;
if(cljs.core.truth_(sym__893__auto__)){
return cljs.core.conj.call(null,G__2617,sym__893__auto__);
} else {
return G__2617;
}
});})(opts2612))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts2612){
return (function (p1__889__894__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts2612).call(null,cljs.core.first.call(null,p1__889__894__auto__));
});})(opts2612))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts2612){
return (function (){
var checked__856__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),new cljs.core.Var(function(){return rock_paper_scissors.rps.fight;},new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"fight","fight",-1387740168,null),"src/cljs/rock_paper_scissors/rps.cljs",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"you","you",1098870216,null),new cljs.core.Symbol(null,"enemy","enemy",684059480,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.fight)?rock_paper_scissors.rps.fight.cljs$lang$test:null)])),opts2612);
if(cljs.core.truth_(checked__856__auto__)){
rock_paper_scissors.rps.fight = checked__856__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null);
});})(opts2612))
,((function (opts2612){
return (function (){
var checked__856__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),new cljs.core.Var(function(){return rock_paper_scissors.rps._LT__hand;},new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"<-hand","<-hand",-1093822832,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(3),(3),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hand","hand",-1862833836,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps._LT__hand)?rock_paper_scissors.rps._LT__hand.cljs$lang$test:null)])),opts2612);
if(cljs.core.truth_(checked__856__auto__)){
rock_paper_scissors.rps._LT__hand = checked__856__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null);
});})(opts2612))
,((function (opts2612){
return (function (){
var checked__856__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null),new cljs.core.Var(function(){return rock_paper_scissors.rps.__GT_hand;},new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"->hand","->hand",1082471254,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.__GT_hand)?rock_paper_scissors.rps.__GT_hand.cljs$lang$test:null)])),opts2612);
if(cljs.core.truth_(checked__856__auto__)){
rock_paper_scissors.rps.__GT_hand = checked__856__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null);
});})(opts2612))
], null)))));
})], null)], null);
rock_paper_scissors.events_test.test_fixtures = (function rock_paper_scissors$events_test$test_fixtures(){
return re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("rock-paper-scissors.db.specs","db","rock-paper-scissors.db.specs/db",773521553),value)){
} else {
throw cljs.core.ex_info.call(null,"db spec check failed",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("rock-paper-scissors.db.specs","db","rock-paper-scissors.db.specs/db",773521553),value));
}

if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
});
rock_paper_scissors.events_test.test_initialize_db = (function rock_paper_scissors$events_test$test_initialize_db(){
return cljs.test.test_var.call(null,rock_paper_scissors.events_test.test_initialize_db.cljs$lang$var);
});
rock_paper_scissors.events_test.test_initialize_db.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
rock_paper_scissors.events_test.test_fixtures.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677)], null));

try{var value__985__auto___2620 = new cljs.core.Keyword("rock-paper-scissors.db","start","rock-paper-scissors.db/start",1534914439);
if(cljs.core.truth_(value__985__auto___2620)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","start","rock-paper-scissors.db/start",1534914439),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2620,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","start","rock-paper-scissors.db/start",1534914439),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2620,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}

}catch (e2618){var t__1027__auto___2621 = e2618;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","start","rock-paper-scissors.db/start",1534914439),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2621,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}
try{var value__985__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)], null);
if(cljs.core.truth_(value__985__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)], null),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)], null),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null)))], null));
}

return value__985__auto__;
}catch (e2619){var t__1027__auto__ = e2619;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"you","you",-541661311),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)], null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy","rock-paper-scissors.subs/you-and-enemy",-217269826)], null)))], null));
}}));
});

rock_paper_scissors.events_test.test_initialize_db.cljs$lang$var = new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_initialize_db;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-initialize-db","rock-paper-scissors.events-test/test-initialize-db",-965563143,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-initialize-db","test-initialize-db",-242294463,null),"test/cljs/rock_paper_scissors/events_test.cljs",30,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_initialize_db)?rock_paper_scissors.events_test.test_initialize_db.cljs$lang$test:null)]));
rock_paper_scissors.events_test.test_next_game = (function rock_paper_scissors$events_test$test_next_game(){
return cljs.test.test_var.call(null,rock_paper_scissors.events_test.test_next_game.cljs$lang$var);
});
rock_paper_scissors.events_test.test_next_game.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
rock_paper_scissors.events_test.test_fixtures.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));

try{var value__985__auto__ = new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663);
if(cljs.core.truth_(value__985__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}

return value__985__auto__;
}catch (e2622){var t__1027__auto__ = e2622;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","now-playing","rock-paper-scissors.db/now-playing",-904585663),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}}));
});

rock_paper_scissors.events_test.test_next_game.cljs$lang$var = new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_next_game;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-next-game","rock-paper-scissors.events-test/test-next-game",1426881325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-next-game","test-next-game",1239436981,null),"test/cljs/rock_paper_scissors/events_test.cljs",26,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_next_game)?rock_paper_scissors.events_test.test_next_game.cljs$lang$test:null)]));
rock_paper_scissors.events_test.test_select_your_hand = (function rock_paper_scissors$events_test$test_select_your_hand(){
return cljs.test.test_var.call(null,rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$var);
});
rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_.call(null,(function (){
rock_paper_scissors.events_test.test_fixtures.call(null);

re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("rock-paper-scissors.cofx","select-enemy-hand","rock-paper-scissors.cofx/select-enemy-hand",630497030),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"enemy-hand","enemy-hand",1886778452),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450));
}));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677)], null));

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"draw");

try{re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)], null));

try{var value__985__auto___2635 = new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889);
if(cljs.core.truth_(value__985__auto___2635)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2635,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2635,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}

}catch (e2623){var t__1027__auto___2636 = e2623;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2636,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}
try{var value__985__auto___2637 = "rock(YOU) VS rock(ENEMY)";
if(cljs.core.truth_(value__985__auto___2637)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"rock(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2637,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"rock(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2637,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}

}catch (e2624){var t__1027__auto___2638 = e2624;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"rock(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2638,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}
try{var value__985__auto___2639 = new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511);
if(cljs.core.truth_(value__985__auto___2639)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2639,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2639,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}

}catch (e2625){var t__1027__auto___2640 = e2625;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2640,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}
try{var value__985__auto___2641 = "gray";
if(cljs.core.truth_(value__985__auto___2641)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"gray",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2641,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"gray",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2641,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}

}catch (e2626){var t__1027__auto___2642 = e2626;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"gray",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2642,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"win");

try{re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010)], null));

try{var value__985__auto___2643 = new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889);
if(cljs.core.truth_(value__985__auto___2643)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2643,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2643,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}

}catch (e2627){var t__1027__auto___2644 = e2627;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2644,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}
try{var value__985__auto___2645 = "paper(YOU) VS rock(ENEMY)";
if(cljs.core.truth_(value__985__auto___2645)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"paper(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2645,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"paper(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2645,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}

}catch (e2628){var t__1027__auto___2646 = e2628;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"paper(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2646,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}
try{var value__985__auto___2647 = new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864);
if(cljs.core.truth_(value__985__auto___2647)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2647,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2647,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}

}catch (e2629){var t__1027__auto___2648 = e2629;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2648,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}
try{var value__985__auto___2649 = "red";
if(cljs.core.truth_(value__985__auto___2649)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"red",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2649,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"red",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2649,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}

}catch (e2630){var t__1027__auto___2650 = e2630;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"red",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2650,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"lose");

try{re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","next-game","rock-paper-scissors.events/next-game",-1821481087)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","select-your-hand","rock-paper-scissors.events/select-your-hand",-1430109321),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625)], null));

try{var value__985__auto___2651 = new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889);
if(cljs.core.truth_(value__985__auto___2651)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2651,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2651,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}

}catch (e2631){var t__1027__auto___2652 = e2631;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.db","over","rock-paper-scissors.db/over",-1109188889),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2652,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","scene","rock-paper-scissors.subs/scene",-1764226914)], null)))], null));
}
try{var value__985__auto___2653 = "scissors(YOU) VS rock(ENEMY)";
if(cljs.core.truth_(value__985__auto___2653)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"scissors(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2653,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"scissors(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2653,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}

}catch (e2632){var t__1027__auto___2654 = e2632;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"scissors(YOU) VS rock(ENEMY)",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2654,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","you-and-enemy-hands","rock-paper-scissors.subs/you-and-enemy-hands",-80195866)], null)))], null));
}
try{var value__985__auto___2655 = new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341);
if(cljs.core.truth_(value__985__auto___2655)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2655,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto___2655,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}

}catch (e2633){var t__1027__auto___2656 = e2633;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto___2656,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","fight-result","rock-paper-scissors.subs/fight-result",1834156193)], null)))], null));
}
try{var value__985__auto__ = "blue";
if(cljs.core.truth_(value__985__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),"blue",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),"blue",new cljs.core.Keyword(null,"actual","actual",107306363),value__985__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}

return value__985__auto__;
}catch (e2634){var t__1027__auto__ = e2634;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"blue",new cljs.core.Keyword(null,"actual","actual",107306363),t__1027__auto__,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.subs","result-color","rock-paper-scissors.subs/result-color",-1947577462)], null)))], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));
});

rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$var = new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_select_your_hand;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-select-your-hand","rock-paper-scissors.events-test/test-select-your-hand",1215289121,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-select-your-hand","test-select-your-hand",1594628281,null),"test/cljs/rock_paper_scissors/events_test.cljs",33,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_select_your_hand)?rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$test:null)]));

//# sourceMappingURL=events_test.js.map
