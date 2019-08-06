// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('re_frame.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interop');
/**
 * Dequeue an item from a persistent queue which is stored as the value in
 *   queue-atom. Returns the item, and updates the atom with the new queue
 *   value. If the queue is empty, does not alter it and returns nil.
 */
day8.re_frame.test.dequeue_BANG_ = (function day8$re_frame$test$dequeue_BANG_(queue_atom){
while(true){
var queue = cljs.core.deref.call(null,queue_atom);
if(cljs.core.seq.call(null,queue)){
if(cljs.core.compare_and_set_BANG_.call(null,queue_atom,queue,cljs.core.pop.call(null,queue))){
return cljs.core.peek.call(null,queue);
} else {
var G__6294 = queue_atom;
queue_atom = G__6294;
continue;
}
} else {
return null;
}
break;
}
});
day8.re_frame.test._STAR_test_timeout_STAR_ = (5000);
/**
 * `*test-context*` is used to communicate internal details of the test between
 *   `run-test-async*` and `wait-for*`. It is dynamically bound so that it doesn't
 *   need to appear as a lexical argument to a `wait-for` block, since we don't
 *   want it to be visible when you're writing tests.  But care must be taken to
 *   pass it around lexically across callbacks, since ClojureScript doesn't have
 *   `bound-fn`.
 */
day8.re_frame.test._STAR_test_context_STAR_ = null;
day8.re_frame.test.run_test_async_STAR_ = (function day8$re_frame$test$run_test_async_STAR_(f){
var test_context = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331),(0),new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761),cljs.core.atom.call(null,null)], null);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame !== 'undefined') && (typeof day8.re_frame.test !== 'undefined') && (typeof day8.re_frame.test.t_day8$re_frame$test6296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame.test.t_day8$re_frame$test6296 = (function (f,test_context,meta6297){
this.f = f;
this.test_context = test_context;
this.meta6297 = meta6297;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame.test.t_day8$re_frame$test6296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (test_context){
return (function (_6298,meta6297__$1){
var self__ = this;
var _6298__$1 = this;
return (new day8.re_frame.test.t_day8$re_frame$test6296(self__.f,self__.test_context,meta6297__$1));
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (test_context){
return (function (_6298){
var self__ = this;
var _6298__$1 = this;
return self__.meta6297;
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame.test.t_day8$re_frame$test6296.prototype.call = ((function (test_context){
return (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___2128__auto__ = self____$1;
var restore_fn = re_frame.core.make_restore_fn.call(null);
var _STAR_test_context_STAR__orig_val__6300 = day8.re_frame.test._STAR_test_context_STAR_;
var _STAR_test_context_STAR__temp_val__6301 = cljs.core.assoc.call(null,self__.test_context,new cljs.core.Keyword(null,"done","done",-889844188),((function (_STAR_test_context_STAR__orig_val__6300,restore_fn,___2128__auto__,self____$1,test_context){
return (function (){
restore_fn.call(null);

return done.call(null);
});})(_STAR_test_context_STAR__orig_val__6300,restore_fn,___2128__auto__,self____$1,test_context))
);
day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__temp_val__6301;

try{return self__.f.call(null);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__orig_val__6300;
}});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.prototype.apply = ((function (test_context){
return (function (self__,args6299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6299)));
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (test_context){
return (function (done){
var self__ = this;
var ___2128__auto__ = this;
var restore_fn = re_frame.core.make_restore_fn.call(null);
var _STAR_test_context_STAR__orig_val__6302 = day8.re_frame.test._STAR_test_context_STAR_;
var _STAR_test_context_STAR__temp_val__6303 = cljs.core.assoc.call(null,self__.test_context,new cljs.core.Keyword(null,"done","done",-889844188),((function (_STAR_test_context_STAR__orig_val__6302,restore_fn,___2128__auto__,test_context){
return (function (){
restore_fn.call(null);

return done.call(null);
});})(_STAR_test_context_STAR__orig_val__6302,restore_fn,___2128__auto__,test_context))
);
day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__temp_val__6303;

try{return self__.f.call(null);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__orig_val__6302;
}});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.getBasis = ((function (test_context){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"test-context","test-context",-2049932830,null),new cljs.core.Symbol(null,"meta6297","meta6297",1688854907,null)], null);
});})(test_context))
;

day8.re_frame.test.t_day8$re_frame$test6296.cljs$lang$type = true;

day8.re_frame.test.t_day8$re_frame$test6296.cljs$lang$ctorStr = "day8.re-frame.test/t_day8$re_frame$test6296";

day8.re_frame.test.t_day8$re_frame$test6296.cljs$lang$ctorPrWriter = ((function (test_context){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"day8.re-frame.test/t_day8$re_frame$test6296");
});})(test_context))
;

/**
 * Positional factory function for day8.re-frame.test/t_day8$re_frame$test6296.
 */
day8.re_frame.test.__GT_t_day8$re_frame$test6296 = ((function (test_context){
return (function day8$re_frame$test$run_test_async_STAR__$___GT_t_day8$re_frame$test6296(f__$1,test_context__$1,meta6297){
return (new day8.re_frame.test.t_day8$re_frame$test6296(f__$1,test_context__$1,meta6297));
});})(test_context))
;

}

return (new day8.re_frame.test.t_day8$re_frame$test6296(f,test_context,null));
});
var ret__4776__auto___6307 = (function (){
/**
 * Run `body` as an async re-frame test. The async nature means you'll need to
 *   use `wait-for` any time you want to make any assertions that should be true
 *   *after* an event has been handled.  It's assumed that there will be at least
 *   one `wait-for` in the body of your test (otherwise you don't need this macro
 *   at all).
 * 
 *   Note: unlike regular ClojureScript `cljs.test/async` tests, `wait-for` takes
 *   care of calling `(done)` for you: you don't need to do anything specific to
 *   handle the fact that your test is asynchronous, other than make sure that all
 *   your assertions happen with `wait-for` blocks.
 * 
 *   This macro will automatically clean up any changes to re-frame state made
 *   within the test body, as per `with-temp-re-frame-state` (except that the way
 *   it's done here *does* work for async tests, whereas that macro used by itself
 *   doesn't).
 */
day8.re_frame.test.run_test_async = (function day8$re_frame$test$run_test_async(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6308 = arguments.length;
var i__4731__auto___6309 = (0);
while(true){
if((i__4731__auto___6309 < len__4730__auto___6308)){
args__4736__auto__.push((arguments[i__4731__auto___6309]));

var G__6310 = (i__4731__auto___6309 + (1));
i__4731__auto___6309 = G__6310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.test.run_test_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.test.run_test_async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.test","run-test-async*","day8.re-frame.test/run-test-async*",-694638677,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame.test.run_test_async.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.test.run_test_async.cljs$lang$applyTo = (function (seq6304){
var G__6305 = cljs.core.first.call(null,seq6304);
var seq6304__$1 = cljs.core.next.call(null,seq6304);
var G__6306 = cljs.core.first.call(null,seq6304__$1);
var seq6304__$2 = cljs.core.next.call(null,seq6304__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6305,G__6306,seq6304__$2);
});

return null;
})()
;
day8.re_frame.test.run_test_async.cljs$lang$macro = true;

/**
 * Interprets the acceptable input values for `wait-for`'s `ok-ids` and
 *   `failure-ids` params to produce a predicate function on an event.  See
 *   `wait-for` for details.
 */
day8.re_frame.test.as_callback_pred = (function day8$re_frame$test$as_callback_pred(callback_pred){
if(cljs.core.truth_(callback_pred)){
if(((cljs.core.set_QMARK_.call(null,callback_pred)) || (cljs.core.vector_QMARK_.call(null,callback_pred)))){
return (function (event){
return cljs.core.some.call(null,(function (pred){
return pred.call(null,event);
}),cljs.core.map.call(null,day8.re_frame.test.as_callback_pred,cljs.core.seq.call(null,callback_pred)));
});
} else {
if(cljs.core.fn_QMARK_.call(null,callback_pred)){
return callback_pred;
} else {
if((callback_pred instanceof cljs.core.Keyword)){
return (function (p__6311){
var vec__6312 = p__6311;
var event_id = cljs.core.nth.call(null,vec__6312,(0),null);
var _ = cljs.core.nth.call(null,vec__6312,(1),null);
return cljs.core._EQ_.call(null,callback_pred,event_id);
});
} else {
throw cljs.core.ex_info.call(null,[cljs.core.pr_str.call(null,callback_pred)," isn't an event predicate"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-pred","callback-pred",90867475),callback_pred], null));

}
}
}
} else {
return null;
}
});
/**
 * This function is an implementation detail: in your async tests (within a
 *   `run-test-async`), you should use the `wait-for` macro instead.  (For
 *   synchronous tests within `run-test-sync`, you don't need this capability at
 *   all.)
 * 
 *   Installs `callback` as a re-frame post-event callback handler, called as soon
 *   as any event matching `ok-ids` is handled.  Aborts the test as a failure if
 *   any event matching `failure-ids` is handled.
 * 
 *   Since this is intended for use in asynchronous tests: it will return
 *   immediately after installing the callback -- it doesn't *actually* wait.
 * 
 *   Note that `wait-for*` tracks whether, during your callback, you call
 *   `wait-for*` again.  If you *don't*, then, given the way asynchronous tests
 *   work, your test must necessarily be finished.  So `wait-for*` will
 *   call `(done)` for you.
 */
day8.re_frame.test.wait_for_STAR_ = (function day8$re_frame$test$wait_for_STAR_(ok_ids,failure_ids,callback){
var map__6315 = cljs.core.update.call(null,day8.re_frame.test._STAR_test_context_STAR_,new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331),cljs.core.inc);
var map__6315__$1 = (((((!((map__6315 == null))))?(((((map__6315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6315):map__6315);
var test_context = map__6315__$1;
var done = cljs.core.get.call(null,map__6315__$1,new cljs.core.Keyword(null,"done","done",-889844188));
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457).cljs$core$IFn$_invoke$arity$1(test_context),cljs.core.inc);

var ok_pred = day8.re_frame.test.as_callback_pred.call(null,ok_ids);
var fail_pred = day8.re_frame.test.as_callback_pred.call(null,failure_ids);
var cb_id = cljs.core.gensym.call(null,"wait-for-cb-fn");
re_frame.core.add_post_event_callback.call(null,cb_id,((function (ok_pred,fail_pred,cb_id,map__6315,map__6315__$1,test_context,done){
return (function (event,_){
if(cljs.core.truth_((function (){var and__4120__auto__ = fail_pred;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,(function (){try{var values__2053__auto__ = (new cljs.core.List(null,fail_pred.call(null,event),null,(1),null));
var result__2054__auto__ = cljs.core.apply.call(null,cljs.core.not,values__2053__auto__);
if(cljs.core.truth_(result__2054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__2053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__2053__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
}

return result__2054__auto__;
}catch (e6317){var t__2098__auto__ = e6317;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"fail-pred","fail-pred",518790579,null),new cljs.core.Symbol(null,"event","event",1941966969,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__2098__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Received failure event"], null));
}})());
} else {
return and__4120__auto__;
}
})())){
re_frame.core.remove_post_event_callback.call(null,cb_id);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),null);

return done.call(null);
} else {
if(cljs.core.truth_(ok_pred.call(null,event))){
re_frame.core.remove_post_event_callback.call(null,cb_id);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),null);

var _STAR_test_context_STAR__orig_val__6318_6320 = day8.re_frame.test._STAR_test_context_STAR_;
var _STAR_test_context_STAR__temp_val__6319_6321 = test_context;
day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__temp_val__6319_6321;

try{callback.call(null,event);
}finally {day8.re_frame.test._STAR_test_context_STAR_ = _STAR_test_context_STAR__orig_val__6318_6320;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"wait-for-depth","wait-for-depth",-1366777331).cljs$core$IFn$_invoke$arity$1(test_context),cljs.core.deref.call(null,new cljs.core.Keyword(null,"max-wait-for-depth","max-wait-for-depth",639503457).cljs$core$IFn$_invoke$arity$1(test_context)))){
return done.call(null);
} else {
return null;
}
} else {
return null;

}
}
});})(ok_pred,fail_pred,cb_id,map__6315,map__6315__$1,test_context,done))
);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now-waiting-for","now-waiting-for",322402761).cljs$core$IFn$_invoke$arity$1(test_context),ok_ids);
});
var ret__4776__auto___6334 = (function (){
/**
 * Execute `body` once an event identified by the predicate(s) `ids` has been handled.
 * 
 *   `ids` and `failure-ids` are means to identify an event. Normally, each would
 *   be a simple keyword or a set of keywords.  If an event with event-id of (or
 *   in) `ids` is handled, the test will continue by executing the body. If an
 *   event with an event-id of (or in) `failure-ids` is handled, the test will
 *   abort and fail.
 * 
 *   IMPORTANT NOTE: due to the way async tests in re-frame work, code you want
 *   executed after the event you're waiting for has to happen in the `body` of the
 *   `wait-for` (in an implicit callback), not just lexically after the the
 *   `wait-for` call. In practice, this means `wait-for` must always be in a tail
 *   position.
 * 
 *   Eg:
 *    (run-test-async
 *      (dispatch [:get-user 2])
 *      (wait-for [#{:got-user} #{:no-such-user :system-unavailable} event]
 *        (is (= (:username @(subscribe [:user])) "johnny")))
 *      ;; Don't put code here, it will run *before* the event you're waiting
 *      ;; for.
 *      )
 * 
 *   Acceptable inputs for `ids` and `failure-ids` are:
 *  - `:some-event-id` => matches an event with that ID
 * 
 *  - `#{:some-event-id :other-event-id}` => matches an event with any of the
 *                                           given IDs
 * 
 *  - `[:some-event-id :other-event-id]` => ditto (checks in order)
 * 
 *  - `(fn [event] ,,,) => uses the function as a predicate
 * 
 *  - `[(fn [event] ,,,) (fn [event] ,,,)]` => tries each predicate in turn,
 *                                             matching an event which matches
 *                                             at least one predicate
 * 
 *  - `#{:some-event-id (fn [event] ,,,)}` => tries each
 * 
 *   Note that because we're liberal about whether you supply `failure-ids` and/or
 *   `event-sym`, if you do choose to supply only one, and you want that one to be
 *   `event-sym`, you can't supply it as a destructuring form (because we can't
 *   disambiguate that from a vector of `failure-ids`).  You can just supply `nil`
 *   as `failure-ids` in this case, and then you'll be able to destructure.
 */
day8.re_frame.test.wait_for = (function day8$re_frame$test$wait_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6335 = arguments.length;
var i__4731__auto___6336 = (0);
while(true){
if((i__4731__auto___6336 < len__4730__auto___6335)){
args__4736__auto__.push((arguments[i__4731__auto___6336]));

var G__6337 = (i__4731__auto___6336 + (1));
i__4731__auto___6336 = G__6337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame.test.wait_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame.test.wait_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__6326,body){
var vec__6327 = p__6326;
var ids = cljs.core.nth.call(null,vec__6327,(0),null);
var failure_ids = cljs.core.nth.call(null,vec__6327,(1),null);
var event_sym = cljs.core.nth.call(null,vec__6327,(2),null);
var argv = vec__6327;
var vec__6330 = (function (){var G__6333 = cljs.core.count.call(null,argv);
switch (G__6333) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [failure_ids,event_sym], null);

break;
case (2):
if((cljs.core.second.call(null,argv) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.second.call(null,argv)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,argv),cljs.core.gensym.call(null,"event")], null);
}

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.gensym.call(null,"event")], null);

break;
case (0):
throw cljs.core.ex_info.call(null,"wait-for needs to know what to wait for!",cljs.core.PersistentArrayMap.EMPTY);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6333)].join('')));

}
})();
var failure_ids__$1 = cljs.core.nth.call(null,vec__6330,(0),null);
var event_sym__$1 = cljs.core.nth.call(null,vec__6330,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.test","wait-for*","day8.re-frame.test/wait-for*",526325482,null),null,(1),null)),(new cljs.core.List(null,ids,null,(1),null)),(new cljs.core.List(null,failure_ids__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,event_sym__$1,null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame.test.wait_for.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame.test.wait_for.cljs$lang$applyTo = (function (seq6322){
var G__6323 = cljs.core.first.call(null,seq6322);
var seq6322__$1 = cljs.core.next.call(null,seq6322);
var G__6324 = cljs.core.first.call(null,seq6322__$1);
var seq6322__$2 = cljs.core.next.call(null,seq6322__$1);
var G__6325 = cljs.core.first.call(null,seq6322__$2);
var seq6322__$3 = cljs.core.next.call(null,seq6322__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6323,G__6324,G__6325,seq6322__$3);
});

return null;
})()
;
day8.re_frame.test.wait_for.cljs$lang$macro = true;

day8.re_frame.test._STAR_handling_STAR_ = false;
day8.re_frame.test.run_test_sync_STAR_ = (function day8$re_frame$test$run_test_sync_STAR_(f){
var restore_fn__6219__auto__ = re_frame.core.make_restore_fn.call(null);
try{var my_queue = cljs.core.atom.call(null,re_frame.interop.empty_queue);
var new_dispatch = ((function (my_queue,restore_fn__6219__auto__){
return (function (argv){
cljs.core.swap_BANG_.call(null,my_queue,cljs.core.conj,argv);

if(day8.re_frame.test._STAR_handling_STAR_){
return null;
} else {
var _STAR_handling_STAR__orig_val__6339 = day8.re_frame.test._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__6340 = true;
day8.re_frame.test._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__6340;

try{while(true){
var temp__5735__auto__ = day8.re_frame.test.dequeue_BANG_.call(null,my_queue);
if(cljs.core.truth_(temp__5735__auto__)){
var queue_head = temp__5735__auto__;
re_frame.router.dispatch_sync.call(null,queue_head);

continue;
} else {
return null;
}
break;
}
}finally {day8.re_frame.test._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__6339;
}}
});})(my_queue,restore_fn__6219__auto__))
;
var dispatch_orig_val__6341 = re_frame.core.dispatch;
var dispatch_orig_val__6342 = re_frame.router.dispatch;
var dispatch_temp_val__6343 = new_dispatch;
var dispatch_temp_val__6344 = new_dispatch;
re_frame.core.dispatch = dispatch_temp_val__6343;

re_frame.router.dispatch = dispatch_temp_val__6344;

try{return f.call(null);
}finally {re_frame.router.dispatch = dispatch_orig_val__6342;

re_frame.core.dispatch = dispatch_orig_val__6341;
}}finally {restore_fn__6219__auto__.call(null);
}});
var ret__4776__auto___6348 = (function (){
/**
 * Execute `body` as a test, where each `dispatch` call is executed
 *   synchronously (via `dispatch-sync`), and any subsequent dispatches which are
 *   caused by that dispatch are also fully handled/executed prior to control flow
 *   returning to your test.
 * 
 *   Think of it kind of as though every `dispatch` in your app had been magically
 *   turned into `dispatch-sync`, and re-frame had lifted the restriction that says
 *   you can't call `dispatch-sync` from within an event handler.
 * 
 *   Note that this is *not* achieved with blocking.  It relies on you not doing
 *   anything asynchronous (such as an actual AJAX call or `js/setTimeout`)
 *   directly in your event handlers.  In a real app running in the real browser,
 *   of course that won't apply, so this might seem useless at first.  But if
 *   you're a well-behaved re-framer, all of your asynchronous stuff (which is by
 *   definition side-effecty) will happen in effectful event handlers installed
 *   with `reg-fx`.  Which works very nicely: in your tests, install an alternative
 *   version of those effectful event handlers which behaves synchronously.  For
 *   maximum coolness, you might want to consider running your tests on the JVM and
 *   installing a `reg-fx` handler which actually invokes your JVM Clojure
 *   server-side Ring handler where your in-browser code would make an AJAX call.
 */
day8.re_frame.test.run_test_sync = (function day8$re_frame$test$run_test_sync(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6349 = arguments.length;
var i__4731__auto___6350 = (0);
while(true){
if((i__4731__auto___6350 < len__4730__auto___6349)){
args__4736__auto__.push((arguments[i__4731__auto___6350]));

var G__6351 = (i__4731__auto___6350 + (1));
i__4731__auto___6350 = G__6351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.test.run_test_sync.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.test.run_test_sync.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.test","run-test-sync*","day8.re-frame.test/run-test-sync*",1693776500,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame.test.run_test_sync.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.test.run_test_sync.cljs$lang$applyTo = (function (seq6345){
var G__6346 = cljs.core.first.call(null,seq6345);
var seq6345__$1 = cljs.core.next.call(null,seq6345);
var G__6347 = cljs.core.first.call(null,seq6345__$1);
var seq6345__$2 = cljs.core.next.call(null,seq6345__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6346,G__6347,seq6345__$2);
});

return null;
})()
;
day8.re_frame.test.run_test_sync.cljs$lang$macro = true;


//# sourceMappingURL=test.js.map
