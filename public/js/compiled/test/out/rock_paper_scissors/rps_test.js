// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.rps_test');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.test');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.properties');
goog.require('rock_paper_scissors.rps');
goog.require('rock_paper_scissors.rps.specs');
rock_paper_scissors.rps_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
var opts3639 = null;
return cljs.core.reduce.call(null,((function (opts3639){
return (function (ret__1714__auto__,p__3640){
var vec__3641 = p__3640;
var ___1715__auto__ = cljs.core.nth.call(null,vec__3641,(0),null);
var f__1716__auto__ = cljs.core.nth.call(null,vec__3641,(1),null);
var sym__1717__auto__ = f__1716__auto__.call(null);
var G__3644 = ret__1714__auto__;
if(cljs.core.truth_(sym__1717__auto__)){
return cljs.core.conj.call(null,G__3644,sym__1717__auto__);
} else {
return G__3644;
}
});})(opts3639))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts3639){
return (function (p1__1713__1718__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts3639).call(null,cljs.core.first.call(null,p1__1713__1718__auto__));
});})(opts3639))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts3639){
return (function (){
var checked__1680__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),new cljs.core.Var(function(){return rock_paper_scissors.rps.fight;},new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"fight","fight",-1387740168,null),"src/cljs/rock_paper_scissors/rps.cljs",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"you","you",1098870216,null),new cljs.core.Symbol(null,"enemy","enemy",684059480,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.fight)?rock_paper_scissors.rps.fight.cljs$lang$test:null)])),opts3639);
if(cljs.core.truth_(checked__1680__auto__)){
rock_paper_scissors.rps.fight = checked__1680__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null);
});})(opts3639))
,((function (opts3639){
return (function (){
var checked__1680__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),new cljs.core.Var(function(){return rock_paper_scissors.rps._LT__hand;},new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"<-hand","<-hand",-1093822832,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(3),(3),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hand","hand",-1862833836,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps._LT__hand)?rock_paper_scissors.rps._LT__hand.cljs$lang$test:null)])),opts3639);
if(cljs.core.truth_(checked__1680__auto__)){
rock_paper_scissors.rps._LT__hand = checked__1680__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null);
});})(opts3639))
,((function (opts3639){
return (function (){
var checked__1680__auto__ = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",2069539054,null),"resources/public/js/compiled/test/out/cljs/spec/test/alpha.cljs",(21),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])).call(null,new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null),new cljs.core.Var(function(){return rock_paper_scissors.rps.__GT_hand;},new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"->hand","->hand",1082471254,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.__GT_hand)?rock_paper_scissors.rps.__GT_hand.cljs$lang$test:null)])),opts3639);
if(cljs.core.truth_(checked__1680__auto__)){
rock_paper_scissors.rps.__GT_hand = checked__1680__auto__;
} else {
}

return new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null);
});})(opts3639))
], null)))));
})], null)], null);
rock_paper_scissors.rps_test.test_fight = (function rock_paper_scissors$rps_test$test_fight(){
return cljs.test.test_var.call(null,rock_paper_scissors.rps_test.test_fight.cljs$lang$var);
});
rock_paper_scissors.rps_test.test_fight.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"rock-paper-scissors");

try{try{var values__1472__auto___3648 = (new cljs.core.List(null,new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),(new cljs.core.List(null,rock_paper_scissors.rps.fight.call(null,new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625)),null,(1),null)),(2),null));
var result__1473__auto___3649 = cljs.core.apply.call(null,cljs.core._EQ_,values__1472__auto___3648);
if(cljs.core.truth_(result__1473__auto___3649)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1472__auto___3648),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1472__auto___3648),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e3645){var t__1517__auto___3650 = e3645;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1517__auto___3650,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1472__auto___3651 = (new cljs.core.List(null,new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),(new cljs.core.List(null,rock_paper_scissors.rps.fight.call(null,new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450)),null,(1),null)),(2),null));
var result__1473__auto___3652 = cljs.core.apply.call(null,cljs.core._EQ_,values__1472__auto___3651);
if(cljs.core.truth_(result__1473__auto___3652)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1472__auto___3651),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1472__auto___3651),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e3646){var t__1517__auto___3653 = e3646;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625),new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1517__auto___3653,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1472__auto__ = (new cljs.core.List(null,new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),(new cljs.core.List(null,rock_paper_scissors.rps.fight.call(null,new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010)),null,(1),null)),(2),null));
var result__1473__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1472__auto__);
if(cljs.core.truth_(result__1473__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1472__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1472__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1473__auto__;
}catch (e3647){var t__1517__auto__ = e3647;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511),cljs.core.list(new cljs.core.Symbol("sut","fight","sut/fight",-1387627178,null),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010),new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1517__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

rock_paper_scissors.rps_test.test_fight.cljs$lang$var = new cljs.core.Var(function(){return rock_paper_scissors.rps_test.test_fight;},new cljs.core.Symbol("rock-paper-scissors.rps-test","test-fight","rock-paper-scissors.rps-test/test-fight",-317086540,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps-test","rock-paper-scissors.rps-test",-1709295745,null),new cljs.core.Symbol(null,"test-fight","test-fight",-110367812,null),"/home/nankk/Dropbox/cljs/rock-paper-scissors/test/cljs/rock_paper_scissors/rps_test.cljs",22,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.rps_test.test_fight)?rock_paper_scissors.rps_test.test_fight.cljs$lang$test:null)]));
rock_paper_scissors.rps_test.prop_test__LT__hand = (function rock_paper_scissors$rps_test$prop_test__LT__hand(var_args){
var G__3657 = arguments.length;
switch (G__3657) {
case 0:
return rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3666 = arguments.length;
var i__4731__auto___3667 = (0);
while(true){
if((i__4731__auto___3667 < len__4730__auto___3666)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3667]));

var G__3668 = (i__4731__auto___3667 + (1));
i__4731__auto___3667 = G__3668;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});
rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check.call(null,cljs.core.assoc.call(null,rock_paper_scissors.rps_test.prop_test__LT__hand.call(null),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"prop-test-<-hand","prop-test-<-hand",-1963574025,null))));
});

rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__3552__auto__ = clojure.test.check.clojure_test.process_options.call(null,(1000));
return cljs.core.apply.call(null,rock_paper_scissors.rps_test.prop_test__LT__hand,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__3552__auto__),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$core$IFn$_invoke$arity$variadic = (function (times__3553__auto__,p__3658){
var map__3659 = p__3658;
var map__3659__$1 = (((((!((map__3659 == null))))?(((((map__3659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3659):map__3659);
var quick_check_opts__3554__auto__ = map__3659__$1;
var options__3552__auto__ = cljs.core.merge.call(null,clojure.test.check.clojure_test.process_options.call(null,(1000)),quick_check_opts__3554__auto__);
return cljs.core.apply.call(null,clojure.test.check.quick_check,times__3553__auto__,cljs.core.vary_meta.call(null,(function (){var fspec = cljs.spec.alpha.get_spec.call(null,new cljs.core.Var(function(){return rock_paper_scissors.rps._LT__hand;},new cljs.core.Symbol("rock-paper-scissors.rps","<-hand","rock-paper-scissors.rps/<-hand",1569943369,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"<-hand","<-hand",-1093822832,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(3),(3),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hand","hand",-1862833836,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps._LT__hand)?rock_paper_scissors.rps._LT__hand.cljs$lang$test:null)])));
return clojure.test.check.properties.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fspec))], null),((function (fspec,options__3552__auto__,map__3659,map__3659__$1,quick_check_opts__3554__auto__){
return (function (p__3661){
var vec__3662 = p__3661;
var hand = cljs.core.nth.call(null,vec__3662,(0),null);
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fspec),rock_paper_scissors.rps._LT__hand.call(null,hand));
});})(fspec,options__3552__auto__,map__3659,map__3659__$1,quick_check_opts__3554__auto__))
);
})(),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"prop-test-<-hand","prop-test-<-hand",-1963574025,null)),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

/** @this {Function} */
rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$lang$applyTo = (function (seq3655){
var G__3656 = cljs.core.first.call(null,seq3655);
var seq3655__$1 = cljs.core.next.call(null,seq3655);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3656,seq3655__$1);
});

rock_paper_scissors.rps_test.prop_test__LT__hand.cljs$lang$maxFixedArity = (1);

rock_paper_scissors.rps_test.prop_test___GT_hand = (function rock_paper_scissors$rps_test$prop_test___GT_hand(var_args){
var G__3672 = arguments.length;
switch (G__3672) {
case 0:
return rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3681 = arguments.length;
var i__4731__auto___3682 = (0);
while(true){
if((i__4731__auto___3682 < len__4730__auto___3681)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3682]));

var G__3683 = (i__4731__auto___3682 + (1));
i__4731__auto___3682 = G__3683;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});
rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check.call(null,cljs.core.assoc.call(null,rock_paper_scissors.rps_test.prop_test___GT_hand.call(null),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"prop-test-->hand","prop-test-->hand",865207700,null))));
});

rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__3552__auto__ = clojure.test.check.clojure_test.process_options.call(null,(1000));
return cljs.core.apply.call(null,rock_paper_scissors.rps_test.prop_test___GT_hand,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__3552__auto__),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$core$IFn$_invoke$arity$variadic = (function (times__3553__auto__,p__3673){
var map__3674 = p__3673;
var map__3674__$1 = (((((!((map__3674 == null))))?(((((map__3674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3674):map__3674);
var quick_check_opts__3554__auto__ = map__3674__$1;
var options__3552__auto__ = cljs.core.merge.call(null,clojure.test.check.clojure_test.process_options.call(null,(1000)),quick_check_opts__3554__auto__);
return cljs.core.apply.call(null,clojure.test.check.quick_check,times__3553__auto__,cljs.core.vary_meta.call(null,(function (){var fspec = cljs.spec.alpha.get_spec.call(null,new cljs.core.Var(function(){return rock_paper_scissors.rps.__GT_hand;},new cljs.core.Symbol("rock-paper-scissors.rps","->hand","rock-paper-scissors.rps/->hand",-1520682563,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"->hand","->hand",1082471254,null),"src/cljs/rock_paper_scissors/rps.cljs",(13),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.__GT_hand)?rock_paper_scissors.rps.__GT_hand.cljs$lang$test:null)])));
return clojure.test.check.properties.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fspec))], null),((function (fspec,options__3552__auto__,map__3674,map__3674__$1,quick_check_opts__3554__auto__){
return (function (p__3676){
var vec__3677 = p__3676;
var num = cljs.core.nth.call(null,vec__3677,(0),null);
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fspec),rock_paper_scissors.rps.__GT_hand.call(null,num));
});})(fspec,options__3552__auto__,map__3674,map__3674__$1,quick_check_opts__3554__auto__))
);
})(),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"prop-test-->hand","prop-test-->hand",865207700,null)),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

/** @this {Function} */
rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$lang$applyTo = (function (seq3670){
var G__3671 = cljs.core.first.call(null,seq3670);
var seq3670__$1 = cljs.core.next.call(null,seq3670);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3671,seq3670__$1);
});

rock_paper_scissors.rps_test.prop_test___GT_hand.cljs$lang$maxFixedArity = (1);

rock_paper_scissors.rps_test.prop_test_fight = (function rock_paper_scissors$rps_test$prop_test_fight(var_args){
var G__3687 = arguments.length;
switch (G__3687) {
case 0:
return rock_paper_scissors.rps_test.prop_test_fight.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3696 = arguments.length;
var i__4731__auto___3697 = (0);
while(true){
if((i__4731__auto___3697 < len__4730__auto___3696)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3697]));

var G__3698 = (i__4731__auto___3697 + (1));
i__4731__auto___3697 = G__3698;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return rock_paper_scissors.rps_test.prop_test_fight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});
rock_paper_scissors.rps_test.prop_test_fight.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check.call(null,cljs.core.assoc.call(null,rock_paper_scissors.rps_test.prop_test_fight.call(null),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"prop-test-fight","prop-test-fight",1460724904,null))));
});

rock_paper_scissors.rps_test.prop_test_fight.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__3552__auto__ = clojure.test.check.clojure_test.process_options.call(null,(1000));
return cljs.core.apply.call(null,rock_paper_scissors.rps_test.prop_test_fight,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__3552__auto__),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

rock_paper_scissors.rps_test.prop_test_fight.cljs$core$IFn$_invoke$arity$variadic = (function (times__3553__auto__,p__3688){
var map__3689 = p__3688;
var map__3689__$1 = (((((!((map__3689 == null))))?(((((map__3689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3689):map__3689);
var quick_check_opts__3554__auto__ = map__3689__$1;
var options__3552__auto__ = cljs.core.merge.call(null,clojure.test.check.clojure_test.process_options.call(null,(1000)),quick_check_opts__3554__auto__);
return cljs.core.apply.call(null,clojure.test.check.quick_check,times__3553__auto__,cljs.core.vary_meta.call(null,(function (){var fspec = cljs.spec.alpha.get_spec.call(null,new cljs.core.Var(function(){return rock_paper_scissors.rps.fight;},new cljs.core.Symbol("rock-paper-scissors.rps","fight","rock-paper-scissors.rps/fight",1216465411,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.rps","rock-paper-scissors.rps",1624002646,null),new cljs.core.Symbol(null,"fight","fight",-1387740168,null),"src/cljs/rock_paper_scissors/rps.cljs",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"you","you",1098870216,null),new cljs.core.Symbol(null,"enemy","enemy",684059480,null)], null)),null,(cljs.core.truth_(rock_paper_scissors.rps.fight)?rock_paper_scissors.rps.fight.cljs$lang$test:null)])));
return clojure.test.check.properties.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fspec))], null),((function (fspec,options__3552__auto__,map__3689,map__3689__$1,quick_check_opts__3554__auto__){
return (function (p__3691){
var vec__3692 = p__3691;
var you = cljs.core.nth.call(null,vec__3692,(0),null);
var enemy = cljs.core.nth.call(null,vec__3692,(1),null);
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fspec),rock_paper_scissors.rps.fight.call(null,you,enemy));
});})(fspec,options__3552__auto__,map__3689,map__3689__$1,quick_check_opts__3554__auto__))
);
})(),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"prop-test-fight","prop-test-fight",1460724904,null)),cljs.core.apply.call(null,cljs.core.concat,options__3552__auto__));
});

/** @this {Function} */
rock_paper_scissors.rps_test.prop_test_fight.cljs$lang$applyTo = (function (seq3685){
var G__3686 = cljs.core.first.call(null,seq3685);
var seq3685__$1 = cljs.core.next.call(null,seq3685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3686,seq3685__$1);
});

rock_paper_scissors.rps_test.prop_test_fight.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=rps_test.js.map
