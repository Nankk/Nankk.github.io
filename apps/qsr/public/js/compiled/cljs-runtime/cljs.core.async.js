goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46184 = arguments.length;
switch (G__46184) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46185 = (function (f,blockable,meta46186){
this.f = f;
this.blockable = blockable;
this.meta46186 = meta46186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46187,meta46186__$1){
var self__ = this;
var _46187__$1 = this;
return (new cljs.core.async.t_cljs$core$async46185(self__.f,self__.blockable,meta46186__$1));
});

cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46187){
var self__ = this;
var _46187__$1 = this;
return self__.meta46186;
});

cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46186","meta46186",-578311065,null)], null);
});

cljs.core.async.t_cljs$core$async46185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46185";

cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46185");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46185.
 */
cljs.core.async.__GT_t_cljs$core$async46185 = (function cljs$core$async$__GT_t_cljs$core$async46185(f__$1,blockable__$1,meta46186){
return (new cljs.core.async.t_cljs$core$async46185(f__$1,blockable__$1,meta46186));
});

}

return (new cljs.core.async.t_cljs$core$async46185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__46190 = arguments.length;
switch (G__46190) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__46192 = arguments.length;
switch (G__46192) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__46194 = arguments.length;
switch (G__46194) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47630 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47630) : fn1.call(null,val_47630));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47630,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47630) : fn1.call(null,val_47630));
});})(val_47630,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46196 = arguments.length;
switch (G__46196) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___47644 = n;
var x_47645 = (0);
while(true){
if((x_47645 < n__4607__auto___47644)){
(a[x_47645] = x_47645);

var G__47646 = (x_47645 + (1));
x_47645 = G__47646;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46197 = (function (flag,meta46198){
this.flag = flag;
this.meta46198 = meta46198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46199,meta46198__$1){
var self__ = this;
var _46199__$1 = this;
return (new cljs.core.async.t_cljs$core$async46197(self__.flag,meta46198__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46199){
var self__ = this;
var _46199__$1 = this;
return self__.meta46198;
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46198","meta46198",431008187,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46197";

cljs.core.async.t_cljs$core$async46197.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46197");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46197.
 */
cljs.core.async.__GT_t_cljs$core$async46197 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46197(flag__$1,meta46198){
return (new cljs.core.async.t_cljs$core$async46197(flag__$1,meta46198));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46197(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46200 = (function (flag,cb,meta46201){
this.flag = flag;
this.cb = cb;
this.meta46201 = meta46201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46202,meta46201__$1){
var self__ = this;
var _46202__$1 = this;
return (new cljs.core.async.t_cljs$core$async46200(self__.flag,self__.cb,meta46201__$1));
});

cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46202){
var self__ = this;
var _46202__$1 = this;
return self__.meta46201;
});

cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46201","meta46201",-2005122623,null)], null);
});

cljs.core.async.t_cljs$core$async46200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46200";

cljs.core.async.t_cljs$core$async46200.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46200");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46200.
 */
cljs.core.async.__GT_t_cljs$core$async46200 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46200(flag__$1,cb__$1,meta46201){
return (new cljs.core.async.t_cljs$core$async46200(flag__$1,cb__$1,meta46201));
});

}

return (new cljs.core.async.t_cljs$core$async46200(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46203_SHARP_){
var G__46205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46203_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46205) : fret.call(null,G__46205));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46204_SHARP_){
var G__46206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46204_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46206) : fret.call(null,G__46206));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47672 = (i + (1));
i = G__47672;
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
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4730__auto___47675 = arguments.length;
var i__4731__auto___47676 = (0);
while(true){
if((i__4731__auto___47676 < len__4730__auto___47675)){
args__4736__auto__.push((arguments[i__4731__auto___47676]));

var G__47679 = (i__4731__auto___47676 + (1));
i__4731__auto___47676 = G__47679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46209){
var map__46210 = p__46209;
var map__46210__$1 = (((((!((map__46210 == null))))?(((((map__46210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46210):map__46210);
var opts = map__46210__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46207){
var G__46208 = cljs.core.first(seq46207);
var seq46207__$1 = cljs.core.next(seq46207);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46208,seq46207__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__46213 = arguments.length;
switch (G__46213) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46124__auto___47689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___47689){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___47689){
return (function (state_46237){
var state_val_46238 = (state_46237[(1)]);
if((state_val_46238 === (7))){
var inst_46233 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46239_47690 = state_46237__$1;
(statearr_46239_47690[(2)] = inst_46233);

(statearr_46239_47690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (1))){
var state_46237__$1 = state_46237;
var statearr_46240_47691 = state_46237__$1;
(statearr_46240_47691[(2)] = null);

(statearr_46240_47691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (4))){
var inst_46216 = (state_46237[(7)]);
var inst_46216__$1 = (state_46237[(2)]);
var inst_46217 = (inst_46216__$1 == null);
var state_46237__$1 = (function (){var statearr_46241 = state_46237;
(statearr_46241[(7)] = inst_46216__$1);

return statearr_46241;
})();
if(cljs.core.truth_(inst_46217)){
var statearr_46242_47695 = state_46237__$1;
(statearr_46242_47695[(1)] = (5));

} else {
var statearr_46243_47696 = state_46237__$1;
(statearr_46243_47696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (13))){
var state_46237__$1 = state_46237;
var statearr_46244_47698 = state_46237__$1;
(statearr_46244_47698[(2)] = null);

(statearr_46244_47698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (6))){
var inst_46216 = (state_46237[(7)]);
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46237__$1,(11),to,inst_46216);
} else {
if((state_val_46238 === (3))){
var inst_46235 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46237__$1,inst_46235);
} else {
if((state_val_46238 === (12))){
var state_46237__$1 = state_46237;
var statearr_46245_47703 = state_46237__$1;
(statearr_46245_47703[(2)] = null);

(statearr_46245_47703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (2))){
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46237__$1,(4),from);
} else {
if((state_val_46238 === (11))){
var inst_46226 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
if(cljs.core.truth_(inst_46226)){
var statearr_46246_47704 = state_46237__$1;
(statearr_46246_47704[(1)] = (12));

} else {
var statearr_46247_47705 = state_46237__$1;
(statearr_46247_47705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (9))){
var state_46237__$1 = state_46237;
var statearr_46248_47706 = state_46237__$1;
(statearr_46248_47706[(2)] = null);

(statearr_46248_47706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (5))){
var state_46237__$1 = state_46237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46249_47707 = state_46237__$1;
(statearr_46249_47707[(1)] = (8));

} else {
var statearr_46250_47708 = state_46237__$1;
(statearr_46250_47708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (14))){
var inst_46231 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46251_47710 = state_46237__$1;
(statearr_46251_47710[(2)] = inst_46231);

(statearr_46251_47710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (10))){
var inst_46223 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46252_47713 = state_46237__$1;
(statearr_46252_47713[(2)] = inst_46223);

(statearr_46252_47713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (8))){
var inst_46220 = cljs.core.async.close_BANG_(to);
var state_46237__$1 = state_46237;
var statearr_46253_47715 = state_46237__$1;
(statearr_46253_47715[(2)] = inst_46220);

(statearr_46253_47715[(1)] = (10));


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
});})(c__46124__auto___47689))
;
return ((function (switch__46023__auto__,c__46124__auto___47689){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_46254 = [null,null,null,null,null,null,null,null];
(statearr_46254[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_46254[(1)] = (1));

return statearr_46254;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_46237){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46237);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46255){if((e46255 instanceof Object)){
var ex__46027__auto__ = e46255;
var statearr_46256_47716 = state_46237;
(statearr_46256_47716[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47717 = state_46237;
state_46237 = G__47717;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_46237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_46237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___47689))
})();
var state__46126__auto__ = (function (){var statearr_46257 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46257[(6)] = c__46124__auto___47689);

return statearr_46257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___47689))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__46258){
var vec__46259 = p__46258;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(1),null);
var job = vec__46259;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46124__auto___47732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results){
return (function (state_46266){
var state_val_46267 = (state_46266[(1)]);
if((state_val_46267 === (1))){
var state_46266__$1 = state_46266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46266__$1,(2),res,v);
} else {
if((state_val_46267 === (2))){
var inst_46263 = (state_46266[(2)]);
var inst_46264 = cljs.core.async.close_BANG_(res);
var state_46266__$1 = (function (){var statearr_46268 = state_46266;
(statearr_46268[(7)] = inst_46263);

return statearr_46268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46266__$1,inst_46264);
} else {
return null;
}
}
});})(c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results))
;
return ((function (switch__46023__auto__,c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_46269 = [null,null,null,null,null,null,null,null];
(statearr_46269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__);

(statearr_46269[(1)] = (1));

return statearr_46269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1 = (function (state_46266){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46266);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46270){if((e46270 instanceof Object)){
var ex__46027__auto__ = e46270;
var statearr_46271_47737 = state_46266;
(statearr_46271_47737[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47738 = state_46266;
state_46266 = G__47738;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = function(state_46266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1.call(this,state_46266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results))
})();
var state__46126__auto__ = (function (){var statearr_46272 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46272[(6)] = c__46124__auto___47732);

return statearr_46272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___47732,res,vec__46259,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46273){
var vec__46274 = p__46273;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46274,(1),null);
var job = vec__46274;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___47739 = n;
var __47740 = (0);
while(true){
if((__47740 < n__4607__auto___47739)){
var G__46277_47741 = type;
var G__46277_47742__$1 = (((G__46277_47741 instanceof cljs.core.Keyword))?G__46277_47741.fqn:null);
switch (G__46277_47742__$1) {
case "compute":
var c__46124__auto___47744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47740,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (__47740,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function (state_46290){
var state_val_46291 = (state_46290[(1)]);
if((state_val_46291 === (1))){
var state_46290__$1 = state_46290;
var statearr_46292_47745 = state_46290__$1;
(statearr_46292_47745[(2)] = null);

(statearr_46292_47745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46291 === (2))){
var state_46290__$1 = state_46290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46290__$1,(4),jobs);
} else {
if((state_val_46291 === (3))){
var inst_46288 = (state_46290[(2)]);
var state_46290__$1 = state_46290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46290__$1,inst_46288);
} else {
if((state_val_46291 === (4))){
var inst_46280 = (state_46290[(2)]);
var inst_46281 = process(inst_46280);
var state_46290__$1 = state_46290;
if(cljs.core.truth_(inst_46281)){
var statearr_46293_47746 = state_46290__$1;
(statearr_46293_47746[(1)] = (5));

} else {
var statearr_46294_47747 = state_46290__$1;
(statearr_46294_47747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46291 === (5))){
var state_46290__$1 = state_46290;
var statearr_46295_47748 = state_46290__$1;
(statearr_46295_47748[(2)] = null);

(statearr_46295_47748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46291 === (6))){
var state_46290__$1 = state_46290;
var statearr_46296_47749 = state_46290__$1;
(statearr_46296_47749[(2)] = null);

(statearr_46296_47749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46291 === (7))){
var inst_46286 = (state_46290[(2)]);
var state_46290__$1 = state_46290;
var statearr_46297_47751 = state_46290__$1;
(statearr_46297_47751[(2)] = inst_46286);

(statearr_46297_47751[(1)] = (3));


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
});})(__47740,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
;
return ((function (__47740,switch__46023__auto__,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_46298 = [null,null,null,null,null,null,null];
(statearr_46298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__);

(statearr_46298[(1)] = (1));

return statearr_46298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1 = (function (state_46290){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46290);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46299){if((e46299 instanceof Object)){
var ex__46027__auto__ = e46299;
var statearr_46300_47757 = state_46290;
(statearr_46300_47757[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47759 = state_46290;
state_46290 = G__47759;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = function(state_46290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1.call(this,state_46290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__;
})()
;})(__47740,switch__46023__auto__,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
})();
var state__46126__auto__ = (function (){var statearr_46301 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46301[(6)] = c__46124__auto___47744);

return statearr_46301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(__47740,c__46124__auto___47744,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
);


break;
case "async":
var c__46124__auto___47761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47740,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (__47740,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function (state_46314){
var state_val_46315 = (state_46314[(1)]);
if((state_val_46315 === (1))){
var state_46314__$1 = state_46314;
var statearr_46316_47763 = state_46314__$1;
(statearr_46316_47763[(2)] = null);

(statearr_46316_47763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (2))){
var state_46314__$1 = state_46314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46314__$1,(4),jobs);
} else {
if((state_val_46315 === (3))){
var inst_46312 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46314__$1,inst_46312);
} else {
if((state_val_46315 === (4))){
var inst_46304 = (state_46314[(2)]);
var inst_46305 = async(inst_46304);
var state_46314__$1 = state_46314;
if(cljs.core.truth_(inst_46305)){
var statearr_46317_47764 = state_46314__$1;
(statearr_46317_47764[(1)] = (5));

} else {
var statearr_46318_47765 = state_46314__$1;
(statearr_46318_47765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (5))){
var state_46314__$1 = state_46314;
var statearr_46319_47766 = state_46314__$1;
(statearr_46319_47766[(2)] = null);

(statearr_46319_47766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (6))){
var state_46314__$1 = state_46314;
var statearr_46320_47767 = state_46314__$1;
(statearr_46320_47767[(2)] = null);

(statearr_46320_47767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (7))){
var inst_46310 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46321_47770 = state_46314__$1;
(statearr_46321_47770[(2)] = inst_46310);

(statearr_46321_47770[(1)] = (3));


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
});})(__47740,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
;
return ((function (__47740,switch__46023__auto__,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_46322 = [null,null,null,null,null,null,null];
(statearr_46322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__);

(statearr_46322[(1)] = (1));

return statearr_46322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1 = (function (state_46314){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46314);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46323){if((e46323 instanceof Object)){
var ex__46027__auto__ = e46323;
var statearr_46324_47773 = state_46314;
(statearr_46324_47773[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47774 = state_46314;
state_46314 = G__47774;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = function(state_46314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1.call(this,state_46314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__;
})()
;})(__47740,switch__46023__auto__,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
})();
var state__46126__auto__ = (function (){var statearr_46325 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46325[(6)] = c__46124__auto___47761);

return statearr_46325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(__47740,c__46124__auto___47761,G__46277_47741,G__46277_47742__$1,n__4607__auto___47739,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46277_47742__$1)].join('')));

}

var G__47778 = (__47740 + (1));
__47740 = G__47778;
continue;
} else {
}
break;
}

var c__46124__auto___47780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___47780,jobs,results,process,async){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___47780,jobs,results,process,async){
return (function (state_46347){
var state_val_46348 = (state_46347[(1)]);
if((state_val_46348 === (7))){
var inst_46343 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46349_47781 = state_46347__$1;
(statearr_46349_47781[(2)] = inst_46343);

(statearr_46349_47781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (1))){
var state_46347__$1 = state_46347;
var statearr_46350_47782 = state_46347__$1;
(statearr_46350_47782[(2)] = null);

(statearr_46350_47782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (4))){
var inst_46328 = (state_46347[(7)]);
var inst_46328__$1 = (state_46347[(2)]);
var inst_46329 = (inst_46328__$1 == null);
var state_46347__$1 = (function (){var statearr_46351 = state_46347;
(statearr_46351[(7)] = inst_46328__$1);

return statearr_46351;
})();
if(cljs.core.truth_(inst_46329)){
var statearr_46352_47785 = state_46347__$1;
(statearr_46352_47785[(1)] = (5));

} else {
var statearr_46353_47786 = state_46347__$1;
(statearr_46353_47786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (6))){
var inst_46328 = (state_46347[(7)]);
var inst_46333 = (state_46347[(8)]);
var inst_46333__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46335 = [inst_46328,inst_46333__$1];
var inst_46336 = (new cljs.core.PersistentVector(null,2,(5),inst_46334,inst_46335,null));
var state_46347__$1 = (function (){var statearr_46354 = state_46347;
(statearr_46354[(8)] = inst_46333__$1);

return statearr_46354;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46347__$1,(8),jobs,inst_46336);
} else {
if((state_val_46348 === (3))){
var inst_46345 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46347__$1,inst_46345);
} else {
if((state_val_46348 === (2))){
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46347__$1,(4),from);
} else {
if((state_val_46348 === (9))){
var inst_46340 = (state_46347[(2)]);
var state_46347__$1 = (function (){var statearr_46355 = state_46347;
(statearr_46355[(9)] = inst_46340);

return statearr_46355;
})();
var statearr_46356_47788 = state_46347__$1;
(statearr_46356_47788[(2)] = null);

(statearr_46356_47788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (5))){
var inst_46331 = cljs.core.async.close_BANG_(jobs);
var state_46347__$1 = state_46347;
var statearr_46357_47790 = state_46347__$1;
(statearr_46357_47790[(2)] = inst_46331);

(statearr_46357_47790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (8))){
var inst_46333 = (state_46347[(8)]);
var inst_46338 = (state_46347[(2)]);
var state_46347__$1 = (function (){var statearr_46358 = state_46347;
(statearr_46358[(10)] = inst_46338);

return statearr_46358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46347__$1,(9),results,inst_46333);
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
});})(c__46124__auto___47780,jobs,results,process,async))
;
return ((function (switch__46023__auto__,c__46124__auto___47780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_46359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__);

(statearr_46359[(1)] = (1));

return statearr_46359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1 = (function (state_46347){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46347);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46360){if((e46360 instanceof Object)){
var ex__46027__auto__ = e46360;
var statearr_46361_47791 = state_46347;
(statearr_46361_47791[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47794 = state_46347;
state_46347 = G__47794;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = function(state_46347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1.call(this,state_46347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___47780,jobs,results,process,async))
})();
var state__46126__auto__ = (function (){var statearr_46362 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46362[(6)] = c__46124__auto___47780);

return statearr_46362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___47780,jobs,results,process,async))
);


var c__46124__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto__,jobs,results,process,async){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto__,jobs,results,process,async){
return (function (state_46400){
var state_val_46401 = (state_46400[(1)]);
if((state_val_46401 === (7))){
var inst_46396 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
var statearr_46402_47795 = state_46400__$1;
(statearr_46402_47795[(2)] = inst_46396);

(statearr_46402_47795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (20))){
var state_46400__$1 = state_46400;
var statearr_46403_47796 = state_46400__$1;
(statearr_46403_47796[(2)] = null);

(statearr_46403_47796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (1))){
var state_46400__$1 = state_46400;
var statearr_46404_47797 = state_46400__$1;
(statearr_46404_47797[(2)] = null);

(statearr_46404_47797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (4))){
var inst_46365 = (state_46400[(7)]);
var inst_46365__$1 = (state_46400[(2)]);
var inst_46366 = (inst_46365__$1 == null);
var state_46400__$1 = (function (){var statearr_46405 = state_46400;
(statearr_46405[(7)] = inst_46365__$1);

return statearr_46405;
})();
if(cljs.core.truth_(inst_46366)){
var statearr_46406_47799 = state_46400__$1;
(statearr_46406_47799[(1)] = (5));

} else {
var statearr_46407_47801 = state_46400__$1;
(statearr_46407_47801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (15))){
var inst_46378 = (state_46400[(8)]);
var state_46400__$1 = state_46400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46400__$1,(18),to,inst_46378);
} else {
if((state_val_46401 === (21))){
var inst_46391 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
var statearr_46408_47802 = state_46400__$1;
(statearr_46408_47802[(2)] = inst_46391);

(statearr_46408_47802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (13))){
var inst_46393 = (state_46400[(2)]);
var state_46400__$1 = (function (){var statearr_46409 = state_46400;
(statearr_46409[(9)] = inst_46393);

return statearr_46409;
})();
var statearr_46410_47803 = state_46400__$1;
(statearr_46410_47803[(2)] = null);

(statearr_46410_47803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (6))){
var inst_46365 = (state_46400[(7)]);
var state_46400__$1 = state_46400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46400__$1,(11),inst_46365);
} else {
if((state_val_46401 === (17))){
var inst_46386 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
if(cljs.core.truth_(inst_46386)){
var statearr_46411_47804 = state_46400__$1;
(statearr_46411_47804[(1)] = (19));

} else {
var statearr_46412_47805 = state_46400__$1;
(statearr_46412_47805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (3))){
var inst_46398 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46400__$1,inst_46398);
} else {
if((state_val_46401 === (12))){
var inst_46375 = (state_46400[(10)]);
var state_46400__$1 = state_46400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46400__$1,(14),inst_46375);
} else {
if((state_val_46401 === (2))){
var state_46400__$1 = state_46400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46400__$1,(4),results);
} else {
if((state_val_46401 === (19))){
var state_46400__$1 = state_46400;
var statearr_46413_47806 = state_46400__$1;
(statearr_46413_47806[(2)] = null);

(statearr_46413_47806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (11))){
var inst_46375 = (state_46400[(2)]);
var state_46400__$1 = (function (){var statearr_46414 = state_46400;
(statearr_46414[(10)] = inst_46375);

return statearr_46414;
})();
var statearr_46415_47808 = state_46400__$1;
(statearr_46415_47808[(2)] = null);

(statearr_46415_47808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (9))){
var state_46400__$1 = state_46400;
var statearr_46416_47810 = state_46400__$1;
(statearr_46416_47810[(2)] = null);

(statearr_46416_47810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (5))){
var state_46400__$1 = state_46400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46417_47811 = state_46400__$1;
(statearr_46417_47811[(1)] = (8));

} else {
var statearr_46418_47812 = state_46400__$1;
(statearr_46418_47812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (14))){
var inst_46378 = (state_46400[(8)]);
var inst_46380 = (state_46400[(11)]);
var inst_46378__$1 = (state_46400[(2)]);
var inst_46379 = (inst_46378__$1 == null);
var inst_46380__$1 = cljs.core.not(inst_46379);
var state_46400__$1 = (function (){var statearr_46419 = state_46400;
(statearr_46419[(8)] = inst_46378__$1);

(statearr_46419[(11)] = inst_46380__$1);

return statearr_46419;
})();
if(inst_46380__$1){
var statearr_46420_47815 = state_46400__$1;
(statearr_46420_47815[(1)] = (15));

} else {
var statearr_46421_47818 = state_46400__$1;
(statearr_46421_47818[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (16))){
var inst_46380 = (state_46400[(11)]);
var state_46400__$1 = state_46400;
var statearr_46422_47819 = state_46400__$1;
(statearr_46422_47819[(2)] = inst_46380);

(statearr_46422_47819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (10))){
var inst_46372 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
var statearr_46423_47820 = state_46400__$1;
(statearr_46423_47820[(2)] = inst_46372);

(statearr_46423_47820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (18))){
var inst_46383 = (state_46400[(2)]);
var state_46400__$1 = state_46400;
var statearr_46424_47823 = state_46400__$1;
(statearr_46424_47823[(2)] = inst_46383);

(statearr_46424_47823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46401 === (8))){
var inst_46369 = cljs.core.async.close_BANG_(to);
var state_46400__$1 = state_46400;
var statearr_46425_47824 = state_46400__$1;
(statearr_46425_47824[(2)] = inst_46369);

(statearr_46425_47824[(1)] = (10));


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
});})(c__46124__auto__,jobs,results,process,async))
;
return ((function (switch__46023__auto__,c__46124__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_46426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__);

(statearr_46426[(1)] = (1));

return statearr_46426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1 = (function (state_46400){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46400);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46427){if((e46427 instanceof Object)){
var ex__46027__auto__ = e46427;
var statearr_46428_47828 = state_46400;
(statearr_46428_47828[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47830 = state_46400;
state_46400 = G__47830;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__ = function(state_46400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1.call(this,state_46400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto__,jobs,results,process,async))
})();
var state__46126__auto__ = (function (){var statearr_46429 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46429[(6)] = c__46124__auto__);

return statearr_46429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto__,jobs,results,process,async))
);

return c__46124__auto__;
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
var G__46431 = arguments.length;
switch (G__46431) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__46433 = arguments.length;
switch (G__46433) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__46435 = arguments.length;
switch (G__46435) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46124__auto___47837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___47837,tc,fc){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___47837,tc,fc){
return (function (state_46461){
var state_val_46462 = (state_46461[(1)]);
if((state_val_46462 === (7))){
var inst_46457 = (state_46461[(2)]);
var state_46461__$1 = state_46461;
var statearr_46463_47838 = state_46461__$1;
(statearr_46463_47838[(2)] = inst_46457);

(statearr_46463_47838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (1))){
var state_46461__$1 = state_46461;
var statearr_46464_47843 = state_46461__$1;
(statearr_46464_47843[(2)] = null);

(statearr_46464_47843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (4))){
var inst_46438 = (state_46461[(7)]);
var inst_46438__$1 = (state_46461[(2)]);
var inst_46439 = (inst_46438__$1 == null);
var state_46461__$1 = (function (){var statearr_46465 = state_46461;
(statearr_46465[(7)] = inst_46438__$1);

return statearr_46465;
})();
if(cljs.core.truth_(inst_46439)){
var statearr_46466_47847 = state_46461__$1;
(statearr_46466_47847[(1)] = (5));

} else {
var statearr_46467_47848 = state_46461__$1;
(statearr_46467_47848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (13))){
var state_46461__$1 = state_46461;
var statearr_46468_47849 = state_46461__$1;
(statearr_46468_47849[(2)] = null);

(statearr_46468_47849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (6))){
var inst_46438 = (state_46461[(7)]);
var inst_46444 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46438) : p.call(null,inst_46438));
var state_46461__$1 = state_46461;
if(cljs.core.truth_(inst_46444)){
var statearr_46469_47850 = state_46461__$1;
(statearr_46469_47850[(1)] = (9));

} else {
var statearr_46470_47851 = state_46461__$1;
(statearr_46470_47851[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (3))){
var inst_46459 = (state_46461[(2)]);
var state_46461__$1 = state_46461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46461__$1,inst_46459);
} else {
if((state_val_46462 === (12))){
var state_46461__$1 = state_46461;
var statearr_46471_47855 = state_46461__$1;
(statearr_46471_47855[(2)] = null);

(statearr_46471_47855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (2))){
var state_46461__$1 = state_46461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46461__$1,(4),ch);
} else {
if((state_val_46462 === (11))){
var inst_46438 = (state_46461[(7)]);
var inst_46448 = (state_46461[(2)]);
var state_46461__$1 = state_46461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46461__$1,(8),inst_46448,inst_46438);
} else {
if((state_val_46462 === (9))){
var state_46461__$1 = state_46461;
var statearr_46472_47856 = state_46461__$1;
(statearr_46472_47856[(2)] = tc);

(statearr_46472_47856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (5))){
var inst_46441 = cljs.core.async.close_BANG_(tc);
var inst_46442 = cljs.core.async.close_BANG_(fc);
var state_46461__$1 = (function (){var statearr_46473 = state_46461;
(statearr_46473[(8)] = inst_46441);

return statearr_46473;
})();
var statearr_46474_47860 = state_46461__$1;
(statearr_46474_47860[(2)] = inst_46442);

(statearr_46474_47860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (14))){
var inst_46455 = (state_46461[(2)]);
var state_46461__$1 = state_46461;
var statearr_46475_47861 = state_46461__$1;
(statearr_46475_47861[(2)] = inst_46455);

(statearr_46475_47861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (10))){
var state_46461__$1 = state_46461;
var statearr_46476_47862 = state_46461__$1;
(statearr_46476_47862[(2)] = fc);

(statearr_46476_47862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46462 === (8))){
var inst_46450 = (state_46461[(2)]);
var state_46461__$1 = state_46461;
if(cljs.core.truth_(inst_46450)){
var statearr_46477_47866 = state_46461__$1;
(statearr_46477_47866[(1)] = (12));

} else {
var statearr_46478_47867 = state_46461__$1;
(statearr_46478_47867[(1)] = (13));

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
});})(c__46124__auto___47837,tc,fc))
;
return ((function (switch__46023__auto__,c__46124__auto___47837,tc,fc){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_46479 = [null,null,null,null,null,null,null,null,null];
(statearr_46479[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_46479[(1)] = (1));

return statearr_46479;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_46461){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46461);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46480){if((e46480 instanceof Object)){
var ex__46027__auto__ = e46480;
var statearr_46481_47869 = state_46461;
(statearr_46481_47869[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47871 = state_46461;
state_46461 = G__47871;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_46461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_46461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___47837,tc,fc))
})();
var state__46126__auto__ = (function (){var statearr_46482 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46482[(6)] = c__46124__auto___47837);

return statearr_46482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___47837,tc,fc))
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
var c__46124__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto__){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto__){
return (function (state_46503){
var state_val_46504 = (state_46503[(1)]);
if((state_val_46504 === (7))){
var inst_46499 = (state_46503[(2)]);
var state_46503__$1 = state_46503;
var statearr_46505_47872 = state_46503__$1;
(statearr_46505_47872[(2)] = inst_46499);

(statearr_46505_47872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (1))){
var inst_46483 = init;
var state_46503__$1 = (function (){var statearr_46506 = state_46503;
(statearr_46506[(7)] = inst_46483);

return statearr_46506;
})();
var statearr_46507_47876 = state_46503__$1;
(statearr_46507_47876[(2)] = null);

(statearr_46507_47876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (4))){
var inst_46486 = (state_46503[(8)]);
var inst_46486__$1 = (state_46503[(2)]);
var inst_46487 = (inst_46486__$1 == null);
var state_46503__$1 = (function (){var statearr_46508 = state_46503;
(statearr_46508[(8)] = inst_46486__$1);

return statearr_46508;
})();
if(cljs.core.truth_(inst_46487)){
var statearr_46509_47877 = state_46503__$1;
(statearr_46509_47877[(1)] = (5));

} else {
var statearr_46510_47878 = state_46503__$1;
(statearr_46510_47878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (6))){
var inst_46486 = (state_46503[(8)]);
var inst_46490 = (state_46503[(9)]);
var inst_46483 = (state_46503[(7)]);
var inst_46490__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46483,inst_46486) : f.call(null,inst_46483,inst_46486));
var inst_46491 = cljs.core.reduced_QMARK_(inst_46490__$1);
var state_46503__$1 = (function (){var statearr_46511 = state_46503;
(statearr_46511[(9)] = inst_46490__$1);

return statearr_46511;
})();
if(inst_46491){
var statearr_46512_47882 = state_46503__$1;
(statearr_46512_47882[(1)] = (8));

} else {
var statearr_46513_47883 = state_46503__$1;
(statearr_46513_47883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (3))){
var inst_46501 = (state_46503[(2)]);
var state_46503__$1 = state_46503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46503__$1,inst_46501);
} else {
if((state_val_46504 === (2))){
var state_46503__$1 = state_46503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46503__$1,(4),ch);
} else {
if((state_val_46504 === (9))){
var inst_46490 = (state_46503[(9)]);
var inst_46483 = inst_46490;
var state_46503__$1 = (function (){var statearr_46514 = state_46503;
(statearr_46514[(7)] = inst_46483);

return statearr_46514;
})();
var statearr_46515_47891 = state_46503__$1;
(statearr_46515_47891[(2)] = null);

(statearr_46515_47891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (5))){
var inst_46483 = (state_46503[(7)]);
var state_46503__$1 = state_46503;
var statearr_46516_47892 = state_46503__$1;
(statearr_46516_47892[(2)] = inst_46483);

(statearr_46516_47892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (10))){
var inst_46497 = (state_46503[(2)]);
var state_46503__$1 = state_46503;
var statearr_46517_47893 = state_46503__$1;
(statearr_46517_47893[(2)] = inst_46497);

(statearr_46517_47893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46504 === (8))){
var inst_46490 = (state_46503[(9)]);
var inst_46493 = cljs.core.deref(inst_46490);
var state_46503__$1 = state_46503;
var statearr_46518_47897 = state_46503__$1;
(statearr_46518_47897[(2)] = inst_46493);

(statearr_46518_47897[(1)] = (10));


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
});})(c__46124__auto__))
;
return ((function (switch__46023__auto__,c__46124__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46024__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46024__auto____0 = (function (){
var statearr_46519 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46519[(0)] = cljs$core$async$reduce_$_state_machine__46024__auto__);

(statearr_46519[(1)] = (1));

return statearr_46519;
});
var cljs$core$async$reduce_$_state_machine__46024__auto____1 = (function (state_46503){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46503);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46520){if((e46520 instanceof Object)){
var ex__46027__auto__ = e46520;
var statearr_46521_47901 = state_46503;
(statearr_46521_47901[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47905 = state_46503;
state_46503 = G__47905;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46024__auto__ = function(state_46503){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46024__auto____1.call(this,state_46503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46024__auto____0;
cljs$core$async$reduce_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46024__auto____1;
return cljs$core$async$reduce_$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto__))
})();
var state__46126__auto__ = (function (){var statearr_46522 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46522[(6)] = c__46124__auto__);

return statearr_46522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto__))
);

return c__46124__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46124__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto__,f__$1){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto__,f__$1){
return (function (state_46528){
var state_val_46529 = (state_46528[(1)]);
if((state_val_46529 === (1))){
var inst_46523 = cljs.core.async.reduce(f__$1,init,ch);
var state_46528__$1 = state_46528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46528__$1,(2),inst_46523);
} else {
if((state_val_46529 === (2))){
var inst_46525 = (state_46528[(2)]);
var inst_46526 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46525) : f__$1.call(null,inst_46525));
var state_46528__$1 = state_46528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46528__$1,inst_46526);
} else {
return null;
}
}
});})(c__46124__auto__,f__$1))
;
return ((function (switch__46023__auto__,c__46124__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46024__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46024__auto____0 = (function (){
var statearr_46530 = [null,null,null,null,null,null,null];
(statearr_46530[(0)] = cljs$core$async$transduce_$_state_machine__46024__auto__);

(statearr_46530[(1)] = (1));

return statearr_46530;
});
var cljs$core$async$transduce_$_state_machine__46024__auto____1 = (function (state_46528){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46528);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46531){if((e46531 instanceof Object)){
var ex__46027__auto__ = e46531;
var statearr_46532_47919 = state_46528;
(statearr_46532_47919[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47923 = state_46528;
state_46528 = G__47923;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46024__auto__ = function(state_46528){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46024__auto____1.call(this,state_46528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46024__auto____0;
cljs$core$async$transduce_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46024__auto____1;
return cljs$core$async$transduce_$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto__,f__$1))
})();
var state__46126__auto__ = (function (){var statearr_46533 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46533[(6)] = c__46124__auto__);

return statearr_46533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto__,f__$1))
);

return c__46124__auto__;
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
var G__46535 = arguments.length;
switch (G__46535) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46124__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto__){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto__){
return (function (state_46560){
var state_val_46561 = (state_46560[(1)]);
if((state_val_46561 === (7))){
var inst_46542 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46562_47937 = state_46560__$1;
(statearr_46562_47937[(2)] = inst_46542);

(statearr_46562_47937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (1))){
var inst_46536 = cljs.core.seq(coll);
var inst_46537 = inst_46536;
var state_46560__$1 = (function (){var statearr_46563 = state_46560;
(statearr_46563[(7)] = inst_46537);

return statearr_46563;
})();
var statearr_46564_47938 = state_46560__$1;
(statearr_46564_47938[(2)] = null);

(statearr_46564_47938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (4))){
var inst_46537 = (state_46560[(7)]);
var inst_46540 = cljs.core.first(inst_46537);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46560__$1,(7),ch,inst_46540);
} else {
if((state_val_46561 === (13))){
var inst_46554 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46565_47939 = state_46560__$1;
(statearr_46565_47939[(2)] = inst_46554);

(statearr_46565_47939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (6))){
var inst_46545 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
if(cljs.core.truth_(inst_46545)){
var statearr_46566_47940 = state_46560__$1;
(statearr_46566_47940[(1)] = (8));

} else {
var statearr_46567_47941 = state_46560__$1;
(statearr_46567_47941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (3))){
var inst_46558 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46560__$1,inst_46558);
} else {
if((state_val_46561 === (12))){
var state_46560__$1 = state_46560;
var statearr_46568_47943 = state_46560__$1;
(statearr_46568_47943[(2)] = null);

(statearr_46568_47943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (2))){
var inst_46537 = (state_46560[(7)]);
var state_46560__$1 = state_46560;
if(cljs.core.truth_(inst_46537)){
var statearr_46569_47944 = state_46560__$1;
(statearr_46569_47944[(1)] = (4));

} else {
var statearr_46570_47945 = state_46560__$1;
(statearr_46570_47945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (11))){
var inst_46551 = cljs.core.async.close_BANG_(ch);
var state_46560__$1 = state_46560;
var statearr_46571_47946 = state_46560__$1;
(statearr_46571_47946[(2)] = inst_46551);

(statearr_46571_47946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (9))){
var state_46560__$1 = state_46560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46572_47947 = state_46560__$1;
(statearr_46572_47947[(1)] = (11));

} else {
var statearr_46573_47948 = state_46560__$1;
(statearr_46573_47948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (5))){
var inst_46537 = (state_46560[(7)]);
var state_46560__$1 = state_46560;
var statearr_46574_47949 = state_46560__$1;
(statearr_46574_47949[(2)] = inst_46537);

(statearr_46574_47949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (10))){
var inst_46556 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46575_47950 = state_46560__$1;
(statearr_46575_47950[(2)] = inst_46556);

(statearr_46575_47950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (8))){
var inst_46537 = (state_46560[(7)]);
var inst_46547 = cljs.core.next(inst_46537);
var inst_46537__$1 = inst_46547;
var state_46560__$1 = (function (){var statearr_46576 = state_46560;
(statearr_46576[(7)] = inst_46537__$1);

return statearr_46576;
})();
var statearr_46577_47951 = state_46560__$1;
(statearr_46577_47951[(2)] = null);

(statearr_46577_47951[(1)] = (2));


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
});})(c__46124__auto__))
;
return ((function (switch__46023__auto__,c__46124__auto__){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_46578 = [null,null,null,null,null,null,null,null];
(statearr_46578[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_46578[(1)] = (1));

return statearr_46578;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_46560){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46560);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46579){if((e46579 instanceof Object)){
var ex__46027__auto__ = e46579;
var statearr_46580_47952 = state_46560;
(statearr_46580_47952[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47953 = state_46560;
state_46560 = G__47953;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_46560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_46560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto__))
})();
var state__46126__auto__ = (function (){var statearr_46581 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46581[(6)] = c__46124__auto__);

return statearr_46581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto__))
);

return c__46124__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46582 = (function (ch,cs,meta46583){
this.ch = ch;
this.cs = cs;
this.meta46583 = meta46583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46584,meta46583__$1){
var self__ = this;
var _46584__$1 = this;
return (new cljs.core.async.t_cljs$core$async46582(self__.ch,self__.cs,meta46583__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46584){
var self__ = this;
var _46584__$1 = this;
return self__.meta46583;
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46583","meta46583",1899669023,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46582";

cljs.core.async.t_cljs$core$async46582.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46582");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46582.
 */
cljs.core.async.__GT_t_cljs$core$async46582 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46582(ch__$1,cs__$1,meta46583){
return (new cljs.core.async.t_cljs$core$async46582(ch__$1,cs__$1,meta46583));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46124__auto___47965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___47965,cs,m,dchan,dctr,done){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___47965,cs,m,dchan,dctr,done){
return (function (state_46719){
var state_val_46720 = (state_46719[(1)]);
if((state_val_46720 === (7))){
var inst_46715 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46721_47966 = state_46719__$1;
(statearr_46721_47966[(2)] = inst_46715);

(statearr_46721_47966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (20))){
var inst_46618 = (state_46719[(7)]);
var inst_46630 = cljs.core.first(inst_46618);
var inst_46631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46630,(0),null);
var inst_46632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46630,(1),null);
var state_46719__$1 = (function (){var statearr_46722 = state_46719;
(statearr_46722[(8)] = inst_46631);

return statearr_46722;
})();
if(cljs.core.truth_(inst_46632)){
var statearr_46723_47968 = state_46719__$1;
(statearr_46723_47968[(1)] = (22));

} else {
var statearr_46724_47972 = state_46719__$1;
(statearr_46724_47972[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (27))){
var inst_46660 = (state_46719[(9)]);
var inst_46662 = (state_46719[(10)]);
var inst_46667 = (state_46719[(11)]);
var inst_46587 = (state_46719[(12)]);
var inst_46667__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46660,inst_46662);
var inst_46668 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46667__$1,inst_46587,done);
var state_46719__$1 = (function (){var statearr_46725 = state_46719;
(statearr_46725[(11)] = inst_46667__$1);

return statearr_46725;
})();
if(cljs.core.truth_(inst_46668)){
var statearr_46726_47975 = state_46719__$1;
(statearr_46726_47975[(1)] = (30));

} else {
var statearr_46727_47976 = state_46719__$1;
(statearr_46727_47976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (1))){
var state_46719__$1 = state_46719;
var statearr_46728_47979 = state_46719__$1;
(statearr_46728_47979[(2)] = null);

(statearr_46728_47979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (24))){
var inst_46618 = (state_46719[(7)]);
var inst_46637 = (state_46719[(2)]);
var inst_46638 = cljs.core.next(inst_46618);
var inst_46596 = inst_46638;
var inst_46597 = null;
var inst_46598 = (0);
var inst_46599 = (0);
var state_46719__$1 = (function (){var statearr_46729 = state_46719;
(statearr_46729[(13)] = inst_46597);

(statearr_46729[(14)] = inst_46596);

(statearr_46729[(15)] = inst_46637);

(statearr_46729[(16)] = inst_46599);

(statearr_46729[(17)] = inst_46598);

return statearr_46729;
})();
var statearr_46730_47980 = state_46719__$1;
(statearr_46730_47980[(2)] = null);

(statearr_46730_47980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (39))){
var state_46719__$1 = state_46719;
var statearr_46734_47984 = state_46719__$1;
(statearr_46734_47984[(2)] = null);

(statearr_46734_47984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (4))){
var inst_46587 = (state_46719[(12)]);
var inst_46587__$1 = (state_46719[(2)]);
var inst_46588 = (inst_46587__$1 == null);
var state_46719__$1 = (function (){var statearr_46735 = state_46719;
(statearr_46735[(12)] = inst_46587__$1);

return statearr_46735;
})();
if(cljs.core.truth_(inst_46588)){
var statearr_46736_47989 = state_46719__$1;
(statearr_46736_47989[(1)] = (5));

} else {
var statearr_46737_47996 = state_46719__$1;
(statearr_46737_47996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (15))){
var inst_46597 = (state_46719[(13)]);
var inst_46596 = (state_46719[(14)]);
var inst_46599 = (state_46719[(16)]);
var inst_46598 = (state_46719[(17)]);
var inst_46614 = (state_46719[(2)]);
var inst_46615 = (inst_46599 + (1));
var tmp46731 = inst_46597;
var tmp46732 = inst_46596;
var tmp46733 = inst_46598;
var inst_46596__$1 = tmp46732;
var inst_46597__$1 = tmp46731;
var inst_46598__$1 = tmp46733;
var inst_46599__$1 = inst_46615;
var state_46719__$1 = (function (){var statearr_46738 = state_46719;
(statearr_46738[(18)] = inst_46614);

(statearr_46738[(13)] = inst_46597__$1);

(statearr_46738[(14)] = inst_46596__$1);

(statearr_46738[(16)] = inst_46599__$1);

(statearr_46738[(17)] = inst_46598__$1);

return statearr_46738;
})();
var statearr_46739_47997 = state_46719__$1;
(statearr_46739_47997[(2)] = null);

(statearr_46739_47997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (21))){
var inst_46641 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46743_47998 = state_46719__$1;
(statearr_46743_47998[(2)] = inst_46641);

(statearr_46743_47998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (31))){
var inst_46667 = (state_46719[(11)]);
var inst_46671 = done(null);
var inst_46672 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46667);
var state_46719__$1 = (function (){var statearr_46744 = state_46719;
(statearr_46744[(19)] = inst_46671);

return statearr_46744;
})();
var statearr_46745_47999 = state_46719__$1;
(statearr_46745_47999[(2)] = inst_46672);

(statearr_46745_47999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (32))){
var inst_46660 = (state_46719[(9)]);
var inst_46662 = (state_46719[(10)]);
var inst_46661 = (state_46719[(20)]);
var inst_46659 = (state_46719[(21)]);
var inst_46674 = (state_46719[(2)]);
var inst_46675 = (inst_46662 + (1));
var tmp46740 = inst_46660;
var tmp46741 = inst_46661;
var tmp46742 = inst_46659;
var inst_46659__$1 = tmp46742;
var inst_46660__$1 = tmp46740;
var inst_46661__$1 = tmp46741;
var inst_46662__$1 = inst_46675;
var state_46719__$1 = (function (){var statearr_46746 = state_46719;
(statearr_46746[(9)] = inst_46660__$1);

(statearr_46746[(22)] = inst_46674);

(statearr_46746[(10)] = inst_46662__$1);

(statearr_46746[(20)] = inst_46661__$1);

(statearr_46746[(21)] = inst_46659__$1);

return statearr_46746;
})();
var statearr_46747_48000 = state_46719__$1;
(statearr_46747_48000[(2)] = null);

(statearr_46747_48000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (40))){
var inst_46687 = (state_46719[(23)]);
var inst_46691 = done(null);
var inst_46692 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46687);
var state_46719__$1 = (function (){var statearr_46748 = state_46719;
(statearr_46748[(24)] = inst_46691);

return statearr_46748;
})();
var statearr_46749_48007 = state_46719__$1;
(statearr_46749_48007[(2)] = inst_46692);

(statearr_46749_48007[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (33))){
var inst_46678 = (state_46719[(25)]);
var inst_46680 = cljs.core.chunked_seq_QMARK_(inst_46678);
var state_46719__$1 = state_46719;
if(inst_46680){
var statearr_46750_48008 = state_46719__$1;
(statearr_46750_48008[(1)] = (36));

} else {
var statearr_46751_48009 = state_46719__$1;
(statearr_46751_48009[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (13))){
var inst_46608 = (state_46719[(26)]);
var inst_46611 = cljs.core.async.close_BANG_(inst_46608);
var state_46719__$1 = state_46719;
var statearr_46752_48010 = state_46719__$1;
(statearr_46752_48010[(2)] = inst_46611);

(statearr_46752_48010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (22))){
var inst_46631 = (state_46719[(8)]);
var inst_46634 = cljs.core.async.close_BANG_(inst_46631);
var state_46719__$1 = state_46719;
var statearr_46753_48011 = state_46719__$1;
(statearr_46753_48011[(2)] = inst_46634);

(statearr_46753_48011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (36))){
var inst_46678 = (state_46719[(25)]);
var inst_46682 = cljs.core.chunk_first(inst_46678);
var inst_46683 = cljs.core.chunk_rest(inst_46678);
var inst_46684 = cljs.core.count(inst_46682);
var inst_46659 = inst_46683;
var inst_46660 = inst_46682;
var inst_46661 = inst_46684;
var inst_46662 = (0);
var state_46719__$1 = (function (){var statearr_46754 = state_46719;
(statearr_46754[(9)] = inst_46660);

(statearr_46754[(10)] = inst_46662);

(statearr_46754[(20)] = inst_46661);

(statearr_46754[(21)] = inst_46659);

return statearr_46754;
})();
var statearr_46755_48012 = state_46719__$1;
(statearr_46755_48012[(2)] = null);

(statearr_46755_48012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (41))){
var inst_46678 = (state_46719[(25)]);
var inst_46694 = (state_46719[(2)]);
var inst_46695 = cljs.core.next(inst_46678);
var inst_46659 = inst_46695;
var inst_46660 = null;
var inst_46661 = (0);
var inst_46662 = (0);
var state_46719__$1 = (function (){var statearr_46756 = state_46719;
(statearr_46756[(9)] = inst_46660);

(statearr_46756[(27)] = inst_46694);

(statearr_46756[(10)] = inst_46662);

(statearr_46756[(20)] = inst_46661);

(statearr_46756[(21)] = inst_46659);

return statearr_46756;
})();
var statearr_46757_48013 = state_46719__$1;
(statearr_46757_48013[(2)] = null);

(statearr_46757_48013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (43))){
var state_46719__$1 = state_46719;
var statearr_46758_48020 = state_46719__$1;
(statearr_46758_48020[(2)] = null);

(statearr_46758_48020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (29))){
var inst_46703 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46759_48021 = state_46719__$1;
(statearr_46759_48021[(2)] = inst_46703);

(statearr_46759_48021[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (44))){
var inst_46712 = (state_46719[(2)]);
var state_46719__$1 = (function (){var statearr_46760 = state_46719;
(statearr_46760[(28)] = inst_46712);

return statearr_46760;
})();
var statearr_46761_48022 = state_46719__$1;
(statearr_46761_48022[(2)] = null);

(statearr_46761_48022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (6))){
var inst_46651 = (state_46719[(29)]);
var inst_46650 = cljs.core.deref(cs);
var inst_46651__$1 = cljs.core.keys(inst_46650);
var inst_46652 = cljs.core.count(inst_46651__$1);
var inst_46653 = cljs.core.reset_BANG_(dctr,inst_46652);
var inst_46658 = cljs.core.seq(inst_46651__$1);
var inst_46659 = inst_46658;
var inst_46660 = null;
var inst_46661 = (0);
var inst_46662 = (0);
var state_46719__$1 = (function (){var statearr_46762 = state_46719;
(statearr_46762[(9)] = inst_46660);

(statearr_46762[(10)] = inst_46662);

(statearr_46762[(29)] = inst_46651__$1);

(statearr_46762[(20)] = inst_46661);

(statearr_46762[(30)] = inst_46653);

(statearr_46762[(21)] = inst_46659);

return statearr_46762;
})();
var statearr_46763_48023 = state_46719__$1;
(statearr_46763_48023[(2)] = null);

(statearr_46763_48023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (28))){
var inst_46678 = (state_46719[(25)]);
var inst_46659 = (state_46719[(21)]);
var inst_46678__$1 = cljs.core.seq(inst_46659);
var state_46719__$1 = (function (){var statearr_46764 = state_46719;
(statearr_46764[(25)] = inst_46678__$1);

return statearr_46764;
})();
if(inst_46678__$1){
var statearr_46765_48024 = state_46719__$1;
(statearr_46765_48024[(1)] = (33));

} else {
var statearr_46766_48025 = state_46719__$1;
(statearr_46766_48025[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (25))){
var inst_46662 = (state_46719[(10)]);
var inst_46661 = (state_46719[(20)]);
var inst_46664 = (inst_46662 < inst_46661);
var inst_46665 = inst_46664;
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46665)){
var statearr_46767_48026 = state_46719__$1;
(statearr_46767_48026[(1)] = (27));

} else {
var statearr_46768_48027 = state_46719__$1;
(statearr_46768_48027[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (34))){
var state_46719__$1 = state_46719;
var statearr_46769_48028 = state_46719__$1;
(statearr_46769_48028[(2)] = null);

(statearr_46769_48028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (17))){
var state_46719__$1 = state_46719;
var statearr_46770_48035 = state_46719__$1;
(statearr_46770_48035[(2)] = null);

(statearr_46770_48035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (3))){
var inst_46717 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46719__$1,inst_46717);
} else {
if((state_val_46720 === (12))){
var inst_46646 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46771_48036 = state_46719__$1;
(statearr_46771_48036[(2)] = inst_46646);

(statearr_46771_48036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (2))){
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46719__$1,(4),ch);
} else {
if((state_val_46720 === (23))){
var state_46719__$1 = state_46719;
var statearr_46772_48037 = state_46719__$1;
(statearr_46772_48037[(2)] = null);

(statearr_46772_48037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (35))){
var inst_46701 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46773_48038 = state_46719__$1;
(statearr_46773_48038[(2)] = inst_46701);

(statearr_46773_48038[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (19))){
var inst_46618 = (state_46719[(7)]);
var inst_46622 = cljs.core.chunk_first(inst_46618);
var inst_46623 = cljs.core.chunk_rest(inst_46618);
var inst_46624 = cljs.core.count(inst_46622);
var inst_46596 = inst_46623;
var inst_46597 = inst_46622;
var inst_46598 = inst_46624;
var inst_46599 = (0);
var state_46719__$1 = (function (){var statearr_46774 = state_46719;
(statearr_46774[(13)] = inst_46597);

(statearr_46774[(14)] = inst_46596);

(statearr_46774[(16)] = inst_46599);

(statearr_46774[(17)] = inst_46598);

return statearr_46774;
})();
var statearr_46775_48039 = state_46719__$1;
(statearr_46775_48039[(2)] = null);

(statearr_46775_48039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (11))){
var inst_46618 = (state_46719[(7)]);
var inst_46596 = (state_46719[(14)]);
var inst_46618__$1 = cljs.core.seq(inst_46596);
var state_46719__$1 = (function (){var statearr_46776 = state_46719;
(statearr_46776[(7)] = inst_46618__$1);

return statearr_46776;
})();
if(inst_46618__$1){
var statearr_46777_48040 = state_46719__$1;
(statearr_46777_48040[(1)] = (16));

} else {
var statearr_46778_48041 = state_46719__$1;
(statearr_46778_48041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (9))){
var inst_46648 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46779_48042 = state_46719__$1;
(statearr_46779_48042[(2)] = inst_46648);

(statearr_46779_48042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (5))){
var inst_46594 = cljs.core.deref(cs);
var inst_46595 = cljs.core.seq(inst_46594);
var inst_46596 = inst_46595;
var inst_46597 = null;
var inst_46598 = (0);
var inst_46599 = (0);
var state_46719__$1 = (function (){var statearr_46780 = state_46719;
(statearr_46780[(13)] = inst_46597);

(statearr_46780[(14)] = inst_46596);

(statearr_46780[(16)] = inst_46599);

(statearr_46780[(17)] = inst_46598);

return statearr_46780;
})();
var statearr_46781_48043 = state_46719__$1;
(statearr_46781_48043[(2)] = null);

(statearr_46781_48043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (14))){
var state_46719__$1 = state_46719;
var statearr_46782_48044 = state_46719__$1;
(statearr_46782_48044[(2)] = null);

(statearr_46782_48044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (45))){
var inst_46709 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46783_48045 = state_46719__$1;
(statearr_46783_48045[(2)] = inst_46709);

(statearr_46783_48045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (26))){
var inst_46651 = (state_46719[(29)]);
var inst_46705 = (state_46719[(2)]);
var inst_46706 = cljs.core.seq(inst_46651);
var state_46719__$1 = (function (){var statearr_46784 = state_46719;
(statearr_46784[(31)] = inst_46705);

return statearr_46784;
})();
if(inst_46706){
var statearr_46785_48046 = state_46719__$1;
(statearr_46785_48046[(1)] = (42));

} else {
var statearr_46786_48047 = state_46719__$1;
(statearr_46786_48047[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (16))){
var inst_46618 = (state_46719[(7)]);
var inst_46620 = cljs.core.chunked_seq_QMARK_(inst_46618);
var state_46719__$1 = state_46719;
if(inst_46620){
var statearr_46787_48048 = state_46719__$1;
(statearr_46787_48048[(1)] = (19));

} else {
var statearr_46788_48049 = state_46719__$1;
(statearr_46788_48049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (38))){
var inst_46698 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46789_48050 = state_46719__$1;
(statearr_46789_48050[(2)] = inst_46698);

(statearr_46789_48050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (30))){
var state_46719__$1 = state_46719;
var statearr_46790_48051 = state_46719__$1;
(statearr_46790_48051[(2)] = null);

(statearr_46790_48051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (10))){
var inst_46597 = (state_46719[(13)]);
var inst_46599 = (state_46719[(16)]);
var inst_46607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46597,inst_46599);
var inst_46608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46607,(0),null);
var inst_46609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46607,(1),null);
var state_46719__$1 = (function (){var statearr_46791 = state_46719;
(statearr_46791[(26)] = inst_46608);

return statearr_46791;
})();
if(cljs.core.truth_(inst_46609)){
var statearr_46792_48053 = state_46719__$1;
(statearr_46792_48053[(1)] = (13));

} else {
var statearr_46793_48054 = state_46719__$1;
(statearr_46793_48054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (18))){
var inst_46644 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46794_48055 = state_46719__$1;
(statearr_46794_48055[(2)] = inst_46644);

(statearr_46794_48055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (42))){
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46719__$1,(45),dchan);
} else {
if((state_val_46720 === (37))){
var inst_46687 = (state_46719[(23)]);
var inst_46678 = (state_46719[(25)]);
var inst_46587 = (state_46719[(12)]);
var inst_46687__$1 = cljs.core.first(inst_46678);
var inst_46688 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46687__$1,inst_46587,done);
var state_46719__$1 = (function (){var statearr_46795 = state_46719;
(statearr_46795[(23)] = inst_46687__$1);

return statearr_46795;
})();
if(cljs.core.truth_(inst_46688)){
var statearr_46796_48061 = state_46719__$1;
(statearr_46796_48061[(1)] = (39));

} else {
var statearr_46797_48062 = state_46719__$1;
(statearr_46797_48062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (8))){
var inst_46599 = (state_46719[(16)]);
var inst_46598 = (state_46719[(17)]);
var inst_46601 = (inst_46599 < inst_46598);
var inst_46602 = inst_46601;
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46602)){
var statearr_46798_48063 = state_46719__$1;
(statearr_46798_48063[(1)] = (10));

} else {
var statearr_46799_48064 = state_46719__$1;
(statearr_46799_48064[(1)] = (11));

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
});})(c__46124__auto___47965,cs,m,dchan,dctr,done))
;
return ((function (switch__46023__auto__,c__46124__auto___47965,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46024__auto__ = null;
var cljs$core$async$mult_$_state_machine__46024__auto____0 = (function (){
var statearr_46800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46800[(0)] = cljs$core$async$mult_$_state_machine__46024__auto__);

(statearr_46800[(1)] = (1));

return statearr_46800;
});
var cljs$core$async$mult_$_state_machine__46024__auto____1 = (function (state_46719){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46719);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46801){if((e46801 instanceof Object)){
var ex__46027__auto__ = e46801;
var statearr_46802_48065 = state_46719;
(statearr_46802_48065[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48066 = state_46719;
state_46719 = G__48066;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46024__auto__ = function(state_46719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46024__auto____1.call(this,state_46719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46024__auto____0;
cljs$core$async$mult_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46024__auto____1;
return cljs$core$async$mult_$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___47965,cs,m,dchan,dctr,done))
})();
var state__46126__auto__ = (function (){var statearr_46803 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46803[(6)] = c__46124__auto___47965);

return statearr_46803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___47965,cs,m,dchan,dctr,done))
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
var G__46805 = arguments.length;
switch (G__46805) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48074 = arguments.length;
var i__4731__auto___48075 = (0);
while(true){
if((i__4731__auto___48075 < len__4730__auto___48074)){
args__4736__auto__.push((arguments[i__4731__auto___48075]));

var G__48076 = (i__4731__auto___48075 + (1));
i__4731__auto___48075 = G__48076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46810){
var map__46811 = p__46810;
var map__46811__$1 = (((((!((map__46811 == null))))?(((((map__46811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46811):map__46811);
var opts = map__46811__$1;
var statearr_46813_48079 = state;
(statearr_46813_48079[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__46811,map__46811__$1,opts){
return (function (val){
var statearr_46814_48080 = state;
(statearr_46814_48080[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__46811,map__46811__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46815_48081 = state;
(statearr_46815_48081[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46806){
var G__46807 = cljs.core.first(seq46806);
var seq46806__$1 = cljs.core.next(seq46806);
var G__46808 = cljs.core.first(seq46806__$1);
var seq46806__$2 = cljs.core.next(seq46806__$1);
var G__46809 = cljs.core.first(seq46806__$2);
var seq46806__$3 = cljs.core.next(seq46806__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46807,G__46808,G__46809,seq46806__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46816 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46817){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46817 = meta46817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46818,meta46817__$1){
var self__ = this;
var _46818__$1 = this;
return (new cljs.core.async.t_cljs$core$async46816(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46817__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46818){
var self__ = this;
var _46818__$1 = this;
return self__.meta46817;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46817","meta46817",-813651663,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46816";

cljs.core.async.t_cljs$core$async46816.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46816");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46816.
 */
cljs.core.async.__GT_t_cljs$core$async46816 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46817){
return (new cljs.core.async.t_cljs$core$async46816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46817));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46816(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46124__auto___48091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46920){
var state_val_46921 = (state_46920[(1)]);
if((state_val_46921 === (7))){
var inst_46835 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46922_48095 = state_46920__$1;
(statearr_46922_48095[(2)] = inst_46835);

(statearr_46922_48095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (20))){
var inst_46847 = (state_46920[(7)]);
var state_46920__$1 = state_46920;
var statearr_46923_48096 = state_46920__$1;
(statearr_46923_48096[(2)] = inst_46847);

(statearr_46923_48096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (27))){
var state_46920__$1 = state_46920;
var statearr_46924_48100 = state_46920__$1;
(statearr_46924_48100[(2)] = null);

(statearr_46924_48100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (1))){
var inst_46822 = (state_46920[(8)]);
var inst_46822__$1 = calc_state();
var inst_46824 = (inst_46822__$1 == null);
var inst_46825 = cljs.core.not(inst_46824);
var state_46920__$1 = (function (){var statearr_46925 = state_46920;
(statearr_46925[(8)] = inst_46822__$1);

return statearr_46925;
})();
if(inst_46825){
var statearr_46926_48104 = state_46920__$1;
(statearr_46926_48104[(1)] = (2));

} else {
var statearr_46927_48105 = state_46920__$1;
(statearr_46927_48105[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (24))){
var inst_46880 = (state_46920[(9)]);
var inst_46894 = (state_46920[(10)]);
var inst_46871 = (state_46920[(11)]);
var inst_46894__$1 = (inst_46871.cljs$core$IFn$_invoke$arity$1 ? inst_46871.cljs$core$IFn$_invoke$arity$1(inst_46880) : inst_46871.call(null,inst_46880));
var state_46920__$1 = (function (){var statearr_46928 = state_46920;
(statearr_46928[(10)] = inst_46894__$1);

return statearr_46928;
})();
if(cljs.core.truth_(inst_46894__$1)){
var statearr_46929_48106 = state_46920__$1;
(statearr_46929_48106[(1)] = (29));

} else {
var statearr_46930_48107 = state_46920__$1;
(statearr_46930_48107[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (4))){
var inst_46838 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46838)){
var statearr_46931_48111 = state_46920__$1;
(statearr_46931_48111[(1)] = (8));

} else {
var statearr_46932_48112 = state_46920__$1;
(statearr_46932_48112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (15))){
var inst_46865 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46865)){
var statearr_46933_48114 = state_46920__$1;
(statearr_46933_48114[(1)] = (19));

} else {
var statearr_46934_48118 = state_46920__$1;
(statearr_46934_48118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (21))){
var inst_46870 = (state_46920[(12)]);
var inst_46870__$1 = (state_46920[(2)]);
var inst_46871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46920__$1 = (function (){var statearr_46935 = state_46920;
(statearr_46935[(12)] = inst_46870__$1);

(statearr_46935[(13)] = inst_46872);

(statearr_46935[(11)] = inst_46871);

return statearr_46935;
})();
return cljs.core.async.ioc_alts_BANG_(state_46920__$1,(22),inst_46873);
} else {
if((state_val_46921 === (31))){
var inst_46902 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46902)){
var statearr_46936_48119 = state_46920__$1;
(statearr_46936_48119[(1)] = (32));

} else {
var statearr_46937_48120 = state_46920__$1;
(statearr_46937_48120[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (32))){
var inst_46879 = (state_46920[(14)]);
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46920__$1,(35),out,inst_46879);
} else {
if((state_val_46921 === (33))){
var inst_46870 = (state_46920[(12)]);
var inst_46847 = inst_46870;
var state_46920__$1 = (function (){var statearr_46938 = state_46920;
(statearr_46938[(7)] = inst_46847);

return statearr_46938;
})();
var statearr_46939_48121 = state_46920__$1;
(statearr_46939_48121[(2)] = null);

(statearr_46939_48121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (13))){
var inst_46847 = (state_46920[(7)]);
var inst_46854 = inst_46847.cljs$lang$protocol_mask$partition0$;
var inst_46855 = (inst_46854 & (64));
var inst_46856 = inst_46847.cljs$core$ISeq$;
var inst_46857 = (cljs.core.PROTOCOL_SENTINEL === inst_46856);
var inst_46858 = ((inst_46855) || (inst_46857));
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46858)){
var statearr_46940_48124 = state_46920__$1;
(statearr_46940_48124[(1)] = (16));

} else {
var statearr_46941_48125 = state_46920__$1;
(statearr_46941_48125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (22))){
var inst_46880 = (state_46920[(9)]);
var inst_46879 = (state_46920[(14)]);
var inst_46878 = (state_46920[(2)]);
var inst_46879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46878,(0),null);
var inst_46880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46878,(1),null);
var inst_46881 = (inst_46879__$1 == null);
var inst_46882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46880__$1,change);
var inst_46883 = ((inst_46881) || (inst_46882));
var state_46920__$1 = (function (){var statearr_46942 = state_46920;
(statearr_46942[(9)] = inst_46880__$1);

(statearr_46942[(14)] = inst_46879__$1);

return statearr_46942;
})();
if(cljs.core.truth_(inst_46883)){
var statearr_46943_48128 = state_46920__$1;
(statearr_46943_48128[(1)] = (23));

} else {
var statearr_46944_48129 = state_46920__$1;
(statearr_46944_48129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (36))){
var inst_46870 = (state_46920[(12)]);
var inst_46847 = inst_46870;
var state_46920__$1 = (function (){var statearr_46945 = state_46920;
(statearr_46945[(7)] = inst_46847);

return statearr_46945;
})();
var statearr_46946_48130 = state_46920__$1;
(statearr_46946_48130[(2)] = null);

(statearr_46946_48130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (29))){
var inst_46894 = (state_46920[(10)]);
var state_46920__$1 = state_46920;
var statearr_46947_48133 = state_46920__$1;
(statearr_46947_48133[(2)] = inst_46894);

(statearr_46947_48133[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (6))){
var state_46920__$1 = state_46920;
var statearr_46948_48134 = state_46920__$1;
(statearr_46948_48134[(2)] = false);

(statearr_46948_48134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (28))){
var inst_46890 = (state_46920[(2)]);
var inst_46891 = calc_state();
var inst_46847 = inst_46891;
var state_46920__$1 = (function (){var statearr_46949 = state_46920;
(statearr_46949[(7)] = inst_46847);

(statearr_46949[(15)] = inst_46890);

return statearr_46949;
})();
var statearr_46950_48138 = state_46920__$1;
(statearr_46950_48138[(2)] = null);

(statearr_46950_48138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (25))){
var inst_46916 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46951_48139 = state_46920__$1;
(statearr_46951_48139[(2)] = inst_46916);

(statearr_46951_48139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (34))){
var inst_46914 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46952_48141 = state_46920__$1;
(statearr_46952_48141[(2)] = inst_46914);

(statearr_46952_48141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (17))){
var state_46920__$1 = state_46920;
var statearr_46953_48142 = state_46920__$1;
(statearr_46953_48142[(2)] = false);

(statearr_46953_48142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (3))){
var state_46920__$1 = state_46920;
var statearr_46954_48143 = state_46920__$1;
(statearr_46954_48143[(2)] = false);

(statearr_46954_48143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (12))){
var inst_46918 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46920__$1,inst_46918);
} else {
if((state_val_46921 === (2))){
var inst_46822 = (state_46920[(8)]);
var inst_46827 = inst_46822.cljs$lang$protocol_mask$partition0$;
var inst_46828 = (inst_46827 & (64));
var inst_46829 = inst_46822.cljs$core$ISeq$;
var inst_46830 = (cljs.core.PROTOCOL_SENTINEL === inst_46829);
var inst_46831 = ((inst_46828) || (inst_46830));
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46831)){
var statearr_46955_48146 = state_46920__$1;
(statearr_46955_48146[(1)] = (5));

} else {
var statearr_46956_48147 = state_46920__$1;
(statearr_46956_48147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (23))){
var inst_46879 = (state_46920[(14)]);
var inst_46885 = (inst_46879 == null);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46885)){
var statearr_46957_48148 = state_46920__$1;
(statearr_46957_48148[(1)] = (26));

} else {
var statearr_46958_48149 = state_46920__$1;
(statearr_46958_48149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (35))){
var inst_46905 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46905)){
var statearr_46959_48150 = state_46920__$1;
(statearr_46959_48150[(1)] = (36));

} else {
var statearr_46960_48151 = state_46920__$1;
(statearr_46960_48151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (19))){
var inst_46847 = (state_46920[(7)]);
var inst_46867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46847);
var state_46920__$1 = state_46920;
var statearr_46961_48152 = state_46920__$1;
(statearr_46961_48152[(2)] = inst_46867);

(statearr_46961_48152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (11))){
var inst_46847 = (state_46920[(7)]);
var inst_46851 = (inst_46847 == null);
var inst_46852 = cljs.core.not(inst_46851);
var state_46920__$1 = state_46920;
if(inst_46852){
var statearr_46962_48153 = state_46920__$1;
(statearr_46962_48153[(1)] = (13));

} else {
var statearr_46963_48154 = state_46920__$1;
(statearr_46963_48154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (9))){
var inst_46822 = (state_46920[(8)]);
var state_46920__$1 = state_46920;
var statearr_46964_48155 = state_46920__$1;
(statearr_46964_48155[(2)] = inst_46822);

(statearr_46964_48155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (5))){
var state_46920__$1 = state_46920;
var statearr_46965_48156 = state_46920__$1;
(statearr_46965_48156[(2)] = true);

(statearr_46965_48156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (14))){
var state_46920__$1 = state_46920;
var statearr_46966_48157 = state_46920__$1;
(statearr_46966_48157[(2)] = false);

(statearr_46966_48157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (26))){
var inst_46880 = (state_46920[(9)]);
var inst_46887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46880);
var state_46920__$1 = state_46920;
var statearr_46967_48162 = state_46920__$1;
(statearr_46967_48162[(2)] = inst_46887);

(statearr_46967_48162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (16))){
var state_46920__$1 = state_46920;
var statearr_46968_48163 = state_46920__$1;
(statearr_46968_48163[(2)] = true);

(statearr_46968_48163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (38))){
var inst_46910 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46969_48164 = state_46920__$1;
(statearr_46969_48164[(2)] = inst_46910);

(statearr_46969_48164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (30))){
var inst_46880 = (state_46920[(9)]);
var inst_46872 = (state_46920[(13)]);
var inst_46871 = (state_46920[(11)]);
var inst_46897 = cljs.core.empty_QMARK_(inst_46871);
var inst_46898 = (inst_46872.cljs$core$IFn$_invoke$arity$1 ? inst_46872.cljs$core$IFn$_invoke$arity$1(inst_46880) : inst_46872.call(null,inst_46880));
var inst_46899 = cljs.core.not(inst_46898);
var inst_46900 = ((inst_46897) && (inst_46899));
var state_46920__$1 = state_46920;
var statearr_46970_48165 = state_46920__$1;
(statearr_46970_48165[(2)] = inst_46900);

(statearr_46970_48165[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (10))){
var inst_46822 = (state_46920[(8)]);
var inst_46843 = (state_46920[(2)]);
var inst_46844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46847 = inst_46822;
var state_46920__$1 = (function (){var statearr_46971 = state_46920;
(statearr_46971[(16)] = inst_46844);

(statearr_46971[(17)] = inst_46846);

(statearr_46971[(7)] = inst_46847);

(statearr_46971[(18)] = inst_46845);

return statearr_46971;
})();
var statearr_46972_48170 = state_46920__$1;
(statearr_46972_48170[(2)] = null);

(statearr_46972_48170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (18))){
var inst_46862 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46973_48171 = state_46920__$1;
(statearr_46973_48171[(2)] = inst_46862);

(statearr_46973_48171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (37))){
var state_46920__$1 = state_46920;
var statearr_46974_48173 = state_46920__$1;
(statearr_46974_48173[(2)] = null);

(statearr_46974_48173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (8))){
var inst_46822 = (state_46920[(8)]);
var inst_46840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46822);
var state_46920__$1 = state_46920;
var statearr_46975_48174 = state_46920__$1;
(statearr_46975_48174[(2)] = inst_46840);

(statearr_46975_48174[(1)] = (10));


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
});})(c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46023__auto__,c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46024__auto__ = null;
var cljs$core$async$mix_$_state_machine__46024__auto____0 = (function (){
var statearr_46976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46976[(0)] = cljs$core$async$mix_$_state_machine__46024__auto__);

(statearr_46976[(1)] = (1));

return statearr_46976;
});
var cljs$core$async$mix_$_state_machine__46024__auto____1 = (function (state_46920){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_46920);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e46977){if((e46977 instanceof Object)){
var ex__46027__auto__ = e46977;
var statearr_46978_48176 = state_46920;
(statearr_46978_48176[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48177 = state_46920;
state_46920 = G__48177;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46024__auto__ = function(state_46920){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46024__auto____1.call(this,state_46920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46024__auto____0;
cljs$core$async$mix_$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46024__auto____1;
return cljs$core$async$mix_$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46126__auto__ = (function (){var statearr_46979 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_46979[(6)] = c__46124__auto___48091);

return statearr_46979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46981 = arguments.length;
switch (G__46981) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__46984 = arguments.length;
switch (G__46984) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__46982_SHARP_){
if(cljs.core.truth_((p1__46982_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46982_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46982_SHARP_.call(null,topic)))){
return p1__46982_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46982_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46986 = meta46986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46987,meta46986__$1){
var self__ = this;
var _46987__$1 = this;
return (new cljs.core.async.t_cljs$core$async46985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46987){
var self__ = this;
var _46987__$1 = this;
return self__.meta46986;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46986","meta46986",-770965203,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46985";

cljs.core.async.t_cljs$core$async46985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46985");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46985.
 */
cljs.core.async.__GT_t_cljs$core$async46985 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46986){
return (new cljs.core.async.t_cljs$core$async46985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46124__auto___48193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48193,mults,ensure_mult,p){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48193,mults,ensure_mult,p){
return (function (state_47059){
var state_val_47060 = (state_47059[(1)]);
if((state_val_47060 === (7))){
var inst_47055 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47061_48195 = state_47059__$1;
(statearr_47061_48195[(2)] = inst_47055);

(statearr_47061_48195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (20))){
var state_47059__$1 = state_47059;
var statearr_47062_48196 = state_47059__$1;
(statearr_47062_48196[(2)] = null);

(statearr_47062_48196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (1))){
var state_47059__$1 = state_47059;
var statearr_47063_48197 = state_47059__$1;
(statearr_47063_48197[(2)] = null);

(statearr_47063_48197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (24))){
var inst_47038 = (state_47059[(7)]);
var inst_47047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47038);
var state_47059__$1 = state_47059;
var statearr_47064_48199 = state_47059__$1;
(statearr_47064_48199[(2)] = inst_47047);

(statearr_47064_48199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (4))){
var inst_46990 = (state_47059[(8)]);
var inst_46990__$1 = (state_47059[(2)]);
var inst_46991 = (inst_46990__$1 == null);
var state_47059__$1 = (function (){var statearr_47065 = state_47059;
(statearr_47065[(8)] = inst_46990__$1);

return statearr_47065;
})();
if(cljs.core.truth_(inst_46991)){
var statearr_47066_48200 = state_47059__$1;
(statearr_47066_48200[(1)] = (5));

} else {
var statearr_47067_48202 = state_47059__$1;
(statearr_47067_48202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (15))){
var inst_47032 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47068_48203 = state_47059__$1;
(statearr_47068_48203[(2)] = inst_47032);

(statearr_47068_48203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (21))){
var inst_47052 = (state_47059[(2)]);
var state_47059__$1 = (function (){var statearr_47069 = state_47059;
(statearr_47069[(9)] = inst_47052);

return statearr_47069;
})();
var statearr_47070_48208 = state_47059__$1;
(statearr_47070_48208[(2)] = null);

(statearr_47070_48208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (13))){
var inst_47014 = (state_47059[(10)]);
var inst_47016 = cljs.core.chunked_seq_QMARK_(inst_47014);
var state_47059__$1 = state_47059;
if(inst_47016){
var statearr_47071_48210 = state_47059__$1;
(statearr_47071_48210[(1)] = (16));

} else {
var statearr_47072_48211 = state_47059__$1;
(statearr_47072_48211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (22))){
var inst_47044 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
if(cljs.core.truth_(inst_47044)){
var statearr_47073_48212 = state_47059__$1;
(statearr_47073_48212[(1)] = (23));

} else {
var statearr_47074_48213 = state_47059__$1;
(statearr_47074_48213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (6))){
var inst_47038 = (state_47059[(7)]);
var inst_47040 = (state_47059[(11)]);
var inst_46990 = (state_47059[(8)]);
var inst_47038__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46990) : topic_fn.call(null,inst_46990));
var inst_47039 = cljs.core.deref(mults);
var inst_47040__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47039,inst_47038__$1);
var state_47059__$1 = (function (){var statearr_47075 = state_47059;
(statearr_47075[(7)] = inst_47038__$1);

(statearr_47075[(11)] = inst_47040__$1);

return statearr_47075;
})();
if(cljs.core.truth_(inst_47040__$1)){
var statearr_47076_48214 = state_47059__$1;
(statearr_47076_48214[(1)] = (19));

} else {
var statearr_47077_48215 = state_47059__$1;
(statearr_47077_48215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (25))){
var inst_47049 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47078_48217 = state_47059__$1;
(statearr_47078_48217[(2)] = inst_47049);

(statearr_47078_48217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (17))){
var inst_47014 = (state_47059[(10)]);
var inst_47023 = cljs.core.first(inst_47014);
var inst_47024 = cljs.core.async.muxch_STAR_(inst_47023);
var inst_47025 = cljs.core.async.close_BANG_(inst_47024);
var inst_47026 = cljs.core.next(inst_47014);
var inst_47000 = inst_47026;
var inst_47001 = null;
var inst_47002 = (0);
var inst_47003 = (0);
var state_47059__$1 = (function (){var statearr_47079 = state_47059;
(statearr_47079[(12)] = inst_47025);

(statearr_47079[(13)] = inst_47000);

(statearr_47079[(14)] = inst_47003);

(statearr_47079[(15)] = inst_47002);

(statearr_47079[(16)] = inst_47001);

return statearr_47079;
})();
var statearr_47080_48222 = state_47059__$1;
(statearr_47080_48222[(2)] = null);

(statearr_47080_48222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (3))){
var inst_47057 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47059__$1,inst_47057);
} else {
if((state_val_47060 === (12))){
var inst_47034 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47081_48223 = state_47059__$1;
(statearr_47081_48223[(2)] = inst_47034);

(statearr_47081_48223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (2))){
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47059__$1,(4),ch);
} else {
if((state_val_47060 === (23))){
var state_47059__$1 = state_47059;
var statearr_47082_48224 = state_47059__$1;
(statearr_47082_48224[(2)] = null);

(statearr_47082_48224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (19))){
var inst_47040 = (state_47059[(11)]);
var inst_46990 = (state_47059[(8)]);
var inst_47042 = cljs.core.async.muxch_STAR_(inst_47040);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47059__$1,(22),inst_47042,inst_46990);
} else {
if((state_val_47060 === (11))){
var inst_47000 = (state_47059[(13)]);
var inst_47014 = (state_47059[(10)]);
var inst_47014__$1 = cljs.core.seq(inst_47000);
var state_47059__$1 = (function (){var statearr_47083 = state_47059;
(statearr_47083[(10)] = inst_47014__$1);

return statearr_47083;
})();
if(inst_47014__$1){
var statearr_47084_48225 = state_47059__$1;
(statearr_47084_48225[(1)] = (13));

} else {
var statearr_47085_48226 = state_47059__$1;
(statearr_47085_48226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (9))){
var inst_47036 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47086_48227 = state_47059__$1;
(statearr_47086_48227[(2)] = inst_47036);

(statearr_47086_48227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (5))){
var inst_46997 = cljs.core.deref(mults);
var inst_46998 = cljs.core.vals(inst_46997);
var inst_46999 = cljs.core.seq(inst_46998);
var inst_47000 = inst_46999;
var inst_47001 = null;
var inst_47002 = (0);
var inst_47003 = (0);
var state_47059__$1 = (function (){var statearr_47087 = state_47059;
(statearr_47087[(13)] = inst_47000);

(statearr_47087[(14)] = inst_47003);

(statearr_47087[(15)] = inst_47002);

(statearr_47087[(16)] = inst_47001);

return statearr_47087;
})();
var statearr_47088_48228 = state_47059__$1;
(statearr_47088_48228[(2)] = null);

(statearr_47088_48228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (14))){
var state_47059__$1 = state_47059;
var statearr_47092_48229 = state_47059__$1;
(statearr_47092_48229[(2)] = null);

(statearr_47092_48229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (16))){
var inst_47014 = (state_47059[(10)]);
var inst_47018 = cljs.core.chunk_first(inst_47014);
var inst_47019 = cljs.core.chunk_rest(inst_47014);
var inst_47020 = cljs.core.count(inst_47018);
var inst_47000 = inst_47019;
var inst_47001 = inst_47018;
var inst_47002 = inst_47020;
var inst_47003 = (0);
var state_47059__$1 = (function (){var statearr_47093 = state_47059;
(statearr_47093[(13)] = inst_47000);

(statearr_47093[(14)] = inst_47003);

(statearr_47093[(15)] = inst_47002);

(statearr_47093[(16)] = inst_47001);

return statearr_47093;
})();
var statearr_47094_48231 = state_47059__$1;
(statearr_47094_48231[(2)] = null);

(statearr_47094_48231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (10))){
var inst_47000 = (state_47059[(13)]);
var inst_47003 = (state_47059[(14)]);
var inst_47002 = (state_47059[(15)]);
var inst_47001 = (state_47059[(16)]);
var inst_47008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47001,inst_47003);
var inst_47009 = cljs.core.async.muxch_STAR_(inst_47008);
var inst_47010 = cljs.core.async.close_BANG_(inst_47009);
var inst_47011 = (inst_47003 + (1));
var tmp47089 = inst_47000;
var tmp47090 = inst_47002;
var tmp47091 = inst_47001;
var inst_47000__$1 = tmp47089;
var inst_47001__$1 = tmp47091;
var inst_47002__$1 = tmp47090;
var inst_47003__$1 = inst_47011;
var state_47059__$1 = (function (){var statearr_47095 = state_47059;
(statearr_47095[(13)] = inst_47000__$1);

(statearr_47095[(14)] = inst_47003__$1);

(statearr_47095[(15)] = inst_47002__$1);

(statearr_47095[(16)] = inst_47001__$1);

(statearr_47095[(17)] = inst_47010);

return statearr_47095;
})();
var statearr_47096_48232 = state_47059__$1;
(statearr_47096_48232[(2)] = null);

(statearr_47096_48232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (18))){
var inst_47029 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47097_48233 = state_47059__$1;
(statearr_47097_48233[(2)] = inst_47029);

(statearr_47097_48233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (8))){
var inst_47003 = (state_47059[(14)]);
var inst_47002 = (state_47059[(15)]);
var inst_47005 = (inst_47003 < inst_47002);
var inst_47006 = inst_47005;
var state_47059__$1 = state_47059;
if(cljs.core.truth_(inst_47006)){
var statearr_47098_48237 = state_47059__$1;
(statearr_47098_48237[(1)] = (10));

} else {
var statearr_47099_48240 = state_47059__$1;
(statearr_47099_48240[(1)] = (11));

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
});})(c__46124__auto___48193,mults,ensure_mult,p))
;
return ((function (switch__46023__auto__,c__46124__auto___48193,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47100[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47100[(1)] = (1));

return statearr_47100;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47059){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47059);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47101){if((e47101 instanceof Object)){
var ex__46027__auto__ = e47101;
var statearr_47102_48243 = state_47059;
(statearr_47102_48243[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48244 = state_47059;
state_47059 = G__48244;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48193,mults,ensure_mult,p))
})();
var state__46126__auto__ = (function (){var statearr_47103 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47103[(6)] = c__46124__auto___48193);

return statearr_47103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48193,mults,ensure_mult,p))
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
var G__47105 = arguments.length;
switch (G__47105) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47107 = arguments.length;
switch (G__47107) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__47109 = arguments.length;
switch (G__47109) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46124__auto___48250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47148){
var state_val_47149 = (state_47148[(1)]);
if((state_val_47149 === (7))){
var state_47148__$1 = state_47148;
var statearr_47150_48251 = state_47148__$1;
(statearr_47150_48251[(2)] = null);

(statearr_47150_48251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (1))){
var state_47148__$1 = state_47148;
var statearr_47151_48252 = state_47148__$1;
(statearr_47151_48252[(2)] = null);

(statearr_47151_48252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (4))){
var inst_47112 = (state_47148[(7)]);
var inst_47114 = (inst_47112 < cnt);
var state_47148__$1 = state_47148;
if(cljs.core.truth_(inst_47114)){
var statearr_47152_48253 = state_47148__$1;
(statearr_47152_48253[(1)] = (6));

} else {
var statearr_47153_48254 = state_47148__$1;
(statearr_47153_48254[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (15))){
var inst_47144 = (state_47148[(2)]);
var state_47148__$1 = state_47148;
var statearr_47154_48255 = state_47148__$1;
(statearr_47154_48255[(2)] = inst_47144);

(statearr_47154_48255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (13))){
var inst_47137 = cljs.core.async.close_BANG_(out);
var state_47148__$1 = state_47148;
var statearr_47155_48256 = state_47148__$1;
(statearr_47155_48256[(2)] = inst_47137);

(statearr_47155_48256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (6))){
var state_47148__$1 = state_47148;
var statearr_47156_48257 = state_47148__$1;
(statearr_47156_48257[(2)] = null);

(statearr_47156_48257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (3))){
var inst_47146 = (state_47148[(2)]);
var state_47148__$1 = state_47148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47148__$1,inst_47146);
} else {
if((state_val_47149 === (12))){
var inst_47134 = (state_47148[(8)]);
var inst_47134__$1 = (state_47148[(2)]);
var inst_47135 = cljs.core.some(cljs.core.nil_QMARK_,inst_47134__$1);
var state_47148__$1 = (function (){var statearr_47157 = state_47148;
(statearr_47157[(8)] = inst_47134__$1);

return statearr_47157;
})();
if(cljs.core.truth_(inst_47135)){
var statearr_47158_48258 = state_47148__$1;
(statearr_47158_48258[(1)] = (13));

} else {
var statearr_47159_48259 = state_47148__$1;
(statearr_47159_48259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (2))){
var inst_47111 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47112 = (0);
var state_47148__$1 = (function (){var statearr_47160 = state_47148;
(statearr_47160[(7)] = inst_47112);

(statearr_47160[(9)] = inst_47111);

return statearr_47160;
})();
var statearr_47161_48261 = state_47148__$1;
(statearr_47161_48261[(2)] = null);

(statearr_47161_48261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (11))){
var inst_47112 = (state_47148[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47148,(10),Object,null,(9));
var inst_47121 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47112) : chs__$1.call(null,inst_47112));
var inst_47122 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47112) : done.call(null,inst_47112));
var inst_47123 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47121,inst_47122);
var state_47148__$1 = state_47148;
var statearr_47162_48265 = state_47148__$1;
(statearr_47162_48265[(2)] = inst_47123);


cljs.core.async.impl.ioc_helpers.process_exception(state_47148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (9))){
var inst_47112 = (state_47148[(7)]);
var inst_47125 = (state_47148[(2)]);
var inst_47126 = (inst_47112 + (1));
var inst_47112__$1 = inst_47126;
var state_47148__$1 = (function (){var statearr_47163 = state_47148;
(statearr_47163[(7)] = inst_47112__$1);

(statearr_47163[(10)] = inst_47125);

return statearr_47163;
})();
var statearr_47164_48270 = state_47148__$1;
(statearr_47164_48270[(2)] = null);

(statearr_47164_48270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (5))){
var inst_47132 = (state_47148[(2)]);
var state_47148__$1 = (function (){var statearr_47165 = state_47148;
(statearr_47165[(11)] = inst_47132);

return statearr_47165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47148__$1,(12),dchan);
} else {
if((state_val_47149 === (14))){
var inst_47134 = (state_47148[(8)]);
var inst_47139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47134);
var state_47148__$1 = state_47148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47148__$1,(16),out,inst_47139);
} else {
if((state_val_47149 === (16))){
var inst_47141 = (state_47148[(2)]);
var state_47148__$1 = (function (){var statearr_47166 = state_47148;
(statearr_47166[(12)] = inst_47141);

return statearr_47166;
})();
var statearr_47167_48273 = state_47148__$1;
(statearr_47167_48273[(2)] = null);

(statearr_47167_48273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (10))){
var inst_47116 = (state_47148[(2)]);
var inst_47117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47148__$1 = (function (){var statearr_47168 = state_47148;
(statearr_47168[(13)] = inst_47116);

return statearr_47168;
})();
var statearr_47169_48274 = state_47148__$1;
(statearr_47169_48274[(2)] = inst_47117);


cljs.core.async.impl.ioc_helpers.process_exception(state_47148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47149 === (8))){
var inst_47130 = (state_47148[(2)]);
var state_47148__$1 = state_47148;
var statearr_47170_48275 = state_47148__$1;
(statearr_47170_48275[(2)] = inst_47130);

(statearr_47170_48275[(1)] = (5));


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
});})(c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46023__auto__,c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47171[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47171[(1)] = (1));

return statearr_47171;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47148){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47148);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47172){if((e47172 instanceof Object)){
var ex__46027__auto__ = e47172;
var statearr_47173_48276 = state_47148;
(statearr_47173_48276[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48277 = state_47148;
state_47148 = G__48277;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46126__auto__ = (function (){var statearr_47174 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47174[(6)] = c__46124__auto___48250);

return statearr_47174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48250,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47177 = arguments.length;
switch (G__47177) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48281,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48281,out){
return (function (state_47209){
var state_val_47210 = (state_47209[(1)]);
if((state_val_47210 === (7))){
var inst_47188 = (state_47209[(7)]);
var inst_47189 = (state_47209[(8)]);
var inst_47188__$1 = (state_47209[(2)]);
var inst_47189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47188__$1,(0),null);
var inst_47190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47188__$1,(1),null);
var inst_47191 = (inst_47189__$1 == null);
var state_47209__$1 = (function (){var statearr_47211 = state_47209;
(statearr_47211[(7)] = inst_47188__$1);

(statearr_47211[(9)] = inst_47190);

(statearr_47211[(8)] = inst_47189__$1);

return statearr_47211;
})();
if(cljs.core.truth_(inst_47191)){
var statearr_47212_48284 = state_47209__$1;
(statearr_47212_48284[(1)] = (8));

} else {
var statearr_47213_48285 = state_47209__$1;
(statearr_47213_48285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (1))){
var inst_47178 = cljs.core.vec(chs);
var inst_47179 = inst_47178;
var state_47209__$1 = (function (){var statearr_47214 = state_47209;
(statearr_47214[(10)] = inst_47179);

return statearr_47214;
})();
var statearr_47215_48286 = state_47209__$1;
(statearr_47215_48286[(2)] = null);

(statearr_47215_48286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (4))){
var inst_47179 = (state_47209[(10)]);
var state_47209__$1 = state_47209;
return cljs.core.async.ioc_alts_BANG_(state_47209__$1,(7),inst_47179);
} else {
if((state_val_47210 === (6))){
var inst_47205 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47216_48287 = state_47209__$1;
(statearr_47216_48287[(2)] = inst_47205);

(statearr_47216_48287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (3))){
var inst_47207 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47209__$1,inst_47207);
} else {
if((state_val_47210 === (2))){
var inst_47179 = (state_47209[(10)]);
var inst_47181 = cljs.core.count(inst_47179);
var inst_47182 = (inst_47181 > (0));
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47182)){
var statearr_47218_48288 = state_47209__$1;
(statearr_47218_48288[(1)] = (4));

} else {
var statearr_47219_48289 = state_47209__$1;
(statearr_47219_48289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (11))){
var inst_47179 = (state_47209[(10)]);
var inst_47198 = (state_47209[(2)]);
var tmp47217 = inst_47179;
var inst_47179__$1 = tmp47217;
var state_47209__$1 = (function (){var statearr_47220 = state_47209;
(statearr_47220[(10)] = inst_47179__$1);

(statearr_47220[(11)] = inst_47198);

return statearr_47220;
})();
var statearr_47221_48291 = state_47209__$1;
(statearr_47221_48291[(2)] = null);

(statearr_47221_48291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (9))){
var inst_47189 = (state_47209[(8)]);
var state_47209__$1 = state_47209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47209__$1,(11),out,inst_47189);
} else {
if((state_val_47210 === (5))){
var inst_47203 = cljs.core.async.close_BANG_(out);
var state_47209__$1 = state_47209;
var statearr_47222_48292 = state_47209__$1;
(statearr_47222_48292[(2)] = inst_47203);

(statearr_47222_48292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (10))){
var inst_47201 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47223_48293 = state_47209__$1;
(statearr_47223_48293[(2)] = inst_47201);

(statearr_47223_48293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (8))){
var inst_47188 = (state_47209[(7)]);
var inst_47179 = (state_47209[(10)]);
var inst_47190 = (state_47209[(9)]);
var inst_47189 = (state_47209[(8)]);
var inst_47193 = (function (){var cs = inst_47179;
var vec__47184 = inst_47188;
var v = inst_47189;
var c = inst_47190;
return ((function (cs,vec__47184,v,c,inst_47188,inst_47179,inst_47190,inst_47189,state_val_47210,c__46124__auto___48281,out){
return (function (p1__47175_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47175_SHARP_);
});
;})(cs,vec__47184,v,c,inst_47188,inst_47179,inst_47190,inst_47189,state_val_47210,c__46124__auto___48281,out))
})();
var inst_47194 = cljs.core.filterv(inst_47193,inst_47179);
var inst_47179__$1 = inst_47194;
var state_47209__$1 = (function (){var statearr_47224 = state_47209;
(statearr_47224[(10)] = inst_47179__$1);

return statearr_47224;
})();
var statearr_47225_48295 = state_47209__$1;
(statearr_47225_48295[(2)] = null);

(statearr_47225_48295[(1)] = (2));


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
});})(c__46124__auto___48281,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48281,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47226[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47226[(1)] = (1));

return statearr_47226;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47209){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47209);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47227){if((e47227 instanceof Object)){
var ex__46027__auto__ = e47227;
var statearr_47228_48297 = state_47209;
(statearr_47228_48297[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48298 = state_47209;
state_47209 = G__48298;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48281,out))
})();
var state__46126__auto__ = (function (){var statearr_47229 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47229[(6)] = c__46124__auto___48281);

return statearr_47229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48281,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47231 = arguments.length;
switch (G__47231) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48310,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48310,out){
return (function (state_47255){
var state_val_47256 = (state_47255[(1)]);
if((state_val_47256 === (7))){
var inst_47237 = (state_47255[(7)]);
var inst_47237__$1 = (state_47255[(2)]);
var inst_47238 = (inst_47237__$1 == null);
var inst_47239 = cljs.core.not(inst_47238);
var state_47255__$1 = (function (){var statearr_47257 = state_47255;
(statearr_47257[(7)] = inst_47237__$1);

return statearr_47257;
})();
if(inst_47239){
var statearr_47258_48311 = state_47255__$1;
(statearr_47258_48311[(1)] = (8));

} else {
var statearr_47259_48312 = state_47255__$1;
(statearr_47259_48312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (1))){
var inst_47232 = (0);
var state_47255__$1 = (function (){var statearr_47260 = state_47255;
(statearr_47260[(8)] = inst_47232);

return statearr_47260;
})();
var statearr_47261_48316 = state_47255__$1;
(statearr_47261_48316[(2)] = null);

(statearr_47261_48316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (4))){
var state_47255__$1 = state_47255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47255__$1,(7),ch);
} else {
if((state_val_47256 === (6))){
var inst_47250 = (state_47255[(2)]);
var state_47255__$1 = state_47255;
var statearr_47262_48317 = state_47255__$1;
(statearr_47262_48317[(2)] = inst_47250);

(statearr_47262_48317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (3))){
var inst_47252 = (state_47255[(2)]);
var inst_47253 = cljs.core.async.close_BANG_(out);
var state_47255__$1 = (function (){var statearr_47263 = state_47255;
(statearr_47263[(9)] = inst_47252);

return statearr_47263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47255__$1,inst_47253);
} else {
if((state_val_47256 === (2))){
var inst_47232 = (state_47255[(8)]);
var inst_47234 = (inst_47232 < n);
var state_47255__$1 = state_47255;
if(cljs.core.truth_(inst_47234)){
var statearr_47264_48321 = state_47255__$1;
(statearr_47264_48321[(1)] = (4));

} else {
var statearr_47265_48322 = state_47255__$1;
(statearr_47265_48322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (11))){
var inst_47232 = (state_47255[(8)]);
var inst_47242 = (state_47255[(2)]);
var inst_47243 = (inst_47232 + (1));
var inst_47232__$1 = inst_47243;
var state_47255__$1 = (function (){var statearr_47266 = state_47255;
(statearr_47266[(10)] = inst_47242);

(statearr_47266[(8)] = inst_47232__$1);

return statearr_47266;
})();
var statearr_47267_48323 = state_47255__$1;
(statearr_47267_48323[(2)] = null);

(statearr_47267_48323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (9))){
var state_47255__$1 = state_47255;
var statearr_47268_48327 = state_47255__$1;
(statearr_47268_48327[(2)] = null);

(statearr_47268_48327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (5))){
var state_47255__$1 = state_47255;
var statearr_47269_48328 = state_47255__$1;
(statearr_47269_48328[(2)] = null);

(statearr_47269_48328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (10))){
var inst_47247 = (state_47255[(2)]);
var state_47255__$1 = state_47255;
var statearr_47270_48329 = state_47255__$1;
(statearr_47270_48329[(2)] = inst_47247);

(statearr_47270_48329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47256 === (8))){
var inst_47237 = (state_47255[(7)]);
var state_47255__$1 = state_47255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47255__$1,(11),out,inst_47237);
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
});})(c__46124__auto___48310,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48310,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47271[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47271[(1)] = (1));

return statearr_47271;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47255){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47255);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47272){if((e47272 instanceof Object)){
var ex__46027__auto__ = e47272;
var statearr_47273_48331 = state_47255;
(statearr_47273_48331[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48332 = state_47255;
state_47255 = G__48332;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48310,out))
})();
var state__46126__auto__ = (function (){var statearr_47274 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47274[(6)] = c__46124__auto___48310);

return statearr_47274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48310,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47276 = (function (f,ch,meta47277){
this.f = f;
this.ch = ch;
this.meta47277 = meta47277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47278,meta47277__$1){
var self__ = this;
var _47278__$1 = this;
return (new cljs.core.async.t_cljs$core$async47276(self__.f,self__.ch,meta47277__$1));
});

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47278){
var self__ = this;
var _47278__$1 = this;
return self__.meta47277;
});

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47279 = (function (f,ch,meta47277,_,fn1,meta47280){
this.f = f;
this.ch = ch;
this.meta47277 = meta47277;
this._ = _;
this.fn1 = fn1;
this.meta47280 = meta47280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47281,meta47280__$1){
var self__ = this;
var _47281__$1 = this;
return (new cljs.core.async.t_cljs$core$async47279(self__.f,self__.ch,self__.meta47277,self__._,self__.fn1,meta47280__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47281){
var self__ = this;
var _47281__$1 = this;
return self__.meta47280;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47275_SHARP_){
var G__47282 = (((p1__47275_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47275_SHARP_) : self__.f.call(null,p1__47275_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47282) : f1.call(null,G__47282));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47277","meta47277",1449812584,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47276","cljs.core.async/t_cljs$core$async47276",-1915411992,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47280","meta47280",468727439,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47279";

cljs.core.async.t_cljs$core$async47279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47279");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47279.
 */
cljs.core.async.__GT_t_cljs$core$async47279 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47279(f__$1,ch__$1,meta47277__$1,___$2,fn1__$1,meta47280){
return (new cljs.core.async.t_cljs$core$async47279(f__$1,ch__$1,meta47277__$1,___$2,fn1__$1,meta47280));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47279(self__.f,self__.ch,self__.meta47277,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47283 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47283) : self__.f.call(null,G__47283));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47277","meta47277",1449812584,null)], null);
});

cljs.core.async.t_cljs$core$async47276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47276";

cljs.core.async.t_cljs$core$async47276.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47276");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47276.
 */
cljs.core.async.__GT_t_cljs$core$async47276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47276(f__$1,ch__$1,meta47277){
return (new cljs.core.async.t_cljs$core$async47276(f__$1,ch__$1,meta47277));
});

}

return (new cljs.core.async.t_cljs$core$async47276(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47284 = (function (f,ch,meta47285){
this.f = f;
this.ch = ch;
this.meta47285 = meta47285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47286,meta47285__$1){
var self__ = this;
var _47286__$1 = this;
return (new cljs.core.async.t_cljs$core$async47284(self__.f,self__.ch,meta47285__$1));
});

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47286){
var self__ = this;
var _47286__$1 = this;
return self__.meta47285;
});

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47285","meta47285",1516690840,null)], null);
});

cljs.core.async.t_cljs$core$async47284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47284";

cljs.core.async.t_cljs$core$async47284.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47284");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47284.
 */
cljs.core.async.__GT_t_cljs$core$async47284 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47284(f__$1,ch__$1,meta47285){
return (new cljs.core.async.t_cljs$core$async47284(f__$1,ch__$1,meta47285));
});

}

return (new cljs.core.async.t_cljs$core$async47284(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47287 = (function (p,ch,meta47288){
this.p = p;
this.ch = ch;
this.meta47288 = meta47288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47289,meta47288__$1){
var self__ = this;
var _47289__$1 = this;
return (new cljs.core.async.t_cljs$core$async47287(self__.p,self__.ch,meta47288__$1));
});

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47289){
var self__ = this;
var _47289__$1 = this;
return self__.meta47288;
});

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47288","meta47288",1477989301,null)], null);
});

cljs.core.async.t_cljs$core$async47287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47287";

cljs.core.async.t_cljs$core$async47287.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47287");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47287.
 */
cljs.core.async.__GT_t_cljs$core$async47287 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47287(p__$1,ch__$1,meta47288){
return (new cljs.core.async.t_cljs$core$async47287(p__$1,ch__$1,meta47288));
});

}

return (new cljs.core.async.t_cljs$core$async47287(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47291 = arguments.length;
switch (G__47291) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48361,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48361,out){
return (function (state_47312){
var state_val_47313 = (state_47312[(1)]);
if((state_val_47313 === (7))){
var inst_47308 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47314_48362 = state_47312__$1;
(statearr_47314_48362[(2)] = inst_47308);

(statearr_47314_48362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (1))){
var state_47312__$1 = state_47312;
var statearr_47315_48363 = state_47312__$1;
(statearr_47315_48363[(2)] = null);

(statearr_47315_48363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (4))){
var inst_47294 = (state_47312[(7)]);
var inst_47294__$1 = (state_47312[(2)]);
var inst_47295 = (inst_47294__$1 == null);
var state_47312__$1 = (function (){var statearr_47316 = state_47312;
(statearr_47316[(7)] = inst_47294__$1);

return statearr_47316;
})();
if(cljs.core.truth_(inst_47295)){
var statearr_47317_48364 = state_47312__$1;
(statearr_47317_48364[(1)] = (5));

} else {
var statearr_47318_48365 = state_47312__$1;
(statearr_47318_48365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (6))){
var inst_47294 = (state_47312[(7)]);
var inst_47299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47294) : p.call(null,inst_47294));
var state_47312__$1 = state_47312;
if(cljs.core.truth_(inst_47299)){
var statearr_47319_48372 = state_47312__$1;
(statearr_47319_48372[(1)] = (8));

} else {
var statearr_47320_48373 = state_47312__$1;
(statearr_47320_48373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (3))){
var inst_47310 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47312__$1,inst_47310);
} else {
if((state_val_47313 === (2))){
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47312__$1,(4),ch);
} else {
if((state_val_47313 === (11))){
var inst_47302 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47321_48374 = state_47312__$1;
(statearr_47321_48374[(2)] = inst_47302);

(statearr_47321_48374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (9))){
var state_47312__$1 = state_47312;
var statearr_47322_48375 = state_47312__$1;
(statearr_47322_48375[(2)] = null);

(statearr_47322_48375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (5))){
var inst_47297 = cljs.core.async.close_BANG_(out);
var state_47312__$1 = state_47312;
var statearr_47323_48376 = state_47312__$1;
(statearr_47323_48376[(2)] = inst_47297);

(statearr_47323_48376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (10))){
var inst_47305 = (state_47312[(2)]);
var state_47312__$1 = (function (){var statearr_47324 = state_47312;
(statearr_47324[(8)] = inst_47305);

return statearr_47324;
})();
var statearr_47325_48377 = state_47312__$1;
(statearr_47325_48377[(2)] = null);

(statearr_47325_48377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (8))){
var inst_47294 = (state_47312[(7)]);
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47312__$1,(11),out,inst_47294);
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
});})(c__46124__auto___48361,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48361,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47326 = [null,null,null,null,null,null,null,null,null];
(statearr_47326[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47326[(1)] = (1));

return statearr_47326;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47312){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47312);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47327){if((e47327 instanceof Object)){
var ex__46027__auto__ = e47327;
var statearr_47328_48381 = state_47312;
(statearr_47328_48381[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48382 = state_47312;
state_47312 = G__48382;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48361,out))
})();
var state__46126__auto__ = (function (){var statearr_47329 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47329[(6)] = c__46124__auto___48361);

return statearr_47329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48361,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47331 = arguments.length;
switch (G__47331) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46124__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto__){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto__){
return (function (state_47393){
var state_val_47394 = (state_47393[(1)]);
if((state_val_47394 === (7))){
var inst_47389 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47395_48387 = state_47393__$1;
(statearr_47395_48387[(2)] = inst_47389);

(statearr_47395_48387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (20))){
var inst_47359 = (state_47393[(7)]);
var inst_47370 = (state_47393[(2)]);
var inst_47371 = cljs.core.next(inst_47359);
var inst_47345 = inst_47371;
var inst_47346 = null;
var inst_47347 = (0);
var inst_47348 = (0);
var state_47393__$1 = (function (){var statearr_47396 = state_47393;
(statearr_47396[(8)] = inst_47345);

(statearr_47396[(9)] = inst_47347);

(statearr_47396[(10)] = inst_47348);

(statearr_47396[(11)] = inst_47370);

(statearr_47396[(12)] = inst_47346);

return statearr_47396;
})();
var statearr_47397_48390 = state_47393__$1;
(statearr_47397_48390[(2)] = null);

(statearr_47397_48390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (1))){
var state_47393__$1 = state_47393;
var statearr_47398_48391 = state_47393__$1;
(statearr_47398_48391[(2)] = null);

(statearr_47398_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (4))){
var inst_47334 = (state_47393[(13)]);
var inst_47334__$1 = (state_47393[(2)]);
var inst_47335 = (inst_47334__$1 == null);
var state_47393__$1 = (function (){var statearr_47399 = state_47393;
(statearr_47399[(13)] = inst_47334__$1);

return statearr_47399;
})();
if(cljs.core.truth_(inst_47335)){
var statearr_47400_48392 = state_47393__$1;
(statearr_47400_48392[(1)] = (5));

} else {
var statearr_47401_48393 = state_47393__$1;
(statearr_47401_48393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (15))){
var state_47393__$1 = state_47393;
var statearr_47405_48394 = state_47393__$1;
(statearr_47405_48394[(2)] = null);

(statearr_47405_48394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (21))){
var state_47393__$1 = state_47393;
var statearr_47406_48395 = state_47393__$1;
(statearr_47406_48395[(2)] = null);

(statearr_47406_48395[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (13))){
var inst_47345 = (state_47393[(8)]);
var inst_47347 = (state_47393[(9)]);
var inst_47348 = (state_47393[(10)]);
var inst_47346 = (state_47393[(12)]);
var inst_47355 = (state_47393[(2)]);
var inst_47356 = (inst_47348 + (1));
var tmp47402 = inst_47345;
var tmp47403 = inst_47347;
var tmp47404 = inst_47346;
var inst_47345__$1 = tmp47402;
var inst_47346__$1 = tmp47404;
var inst_47347__$1 = tmp47403;
var inst_47348__$1 = inst_47356;
var state_47393__$1 = (function (){var statearr_47407 = state_47393;
(statearr_47407[(8)] = inst_47345__$1);

(statearr_47407[(9)] = inst_47347__$1);

(statearr_47407[(10)] = inst_47348__$1);

(statearr_47407[(12)] = inst_47346__$1);

(statearr_47407[(14)] = inst_47355);

return statearr_47407;
})();
var statearr_47408_48397 = state_47393__$1;
(statearr_47408_48397[(2)] = null);

(statearr_47408_48397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (22))){
var state_47393__$1 = state_47393;
var statearr_47409_48399 = state_47393__$1;
(statearr_47409_48399[(2)] = null);

(statearr_47409_48399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (6))){
var inst_47334 = (state_47393[(13)]);
var inst_47343 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47334) : f.call(null,inst_47334));
var inst_47344 = cljs.core.seq(inst_47343);
var inst_47345 = inst_47344;
var inst_47346 = null;
var inst_47347 = (0);
var inst_47348 = (0);
var state_47393__$1 = (function (){var statearr_47410 = state_47393;
(statearr_47410[(8)] = inst_47345);

(statearr_47410[(9)] = inst_47347);

(statearr_47410[(10)] = inst_47348);

(statearr_47410[(12)] = inst_47346);

return statearr_47410;
})();
var statearr_47411_48400 = state_47393__$1;
(statearr_47411_48400[(2)] = null);

(statearr_47411_48400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (17))){
var inst_47359 = (state_47393[(7)]);
var inst_47363 = cljs.core.chunk_first(inst_47359);
var inst_47364 = cljs.core.chunk_rest(inst_47359);
var inst_47365 = cljs.core.count(inst_47363);
var inst_47345 = inst_47364;
var inst_47346 = inst_47363;
var inst_47347 = inst_47365;
var inst_47348 = (0);
var state_47393__$1 = (function (){var statearr_47412 = state_47393;
(statearr_47412[(8)] = inst_47345);

(statearr_47412[(9)] = inst_47347);

(statearr_47412[(10)] = inst_47348);

(statearr_47412[(12)] = inst_47346);

return statearr_47412;
})();
var statearr_47413_48401 = state_47393__$1;
(statearr_47413_48401[(2)] = null);

(statearr_47413_48401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (3))){
var inst_47391 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47393__$1,inst_47391);
} else {
if((state_val_47394 === (12))){
var inst_47379 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47414_48402 = state_47393__$1;
(statearr_47414_48402[(2)] = inst_47379);

(statearr_47414_48402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (2))){
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47393__$1,(4),in$);
} else {
if((state_val_47394 === (23))){
var inst_47387 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47415_48406 = state_47393__$1;
(statearr_47415_48406[(2)] = inst_47387);

(statearr_47415_48406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (19))){
var inst_47374 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47416_48411 = state_47393__$1;
(statearr_47416_48411[(2)] = inst_47374);

(statearr_47416_48411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (11))){
var inst_47345 = (state_47393[(8)]);
var inst_47359 = (state_47393[(7)]);
var inst_47359__$1 = cljs.core.seq(inst_47345);
var state_47393__$1 = (function (){var statearr_47417 = state_47393;
(statearr_47417[(7)] = inst_47359__$1);

return statearr_47417;
})();
if(inst_47359__$1){
var statearr_47418_48414 = state_47393__$1;
(statearr_47418_48414[(1)] = (14));

} else {
var statearr_47419_48415 = state_47393__$1;
(statearr_47419_48415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (9))){
var inst_47381 = (state_47393[(2)]);
var inst_47382 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47393__$1 = (function (){var statearr_47420 = state_47393;
(statearr_47420[(15)] = inst_47381);

return statearr_47420;
})();
if(cljs.core.truth_(inst_47382)){
var statearr_47421_48416 = state_47393__$1;
(statearr_47421_48416[(1)] = (21));

} else {
var statearr_47422_48417 = state_47393__$1;
(statearr_47422_48417[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (5))){
var inst_47337 = cljs.core.async.close_BANG_(out);
var state_47393__$1 = state_47393;
var statearr_47423_48419 = state_47393__$1;
(statearr_47423_48419[(2)] = inst_47337);

(statearr_47423_48419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (14))){
var inst_47359 = (state_47393[(7)]);
var inst_47361 = cljs.core.chunked_seq_QMARK_(inst_47359);
var state_47393__$1 = state_47393;
if(inst_47361){
var statearr_47424_48421 = state_47393__$1;
(statearr_47424_48421[(1)] = (17));

} else {
var statearr_47425_48422 = state_47393__$1;
(statearr_47425_48422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (16))){
var inst_47377 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47426_48424 = state_47393__$1;
(statearr_47426_48424[(2)] = inst_47377);

(statearr_47426_48424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (10))){
var inst_47348 = (state_47393[(10)]);
var inst_47346 = (state_47393[(12)]);
var inst_47353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47346,inst_47348);
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47393__$1,(13),out,inst_47353);
} else {
if((state_val_47394 === (18))){
var inst_47359 = (state_47393[(7)]);
var inst_47368 = cljs.core.first(inst_47359);
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47393__$1,(20),out,inst_47368);
} else {
if((state_val_47394 === (8))){
var inst_47347 = (state_47393[(9)]);
var inst_47348 = (state_47393[(10)]);
var inst_47350 = (inst_47348 < inst_47347);
var inst_47351 = inst_47350;
var state_47393__$1 = state_47393;
if(cljs.core.truth_(inst_47351)){
var statearr_47427_48427 = state_47393__$1;
(statearr_47427_48427[(1)] = (10));

} else {
var statearr_47428_48428 = state_47393__$1;
(statearr_47428_48428[(1)] = (11));

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
});})(c__46124__auto__))
;
return ((function (switch__46023__auto__,c__46124__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____0 = (function (){
var statearr_47429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47429[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__);

(statearr_47429[(1)] = (1));

return statearr_47429;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____1 = (function (state_47393){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47393);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47430){if((e47430 instanceof Object)){
var ex__46027__auto__ = e47430;
var statearr_47431_48429 = state_47393;
(statearr_47431_48429[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48430 = state_47393;
state_47393 = G__48430;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__ = function(state_47393){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____1.call(this,state_47393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46024__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto__))
})();
var state__46126__auto__ = (function (){var statearr_47432 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47432[(6)] = c__46124__auto__);

return statearr_47432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto__))
);

return c__46124__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47434 = arguments.length;
switch (G__47434) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47436 = arguments.length;
switch (G__47436) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47438 = arguments.length;
switch (G__47438) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48434,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48434,out){
return (function (state_47462){
var state_val_47463 = (state_47462[(1)]);
if((state_val_47463 === (7))){
var inst_47457 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
var statearr_47464_48435 = state_47462__$1;
(statearr_47464_48435[(2)] = inst_47457);

(statearr_47464_48435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (1))){
var inst_47439 = null;
var state_47462__$1 = (function (){var statearr_47465 = state_47462;
(statearr_47465[(7)] = inst_47439);

return statearr_47465;
})();
var statearr_47466_48437 = state_47462__$1;
(statearr_47466_48437[(2)] = null);

(statearr_47466_48437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (4))){
var inst_47442 = (state_47462[(8)]);
var inst_47442__$1 = (state_47462[(2)]);
var inst_47443 = (inst_47442__$1 == null);
var inst_47444 = cljs.core.not(inst_47443);
var state_47462__$1 = (function (){var statearr_47467 = state_47462;
(statearr_47467[(8)] = inst_47442__$1);

return statearr_47467;
})();
if(inst_47444){
var statearr_47468_48438 = state_47462__$1;
(statearr_47468_48438[(1)] = (5));

} else {
var statearr_47469_48440 = state_47462__$1;
(statearr_47469_48440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (6))){
var state_47462__$1 = state_47462;
var statearr_47470_48441 = state_47462__$1;
(statearr_47470_48441[(2)] = null);

(statearr_47470_48441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (3))){
var inst_47459 = (state_47462[(2)]);
var inst_47460 = cljs.core.async.close_BANG_(out);
var state_47462__$1 = (function (){var statearr_47471 = state_47462;
(statearr_47471[(9)] = inst_47459);

return statearr_47471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47462__$1,inst_47460);
} else {
if((state_val_47463 === (2))){
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47462__$1,(4),ch);
} else {
if((state_val_47463 === (11))){
var inst_47442 = (state_47462[(8)]);
var inst_47451 = (state_47462[(2)]);
var inst_47439 = inst_47442;
var state_47462__$1 = (function (){var statearr_47472 = state_47462;
(statearr_47472[(7)] = inst_47439);

(statearr_47472[(10)] = inst_47451);

return statearr_47472;
})();
var statearr_47473_48443 = state_47462__$1;
(statearr_47473_48443[(2)] = null);

(statearr_47473_48443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (9))){
var inst_47442 = (state_47462[(8)]);
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47462__$1,(11),out,inst_47442);
} else {
if((state_val_47463 === (5))){
var inst_47439 = (state_47462[(7)]);
var inst_47442 = (state_47462[(8)]);
var inst_47446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47442,inst_47439);
var state_47462__$1 = state_47462;
if(inst_47446){
var statearr_47475_48445 = state_47462__$1;
(statearr_47475_48445[(1)] = (8));

} else {
var statearr_47476_48446 = state_47462__$1;
(statearr_47476_48446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (10))){
var inst_47454 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
var statearr_47477_48447 = state_47462__$1;
(statearr_47477_48447[(2)] = inst_47454);

(statearr_47477_48447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (8))){
var inst_47439 = (state_47462[(7)]);
var tmp47474 = inst_47439;
var inst_47439__$1 = tmp47474;
var state_47462__$1 = (function (){var statearr_47478 = state_47462;
(statearr_47478[(7)] = inst_47439__$1);

return statearr_47478;
})();
var statearr_47479_48449 = state_47462__$1;
(statearr_47479_48449[(2)] = null);

(statearr_47479_48449[(1)] = (2));


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
});})(c__46124__auto___48434,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48434,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47480[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47480[(1)] = (1));

return statearr_47480;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47462){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47462);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47481){if((e47481 instanceof Object)){
var ex__46027__auto__ = e47481;
var statearr_47482_48450 = state_47462;
(statearr_47482_48450[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48451 = state_47462;
state_47462 = G__48451;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48434,out))
})();
var state__46126__auto__ = (function (){var statearr_47483 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47483[(6)] = c__46124__auto___48434);

return statearr_47483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48434,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47485 = arguments.length;
switch (G__47485) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48454,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48454,out){
return (function (state_47523){
var state_val_47524 = (state_47523[(1)]);
if((state_val_47524 === (7))){
var inst_47519 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
var statearr_47525_48455 = state_47523__$1;
(statearr_47525_48455[(2)] = inst_47519);

(statearr_47525_48455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (1))){
var inst_47486 = (new Array(n));
var inst_47487 = inst_47486;
var inst_47488 = (0);
var state_47523__$1 = (function (){var statearr_47526 = state_47523;
(statearr_47526[(7)] = inst_47488);

(statearr_47526[(8)] = inst_47487);

return statearr_47526;
})();
var statearr_47527_48456 = state_47523__$1;
(statearr_47527_48456[(2)] = null);

(statearr_47527_48456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (4))){
var inst_47491 = (state_47523[(9)]);
var inst_47491__$1 = (state_47523[(2)]);
var inst_47492 = (inst_47491__$1 == null);
var inst_47493 = cljs.core.not(inst_47492);
var state_47523__$1 = (function (){var statearr_47528 = state_47523;
(statearr_47528[(9)] = inst_47491__$1);

return statearr_47528;
})();
if(inst_47493){
var statearr_47529_48461 = state_47523__$1;
(statearr_47529_48461[(1)] = (5));

} else {
var statearr_47530_48462 = state_47523__$1;
(statearr_47530_48462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (15))){
var inst_47513 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
var statearr_47531_48467 = state_47523__$1;
(statearr_47531_48467[(2)] = inst_47513);

(statearr_47531_48467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (13))){
var state_47523__$1 = state_47523;
var statearr_47532_48468 = state_47523__$1;
(statearr_47532_48468[(2)] = null);

(statearr_47532_48468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (6))){
var inst_47488 = (state_47523[(7)]);
var inst_47509 = (inst_47488 > (0));
var state_47523__$1 = state_47523;
if(cljs.core.truth_(inst_47509)){
var statearr_47533_48474 = state_47523__$1;
(statearr_47533_48474[(1)] = (12));

} else {
var statearr_47534_48475 = state_47523__$1;
(statearr_47534_48475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (3))){
var inst_47521 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47523__$1,inst_47521);
} else {
if((state_val_47524 === (12))){
var inst_47487 = (state_47523[(8)]);
var inst_47511 = cljs.core.vec(inst_47487);
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47523__$1,(15),out,inst_47511);
} else {
if((state_val_47524 === (2))){
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47523__$1,(4),ch);
} else {
if((state_val_47524 === (11))){
var inst_47503 = (state_47523[(2)]);
var inst_47504 = (new Array(n));
var inst_47487 = inst_47504;
var inst_47488 = (0);
var state_47523__$1 = (function (){var statearr_47535 = state_47523;
(statearr_47535[(7)] = inst_47488);

(statearr_47535[(8)] = inst_47487);

(statearr_47535[(10)] = inst_47503);

return statearr_47535;
})();
var statearr_47536_48484 = state_47523__$1;
(statearr_47536_48484[(2)] = null);

(statearr_47536_48484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (9))){
var inst_47487 = (state_47523[(8)]);
var inst_47501 = cljs.core.vec(inst_47487);
var state_47523__$1 = state_47523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47523__$1,(11),out,inst_47501);
} else {
if((state_val_47524 === (5))){
var inst_47496 = (state_47523[(11)]);
var inst_47488 = (state_47523[(7)]);
var inst_47487 = (state_47523[(8)]);
var inst_47491 = (state_47523[(9)]);
var inst_47495 = (inst_47487[inst_47488] = inst_47491);
var inst_47496__$1 = (inst_47488 + (1));
var inst_47497 = (inst_47496__$1 < n);
var state_47523__$1 = (function (){var statearr_47537 = state_47523;
(statearr_47537[(11)] = inst_47496__$1);

(statearr_47537[(12)] = inst_47495);

return statearr_47537;
})();
if(cljs.core.truth_(inst_47497)){
var statearr_47538_48485 = state_47523__$1;
(statearr_47538_48485[(1)] = (8));

} else {
var statearr_47539_48486 = state_47523__$1;
(statearr_47539_48486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (14))){
var inst_47516 = (state_47523[(2)]);
var inst_47517 = cljs.core.async.close_BANG_(out);
var state_47523__$1 = (function (){var statearr_47541 = state_47523;
(statearr_47541[(13)] = inst_47516);

return statearr_47541;
})();
var statearr_47542_48489 = state_47523__$1;
(statearr_47542_48489[(2)] = inst_47517);

(statearr_47542_48489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (10))){
var inst_47507 = (state_47523[(2)]);
var state_47523__$1 = state_47523;
var statearr_47543_48490 = state_47523__$1;
(statearr_47543_48490[(2)] = inst_47507);

(statearr_47543_48490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47524 === (8))){
var inst_47496 = (state_47523[(11)]);
var inst_47487 = (state_47523[(8)]);
var tmp47540 = inst_47487;
var inst_47487__$1 = tmp47540;
var inst_47488 = inst_47496;
var state_47523__$1 = (function (){var statearr_47544 = state_47523;
(statearr_47544[(7)] = inst_47488);

(statearr_47544[(8)] = inst_47487__$1);

return statearr_47544;
})();
var statearr_47545_48495 = state_47523__$1;
(statearr_47545_48495[(2)] = null);

(statearr_47545_48495[(1)] = (2));


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
});})(c__46124__auto___48454,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48454,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47546[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47546[(1)] = (1));

return statearr_47546;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47523){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47523);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47547){if((e47547 instanceof Object)){
var ex__46027__auto__ = e47547;
var statearr_47548_48504 = state_47523;
(statearr_47548_48504[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48505 = state_47523;
state_47523 = G__48505;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48454,out))
})();
var state__46126__auto__ = (function (){var statearr_47549 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47549[(6)] = c__46124__auto___48454);

return statearr_47549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48454,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47551 = arguments.length;
switch (G__47551) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46124__auto___48521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46124__auto___48521,out){
return (function (){
var f__46125__auto__ = (function (){var switch__46023__auto__ = ((function (c__46124__auto___48521,out){
return (function (state_47593){
var state_val_47594 = (state_47593[(1)]);
if((state_val_47594 === (7))){
var inst_47589 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47595_48529 = state_47593__$1;
(statearr_47595_48529[(2)] = inst_47589);

(statearr_47595_48529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (1))){
var inst_47552 = [];
var inst_47553 = inst_47552;
var inst_47554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47593__$1 = (function (){var statearr_47596 = state_47593;
(statearr_47596[(7)] = inst_47554);

(statearr_47596[(8)] = inst_47553);

return statearr_47596;
})();
var statearr_47597_48532 = state_47593__$1;
(statearr_47597_48532[(2)] = null);

(statearr_47597_48532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (4))){
var inst_47557 = (state_47593[(9)]);
var inst_47557__$1 = (state_47593[(2)]);
var inst_47558 = (inst_47557__$1 == null);
var inst_47559 = cljs.core.not(inst_47558);
var state_47593__$1 = (function (){var statearr_47598 = state_47593;
(statearr_47598[(9)] = inst_47557__$1);

return statearr_47598;
})();
if(inst_47559){
var statearr_47599_48533 = state_47593__$1;
(statearr_47599_48533[(1)] = (5));

} else {
var statearr_47600_48534 = state_47593__$1;
(statearr_47600_48534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (15))){
var inst_47583 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47601_48536 = state_47593__$1;
(statearr_47601_48536[(2)] = inst_47583);

(statearr_47601_48536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (13))){
var state_47593__$1 = state_47593;
var statearr_47602_48538 = state_47593__$1;
(statearr_47602_48538[(2)] = null);

(statearr_47602_48538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (6))){
var inst_47553 = (state_47593[(8)]);
var inst_47578 = inst_47553.length;
var inst_47579 = (inst_47578 > (0));
var state_47593__$1 = state_47593;
if(cljs.core.truth_(inst_47579)){
var statearr_47603_48540 = state_47593__$1;
(statearr_47603_48540[(1)] = (12));

} else {
var statearr_47604_48541 = state_47593__$1;
(statearr_47604_48541[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (3))){
var inst_47591 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47593__$1,inst_47591);
} else {
if((state_val_47594 === (12))){
var inst_47553 = (state_47593[(8)]);
var inst_47581 = cljs.core.vec(inst_47553);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47593__$1,(15),out,inst_47581);
} else {
if((state_val_47594 === (2))){
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47593__$1,(4),ch);
} else {
if((state_val_47594 === (11))){
var inst_47557 = (state_47593[(9)]);
var inst_47561 = (state_47593[(10)]);
var inst_47571 = (state_47593[(2)]);
var inst_47572 = [];
var inst_47573 = inst_47572.push(inst_47557);
var inst_47553 = inst_47572;
var inst_47554 = inst_47561;
var state_47593__$1 = (function (){var statearr_47605 = state_47593;
(statearr_47605[(11)] = inst_47573);

(statearr_47605[(7)] = inst_47554);

(statearr_47605[(8)] = inst_47553);

(statearr_47605[(12)] = inst_47571);

return statearr_47605;
})();
var statearr_47606_48542 = state_47593__$1;
(statearr_47606_48542[(2)] = null);

(statearr_47606_48542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (9))){
var inst_47553 = (state_47593[(8)]);
var inst_47569 = cljs.core.vec(inst_47553);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47593__$1,(11),out,inst_47569);
} else {
if((state_val_47594 === (5))){
var inst_47557 = (state_47593[(9)]);
var inst_47554 = (state_47593[(7)]);
var inst_47561 = (state_47593[(10)]);
var inst_47561__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47557) : f.call(null,inst_47557));
var inst_47562 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47561__$1,inst_47554);
var inst_47563 = cljs.core.keyword_identical_QMARK_(inst_47554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47564 = ((inst_47562) || (inst_47563));
var state_47593__$1 = (function (){var statearr_47607 = state_47593;
(statearr_47607[(10)] = inst_47561__$1);

return statearr_47607;
})();
if(cljs.core.truth_(inst_47564)){
var statearr_47608_48544 = state_47593__$1;
(statearr_47608_48544[(1)] = (8));

} else {
var statearr_47609_48545 = state_47593__$1;
(statearr_47609_48545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (14))){
var inst_47586 = (state_47593[(2)]);
var inst_47587 = cljs.core.async.close_BANG_(out);
var state_47593__$1 = (function (){var statearr_47611 = state_47593;
(statearr_47611[(13)] = inst_47586);

return statearr_47611;
})();
var statearr_47612_48546 = state_47593__$1;
(statearr_47612_48546[(2)] = inst_47587);

(statearr_47612_48546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (10))){
var inst_47576 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47613_48547 = state_47593__$1;
(statearr_47613_48547[(2)] = inst_47576);

(statearr_47613_48547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (8))){
var inst_47557 = (state_47593[(9)]);
var inst_47553 = (state_47593[(8)]);
var inst_47561 = (state_47593[(10)]);
var inst_47566 = inst_47553.push(inst_47557);
var tmp47610 = inst_47553;
var inst_47553__$1 = tmp47610;
var inst_47554 = inst_47561;
var state_47593__$1 = (function (){var statearr_47614 = state_47593;
(statearr_47614[(7)] = inst_47554);

(statearr_47614[(8)] = inst_47553__$1);

(statearr_47614[(14)] = inst_47566);

return statearr_47614;
})();
var statearr_47615_48551 = state_47593__$1;
(statearr_47615_48551[(2)] = null);

(statearr_47615_48551[(1)] = (2));


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
});})(c__46124__auto___48521,out))
;
return ((function (switch__46023__auto__,c__46124__auto___48521,out){
return (function() {
var cljs$core$async$state_machine__46024__auto__ = null;
var cljs$core$async$state_machine__46024__auto____0 = (function (){
var statearr_47616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47616[(0)] = cljs$core$async$state_machine__46024__auto__);

(statearr_47616[(1)] = (1));

return statearr_47616;
});
var cljs$core$async$state_machine__46024__auto____1 = (function (state_47593){
while(true){
var ret_value__46025__auto__ = (function (){try{while(true){
var result__46026__auto__ = switch__46023__auto__(state_47593);
if(cljs.core.keyword_identical_QMARK_(result__46026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46026__auto__;
}
break;
}
}catch (e47617){if((e47617 instanceof Object)){
var ex__46027__auto__ = e47617;
var statearr_47618_48552 = state_47593;
(statearr_47618_48552[(5)] = ex__46027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48554 = state_47593;
state_47593 = G__48554;
continue;
} else {
return ret_value__46025__auto__;
}
break;
}
});
cljs$core$async$state_machine__46024__auto__ = function(state_47593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46024__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46024__auto____1.call(this,state_47593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46024__auto____0;
cljs$core$async$state_machine__46024__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46024__auto____1;
return cljs$core$async$state_machine__46024__auto__;
})()
;})(switch__46023__auto__,c__46124__auto___48521,out))
})();
var state__46126__auto__ = (function (){var statearr_47619 = (f__46125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46125__auto__.cljs$core$IFn$_invoke$arity$0() : f__46125__auto__.call(null));
(statearr_47619[(6)] = c__46124__auto___48521);

return statearr_47619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46126__auto__);
});})(c__46124__auto___48521,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
