// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('rock_paper_scissors.rps_test');
goog.require('rock_paper_scissors.events_test');
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__3730__auto__){
jx.reporter.karma.start.call(null,tc__3730__auto__,3);

return cljs.test.run_block.call(null,(function (){var env3738 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary3739 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3738,summary3739){
return (function (){
cljs.test.set_env_BANG_.call(null,env3738);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1095__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__1095__auto__,env3738,summary3739){
return (function (){
if((env__1095__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),rock_paper_scissors.events_test.cljs_test_once_fixtures);

return null;
});})(env__1095__auto__,env3738,summary3739))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_initialize_db;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-initialize-db","rock-paper-scissors.events-test/test-initialize-db",-965563143,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-initialize-db","test-initialize-db",-242294463,null),"test/cljs/rock_paper_scissors/events_test.cljs",30,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_initialize_db)?rock_paper_scissors.events_test.test_initialize_db.cljs$lang$test:null)])),new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_next_game;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-next-game","rock-paper-scissors.events-test/test-next-game",1426881325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-next-game","test-next-game",1239436981,null),"test/cljs/rock_paper_scissors/events_test.cljs",26,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_next_game)?rock_paper_scissors.events_test.test_next_game.cljs$lang$test:null)])),new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_select_your_hand;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-select-your-hand","rock-paper-scissors.events-test/test-select-your-hand",1215289121,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-select-your-hand","test-select-your-hand",1594628281,null),"test/cljs/rock_paper_scissors/events_test.cljs",33,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_select_your_hand)?rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__1095__auto__,env3738,summary3739){
return (function (){
if((env__1095__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__1095__auto__,env3738,summary3739))
], null));
})());
});})(env3738,summary3739))
,((function (env3738,summary3739){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env3738,summary3739))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3738,summary3739){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary3739,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary3739),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env3738,summary3739))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3738,summary3739){
return (function (){
cljs.test.set_env_BANG_.call(null,env3738);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary3739));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary3739),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env3738,summary3739))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env3740 = cljs.test.empty_env.call(null);
var summary3741 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3740,summary3741){
return (function (){
cljs.test.set_env_BANG_.call(null,env3740);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__1095__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__1095__auto__,env3740,summary3741){
return (function (){
if((env__1095__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),rock_paper_scissors.events_test.cljs_test_once_fixtures);

return null;
});})(env__1095__auto__,env3740,summary3741))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_initialize_db;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-initialize-db","rock-paper-scissors.events-test/test-initialize-db",-965563143,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-initialize-db","test-initialize-db",-242294463,null),"test/cljs/rock_paper_scissors/events_test.cljs",30,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_initialize_db)?rock_paper_scissors.events_test.test_initialize_db.cljs$lang$test:null)])),new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_next_game;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-next-game","rock-paper-scissors.events-test/test-next-game",1426881325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-next-game","test-next-game",1239436981,null),"test/cljs/rock_paper_scissors/events_test.cljs",26,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_next_game)?rock_paper_scissors.events_test.test_next_game.cljs$lang$test:null)])),new cljs.core.Var(function(){return rock_paper_scissors.events_test.test_select_your_hand;},new cljs.core.Symbol("rock-paper-scissors.events-test","test-select-your-hand","rock-paper-scissors.events-test/test-select-your-hand",1215289121,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Symbol(null,"test-select-your-hand","test-select-your-hand",1594628281,null),"test/cljs/rock_paper_scissors/events_test.cljs",33,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(rock_paper_scissors.events_test.test_select_your_hand)?rock_paper_scissors.events_test.test_select_your_hand.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__1095__auto__,env3740,summary3741){
return (function (){
if((env__1095__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__1095__auto__,env3740,summary3741))
], null));
})());
});})(env3740,summary3741))
,((function (env3740,summary3741){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"rock-paper-scissors.events-test","rock-paper-scissors.events-test",-764542473,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env3740,summary3741))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3740,summary3741){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary3741,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary3741),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env3740,summary3741))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3740,summary3741){
return (function (){
cljs.test.set_env_BANG_.call(null,env3740);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary3741));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary3741),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env3740,summary3741))
], null));
})());
})));

//# sourceMappingURL=runner.js.map
