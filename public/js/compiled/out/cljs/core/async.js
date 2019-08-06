// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45853 = arguments.length;
switch (G__45853) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45854 = (function (f,blockable,meta45855){
this.f = f;
this.blockable = blockable;
this.meta45855 = meta45855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45856,meta45855__$1){
var self__ = this;
var _45856__$1 = this;
return (new cljs.core.async.t_cljs$core$async45854(self__.f,self__.blockable,meta45855__$1));
});

cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45856){
var self__ = this;
var _45856__$1 = this;
return self__.meta45855;
});

cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45855","meta45855",1858052806,null)], null);
});

cljs.core.async.t_cljs$core$async45854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45854";

cljs.core.async.t_cljs$core$async45854.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45854");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45854.
 */
cljs.core.async.__GT_t_cljs$core$async45854 = (function cljs$core$async$__GT_t_cljs$core$async45854(f__$1,blockable__$1,meta45855){
return (new cljs.core.async.t_cljs$core$async45854(f__$1,blockable__$1,meta45855));
});

}

return (new cljs.core.async.t_cljs$core$async45854(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45860 = arguments.length;
switch (G__45860) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45863 = arguments.length;
switch (G__45863) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45866 = arguments.length;
switch (G__45866) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45868 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45868);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45868,ret){
return (function (){
return fn1.call(null,val_45868);
});})(val_45868,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45870 = arguments.length;
switch (G__45870) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___45872 = n;
var x_45873 = (0);
while(true){
if((x_45873 < n__4607__auto___45872)){
(a[x_45873] = (0));

var G__45874 = (x_45873 + (1));
x_45873 = G__45874;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45875 = (i + (1));
i = G__45875;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45876 = (function (flag,meta45877){
this.flag = flag;
this.meta45877 = meta45877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45878,meta45877__$1){
var self__ = this;
var _45878__$1 = this;
return (new cljs.core.async.t_cljs$core$async45876(self__.flag,meta45877__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45878){
var self__ = this;
var _45878__$1 = this;
return self__.meta45877;
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45877","meta45877",2092321043,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45876";

cljs.core.async.t_cljs$core$async45876.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45876");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45876.
 */
cljs.core.async.__GT_t_cljs$core$async45876 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45876(flag__$1,meta45877){
return (new cljs.core.async.t_cljs$core$async45876(flag__$1,meta45877));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45876(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45879 = (function (flag,cb,meta45880){
this.flag = flag;
this.cb = cb;
this.meta45880 = meta45880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45881,meta45880__$1){
var self__ = this;
var _45881__$1 = this;
return (new cljs.core.async.t_cljs$core$async45879(self__.flag,self__.cb,meta45880__$1));
});

cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45881){
var self__ = this;
var _45881__$1 = this;
return self__.meta45880;
});

cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45880","meta45880",-1639524905,null)], null);
});

cljs.core.async.t_cljs$core$async45879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45879";

cljs.core.async.t_cljs$core$async45879.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45879");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45879.
 */
cljs.core.async.__GT_t_cljs$core$async45879 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45879(flag__$1,cb__$1,meta45880){
return (new cljs.core.async.t_cljs$core$async45879(flag__$1,cb__$1,meta45880));
});

}

return (new cljs.core.async.t_cljs$core$async45879(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45882_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45882_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45883_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45883_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45884 = (i + (1));
i = G__45884;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45890 = arguments.length;
var i__4731__auto___45891 = (0);
while(true){
if((i__4731__auto___45891 < len__4730__auto___45890)){
args__4736__auto__.push((arguments[i__4731__auto___45891]));

var G__45892 = (i__4731__auto___45891 + (1));
i__4731__auto___45891 = G__45892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45887){
var map__45888 = p__45887;
var map__45888__$1 = (((((!((map__45888 == null))))?(((((map__45888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45888):map__45888);
var opts = map__45888__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45885){
var G__45886 = cljs.core.first.call(null,seq45885);
var seq45885__$1 = cljs.core.next.call(null,seq45885);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45886,seq45885__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45894 = arguments.length;
switch (G__45894) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45793__auto___45940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___45940){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___45940){
return (function (state_45918){
var state_val_45919 = (state_45918[(1)]);
if((state_val_45919 === (7))){
var inst_45914 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45920_45941 = state_45918__$1;
(statearr_45920_45941[(2)] = inst_45914);

(statearr_45920_45941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (1))){
var state_45918__$1 = state_45918;
var statearr_45921_45942 = state_45918__$1;
(statearr_45921_45942[(2)] = null);

(statearr_45921_45942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (4))){
var inst_45897 = (state_45918[(7)]);
var inst_45897__$1 = (state_45918[(2)]);
var inst_45898 = (inst_45897__$1 == null);
var state_45918__$1 = (function (){var statearr_45922 = state_45918;
(statearr_45922[(7)] = inst_45897__$1);

return statearr_45922;
})();
if(cljs.core.truth_(inst_45898)){
var statearr_45923_45943 = state_45918__$1;
(statearr_45923_45943[(1)] = (5));

} else {
var statearr_45924_45944 = state_45918__$1;
(statearr_45924_45944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (13))){
var state_45918__$1 = state_45918;
var statearr_45925_45945 = state_45918__$1;
(statearr_45925_45945[(2)] = null);

(statearr_45925_45945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (6))){
var inst_45897 = (state_45918[(7)]);
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45918__$1,(11),to,inst_45897);
} else {
if((state_val_45919 === (3))){
var inst_45916 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45918__$1,inst_45916);
} else {
if((state_val_45919 === (12))){
var state_45918__$1 = state_45918;
var statearr_45926_45946 = state_45918__$1;
(statearr_45926_45946[(2)] = null);

(statearr_45926_45946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (2))){
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45918__$1,(4),from);
} else {
if((state_val_45919 === (11))){
var inst_45907 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45907)){
var statearr_45927_45947 = state_45918__$1;
(statearr_45927_45947[(1)] = (12));

} else {
var statearr_45928_45948 = state_45918__$1;
(statearr_45928_45948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (9))){
var state_45918__$1 = state_45918;
var statearr_45929_45949 = state_45918__$1;
(statearr_45929_45949[(2)] = null);

(statearr_45929_45949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (5))){
var state_45918__$1 = state_45918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45930_45950 = state_45918__$1;
(statearr_45930_45950[(1)] = (8));

} else {
var statearr_45931_45951 = state_45918__$1;
(statearr_45931_45951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (14))){
var inst_45912 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45932_45952 = state_45918__$1;
(statearr_45932_45952[(2)] = inst_45912);

(statearr_45932_45952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (10))){
var inst_45904 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45933_45953 = state_45918__$1;
(statearr_45933_45953[(2)] = inst_45904);

(statearr_45933_45953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (8))){
var inst_45901 = cljs.core.async.close_BANG_.call(null,to);
var state_45918__$1 = state_45918;
var statearr_45934_45954 = state_45918__$1;
(statearr_45934_45954[(2)] = inst_45901);

(statearr_45934_45954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___45940))
;
return ((function (switch__45698__auto__,c__45793__auto___45940){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_45935 = [null,null,null,null,null,null,null,null];
(statearr_45935[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_45935[(1)] = (1));

return statearr_45935;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_45918){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_45918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e45936){if((e45936 instanceof Object)){
var ex__45702__auto__ = e45936;
var statearr_45937_45955 = state_45918;
(statearr_45937_45955[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45956 = state_45918;
state_45918 = G__45956;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_45918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_45918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___45940))
})();
var state__45795__auto__ = (function (){var statearr_45938 = f__45794__auto__.call(null);
(statearr_45938[(6)] = c__45793__auto___45940);

return statearr_45938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___45940))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45957){
var vec__45958 = p__45957;
var v = cljs.core.nth.call(null,vec__45958,(0),null);
var p = cljs.core.nth.call(null,vec__45958,(1),null);
var job = vec__45958;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45793__auto___46129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results){
return (function (state_45965){
var state_val_45966 = (state_45965[(1)]);
if((state_val_45966 === (1))){
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45965__$1,(2),res,v);
} else {
if((state_val_45966 === (2))){
var inst_45962 = (state_45965[(2)]);
var inst_45963 = cljs.core.async.close_BANG_.call(null,res);
var state_45965__$1 = (function (){var statearr_45967 = state_45965;
(statearr_45967[(7)] = inst_45962);

return statearr_45967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45965__$1,inst_45963);
} else {
return null;
}
}
});})(c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results))
;
return ((function (switch__45698__auto__,c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_45968 = [null,null,null,null,null,null,null,null];
(statearr_45968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__);

(statearr_45968[(1)] = (1));

return statearr_45968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1 = (function (state_45965){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_45965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e45969){if((e45969 instanceof Object)){
var ex__45702__auto__ = e45969;
var statearr_45970_46130 = state_45965;
(statearr_45970_46130[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46131 = state_45965;
state_45965 = G__46131;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = function(state_45965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1.call(this,state_45965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results))
})();
var state__45795__auto__ = (function (){var statearr_45971 = f__45794__auto__.call(null);
(statearr_45971[(6)] = c__45793__auto___46129);

return statearr_45971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___46129,res,vec__45958,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45972){
var vec__45973 = p__45972;
var v = cljs.core.nth.call(null,vec__45973,(0),null);
var p = cljs.core.nth.call(null,vec__45973,(1),null);
var job = vec__45973;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___46132 = n;
var __46133 = (0);
while(true){
if((__46133 < n__4607__auto___46132)){
var G__45976_46134 = type;
var G__45976_46135__$1 = (((G__45976_46134 instanceof cljs.core.Keyword))?G__45976_46134.fqn:null);
switch (G__45976_46135__$1) {
case "compute":
var c__45793__auto___46137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46133,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (__46133,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function (state_45989){
var state_val_45990 = (state_45989[(1)]);
if((state_val_45990 === (1))){
var state_45989__$1 = state_45989;
var statearr_45991_46138 = state_45989__$1;
(statearr_45991_46138[(2)] = null);

(statearr_45991_46138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (2))){
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45989__$1,(4),jobs);
} else {
if((state_val_45990 === (3))){
var inst_45987 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45989__$1,inst_45987);
} else {
if((state_val_45990 === (4))){
var inst_45979 = (state_45989[(2)]);
var inst_45980 = process.call(null,inst_45979);
var state_45989__$1 = state_45989;
if(cljs.core.truth_(inst_45980)){
var statearr_45992_46139 = state_45989__$1;
(statearr_45992_46139[(1)] = (5));

} else {
var statearr_45993_46140 = state_45989__$1;
(statearr_45993_46140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (5))){
var state_45989__$1 = state_45989;
var statearr_45994_46141 = state_45989__$1;
(statearr_45994_46141[(2)] = null);

(statearr_45994_46141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (6))){
var state_45989__$1 = state_45989;
var statearr_45995_46142 = state_45989__$1;
(statearr_45995_46142[(2)] = null);

(statearr_45995_46142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (7))){
var inst_45985 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_45996_46143 = state_45989__$1;
(statearr_45996_46143[(2)] = inst_45985);

(statearr_45996_46143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46133,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
;
return ((function (__46133,switch__45698__auto__,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_45997 = [null,null,null,null,null,null,null];
(statearr_45997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__);

(statearr_45997[(1)] = (1));

return statearr_45997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1 = (function (state_45989){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_45989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e45998){if((e45998 instanceof Object)){
var ex__45702__auto__ = e45998;
var statearr_45999_46144 = state_45989;
(statearr_45999_46144[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46145 = state_45989;
state_45989 = G__46145;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = function(state_45989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1.call(this,state_45989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__;
})()
;})(__46133,switch__45698__auto__,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
})();
var state__45795__auto__ = (function (){var statearr_46000 = f__45794__auto__.call(null);
(statearr_46000[(6)] = c__45793__auto___46137);

return statearr_46000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(__46133,c__45793__auto___46137,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
);


break;
case "async":
var c__45793__auto___46146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46133,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (__46133,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function (state_46013){
var state_val_46014 = (state_46013[(1)]);
if((state_val_46014 === (1))){
var state_46013__$1 = state_46013;
var statearr_46015_46147 = state_46013__$1;
(statearr_46015_46147[(2)] = null);

(statearr_46015_46147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (2))){
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46013__$1,(4),jobs);
} else {
if((state_val_46014 === (3))){
var inst_46011 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46013__$1,inst_46011);
} else {
if((state_val_46014 === (4))){
var inst_46003 = (state_46013[(2)]);
var inst_46004 = async.call(null,inst_46003);
var state_46013__$1 = state_46013;
if(cljs.core.truth_(inst_46004)){
var statearr_46016_46148 = state_46013__$1;
(statearr_46016_46148[(1)] = (5));

} else {
var statearr_46017_46149 = state_46013__$1;
(statearr_46017_46149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (5))){
var state_46013__$1 = state_46013;
var statearr_46018_46150 = state_46013__$1;
(statearr_46018_46150[(2)] = null);

(statearr_46018_46150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (6))){
var state_46013__$1 = state_46013;
var statearr_46019_46151 = state_46013__$1;
(statearr_46019_46151[(2)] = null);

(statearr_46019_46151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (7))){
var inst_46009 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46020_46152 = state_46013__$1;
(statearr_46020_46152[(2)] = inst_46009);

(statearr_46020_46152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46133,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
;
return ((function (__46133,switch__45698__auto__,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_46021 = [null,null,null,null,null,null,null];
(statearr_46021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__);

(statearr_46021[(1)] = (1));

return statearr_46021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1 = (function (state_46013){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46022){if((e46022 instanceof Object)){
var ex__45702__auto__ = e46022;
var statearr_46023_46153 = state_46013;
(statearr_46023_46153[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46154 = state_46013;
state_46013 = G__46154;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = function(state_46013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1.call(this,state_46013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__;
})()
;})(__46133,switch__45698__auto__,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
})();
var state__45795__auto__ = (function (){var statearr_46024 = f__45794__auto__.call(null);
(statearr_46024[(6)] = c__45793__auto___46146);

return statearr_46024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(__46133,c__45793__auto___46146,G__45976_46134,G__45976_46135__$1,n__4607__auto___46132,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45976_46135__$1)].join('')));

}

var G__46155 = (__46133 + (1));
__46133 = G__46155;
continue;
} else {
}
break;
}

var c__45793__auto___46156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___46156,jobs,results,process,async){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___46156,jobs,results,process,async){
return (function (state_46046){
var state_val_46047 = (state_46046[(1)]);
if((state_val_46047 === (7))){
var inst_46042 = (state_46046[(2)]);
var state_46046__$1 = state_46046;
var statearr_46048_46157 = state_46046__$1;
(statearr_46048_46157[(2)] = inst_46042);

(statearr_46048_46157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46047 === (1))){
var state_46046__$1 = state_46046;
var statearr_46049_46158 = state_46046__$1;
(statearr_46049_46158[(2)] = null);

(statearr_46049_46158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46047 === (4))){
var inst_46027 = (state_46046[(7)]);
var inst_46027__$1 = (state_46046[(2)]);
var inst_46028 = (inst_46027__$1 == null);
var state_46046__$1 = (function (){var statearr_46050 = state_46046;
(statearr_46050[(7)] = inst_46027__$1);

return statearr_46050;
})();
if(cljs.core.truth_(inst_46028)){
var statearr_46051_46159 = state_46046__$1;
(statearr_46051_46159[(1)] = (5));

} else {
var statearr_46052_46160 = state_46046__$1;
(statearr_46052_46160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46047 === (6))){
var inst_46027 = (state_46046[(7)]);
var inst_46032 = (state_46046[(8)]);
var inst_46032__$1 = cljs.core.async.chan.call(null,(1));
var inst_46033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46034 = [inst_46027,inst_46032__$1];
var inst_46035 = (new cljs.core.PersistentVector(null,2,(5),inst_46033,inst_46034,null));
var state_46046__$1 = (function (){var statearr_46053 = state_46046;
(statearr_46053[(8)] = inst_46032__$1);

return statearr_46053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46046__$1,(8),jobs,inst_46035);
} else {
if((state_val_46047 === (3))){
var inst_46044 = (state_46046[(2)]);
var state_46046__$1 = state_46046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46046__$1,inst_46044);
} else {
if((state_val_46047 === (2))){
var state_46046__$1 = state_46046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46046__$1,(4),from);
} else {
if((state_val_46047 === (9))){
var inst_46039 = (state_46046[(2)]);
var state_46046__$1 = (function (){var statearr_46054 = state_46046;
(statearr_46054[(9)] = inst_46039);

return statearr_46054;
})();
var statearr_46055_46161 = state_46046__$1;
(statearr_46055_46161[(2)] = null);

(statearr_46055_46161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46047 === (5))){
var inst_46030 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46046__$1 = state_46046;
var statearr_46056_46162 = state_46046__$1;
(statearr_46056_46162[(2)] = inst_46030);

(statearr_46056_46162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46047 === (8))){
var inst_46032 = (state_46046[(8)]);
var inst_46037 = (state_46046[(2)]);
var state_46046__$1 = (function (){var statearr_46057 = state_46046;
(statearr_46057[(10)] = inst_46037);

return statearr_46057;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46046__$1,(9),results,inst_46032);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___46156,jobs,results,process,async))
;
return ((function (switch__45698__auto__,c__45793__auto___46156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_46058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__);

(statearr_46058[(1)] = (1));

return statearr_46058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1 = (function (state_46046){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46059){if((e46059 instanceof Object)){
var ex__45702__auto__ = e46059;
var statearr_46060_46163 = state_46046;
(statearr_46060_46163[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46164 = state_46046;
state_46046 = G__46164;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = function(state_46046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1.call(this,state_46046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___46156,jobs,results,process,async))
})();
var state__45795__auto__ = (function (){var statearr_46061 = f__45794__auto__.call(null);
(statearr_46061[(6)] = c__45793__auto___46156);

return statearr_46061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___46156,jobs,results,process,async))
);


var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__,jobs,results,process,async){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__,jobs,results,process,async){
return (function (state_46099){
var state_val_46100 = (state_46099[(1)]);
if((state_val_46100 === (7))){
var inst_46095 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
var statearr_46101_46165 = state_46099__$1;
(statearr_46101_46165[(2)] = inst_46095);

(statearr_46101_46165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (20))){
var state_46099__$1 = state_46099;
var statearr_46102_46166 = state_46099__$1;
(statearr_46102_46166[(2)] = null);

(statearr_46102_46166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (1))){
var state_46099__$1 = state_46099;
var statearr_46103_46167 = state_46099__$1;
(statearr_46103_46167[(2)] = null);

(statearr_46103_46167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (4))){
var inst_46064 = (state_46099[(7)]);
var inst_46064__$1 = (state_46099[(2)]);
var inst_46065 = (inst_46064__$1 == null);
var state_46099__$1 = (function (){var statearr_46104 = state_46099;
(statearr_46104[(7)] = inst_46064__$1);

return statearr_46104;
})();
if(cljs.core.truth_(inst_46065)){
var statearr_46105_46168 = state_46099__$1;
(statearr_46105_46168[(1)] = (5));

} else {
var statearr_46106_46169 = state_46099__$1;
(statearr_46106_46169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (15))){
var inst_46077 = (state_46099[(8)]);
var state_46099__$1 = state_46099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46099__$1,(18),to,inst_46077);
} else {
if((state_val_46100 === (21))){
var inst_46090 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
var statearr_46107_46170 = state_46099__$1;
(statearr_46107_46170[(2)] = inst_46090);

(statearr_46107_46170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (13))){
var inst_46092 = (state_46099[(2)]);
var state_46099__$1 = (function (){var statearr_46108 = state_46099;
(statearr_46108[(9)] = inst_46092);

return statearr_46108;
})();
var statearr_46109_46171 = state_46099__$1;
(statearr_46109_46171[(2)] = null);

(statearr_46109_46171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (6))){
var inst_46064 = (state_46099[(7)]);
var state_46099__$1 = state_46099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46099__$1,(11),inst_46064);
} else {
if((state_val_46100 === (17))){
var inst_46085 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
if(cljs.core.truth_(inst_46085)){
var statearr_46110_46172 = state_46099__$1;
(statearr_46110_46172[(1)] = (19));

} else {
var statearr_46111_46173 = state_46099__$1;
(statearr_46111_46173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (3))){
var inst_46097 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46099__$1,inst_46097);
} else {
if((state_val_46100 === (12))){
var inst_46074 = (state_46099[(10)]);
var state_46099__$1 = state_46099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46099__$1,(14),inst_46074);
} else {
if((state_val_46100 === (2))){
var state_46099__$1 = state_46099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46099__$1,(4),results);
} else {
if((state_val_46100 === (19))){
var state_46099__$1 = state_46099;
var statearr_46112_46174 = state_46099__$1;
(statearr_46112_46174[(2)] = null);

(statearr_46112_46174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (11))){
var inst_46074 = (state_46099[(2)]);
var state_46099__$1 = (function (){var statearr_46113 = state_46099;
(statearr_46113[(10)] = inst_46074);

return statearr_46113;
})();
var statearr_46114_46175 = state_46099__$1;
(statearr_46114_46175[(2)] = null);

(statearr_46114_46175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (9))){
var state_46099__$1 = state_46099;
var statearr_46115_46176 = state_46099__$1;
(statearr_46115_46176[(2)] = null);

(statearr_46115_46176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (5))){
var state_46099__$1 = state_46099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46116_46177 = state_46099__$1;
(statearr_46116_46177[(1)] = (8));

} else {
var statearr_46117_46178 = state_46099__$1;
(statearr_46117_46178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (14))){
var inst_46079 = (state_46099[(11)]);
var inst_46077 = (state_46099[(8)]);
var inst_46077__$1 = (state_46099[(2)]);
var inst_46078 = (inst_46077__$1 == null);
var inst_46079__$1 = cljs.core.not.call(null,inst_46078);
var state_46099__$1 = (function (){var statearr_46118 = state_46099;
(statearr_46118[(11)] = inst_46079__$1);

(statearr_46118[(8)] = inst_46077__$1);

return statearr_46118;
})();
if(inst_46079__$1){
var statearr_46119_46179 = state_46099__$1;
(statearr_46119_46179[(1)] = (15));

} else {
var statearr_46120_46180 = state_46099__$1;
(statearr_46120_46180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (16))){
var inst_46079 = (state_46099[(11)]);
var state_46099__$1 = state_46099;
var statearr_46121_46181 = state_46099__$1;
(statearr_46121_46181[(2)] = inst_46079);

(statearr_46121_46181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (10))){
var inst_46071 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
var statearr_46122_46182 = state_46099__$1;
(statearr_46122_46182[(2)] = inst_46071);

(statearr_46122_46182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (18))){
var inst_46082 = (state_46099[(2)]);
var state_46099__$1 = state_46099;
var statearr_46123_46183 = state_46099__$1;
(statearr_46123_46183[(2)] = inst_46082);

(statearr_46123_46183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46100 === (8))){
var inst_46068 = cljs.core.async.close_BANG_.call(null,to);
var state_46099__$1 = state_46099;
var statearr_46124_46184 = state_46099__$1;
(statearr_46124_46184[(2)] = inst_46068);

(statearr_46124_46184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto__,jobs,results,process,async))
;
return ((function (switch__45698__auto__,c__45793__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_46125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__);

(statearr_46125[(1)] = (1));

return statearr_46125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1 = (function (state_46099){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46126){if((e46126 instanceof Object)){
var ex__45702__auto__ = e46126;
var statearr_46127_46185 = state_46099;
(statearr_46127_46185[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46186 = state_46099;
state_46099 = G__46186;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__ = function(state_46099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1.call(this,state_46099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__,jobs,results,process,async))
})();
var state__45795__auto__ = (function (){var statearr_46128 = f__45794__auto__.call(null);
(statearr_46128[(6)] = c__45793__auto__);

return statearr_46128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__,jobs,results,process,async))
);

return c__45793__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46188 = arguments.length;
switch (G__46188) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46191 = arguments.length;
switch (G__46191) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46194 = arguments.length;
switch (G__46194) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45793__auto___46243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___46243,tc,fc){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___46243,tc,fc){
return (function (state_46220){
var state_val_46221 = (state_46220[(1)]);
if((state_val_46221 === (7))){
var inst_46216 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
var statearr_46222_46244 = state_46220__$1;
(statearr_46222_46244[(2)] = inst_46216);

(statearr_46222_46244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (1))){
var state_46220__$1 = state_46220;
var statearr_46223_46245 = state_46220__$1;
(statearr_46223_46245[(2)] = null);

(statearr_46223_46245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (4))){
var inst_46197 = (state_46220[(7)]);
var inst_46197__$1 = (state_46220[(2)]);
var inst_46198 = (inst_46197__$1 == null);
var state_46220__$1 = (function (){var statearr_46224 = state_46220;
(statearr_46224[(7)] = inst_46197__$1);

return statearr_46224;
})();
if(cljs.core.truth_(inst_46198)){
var statearr_46225_46246 = state_46220__$1;
(statearr_46225_46246[(1)] = (5));

} else {
var statearr_46226_46247 = state_46220__$1;
(statearr_46226_46247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (13))){
var state_46220__$1 = state_46220;
var statearr_46227_46248 = state_46220__$1;
(statearr_46227_46248[(2)] = null);

(statearr_46227_46248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (6))){
var inst_46197 = (state_46220[(7)]);
var inst_46203 = p.call(null,inst_46197);
var state_46220__$1 = state_46220;
if(cljs.core.truth_(inst_46203)){
var statearr_46228_46249 = state_46220__$1;
(statearr_46228_46249[(1)] = (9));

} else {
var statearr_46229_46250 = state_46220__$1;
(statearr_46229_46250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (3))){
var inst_46218 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46220__$1,inst_46218);
} else {
if((state_val_46221 === (12))){
var state_46220__$1 = state_46220;
var statearr_46230_46251 = state_46220__$1;
(statearr_46230_46251[(2)] = null);

(statearr_46230_46251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (2))){
var state_46220__$1 = state_46220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46220__$1,(4),ch);
} else {
if((state_val_46221 === (11))){
var inst_46197 = (state_46220[(7)]);
var inst_46207 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46220__$1,(8),inst_46207,inst_46197);
} else {
if((state_val_46221 === (9))){
var state_46220__$1 = state_46220;
var statearr_46231_46252 = state_46220__$1;
(statearr_46231_46252[(2)] = tc);

(statearr_46231_46252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (5))){
var inst_46200 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46201 = cljs.core.async.close_BANG_.call(null,fc);
var state_46220__$1 = (function (){var statearr_46232 = state_46220;
(statearr_46232[(8)] = inst_46200);

return statearr_46232;
})();
var statearr_46233_46253 = state_46220__$1;
(statearr_46233_46253[(2)] = inst_46201);

(statearr_46233_46253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (14))){
var inst_46214 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
var statearr_46234_46254 = state_46220__$1;
(statearr_46234_46254[(2)] = inst_46214);

(statearr_46234_46254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (10))){
var state_46220__$1 = state_46220;
var statearr_46235_46255 = state_46220__$1;
(statearr_46235_46255[(2)] = fc);

(statearr_46235_46255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46221 === (8))){
var inst_46209 = (state_46220[(2)]);
var state_46220__$1 = state_46220;
if(cljs.core.truth_(inst_46209)){
var statearr_46236_46256 = state_46220__$1;
(statearr_46236_46256[(1)] = (12));

} else {
var statearr_46237_46257 = state_46220__$1;
(statearr_46237_46257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___46243,tc,fc))
;
return ((function (switch__45698__auto__,c__45793__auto___46243,tc,fc){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_46238 = [null,null,null,null,null,null,null,null,null];
(statearr_46238[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_46238[(1)] = (1));

return statearr_46238;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_46220){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46239){if((e46239 instanceof Object)){
var ex__45702__auto__ = e46239;
var statearr_46240_46258 = state_46220;
(statearr_46240_46258[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46259 = state_46220;
state_46220 = G__46259;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_46220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_46220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___46243,tc,fc))
})();
var state__45795__auto__ = (function (){var statearr_46241 = f__45794__auto__.call(null);
(statearr_46241[(6)] = c__45793__auto___46243);

return statearr_46241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___46243,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_46280){
var state_val_46281 = (state_46280[(1)]);
if((state_val_46281 === (7))){
var inst_46276 = (state_46280[(2)]);
var state_46280__$1 = state_46280;
var statearr_46282_46300 = state_46280__$1;
(statearr_46282_46300[(2)] = inst_46276);

(statearr_46282_46300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (1))){
var inst_46260 = init;
var state_46280__$1 = (function (){var statearr_46283 = state_46280;
(statearr_46283[(7)] = inst_46260);

return statearr_46283;
})();
var statearr_46284_46301 = state_46280__$1;
(statearr_46284_46301[(2)] = null);

(statearr_46284_46301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (4))){
var inst_46263 = (state_46280[(8)]);
var inst_46263__$1 = (state_46280[(2)]);
var inst_46264 = (inst_46263__$1 == null);
var state_46280__$1 = (function (){var statearr_46285 = state_46280;
(statearr_46285[(8)] = inst_46263__$1);

return statearr_46285;
})();
if(cljs.core.truth_(inst_46264)){
var statearr_46286_46302 = state_46280__$1;
(statearr_46286_46302[(1)] = (5));

} else {
var statearr_46287_46303 = state_46280__$1;
(statearr_46287_46303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (6))){
var inst_46260 = (state_46280[(7)]);
var inst_46267 = (state_46280[(9)]);
var inst_46263 = (state_46280[(8)]);
var inst_46267__$1 = f.call(null,inst_46260,inst_46263);
var inst_46268 = cljs.core.reduced_QMARK_.call(null,inst_46267__$1);
var state_46280__$1 = (function (){var statearr_46288 = state_46280;
(statearr_46288[(9)] = inst_46267__$1);

return statearr_46288;
})();
if(inst_46268){
var statearr_46289_46304 = state_46280__$1;
(statearr_46289_46304[(1)] = (8));

} else {
var statearr_46290_46305 = state_46280__$1;
(statearr_46290_46305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (3))){
var inst_46278 = (state_46280[(2)]);
var state_46280__$1 = state_46280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46280__$1,inst_46278);
} else {
if((state_val_46281 === (2))){
var state_46280__$1 = state_46280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46280__$1,(4),ch);
} else {
if((state_val_46281 === (9))){
var inst_46267 = (state_46280[(9)]);
var inst_46260 = inst_46267;
var state_46280__$1 = (function (){var statearr_46291 = state_46280;
(statearr_46291[(7)] = inst_46260);

return statearr_46291;
})();
var statearr_46292_46306 = state_46280__$1;
(statearr_46292_46306[(2)] = null);

(statearr_46292_46306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (5))){
var inst_46260 = (state_46280[(7)]);
var state_46280__$1 = state_46280;
var statearr_46293_46307 = state_46280__$1;
(statearr_46293_46307[(2)] = inst_46260);

(statearr_46293_46307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (10))){
var inst_46274 = (state_46280[(2)]);
var state_46280__$1 = state_46280;
var statearr_46294_46308 = state_46280__$1;
(statearr_46294_46308[(2)] = inst_46274);

(statearr_46294_46308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (8))){
var inst_46267 = (state_46280[(9)]);
var inst_46270 = cljs.core.deref.call(null,inst_46267);
var state_46280__$1 = state_46280;
var statearr_46295_46309 = state_46280__$1;
(statearr_46295_46309[(2)] = inst_46270);

(statearr_46295_46309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45699__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45699__auto____0 = (function (){
var statearr_46296 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46296[(0)] = cljs$core$async$reduce_$_state_machine__45699__auto__);

(statearr_46296[(1)] = (1));

return statearr_46296;
});
var cljs$core$async$reduce_$_state_machine__45699__auto____1 = (function (state_46280){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46297){if((e46297 instanceof Object)){
var ex__45702__auto__ = e46297;
var statearr_46298_46310 = state_46280;
(statearr_46298_46310[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46311 = state_46280;
state_46280 = G__46311;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45699__auto__ = function(state_46280){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45699__auto____1.call(this,state_46280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45699__auto____0;
cljs$core$async$reduce_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45699__auto____1;
return cljs$core$async$reduce_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_46299 = f__45794__auto__.call(null);
(statearr_46299[(6)] = c__45793__auto__);

return statearr_46299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__,f__$1){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__,f__$1){
return (function (state_46317){
var state_val_46318 = (state_46317[(1)]);
if((state_val_46318 === (1))){
var inst_46312 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46317__$1 = state_46317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46317__$1,(2),inst_46312);
} else {
if((state_val_46318 === (2))){
var inst_46314 = (state_46317[(2)]);
var inst_46315 = f__$1.call(null,inst_46314);
var state_46317__$1 = state_46317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46317__$1,inst_46315);
} else {
return null;
}
}
});})(c__45793__auto__,f__$1))
;
return ((function (switch__45698__auto__,c__45793__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45699__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45699__auto____0 = (function (){
var statearr_46319 = [null,null,null,null,null,null,null];
(statearr_46319[(0)] = cljs$core$async$transduce_$_state_machine__45699__auto__);

(statearr_46319[(1)] = (1));

return statearr_46319;
});
var cljs$core$async$transduce_$_state_machine__45699__auto____1 = (function (state_46317){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46320){if((e46320 instanceof Object)){
var ex__45702__auto__ = e46320;
var statearr_46321_46323 = state_46317;
(statearr_46321_46323[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46324 = state_46317;
state_46317 = G__46324;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45699__auto__ = function(state_46317){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45699__auto____1.call(this,state_46317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45699__auto____0;
cljs$core$async$transduce_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45699__auto____1;
return cljs$core$async$transduce_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__,f__$1))
})();
var state__45795__auto__ = (function (){var statearr_46322 = f__45794__auto__.call(null);
(statearr_46322[(6)] = c__45793__auto__);

return statearr_46322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__,f__$1))
);

return c__45793__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46326 = arguments.length;
switch (G__46326) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_46351){
var state_val_46352 = (state_46351[(1)]);
if((state_val_46352 === (7))){
var inst_46333 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
var statearr_46353_46374 = state_46351__$1;
(statearr_46353_46374[(2)] = inst_46333);

(statearr_46353_46374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (1))){
var inst_46327 = cljs.core.seq.call(null,coll);
var inst_46328 = inst_46327;
var state_46351__$1 = (function (){var statearr_46354 = state_46351;
(statearr_46354[(7)] = inst_46328);

return statearr_46354;
})();
var statearr_46355_46375 = state_46351__$1;
(statearr_46355_46375[(2)] = null);

(statearr_46355_46375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (4))){
var inst_46328 = (state_46351[(7)]);
var inst_46331 = cljs.core.first.call(null,inst_46328);
var state_46351__$1 = state_46351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46351__$1,(7),ch,inst_46331);
} else {
if((state_val_46352 === (13))){
var inst_46345 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
var statearr_46356_46376 = state_46351__$1;
(statearr_46356_46376[(2)] = inst_46345);

(statearr_46356_46376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (6))){
var inst_46336 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
if(cljs.core.truth_(inst_46336)){
var statearr_46357_46377 = state_46351__$1;
(statearr_46357_46377[(1)] = (8));

} else {
var statearr_46358_46378 = state_46351__$1;
(statearr_46358_46378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (3))){
var inst_46349 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46351__$1,inst_46349);
} else {
if((state_val_46352 === (12))){
var state_46351__$1 = state_46351;
var statearr_46359_46379 = state_46351__$1;
(statearr_46359_46379[(2)] = null);

(statearr_46359_46379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (2))){
var inst_46328 = (state_46351[(7)]);
var state_46351__$1 = state_46351;
if(cljs.core.truth_(inst_46328)){
var statearr_46360_46380 = state_46351__$1;
(statearr_46360_46380[(1)] = (4));

} else {
var statearr_46361_46381 = state_46351__$1;
(statearr_46361_46381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (11))){
var inst_46342 = cljs.core.async.close_BANG_.call(null,ch);
var state_46351__$1 = state_46351;
var statearr_46362_46382 = state_46351__$1;
(statearr_46362_46382[(2)] = inst_46342);

(statearr_46362_46382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (9))){
var state_46351__$1 = state_46351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46363_46383 = state_46351__$1;
(statearr_46363_46383[(1)] = (11));

} else {
var statearr_46364_46384 = state_46351__$1;
(statearr_46364_46384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (5))){
var inst_46328 = (state_46351[(7)]);
var state_46351__$1 = state_46351;
var statearr_46365_46385 = state_46351__$1;
(statearr_46365_46385[(2)] = inst_46328);

(statearr_46365_46385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (10))){
var inst_46347 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
var statearr_46366_46386 = state_46351__$1;
(statearr_46366_46386[(2)] = inst_46347);

(statearr_46366_46386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (8))){
var inst_46328 = (state_46351[(7)]);
var inst_46338 = cljs.core.next.call(null,inst_46328);
var inst_46328__$1 = inst_46338;
var state_46351__$1 = (function (){var statearr_46367 = state_46351;
(statearr_46367[(7)] = inst_46328__$1);

return statearr_46367;
})();
var statearr_46368_46387 = state_46351__$1;
(statearr_46368_46387[(2)] = null);

(statearr_46368_46387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_46369 = [null,null,null,null,null,null,null,null];
(statearr_46369[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_46369[(1)] = (1));

return statearr_46369;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_46351){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46370){if((e46370 instanceof Object)){
var ex__45702__auto__ = e46370;
var statearr_46371_46388 = state_46351;
(statearr_46371_46388[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46389 = state_46351;
state_46351 = G__46389;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_46351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_46351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_46372 = f__45794__auto__.call(null);
(statearr_46372[(6)] = c__45793__auto__);

return statearr_46372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46390 = (function (ch,cs,meta46391){
this.ch = ch;
this.cs = cs;
this.meta46391 = meta46391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46392,meta46391__$1){
var self__ = this;
var _46392__$1 = this;
return (new cljs.core.async.t_cljs$core$async46390(self__.ch,self__.cs,meta46391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46392){
var self__ = this;
var _46392__$1 = this;
return self__.meta46391;
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46391","meta46391",-755844461,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46390";

cljs.core.async.t_cljs$core$async46390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async46390");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46390.
 */
cljs.core.async.__GT_t_cljs$core$async46390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46390(ch__$1,cs__$1,meta46391){
return (new cljs.core.async.t_cljs$core$async46390(ch__$1,cs__$1,meta46391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46390(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45793__auto___46612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___46612,cs,m,dchan,dctr,done){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___46612,cs,m,dchan,dctr,done){
return (function (state_46527){
var state_val_46528 = (state_46527[(1)]);
if((state_val_46528 === (7))){
var inst_46523 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46529_46613 = state_46527__$1;
(statearr_46529_46613[(2)] = inst_46523);

(statearr_46529_46613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (20))){
var inst_46426 = (state_46527[(7)]);
var inst_46438 = cljs.core.first.call(null,inst_46426);
var inst_46439 = cljs.core.nth.call(null,inst_46438,(0),null);
var inst_46440 = cljs.core.nth.call(null,inst_46438,(1),null);
var state_46527__$1 = (function (){var statearr_46530 = state_46527;
(statearr_46530[(8)] = inst_46439);

return statearr_46530;
})();
if(cljs.core.truth_(inst_46440)){
var statearr_46531_46614 = state_46527__$1;
(statearr_46531_46614[(1)] = (22));

} else {
var statearr_46532_46615 = state_46527__$1;
(statearr_46532_46615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (27))){
var inst_46395 = (state_46527[(9)]);
var inst_46470 = (state_46527[(10)]);
var inst_46475 = (state_46527[(11)]);
var inst_46468 = (state_46527[(12)]);
var inst_46475__$1 = cljs.core._nth.call(null,inst_46468,inst_46470);
var inst_46476 = cljs.core.async.put_BANG_.call(null,inst_46475__$1,inst_46395,done);
var state_46527__$1 = (function (){var statearr_46533 = state_46527;
(statearr_46533[(11)] = inst_46475__$1);

return statearr_46533;
})();
if(cljs.core.truth_(inst_46476)){
var statearr_46534_46616 = state_46527__$1;
(statearr_46534_46616[(1)] = (30));

} else {
var statearr_46535_46617 = state_46527__$1;
(statearr_46535_46617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (1))){
var state_46527__$1 = state_46527;
var statearr_46536_46618 = state_46527__$1;
(statearr_46536_46618[(2)] = null);

(statearr_46536_46618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (24))){
var inst_46426 = (state_46527[(7)]);
var inst_46445 = (state_46527[(2)]);
var inst_46446 = cljs.core.next.call(null,inst_46426);
var inst_46404 = inst_46446;
var inst_46405 = null;
var inst_46406 = (0);
var inst_46407 = (0);
var state_46527__$1 = (function (){var statearr_46537 = state_46527;
(statearr_46537[(13)] = inst_46445);

(statearr_46537[(14)] = inst_46406);

(statearr_46537[(15)] = inst_46405);

(statearr_46537[(16)] = inst_46407);

(statearr_46537[(17)] = inst_46404);

return statearr_46537;
})();
var statearr_46538_46619 = state_46527__$1;
(statearr_46538_46619[(2)] = null);

(statearr_46538_46619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (39))){
var state_46527__$1 = state_46527;
var statearr_46542_46620 = state_46527__$1;
(statearr_46542_46620[(2)] = null);

(statearr_46542_46620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (4))){
var inst_46395 = (state_46527[(9)]);
var inst_46395__$1 = (state_46527[(2)]);
var inst_46396 = (inst_46395__$1 == null);
var state_46527__$1 = (function (){var statearr_46543 = state_46527;
(statearr_46543[(9)] = inst_46395__$1);

return statearr_46543;
})();
if(cljs.core.truth_(inst_46396)){
var statearr_46544_46621 = state_46527__$1;
(statearr_46544_46621[(1)] = (5));

} else {
var statearr_46545_46622 = state_46527__$1;
(statearr_46545_46622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (15))){
var inst_46406 = (state_46527[(14)]);
var inst_46405 = (state_46527[(15)]);
var inst_46407 = (state_46527[(16)]);
var inst_46404 = (state_46527[(17)]);
var inst_46422 = (state_46527[(2)]);
var inst_46423 = (inst_46407 + (1));
var tmp46539 = inst_46406;
var tmp46540 = inst_46405;
var tmp46541 = inst_46404;
var inst_46404__$1 = tmp46541;
var inst_46405__$1 = tmp46540;
var inst_46406__$1 = tmp46539;
var inst_46407__$1 = inst_46423;
var state_46527__$1 = (function (){var statearr_46546 = state_46527;
(statearr_46546[(14)] = inst_46406__$1);

(statearr_46546[(15)] = inst_46405__$1);

(statearr_46546[(16)] = inst_46407__$1);

(statearr_46546[(17)] = inst_46404__$1);

(statearr_46546[(18)] = inst_46422);

return statearr_46546;
})();
var statearr_46547_46623 = state_46527__$1;
(statearr_46547_46623[(2)] = null);

(statearr_46547_46623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (21))){
var inst_46449 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46551_46624 = state_46527__$1;
(statearr_46551_46624[(2)] = inst_46449);

(statearr_46551_46624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (31))){
var inst_46475 = (state_46527[(11)]);
var inst_46479 = done.call(null,null);
var inst_46480 = cljs.core.async.untap_STAR_.call(null,m,inst_46475);
var state_46527__$1 = (function (){var statearr_46552 = state_46527;
(statearr_46552[(19)] = inst_46479);

return statearr_46552;
})();
var statearr_46553_46625 = state_46527__$1;
(statearr_46553_46625[(2)] = inst_46480);

(statearr_46553_46625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (32))){
var inst_46469 = (state_46527[(20)]);
var inst_46470 = (state_46527[(10)]);
var inst_46468 = (state_46527[(12)]);
var inst_46467 = (state_46527[(21)]);
var inst_46482 = (state_46527[(2)]);
var inst_46483 = (inst_46470 + (1));
var tmp46548 = inst_46469;
var tmp46549 = inst_46468;
var tmp46550 = inst_46467;
var inst_46467__$1 = tmp46550;
var inst_46468__$1 = tmp46549;
var inst_46469__$1 = tmp46548;
var inst_46470__$1 = inst_46483;
var state_46527__$1 = (function (){var statearr_46554 = state_46527;
(statearr_46554[(22)] = inst_46482);

(statearr_46554[(20)] = inst_46469__$1);

(statearr_46554[(10)] = inst_46470__$1);

(statearr_46554[(12)] = inst_46468__$1);

(statearr_46554[(21)] = inst_46467__$1);

return statearr_46554;
})();
var statearr_46555_46626 = state_46527__$1;
(statearr_46555_46626[(2)] = null);

(statearr_46555_46626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (40))){
var inst_46495 = (state_46527[(23)]);
var inst_46499 = done.call(null,null);
var inst_46500 = cljs.core.async.untap_STAR_.call(null,m,inst_46495);
var state_46527__$1 = (function (){var statearr_46556 = state_46527;
(statearr_46556[(24)] = inst_46499);

return statearr_46556;
})();
var statearr_46557_46627 = state_46527__$1;
(statearr_46557_46627[(2)] = inst_46500);

(statearr_46557_46627[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (33))){
var inst_46486 = (state_46527[(25)]);
var inst_46488 = cljs.core.chunked_seq_QMARK_.call(null,inst_46486);
var state_46527__$1 = state_46527;
if(inst_46488){
var statearr_46558_46628 = state_46527__$1;
(statearr_46558_46628[(1)] = (36));

} else {
var statearr_46559_46629 = state_46527__$1;
(statearr_46559_46629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (13))){
var inst_46416 = (state_46527[(26)]);
var inst_46419 = cljs.core.async.close_BANG_.call(null,inst_46416);
var state_46527__$1 = state_46527;
var statearr_46560_46630 = state_46527__$1;
(statearr_46560_46630[(2)] = inst_46419);

(statearr_46560_46630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (22))){
var inst_46439 = (state_46527[(8)]);
var inst_46442 = cljs.core.async.close_BANG_.call(null,inst_46439);
var state_46527__$1 = state_46527;
var statearr_46561_46631 = state_46527__$1;
(statearr_46561_46631[(2)] = inst_46442);

(statearr_46561_46631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (36))){
var inst_46486 = (state_46527[(25)]);
var inst_46490 = cljs.core.chunk_first.call(null,inst_46486);
var inst_46491 = cljs.core.chunk_rest.call(null,inst_46486);
var inst_46492 = cljs.core.count.call(null,inst_46490);
var inst_46467 = inst_46491;
var inst_46468 = inst_46490;
var inst_46469 = inst_46492;
var inst_46470 = (0);
var state_46527__$1 = (function (){var statearr_46562 = state_46527;
(statearr_46562[(20)] = inst_46469);

(statearr_46562[(10)] = inst_46470);

(statearr_46562[(12)] = inst_46468);

(statearr_46562[(21)] = inst_46467);

return statearr_46562;
})();
var statearr_46563_46632 = state_46527__$1;
(statearr_46563_46632[(2)] = null);

(statearr_46563_46632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (41))){
var inst_46486 = (state_46527[(25)]);
var inst_46502 = (state_46527[(2)]);
var inst_46503 = cljs.core.next.call(null,inst_46486);
var inst_46467 = inst_46503;
var inst_46468 = null;
var inst_46469 = (0);
var inst_46470 = (0);
var state_46527__$1 = (function (){var statearr_46564 = state_46527;
(statearr_46564[(20)] = inst_46469);

(statearr_46564[(10)] = inst_46470);

(statearr_46564[(27)] = inst_46502);

(statearr_46564[(12)] = inst_46468);

(statearr_46564[(21)] = inst_46467);

return statearr_46564;
})();
var statearr_46565_46633 = state_46527__$1;
(statearr_46565_46633[(2)] = null);

(statearr_46565_46633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (43))){
var state_46527__$1 = state_46527;
var statearr_46566_46634 = state_46527__$1;
(statearr_46566_46634[(2)] = null);

(statearr_46566_46634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (29))){
var inst_46511 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46567_46635 = state_46527__$1;
(statearr_46567_46635[(2)] = inst_46511);

(statearr_46567_46635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (44))){
var inst_46520 = (state_46527[(2)]);
var state_46527__$1 = (function (){var statearr_46568 = state_46527;
(statearr_46568[(28)] = inst_46520);

return statearr_46568;
})();
var statearr_46569_46636 = state_46527__$1;
(statearr_46569_46636[(2)] = null);

(statearr_46569_46636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (6))){
var inst_46459 = (state_46527[(29)]);
var inst_46458 = cljs.core.deref.call(null,cs);
var inst_46459__$1 = cljs.core.keys.call(null,inst_46458);
var inst_46460 = cljs.core.count.call(null,inst_46459__$1);
var inst_46461 = cljs.core.reset_BANG_.call(null,dctr,inst_46460);
var inst_46466 = cljs.core.seq.call(null,inst_46459__$1);
var inst_46467 = inst_46466;
var inst_46468 = null;
var inst_46469 = (0);
var inst_46470 = (0);
var state_46527__$1 = (function (){var statearr_46570 = state_46527;
(statearr_46570[(30)] = inst_46461);

(statearr_46570[(29)] = inst_46459__$1);

(statearr_46570[(20)] = inst_46469);

(statearr_46570[(10)] = inst_46470);

(statearr_46570[(12)] = inst_46468);

(statearr_46570[(21)] = inst_46467);

return statearr_46570;
})();
var statearr_46571_46637 = state_46527__$1;
(statearr_46571_46637[(2)] = null);

(statearr_46571_46637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (28))){
var inst_46486 = (state_46527[(25)]);
var inst_46467 = (state_46527[(21)]);
var inst_46486__$1 = cljs.core.seq.call(null,inst_46467);
var state_46527__$1 = (function (){var statearr_46572 = state_46527;
(statearr_46572[(25)] = inst_46486__$1);

return statearr_46572;
})();
if(inst_46486__$1){
var statearr_46573_46638 = state_46527__$1;
(statearr_46573_46638[(1)] = (33));

} else {
var statearr_46574_46639 = state_46527__$1;
(statearr_46574_46639[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (25))){
var inst_46469 = (state_46527[(20)]);
var inst_46470 = (state_46527[(10)]);
var inst_46472 = (inst_46470 < inst_46469);
var inst_46473 = inst_46472;
var state_46527__$1 = state_46527;
if(cljs.core.truth_(inst_46473)){
var statearr_46575_46640 = state_46527__$1;
(statearr_46575_46640[(1)] = (27));

} else {
var statearr_46576_46641 = state_46527__$1;
(statearr_46576_46641[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (34))){
var state_46527__$1 = state_46527;
var statearr_46577_46642 = state_46527__$1;
(statearr_46577_46642[(2)] = null);

(statearr_46577_46642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (17))){
var state_46527__$1 = state_46527;
var statearr_46578_46643 = state_46527__$1;
(statearr_46578_46643[(2)] = null);

(statearr_46578_46643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (3))){
var inst_46525 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46527__$1,inst_46525);
} else {
if((state_val_46528 === (12))){
var inst_46454 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46579_46644 = state_46527__$1;
(statearr_46579_46644[(2)] = inst_46454);

(statearr_46579_46644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (2))){
var state_46527__$1 = state_46527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46527__$1,(4),ch);
} else {
if((state_val_46528 === (23))){
var state_46527__$1 = state_46527;
var statearr_46580_46645 = state_46527__$1;
(statearr_46580_46645[(2)] = null);

(statearr_46580_46645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (35))){
var inst_46509 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46581_46646 = state_46527__$1;
(statearr_46581_46646[(2)] = inst_46509);

(statearr_46581_46646[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (19))){
var inst_46426 = (state_46527[(7)]);
var inst_46430 = cljs.core.chunk_first.call(null,inst_46426);
var inst_46431 = cljs.core.chunk_rest.call(null,inst_46426);
var inst_46432 = cljs.core.count.call(null,inst_46430);
var inst_46404 = inst_46431;
var inst_46405 = inst_46430;
var inst_46406 = inst_46432;
var inst_46407 = (0);
var state_46527__$1 = (function (){var statearr_46582 = state_46527;
(statearr_46582[(14)] = inst_46406);

(statearr_46582[(15)] = inst_46405);

(statearr_46582[(16)] = inst_46407);

(statearr_46582[(17)] = inst_46404);

return statearr_46582;
})();
var statearr_46583_46647 = state_46527__$1;
(statearr_46583_46647[(2)] = null);

(statearr_46583_46647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (11))){
var inst_46426 = (state_46527[(7)]);
var inst_46404 = (state_46527[(17)]);
var inst_46426__$1 = cljs.core.seq.call(null,inst_46404);
var state_46527__$1 = (function (){var statearr_46584 = state_46527;
(statearr_46584[(7)] = inst_46426__$1);

return statearr_46584;
})();
if(inst_46426__$1){
var statearr_46585_46648 = state_46527__$1;
(statearr_46585_46648[(1)] = (16));

} else {
var statearr_46586_46649 = state_46527__$1;
(statearr_46586_46649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (9))){
var inst_46456 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46587_46650 = state_46527__$1;
(statearr_46587_46650[(2)] = inst_46456);

(statearr_46587_46650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (5))){
var inst_46402 = cljs.core.deref.call(null,cs);
var inst_46403 = cljs.core.seq.call(null,inst_46402);
var inst_46404 = inst_46403;
var inst_46405 = null;
var inst_46406 = (0);
var inst_46407 = (0);
var state_46527__$1 = (function (){var statearr_46588 = state_46527;
(statearr_46588[(14)] = inst_46406);

(statearr_46588[(15)] = inst_46405);

(statearr_46588[(16)] = inst_46407);

(statearr_46588[(17)] = inst_46404);

return statearr_46588;
})();
var statearr_46589_46651 = state_46527__$1;
(statearr_46589_46651[(2)] = null);

(statearr_46589_46651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (14))){
var state_46527__$1 = state_46527;
var statearr_46590_46652 = state_46527__$1;
(statearr_46590_46652[(2)] = null);

(statearr_46590_46652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (45))){
var inst_46517 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46591_46653 = state_46527__$1;
(statearr_46591_46653[(2)] = inst_46517);

(statearr_46591_46653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (26))){
var inst_46459 = (state_46527[(29)]);
var inst_46513 = (state_46527[(2)]);
var inst_46514 = cljs.core.seq.call(null,inst_46459);
var state_46527__$1 = (function (){var statearr_46592 = state_46527;
(statearr_46592[(31)] = inst_46513);

return statearr_46592;
})();
if(inst_46514){
var statearr_46593_46654 = state_46527__$1;
(statearr_46593_46654[(1)] = (42));

} else {
var statearr_46594_46655 = state_46527__$1;
(statearr_46594_46655[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (16))){
var inst_46426 = (state_46527[(7)]);
var inst_46428 = cljs.core.chunked_seq_QMARK_.call(null,inst_46426);
var state_46527__$1 = state_46527;
if(inst_46428){
var statearr_46595_46656 = state_46527__$1;
(statearr_46595_46656[(1)] = (19));

} else {
var statearr_46596_46657 = state_46527__$1;
(statearr_46596_46657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (38))){
var inst_46506 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46597_46658 = state_46527__$1;
(statearr_46597_46658[(2)] = inst_46506);

(statearr_46597_46658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (30))){
var state_46527__$1 = state_46527;
var statearr_46598_46659 = state_46527__$1;
(statearr_46598_46659[(2)] = null);

(statearr_46598_46659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (10))){
var inst_46405 = (state_46527[(15)]);
var inst_46407 = (state_46527[(16)]);
var inst_46415 = cljs.core._nth.call(null,inst_46405,inst_46407);
var inst_46416 = cljs.core.nth.call(null,inst_46415,(0),null);
var inst_46417 = cljs.core.nth.call(null,inst_46415,(1),null);
var state_46527__$1 = (function (){var statearr_46599 = state_46527;
(statearr_46599[(26)] = inst_46416);

return statearr_46599;
})();
if(cljs.core.truth_(inst_46417)){
var statearr_46600_46660 = state_46527__$1;
(statearr_46600_46660[(1)] = (13));

} else {
var statearr_46601_46661 = state_46527__$1;
(statearr_46601_46661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (18))){
var inst_46452 = (state_46527[(2)]);
var state_46527__$1 = state_46527;
var statearr_46602_46662 = state_46527__$1;
(statearr_46602_46662[(2)] = inst_46452);

(statearr_46602_46662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (42))){
var state_46527__$1 = state_46527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46527__$1,(45),dchan);
} else {
if((state_val_46528 === (37))){
var inst_46486 = (state_46527[(25)]);
var inst_46395 = (state_46527[(9)]);
var inst_46495 = (state_46527[(23)]);
var inst_46495__$1 = cljs.core.first.call(null,inst_46486);
var inst_46496 = cljs.core.async.put_BANG_.call(null,inst_46495__$1,inst_46395,done);
var state_46527__$1 = (function (){var statearr_46603 = state_46527;
(statearr_46603[(23)] = inst_46495__$1);

return statearr_46603;
})();
if(cljs.core.truth_(inst_46496)){
var statearr_46604_46663 = state_46527__$1;
(statearr_46604_46663[(1)] = (39));

} else {
var statearr_46605_46664 = state_46527__$1;
(statearr_46605_46664[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46528 === (8))){
var inst_46406 = (state_46527[(14)]);
var inst_46407 = (state_46527[(16)]);
var inst_46409 = (inst_46407 < inst_46406);
var inst_46410 = inst_46409;
var state_46527__$1 = state_46527;
if(cljs.core.truth_(inst_46410)){
var statearr_46606_46665 = state_46527__$1;
(statearr_46606_46665[(1)] = (10));

} else {
var statearr_46607_46666 = state_46527__$1;
(statearr_46607_46666[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___46612,cs,m,dchan,dctr,done))
;
return ((function (switch__45698__auto__,c__45793__auto___46612,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45699__auto__ = null;
var cljs$core$async$mult_$_state_machine__45699__auto____0 = (function (){
var statearr_46608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46608[(0)] = cljs$core$async$mult_$_state_machine__45699__auto__);

(statearr_46608[(1)] = (1));

return statearr_46608;
});
var cljs$core$async$mult_$_state_machine__45699__auto____1 = (function (state_46527){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46609){if((e46609 instanceof Object)){
var ex__45702__auto__ = e46609;
var statearr_46610_46667 = state_46527;
(statearr_46610_46667[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46668 = state_46527;
state_46527 = G__46668;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45699__auto__ = function(state_46527){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45699__auto____1.call(this,state_46527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45699__auto____0;
cljs$core$async$mult_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45699__auto____1;
return cljs$core$async$mult_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___46612,cs,m,dchan,dctr,done))
})();
var state__45795__auto__ = (function (){var statearr_46611 = f__45794__auto__.call(null);
(statearr_46611[(6)] = c__45793__auto___46612);

return statearr_46611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___46612,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46670 = arguments.length;
switch (G__46670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46682 = arguments.length;
var i__4731__auto___46683 = (0);
while(true){
if((i__4731__auto___46683 < len__4730__auto___46682)){
args__4736__auto__.push((arguments[i__4731__auto___46683]));

var G__46684 = (i__4731__auto___46683 + (1));
i__4731__auto___46683 = G__46684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46676){
var map__46677 = p__46676;
var map__46677__$1 = (((((!((map__46677 == null))))?(((((map__46677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46677):map__46677);
var opts = map__46677__$1;
var statearr_46679_46685 = state;
(statearr_46679_46685[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__46677,map__46677__$1,opts){
return (function (val){
var statearr_46680_46686 = state;
(statearr_46680_46686[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46677,map__46677__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46681_46687 = state;
(statearr_46681_46687[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46672){
var G__46673 = cljs.core.first.call(null,seq46672);
var seq46672__$1 = cljs.core.next.call(null,seq46672);
var G__46674 = cljs.core.first.call(null,seq46672__$1);
var seq46672__$2 = cljs.core.next.call(null,seq46672__$1);
var G__46675 = cljs.core.first.call(null,seq46672__$2);
var seq46672__$3 = cljs.core.next.call(null,seq46672__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46673,G__46674,G__46675,seq46672__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46688 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46689){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46689 = meta46689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46690,meta46689__$1){
var self__ = this;
var _46690__$1 = this;
return (new cljs.core.async.t_cljs$core$async46688(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46689__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46690){
var self__ = this;
var _46690__$1 = this;
return self__.meta46689;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46689","meta46689",-1086619884,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46688";

cljs.core.async.t_cljs$core$async46688.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async46688");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46688.
 */
cljs.core.async.__GT_t_cljs$core$async46688 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46688(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46689){
return (new cljs.core.async.t_cljs$core$async46688(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46689));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46688(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45793__auto___46852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46792){
var state_val_46793 = (state_46792[(1)]);
if((state_val_46793 === (7))){
var inst_46707 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
var statearr_46794_46853 = state_46792__$1;
(statearr_46794_46853[(2)] = inst_46707);

(statearr_46794_46853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (20))){
var inst_46719 = (state_46792[(7)]);
var state_46792__$1 = state_46792;
var statearr_46795_46854 = state_46792__$1;
(statearr_46795_46854[(2)] = inst_46719);

(statearr_46795_46854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (27))){
var state_46792__$1 = state_46792;
var statearr_46796_46855 = state_46792__$1;
(statearr_46796_46855[(2)] = null);

(statearr_46796_46855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (1))){
var inst_46694 = (state_46792[(8)]);
var inst_46694__$1 = calc_state.call(null);
var inst_46696 = (inst_46694__$1 == null);
var inst_46697 = cljs.core.not.call(null,inst_46696);
var state_46792__$1 = (function (){var statearr_46797 = state_46792;
(statearr_46797[(8)] = inst_46694__$1);

return statearr_46797;
})();
if(inst_46697){
var statearr_46798_46856 = state_46792__$1;
(statearr_46798_46856[(1)] = (2));

} else {
var statearr_46799_46857 = state_46792__$1;
(statearr_46799_46857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (24))){
var inst_46766 = (state_46792[(9)]);
var inst_46743 = (state_46792[(10)]);
var inst_46752 = (state_46792[(11)]);
var inst_46766__$1 = inst_46743.call(null,inst_46752);
var state_46792__$1 = (function (){var statearr_46800 = state_46792;
(statearr_46800[(9)] = inst_46766__$1);

return statearr_46800;
})();
if(cljs.core.truth_(inst_46766__$1)){
var statearr_46801_46858 = state_46792__$1;
(statearr_46801_46858[(1)] = (29));

} else {
var statearr_46802_46859 = state_46792__$1;
(statearr_46802_46859[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (4))){
var inst_46710 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46710)){
var statearr_46803_46860 = state_46792__$1;
(statearr_46803_46860[(1)] = (8));

} else {
var statearr_46804_46861 = state_46792__$1;
(statearr_46804_46861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (15))){
var inst_46737 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46737)){
var statearr_46805_46862 = state_46792__$1;
(statearr_46805_46862[(1)] = (19));

} else {
var statearr_46806_46863 = state_46792__$1;
(statearr_46806_46863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (21))){
var inst_46742 = (state_46792[(12)]);
var inst_46742__$1 = (state_46792[(2)]);
var inst_46743 = cljs.core.get.call(null,inst_46742__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46744 = cljs.core.get.call(null,inst_46742__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46745 = cljs.core.get.call(null,inst_46742__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46792__$1 = (function (){var statearr_46807 = state_46792;
(statearr_46807[(13)] = inst_46744);

(statearr_46807[(12)] = inst_46742__$1);

(statearr_46807[(10)] = inst_46743);

return statearr_46807;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46792__$1,(22),inst_46745);
} else {
if((state_val_46793 === (31))){
var inst_46774 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46774)){
var statearr_46808_46864 = state_46792__$1;
(statearr_46808_46864[(1)] = (32));

} else {
var statearr_46809_46865 = state_46792__$1;
(statearr_46809_46865[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (32))){
var inst_46751 = (state_46792[(14)]);
var state_46792__$1 = state_46792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46792__$1,(35),out,inst_46751);
} else {
if((state_val_46793 === (33))){
var inst_46742 = (state_46792[(12)]);
var inst_46719 = inst_46742;
var state_46792__$1 = (function (){var statearr_46810 = state_46792;
(statearr_46810[(7)] = inst_46719);

return statearr_46810;
})();
var statearr_46811_46866 = state_46792__$1;
(statearr_46811_46866[(2)] = null);

(statearr_46811_46866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (13))){
var inst_46719 = (state_46792[(7)]);
var inst_46726 = inst_46719.cljs$lang$protocol_mask$partition0$;
var inst_46727 = (inst_46726 & (64));
var inst_46728 = inst_46719.cljs$core$ISeq$;
var inst_46729 = (cljs.core.PROTOCOL_SENTINEL === inst_46728);
var inst_46730 = ((inst_46727) || (inst_46729));
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46730)){
var statearr_46812_46867 = state_46792__$1;
(statearr_46812_46867[(1)] = (16));

} else {
var statearr_46813_46868 = state_46792__$1;
(statearr_46813_46868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (22))){
var inst_46752 = (state_46792[(11)]);
var inst_46751 = (state_46792[(14)]);
var inst_46750 = (state_46792[(2)]);
var inst_46751__$1 = cljs.core.nth.call(null,inst_46750,(0),null);
var inst_46752__$1 = cljs.core.nth.call(null,inst_46750,(1),null);
var inst_46753 = (inst_46751__$1 == null);
var inst_46754 = cljs.core._EQ_.call(null,inst_46752__$1,change);
var inst_46755 = ((inst_46753) || (inst_46754));
var state_46792__$1 = (function (){var statearr_46814 = state_46792;
(statearr_46814[(11)] = inst_46752__$1);

(statearr_46814[(14)] = inst_46751__$1);

return statearr_46814;
})();
if(cljs.core.truth_(inst_46755)){
var statearr_46815_46869 = state_46792__$1;
(statearr_46815_46869[(1)] = (23));

} else {
var statearr_46816_46870 = state_46792__$1;
(statearr_46816_46870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (36))){
var inst_46742 = (state_46792[(12)]);
var inst_46719 = inst_46742;
var state_46792__$1 = (function (){var statearr_46817 = state_46792;
(statearr_46817[(7)] = inst_46719);

return statearr_46817;
})();
var statearr_46818_46871 = state_46792__$1;
(statearr_46818_46871[(2)] = null);

(statearr_46818_46871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (29))){
var inst_46766 = (state_46792[(9)]);
var state_46792__$1 = state_46792;
var statearr_46819_46872 = state_46792__$1;
(statearr_46819_46872[(2)] = inst_46766);

(statearr_46819_46872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (6))){
var state_46792__$1 = state_46792;
var statearr_46820_46873 = state_46792__$1;
(statearr_46820_46873[(2)] = false);

(statearr_46820_46873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (28))){
var inst_46762 = (state_46792[(2)]);
var inst_46763 = calc_state.call(null);
var inst_46719 = inst_46763;
var state_46792__$1 = (function (){var statearr_46821 = state_46792;
(statearr_46821[(15)] = inst_46762);

(statearr_46821[(7)] = inst_46719);

return statearr_46821;
})();
var statearr_46822_46874 = state_46792__$1;
(statearr_46822_46874[(2)] = null);

(statearr_46822_46874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (25))){
var inst_46788 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
var statearr_46823_46875 = state_46792__$1;
(statearr_46823_46875[(2)] = inst_46788);

(statearr_46823_46875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (34))){
var inst_46786 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
var statearr_46824_46876 = state_46792__$1;
(statearr_46824_46876[(2)] = inst_46786);

(statearr_46824_46876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (17))){
var state_46792__$1 = state_46792;
var statearr_46825_46877 = state_46792__$1;
(statearr_46825_46877[(2)] = false);

(statearr_46825_46877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (3))){
var state_46792__$1 = state_46792;
var statearr_46826_46878 = state_46792__$1;
(statearr_46826_46878[(2)] = false);

(statearr_46826_46878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (12))){
var inst_46790 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46792__$1,inst_46790);
} else {
if((state_val_46793 === (2))){
var inst_46694 = (state_46792[(8)]);
var inst_46699 = inst_46694.cljs$lang$protocol_mask$partition0$;
var inst_46700 = (inst_46699 & (64));
var inst_46701 = inst_46694.cljs$core$ISeq$;
var inst_46702 = (cljs.core.PROTOCOL_SENTINEL === inst_46701);
var inst_46703 = ((inst_46700) || (inst_46702));
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46703)){
var statearr_46827_46879 = state_46792__$1;
(statearr_46827_46879[(1)] = (5));

} else {
var statearr_46828_46880 = state_46792__$1;
(statearr_46828_46880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (23))){
var inst_46751 = (state_46792[(14)]);
var inst_46757 = (inst_46751 == null);
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46757)){
var statearr_46829_46881 = state_46792__$1;
(statearr_46829_46881[(1)] = (26));

} else {
var statearr_46830_46882 = state_46792__$1;
(statearr_46830_46882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (35))){
var inst_46777 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
if(cljs.core.truth_(inst_46777)){
var statearr_46831_46883 = state_46792__$1;
(statearr_46831_46883[(1)] = (36));

} else {
var statearr_46832_46884 = state_46792__$1;
(statearr_46832_46884[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (19))){
var inst_46719 = (state_46792[(7)]);
var inst_46739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46719);
var state_46792__$1 = state_46792;
var statearr_46833_46885 = state_46792__$1;
(statearr_46833_46885[(2)] = inst_46739);

(statearr_46833_46885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (11))){
var inst_46719 = (state_46792[(7)]);
var inst_46723 = (inst_46719 == null);
var inst_46724 = cljs.core.not.call(null,inst_46723);
var state_46792__$1 = state_46792;
if(inst_46724){
var statearr_46834_46886 = state_46792__$1;
(statearr_46834_46886[(1)] = (13));

} else {
var statearr_46835_46887 = state_46792__$1;
(statearr_46835_46887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (9))){
var inst_46694 = (state_46792[(8)]);
var state_46792__$1 = state_46792;
var statearr_46836_46888 = state_46792__$1;
(statearr_46836_46888[(2)] = inst_46694);

(statearr_46836_46888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (5))){
var state_46792__$1 = state_46792;
var statearr_46837_46889 = state_46792__$1;
(statearr_46837_46889[(2)] = true);

(statearr_46837_46889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (14))){
var state_46792__$1 = state_46792;
var statearr_46838_46890 = state_46792__$1;
(statearr_46838_46890[(2)] = false);

(statearr_46838_46890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (26))){
var inst_46752 = (state_46792[(11)]);
var inst_46759 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46752);
var state_46792__$1 = state_46792;
var statearr_46839_46891 = state_46792__$1;
(statearr_46839_46891[(2)] = inst_46759);

(statearr_46839_46891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (16))){
var state_46792__$1 = state_46792;
var statearr_46840_46892 = state_46792__$1;
(statearr_46840_46892[(2)] = true);

(statearr_46840_46892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (38))){
var inst_46782 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
var statearr_46841_46893 = state_46792__$1;
(statearr_46841_46893[(2)] = inst_46782);

(statearr_46841_46893[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (30))){
var inst_46744 = (state_46792[(13)]);
var inst_46743 = (state_46792[(10)]);
var inst_46752 = (state_46792[(11)]);
var inst_46769 = cljs.core.empty_QMARK_.call(null,inst_46743);
var inst_46770 = inst_46744.call(null,inst_46752);
var inst_46771 = cljs.core.not.call(null,inst_46770);
var inst_46772 = ((inst_46769) && (inst_46771));
var state_46792__$1 = state_46792;
var statearr_46842_46894 = state_46792__$1;
(statearr_46842_46894[(2)] = inst_46772);

(statearr_46842_46894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (10))){
var inst_46694 = (state_46792[(8)]);
var inst_46715 = (state_46792[(2)]);
var inst_46716 = cljs.core.get.call(null,inst_46715,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46717 = cljs.core.get.call(null,inst_46715,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46718 = cljs.core.get.call(null,inst_46715,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46719 = inst_46694;
var state_46792__$1 = (function (){var statearr_46843 = state_46792;
(statearr_46843[(16)] = inst_46718);

(statearr_46843[(17)] = inst_46716);

(statearr_46843[(7)] = inst_46719);

(statearr_46843[(18)] = inst_46717);

return statearr_46843;
})();
var statearr_46844_46895 = state_46792__$1;
(statearr_46844_46895[(2)] = null);

(statearr_46844_46895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (18))){
var inst_46734 = (state_46792[(2)]);
var state_46792__$1 = state_46792;
var statearr_46845_46896 = state_46792__$1;
(statearr_46845_46896[(2)] = inst_46734);

(statearr_46845_46896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (37))){
var state_46792__$1 = state_46792;
var statearr_46846_46897 = state_46792__$1;
(statearr_46846_46897[(2)] = null);

(statearr_46846_46897[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46793 === (8))){
var inst_46694 = (state_46792[(8)]);
var inst_46712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46694);
var state_46792__$1 = state_46792;
var statearr_46847_46898 = state_46792__$1;
(statearr_46847_46898[(2)] = inst_46712);

(statearr_46847_46898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45698__auto__,c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45699__auto__ = null;
var cljs$core$async$mix_$_state_machine__45699__auto____0 = (function (){
var statearr_46848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46848[(0)] = cljs$core$async$mix_$_state_machine__45699__auto__);

(statearr_46848[(1)] = (1));

return statearr_46848;
});
var cljs$core$async$mix_$_state_machine__45699__auto____1 = (function (state_46792){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e46849){if((e46849 instanceof Object)){
var ex__45702__auto__ = e46849;
var statearr_46850_46899 = state_46792;
(statearr_46850_46899[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46900 = state_46792;
state_46792 = G__46900;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45699__auto__ = function(state_46792){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45699__auto____1.call(this,state_46792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45699__auto____0;
cljs$core$async$mix_$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45699__auto____1;
return cljs$core$async$mix_$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45795__auto__ = (function (){var statearr_46851 = f__45794__auto__.call(null);
(statearr_46851[(6)] = c__45793__auto___46852);

return statearr_46851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___46852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46902 = arguments.length;
switch (G__46902) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46906 = arguments.length;
switch (G__46906) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__46904_SHARP_){
if(cljs.core.truth_(p1__46904_SHARP_.call(null,topic))){
return p1__46904_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46904_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46907 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46908){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46908 = meta46908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46909,meta46908__$1){
var self__ = this;
var _46909__$1 = this;
return (new cljs.core.async.t_cljs$core$async46907(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46908__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46909){
var self__ = this;
var _46909__$1 = this;
return self__.meta46908;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46908","meta46908",-492493455,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46907";

cljs.core.async.t_cljs$core$async46907.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async46907");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46907.
 */
cljs.core.async.__GT_t_cljs$core$async46907 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46908){
return (new cljs.core.async.t_cljs$core$async46907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46908));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46907(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45793__auto___47027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47027,mults,ensure_mult,p){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47027,mults,ensure_mult,p){
return (function (state_46981){
var state_val_46982 = (state_46981[(1)]);
if((state_val_46982 === (7))){
var inst_46977 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_46983_47028 = state_46981__$1;
(statearr_46983_47028[(2)] = inst_46977);

(statearr_46983_47028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (20))){
var state_46981__$1 = state_46981;
var statearr_46984_47029 = state_46981__$1;
(statearr_46984_47029[(2)] = null);

(statearr_46984_47029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (1))){
var state_46981__$1 = state_46981;
var statearr_46985_47030 = state_46981__$1;
(statearr_46985_47030[(2)] = null);

(statearr_46985_47030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (24))){
var inst_46960 = (state_46981[(7)]);
var inst_46969 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46960);
var state_46981__$1 = state_46981;
var statearr_46986_47031 = state_46981__$1;
(statearr_46986_47031[(2)] = inst_46969);

(statearr_46986_47031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (4))){
var inst_46912 = (state_46981[(8)]);
var inst_46912__$1 = (state_46981[(2)]);
var inst_46913 = (inst_46912__$1 == null);
var state_46981__$1 = (function (){var statearr_46987 = state_46981;
(statearr_46987[(8)] = inst_46912__$1);

return statearr_46987;
})();
if(cljs.core.truth_(inst_46913)){
var statearr_46988_47032 = state_46981__$1;
(statearr_46988_47032[(1)] = (5));

} else {
var statearr_46989_47033 = state_46981__$1;
(statearr_46989_47033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (15))){
var inst_46954 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_46990_47034 = state_46981__$1;
(statearr_46990_47034[(2)] = inst_46954);

(statearr_46990_47034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (21))){
var inst_46974 = (state_46981[(2)]);
var state_46981__$1 = (function (){var statearr_46991 = state_46981;
(statearr_46991[(9)] = inst_46974);

return statearr_46991;
})();
var statearr_46992_47035 = state_46981__$1;
(statearr_46992_47035[(2)] = null);

(statearr_46992_47035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (13))){
var inst_46936 = (state_46981[(10)]);
var inst_46938 = cljs.core.chunked_seq_QMARK_.call(null,inst_46936);
var state_46981__$1 = state_46981;
if(inst_46938){
var statearr_46993_47036 = state_46981__$1;
(statearr_46993_47036[(1)] = (16));

} else {
var statearr_46994_47037 = state_46981__$1;
(statearr_46994_47037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (22))){
var inst_46966 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
if(cljs.core.truth_(inst_46966)){
var statearr_46995_47038 = state_46981__$1;
(statearr_46995_47038[(1)] = (23));

} else {
var statearr_46996_47039 = state_46981__$1;
(statearr_46996_47039[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (6))){
var inst_46912 = (state_46981[(8)]);
var inst_46960 = (state_46981[(7)]);
var inst_46962 = (state_46981[(11)]);
var inst_46960__$1 = topic_fn.call(null,inst_46912);
var inst_46961 = cljs.core.deref.call(null,mults);
var inst_46962__$1 = cljs.core.get.call(null,inst_46961,inst_46960__$1);
var state_46981__$1 = (function (){var statearr_46997 = state_46981;
(statearr_46997[(7)] = inst_46960__$1);

(statearr_46997[(11)] = inst_46962__$1);

return statearr_46997;
})();
if(cljs.core.truth_(inst_46962__$1)){
var statearr_46998_47040 = state_46981__$1;
(statearr_46998_47040[(1)] = (19));

} else {
var statearr_46999_47041 = state_46981__$1;
(statearr_46999_47041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (25))){
var inst_46971 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_47000_47042 = state_46981__$1;
(statearr_47000_47042[(2)] = inst_46971);

(statearr_47000_47042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (17))){
var inst_46936 = (state_46981[(10)]);
var inst_46945 = cljs.core.first.call(null,inst_46936);
var inst_46946 = cljs.core.async.muxch_STAR_.call(null,inst_46945);
var inst_46947 = cljs.core.async.close_BANG_.call(null,inst_46946);
var inst_46948 = cljs.core.next.call(null,inst_46936);
var inst_46922 = inst_46948;
var inst_46923 = null;
var inst_46924 = (0);
var inst_46925 = (0);
var state_46981__$1 = (function (){var statearr_47001 = state_46981;
(statearr_47001[(12)] = inst_46925);

(statearr_47001[(13)] = inst_46923);

(statearr_47001[(14)] = inst_46924);

(statearr_47001[(15)] = inst_46922);

(statearr_47001[(16)] = inst_46947);

return statearr_47001;
})();
var statearr_47002_47043 = state_46981__$1;
(statearr_47002_47043[(2)] = null);

(statearr_47002_47043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (3))){
var inst_46979 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46981__$1,inst_46979);
} else {
if((state_val_46982 === (12))){
var inst_46956 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_47003_47044 = state_46981__$1;
(statearr_47003_47044[(2)] = inst_46956);

(statearr_47003_47044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (2))){
var state_46981__$1 = state_46981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46981__$1,(4),ch);
} else {
if((state_val_46982 === (23))){
var state_46981__$1 = state_46981;
var statearr_47004_47045 = state_46981__$1;
(statearr_47004_47045[(2)] = null);

(statearr_47004_47045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (19))){
var inst_46912 = (state_46981[(8)]);
var inst_46962 = (state_46981[(11)]);
var inst_46964 = cljs.core.async.muxch_STAR_.call(null,inst_46962);
var state_46981__$1 = state_46981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46981__$1,(22),inst_46964,inst_46912);
} else {
if((state_val_46982 === (11))){
var inst_46922 = (state_46981[(15)]);
var inst_46936 = (state_46981[(10)]);
var inst_46936__$1 = cljs.core.seq.call(null,inst_46922);
var state_46981__$1 = (function (){var statearr_47005 = state_46981;
(statearr_47005[(10)] = inst_46936__$1);

return statearr_47005;
})();
if(inst_46936__$1){
var statearr_47006_47046 = state_46981__$1;
(statearr_47006_47046[(1)] = (13));

} else {
var statearr_47007_47047 = state_46981__$1;
(statearr_47007_47047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (9))){
var inst_46958 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_47008_47048 = state_46981__$1;
(statearr_47008_47048[(2)] = inst_46958);

(statearr_47008_47048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (5))){
var inst_46919 = cljs.core.deref.call(null,mults);
var inst_46920 = cljs.core.vals.call(null,inst_46919);
var inst_46921 = cljs.core.seq.call(null,inst_46920);
var inst_46922 = inst_46921;
var inst_46923 = null;
var inst_46924 = (0);
var inst_46925 = (0);
var state_46981__$1 = (function (){var statearr_47009 = state_46981;
(statearr_47009[(12)] = inst_46925);

(statearr_47009[(13)] = inst_46923);

(statearr_47009[(14)] = inst_46924);

(statearr_47009[(15)] = inst_46922);

return statearr_47009;
})();
var statearr_47010_47049 = state_46981__$1;
(statearr_47010_47049[(2)] = null);

(statearr_47010_47049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (14))){
var state_46981__$1 = state_46981;
var statearr_47014_47050 = state_46981__$1;
(statearr_47014_47050[(2)] = null);

(statearr_47014_47050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (16))){
var inst_46936 = (state_46981[(10)]);
var inst_46940 = cljs.core.chunk_first.call(null,inst_46936);
var inst_46941 = cljs.core.chunk_rest.call(null,inst_46936);
var inst_46942 = cljs.core.count.call(null,inst_46940);
var inst_46922 = inst_46941;
var inst_46923 = inst_46940;
var inst_46924 = inst_46942;
var inst_46925 = (0);
var state_46981__$1 = (function (){var statearr_47015 = state_46981;
(statearr_47015[(12)] = inst_46925);

(statearr_47015[(13)] = inst_46923);

(statearr_47015[(14)] = inst_46924);

(statearr_47015[(15)] = inst_46922);

return statearr_47015;
})();
var statearr_47016_47051 = state_46981__$1;
(statearr_47016_47051[(2)] = null);

(statearr_47016_47051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (10))){
var inst_46925 = (state_46981[(12)]);
var inst_46923 = (state_46981[(13)]);
var inst_46924 = (state_46981[(14)]);
var inst_46922 = (state_46981[(15)]);
var inst_46930 = cljs.core._nth.call(null,inst_46923,inst_46925);
var inst_46931 = cljs.core.async.muxch_STAR_.call(null,inst_46930);
var inst_46932 = cljs.core.async.close_BANG_.call(null,inst_46931);
var inst_46933 = (inst_46925 + (1));
var tmp47011 = inst_46923;
var tmp47012 = inst_46924;
var tmp47013 = inst_46922;
var inst_46922__$1 = tmp47013;
var inst_46923__$1 = tmp47011;
var inst_46924__$1 = tmp47012;
var inst_46925__$1 = inst_46933;
var state_46981__$1 = (function (){var statearr_47017 = state_46981;
(statearr_47017[(12)] = inst_46925__$1);

(statearr_47017[(13)] = inst_46923__$1);

(statearr_47017[(14)] = inst_46924__$1);

(statearr_47017[(17)] = inst_46932);

(statearr_47017[(15)] = inst_46922__$1);

return statearr_47017;
})();
var statearr_47018_47052 = state_46981__$1;
(statearr_47018_47052[(2)] = null);

(statearr_47018_47052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (18))){
var inst_46951 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_47019_47053 = state_46981__$1;
(statearr_47019_47053[(2)] = inst_46951);

(statearr_47019_47053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (8))){
var inst_46925 = (state_46981[(12)]);
var inst_46924 = (state_46981[(14)]);
var inst_46927 = (inst_46925 < inst_46924);
var inst_46928 = inst_46927;
var state_46981__$1 = state_46981;
if(cljs.core.truth_(inst_46928)){
var statearr_47020_47054 = state_46981__$1;
(statearr_47020_47054[(1)] = (10));

} else {
var statearr_47021_47055 = state_46981__$1;
(statearr_47021_47055[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47027,mults,ensure_mult,p))
;
return ((function (switch__45698__auto__,c__45793__auto___47027,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47022[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47022[(1)] = (1));

return statearr_47022;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_46981){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_46981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47023){if((e47023 instanceof Object)){
var ex__45702__auto__ = e47023;
var statearr_47024_47056 = state_46981;
(statearr_47024_47056[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47057 = state_46981;
state_46981 = G__47057;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_46981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_46981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47027,mults,ensure_mult,p))
})();
var state__45795__auto__ = (function (){var statearr_47025 = f__45794__auto__.call(null);
(statearr_47025[(6)] = c__45793__auto___47027);

return statearr_47025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47027,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47059 = arguments.length;
switch (G__47059) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47062 = arguments.length;
switch (G__47062) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47065 = arguments.length;
switch (G__47065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45793__auto___47132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47104){
var state_val_47105 = (state_47104[(1)]);
if((state_val_47105 === (7))){
var state_47104__$1 = state_47104;
var statearr_47106_47133 = state_47104__$1;
(statearr_47106_47133[(2)] = null);

(statearr_47106_47133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (1))){
var state_47104__$1 = state_47104;
var statearr_47107_47134 = state_47104__$1;
(statearr_47107_47134[(2)] = null);

(statearr_47107_47134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (4))){
var inst_47068 = (state_47104[(7)]);
var inst_47070 = (inst_47068 < cnt);
var state_47104__$1 = state_47104;
if(cljs.core.truth_(inst_47070)){
var statearr_47108_47135 = state_47104__$1;
(statearr_47108_47135[(1)] = (6));

} else {
var statearr_47109_47136 = state_47104__$1;
(statearr_47109_47136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (15))){
var inst_47100 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
var statearr_47110_47137 = state_47104__$1;
(statearr_47110_47137[(2)] = inst_47100);

(statearr_47110_47137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (13))){
var inst_47093 = cljs.core.async.close_BANG_.call(null,out);
var state_47104__$1 = state_47104;
var statearr_47111_47138 = state_47104__$1;
(statearr_47111_47138[(2)] = inst_47093);

(statearr_47111_47138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (6))){
var state_47104__$1 = state_47104;
var statearr_47112_47139 = state_47104__$1;
(statearr_47112_47139[(2)] = null);

(statearr_47112_47139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (3))){
var inst_47102 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47104__$1,inst_47102);
} else {
if((state_val_47105 === (12))){
var inst_47090 = (state_47104[(8)]);
var inst_47090__$1 = (state_47104[(2)]);
var inst_47091 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47090__$1);
var state_47104__$1 = (function (){var statearr_47113 = state_47104;
(statearr_47113[(8)] = inst_47090__$1);

return statearr_47113;
})();
if(cljs.core.truth_(inst_47091)){
var statearr_47114_47140 = state_47104__$1;
(statearr_47114_47140[(1)] = (13));

} else {
var statearr_47115_47141 = state_47104__$1;
(statearr_47115_47141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (2))){
var inst_47067 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47068 = (0);
var state_47104__$1 = (function (){var statearr_47116 = state_47104;
(statearr_47116[(7)] = inst_47068);

(statearr_47116[(9)] = inst_47067);

return statearr_47116;
})();
var statearr_47117_47142 = state_47104__$1;
(statearr_47117_47142[(2)] = null);

(statearr_47117_47142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (11))){
var inst_47068 = (state_47104[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47104,(10),Object,null,(9));
var inst_47077 = chs__$1.call(null,inst_47068);
var inst_47078 = done.call(null,inst_47068);
var inst_47079 = cljs.core.async.take_BANG_.call(null,inst_47077,inst_47078);
var state_47104__$1 = state_47104;
var statearr_47118_47143 = state_47104__$1;
(statearr_47118_47143[(2)] = inst_47079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (9))){
var inst_47068 = (state_47104[(7)]);
var inst_47081 = (state_47104[(2)]);
var inst_47082 = (inst_47068 + (1));
var inst_47068__$1 = inst_47082;
var state_47104__$1 = (function (){var statearr_47119 = state_47104;
(statearr_47119[(10)] = inst_47081);

(statearr_47119[(7)] = inst_47068__$1);

return statearr_47119;
})();
var statearr_47120_47144 = state_47104__$1;
(statearr_47120_47144[(2)] = null);

(statearr_47120_47144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (5))){
var inst_47088 = (state_47104[(2)]);
var state_47104__$1 = (function (){var statearr_47121 = state_47104;
(statearr_47121[(11)] = inst_47088);

return statearr_47121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47104__$1,(12),dchan);
} else {
if((state_val_47105 === (14))){
var inst_47090 = (state_47104[(8)]);
var inst_47095 = cljs.core.apply.call(null,f,inst_47090);
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47104__$1,(16),out,inst_47095);
} else {
if((state_val_47105 === (16))){
var inst_47097 = (state_47104[(2)]);
var state_47104__$1 = (function (){var statearr_47122 = state_47104;
(statearr_47122[(12)] = inst_47097);

return statearr_47122;
})();
var statearr_47123_47145 = state_47104__$1;
(statearr_47123_47145[(2)] = null);

(statearr_47123_47145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (10))){
var inst_47072 = (state_47104[(2)]);
var inst_47073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47104__$1 = (function (){var statearr_47124 = state_47104;
(statearr_47124[(13)] = inst_47072);

return statearr_47124;
})();
var statearr_47125_47146 = state_47104__$1;
(statearr_47125_47146[(2)] = inst_47073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (8))){
var inst_47086 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
var statearr_47126_47147 = state_47104__$1;
(statearr_47126_47147[(2)] = inst_47086);

(statearr_47126_47147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45698__auto__,c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47127[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47127[(1)] = (1));

return statearr_47127;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47104){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47128){if((e47128 instanceof Object)){
var ex__45702__auto__ = e47128;
var statearr_47129_47148 = state_47104;
(statearr_47129_47148[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47149 = state_47104;
state_47104 = G__47149;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45795__auto__ = (function (){var statearr_47130 = f__45794__auto__.call(null);
(statearr_47130[(6)] = c__45793__auto___47132);

return statearr_47130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47132,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47152 = arguments.length;
switch (G__47152) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47206,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47206,out){
return (function (state_47184){
var state_val_47185 = (state_47184[(1)]);
if((state_val_47185 === (7))){
var inst_47163 = (state_47184[(7)]);
var inst_47164 = (state_47184[(8)]);
var inst_47163__$1 = (state_47184[(2)]);
var inst_47164__$1 = cljs.core.nth.call(null,inst_47163__$1,(0),null);
var inst_47165 = cljs.core.nth.call(null,inst_47163__$1,(1),null);
var inst_47166 = (inst_47164__$1 == null);
var state_47184__$1 = (function (){var statearr_47186 = state_47184;
(statearr_47186[(9)] = inst_47165);

(statearr_47186[(7)] = inst_47163__$1);

(statearr_47186[(8)] = inst_47164__$1);

return statearr_47186;
})();
if(cljs.core.truth_(inst_47166)){
var statearr_47187_47207 = state_47184__$1;
(statearr_47187_47207[(1)] = (8));

} else {
var statearr_47188_47208 = state_47184__$1;
(statearr_47188_47208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (1))){
var inst_47153 = cljs.core.vec.call(null,chs);
var inst_47154 = inst_47153;
var state_47184__$1 = (function (){var statearr_47189 = state_47184;
(statearr_47189[(10)] = inst_47154);

return statearr_47189;
})();
var statearr_47190_47209 = state_47184__$1;
(statearr_47190_47209[(2)] = null);

(statearr_47190_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (4))){
var inst_47154 = (state_47184[(10)]);
var state_47184__$1 = state_47184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47184__$1,(7),inst_47154);
} else {
if((state_val_47185 === (6))){
var inst_47180 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47191_47210 = state_47184__$1;
(statearr_47191_47210[(2)] = inst_47180);

(statearr_47191_47210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (3))){
var inst_47182 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47184__$1,inst_47182);
} else {
if((state_val_47185 === (2))){
var inst_47154 = (state_47184[(10)]);
var inst_47156 = cljs.core.count.call(null,inst_47154);
var inst_47157 = (inst_47156 > (0));
var state_47184__$1 = state_47184;
if(cljs.core.truth_(inst_47157)){
var statearr_47193_47211 = state_47184__$1;
(statearr_47193_47211[(1)] = (4));

} else {
var statearr_47194_47212 = state_47184__$1;
(statearr_47194_47212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (11))){
var inst_47154 = (state_47184[(10)]);
var inst_47173 = (state_47184[(2)]);
var tmp47192 = inst_47154;
var inst_47154__$1 = tmp47192;
var state_47184__$1 = (function (){var statearr_47195 = state_47184;
(statearr_47195[(10)] = inst_47154__$1);

(statearr_47195[(11)] = inst_47173);

return statearr_47195;
})();
var statearr_47196_47213 = state_47184__$1;
(statearr_47196_47213[(2)] = null);

(statearr_47196_47213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (9))){
var inst_47164 = (state_47184[(8)]);
var state_47184__$1 = state_47184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47184__$1,(11),out,inst_47164);
} else {
if((state_val_47185 === (5))){
var inst_47178 = cljs.core.async.close_BANG_.call(null,out);
var state_47184__$1 = state_47184;
var statearr_47197_47214 = state_47184__$1;
(statearr_47197_47214[(2)] = inst_47178);

(statearr_47197_47214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (10))){
var inst_47176 = (state_47184[(2)]);
var state_47184__$1 = state_47184;
var statearr_47198_47215 = state_47184__$1;
(statearr_47198_47215[(2)] = inst_47176);

(statearr_47198_47215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47185 === (8))){
var inst_47165 = (state_47184[(9)]);
var inst_47154 = (state_47184[(10)]);
var inst_47163 = (state_47184[(7)]);
var inst_47164 = (state_47184[(8)]);
var inst_47168 = (function (){var cs = inst_47154;
var vec__47159 = inst_47163;
var v = inst_47164;
var c = inst_47165;
return ((function (cs,vec__47159,v,c,inst_47165,inst_47154,inst_47163,inst_47164,state_val_47185,c__45793__auto___47206,out){
return (function (p1__47150_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47150_SHARP_);
});
;})(cs,vec__47159,v,c,inst_47165,inst_47154,inst_47163,inst_47164,state_val_47185,c__45793__auto___47206,out))
})();
var inst_47169 = cljs.core.filterv.call(null,inst_47168,inst_47154);
var inst_47154__$1 = inst_47169;
var state_47184__$1 = (function (){var statearr_47199 = state_47184;
(statearr_47199[(10)] = inst_47154__$1);

return statearr_47199;
})();
var statearr_47200_47216 = state_47184__$1;
(statearr_47200_47216[(2)] = null);

(statearr_47200_47216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47206,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47206,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47201[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47201[(1)] = (1));

return statearr_47201;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47184){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47202){if((e47202 instanceof Object)){
var ex__45702__auto__ = e47202;
var statearr_47203_47217 = state_47184;
(statearr_47203_47217[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47218 = state_47184;
state_47184 = G__47218;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47206,out))
})();
var state__45795__auto__ = (function (){var statearr_47204 = f__45794__auto__.call(null);
(statearr_47204[(6)] = c__45793__auto___47206);

return statearr_47204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47206,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47220 = arguments.length;
switch (G__47220) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47265,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47265,out){
return (function (state_47244){
var state_val_47245 = (state_47244[(1)]);
if((state_val_47245 === (7))){
var inst_47226 = (state_47244[(7)]);
var inst_47226__$1 = (state_47244[(2)]);
var inst_47227 = (inst_47226__$1 == null);
var inst_47228 = cljs.core.not.call(null,inst_47227);
var state_47244__$1 = (function (){var statearr_47246 = state_47244;
(statearr_47246[(7)] = inst_47226__$1);

return statearr_47246;
})();
if(inst_47228){
var statearr_47247_47266 = state_47244__$1;
(statearr_47247_47266[(1)] = (8));

} else {
var statearr_47248_47267 = state_47244__$1;
(statearr_47248_47267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (1))){
var inst_47221 = (0);
var state_47244__$1 = (function (){var statearr_47249 = state_47244;
(statearr_47249[(8)] = inst_47221);

return statearr_47249;
})();
var statearr_47250_47268 = state_47244__$1;
(statearr_47250_47268[(2)] = null);

(statearr_47250_47268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (4))){
var state_47244__$1 = state_47244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47244__$1,(7),ch);
} else {
if((state_val_47245 === (6))){
var inst_47239 = (state_47244[(2)]);
var state_47244__$1 = state_47244;
var statearr_47251_47269 = state_47244__$1;
(statearr_47251_47269[(2)] = inst_47239);

(statearr_47251_47269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (3))){
var inst_47241 = (state_47244[(2)]);
var inst_47242 = cljs.core.async.close_BANG_.call(null,out);
var state_47244__$1 = (function (){var statearr_47252 = state_47244;
(statearr_47252[(9)] = inst_47241);

return statearr_47252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47244__$1,inst_47242);
} else {
if((state_val_47245 === (2))){
var inst_47221 = (state_47244[(8)]);
var inst_47223 = (inst_47221 < n);
var state_47244__$1 = state_47244;
if(cljs.core.truth_(inst_47223)){
var statearr_47253_47270 = state_47244__$1;
(statearr_47253_47270[(1)] = (4));

} else {
var statearr_47254_47271 = state_47244__$1;
(statearr_47254_47271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (11))){
var inst_47221 = (state_47244[(8)]);
var inst_47231 = (state_47244[(2)]);
var inst_47232 = (inst_47221 + (1));
var inst_47221__$1 = inst_47232;
var state_47244__$1 = (function (){var statearr_47255 = state_47244;
(statearr_47255[(8)] = inst_47221__$1);

(statearr_47255[(10)] = inst_47231);

return statearr_47255;
})();
var statearr_47256_47272 = state_47244__$1;
(statearr_47256_47272[(2)] = null);

(statearr_47256_47272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (9))){
var state_47244__$1 = state_47244;
var statearr_47257_47273 = state_47244__$1;
(statearr_47257_47273[(2)] = null);

(statearr_47257_47273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (5))){
var state_47244__$1 = state_47244;
var statearr_47258_47274 = state_47244__$1;
(statearr_47258_47274[(2)] = null);

(statearr_47258_47274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (10))){
var inst_47236 = (state_47244[(2)]);
var state_47244__$1 = state_47244;
var statearr_47259_47275 = state_47244__$1;
(statearr_47259_47275[(2)] = inst_47236);

(statearr_47259_47275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47245 === (8))){
var inst_47226 = (state_47244[(7)]);
var state_47244__$1 = state_47244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47244__$1,(11),out,inst_47226);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47265,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47265,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47260[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47260[(1)] = (1));

return statearr_47260;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47244){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47261){if((e47261 instanceof Object)){
var ex__45702__auto__ = e47261;
var statearr_47262_47276 = state_47244;
(statearr_47262_47276[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47277 = state_47244;
state_47244 = G__47277;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47265,out))
})();
var state__45795__auto__ = (function (){var statearr_47263 = f__45794__auto__.call(null);
(statearr_47263[(6)] = c__45793__auto___47265);

return statearr_47263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47265,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47279 = (function (f,ch,meta47280){
this.f = f;
this.ch = ch;
this.meta47280 = meta47280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47281,meta47280__$1){
var self__ = this;
var _47281__$1 = this;
return (new cljs.core.async.t_cljs$core$async47279(self__.f,self__.ch,meta47280__$1));
});

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47281){
var self__ = this;
var _47281__$1 = this;
return self__.meta47280;
});

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47282 = (function (f,ch,meta47280,_,fn1,meta47283){
this.f = f;
this.ch = ch;
this.meta47280 = meta47280;
this._ = _;
this.fn1 = fn1;
this.meta47283 = meta47283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47284,meta47283__$1){
var self__ = this;
var _47284__$1 = this;
return (new cljs.core.async.t_cljs$core$async47282(self__.f,self__.ch,self__.meta47280,self__._,self__.fn1,meta47283__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47284){
var self__ = this;
var _47284__$1 = this;
return self__.meta47283;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47278_SHARP_){
return f1.call(null,(((p1__47278_SHARP_ == null))?null:self__.f.call(null,p1__47278_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47280","meta47280",468727439,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47279","cljs.core.async/t_cljs$core$async47279",-2138177202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47283","meta47283",-1764549576,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47282";

cljs.core.async.t_cljs$core$async47282.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async47282");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47282.
 */
cljs.core.async.__GT_t_cljs$core$async47282 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47282(f__$1,ch__$1,meta47280__$1,___$2,fn1__$1,meta47283){
return (new cljs.core.async.t_cljs$core$async47282(f__$1,ch__$1,meta47280__$1,___$2,fn1__$1,meta47283));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47282(self__.f,self__.ch,self__.meta47280,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47280","meta47280",468727439,null)], null);
});

cljs.core.async.t_cljs$core$async47279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47279";

cljs.core.async.t_cljs$core$async47279.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async47279");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47279.
 */
cljs.core.async.__GT_t_cljs$core$async47279 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47279(f__$1,ch__$1,meta47280){
return (new cljs.core.async.t_cljs$core$async47279(f__$1,ch__$1,meta47280));
});

}

return (new cljs.core.async.t_cljs$core$async47279(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47285 = (function (f,ch,meta47286){
this.f = f;
this.ch = ch;
this.meta47286 = meta47286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47287,meta47286__$1){
var self__ = this;
var _47287__$1 = this;
return (new cljs.core.async.t_cljs$core$async47285(self__.f,self__.ch,meta47286__$1));
});

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47287){
var self__ = this;
var _47287__$1 = this;
return self__.meta47286;
});

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47286","meta47286",-1209510358,null)], null);
});

cljs.core.async.t_cljs$core$async47285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47285";

cljs.core.async.t_cljs$core$async47285.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async47285");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47285.
 */
cljs.core.async.__GT_t_cljs$core$async47285 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47285(f__$1,ch__$1,meta47286){
return (new cljs.core.async.t_cljs$core$async47285(f__$1,ch__$1,meta47286));
});

}

return (new cljs.core.async.t_cljs$core$async47285(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47288 = (function (p,ch,meta47289){
this.p = p;
this.ch = ch;
this.meta47289 = meta47289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47290,meta47289__$1){
var self__ = this;
var _47290__$1 = this;
return (new cljs.core.async.t_cljs$core$async47288(self__.p,self__.ch,meta47289__$1));
});

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47290){
var self__ = this;
var _47290__$1 = this;
return self__.meta47289;
});

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47289","meta47289",-486362366,null)], null);
});

cljs.core.async.t_cljs$core$async47288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47288";

cljs.core.async.t_cljs$core$async47288.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async47288");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47288.
 */
cljs.core.async.__GT_t_cljs$core$async47288 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47288(p__$1,ch__$1,meta47289){
return (new cljs.core.async.t_cljs$core$async47288(p__$1,ch__$1,meta47289));
});

}

return (new cljs.core.async.t_cljs$core$async47288(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47292 = arguments.length;
switch (G__47292) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47332,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47332,out){
return (function (state_47313){
var state_val_47314 = (state_47313[(1)]);
if((state_val_47314 === (7))){
var inst_47309 = (state_47313[(2)]);
var state_47313__$1 = state_47313;
var statearr_47315_47333 = state_47313__$1;
(statearr_47315_47333[(2)] = inst_47309);

(statearr_47315_47333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (1))){
var state_47313__$1 = state_47313;
var statearr_47316_47334 = state_47313__$1;
(statearr_47316_47334[(2)] = null);

(statearr_47316_47334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (4))){
var inst_47295 = (state_47313[(7)]);
var inst_47295__$1 = (state_47313[(2)]);
var inst_47296 = (inst_47295__$1 == null);
var state_47313__$1 = (function (){var statearr_47317 = state_47313;
(statearr_47317[(7)] = inst_47295__$1);

return statearr_47317;
})();
if(cljs.core.truth_(inst_47296)){
var statearr_47318_47335 = state_47313__$1;
(statearr_47318_47335[(1)] = (5));

} else {
var statearr_47319_47336 = state_47313__$1;
(statearr_47319_47336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (6))){
var inst_47295 = (state_47313[(7)]);
var inst_47300 = p.call(null,inst_47295);
var state_47313__$1 = state_47313;
if(cljs.core.truth_(inst_47300)){
var statearr_47320_47337 = state_47313__$1;
(statearr_47320_47337[(1)] = (8));

} else {
var statearr_47321_47338 = state_47313__$1;
(statearr_47321_47338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (3))){
var inst_47311 = (state_47313[(2)]);
var state_47313__$1 = state_47313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47313__$1,inst_47311);
} else {
if((state_val_47314 === (2))){
var state_47313__$1 = state_47313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47313__$1,(4),ch);
} else {
if((state_val_47314 === (11))){
var inst_47303 = (state_47313[(2)]);
var state_47313__$1 = state_47313;
var statearr_47322_47339 = state_47313__$1;
(statearr_47322_47339[(2)] = inst_47303);

(statearr_47322_47339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (9))){
var state_47313__$1 = state_47313;
var statearr_47323_47340 = state_47313__$1;
(statearr_47323_47340[(2)] = null);

(statearr_47323_47340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (5))){
var inst_47298 = cljs.core.async.close_BANG_.call(null,out);
var state_47313__$1 = state_47313;
var statearr_47324_47341 = state_47313__$1;
(statearr_47324_47341[(2)] = inst_47298);

(statearr_47324_47341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (10))){
var inst_47306 = (state_47313[(2)]);
var state_47313__$1 = (function (){var statearr_47325 = state_47313;
(statearr_47325[(8)] = inst_47306);

return statearr_47325;
})();
var statearr_47326_47342 = state_47313__$1;
(statearr_47326_47342[(2)] = null);

(statearr_47326_47342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47314 === (8))){
var inst_47295 = (state_47313[(7)]);
var state_47313__$1 = state_47313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47313__$1,(11),out,inst_47295);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47332,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47332,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47327 = [null,null,null,null,null,null,null,null,null];
(statearr_47327[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47327[(1)] = (1));

return statearr_47327;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47313){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47328){if((e47328 instanceof Object)){
var ex__45702__auto__ = e47328;
var statearr_47329_47343 = state_47313;
(statearr_47329_47343[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47344 = state_47313;
state_47313 = G__47344;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47332,out))
})();
var state__45795__auto__ = (function (){var statearr_47330 = f__45794__auto__.call(null);
(statearr_47330[(6)] = c__45793__auto___47332);

return statearr_47330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47332,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47346 = arguments.length;
switch (G__47346) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45793__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto__){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto__){
return (function (state_47409){
var state_val_47410 = (state_47409[(1)]);
if((state_val_47410 === (7))){
var inst_47405 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47411_47449 = state_47409__$1;
(statearr_47411_47449[(2)] = inst_47405);

(statearr_47411_47449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (20))){
var inst_47375 = (state_47409[(7)]);
var inst_47386 = (state_47409[(2)]);
var inst_47387 = cljs.core.next.call(null,inst_47375);
var inst_47361 = inst_47387;
var inst_47362 = null;
var inst_47363 = (0);
var inst_47364 = (0);
var state_47409__$1 = (function (){var statearr_47412 = state_47409;
(statearr_47412[(8)] = inst_47364);

(statearr_47412[(9)] = inst_47362);

(statearr_47412[(10)] = inst_47386);

(statearr_47412[(11)] = inst_47363);

(statearr_47412[(12)] = inst_47361);

return statearr_47412;
})();
var statearr_47413_47450 = state_47409__$1;
(statearr_47413_47450[(2)] = null);

(statearr_47413_47450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (1))){
var state_47409__$1 = state_47409;
var statearr_47414_47451 = state_47409__$1;
(statearr_47414_47451[(2)] = null);

(statearr_47414_47451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (4))){
var inst_47350 = (state_47409[(13)]);
var inst_47350__$1 = (state_47409[(2)]);
var inst_47351 = (inst_47350__$1 == null);
var state_47409__$1 = (function (){var statearr_47415 = state_47409;
(statearr_47415[(13)] = inst_47350__$1);

return statearr_47415;
})();
if(cljs.core.truth_(inst_47351)){
var statearr_47416_47452 = state_47409__$1;
(statearr_47416_47452[(1)] = (5));

} else {
var statearr_47417_47453 = state_47409__$1;
(statearr_47417_47453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (15))){
var state_47409__$1 = state_47409;
var statearr_47421_47454 = state_47409__$1;
(statearr_47421_47454[(2)] = null);

(statearr_47421_47454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (21))){
var state_47409__$1 = state_47409;
var statearr_47422_47455 = state_47409__$1;
(statearr_47422_47455[(2)] = null);

(statearr_47422_47455[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (13))){
var inst_47364 = (state_47409[(8)]);
var inst_47362 = (state_47409[(9)]);
var inst_47363 = (state_47409[(11)]);
var inst_47361 = (state_47409[(12)]);
var inst_47371 = (state_47409[(2)]);
var inst_47372 = (inst_47364 + (1));
var tmp47418 = inst_47362;
var tmp47419 = inst_47363;
var tmp47420 = inst_47361;
var inst_47361__$1 = tmp47420;
var inst_47362__$1 = tmp47418;
var inst_47363__$1 = tmp47419;
var inst_47364__$1 = inst_47372;
var state_47409__$1 = (function (){var statearr_47423 = state_47409;
(statearr_47423[(8)] = inst_47364__$1);

(statearr_47423[(9)] = inst_47362__$1);

(statearr_47423[(11)] = inst_47363__$1);

(statearr_47423[(14)] = inst_47371);

(statearr_47423[(12)] = inst_47361__$1);

return statearr_47423;
})();
var statearr_47424_47456 = state_47409__$1;
(statearr_47424_47456[(2)] = null);

(statearr_47424_47456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (22))){
var state_47409__$1 = state_47409;
var statearr_47425_47457 = state_47409__$1;
(statearr_47425_47457[(2)] = null);

(statearr_47425_47457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (6))){
var inst_47350 = (state_47409[(13)]);
var inst_47359 = f.call(null,inst_47350);
var inst_47360 = cljs.core.seq.call(null,inst_47359);
var inst_47361 = inst_47360;
var inst_47362 = null;
var inst_47363 = (0);
var inst_47364 = (0);
var state_47409__$1 = (function (){var statearr_47426 = state_47409;
(statearr_47426[(8)] = inst_47364);

(statearr_47426[(9)] = inst_47362);

(statearr_47426[(11)] = inst_47363);

(statearr_47426[(12)] = inst_47361);

return statearr_47426;
})();
var statearr_47427_47458 = state_47409__$1;
(statearr_47427_47458[(2)] = null);

(statearr_47427_47458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (17))){
var inst_47375 = (state_47409[(7)]);
var inst_47379 = cljs.core.chunk_first.call(null,inst_47375);
var inst_47380 = cljs.core.chunk_rest.call(null,inst_47375);
var inst_47381 = cljs.core.count.call(null,inst_47379);
var inst_47361 = inst_47380;
var inst_47362 = inst_47379;
var inst_47363 = inst_47381;
var inst_47364 = (0);
var state_47409__$1 = (function (){var statearr_47428 = state_47409;
(statearr_47428[(8)] = inst_47364);

(statearr_47428[(9)] = inst_47362);

(statearr_47428[(11)] = inst_47363);

(statearr_47428[(12)] = inst_47361);

return statearr_47428;
})();
var statearr_47429_47459 = state_47409__$1;
(statearr_47429_47459[(2)] = null);

(statearr_47429_47459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (3))){
var inst_47407 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47409__$1,inst_47407);
} else {
if((state_val_47410 === (12))){
var inst_47395 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47430_47460 = state_47409__$1;
(statearr_47430_47460[(2)] = inst_47395);

(statearr_47430_47460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (2))){
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47409__$1,(4),in$);
} else {
if((state_val_47410 === (23))){
var inst_47403 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47431_47461 = state_47409__$1;
(statearr_47431_47461[(2)] = inst_47403);

(statearr_47431_47461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (19))){
var inst_47390 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47432_47462 = state_47409__$1;
(statearr_47432_47462[(2)] = inst_47390);

(statearr_47432_47462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (11))){
var inst_47375 = (state_47409[(7)]);
var inst_47361 = (state_47409[(12)]);
var inst_47375__$1 = cljs.core.seq.call(null,inst_47361);
var state_47409__$1 = (function (){var statearr_47433 = state_47409;
(statearr_47433[(7)] = inst_47375__$1);

return statearr_47433;
})();
if(inst_47375__$1){
var statearr_47434_47463 = state_47409__$1;
(statearr_47434_47463[(1)] = (14));

} else {
var statearr_47435_47464 = state_47409__$1;
(statearr_47435_47464[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (9))){
var inst_47397 = (state_47409[(2)]);
var inst_47398 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47409__$1 = (function (){var statearr_47436 = state_47409;
(statearr_47436[(15)] = inst_47397);

return statearr_47436;
})();
if(cljs.core.truth_(inst_47398)){
var statearr_47437_47465 = state_47409__$1;
(statearr_47437_47465[(1)] = (21));

} else {
var statearr_47438_47466 = state_47409__$1;
(statearr_47438_47466[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (5))){
var inst_47353 = cljs.core.async.close_BANG_.call(null,out);
var state_47409__$1 = state_47409;
var statearr_47439_47467 = state_47409__$1;
(statearr_47439_47467[(2)] = inst_47353);

(statearr_47439_47467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (14))){
var inst_47375 = (state_47409[(7)]);
var inst_47377 = cljs.core.chunked_seq_QMARK_.call(null,inst_47375);
var state_47409__$1 = state_47409;
if(inst_47377){
var statearr_47440_47468 = state_47409__$1;
(statearr_47440_47468[(1)] = (17));

} else {
var statearr_47441_47469 = state_47409__$1;
(statearr_47441_47469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (16))){
var inst_47393 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47442_47470 = state_47409__$1;
(statearr_47442_47470[(2)] = inst_47393);

(statearr_47442_47470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (10))){
var inst_47364 = (state_47409[(8)]);
var inst_47362 = (state_47409[(9)]);
var inst_47369 = cljs.core._nth.call(null,inst_47362,inst_47364);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47409__$1,(13),out,inst_47369);
} else {
if((state_val_47410 === (18))){
var inst_47375 = (state_47409[(7)]);
var inst_47384 = cljs.core.first.call(null,inst_47375);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47409__$1,(20),out,inst_47384);
} else {
if((state_val_47410 === (8))){
var inst_47364 = (state_47409[(8)]);
var inst_47363 = (state_47409[(11)]);
var inst_47366 = (inst_47364 < inst_47363);
var inst_47367 = inst_47366;
var state_47409__$1 = state_47409;
if(cljs.core.truth_(inst_47367)){
var statearr_47443_47471 = state_47409__$1;
(statearr_47443_47471[(1)] = (10));

} else {
var statearr_47444_47472 = state_47409__$1;
(statearr_47444_47472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto__))
;
return ((function (switch__45698__auto__,c__45793__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____0 = (function (){
var statearr_47445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47445[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__);

(statearr_47445[(1)] = (1));

return statearr_47445;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____1 = (function (state_47409){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47446){if((e47446 instanceof Object)){
var ex__45702__auto__ = e47446;
var statearr_47447_47473 = state_47409;
(statearr_47447_47473[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47474 = state_47409;
state_47409 = G__47474;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__ = function(state_47409){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____1.call(this,state_47409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45699__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto__))
})();
var state__45795__auto__ = (function (){var statearr_47448 = f__45794__auto__.call(null);
(statearr_47448[(6)] = c__45793__auto__);

return statearr_47448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto__))
);

return c__45793__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47476 = arguments.length;
switch (G__47476) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47479 = arguments.length;
switch (G__47479) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47482 = arguments.length;
switch (G__47482) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47529,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47529,out){
return (function (state_47506){
var state_val_47507 = (state_47506[(1)]);
if((state_val_47507 === (7))){
var inst_47501 = (state_47506[(2)]);
var state_47506__$1 = state_47506;
var statearr_47508_47530 = state_47506__$1;
(statearr_47508_47530[(2)] = inst_47501);

(statearr_47508_47530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (1))){
var inst_47483 = null;
var state_47506__$1 = (function (){var statearr_47509 = state_47506;
(statearr_47509[(7)] = inst_47483);

return statearr_47509;
})();
var statearr_47510_47531 = state_47506__$1;
(statearr_47510_47531[(2)] = null);

(statearr_47510_47531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (4))){
var inst_47486 = (state_47506[(8)]);
var inst_47486__$1 = (state_47506[(2)]);
var inst_47487 = (inst_47486__$1 == null);
var inst_47488 = cljs.core.not.call(null,inst_47487);
var state_47506__$1 = (function (){var statearr_47511 = state_47506;
(statearr_47511[(8)] = inst_47486__$1);

return statearr_47511;
})();
if(inst_47488){
var statearr_47512_47532 = state_47506__$1;
(statearr_47512_47532[(1)] = (5));

} else {
var statearr_47513_47533 = state_47506__$1;
(statearr_47513_47533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (6))){
var state_47506__$1 = state_47506;
var statearr_47514_47534 = state_47506__$1;
(statearr_47514_47534[(2)] = null);

(statearr_47514_47534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (3))){
var inst_47503 = (state_47506[(2)]);
var inst_47504 = cljs.core.async.close_BANG_.call(null,out);
var state_47506__$1 = (function (){var statearr_47515 = state_47506;
(statearr_47515[(9)] = inst_47503);

return statearr_47515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47506__$1,inst_47504);
} else {
if((state_val_47507 === (2))){
var state_47506__$1 = state_47506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47506__$1,(4),ch);
} else {
if((state_val_47507 === (11))){
var inst_47486 = (state_47506[(8)]);
var inst_47495 = (state_47506[(2)]);
var inst_47483 = inst_47486;
var state_47506__$1 = (function (){var statearr_47516 = state_47506;
(statearr_47516[(10)] = inst_47495);

(statearr_47516[(7)] = inst_47483);

return statearr_47516;
})();
var statearr_47517_47535 = state_47506__$1;
(statearr_47517_47535[(2)] = null);

(statearr_47517_47535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (9))){
var inst_47486 = (state_47506[(8)]);
var state_47506__$1 = state_47506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47506__$1,(11),out,inst_47486);
} else {
if((state_val_47507 === (5))){
var inst_47486 = (state_47506[(8)]);
var inst_47483 = (state_47506[(7)]);
var inst_47490 = cljs.core._EQ_.call(null,inst_47486,inst_47483);
var state_47506__$1 = state_47506;
if(inst_47490){
var statearr_47519_47536 = state_47506__$1;
(statearr_47519_47536[(1)] = (8));

} else {
var statearr_47520_47537 = state_47506__$1;
(statearr_47520_47537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (10))){
var inst_47498 = (state_47506[(2)]);
var state_47506__$1 = state_47506;
var statearr_47521_47538 = state_47506__$1;
(statearr_47521_47538[(2)] = inst_47498);

(statearr_47521_47538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47507 === (8))){
var inst_47483 = (state_47506[(7)]);
var tmp47518 = inst_47483;
var inst_47483__$1 = tmp47518;
var state_47506__$1 = (function (){var statearr_47522 = state_47506;
(statearr_47522[(7)] = inst_47483__$1);

return statearr_47522;
})();
var statearr_47523_47539 = state_47506__$1;
(statearr_47523_47539[(2)] = null);

(statearr_47523_47539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47529,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47529,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47524[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47524[(1)] = (1));

return statearr_47524;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47506){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47525){if((e47525 instanceof Object)){
var ex__45702__auto__ = e47525;
var statearr_47526_47540 = state_47506;
(statearr_47526_47540[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47541 = state_47506;
state_47506 = G__47541;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47529,out))
})();
var state__45795__auto__ = (function (){var statearr_47527 = f__45794__auto__.call(null);
(statearr_47527[(6)] = c__45793__auto___47529);

return statearr_47527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47529,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47543 = arguments.length;
switch (G__47543) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47609,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47609,out){
return (function (state_47581){
var state_val_47582 = (state_47581[(1)]);
if((state_val_47582 === (7))){
var inst_47577 = (state_47581[(2)]);
var state_47581__$1 = state_47581;
var statearr_47583_47610 = state_47581__$1;
(statearr_47583_47610[(2)] = inst_47577);

(statearr_47583_47610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (1))){
var inst_47544 = (new Array(n));
var inst_47545 = inst_47544;
var inst_47546 = (0);
var state_47581__$1 = (function (){var statearr_47584 = state_47581;
(statearr_47584[(7)] = inst_47545);

(statearr_47584[(8)] = inst_47546);

return statearr_47584;
})();
var statearr_47585_47611 = state_47581__$1;
(statearr_47585_47611[(2)] = null);

(statearr_47585_47611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (4))){
var inst_47549 = (state_47581[(9)]);
var inst_47549__$1 = (state_47581[(2)]);
var inst_47550 = (inst_47549__$1 == null);
var inst_47551 = cljs.core.not.call(null,inst_47550);
var state_47581__$1 = (function (){var statearr_47586 = state_47581;
(statearr_47586[(9)] = inst_47549__$1);

return statearr_47586;
})();
if(inst_47551){
var statearr_47587_47612 = state_47581__$1;
(statearr_47587_47612[(1)] = (5));

} else {
var statearr_47588_47613 = state_47581__$1;
(statearr_47588_47613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (15))){
var inst_47571 = (state_47581[(2)]);
var state_47581__$1 = state_47581;
var statearr_47589_47614 = state_47581__$1;
(statearr_47589_47614[(2)] = inst_47571);

(statearr_47589_47614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (13))){
var state_47581__$1 = state_47581;
var statearr_47590_47615 = state_47581__$1;
(statearr_47590_47615[(2)] = null);

(statearr_47590_47615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (6))){
var inst_47546 = (state_47581[(8)]);
var inst_47567 = (inst_47546 > (0));
var state_47581__$1 = state_47581;
if(cljs.core.truth_(inst_47567)){
var statearr_47591_47616 = state_47581__$1;
(statearr_47591_47616[(1)] = (12));

} else {
var statearr_47592_47617 = state_47581__$1;
(statearr_47592_47617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (3))){
var inst_47579 = (state_47581[(2)]);
var state_47581__$1 = state_47581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47581__$1,inst_47579);
} else {
if((state_val_47582 === (12))){
var inst_47545 = (state_47581[(7)]);
var inst_47569 = cljs.core.vec.call(null,inst_47545);
var state_47581__$1 = state_47581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47581__$1,(15),out,inst_47569);
} else {
if((state_val_47582 === (2))){
var state_47581__$1 = state_47581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47581__$1,(4),ch);
} else {
if((state_val_47582 === (11))){
var inst_47561 = (state_47581[(2)]);
var inst_47562 = (new Array(n));
var inst_47545 = inst_47562;
var inst_47546 = (0);
var state_47581__$1 = (function (){var statearr_47593 = state_47581;
(statearr_47593[(7)] = inst_47545);

(statearr_47593[(8)] = inst_47546);

(statearr_47593[(10)] = inst_47561);

return statearr_47593;
})();
var statearr_47594_47618 = state_47581__$1;
(statearr_47594_47618[(2)] = null);

(statearr_47594_47618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (9))){
var inst_47545 = (state_47581[(7)]);
var inst_47559 = cljs.core.vec.call(null,inst_47545);
var state_47581__$1 = state_47581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47581__$1,(11),out,inst_47559);
} else {
if((state_val_47582 === (5))){
var inst_47545 = (state_47581[(7)]);
var inst_47554 = (state_47581[(11)]);
var inst_47549 = (state_47581[(9)]);
var inst_47546 = (state_47581[(8)]);
var inst_47553 = (inst_47545[inst_47546] = inst_47549);
var inst_47554__$1 = (inst_47546 + (1));
var inst_47555 = (inst_47554__$1 < n);
var state_47581__$1 = (function (){var statearr_47595 = state_47581;
(statearr_47595[(11)] = inst_47554__$1);

(statearr_47595[(12)] = inst_47553);

return statearr_47595;
})();
if(cljs.core.truth_(inst_47555)){
var statearr_47596_47619 = state_47581__$1;
(statearr_47596_47619[(1)] = (8));

} else {
var statearr_47597_47620 = state_47581__$1;
(statearr_47597_47620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (14))){
var inst_47574 = (state_47581[(2)]);
var inst_47575 = cljs.core.async.close_BANG_.call(null,out);
var state_47581__$1 = (function (){var statearr_47599 = state_47581;
(statearr_47599[(13)] = inst_47574);

return statearr_47599;
})();
var statearr_47600_47621 = state_47581__$1;
(statearr_47600_47621[(2)] = inst_47575);

(statearr_47600_47621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (10))){
var inst_47565 = (state_47581[(2)]);
var state_47581__$1 = state_47581;
var statearr_47601_47622 = state_47581__$1;
(statearr_47601_47622[(2)] = inst_47565);

(statearr_47601_47622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47582 === (8))){
var inst_47545 = (state_47581[(7)]);
var inst_47554 = (state_47581[(11)]);
var tmp47598 = inst_47545;
var inst_47545__$1 = tmp47598;
var inst_47546 = inst_47554;
var state_47581__$1 = (function (){var statearr_47602 = state_47581;
(statearr_47602[(7)] = inst_47545__$1);

(statearr_47602[(8)] = inst_47546);

return statearr_47602;
})();
var statearr_47603_47623 = state_47581__$1;
(statearr_47603_47623[(2)] = null);

(statearr_47603_47623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47609,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47609,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47604[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47604[(1)] = (1));

return statearr_47604;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47581){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47605){if((e47605 instanceof Object)){
var ex__45702__auto__ = e47605;
var statearr_47606_47624 = state_47581;
(statearr_47606_47624[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47625 = state_47581;
state_47581 = G__47625;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47609,out))
})();
var state__45795__auto__ = (function (){var statearr_47607 = f__45794__auto__.call(null);
(statearr_47607[(6)] = c__45793__auto___47609);

return statearr_47607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47609,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47627 = arguments.length;
switch (G__47627) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45793__auto___47697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45793__auto___47697,out){
return (function (){
var f__45794__auto__ = (function (){var switch__45698__auto__ = ((function (c__45793__auto___47697,out){
return (function (state_47669){
var state_val_47670 = (state_47669[(1)]);
if((state_val_47670 === (7))){
var inst_47665 = (state_47669[(2)]);
var state_47669__$1 = state_47669;
var statearr_47671_47698 = state_47669__$1;
(statearr_47671_47698[(2)] = inst_47665);

(statearr_47671_47698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (1))){
var inst_47628 = [];
var inst_47629 = inst_47628;
var inst_47630 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47669__$1 = (function (){var statearr_47672 = state_47669;
(statearr_47672[(7)] = inst_47629);

(statearr_47672[(8)] = inst_47630);

return statearr_47672;
})();
var statearr_47673_47699 = state_47669__$1;
(statearr_47673_47699[(2)] = null);

(statearr_47673_47699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (4))){
var inst_47633 = (state_47669[(9)]);
var inst_47633__$1 = (state_47669[(2)]);
var inst_47634 = (inst_47633__$1 == null);
var inst_47635 = cljs.core.not.call(null,inst_47634);
var state_47669__$1 = (function (){var statearr_47674 = state_47669;
(statearr_47674[(9)] = inst_47633__$1);

return statearr_47674;
})();
if(inst_47635){
var statearr_47675_47700 = state_47669__$1;
(statearr_47675_47700[(1)] = (5));

} else {
var statearr_47676_47701 = state_47669__$1;
(statearr_47676_47701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (15))){
var inst_47659 = (state_47669[(2)]);
var state_47669__$1 = state_47669;
var statearr_47677_47702 = state_47669__$1;
(statearr_47677_47702[(2)] = inst_47659);

(statearr_47677_47702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (13))){
var state_47669__$1 = state_47669;
var statearr_47678_47703 = state_47669__$1;
(statearr_47678_47703[(2)] = null);

(statearr_47678_47703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (6))){
var inst_47629 = (state_47669[(7)]);
var inst_47654 = inst_47629.length;
var inst_47655 = (inst_47654 > (0));
var state_47669__$1 = state_47669;
if(cljs.core.truth_(inst_47655)){
var statearr_47679_47704 = state_47669__$1;
(statearr_47679_47704[(1)] = (12));

} else {
var statearr_47680_47705 = state_47669__$1;
(statearr_47680_47705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (3))){
var inst_47667 = (state_47669[(2)]);
var state_47669__$1 = state_47669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47669__$1,inst_47667);
} else {
if((state_val_47670 === (12))){
var inst_47629 = (state_47669[(7)]);
var inst_47657 = cljs.core.vec.call(null,inst_47629);
var state_47669__$1 = state_47669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47669__$1,(15),out,inst_47657);
} else {
if((state_val_47670 === (2))){
var state_47669__$1 = state_47669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47669__$1,(4),ch);
} else {
if((state_val_47670 === (11))){
var inst_47637 = (state_47669[(10)]);
var inst_47633 = (state_47669[(9)]);
var inst_47647 = (state_47669[(2)]);
var inst_47648 = [];
var inst_47649 = inst_47648.push(inst_47633);
var inst_47629 = inst_47648;
var inst_47630 = inst_47637;
var state_47669__$1 = (function (){var statearr_47681 = state_47669;
(statearr_47681[(11)] = inst_47649);

(statearr_47681[(7)] = inst_47629);

(statearr_47681[(8)] = inst_47630);

(statearr_47681[(12)] = inst_47647);

return statearr_47681;
})();
var statearr_47682_47706 = state_47669__$1;
(statearr_47682_47706[(2)] = null);

(statearr_47682_47706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (9))){
var inst_47629 = (state_47669[(7)]);
var inst_47645 = cljs.core.vec.call(null,inst_47629);
var state_47669__$1 = state_47669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47669__$1,(11),out,inst_47645);
} else {
if((state_val_47670 === (5))){
var inst_47637 = (state_47669[(10)]);
var inst_47630 = (state_47669[(8)]);
var inst_47633 = (state_47669[(9)]);
var inst_47637__$1 = f.call(null,inst_47633);
var inst_47638 = cljs.core._EQ_.call(null,inst_47637__$1,inst_47630);
var inst_47639 = cljs.core.keyword_identical_QMARK_.call(null,inst_47630,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47640 = ((inst_47638) || (inst_47639));
var state_47669__$1 = (function (){var statearr_47683 = state_47669;
(statearr_47683[(10)] = inst_47637__$1);

return statearr_47683;
})();
if(cljs.core.truth_(inst_47640)){
var statearr_47684_47707 = state_47669__$1;
(statearr_47684_47707[(1)] = (8));

} else {
var statearr_47685_47708 = state_47669__$1;
(statearr_47685_47708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (14))){
var inst_47662 = (state_47669[(2)]);
var inst_47663 = cljs.core.async.close_BANG_.call(null,out);
var state_47669__$1 = (function (){var statearr_47687 = state_47669;
(statearr_47687[(13)] = inst_47662);

return statearr_47687;
})();
var statearr_47688_47709 = state_47669__$1;
(statearr_47688_47709[(2)] = inst_47663);

(statearr_47688_47709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (10))){
var inst_47652 = (state_47669[(2)]);
var state_47669__$1 = state_47669;
var statearr_47689_47710 = state_47669__$1;
(statearr_47689_47710[(2)] = inst_47652);

(statearr_47689_47710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47670 === (8))){
var inst_47629 = (state_47669[(7)]);
var inst_47637 = (state_47669[(10)]);
var inst_47633 = (state_47669[(9)]);
var inst_47642 = inst_47629.push(inst_47633);
var tmp47686 = inst_47629;
var inst_47629__$1 = tmp47686;
var inst_47630 = inst_47637;
var state_47669__$1 = (function (){var statearr_47690 = state_47669;
(statearr_47690[(7)] = inst_47629__$1);

(statearr_47690[(8)] = inst_47630);

(statearr_47690[(14)] = inst_47642);

return statearr_47690;
})();
var statearr_47691_47711 = state_47669__$1;
(statearr_47691_47711[(2)] = null);

(statearr_47691_47711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45793__auto___47697,out))
;
return ((function (switch__45698__auto__,c__45793__auto___47697,out){
return (function() {
var cljs$core$async$state_machine__45699__auto__ = null;
var cljs$core$async$state_machine__45699__auto____0 = (function (){
var statearr_47692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47692[(0)] = cljs$core$async$state_machine__45699__auto__);

(statearr_47692[(1)] = (1));

return statearr_47692;
});
var cljs$core$async$state_machine__45699__auto____1 = (function (state_47669){
while(true){
var ret_value__45700__auto__ = (function (){try{while(true){
var result__45701__auto__ = switch__45698__auto__.call(null,state_47669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45701__auto__;
}
break;
}
}catch (e47693){if((e47693 instanceof Object)){
var ex__45702__auto__ = e47693;
var statearr_47694_47712 = state_47669;
(statearr_47694_47712[(5)] = ex__45702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47713 = state_47669;
state_47669 = G__47713;
continue;
} else {
return ret_value__45700__auto__;
}
break;
}
});
cljs$core$async$state_machine__45699__auto__ = function(state_47669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45699__auto____1.call(this,state_47669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45699__auto____0;
cljs$core$async$state_machine__45699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45699__auto____1;
return cljs$core$async$state_machine__45699__auto__;
})()
;})(switch__45698__auto__,c__45793__auto___47697,out))
})();
var state__45795__auto__ = (function (){var statearr_47695 = f__45794__auto__.call(null);
(statearr_47695[(6)] = c__45793__auto___47697);

return statearr_47695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45795__auto__);
});})(c__45793__auto___47697,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563379480134
