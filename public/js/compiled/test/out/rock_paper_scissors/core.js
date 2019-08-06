// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rock_paper_scissors.events');
goog.require('rock_paper_scissors.views');
goog.require('rock_paper_scissors.config');
rock_paper_scissors.core.dev_setup = (function rock_paper_scissors$core$dev_setup(){
if(rock_paper_scissors.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
rock_paper_scissors.core.mount_root = (function rock_paper_scissors$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rock_paper_scissors.views.main_panel], null),document.getElementById("app"));
});
rock_paper_scissors.core.init = (function rock_paper_scissors$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rock-paper-scissors.events","initialize-db","rock-paper-scissors.events/initialize-db",1903244677)], null));

rock_paper_scissors.core.dev_setup.call(null);

return rock_paper_scissors.core.mount_root.call(null);
});
goog.exportSymbol('rock_paper_scissors.core.init', rock_paper_scissors.core.init);

//# sourceMappingURL=core.js.map
