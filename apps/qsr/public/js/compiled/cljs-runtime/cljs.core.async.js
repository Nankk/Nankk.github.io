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
var G__46361 = arguments.length;
switch (G__46361) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46362 = (function (f,blockable,meta46363){
this.f = f;
this.blockable = blockable;
this.meta46363 = meta46363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46364,meta46363__$1){
var self__ = this;
var _46364__$1 = this;
return (new cljs.core.async.t_cljs$core$async46362(self__.f,self__.blockable,meta46363__$1));
});

cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46364){
var self__ = this;
var _46364__$1 = this;
return self__.meta46363;
});

cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46363","meta46363",1450971972,null)], null);
});

cljs.core.async.t_cljs$core$async46362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46362";

cljs.core.async.t_cljs$core$async46362.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46362");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46362.
 */
cljs.core.async.__GT_t_cljs$core$async46362 = (function cljs$core$async$__GT_t_cljs$core$async46362(f__$1,blockable__$1,meta46363){
return (new cljs.core.async.t_cljs$core$async46362(f__$1,blockable__$1,meta46363));
});

}

return (new cljs.core.async.t_cljs$core$async46362(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46367 = arguments.length;
switch (G__46367) {
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
var G__46369 = arguments.length;
switch (G__46369) {
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
var G__46371 = arguments.length;
switch (G__46371) {
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
var val_47811 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47811) : fn1.call(null,val_47811));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47811,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47811) : fn1.call(null,val_47811));
});})(val_47811,ret))
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
var G__46373 = arguments.length;
switch (G__46373) {
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
var n__4607__auto___47820 = n;
var x_47821 = (0);
while(true){
if((x_47821 < n__4607__auto___47820)){
(a[x_47821] = x_47821);

var G__47822 = (x_47821 + (1));
x_47821 = G__47822;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46374 = (function (flag,meta46375){
this.flag = flag;
this.meta46375 = meta46375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46376,meta46375__$1){
var self__ = this;
var _46376__$1 = this;
return (new cljs.core.async.t_cljs$core$async46374(self__.flag,meta46375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46376){
var self__ = this;
var _46376__$1 = this;
return self__.meta46375;
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46375","meta46375",432672650,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46374";

cljs.core.async.t_cljs$core$async46374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46374");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46374.
 */
cljs.core.async.__GT_t_cljs$core$async46374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46374(flag__$1,meta46375){
return (new cljs.core.async.t_cljs$core$async46374(flag__$1,meta46375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46374(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46377 = (function (flag,cb,meta46378){
this.flag = flag;
this.cb = cb;
this.meta46378 = meta46378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46379,meta46378__$1){
var self__ = this;
var _46379__$1 = this;
return (new cljs.core.async.t_cljs$core$async46377(self__.flag,self__.cb,meta46378__$1));
});

cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46379){
var self__ = this;
var _46379__$1 = this;
return self__.meta46378;
});

cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46378","meta46378",833057601,null)], null);
});

cljs.core.async.t_cljs$core$async46377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46377";

cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46377");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46377.
 */
cljs.core.async.__GT_t_cljs$core$async46377 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46377(flag__$1,cb__$1,meta46378){
return (new cljs.core.async.t_cljs$core$async46377(flag__$1,cb__$1,meta46378));
});

}

return (new cljs.core.async.t_cljs$core$async46377(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46380_SHARP_){
var G__46382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46380_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46382) : fret.call(null,G__46382));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46381_SHARP_){
var G__46383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46381_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46383) : fret.call(null,G__46383));
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
var G__47842 = (i + (1));
i = G__47842;
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
var len__4730__auto___47846 = arguments.length;
var i__4731__auto___47847 = (0);
while(true){
if((i__4731__auto___47847 < len__4730__auto___47846)){
args__4736__auto__.push((arguments[i__4731__auto___47847]));

var G__47849 = (i__4731__auto___47847 + (1));
i__4731__auto___47847 = G__47849;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46386){
var map__46387 = p__46386;
var map__46387__$1 = (((((!((map__46387 == null))))?(((((map__46387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46387):map__46387);
var opts = map__46387__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46384){
var G__46385 = cljs.core.first(seq46384);
var seq46384__$1 = cljs.core.next(seq46384);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46385,seq46384__$1);
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
var G__46390 = arguments.length;
switch (G__46390) {
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
var c__46301__auto___47864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___47864){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___47864){
return (function (state_46414){
var state_val_46415 = (state_46414[(1)]);
if((state_val_46415 === (7))){
var inst_46410 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
var statearr_46416_47865 = state_46414__$1;
(statearr_46416_47865[(2)] = inst_46410);

(statearr_46416_47865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (1))){
var state_46414__$1 = state_46414;
var statearr_46417_47867 = state_46414__$1;
(statearr_46417_47867[(2)] = null);

(statearr_46417_47867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (4))){
var inst_46393 = (state_46414[(7)]);
var inst_46393__$1 = (state_46414[(2)]);
var inst_46394 = (inst_46393__$1 == null);
var state_46414__$1 = (function (){var statearr_46418 = state_46414;
(statearr_46418[(7)] = inst_46393__$1);

return statearr_46418;
})();
if(cljs.core.truth_(inst_46394)){
var statearr_46419_47868 = state_46414__$1;
(statearr_46419_47868[(1)] = (5));

} else {
var statearr_46420_47869 = state_46414__$1;
(statearr_46420_47869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (13))){
var state_46414__$1 = state_46414;
var statearr_46421_47873 = state_46414__$1;
(statearr_46421_47873[(2)] = null);

(statearr_46421_47873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (6))){
var inst_46393 = (state_46414[(7)]);
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46414__$1,(11),to,inst_46393);
} else {
if((state_val_46415 === (3))){
var inst_46412 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46414__$1,inst_46412);
} else {
if((state_val_46415 === (12))){
var state_46414__$1 = state_46414;
var statearr_46422_47876 = state_46414__$1;
(statearr_46422_47876[(2)] = null);

(statearr_46422_47876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (2))){
var state_46414__$1 = state_46414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46414__$1,(4),from);
} else {
if((state_val_46415 === (11))){
var inst_46403 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
if(cljs.core.truth_(inst_46403)){
var statearr_46423_47879 = state_46414__$1;
(statearr_46423_47879[(1)] = (12));

} else {
var statearr_46424_47880 = state_46414__$1;
(statearr_46424_47880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (9))){
var state_46414__$1 = state_46414;
var statearr_46425_47883 = state_46414__$1;
(statearr_46425_47883[(2)] = null);

(statearr_46425_47883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (5))){
var state_46414__$1 = state_46414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46426_47887 = state_46414__$1;
(statearr_46426_47887[(1)] = (8));

} else {
var statearr_46427_47888 = state_46414__$1;
(statearr_46427_47888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (14))){
var inst_46408 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
var statearr_46428_47890 = state_46414__$1;
(statearr_46428_47890[(2)] = inst_46408);

(statearr_46428_47890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (10))){
var inst_46400 = (state_46414[(2)]);
var state_46414__$1 = state_46414;
var statearr_46429_47891 = state_46414__$1;
(statearr_46429_47891[(2)] = inst_46400);

(statearr_46429_47891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46415 === (8))){
var inst_46397 = cljs.core.async.close_BANG_(to);
var state_46414__$1 = state_46414;
var statearr_46430_47892 = state_46414__$1;
(statearr_46430_47892[(2)] = inst_46397);

(statearr_46430_47892[(1)] = (10));


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
});})(c__46301__auto___47864))
;
return ((function (switch__46200__auto__,c__46301__auto___47864){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_46431 = [null,null,null,null,null,null,null,null];
(statearr_46431[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_46431[(1)] = (1));

return statearr_46431;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_46414){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46414);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46432){if((e46432 instanceof Object)){
var ex__46204__auto__ = e46432;
var statearr_46433_47895 = state_46414;
(statearr_46433_47895[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47898 = state_46414;
state_46414 = G__47898;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_46414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_46414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___47864))
})();
var state__46303__auto__ = (function (){var statearr_46434 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46434[(6)] = c__46301__auto___47864);

return statearr_46434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___47864))
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
return (function (p__46435){
var vec__46436 = p__46435;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46436,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46436,(1),null);
var job = vec__46436;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46301__auto___47907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results){
return (function (state_46443){
var state_val_46444 = (state_46443[(1)]);
if((state_val_46444 === (1))){
var state_46443__$1 = state_46443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46443__$1,(2),res,v);
} else {
if((state_val_46444 === (2))){
var inst_46440 = (state_46443[(2)]);
var inst_46441 = cljs.core.async.close_BANG_(res);
var state_46443__$1 = (function (){var statearr_46445 = state_46443;
(statearr_46445[(7)] = inst_46440);

return statearr_46445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46443__$1,inst_46441);
} else {
return null;
}
}
});})(c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results))
;
return ((function (switch__46200__auto__,c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_46446 = [null,null,null,null,null,null,null,null];
(statearr_46446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__);

(statearr_46446[(1)] = (1));

return statearr_46446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1 = (function (state_46443){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46443);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46447){if((e46447 instanceof Object)){
var ex__46204__auto__ = e46447;
var statearr_46448_47912 = state_46443;
(statearr_46448_47912[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47913 = state_46443;
state_46443 = G__47913;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = function(state_46443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1.call(this,state_46443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results))
})();
var state__46303__auto__ = (function (){var statearr_46449 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46449[(6)] = c__46301__auto___47907);

return statearr_46449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___47907,res,vec__46436,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46450){
var vec__46451 = p__46450;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(1),null);
var job = vec__46451;
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
var n__4607__auto___47915 = n;
var __47916 = (0);
while(true){
if((__47916 < n__4607__auto___47915)){
var G__46454_47917 = type;
var G__46454_47918__$1 = (((G__46454_47917 instanceof cljs.core.Keyword))?G__46454_47917.fqn:null);
switch (G__46454_47918__$1) {
case "compute":
var c__46301__auto___47920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47916,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (__47916,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function (state_46467){
var state_val_46468 = (state_46467[(1)]);
if((state_val_46468 === (1))){
var state_46467__$1 = state_46467;
var statearr_46469_47922 = state_46467__$1;
(statearr_46469_47922[(2)] = null);

(statearr_46469_47922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (2))){
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46467__$1,(4),jobs);
} else {
if((state_val_46468 === (3))){
var inst_46465 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46467__$1,inst_46465);
} else {
if((state_val_46468 === (4))){
var inst_46457 = (state_46467[(2)]);
var inst_46458 = process(inst_46457);
var state_46467__$1 = state_46467;
if(cljs.core.truth_(inst_46458)){
var statearr_46470_47923 = state_46467__$1;
(statearr_46470_47923[(1)] = (5));

} else {
var statearr_46471_47924 = state_46467__$1;
(statearr_46471_47924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (5))){
var state_46467__$1 = state_46467;
var statearr_46472_47925 = state_46467__$1;
(statearr_46472_47925[(2)] = null);

(statearr_46472_47925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (6))){
var state_46467__$1 = state_46467;
var statearr_46473_47926 = state_46467__$1;
(statearr_46473_47926[(2)] = null);

(statearr_46473_47926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46468 === (7))){
var inst_46463 = (state_46467[(2)]);
var state_46467__$1 = state_46467;
var statearr_46474_47927 = state_46467__$1;
(statearr_46474_47927[(2)] = inst_46463);

(statearr_46474_47927[(1)] = (3));


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
});})(__47916,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
;
return ((function (__47916,switch__46200__auto__,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_46475 = [null,null,null,null,null,null,null];
(statearr_46475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__);

(statearr_46475[(1)] = (1));

return statearr_46475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1 = (function (state_46467){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46467);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46476){if((e46476 instanceof Object)){
var ex__46204__auto__ = e46476;
var statearr_46477_47929 = state_46467;
(statearr_46477_47929[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47931 = state_46467;
state_46467 = G__47931;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = function(state_46467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1.call(this,state_46467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__;
})()
;})(__47916,switch__46200__auto__,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
})();
var state__46303__auto__ = (function (){var statearr_46478 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46478[(6)] = c__46301__auto___47920);

return statearr_46478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(__47916,c__46301__auto___47920,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
);


break;
case "async":
var c__46301__auto___47940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47916,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (__47916,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function (state_46491){
var state_val_46492 = (state_46491[(1)]);
if((state_val_46492 === (1))){
var state_46491__$1 = state_46491;
var statearr_46493_47942 = state_46491__$1;
(statearr_46493_47942[(2)] = null);

(statearr_46493_47942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (2))){
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46491__$1,(4),jobs);
} else {
if((state_val_46492 === (3))){
var inst_46489 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46491__$1,inst_46489);
} else {
if((state_val_46492 === (4))){
var inst_46481 = (state_46491[(2)]);
var inst_46482 = async(inst_46481);
var state_46491__$1 = state_46491;
if(cljs.core.truth_(inst_46482)){
var statearr_46494_47943 = state_46491__$1;
(statearr_46494_47943[(1)] = (5));

} else {
var statearr_46495_47944 = state_46491__$1;
(statearr_46495_47944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (5))){
var state_46491__$1 = state_46491;
var statearr_46496_47945 = state_46491__$1;
(statearr_46496_47945[(2)] = null);

(statearr_46496_47945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (6))){
var state_46491__$1 = state_46491;
var statearr_46497_47946 = state_46491__$1;
(statearr_46497_47946[(2)] = null);

(statearr_46497_47946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (7))){
var inst_46487 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
var statearr_46498_47948 = state_46491__$1;
(statearr_46498_47948[(2)] = inst_46487);

(statearr_46498_47948[(1)] = (3));


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
});})(__47916,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
;
return ((function (__47916,switch__46200__auto__,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_46499 = [null,null,null,null,null,null,null];
(statearr_46499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__);

(statearr_46499[(1)] = (1));

return statearr_46499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1 = (function (state_46491){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46491);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46500){if((e46500 instanceof Object)){
var ex__46204__auto__ = e46500;
var statearr_46501_47950 = state_46491;
(statearr_46501_47950[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47953 = state_46491;
state_46491 = G__47953;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = function(state_46491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1.call(this,state_46491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__;
})()
;})(__47916,switch__46200__auto__,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
})();
var state__46303__auto__ = (function (){var statearr_46502 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46502[(6)] = c__46301__auto___47940);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(__47916,c__46301__auto___47940,G__46454_47917,G__46454_47918__$1,n__4607__auto___47915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46454_47918__$1)].join('')));

}

var G__47956 = (__47916 + (1));
__47916 = G__47956;
continue;
} else {
}
break;
}

var c__46301__auto___47957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___47957,jobs,results,process,async){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___47957,jobs,results,process,async){
return (function (state_46524){
var state_val_46525 = (state_46524[(1)]);
if((state_val_46525 === (7))){
var inst_46520 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
var statearr_46526_47960 = state_46524__$1;
(statearr_46526_47960[(2)] = inst_46520);

(statearr_46526_47960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (1))){
var state_46524__$1 = state_46524;
var statearr_46527_47961 = state_46524__$1;
(statearr_46527_47961[(2)] = null);

(statearr_46527_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (4))){
var inst_46505 = (state_46524[(7)]);
var inst_46505__$1 = (state_46524[(2)]);
var inst_46506 = (inst_46505__$1 == null);
var state_46524__$1 = (function (){var statearr_46528 = state_46524;
(statearr_46528[(7)] = inst_46505__$1);

return statearr_46528;
})();
if(cljs.core.truth_(inst_46506)){
var statearr_46529_47964 = state_46524__$1;
(statearr_46529_47964[(1)] = (5));

} else {
var statearr_46530_47965 = state_46524__$1;
(statearr_46530_47965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (6))){
var inst_46505 = (state_46524[(7)]);
var inst_46510 = (state_46524[(8)]);
var inst_46510__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46512 = [inst_46505,inst_46510__$1];
var inst_46513 = (new cljs.core.PersistentVector(null,2,(5),inst_46511,inst_46512,null));
var state_46524__$1 = (function (){var statearr_46531 = state_46524;
(statearr_46531[(8)] = inst_46510__$1);

return statearr_46531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46524__$1,(8),jobs,inst_46513);
} else {
if((state_val_46525 === (3))){
var inst_46522 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46524__$1,inst_46522);
} else {
if((state_val_46525 === (2))){
var state_46524__$1 = state_46524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46524__$1,(4),from);
} else {
if((state_val_46525 === (9))){
var inst_46517 = (state_46524[(2)]);
var state_46524__$1 = (function (){var statearr_46532 = state_46524;
(statearr_46532[(9)] = inst_46517);

return statearr_46532;
})();
var statearr_46533_47968 = state_46524__$1;
(statearr_46533_47968[(2)] = null);

(statearr_46533_47968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (5))){
var inst_46508 = cljs.core.async.close_BANG_(jobs);
var state_46524__$1 = state_46524;
var statearr_46534_47969 = state_46524__$1;
(statearr_46534_47969[(2)] = inst_46508);

(statearr_46534_47969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (8))){
var inst_46510 = (state_46524[(8)]);
var inst_46515 = (state_46524[(2)]);
var state_46524__$1 = (function (){var statearr_46535 = state_46524;
(statearr_46535[(10)] = inst_46515);

return statearr_46535;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46524__$1,(9),results,inst_46510);
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
});})(c__46301__auto___47957,jobs,results,process,async))
;
return ((function (switch__46200__auto__,c__46301__auto___47957,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_46536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__);

(statearr_46536[(1)] = (1));

return statearr_46536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1 = (function (state_46524){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46524);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46537){if((e46537 instanceof Object)){
var ex__46204__auto__ = e46537;
var statearr_46538_47976 = state_46524;
(statearr_46538_47976[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47978 = state_46524;
state_46524 = G__47978;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = function(state_46524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1.call(this,state_46524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___47957,jobs,results,process,async))
})();
var state__46303__auto__ = (function (){var statearr_46539 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46539[(6)] = c__46301__auto___47957);

return statearr_46539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___47957,jobs,results,process,async))
);


var c__46301__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto__,jobs,results,process,async){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto__,jobs,results,process,async){
return (function (state_46577){
var state_val_46578 = (state_46577[(1)]);
if((state_val_46578 === (7))){
var inst_46573 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
var statearr_46579_47982 = state_46577__$1;
(statearr_46579_47982[(2)] = inst_46573);

(statearr_46579_47982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (20))){
var state_46577__$1 = state_46577;
var statearr_46580_47983 = state_46577__$1;
(statearr_46580_47983[(2)] = null);

(statearr_46580_47983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (1))){
var state_46577__$1 = state_46577;
var statearr_46581_47984 = state_46577__$1;
(statearr_46581_47984[(2)] = null);

(statearr_46581_47984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (4))){
var inst_46542 = (state_46577[(7)]);
var inst_46542__$1 = (state_46577[(2)]);
var inst_46543 = (inst_46542__$1 == null);
var state_46577__$1 = (function (){var statearr_46582 = state_46577;
(statearr_46582[(7)] = inst_46542__$1);

return statearr_46582;
})();
if(cljs.core.truth_(inst_46543)){
var statearr_46583_47985 = state_46577__$1;
(statearr_46583_47985[(1)] = (5));

} else {
var statearr_46584_47986 = state_46577__$1;
(statearr_46584_47986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (15))){
var inst_46555 = (state_46577[(8)]);
var state_46577__$1 = state_46577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46577__$1,(18),to,inst_46555);
} else {
if((state_val_46578 === (21))){
var inst_46568 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
var statearr_46585_47987 = state_46577__$1;
(statearr_46585_47987[(2)] = inst_46568);

(statearr_46585_47987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (13))){
var inst_46570 = (state_46577[(2)]);
var state_46577__$1 = (function (){var statearr_46586 = state_46577;
(statearr_46586[(9)] = inst_46570);

return statearr_46586;
})();
var statearr_46587_47988 = state_46577__$1;
(statearr_46587_47988[(2)] = null);

(statearr_46587_47988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (6))){
var inst_46542 = (state_46577[(7)]);
var state_46577__$1 = state_46577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46577__$1,(11),inst_46542);
} else {
if((state_val_46578 === (17))){
var inst_46563 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
if(cljs.core.truth_(inst_46563)){
var statearr_46588_47996 = state_46577__$1;
(statearr_46588_47996[(1)] = (19));

} else {
var statearr_46589_47997 = state_46577__$1;
(statearr_46589_47997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (3))){
var inst_46575 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46577__$1,inst_46575);
} else {
if((state_val_46578 === (12))){
var inst_46552 = (state_46577[(10)]);
var state_46577__$1 = state_46577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46577__$1,(14),inst_46552);
} else {
if((state_val_46578 === (2))){
var state_46577__$1 = state_46577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46577__$1,(4),results);
} else {
if((state_val_46578 === (19))){
var state_46577__$1 = state_46577;
var statearr_46590_48002 = state_46577__$1;
(statearr_46590_48002[(2)] = null);

(statearr_46590_48002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (11))){
var inst_46552 = (state_46577[(2)]);
var state_46577__$1 = (function (){var statearr_46591 = state_46577;
(statearr_46591[(10)] = inst_46552);

return statearr_46591;
})();
var statearr_46592_48003 = state_46577__$1;
(statearr_46592_48003[(2)] = null);

(statearr_46592_48003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (9))){
var state_46577__$1 = state_46577;
var statearr_46593_48006 = state_46577__$1;
(statearr_46593_48006[(2)] = null);

(statearr_46593_48006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (5))){
var state_46577__$1 = state_46577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46594_48011 = state_46577__$1;
(statearr_46594_48011[(1)] = (8));

} else {
var statearr_46595_48012 = state_46577__$1;
(statearr_46595_48012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (14))){
var inst_46557 = (state_46577[(11)]);
var inst_46555 = (state_46577[(8)]);
var inst_46555__$1 = (state_46577[(2)]);
var inst_46556 = (inst_46555__$1 == null);
var inst_46557__$1 = cljs.core.not(inst_46556);
var state_46577__$1 = (function (){var statearr_46596 = state_46577;
(statearr_46596[(11)] = inst_46557__$1);

(statearr_46596[(8)] = inst_46555__$1);

return statearr_46596;
})();
if(inst_46557__$1){
var statearr_46597_48016 = state_46577__$1;
(statearr_46597_48016[(1)] = (15));

} else {
var statearr_46598_48017 = state_46577__$1;
(statearr_46598_48017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (16))){
var inst_46557 = (state_46577[(11)]);
var state_46577__$1 = state_46577;
var statearr_46599_48018 = state_46577__$1;
(statearr_46599_48018[(2)] = inst_46557);

(statearr_46599_48018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (10))){
var inst_46549 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
var statearr_46600_48019 = state_46577__$1;
(statearr_46600_48019[(2)] = inst_46549);

(statearr_46600_48019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (18))){
var inst_46560 = (state_46577[(2)]);
var state_46577__$1 = state_46577;
var statearr_46601_48020 = state_46577__$1;
(statearr_46601_48020[(2)] = inst_46560);

(statearr_46601_48020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46578 === (8))){
var inst_46546 = cljs.core.async.close_BANG_(to);
var state_46577__$1 = state_46577;
var statearr_46602_48024 = state_46577__$1;
(statearr_46602_48024[(2)] = inst_46546);

(statearr_46602_48024[(1)] = (10));


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
});})(c__46301__auto__,jobs,results,process,async))
;
return ((function (switch__46200__auto__,c__46301__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_46603 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__);

(statearr_46603[(1)] = (1));

return statearr_46603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1 = (function (state_46577){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46577);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46604){if((e46604 instanceof Object)){
var ex__46204__auto__ = e46604;
var statearr_46605_48026 = state_46577;
(statearr_46605_48026[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48028 = state_46577;
state_46577 = G__48028;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__ = function(state_46577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1.call(this,state_46577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto__,jobs,results,process,async))
})();
var state__46303__auto__ = (function (){var statearr_46606 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46606[(6)] = c__46301__auto__);

return statearr_46606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto__,jobs,results,process,async))
);

return c__46301__auto__;
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
var G__46608 = arguments.length;
switch (G__46608) {
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
var G__46610 = arguments.length;
switch (G__46610) {
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
var G__46612 = arguments.length;
switch (G__46612) {
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
var c__46301__auto___48045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48045,tc,fc){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48045,tc,fc){
return (function (state_46638){
var state_val_46639 = (state_46638[(1)]);
if((state_val_46639 === (7))){
var inst_46634 = (state_46638[(2)]);
var state_46638__$1 = state_46638;
var statearr_46640_48049 = state_46638__$1;
(statearr_46640_48049[(2)] = inst_46634);

(statearr_46640_48049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (1))){
var state_46638__$1 = state_46638;
var statearr_46641_48053 = state_46638__$1;
(statearr_46641_48053[(2)] = null);

(statearr_46641_48053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (4))){
var inst_46615 = (state_46638[(7)]);
var inst_46615__$1 = (state_46638[(2)]);
var inst_46616 = (inst_46615__$1 == null);
var state_46638__$1 = (function (){var statearr_46642 = state_46638;
(statearr_46642[(7)] = inst_46615__$1);

return statearr_46642;
})();
if(cljs.core.truth_(inst_46616)){
var statearr_46643_48054 = state_46638__$1;
(statearr_46643_48054[(1)] = (5));

} else {
var statearr_46644_48055 = state_46638__$1;
(statearr_46644_48055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (13))){
var state_46638__$1 = state_46638;
var statearr_46645_48059 = state_46638__$1;
(statearr_46645_48059[(2)] = null);

(statearr_46645_48059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (6))){
var inst_46615 = (state_46638[(7)]);
var inst_46621 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46615) : p.call(null,inst_46615));
var state_46638__$1 = state_46638;
if(cljs.core.truth_(inst_46621)){
var statearr_46646_48060 = state_46638__$1;
(statearr_46646_48060[(1)] = (9));

} else {
var statearr_46647_48061 = state_46638__$1;
(statearr_46647_48061[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (3))){
var inst_46636 = (state_46638[(2)]);
var state_46638__$1 = state_46638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46638__$1,inst_46636);
} else {
if((state_val_46639 === (12))){
var state_46638__$1 = state_46638;
var statearr_46648_48062 = state_46638__$1;
(statearr_46648_48062[(2)] = null);

(statearr_46648_48062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (2))){
var state_46638__$1 = state_46638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46638__$1,(4),ch);
} else {
if((state_val_46639 === (11))){
var inst_46615 = (state_46638[(7)]);
var inst_46625 = (state_46638[(2)]);
var state_46638__$1 = state_46638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46638__$1,(8),inst_46625,inst_46615);
} else {
if((state_val_46639 === (9))){
var state_46638__$1 = state_46638;
var statearr_46649_48073 = state_46638__$1;
(statearr_46649_48073[(2)] = tc);

(statearr_46649_48073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (5))){
var inst_46618 = cljs.core.async.close_BANG_(tc);
var inst_46619 = cljs.core.async.close_BANG_(fc);
var state_46638__$1 = (function (){var statearr_46650 = state_46638;
(statearr_46650[(8)] = inst_46618);

return statearr_46650;
})();
var statearr_46651_48074 = state_46638__$1;
(statearr_46651_48074[(2)] = inst_46619);

(statearr_46651_48074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (14))){
var inst_46632 = (state_46638[(2)]);
var state_46638__$1 = state_46638;
var statearr_46652_48075 = state_46638__$1;
(statearr_46652_48075[(2)] = inst_46632);

(statearr_46652_48075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (10))){
var state_46638__$1 = state_46638;
var statearr_46653_48079 = state_46638__$1;
(statearr_46653_48079[(2)] = fc);

(statearr_46653_48079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46639 === (8))){
var inst_46627 = (state_46638[(2)]);
var state_46638__$1 = state_46638;
if(cljs.core.truth_(inst_46627)){
var statearr_46654_48083 = state_46638__$1;
(statearr_46654_48083[(1)] = (12));

} else {
var statearr_46655_48084 = state_46638__$1;
(statearr_46655_48084[(1)] = (13));

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
});})(c__46301__auto___48045,tc,fc))
;
return ((function (switch__46200__auto__,c__46301__auto___48045,tc,fc){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_46656 = [null,null,null,null,null,null,null,null,null];
(statearr_46656[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_46656[(1)] = (1));

return statearr_46656;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_46638){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46638);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46657){if((e46657 instanceof Object)){
var ex__46204__auto__ = e46657;
var statearr_46658_48091 = state_46638;
(statearr_46658_48091[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48092 = state_46638;
state_46638 = G__48092;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_46638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_46638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48045,tc,fc))
})();
var state__46303__auto__ = (function (){var statearr_46659 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46659[(6)] = c__46301__auto___48045);

return statearr_46659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48045,tc,fc))
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
var c__46301__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto__){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto__){
return (function (state_46680){
var state_val_46681 = (state_46680[(1)]);
if((state_val_46681 === (7))){
var inst_46676 = (state_46680[(2)]);
var state_46680__$1 = state_46680;
var statearr_46682_48099 = state_46680__$1;
(statearr_46682_48099[(2)] = inst_46676);

(statearr_46682_48099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (1))){
var inst_46660 = init;
var state_46680__$1 = (function (){var statearr_46683 = state_46680;
(statearr_46683[(7)] = inst_46660);

return statearr_46683;
})();
var statearr_46684_48100 = state_46680__$1;
(statearr_46684_48100[(2)] = null);

(statearr_46684_48100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (4))){
var inst_46663 = (state_46680[(8)]);
var inst_46663__$1 = (state_46680[(2)]);
var inst_46664 = (inst_46663__$1 == null);
var state_46680__$1 = (function (){var statearr_46685 = state_46680;
(statearr_46685[(8)] = inst_46663__$1);

return statearr_46685;
})();
if(cljs.core.truth_(inst_46664)){
var statearr_46686_48102 = state_46680__$1;
(statearr_46686_48102[(1)] = (5));

} else {
var statearr_46687_48103 = state_46680__$1;
(statearr_46687_48103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (6))){
var inst_46660 = (state_46680[(7)]);
var inst_46667 = (state_46680[(9)]);
var inst_46663 = (state_46680[(8)]);
var inst_46667__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46660,inst_46663) : f.call(null,inst_46660,inst_46663));
var inst_46668 = cljs.core.reduced_QMARK_(inst_46667__$1);
var state_46680__$1 = (function (){var statearr_46688 = state_46680;
(statearr_46688[(9)] = inst_46667__$1);

return statearr_46688;
})();
if(inst_46668){
var statearr_46689_48104 = state_46680__$1;
(statearr_46689_48104[(1)] = (8));

} else {
var statearr_46690_48105 = state_46680__$1;
(statearr_46690_48105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (3))){
var inst_46678 = (state_46680[(2)]);
var state_46680__$1 = state_46680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46680__$1,inst_46678);
} else {
if((state_val_46681 === (2))){
var state_46680__$1 = state_46680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46680__$1,(4),ch);
} else {
if((state_val_46681 === (9))){
var inst_46667 = (state_46680[(9)]);
var inst_46660 = inst_46667;
var state_46680__$1 = (function (){var statearr_46691 = state_46680;
(statearr_46691[(7)] = inst_46660);

return statearr_46691;
})();
var statearr_46692_48106 = state_46680__$1;
(statearr_46692_48106[(2)] = null);

(statearr_46692_48106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (5))){
var inst_46660 = (state_46680[(7)]);
var state_46680__$1 = state_46680;
var statearr_46693_48107 = state_46680__$1;
(statearr_46693_48107[(2)] = inst_46660);

(statearr_46693_48107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (10))){
var inst_46674 = (state_46680[(2)]);
var state_46680__$1 = state_46680;
var statearr_46694_48108 = state_46680__$1;
(statearr_46694_48108[(2)] = inst_46674);

(statearr_46694_48108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (8))){
var inst_46667 = (state_46680[(9)]);
var inst_46670 = cljs.core.deref(inst_46667);
var state_46680__$1 = state_46680;
var statearr_46695_48109 = state_46680__$1;
(statearr_46695_48109[(2)] = inst_46670);

(statearr_46695_48109[(1)] = (10));


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
});})(c__46301__auto__))
;
return ((function (switch__46200__auto__,c__46301__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46201__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46201__auto____0 = (function (){
var statearr_46696 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46696[(0)] = cljs$core$async$reduce_$_state_machine__46201__auto__);

(statearr_46696[(1)] = (1));

return statearr_46696;
});
var cljs$core$async$reduce_$_state_machine__46201__auto____1 = (function (state_46680){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46680);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46697){if((e46697 instanceof Object)){
var ex__46204__auto__ = e46697;
var statearr_46698_48110 = state_46680;
(statearr_46698_48110[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48111 = state_46680;
state_46680 = G__48111;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46201__auto__ = function(state_46680){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46201__auto____1.call(this,state_46680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46201__auto____0;
cljs$core$async$reduce_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46201__auto____1;
return cljs$core$async$reduce_$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto__))
})();
var state__46303__auto__ = (function (){var statearr_46699 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46699[(6)] = c__46301__auto__);

return statearr_46699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto__))
);

return c__46301__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46301__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto__,f__$1){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto__,f__$1){
return (function (state_46705){
var state_val_46706 = (state_46705[(1)]);
if((state_val_46706 === (1))){
var inst_46700 = cljs.core.async.reduce(f__$1,init,ch);
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46705__$1,(2),inst_46700);
} else {
if((state_val_46706 === (2))){
var inst_46702 = (state_46705[(2)]);
var inst_46703 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46702) : f__$1.call(null,inst_46702));
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46705__$1,inst_46703);
} else {
return null;
}
}
});})(c__46301__auto__,f__$1))
;
return ((function (switch__46200__auto__,c__46301__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46201__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46201__auto____0 = (function (){
var statearr_46707 = [null,null,null,null,null,null,null];
(statearr_46707[(0)] = cljs$core$async$transduce_$_state_machine__46201__auto__);

(statearr_46707[(1)] = (1));

return statearr_46707;
});
var cljs$core$async$transduce_$_state_machine__46201__auto____1 = (function (state_46705){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46705);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46708){if((e46708 instanceof Object)){
var ex__46204__auto__ = e46708;
var statearr_46709_48114 = state_46705;
(statearr_46709_48114[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48115 = state_46705;
state_46705 = G__48115;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46201__auto__ = function(state_46705){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46201__auto____1.call(this,state_46705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46201__auto____0;
cljs$core$async$transduce_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46201__auto____1;
return cljs$core$async$transduce_$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto__,f__$1))
})();
var state__46303__auto__ = (function (){var statearr_46710 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46710[(6)] = c__46301__auto__);

return statearr_46710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto__,f__$1))
);

return c__46301__auto__;
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
var G__46712 = arguments.length;
switch (G__46712) {
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
var c__46301__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto__){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto__){
return (function (state_46737){
var state_val_46738 = (state_46737[(1)]);
if((state_val_46738 === (7))){
var inst_46719 = (state_46737[(2)]);
var state_46737__$1 = state_46737;
var statearr_46739_48120 = state_46737__$1;
(statearr_46739_48120[(2)] = inst_46719);

(statearr_46739_48120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (1))){
var inst_46713 = cljs.core.seq(coll);
var inst_46714 = inst_46713;
var state_46737__$1 = (function (){var statearr_46740 = state_46737;
(statearr_46740[(7)] = inst_46714);

return statearr_46740;
})();
var statearr_46741_48121 = state_46737__$1;
(statearr_46741_48121[(2)] = null);

(statearr_46741_48121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (4))){
var inst_46714 = (state_46737[(7)]);
var inst_46717 = cljs.core.first(inst_46714);
var state_46737__$1 = state_46737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46737__$1,(7),ch,inst_46717);
} else {
if((state_val_46738 === (13))){
var inst_46731 = (state_46737[(2)]);
var state_46737__$1 = state_46737;
var statearr_46742_48125 = state_46737__$1;
(statearr_46742_48125[(2)] = inst_46731);

(statearr_46742_48125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (6))){
var inst_46722 = (state_46737[(2)]);
var state_46737__$1 = state_46737;
if(cljs.core.truth_(inst_46722)){
var statearr_46743_48127 = state_46737__$1;
(statearr_46743_48127[(1)] = (8));

} else {
var statearr_46744_48128 = state_46737__$1;
(statearr_46744_48128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (3))){
var inst_46735 = (state_46737[(2)]);
var state_46737__$1 = state_46737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46737__$1,inst_46735);
} else {
if((state_val_46738 === (12))){
var state_46737__$1 = state_46737;
var statearr_46745_48130 = state_46737__$1;
(statearr_46745_48130[(2)] = null);

(statearr_46745_48130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (2))){
var inst_46714 = (state_46737[(7)]);
var state_46737__$1 = state_46737;
if(cljs.core.truth_(inst_46714)){
var statearr_46746_48132 = state_46737__$1;
(statearr_46746_48132[(1)] = (4));

} else {
var statearr_46747_48133 = state_46737__$1;
(statearr_46747_48133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (11))){
var inst_46728 = cljs.core.async.close_BANG_(ch);
var state_46737__$1 = state_46737;
var statearr_46748_48134 = state_46737__$1;
(statearr_46748_48134[(2)] = inst_46728);

(statearr_46748_48134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (9))){
var state_46737__$1 = state_46737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46749_48135 = state_46737__$1;
(statearr_46749_48135[(1)] = (11));

} else {
var statearr_46750_48136 = state_46737__$1;
(statearr_46750_48136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (5))){
var inst_46714 = (state_46737[(7)]);
var state_46737__$1 = state_46737;
var statearr_46751_48137 = state_46737__$1;
(statearr_46751_48137[(2)] = inst_46714);

(statearr_46751_48137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (10))){
var inst_46733 = (state_46737[(2)]);
var state_46737__$1 = state_46737;
var statearr_46752_48138 = state_46737__$1;
(statearr_46752_48138[(2)] = inst_46733);

(statearr_46752_48138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46738 === (8))){
var inst_46714 = (state_46737[(7)]);
var inst_46724 = cljs.core.next(inst_46714);
var inst_46714__$1 = inst_46724;
var state_46737__$1 = (function (){var statearr_46753 = state_46737;
(statearr_46753[(7)] = inst_46714__$1);

return statearr_46753;
})();
var statearr_46754_48139 = state_46737__$1;
(statearr_46754_48139[(2)] = null);

(statearr_46754_48139[(1)] = (2));


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
});})(c__46301__auto__))
;
return ((function (switch__46200__auto__,c__46301__auto__){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_46755 = [null,null,null,null,null,null,null,null];
(statearr_46755[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_46755[(1)] = (1));

return statearr_46755;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_46737){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46737);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46756){if((e46756 instanceof Object)){
var ex__46204__auto__ = e46756;
var statearr_46757_48141 = state_46737;
(statearr_46757_48141[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48145 = state_46737;
state_46737 = G__48145;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_46737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_46737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto__))
})();
var state__46303__auto__ = (function (){var statearr_46758 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46758[(6)] = c__46301__auto__);

return statearr_46758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto__))
);

return c__46301__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46759 = (function (ch,cs,meta46760){
this.ch = ch;
this.cs = cs;
this.meta46760 = meta46760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46761,meta46760__$1){
var self__ = this;
var _46761__$1 = this;
return (new cljs.core.async.t_cljs$core$async46759(self__.ch,self__.cs,meta46760__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46761){
var self__ = this;
var _46761__$1 = this;
return self__.meta46760;
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46760","meta46760",942829838,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46759";

cljs.core.async.t_cljs$core$async46759.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46759");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46759.
 */
cljs.core.async.__GT_t_cljs$core$async46759 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46759(ch__$1,cs__$1,meta46760){
return (new cljs.core.async.t_cljs$core$async46759(ch__$1,cs__$1,meta46760));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46759(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46301__auto___48169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48169,cs,m,dchan,dctr,done){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48169,cs,m,dchan,dctr,done){
return (function (state_46896){
var state_val_46897 = (state_46896[(1)]);
if((state_val_46897 === (7))){
var inst_46892 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46898_48170 = state_46896__$1;
(statearr_46898_48170[(2)] = inst_46892);

(statearr_46898_48170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (20))){
var inst_46795 = (state_46896[(7)]);
var inst_46807 = cljs.core.first(inst_46795);
var inst_46808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46807,(0),null);
var inst_46809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46807,(1),null);
var state_46896__$1 = (function (){var statearr_46899 = state_46896;
(statearr_46899[(8)] = inst_46808);

return statearr_46899;
})();
if(cljs.core.truth_(inst_46809)){
var statearr_46900_48171 = state_46896__$1;
(statearr_46900_48171[(1)] = (22));

} else {
var statearr_46901_48172 = state_46896__$1;
(statearr_46901_48172[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (27))){
var inst_46839 = (state_46896[(9)]);
var inst_46844 = (state_46896[(10)]);
var inst_46764 = (state_46896[(11)]);
var inst_46837 = (state_46896[(12)]);
var inst_46844__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46837,inst_46839);
var inst_46845 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46844__$1,inst_46764,done);
var state_46896__$1 = (function (){var statearr_46902 = state_46896;
(statearr_46902[(10)] = inst_46844__$1);

return statearr_46902;
})();
if(cljs.core.truth_(inst_46845)){
var statearr_46903_48173 = state_46896__$1;
(statearr_46903_48173[(1)] = (30));

} else {
var statearr_46904_48174 = state_46896__$1;
(statearr_46904_48174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (1))){
var state_46896__$1 = state_46896;
var statearr_46905_48175 = state_46896__$1;
(statearr_46905_48175[(2)] = null);

(statearr_46905_48175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (24))){
var inst_46795 = (state_46896[(7)]);
var inst_46814 = (state_46896[(2)]);
var inst_46815 = cljs.core.next(inst_46795);
var inst_46773 = inst_46815;
var inst_46774 = null;
var inst_46775 = (0);
var inst_46776 = (0);
var state_46896__$1 = (function (){var statearr_46906 = state_46896;
(statearr_46906[(13)] = inst_46773);

(statearr_46906[(14)] = inst_46774);

(statearr_46906[(15)] = inst_46776);

(statearr_46906[(16)] = inst_46775);

(statearr_46906[(17)] = inst_46814);

return statearr_46906;
})();
var statearr_46907_48176 = state_46896__$1;
(statearr_46907_48176[(2)] = null);

(statearr_46907_48176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (39))){
var state_46896__$1 = state_46896;
var statearr_46911_48177 = state_46896__$1;
(statearr_46911_48177[(2)] = null);

(statearr_46911_48177[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (4))){
var inst_46764 = (state_46896[(11)]);
var inst_46764__$1 = (state_46896[(2)]);
var inst_46765 = (inst_46764__$1 == null);
var state_46896__$1 = (function (){var statearr_46912 = state_46896;
(statearr_46912[(11)] = inst_46764__$1);

return statearr_46912;
})();
if(cljs.core.truth_(inst_46765)){
var statearr_46913_48178 = state_46896__$1;
(statearr_46913_48178[(1)] = (5));

} else {
var statearr_46914_48179 = state_46896__$1;
(statearr_46914_48179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (15))){
var inst_46773 = (state_46896[(13)]);
var inst_46774 = (state_46896[(14)]);
var inst_46776 = (state_46896[(15)]);
var inst_46775 = (state_46896[(16)]);
var inst_46791 = (state_46896[(2)]);
var inst_46792 = (inst_46776 + (1));
var tmp46908 = inst_46773;
var tmp46909 = inst_46774;
var tmp46910 = inst_46775;
var inst_46773__$1 = tmp46908;
var inst_46774__$1 = tmp46909;
var inst_46775__$1 = tmp46910;
var inst_46776__$1 = inst_46792;
var state_46896__$1 = (function (){var statearr_46915 = state_46896;
(statearr_46915[(13)] = inst_46773__$1);

(statearr_46915[(14)] = inst_46774__$1);

(statearr_46915[(15)] = inst_46776__$1);

(statearr_46915[(16)] = inst_46775__$1);

(statearr_46915[(18)] = inst_46791);

return statearr_46915;
})();
var statearr_46916_48180 = state_46896__$1;
(statearr_46916_48180[(2)] = null);

(statearr_46916_48180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (21))){
var inst_46818 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46920_48181 = state_46896__$1;
(statearr_46920_48181[(2)] = inst_46818);

(statearr_46920_48181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (31))){
var inst_46844 = (state_46896[(10)]);
var inst_46848 = done(null);
var inst_46849 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46844);
var state_46896__$1 = (function (){var statearr_46921 = state_46896;
(statearr_46921[(19)] = inst_46848);

return statearr_46921;
})();
var statearr_46922_48182 = state_46896__$1;
(statearr_46922_48182[(2)] = inst_46849);

(statearr_46922_48182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (32))){
var inst_46839 = (state_46896[(9)]);
var inst_46838 = (state_46896[(20)]);
var inst_46836 = (state_46896[(21)]);
var inst_46837 = (state_46896[(12)]);
var inst_46851 = (state_46896[(2)]);
var inst_46852 = (inst_46839 + (1));
var tmp46917 = inst_46838;
var tmp46918 = inst_46836;
var tmp46919 = inst_46837;
var inst_46836__$1 = tmp46918;
var inst_46837__$1 = tmp46919;
var inst_46838__$1 = tmp46917;
var inst_46839__$1 = inst_46852;
var state_46896__$1 = (function (){var statearr_46923 = state_46896;
(statearr_46923[(9)] = inst_46839__$1);

(statearr_46923[(20)] = inst_46838__$1);

(statearr_46923[(21)] = inst_46836__$1);

(statearr_46923[(22)] = inst_46851);

(statearr_46923[(12)] = inst_46837__$1);

return statearr_46923;
})();
var statearr_46924_48183 = state_46896__$1;
(statearr_46924_48183[(2)] = null);

(statearr_46924_48183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (40))){
var inst_46864 = (state_46896[(23)]);
var inst_46868 = done(null);
var inst_46869 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46864);
var state_46896__$1 = (function (){var statearr_46925 = state_46896;
(statearr_46925[(24)] = inst_46868);

return statearr_46925;
})();
var statearr_46926_48184 = state_46896__$1;
(statearr_46926_48184[(2)] = inst_46869);

(statearr_46926_48184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (33))){
var inst_46855 = (state_46896[(25)]);
var inst_46857 = cljs.core.chunked_seq_QMARK_(inst_46855);
var state_46896__$1 = state_46896;
if(inst_46857){
var statearr_46927_48185 = state_46896__$1;
(statearr_46927_48185[(1)] = (36));

} else {
var statearr_46928_48186 = state_46896__$1;
(statearr_46928_48186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (13))){
var inst_46785 = (state_46896[(26)]);
var inst_46788 = cljs.core.async.close_BANG_(inst_46785);
var state_46896__$1 = state_46896;
var statearr_46929_48187 = state_46896__$1;
(statearr_46929_48187[(2)] = inst_46788);

(statearr_46929_48187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (22))){
var inst_46808 = (state_46896[(8)]);
var inst_46811 = cljs.core.async.close_BANG_(inst_46808);
var state_46896__$1 = state_46896;
var statearr_46930_48188 = state_46896__$1;
(statearr_46930_48188[(2)] = inst_46811);

(statearr_46930_48188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (36))){
var inst_46855 = (state_46896[(25)]);
var inst_46859 = cljs.core.chunk_first(inst_46855);
var inst_46860 = cljs.core.chunk_rest(inst_46855);
var inst_46861 = cljs.core.count(inst_46859);
var inst_46836 = inst_46860;
var inst_46837 = inst_46859;
var inst_46838 = inst_46861;
var inst_46839 = (0);
var state_46896__$1 = (function (){var statearr_46931 = state_46896;
(statearr_46931[(9)] = inst_46839);

(statearr_46931[(20)] = inst_46838);

(statearr_46931[(21)] = inst_46836);

(statearr_46931[(12)] = inst_46837);

return statearr_46931;
})();
var statearr_46932_48189 = state_46896__$1;
(statearr_46932_48189[(2)] = null);

(statearr_46932_48189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (41))){
var inst_46855 = (state_46896[(25)]);
var inst_46871 = (state_46896[(2)]);
var inst_46872 = cljs.core.next(inst_46855);
var inst_46836 = inst_46872;
var inst_46837 = null;
var inst_46838 = (0);
var inst_46839 = (0);
var state_46896__$1 = (function (){var statearr_46933 = state_46896;
(statearr_46933[(9)] = inst_46839);

(statearr_46933[(20)] = inst_46838);

(statearr_46933[(21)] = inst_46836);

(statearr_46933[(12)] = inst_46837);

(statearr_46933[(27)] = inst_46871);

return statearr_46933;
})();
var statearr_46934_48196 = state_46896__$1;
(statearr_46934_48196[(2)] = null);

(statearr_46934_48196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (43))){
var state_46896__$1 = state_46896;
var statearr_46935_48197 = state_46896__$1;
(statearr_46935_48197[(2)] = null);

(statearr_46935_48197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (29))){
var inst_46880 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46936_48198 = state_46896__$1;
(statearr_46936_48198[(2)] = inst_46880);

(statearr_46936_48198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (44))){
var inst_46889 = (state_46896[(2)]);
var state_46896__$1 = (function (){var statearr_46937 = state_46896;
(statearr_46937[(28)] = inst_46889);

return statearr_46937;
})();
var statearr_46938_48199 = state_46896__$1;
(statearr_46938_48199[(2)] = null);

(statearr_46938_48199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (6))){
var inst_46828 = (state_46896[(29)]);
var inst_46827 = cljs.core.deref(cs);
var inst_46828__$1 = cljs.core.keys(inst_46827);
var inst_46829 = cljs.core.count(inst_46828__$1);
var inst_46830 = cljs.core.reset_BANG_(dctr,inst_46829);
var inst_46835 = cljs.core.seq(inst_46828__$1);
var inst_46836 = inst_46835;
var inst_46837 = null;
var inst_46838 = (0);
var inst_46839 = (0);
var state_46896__$1 = (function (){var statearr_46939 = state_46896;
(statearr_46939[(9)] = inst_46839);

(statearr_46939[(20)] = inst_46838);

(statearr_46939[(21)] = inst_46836);

(statearr_46939[(30)] = inst_46830);

(statearr_46939[(12)] = inst_46837);

(statearr_46939[(29)] = inst_46828__$1);

return statearr_46939;
})();
var statearr_46940_48200 = state_46896__$1;
(statearr_46940_48200[(2)] = null);

(statearr_46940_48200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (28))){
var inst_46836 = (state_46896[(21)]);
var inst_46855 = (state_46896[(25)]);
var inst_46855__$1 = cljs.core.seq(inst_46836);
var state_46896__$1 = (function (){var statearr_46941 = state_46896;
(statearr_46941[(25)] = inst_46855__$1);

return statearr_46941;
})();
if(inst_46855__$1){
var statearr_46942_48201 = state_46896__$1;
(statearr_46942_48201[(1)] = (33));

} else {
var statearr_46943_48202 = state_46896__$1;
(statearr_46943_48202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (25))){
var inst_46839 = (state_46896[(9)]);
var inst_46838 = (state_46896[(20)]);
var inst_46841 = (inst_46839 < inst_46838);
var inst_46842 = inst_46841;
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46842)){
var statearr_46944_48203 = state_46896__$1;
(statearr_46944_48203[(1)] = (27));

} else {
var statearr_46945_48204 = state_46896__$1;
(statearr_46945_48204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (34))){
var state_46896__$1 = state_46896;
var statearr_46946_48205 = state_46896__$1;
(statearr_46946_48205[(2)] = null);

(statearr_46946_48205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (17))){
var state_46896__$1 = state_46896;
var statearr_46947_48212 = state_46896__$1;
(statearr_46947_48212[(2)] = null);

(statearr_46947_48212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (3))){
var inst_46894 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46896__$1,inst_46894);
} else {
if((state_val_46897 === (12))){
var inst_46823 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46948_48213 = state_46896__$1;
(statearr_46948_48213[(2)] = inst_46823);

(statearr_46948_48213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (2))){
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46896__$1,(4),ch);
} else {
if((state_val_46897 === (23))){
var state_46896__$1 = state_46896;
var statearr_46949_48214 = state_46896__$1;
(statearr_46949_48214[(2)] = null);

(statearr_46949_48214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (35))){
var inst_46878 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46950_48215 = state_46896__$1;
(statearr_46950_48215[(2)] = inst_46878);

(statearr_46950_48215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (19))){
var inst_46795 = (state_46896[(7)]);
var inst_46799 = cljs.core.chunk_first(inst_46795);
var inst_46800 = cljs.core.chunk_rest(inst_46795);
var inst_46801 = cljs.core.count(inst_46799);
var inst_46773 = inst_46800;
var inst_46774 = inst_46799;
var inst_46775 = inst_46801;
var inst_46776 = (0);
var state_46896__$1 = (function (){var statearr_46951 = state_46896;
(statearr_46951[(13)] = inst_46773);

(statearr_46951[(14)] = inst_46774);

(statearr_46951[(15)] = inst_46776);

(statearr_46951[(16)] = inst_46775);

return statearr_46951;
})();
var statearr_46952_48216 = state_46896__$1;
(statearr_46952_48216[(2)] = null);

(statearr_46952_48216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (11))){
var inst_46773 = (state_46896[(13)]);
var inst_46795 = (state_46896[(7)]);
var inst_46795__$1 = cljs.core.seq(inst_46773);
var state_46896__$1 = (function (){var statearr_46953 = state_46896;
(statearr_46953[(7)] = inst_46795__$1);

return statearr_46953;
})();
if(inst_46795__$1){
var statearr_46954_48217 = state_46896__$1;
(statearr_46954_48217[(1)] = (16));

} else {
var statearr_46955_48218 = state_46896__$1;
(statearr_46955_48218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (9))){
var inst_46825 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46956_48219 = state_46896__$1;
(statearr_46956_48219[(2)] = inst_46825);

(statearr_46956_48219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (5))){
var inst_46771 = cljs.core.deref(cs);
var inst_46772 = cljs.core.seq(inst_46771);
var inst_46773 = inst_46772;
var inst_46774 = null;
var inst_46775 = (0);
var inst_46776 = (0);
var state_46896__$1 = (function (){var statearr_46957 = state_46896;
(statearr_46957[(13)] = inst_46773);

(statearr_46957[(14)] = inst_46774);

(statearr_46957[(15)] = inst_46776);

(statearr_46957[(16)] = inst_46775);

return statearr_46957;
})();
var statearr_46958_48220 = state_46896__$1;
(statearr_46958_48220[(2)] = null);

(statearr_46958_48220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (14))){
var state_46896__$1 = state_46896;
var statearr_46959_48221 = state_46896__$1;
(statearr_46959_48221[(2)] = null);

(statearr_46959_48221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (45))){
var inst_46886 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46960_48222 = state_46896__$1;
(statearr_46960_48222[(2)] = inst_46886);

(statearr_46960_48222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (26))){
var inst_46828 = (state_46896[(29)]);
var inst_46882 = (state_46896[(2)]);
var inst_46883 = cljs.core.seq(inst_46828);
var state_46896__$1 = (function (){var statearr_46961 = state_46896;
(statearr_46961[(31)] = inst_46882);

return statearr_46961;
})();
if(inst_46883){
var statearr_46962_48223 = state_46896__$1;
(statearr_46962_48223[(1)] = (42));

} else {
var statearr_46963_48224 = state_46896__$1;
(statearr_46963_48224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (16))){
var inst_46795 = (state_46896[(7)]);
var inst_46797 = cljs.core.chunked_seq_QMARK_(inst_46795);
var state_46896__$1 = state_46896;
if(inst_46797){
var statearr_46964_48225 = state_46896__$1;
(statearr_46964_48225[(1)] = (19));

} else {
var statearr_46965_48226 = state_46896__$1;
(statearr_46965_48226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (38))){
var inst_46875 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46966_48227 = state_46896__$1;
(statearr_46966_48227[(2)] = inst_46875);

(statearr_46966_48227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (30))){
var state_46896__$1 = state_46896;
var statearr_46967_48228 = state_46896__$1;
(statearr_46967_48228[(2)] = null);

(statearr_46967_48228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (10))){
var inst_46774 = (state_46896[(14)]);
var inst_46776 = (state_46896[(15)]);
var inst_46784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46774,inst_46776);
var inst_46785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46784,(0),null);
var inst_46786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46784,(1),null);
var state_46896__$1 = (function (){var statearr_46968 = state_46896;
(statearr_46968[(26)] = inst_46785);

return statearr_46968;
})();
if(cljs.core.truth_(inst_46786)){
var statearr_46969_48229 = state_46896__$1;
(statearr_46969_48229[(1)] = (13));

} else {
var statearr_46970_48230 = state_46896__$1;
(statearr_46970_48230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (18))){
var inst_46821 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46971_48232 = state_46896__$1;
(statearr_46971_48232[(2)] = inst_46821);

(statearr_46971_48232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (42))){
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46896__$1,(45),dchan);
} else {
if((state_val_46897 === (37))){
var inst_46864 = (state_46896[(23)]);
var inst_46764 = (state_46896[(11)]);
var inst_46855 = (state_46896[(25)]);
var inst_46864__$1 = cljs.core.first(inst_46855);
var inst_46865 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46864__$1,inst_46764,done);
var state_46896__$1 = (function (){var statearr_46972 = state_46896;
(statearr_46972[(23)] = inst_46864__$1);

return statearr_46972;
})();
if(cljs.core.truth_(inst_46865)){
var statearr_46973_48234 = state_46896__$1;
(statearr_46973_48234[(1)] = (39));

} else {
var statearr_46974_48235 = state_46896__$1;
(statearr_46974_48235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (8))){
var inst_46776 = (state_46896[(15)]);
var inst_46775 = (state_46896[(16)]);
var inst_46778 = (inst_46776 < inst_46775);
var inst_46779 = inst_46778;
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46779)){
var statearr_46975_48240 = state_46896__$1;
(statearr_46975_48240[(1)] = (10));

} else {
var statearr_46976_48241 = state_46896__$1;
(statearr_46976_48241[(1)] = (11));

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
});})(c__46301__auto___48169,cs,m,dchan,dctr,done))
;
return ((function (switch__46200__auto__,c__46301__auto___48169,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46201__auto__ = null;
var cljs$core$async$mult_$_state_machine__46201__auto____0 = (function (){
var statearr_46977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46977[(0)] = cljs$core$async$mult_$_state_machine__46201__auto__);

(statearr_46977[(1)] = (1));

return statearr_46977;
});
var cljs$core$async$mult_$_state_machine__46201__auto____1 = (function (state_46896){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_46896);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e46978){if((e46978 instanceof Object)){
var ex__46204__auto__ = e46978;
var statearr_46979_48242 = state_46896;
(statearr_46979_48242[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48243 = state_46896;
state_46896 = G__48243;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46201__auto__ = function(state_46896){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46201__auto____1.call(this,state_46896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46201__auto____0;
cljs$core$async$mult_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46201__auto____1;
return cljs$core$async$mult_$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48169,cs,m,dchan,dctr,done))
})();
var state__46303__auto__ = (function (){var statearr_46980 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_46980[(6)] = c__46301__auto___48169);

return statearr_46980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48169,cs,m,dchan,dctr,done))
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
var G__46982 = arguments.length;
switch (G__46982) {
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
var len__4730__auto___48251 = arguments.length;
var i__4731__auto___48252 = (0);
while(true){
if((i__4731__auto___48252 < len__4730__auto___48251)){
args__4736__auto__.push((arguments[i__4731__auto___48252]));

var G__48253 = (i__4731__auto___48252 + (1));
i__4731__auto___48252 = G__48253;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46987){
var map__46988 = p__46987;
var map__46988__$1 = (((((!((map__46988 == null))))?(((((map__46988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46988):map__46988);
var opts = map__46988__$1;
var statearr_46990_48254 = state;
(statearr_46990_48254[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__46988,map__46988__$1,opts){
return (function (val){
var statearr_46991_48256 = state;
(statearr_46991_48256[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__46988,map__46988__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46992_48258 = state;
(statearr_46992_48258[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46983){
var G__46984 = cljs.core.first(seq46983);
var seq46983__$1 = cljs.core.next(seq46983);
var G__46985 = cljs.core.first(seq46983__$1);
var seq46983__$2 = cljs.core.next(seq46983__$1);
var G__46986 = cljs.core.first(seq46983__$2);
var seq46983__$3 = cljs.core.next(seq46983__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46984,G__46985,G__46986,seq46983__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46993 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46994){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46994 = meta46994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46995,meta46994__$1){
var self__ = this;
var _46995__$1 = this;
return (new cljs.core.async.t_cljs$core$async46993(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46994__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46995){
var self__ = this;
var _46995__$1 = this;
return self__.meta46994;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46993.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46994","meta46994",-1541754380,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46993";

cljs.core.async.t_cljs$core$async46993.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46993");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46993.
 */
cljs.core.async.__GT_t_cljs$core$async46993 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46993(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46994){
return (new cljs.core.async.t_cljs$core$async46993(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46994));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46993(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46301__auto___48264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47097){
var state_val_47098 = (state_47097[(1)]);
if((state_val_47098 === (7))){
var inst_47012 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47099_48269 = state_47097__$1;
(statearr_47099_48269[(2)] = inst_47012);

(statearr_47099_48269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (20))){
var inst_47024 = (state_47097[(7)]);
var state_47097__$1 = state_47097;
var statearr_47100_48273 = state_47097__$1;
(statearr_47100_48273[(2)] = inst_47024);

(statearr_47100_48273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (27))){
var state_47097__$1 = state_47097;
var statearr_47101_48274 = state_47097__$1;
(statearr_47101_48274[(2)] = null);

(statearr_47101_48274[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (1))){
var inst_46999 = (state_47097[(8)]);
var inst_46999__$1 = calc_state();
var inst_47001 = (inst_46999__$1 == null);
var inst_47002 = cljs.core.not(inst_47001);
var state_47097__$1 = (function (){var statearr_47102 = state_47097;
(statearr_47102[(8)] = inst_46999__$1);

return statearr_47102;
})();
if(inst_47002){
var statearr_47103_48275 = state_47097__$1;
(statearr_47103_48275[(1)] = (2));

} else {
var statearr_47104_48279 = state_47097__$1;
(statearr_47104_48279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (24))){
var inst_47057 = (state_47097[(9)]);
var inst_47048 = (state_47097[(10)]);
var inst_47071 = (state_47097[(11)]);
var inst_47071__$1 = (inst_47048.cljs$core$IFn$_invoke$arity$1 ? inst_47048.cljs$core$IFn$_invoke$arity$1(inst_47057) : inst_47048.call(null,inst_47057));
var state_47097__$1 = (function (){var statearr_47105 = state_47097;
(statearr_47105[(11)] = inst_47071__$1);

return statearr_47105;
})();
if(cljs.core.truth_(inst_47071__$1)){
var statearr_47106_48283 = state_47097__$1;
(statearr_47106_48283[(1)] = (29));

} else {
var statearr_47107_48284 = state_47097__$1;
(statearr_47107_48284[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (4))){
var inst_47015 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47015)){
var statearr_47108_48285 = state_47097__$1;
(statearr_47108_48285[(1)] = (8));

} else {
var statearr_47109_48286 = state_47097__$1;
(statearr_47109_48286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (15))){
var inst_47042 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47042)){
var statearr_47110_48290 = state_47097__$1;
(statearr_47110_48290[(1)] = (19));

} else {
var statearr_47111_48291 = state_47097__$1;
(statearr_47111_48291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (21))){
var inst_47047 = (state_47097[(12)]);
var inst_47047__$1 = (state_47097[(2)]);
var inst_47048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47047__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47047__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47047__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47097__$1 = (function (){var statearr_47112 = state_47097;
(statearr_47112[(13)] = inst_47049);

(statearr_47112[(10)] = inst_47048);

(statearr_47112[(12)] = inst_47047__$1);

return statearr_47112;
})();
return cljs.core.async.ioc_alts_BANG_(state_47097__$1,(22),inst_47050);
} else {
if((state_val_47098 === (31))){
var inst_47079 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47079)){
var statearr_47113_48296 = state_47097__$1;
(statearr_47113_48296[(1)] = (32));

} else {
var statearr_47114_48297 = state_47097__$1;
(statearr_47114_48297[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (32))){
var inst_47056 = (state_47097[(14)]);
var state_47097__$1 = state_47097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47097__$1,(35),out,inst_47056);
} else {
if((state_val_47098 === (33))){
var inst_47047 = (state_47097[(12)]);
var inst_47024 = inst_47047;
var state_47097__$1 = (function (){var statearr_47115 = state_47097;
(statearr_47115[(7)] = inst_47024);

return statearr_47115;
})();
var statearr_47116_48298 = state_47097__$1;
(statearr_47116_48298[(2)] = null);

(statearr_47116_48298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (13))){
var inst_47024 = (state_47097[(7)]);
var inst_47031 = inst_47024.cljs$lang$protocol_mask$partition0$;
var inst_47032 = (inst_47031 & (64));
var inst_47033 = inst_47024.cljs$core$ISeq$;
var inst_47034 = (cljs.core.PROTOCOL_SENTINEL === inst_47033);
var inst_47035 = ((inst_47032) || (inst_47034));
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47035)){
var statearr_47117_48299 = state_47097__$1;
(statearr_47117_48299[(1)] = (16));

} else {
var statearr_47118_48300 = state_47097__$1;
(statearr_47118_48300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (22))){
var inst_47057 = (state_47097[(9)]);
var inst_47056 = (state_47097[(14)]);
var inst_47055 = (state_47097[(2)]);
var inst_47056__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47055,(0),null);
var inst_47057__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47055,(1),null);
var inst_47058 = (inst_47056__$1 == null);
var inst_47059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47057__$1,change);
var inst_47060 = ((inst_47058) || (inst_47059));
var state_47097__$1 = (function (){var statearr_47119 = state_47097;
(statearr_47119[(9)] = inst_47057__$1);

(statearr_47119[(14)] = inst_47056__$1);

return statearr_47119;
})();
if(cljs.core.truth_(inst_47060)){
var statearr_47120_48301 = state_47097__$1;
(statearr_47120_48301[(1)] = (23));

} else {
var statearr_47121_48302 = state_47097__$1;
(statearr_47121_48302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (36))){
var inst_47047 = (state_47097[(12)]);
var inst_47024 = inst_47047;
var state_47097__$1 = (function (){var statearr_47122 = state_47097;
(statearr_47122[(7)] = inst_47024);

return statearr_47122;
})();
var statearr_47123_48303 = state_47097__$1;
(statearr_47123_48303[(2)] = null);

(statearr_47123_48303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (29))){
var inst_47071 = (state_47097[(11)]);
var state_47097__$1 = state_47097;
var statearr_47124_48304 = state_47097__$1;
(statearr_47124_48304[(2)] = inst_47071);

(statearr_47124_48304[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (6))){
var state_47097__$1 = state_47097;
var statearr_47125_48305 = state_47097__$1;
(statearr_47125_48305[(2)] = false);

(statearr_47125_48305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (28))){
var inst_47067 = (state_47097[(2)]);
var inst_47068 = calc_state();
var inst_47024 = inst_47068;
var state_47097__$1 = (function (){var statearr_47126 = state_47097;
(statearr_47126[(7)] = inst_47024);

(statearr_47126[(15)] = inst_47067);

return statearr_47126;
})();
var statearr_47127_48306 = state_47097__$1;
(statearr_47127_48306[(2)] = null);

(statearr_47127_48306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (25))){
var inst_47093 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47128_48307 = state_47097__$1;
(statearr_47128_48307[(2)] = inst_47093);

(statearr_47128_48307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (34))){
var inst_47091 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47129_48308 = state_47097__$1;
(statearr_47129_48308[(2)] = inst_47091);

(statearr_47129_48308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (17))){
var state_47097__$1 = state_47097;
var statearr_47130_48309 = state_47097__$1;
(statearr_47130_48309[(2)] = false);

(statearr_47130_48309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (3))){
var state_47097__$1 = state_47097;
var statearr_47131_48310 = state_47097__$1;
(statearr_47131_48310[(2)] = false);

(statearr_47131_48310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (12))){
var inst_47095 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47097__$1,inst_47095);
} else {
if((state_val_47098 === (2))){
var inst_46999 = (state_47097[(8)]);
var inst_47004 = inst_46999.cljs$lang$protocol_mask$partition0$;
var inst_47005 = (inst_47004 & (64));
var inst_47006 = inst_46999.cljs$core$ISeq$;
var inst_47007 = (cljs.core.PROTOCOL_SENTINEL === inst_47006);
var inst_47008 = ((inst_47005) || (inst_47007));
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47008)){
var statearr_47132_48311 = state_47097__$1;
(statearr_47132_48311[(1)] = (5));

} else {
var statearr_47133_48312 = state_47097__$1;
(statearr_47133_48312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (23))){
var inst_47056 = (state_47097[(14)]);
var inst_47062 = (inst_47056 == null);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47062)){
var statearr_47134_48313 = state_47097__$1;
(statearr_47134_48313[(1)] = (26));

} else {
var statearr_47135_48314 = state_47097__$1;
(statearr_47135_48314[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (35))){
var inst_47082 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47082)){
var statearr_47136_48315 = state_47097__$1;
(statearr_47136_48315[(1)] = (36));

} else {
var statearr_47137_48316 = state_47097__$1;
(statearr_47137_48316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (19))){
var inst_47024 = (state_47097[(7)]);
var inst_47044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47024);
var state_47097__$1 = state_47097;
var statearr_47138_48319 = state_47097__$1;
(statearr_47138_48319[(2)] = inst_47044);

(statearr_47138_48319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (11))){
var inst_47024 = (state_47097[(7)]);
var inst_47028 = (inst_47024 == null);
var inst_47029 = cljs.core.not(inst_47028);
var state_47097__$1 = state_47097;
if(inst_47029){
var statearr_47139_48320 = state_47097__$1;
(statearr_47139_48320[(1)] = (13));

} else {
var statearr_47140_48321 = state_47097__$1;
(statearr_47140_48321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (9))){
var inst_46999 = (state_47097[(8)]);
var state_47097__$1 = state_47097;
var statearr_47141_48323 = state_47097__$1;
(statearr_47141_48323[(2)] = inst_46999);

(statearr_47141_48323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (5))){
var state_47097__$1 = state_47097;
var statearr_47142_48325 = state_47097__$1;
(statearr_47142_48325[(2)] = true);

(statearr_47142_48325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (14))){
var state_47097__$1 = state_47097;
var statearr_47143_48326 = state_47097__$1;
(statearr_47143_48326[(2)] = false);

(statearr_47143_48326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (26))){
var inst_47057 = (state_47097[(9)]);
var inst_47064 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47057);
var state_47097__$1 = state_47097;
var statearr_47144_48327 = state_47097__$1;
(statearr_47144_48327[(2)] = inst_47064);

(statearr_47144_48327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (16))){
var state_47097__$1 = state_47097;
var statearr_47145_48330 = state_47097__$1;
(statearr_47145_48330[(2)] = true);

(statearr_47145_48330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (38))){
var inst_47087 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47146_48332 = state_47097__$1;
(statearr_47146_48332[(2)] = inst_47087);

(statearr_47146_48332[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (30))){
var inst_47057 = (state_47097[(9)]);
var inst_47049 = (state_47097[(13)]);
var inst_47048 = (state_47097[(10)]);
var inst_47074 = cljs.core.empty_QMARK_(inst_47048);
var inst_47075 = (inst_47049.cljs$core$IFn$_invoke$arity$1 ? inst_47049.cljs$core$IFn$_invoke$arity$1(inst_47057) : inst_47049.call(null,inst_47057));
var inst_47076 = cljs.core.not(inst_47075);
var inst_47077 = ((inst_47074) && (inst_47076));
var state_47097__$1 = state_47097;
var statearr_47147_48335 = state_47097__$1;
(statearr_47147_48335[(2)] = inst_47077);

(statearr_47147_48335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (10))){
var inst_46999 = (state_47097[(8)]);
var inst_47020 = (state_47097[(2)]);
var inst_47021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47020,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47020,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47020,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47024 = inst_46999;
var state_47097__$1 = (function (){var statearr_47148 = state_47097;
(statearr_47148[(16)] = inst_47021);

(statearr_47148[(17)] = inst_47023);

(statearr_47148[(18)] = inst_47022);

(statearr_47148[(7)] = inst_47024);

return statearr_47148;
})();
var statearr_47149_48339 = state_47097__$1;
(statearr_47149_48339[(2)] = null);

(statearr_47149_48339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (18))){
var inst_47039 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47150_48340 = state_47097__$1;
(statearr_47150_48340[(2)] = inst_47039);

(statearr_47150_48340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (37))){
var state_47097__$1 = state_47097;
var statearr_47151_48341 = state_47097__$1;
(statearr_47151_48341[(2)] = null);

(statearr_47151_48341[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (8))){
var inst_46999 = (state_47097[(8)]);
var inst_47017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46999);
var state_47097__$1 = state_47097;
var statearr_47152_48342 = state_47097__$1;
(statearr_47152_48342[(2)] = inst_47017);

(statearr_47152_48342[(1)] = (10));


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
});})(c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46200__auto__,c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46201__auto__ = null;
var cljs$core$async$mix_$_state_machine__46201__auto____0 = (function (){
var statearr_47153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47153[(0)] = cljs$core$async$mix_$_state_machine__46201__auto__);

(statearr_47153[(1)] = (1));

return statearr_47153;
});
var cljs$core$async$mix_$_state_machine__46201__auto____1 = (function (state_47097){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47097);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47154){if((e47154 instanceof Object)){
var ex__46204__auto__ = e47154;
var statearr_47155_48343 = state_47097;
(statearr_47155_48343[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48344 = state_47097;
state_47097 = G__48344;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46201__auto__ = function(state_47097){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46201__auto____1.call(this,state_47097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46201__auto____0;
cljs$core$async$mix_$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46201__auto____1;
return cljs$core$async$mix_$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46303__auto__ = (function (){var statearr_47156 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47156[(6)] = c__46301__auto___48264);

return statearr_47156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__47158 = arguments.length;
switch (G__47158) {
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
var G__47161 = arguments.length;
switch (G__47161) {
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
return (function (p1__47159_SHARP_){
if(cljs.core.truth_((p1__47159_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47159_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47159_SHARP_.call(null,topic)))){
return p1__47159_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47159_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47162 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47163){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47163 = meta47163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47164,meta47163__$1){
var self__ = this;
var _47164__$1 = this;
return (new cljs.core.async.t_cljs$core$async47162(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47163__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47164){
var self__ = this;
var _47164__$1 = this;
return self__.meta47163;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47163","meta47163",687682535,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47162";

cljs.core.async.t_cljs$core$async47162.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47162");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47162.
 */
cljs.core.async.__GT_t_cljs$core$async47162 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47163){
return (new cljs.core.async.t_cljs$core$async47162(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47163));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47162(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46301__auto___48361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48361,mults,ensure_mult,p){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48361,mults,ensure_mult,p){
return (function (state_47236){
var state_val_47237 = (state_47236[(1)]);
if((state_val_47237 === (7))){
var inst_47232 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47238_48362 = state_47236__$1;
(statearr_47238_48362[(2)] = inst_47232);

(statearr_47238_48362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (20))){
var state_47236__$1 = state_47236;
var statearr_47239_48364 = state_47236__$1;
(statearr_47239_48364[(2)] = null);

(statearr_47239_48364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (1))){
var state_47236__$1 = state_47236;
var statearr_47240_48365 = state_47236__$1;
(statearr_47240_48365[(2)] = null);

(statearr_47240_48365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (24))){
var inst_47215 = (state_47236[(7)]);
var inst_47224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47215);
var state_47236__$1 = state_47236;
var statearr_47241_48366 = state_47236__$1;
(statearr_47241_48366[(2)] = inst_47224);

(statearr_47241_48366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (4))){
var inst_47167 = (state_47236[(8)]);
var inst_47167__$1 = (state_47236[(2)]);
var inst_47168 = (inst_47167__$1 == null);
var state_47236__$1 = (function (){var statearr_47242 = state_47236;
(statearr_47242[(8)] = inst_47167__$1);

return statearr_47242;
})();
if(cljs.core.truth_(inst_47168)){
var statearr_47243_48367 = state_47236__$1;
(statearr_47243_48367[(1)] = (5));

} else {
var statearr_47244_48368 = state_47236__$1;
(statearr_47244_48368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (15))){
var inst_47209 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47245_48369 = state_47236__$1;
(statearr_47245_48369[(2)] = inst_47209);

(statearr_47245_48369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (21))){
var inst_47229 = (state_47236[(2)]);
var state_47236__$1 = (function (){var statearr_47246 = state_47236;
(statearr_47246[(9)] = inst_47229);

return statearr_47246;
})();
var statearr_47247_48370 = state_47236__$1;
(statearr_47247_48370[(2)] = null);

(statearr_47247_48370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (13))){
var inst_47191 = (state_47236[(10)]);
var inst_47193 = cljs.core.chunked_seq_QMARK_(inst_47191);
var state_47236__$1 = state_47236;
if(inst_47193){
var statearr_47248_48371 = state_47236__$1;
(statearr_47248_48371[(1)] = (16));

} else {
var statearr_47249_48375 = state_47236__$1;
(statearr_47249_48375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (22))){
var inst_47221 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
if(cljs.core.truth_(inst_47221)){
var statearr_47250_48378 = state_47236__$1;
(statearr_47250_48378[(1)] = (23));

} else {
var statearr_47251_48381 = state_47236__$1;
(statearr_47251_48381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (6))){
var inst_47217 = (state_47236[(11)]);
var inst_47215 = (state_47236[(7)]);
var inst_47167 = (state_47236[(8)]);
var inst_47215__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47167) : topic_fn.call(null,inst_47167));
var inst_47216 = cljs.core.deref(mults);
var inst_47217__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47216,inst_47215__$1);
var state_47236__$1 = (function (){var statearr_47252 = state_47236;
(statearr_47252[(11)] = inst_47217__$1);

(statearr_47252[(7)] = inst_47215__$1);

return statearr_47252;
})();
if(cljs.core.truth_(inst_47217__$1)){
var statearr_47253_48382 = state_47236__$1;
(statearr_47253_48382[(1)] = (19));

} else {
var statearr_47254_48383 = state_47236__$1;
(statearr_47254_48383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (25))){
var inst_47226 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47255_48384 = state_47236__$1;
(statearr_47255_48384[(2)] = inst_47226);

(statearr_47255_48384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (17))){
var inst_47191 = (state_47236[(10)]);
var inst_47200 = cljs.core.first(inst_47191);
var inst_47201 = cljs.core.async.muxch_STAR_(inst_47200);
var inst_47202 = cljs.core.async.close_BANG_(inst_47201);
var inst_47203 = cljs.core.next(inst_47191);
var inst_47177 = inst_47203;
var inst_47178 = null;
var inst_47179 = (0);
var inst_47180 = (0);
var state_47236__$1 = (function (){var statearr_47256 = state_47236;
(statearr_47256[(12)] = inst_47180);

(statearr_47256[(13)] = inst_47179);

(statearr_47256[(14)] = inst_47202);

(statearr_47256[(15)] = inst_47177);

(statearr_47256[(16)] = inst_47178);

return statearr_47256;
})();
var statearr_47257_48385 = state_47236__$1;
(statearr_47257_48385[(2)] = null);

(statearr_47257_48385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (3))){
var inst_47234 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47236__$1,inst_47234);
} else {
if((state_val_47237 === (12))){
var inst_47211 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47258_48386 = state_47236__$1;
(statearr_47258_48386[(2)] = inst_47211);

(statearr_47258_48386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (2))){
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47236__$1,(4),ch);
} else {
if((state_val_47237 === (23))){
var state_47236__$1 = state_47236;
var statearr_47259_48387 = state_47236__$1;
(statearr_47259_48387[(2)] = null);

(statearr_47259_48387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (19))){
var inst_47217 = (state_47236[(11)]);
var inst_47167 = (state_47236[(8)]);
var inst_47219 = cljs.core.async.muxch_STAR_(inst_47217);
var state_47236__$1 = state_47236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47236__$1,(22),inst_47219,inst_47167);
} else {
if((state_val_47237 === (11))){
var inst_47177 = (state_47236[(15)]);
var inst_47191 = (state_47236[(10)]);
var inst_47191__$1 = cljs.core.seq(inst_47177);
var state_47236__$1 = (function (){var statearr_47260 = state_47236;
(statearr_47260[(10)] = inst_47191__$1);

return statearr_47260;
})();
if(inst_47191__$1){
var statearr_47261_48389 = state_47236__$1;
(statearr_47261_48389[(1)] = (13));

} else {
var statearr_47262_48390 = state_47236__$1;
(statearr_47262_48390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (9))){
var inst_47213 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47263_48391 = state_47236__$1;
(statearr_47263_48391[(2)] = inst_47213);

(statearr_47263_48391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (5))){
var inst_47174 = cljs.core.deref(mults);
var inst_47175 = cljs.core.vals(inst_47174);
var inst_47176 = cljs.core.seq(inst_47175);
var inst_47177 = inst_47176;
var inst_47178 = null;
var inst_47179 = (0);
var inst_47180 = (0);
var state_47236__$1 = (function (){var statearr_47264 = state_47236;
(statearr_47264[(12)] = inst_47180);

(statearr_47264[(13)] = inst_47179);

(statearr_47264[(15)] = inst_47177);

(statearr_47264[(16)] = inst_47178);

return statearr_47264;
})();
var statearr_47265_48393 = state_47236__$1;
(statearr_47265_48393[(2)] = null);

(statearr_47265_48393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (14))){
var state_47236__$1 = state_47236;
var statearr_47269_48394 = state_47236__$1;
(statearr_47269_48394[(2)] = null);

(statearr_47269_48394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (16))){
var inst_47191 = (state_47236[(10)]);
var inst_47195 = cljs.core.chunk_first(inst_47191);
var inst_47196 = cljs.core.chunk_rest(inst_47191);
var inst_47197 = cljs.core.count(inst_47195);
var inst_47177 = inst_47196;
var inst_47178 = inst_47195;
var inst_47179 = inst_47197;
var inst_47180 = (0);
var state_47236__$1 = (function (){var statearr_47270 = state_47236;
(statearr_47270[(12)] = inst_47180);

(statearr_47270[(13)] = inst_47179);

(statearr_47270[(15)] = inst_47177);

(statearr_47270[(16)] = inst_47178);

return statearr_47270;
})();
var statearr_47271_48396 = state_47236__$1;
(statearr_47271_48396[(2)] = null);

(statearr_47271_48396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (10))){
var inst_47180 = (state_47236[(12)]);
var inst_47179 = (state_47236[(13)]);
var inst_47177 = (state_47236[(15)]);
var inst_47178 = (state_47236[(16)]);
var inst_47185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47178,inst_47180);
var inst_47186 = cljs.core.async.muxch_STAR_(inst_47185);
var inst_47187 = cljs.core.async.close_BANG_(inst_47186);
var inst_47188 = (inst_47180 + (1));
var tmp47266 = inst_47179;
var tmp47267 = inst_47177;
var tmp47268 = inst_47178;
var inst_47177__$1 = tmp47267;
var inst_47178__$1 = tmp47268;
var inst_47179__$1 = tmp47266;
var inst_47180__$1 = inst_47188;
var state_47236__$1 = (function (){var statearr_47272 = state_47236;
(statearr_47272[(17)] = inst_47187);

(statearr_47272[(12)] = inst_47180__$1);

(statearr_47272[(13)] = inst_47179__$1);

(statearr_47272[(15)] = inst_47177__$1);

(statearr_47272[(16)] = inst_47178__$1);

return statearr_47272;
})();
var statearr_47273_48402 = state_47236__$1;
(statearr_47273_48402[(2)] = null);

(statearr_47273_48402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (18))){
var inst_47206 = (state_47236[(2)]);
var state_47236__$1 = state_47236;
var statearr_47274_48404 = state_47236__$1;
(statearr_47274_48404[(2)] = inst_47206);

(statearr_47274_48404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47237 === (8))){
var inst_47180 = (state_47236[(12)]);
var inst_47179 = (state_47236[(13)]);
var inst_47182 = (inst_47180 < inst_47179);
var inst_47183 = inst_47182;
var state_47236__$1 = state_47236;
if(cljs.core.truth_(inst_47183)){
var statearr_47275_48405 = state_47236__$1;
(statearr_47275_48405[(1)] = (10));

} else {
var statearr_47276_48406 = state_47236__$1;
(statearr_47276_48406[(1)] = (11));

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
});})(c__46301__auto___48361,mults,ensure_mult,p))
;
return ((function (switch__46200__auto__,c__46301__auto___48361,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47277[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47277[(1)] = (1));

return statearr_47277;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47236){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47236);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47278){if((e47278 instanceof Object)){
var ex__46204__auto__ = e47278;
var statearr_47279_48408 = state_47236;
(statearr_47279_48408[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48409 = state_47236;
state_47236 = G__48409;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48361,mults,ensure_mult,p))
})();
var state__46303__auto__ = (function (){var statearr_47280 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47280[(6)] = c__46301__auto___48361);

return statearr_47280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48361,mults,ensure_mult,p))
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
var G__47282 = arguments.length;
switch (G__47282) {
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
var G__47284 = arguments.length;
switch (G__47284) {
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
var G__47286 = arguments.length;
switch (G__47286) {
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
var c__46301__auto___48418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47325){
var state_val_47326 = (state_47325[(1)]);
if((state_val_47326 === (7))){
var state_47325__$1 = state_47325;
var statearr_47327_48419 = state_47325__$1;
(statearr_47327_48419[(2)] = null);

(statearr_47327_48419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (1))){
var state_47325__$1 = state_47325;
var statearr_47328_48420 = state_47325__$1;
(statearr_47328_48420[(2)] = null);

(statearr_47328_48420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (4))){
var inst_47289 = (state_47325[(7)]);
var inst_47291 = (inst_47289 < cnt);
var state_47325__$1 = state_47325;
if(cljs.core.truth_(inst_47291)){
var statearr_47329_48421 = state_47325__$1;
(statearr_47329_48421[(1)] = (6));

} else {
var statearr_47330_48422 = state_47325__$1;
(statearr_47330_48422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (15))){
var inst_47321 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
var statearr_47331_48423 = state_47325__$1;
(statearr_47331_48423[(2)] = inst_47321);

(statearr_47331_48423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (13))){
var inst_47314 = cljs.core.async.close_BANG_(out);
var state_47325__$1 = state_47325;
var statearr_47332_48424 = state_47325__$1;
(statearr_47332_48424[(2)] = inst_47314);

(statearr_47332_48424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (6))){
var state_47325__$1 = state_47325;
var statearr_47333_48425 = state_47325__$1;
(statearr_47333_48425[(2)] = null);

(statearr_47333_48425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (3))){
var inst_47323 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47325__$1,inst_47323);
} else {
if((state_val_47326 === (12))){
var inst_47311 = (state_47325[(8)]);
var inst_47311__$1 = (state_47325[(2)]);
var inst_47312 = cljs.core.some(cljs.core.nil_QMARK_,inst_47311__$1);
var state_47325__$1 = (function (){var statearr_47334 = state_47325;
(statearr_47334[(8)] = inst_47311__$1);

return statearr_47334;
})();
if(cljs.core.truth_(inst_47312)){
var statearr_47335_48433 = state_47325__$1;
(statearr_47335_48433[(1)] = (13));

} else {
var statearr_47336_48434 = state_47325__$1;
(statearr_47336_48434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (2))){
var inst_47288 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47289 = (0);
var state_47325__$1 = (function (){var statearr_47337 = state_47325;
(statearr_47337[(7)] = inst_47289);

(statearr_47337[(9)] = inst_47288);

return statearr_47337;
})();
var statearr_47338_48435 = state_47325__$1;
(statearr_47338_48435[(2)] = null);

(statearr_47338_48435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (11))){
var inst_47289 = (state_47325[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47325,(10),Object,null,(9));
var inst_47298 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47289) : chs__$1.call(null,inst_47289));
var inst_47299 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47289) : done.call(null,inst_47289));
var inst_47300 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47298,inst_47299);
var state_47325__$1 = state_47325;
var statearr_47339_48436 = state_47325__$1;
(statearr_47339_48436[(2)] = inst_47300);


cljs.core.async.impl.ioc_helpers.process_exception(state_47325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (9))){
var inst_47289 = (state_47325[(7)]);
var inst_47302 = (state_47325[(2)]);
var inst_47303 = (inst_47289 + (1));
var inst_47289__$1 = inst_47303;
var state_47325__$1 = (function (){var statearr_47340 = state_47325;
(statearr_47340[(10)] = inst_47302);

(statearr_47340[(7)] = inst_47289__$1);

return statearr_47340;
})();
var statearr_47341_48437 = state_47325__$1;
(statearr_47341_48437[(2)] = null);

(statearr_47341_48437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (5))){
var inst_47309 = (state_47325[(2)]);
var state_47325__$1 = (function (){var statearr_47342 = state_47325;
(statearr_47342[(11)] = inst_47309);

return statearr_47342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47325__$1,(12),dchan);
} else {
if((state_val_47326 === (14))){
var inst_47311 = (state_47325[(8)]);
var inst_47316 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47311);
var state_47325__$1 = state_47325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47325__$1,(16),out,inst_47316);
} else {
if((state_val_47326 === (16))){
var inst_47318 = (state_47325[(2)]);
var state_47325__$1 = (function (){var statearr_47343 = state_47325;
(statearr_47343[(12)] = inst_47318);

return statearr_47343;
})();
var statearr_47344_48438 = state_47325__$1;
(statearr_47344_48438[(2)] = null);

(statearr_47344_48438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (10))){
var inst_47293 = (state_47325[(2)]);
var inst_47294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47325__$1 = (function (){var statearr_47345 = state_47325;
(statearr_47345[(13)] = inst_47293);

return statearr_47345;
})();
var statearr_47346_48439 = state_47325__$1;
(statearr_47346_48439[(2)] = inst_47294);


cljs.core.async.impl.ioc_helpers.process_exception(state_47325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (8))){
var inst_47307 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
var statearr_47347_48441 = state_47325__$1;
(statearr_47347_48441[(2)] = inst_47307);

(statearr_47347_48441[(1)] = (5));


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
});})(c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46200__auto__,c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47348[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47348[(1)] = (1));

return statearr_47348;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47325){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47325);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47349){if((e47349 instanceof Object)){
var ex__46204__auto__ = e47349;
var statearr_47350_48442 = state_47325;
(statearr_47350_48442[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48444 = state_47325;
state_47325 = G__48444;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46303__auto__ = (function (){var statearr_47351 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47351[(6)] = c__46301__auto___48418);

return statearr_47351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47354 = arguments.length;
switch (G__47354) {
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
var c__46301__auto___48446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48446,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48446,out){
return (function (state_47386){
var state_val_47387 = (state_47386[(1)]);
if((state_val_47387 === (7))){
var inst_47365 = (state_47386[(7)]);
var inst_47366 = (state_47386[(8)]);
var inst_47365__$1 = (state_47386[(2)]);
var inst_47366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47365__$1,(0),null);
var inst_47367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47365__$1,(1),null);
var inst_47368 = (inst_47366__$1 == null);
var state_47386__$1 = (function (){var statearr_47388 = state_47386;
(statearr_47388[(7)] = inst_47365__$1);

(statearr_47388[(9)] = inst_47367);

(statearr_47388[(8)] = inst_47366__$1);

return statearr_47388;
})();
if(cljs.core.truth_(inst_47368)){
var statearr_47389_48447 = state_47386__$1;
(statearr_47389_48447[(1)] = (8));

} else {
var statearr_47390_48448 = state_47386__$1;
(statearr_47390_48448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (1))){
var inst_47355 = cljs.core.vec(chs);
var inst_47356 = inst_47355;
var state_47386__$1 = (function (){var statearr_47391 = state_47386;
(statearr_47391[(10)] = inst_47356);

return statearr_47391;
})();
var statearr_47392_48449 = state_47386__$1;
(statearr_47392_48449[(2)] = null);

(statearr_47392_48449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (4))){
var inst_47356 = (state_47386[(10)]);
var state_47386__$1 = state_47386;
return cljs.core.async.ioc_alts_BANG_(state_47386__$1,(7),inst_47356);
} else {
if((state_val_47387 === (6))){
var inst_47382 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
var statearr_47393_48450 = state_47386__$1;
(statearr_47393_48450[(2)] = inst_47382);

(statearr_47393_48450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (3))){
var inst_47384 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47386__$1,inst_47384);
} else {
if((state_val_47387 === (2))){
var inst_47356 = (state_47386[(10)]);
var inst_47358 = cljs.core.count(inst_47356);
var inst_47359 = (inst_47358 > (0));
var state_47386__$1 = state_47386;
if(cljs.core.truth_(inst_47359)){
var statearr_47395_48451 = state_47386__$1;
(statearr_47395_48451[(1)] = (4));

} else {
var statearr_47396_48453 = state_47386__$1;
(statearr_47396_48453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (11))){
var inst_47356 = (state_47386[(10)]);
var inst_47375 = (state_47386[(2)]);
var tmp47394 = inst_47356;
var inst_47356__$1 = tmp47394;
var state_47386__$1 = (function (){var statearr_47397 = state_47386;
(statearr_47397[(11)] = inst_47375);

(statearr_47397[(10)] = inst_47356__$1);

return statearr_47397;
})();
var statearr_47398_48457 = state_47386__$1;
(statearr_47398_48457[(2)] = null);

(statearr_47398_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (9))){
var inst_47366 = (state_47386[(8)]);
var state_47386__$1 = state_47386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47386__$1,(11),out,inst_47366);
} else {
if((state_val_47387 === (5))){
var inst_47380 = cljs.core.async.close_BANG_(out);
var state_47386__$1 = state_47386;
var statearr_47399_48459 = state_47386__$1;
(statearr_47399_48459[(2)] = inst_47380);

(statearr_47399_48459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (10))){
var inst_47378 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
var statearr_47400_48463 = state_47386__$1;
(statearr_47400_48463[(2)] = inst_47378);

(statearr_47400_48463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (8))){
var inst_47365 = (state_47386[(7)]);
var inst_47367 = (state_47386[(9)]);
var inst_47366 = (state_47386[(8)]);
var inst_47356 = (state_47386[(10)]);
var inst_47370 = (function (){var cs = inst_47356;
var vec__47361 = inst_47365;
var v = inst_47366;
var c = inst_47367;
return ((function (cs,vec__47361,v,c,inst_47365,inst_47367,inst_47366,inst_47356,state_val_47387,c__46301__auto___48446,out){
return (function (p1__47352_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47352_SHARP_);
});
;})(cs,vec__47361,v,c,inst_47365,inst_47367,inst_47366,inst_47356,state_val_47387,c__46301__auto___48446,out))
})();
var inst_47371 = cljs.core.filterv(inst_47370,inst_47356);
var inst_47356__$1 = inst_47371;
var state_47386__$1 = (function (){var statearr_47401 = state_47386;
(statearr_47401[(10)] = inst_47356__$1);

return statearr_47401;
})();
var statearr_47402_48466 = state_47386__$1;
(statearr_47402_48466[(2)] = null);

(statearr_47402_48466[(1)] = (2));


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
});})(c__46301__auto___48446,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48446,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47403 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47403[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47403[(1)] = (1));

return statearr_47403;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47386){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47386);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47404){if((e47404 instanceof Object)){
var ex__46204__auto__ = e47404;
var statearr_47405_48467 = state_47386;
(statearr_47405_48467[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48468 = state_47386;
state_47386 = G__48468;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48446,out))
})();
var state__46303__auto__ = (function (){var statearr_47406 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47406[(6)] = c__46301__auto___48446);

return statearr_47406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48446,out))
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
var G__47408 = arguments.length;
switch (G__47408) {
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
var c__46301__auto___48470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48470,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48470,out){
return (function (state_47432){
var state_val_47433 = (state_47432[(1)]);
if((state_val_47433 === (7))){
var inst_47414 = (state_47432[(7)]);
var inst_47414__$1 = (state_47432[(2)]);
var inst_47415 = (inst_47414__$1 == null);
var inst_47416 = cljs.core.not(inst_47415);
var state_47432__$1 = (function (){var statearr_47434 = state_47432;
(statearr_47434[(7)] = inst_47414__$1);

return statearr_47434;
})();
if(inst_47416){
var statearr_47435_48473 = state_47432__$1;
(statearr_47435_48473[(1)] = (8));

} else {
var statearr_47436_48474 = state_47432__$1;
(statearr_47436_48474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (1))){
var inst_47409 = (0);
var state_47432__$1 = (function (){var statearr_47437 = state_47432;
(statearr_47437[(8)] = inst_47409);

return statearr_47437;
})();
var statearr_47438_48477 = state_47432__$1;
(statearr_47438_48477[(2)] = null);

(statearr_47438_48477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (4))){
var state_47432__$1 = state_47432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47432__$1,(7),ch);
} else {
if((state_val_47433 === (6))){
var inst_47427 = (state_47432[(2)]);
var state_47432__$1 = state_47432;
var statearr_47439_48478 = state_47432__$1;
(statearr_47439_48478[(2)] = inst_47427);

(statearr_47439_48478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (3))){
var inst_47429 = (state_47432[(2)]);
var inst_47430 = cljs.core.async.close_BANG_(out);
var state_47432__$1 = (function (){var statearr_47440 = state_47432;
(statearr_47440[(9)] = inst_47429);

return statearr_47440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47432__$1,inst_47430);
} else {
if((state_val_47433 === (2))){
var inst_47409 = (state_47432[(8)]);
var inst_47411 = (inst_47409 < n);
var state_47432__$1 = state_47432;
if(cljs.core.truth_(inst_47411)){
var statearr_47441_48479 = state_47432__$1;
(statearr_47441_48479[(1)] = (4));

} else {
var statearr_47442_48480 = state_47432__$1;
(statearr_47442_48480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (11))){
var inst_47409 = (state_47432[(8)]);
var inst_47419 = (state_47432[(2)]);
var inst_47420 = (inst_47409 + (1));
var inst_47409__$1 = inst_47420;
var state_47432__$1 = (function (){var statearr_47443 = state_47432;
(statearr_47443[(8)] = inst_47409__$1);

(statearr_47443[(10)] = inst_47419);

return statearr_47443;
})();
var statearr_47444_48481 = state_47432__$1;
(statearr_47444_48481[(2)] = null);

(statearr_47444_48481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (9))){
var state_47432__$1 = state_47432;
var statearr_47445_48482 = state_47432__$1;
(statearr_47445_48482[(2)] = null);

(statearr_47445_48482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (5))){
var state_47432__$1 = state_47432;
var statearr_47446_48483 = state_47432__$1;
(statearr_47446_48483[(2)] = null);

(statearr_47446_48483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (10))){
var inst_47424 = (state_47432[(2)]);
var state_47432__$1 = state_47432;
var statearr_47447_48484 = state_47432__$1;
(statearr_47447_48484[(2)] = inst_47424);

(statearr_47447_48484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47433 === (8))){
var inst_47414 = (state_47432[(7)]);
var state_47432__$1 = state_47432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47432__$1,(11),out,inst_47414);
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
});})(c__46301__auto___48470,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48470,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47448[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47448[(1)] = (1));

return statearr_47448;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47432){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47432);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47449){if((e47449 instanceof Object)){
var ex__46204__auto__ = e47449;
var statearr_47450_48486 = state_47432;
(statearr_47450_48486[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48487 = state_47432;
state_47432 = G__48487;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48470,out))
})();
var state__46303__auto__ = (function (){var statearr_47451 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47451[(6)] = c__46301__auto___48470);

return statearr_47451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48470,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47453 = (function (f,ch,meta47454){
this.f = f;
this.ch = ch;
this.meta47454 = meta47454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47455,meta47454__$1){
var self__ = this;
var _47455__$1 = this;
return (new cljs.core.async.t_cljs$core$async47453(self__.f,self__.ch,meta47454__$1));
});

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47455){
var self__ = this;
var _47455__$1 = this;
return self__.meta47454;
});

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47456 = (function (f,ch,meta47454,_,fn1,meta47457){
this.f = f;
this.ch = ch;
this.meta47454 = meta47454;
this._ = _;
this.fn1 = fn1;
this.meta47457 = meta47457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47458,meta47457__$1){
var self__ = this;
var _47458__$1 = this;
return (new cljs.core.async.t_cljs$core$async47456(self__.f,self__.ch,self__.meta47454,self__._,self__.fn1,meta47457__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47458){
var self__ = this;
var _47458__$1 = this;
return self__.meta47457;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47452_SHARP_){
var G__47459 = (((p1__47452_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47452_SHARP_) : self__.f.call(null,p1__47452_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47459) : f1.call(null,G__47459));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47454","meta47454",-1581498332,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47453","cljs.core.async/t_cljs$core$async47453",-1633350122,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47457","meta47457",1521072742,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47456";

cljs.core.async.t_cljs$core$async47456.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47456");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47456.
 */
cljs.core.async.__GT_t_cljs$core$async47456 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47456(f__$1,ch__$1,meta47454__$1,___$2,fn1__$1,meta47457){
return (new cljs.core.async.t_cljs$core$async47456(f__$1,ch__$1,meta47454__$1,___$2,fn1__$1,meta47457));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47456(self__.f,self__.ch,self__.meta47454,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47460) : self__.f.call(null,G__47460));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47454","meta47454",-1581498332,null)], null);
});

cljs.core.async.t_cljs$core$async47453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47453";

cljs.core.async.t_cljs$core$async47453.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47453");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47453.
 */
cljs.core.async.__GT_t_cljs$core$async47453 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47453(f__$1,ch__$1,meta47454){
return (new cljs.core.async.t_cljs$core$async47453(f__$1,ch__$1,meta47454));
});

}

return (new cljs.core.async.t_cljs$core$async47453(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47461 = (function (f,ch,meta47462){
this.f = f;
this.ch = ch;
this.meta47462 = meta47462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47463,meta47462__$1){
var self__ = this;
var _47463__$1 = this;
return (new cljs.core.async.t_cljs$core$async47461(self__.f,self__.ch,meta47462__$1));
});

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47463){
var self__ = this;
var _47463__$1 = this;
return self__.meta47462;
});

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47462","meta47462",858930548,null)], null);
});

cljs.core.async.t_cljs$core$async47461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47461";

cljs.core.async.t_cljs$core$async47461.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47461");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47461.
 */
cljs.core.async.__GT_t_cljs$core$async47461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47461(f__$1,ch__$1,meta47462){
return (new cljs.core.async.t_cljs$core$async47461(f__$1,ch__$1,meta47462));
});

}

return (new cljs.core.async.t_cljs$core$async47461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47464 = (function (p,ch,meta47465){
this.p = p;
this.ch = ch;
this.meta47465 = meta47465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47466,meta47465__$1){
var self__ = this;
var _47466__$1 = this;
return (new cljs.core.async.t_cljs$core$async47464(self__.p,self__.ch,meta47465__$1));
});

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47466){
var self__ = this;
var _47466__$1 = this;
return self__.meta47465;
});

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47465","meta47465",72928711,null)], null);
});

cljs.core.async.t_cljs$core$async47464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47464";

cljs.core.async.t_cljs$core$async47464.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47464");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47464.
 */
cljs.core.async.__GT_t_cljs$core$async47464 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47464(p__$1,ch__$1,meta47465){
return (new cljs.core.async.t_cljs$core$async47464(p__$1,ch__$1,meta47465));
});

}

return (new cljs.core.async.t_cljs$core$async47464(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47468 = arguments.length;
switch (G__47468) {
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
var c__46301__auto___48498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48498,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48498,out){
return (function (state_47489){
var state_val_47490 = (state_47489[(1)]);
if((state_val_47490 === (7))){
var inst_47485 = (state_47489[(2)]);
var state_47489__$1 = state_47489;
var statearr_47491_48499 = state_47489__$1;
(statearr_47491_48499[(2)] = inst_47485);

(statearr_47491_48499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (1))){
var state_47489__$1 = state_47489;
var statearr_47492_48500 = state_47489__$1;
(statearr_47492_48500[(2)] = null);

(statearr_47492_48500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (4))){
var inst_47471 = (state_47489[(7)]);
var inst_47471__$1 = (state_47489[(2)]);
var inst_47472 = (inst_47471__$1 == null);
var state_47489__$1 = (function (){var statearr_47493 = state_47489;
(statearr_47493[(7)] = inst_47471__$1);

return statearr_47493;
})();
if(cljs.core.truth_(inst_47472)){
var statearr_47494_48501 = state_47489__$1;
(statearr_47494_48501[(1)] = (5));

} else {
var statearr_47495_48502 = state_47489__$1;
(statearr_47495_48502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (6))){
var inst_47471 = (state_47489[(7)]);
var inst_47476 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47471) : p.call(null,inst_47471));
var state_47489__$1 = state_47489;
if(cljs.core.truth_(inst_47476)){
var statearr_47496_48503 = state_47489__$1;
(statearr_47496_48503[(1)] = (8));

} else {
var statearr_47497_48504 = state_47489__$1;
(statearr_47497_48504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (3))){
var inst_47487 = (state_47489[(2)]);
var state_47489__$1 = state_47489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47489__$1,inst_47487);
} else {
if((state_val_47490 === (2))){
var state_47489__$1 = state_47489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47489__$1,(4),ch);
} else {
if((state_val_47490 === (11))){
var inst_47479 = (state_47489[(2)]);
var state_47489__$1 = state_47489;
var statearr_47498_48505 = state_47489__$1;
(statearr_47498_48505[(2)] = inst_47479);

(statearr_47498_48505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (9))){
var state_47489__$1 = state_47489;
var statearr_47499_48506 = state_47489__$1;
(statearr_47499_48506[(2)] = null);

(statearr_47499_48506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (5))){
var inst_47474 = cljs.core.async.close_BANG_(out);
var state_47489__$1 = state_47489;
var statearr_47500_48510 = state_47489__$1;
(statearr_47500_48510[(2)] = inst_47474);

(statearr_47500_48510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (10))){
var inst_47482 = (state_47489[(2)]);
var state_47489__$1 = (function (){var statearr_47501 = state_47489;
(statearr_47501[(8)] = inst_47482);

return statearr_47501;
})();
var statearr_47502_48511 = state_47489__$1;
(statearr_47502_48511[(2)] = null);

(statearr_47502_48511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47490 === (8))){
var inst_47471 = (state_47489[(7)]);
var state_47489__$1 = state_47489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47489__$1,(11),out,inst_47471);
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
});})(c__46301__auto___48498,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48498,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47503 = [null,null,null,null,null,null,null,null,null];
(statearr_47503[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47503[(1)] = (1));

return statearr_47503;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47489){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47489);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47504){if((e47504 instanceof Object)){
var ex__46204__auto__ = e47504;
var statearr_47505_48515 = state_47489;
(statearr_47505_48515[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48519 = state_47489;
state_47489 = G__48519;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48498,out))
})();
var state__46303__auto__ = (function (){var statearr_47506 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47506[(6)] = c__46301__auto___48498);

return statearr_47506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48498,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47508 = arguments.length;
switch (G__47508) {
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
var c__46301__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto__){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto__){
return (function (state_47570){
var state_val_47571 = (state_47570[(1)]);
if((state_val_47571 === (7))){
var inst_47566 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
var statearr_47572_48524 = state_47570__$1;
(statearr_47572_48524[(2)] = inst_47566);

(statearr_47572_48524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (20))){
var inst_47536 = (state_47570[(7)]);
var inst_47547 = (state_47570[(2)]);
var inst_47548 = cljs.core.next(inst_47536);
var inst_47522 = inst_47548;
var inst_47523 = null;
var inst_47524 = (0);
var inst_47525 = (0);
var state_47570__$1 = (function (){var statearr_47573 = state_47570;
(statearr_47573[(8)] = inst_47547);

(statearr_47573[(9)] = inst_47525);

(statearr_47573[(10)] = inst_47522);

(statearr_47573[(11)] = inst_47524);

(statearr_47573[(12)] = inst_47523);

return statearr_47573;
})();
var statearr_47574_48526 = state_47570__$1;
(statearr_47574_48526[(2)] = null);

(statearr_47574_48526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (1))){
var state_47570__$1 = state_47570;
var statearr_47575_48527 = state_47570__$1;
(statearr_47575_48527[(2)] = null);

(statearr_47575_48527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (4))){
var inst_47511 = (state_47570[(13)]);
var inst_47511__$1 = (state_47570[(2)]);
var inst_47512 = (inst_47511__$1 == null);
var state_47570__$1 = (function (){var statearr_47576 = state_47570;
(statearr_47576[(13)] = inst_47511__$1);

return statearr_47576;
})();
if(cljs.core.truth_(inst_47512)){
var statearr_47577_48528 = state_47570__$1;
(statearr_47577_48528[(1)] = (5));

} else {
var statearr_47578_48529 = state_47570__$1;
(statearr_47578_48529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (15))){
var state_47570__$1 = state_47570;
var statearr_47582_48533 = state_47570__$1;
(statearr_47582_48533[(2)] = null);

(statearr_47582_48533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (21))){
var state_47570__$1 = state_47570;
var statearr_47583_48538 = state_47570__$1;
(statearr_47583_48538[(2)] = null);

(statearr_47583_48538[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (13))){
var inst_47525 = (state_47570[(9)]);
var inst_47522 = (state_47570[(10)]);
var inst_47524 = (state_47570[(11)]);
var inst_47523 = (state_47570[(12)]);
var inst_47532 = (state_47570[(2)]);
var inst_47533 = (inst_47525 + (1));
var tmp47579 = inst_47522;
var tmp47580 = inst_47524;
var tmp47581 = inst_47523;
var inst_47522__$1 = tmp47579;
var inst_47523__$1 = tmp47581;
var inst_47524__$1 = tmp47580;
var inst_47525__$1 = inst_47533;
var state_47570__$1 = (function (){var statearr_47584 = state_47570;
(statearr_47584[(9)] = inst_47525__$1);

(statearr_47584[(14)] = inst_47532);

(statearr_47584[(10)] = inst_47522__$1);

(statearr_47584[(11)] = inst_47524__$1);

(statearr_47584[(12)] = inst_47523__$1);

return statearr_47584;
})();
var statearr_47585_48541 = state_47570__$1;
(statearr_47585_48541[(2)] = null);

(statearr_47585_48541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (22))){
var state_47570__$1 = state_47570;
var statearr_47586_48542 = state_47570__$1;
(statearr_47586_48542[(2)] = null);

(statearr_47586_48542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (6))){
var inst_47511 = (state_47570[(13)]);
var inst_47520 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47511) : f.call(null,inst_47511));
var inst_47521 = cljs.core.seq(inst_47520);
var inst_47522 = inst_47521;
var inst_47523 = null;
var inst_47524 = (0);
var inst_47525 = (0);
var state_47570__$1 = (function (){var statearr_47587 = state_47570;
(statearr_47587[(9)] = inst_47525);

(statearr_47587[(10)] = inst_47522);

(statearr_47587[(11)] = inst_47524);

(statearr_47587[(12)] = inst_47523);

return statearr_47587;
})();
var statearr_47588_48549 = state_47570__$1;
(statearr_47588_48549[(2)] = null);

(statearr_47588_48549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (17))){
var inst_47536 = (state_47570[(7)]);
var inst_47540 = cljs.core.chunk_first(inst_47536);
var inst_47541 = cljs.core.chunk_rest(inst_47536);
var inst_47542 = cljs.core.count(inst_47540);
var inst_47522 = inst_47541;
var inst_47523 = inst_47540;
var inst_47524 = inst_47542;
var inst_47525 = (0);
var state_47570__$1 = (function (){var statearr_47589 = state_47570;
(statearr_47589[(9)] = inst_47525);

(statearr_47589[(10)] = inst_47522);

(statearr_47589[(11)] = inst_47524);

(statearr_47589[(12)] = inst_47523);

return statearr_47589;
})();
var statearr_47590_48550 = state_47570__$1;
(statearr_47590_48550[(2)] = null);

(statearr_47590_48550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (3))){
var inst_47568 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47570__$1,inst_47568);
} else {
if((state_val_47571 === (12))){
var inst_47556 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
var statearr_47591_48551 = state_47570__$1;
(statearr_47591_48551[(2)] = inst_47556);

(statearr_47591_48551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (2))){
var state_47570__$1 = state_47570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47570__$1,(4),in$);
} else {
if((state_val_47571 === (23))){
var inst_47564 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
var statearr_47592_48552 = state_47570__$1;
(statearr_47592_48552[(2)] = inst_47564);

(statearr_47592_48552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (19))){
var inst_47551 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
var statearr_47593_48553 = state_47570__$1;
(statearr_47593_48553[(2)] = inst_47551);

(statearr_47593_48553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (11))){
var inst_47536 = (state_47570[(7)]);
var inst_47522 = (state_47570[(10)]);
var inst_47536__$1 = cljs.core.seq(inst_47522);
var state_47570__$1 = (function (){var statearr_47594 = state_47570;
(statearr_47594[(7)] = inst_47536__$1);

return statearr_47594;
})();
if(inst_47536__$1){
var statearr_47595_48554 = state_47570__$1;
(statearr_47595_48554[(1)] = (14));

} else {
var statearr_47596_48555 = state_47570__$1;
(statearr_47596_48555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (9))){
var inst_47558 = (state_47570[(2)]);
var inst_47559 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47570__$1 = (function (){var statearr_47597 = state_47570;
(statearr_47597[(15)] = inst_47558);

return statearr_47597;
})();
if(cljs.core.truth_(inst_47559)){
var statearr_47598_48556 = state_47570__$1;
(statearr_47598_48556[(1)] = (21));

} else {
var statearr_47599_48563 = state_47570__$1;
(statearr_47599_48563[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (5))){
var inst_47514 = cljs.core.async.close_BANG_(out);
var state_47570__$1 = state_47570;
var statearr_47600_48564 = state_47570__$1;
(statearr_47600_48564[(2)] = inst_47514);

(statearr_47600_48564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (14))){
var inst_47536 = (state_47570[(7)]);
var inst_47538 = cljs.core.chunked_seq_QMARK_(inst_47536);
var state_47570__$1 = state_47570;
if(inst_47538){
var statearr_47601_48565 = state_47570__$1;
(statearr_47601_48565[(1)] = (17));

} else {
var statearr_47602_48566 = state_47570__$1;
(statearr_47602_48566[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (16))){
var inst_47554 = (state_47570[(2)]);
var state_47570__$1 = state_47570;
var statearr_47603_48567 = state_47570__$1;
(statearr_47603_48567[(2)] = inst_47554);

(statearr_47603_48567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47571 === (10))){
var inst_47525 = (state_47570[(9)]);
var inst_47523 = (state_47570[(12)]);
var inst_47530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47523,inst_47525);
var state_47570__$1 = state_47570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47570__$1,(13),out,inst_47530);
} else {
if((state_val_47571 === (18))){
var inst_47536 = (state_47570[(7)]);
var inst_47545 = cljs.core.first(inst_47536);
var state_47570__$1 = state_47570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47570__$1,(20),out,inst_47545);
} else {
if((state_val_47571 === (8))){
var inst_47525 = (state_47570[(9)]);
var inst_47524 = (state_47570[(11)]);
var inst_47527 = (inst_47525 < inst_47524);
var inst_47528 = inst_47527;
var state_47570__$1 = state_47570;
if(cljs.core.truth_(inst_47528)){
var statearr_47604_48568 = state_47570__$1;
(statearr_47604_48568[(1)] = (10));

} else {
var statearr_47605_48569 = state_47570__$1;
(statearr_47605_48569[(1)] = (11));

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
});})(c__46301__auto__))
;
return ((function (switch__46200__auto__,c__46301__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____0 = (function (){
var statearr_47606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47606[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__);

(statearr_47606[(1)] = (1));

return statearr_47606;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____1 = (function (state_47570){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47570);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47607){if((e47607 instanceof Object)){
var ex__46204__auto__ = e47607;
var statearr_47608_48576 = state_47570;
(statearr_47608_48576[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48577 = state_47570;
state_47570 = G__48577;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__ = function(state_47570){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____1.call(this,state_47570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46201__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto__))
})();
var state__46303__auto__ = (function (){var statearr_47609 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47609[(6)] = c__46301__auto__);

return statearr_47609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto__))
);

return c__46301__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47611 = arguments.length;
switch (G__47611) {
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
var G__47613 = arguments.length;
switch (G__47613) {
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
var G__47615 = arguments.length;
switch (G__47615) {
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
var c__46301__auto___48587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48587,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48587,out){
return (function (state_47639){
var state_val_47640 = (state_47639[(1)]);
if((state_val_47640 === (7))){
var inst_47634 = (state_47639[(2)]);
var state_47639__$1 = state_47639;
var statearr_47641_48588 = state_47639__$1;
(statearr_47641_48588[(2)] = inst_47634);

(statearr_47641_48588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (1))){
var inst_47616 = null;
var state_47639__$1 = (function (){var statearr_47642 = state_47639;
(statearr_47642[(7)] = inst_47616);

return statearr_47642;
})();
var statearr_47643_48589 = state_47639__$1;
(statearr_47643_48589[(2)] = null);

(statearr_47643_48589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (4))){
var inst_47619 = (state_47639[(8)]);
var inst_47619__$1 = (state_47639[(2)]);
var inst_47620 = (inst_47619__$1 == null);
var inst_47621 = cljs.core.not(inst_47620);
var state_47639__$1 = (function (){var statearr_47644 = state_47639;
(statearr_47644[(8)] = inst_47619__$1);

return statearr_47644;
})();
if(inst_47621){
var statearr_47645_48590 = state_47639__$1;
(statearr_47645_48590[(1)] = (5));

} else {
var statearr_47646_48591 = state_47639__$1;
(statearr_47646_48591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (6))){
var state_47639__$1 = state_47639;
var statearr_47647_48592 = state_47639__$1;
(statearr_47647_48592[(2)] = null);

(statearr_47647_48592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (3))){
var inst_47636 = (state_47639[(2)]);
var inst_47637 = cljs.core.async.close_BANG_(out);
var state_47639__$1 = (function (){var statearr_47648 = state_47639;
(statearr_47648[(9)] = inst_47636);

return statearr_47648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47639__$1,inst_47637);
} else {
if((state_val_47640 === (2))){
var state_47639__$1 = state_47639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47639__$1,(4),ch);
} else {
if((state_val_47640 === (11))){
var inst_47619 = (state_47639[(8)]);
var inst_47628 = (state_47639[(2)]);
var inst_47616 = inst_47619;
var state_47639__$1 = (function (){var statearr_47649 = state_47639;
(statearr_47649[(10)] = inst_47628);

(statearr_47649[(7)] = inst_47616);

return statearr_47649;
})();
var statearr_47650_48593 = state_47639__$1;
(statearr_47650_48593[(2)] = null);

(statearr_47650_48593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (9))){
var inst_47619 = (state_47639[(8)]);
var state_47639__$1 = state_47639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47639__$1,(11),out,inst_47619);
} else {
if((state_val_47640 === (5))){
var inst_47616 = (state_47639[(7)]);
var inst_47619 = (state_47639[(8)]);
var inst_47623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47619,inst_47616);
var state_47639__$1 = state_47639;
if(inst_47623){
var statearr_47652_48597 = state_47639__$1;
(statearr_47652_48597[(1)] = (8));

} else {
var statearr_47653_48598 = state_47639__$1;
(statearr_47653_48598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (10))){
var inst_47631 = (state_47639[(2)]);
var state_47639__$1 = state_47639;
var statearr_47654_48599 = state_47639__$1;
(statearr_47654_48599[(2)] = inst_47631);

(statearr_47654_48599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47640 === (8))){
var inst_47616 = (state_47639[(7)]);
var tmp47651 = inst_47616;
var inst_47616__$1 = tmp47651;
var state_47639__$1 = (function (){var statearr_47655 = state_47639;
(statearr_47655[(7)] = inst_47616__$1);

return statearr_47655;
})();
var statearr_47656_48600 = state_47639__$1;
(statearr_47656_48600[(2)] = null);

(statearr_47656_48600[(1)] = (2));


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
});})(c__46301__auto___48587,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48587,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47657[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47657[(1)] = (1));

return statearr_47657;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47639){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47639);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47658){if((e47658 instanceof Object)){
var ex__46204__auto__ = e47658;
var statearr_47659_48604 = state_47639;
(statearr_47659_48604[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48605 = state_47639;
state_47639 = G__48605;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48587,out))
})();
var state__46303__auto__ = (function (){var statearr_47660 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47660[(6)] = c__46301__auto___48587);

return statearr_47660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48587,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47662 = arguments.length;
switch (G__47662) {
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
var c__46301__auto___48609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48609,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48609,out){
return (function (state_47700){
var state_val_47701 = (state_47700[(1)]);
if((state_val_47701 === (7))){
var inst_47696 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
var statearr_47702_48610 = state_47700__$1;
(statearr_47702_48610[(2)] = inst_47696);

(statearr_47702_48610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (1))){
var inst_47663 = (new Array(n));
var inst_47664 = inst_47663;
var inst_47665 = (0);
var state_47700__$1 = (function (){var statearr_47703 = state_47700;
(statearr_47703[(7)] = inst_47665);

(statearr_47703[(8)] = inst_47664);

return statearr_47703;
})();
var statearr_47704_48611 = state_47700__$1;
(statearr_47704_48611[(2)] = null);

(statearr_47704_48611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (4))){
var inst_47668 = (state_47700[(9)]);
var inst_47668__$1 = (state_47700[(2)]);
var inst_47669 = (inst_47668__$1 == null);
var inst_47670 = cljs.core.not(inst_47669);
var state_47700__$1 = (function (){var statearr_47705 = state_47700;
(statearr_47705[(9)] = inst_47668__$1);

return statearr_47705;
})();
if(inst_47670){
var statearr_47706_48612 = state_47700__$1;
(statearr_47706_48612[(1)] = (5));

} else {
var statearr_47707_48613 = state_47700__$1;
(statearr_47707_48613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (15))){
var inst_47690 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
var statearr_47708_48614 = state_47700__$1;
(statearr_47708_48614[(2)] = inst_47690);

(statearr_47708_48614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (13))){
var state_47700__$1 = state_47700;
var statearr_47709_48615 = state_47700__$1;
(statearr_47709_48615[(2)] = null);

(statearr_47709_48615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (6))){
var inst_47665 = (state_47700[(7)]);
var inst_47686 = (inst_47665 > (0));
var state_47700__$1 = state_47700;
if(cljs.core.truth_(inst_47686)){
var statearr_47710_48616 = state_47700__$1;
(statearr_47710_48616[(1)] = (12));

} else {
var statearr_47711_48618 = state_47700__$1;
(statearr_47711_48618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (3))){
var inst_47698 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47700__$1,inst_47698);
} else {
if((state_val_47701 === (12))){
var inst_47664 = (state_47700[(8)]);
var inst_47688 = cljs.core.vec(inst_47664);
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47700__$1,(15),out,inst_47688);
} else {
if((state_val_47701 === (2))){
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47700__$1,(4),ch);
} else {
if((state_val_47701 === (11))){
var inst_47680 = (state_47700[(2)]);
var inst_47681 = (new Array(n));
var inst_47664 = inst_47681;
var inst_47665 = (0);
var state_47700__$1 = (function (){var statearr_47712 = state_47700;
(statearr_47712[(7)] = inst_47665);

(statearr_47712[(10)] = inst_47680);

(statearr_47712[(8)] = inst_47664);

return statearr_47712;
})();
var statearr_47713_48620 = state_47700__$1;
(statearr_47713_48620[(2)] = null);

(statearr_47713_48620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (9))){
var inst_47664 = (state_47700[(8)]);
var inst_47678 = cljs.core.vec(inst_47664);
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47700__$1,(11),out,inst_47678);
} else {
if((state_val_47701 === (5))){
var inst_47665 = (state_47700[(7)]);
var inst_47664 = (state_47700[(8)]);
var inst_47668 = (state_47700[(9)]);
var inst_47673 = (state_47700[(11)]);
var inst_47672 = (inst_47664[inst_47665] = inst_47668);
var inst_47673__$1 = (inst_47665 + (1));
var inst_47674 = (inst_47673__$1 < n);
var state_47700__$1 = (function (){var statearr_47714 = state_47700;
(statearr_47714[(12)] = inst_47672);

(statearr_47714[(11)] = inst_47673__$1);

return statearr_47714;
})();
if(cljs.core.truth_(inst_47674)){
var statearr_47715_48621 = state_47700__$1;
(statearr_47715_48621[(1)] = (8));

} else {
var statearr_47716_48622 = state_47700__$1;
(statearr_47716_48622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (14))){
var inst_47693 = (state_47700[(2)]);
var inst_47694 = cljs.core.async.close_BANG_(out);
var state_47700__$1 = (function (){var statearr_47718 = state_47700;
(statearr_47718[(13)] = inst_47693);

return statearr_47718;
})();
var statearr_47719_48626 = state_47700__$1;
(statearr_47719_48626[(2)] = inst_47694);

(statearr_47719_48626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (10))){
var inst_47684 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
var statearr_47720_48627 = state_47700__$1;
(statearr_47720_48627[(2)] = inst_47684);

(statearr_47720_48627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (8))){
var inst_47664 = (state_47700[(8)]);
var inst_47673 = (state_47700[(11)]);
var tmp47717 = inst_47664;
var inst_47664__$1 = tmp47717;
var inst_47665 = inst_47673;
var state_47700__$1 = (function (){var statearr_47721 = state_47700;
(statearr_47721[(7)] = inst_47665);

(statearr_47721[(8)] = inst_47664__$1);

return statearr_47721;
})();
var statearr_47722_48634 = state_47700__$1;
(statearr_47722_48634[(2)] = null);

(statearr_47722_48634[(1)] = (2));


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
});})(c__46301__auto___48609,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48609,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47723[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47723[(1)] = (1));

return statearr_47723;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47700){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47700);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47724){if((e47724 instanceof Object)){
var ex__46204__auto__ = e47724;
var statearr_47725_48636 = state_47700;
(statearr_47725_48636[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48637 = state_47700;
state_47700 = G__48637;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48609,out))
})();
var state__46303__auto__ = (function (){var statearr_47726 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47726[(6)] = c__46301__auto___48609);

return statearr_47726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48609,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47728 = arguments.length;
switch (G__47728) {
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
var c__46301__auto___48643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46301__auto___48643,out){
return (function (){
var f__46302__auto__ = (function (){var switch__46200__auto__ = ((function (c__46301__auto___48643,out){
return (function (state_47770){
var state_val_47771 = (state_47770[(1)]);
if((state_val_47771 === (7))){
var inst_47766 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47772_48644 = state_47770__$1;
(statearr_47772_48644[(2)] = inst_47766);

(statearr_47772_48644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (1))){
var inst_47729 = [];
var inst_47730 = inst_47729;
var inst_47731 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47770__$1 = (function (){var statearr_47773 = state_47770;
(statearr_47773[(7)] = inst_47731);

(statearr_47773[(8)] = inst_47730);

return statearr_47773;
})();
var statearr_47774_48645 = state_47770__$1;
(statearr_47774_48645[(2)] = null);

(statearr_47774_48645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (4))){
var inst_47734 = (state_47770[(9)]);
var inst_47734__$1 = (state_47770[(2)]);
var inst_47735 = (inst_47734__$1 == null);
var inst_47736 = cljs.core.not(inst_47735);
var state_47770__$1 = (function (){var statearr_47775 = state_47770;
(statearr_47775[(9)] = inst_47734__$1);

return statearr_47775;
})();
if(inst_47736){
var statearr_47776_48646 = state_47770__$1;
(statearr_47776_48646[(1)] = (5));

} else {
var statearr_47777_48647 = state_47770__$1;
(statearr_47777_48647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (15))){
var inst_47760 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47778_48648 = state_47770__$1;
(statearr_47778_48648[(2)] = inst_47760);

(statearr_47778_48648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (13))){
var state_47770__$1 = state_47770;
var statearr_47779_48649 = state_47770__$1;
(statearr_47779_48649[(2)] = null);

(statearr_47779_48649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (6))){
var inst_47730 = (state_47770[(8)]);
var inst_47755 = inst_47730.length;
var inst_47756 = (inst_47755 > (0));
var state_47770__$1 = state_47770;
if(cljs.core.truth_(inst_47756)){
var statearr_47780_48650 = state_47770__$1;
(statearr_47780_48650[(1)] = (12));

} else {
var statearr_47781_48651 = state_47770__$1;
(statearr_47781_48651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (3))){
var inst_47768 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47770__$1,inst_47768);
} else {
if((state_val_47771 === (12))){
var inst_47730 = (state_47770[(8)]);
var inst_47758 = cljs.core.vec(inst_47730);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47770__$1,(15),out,inst_47758);
} else {
if((state_val_47771 === (2))){
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47770__$1,(4),ch);
} else {
if((state_val_47771 === (11))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47748 = (state_47770[(2)]);
var inst_47749 = [];
var inst_47750 = inst_47749.push(inst_47734);
var inst_47730 = inst_47749;
var inst_47731 = inst_47738;
var state_47770__$1 = (function (){var statearr_47782 = state_47770;
(statearr_47782[(11)] = inst_47750);

(statearr_47782[(12)] = inst_47748);

(statearr_47782[(7)] = inst_47731);

(statearr_47782[(8)] = inst_47730);

return statearr_47782;
})();
var statearr_47783_48652 = state_47770__$1;
(statearr_47783_48652[(2)] = null);

(statearr_47783_48652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (9))){
var inst_47730 = (state_47770[(8)]);
var inst_47746 = cljs.core.vec(inst_47730);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47770__$1,(11),out,inst_47746);
} else {
if((state_val_47771 === (5))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47731 = (state_47770[(7)]);
var inst_47738__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47734) : f.call(null,inst_47734));
var inst_47739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47738__$1,inst_47731);
var inst_47740 = cljs.core.keyword_identical_QMARK_(inst_47731,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47741 = ((inst_47739) || (inst_47740));
var state_47770__$1 = (function (){var statearr_47784 = state_47770;
(statearr_47784[(10)] = inst_47738__$1);

return statearr_47784;
})();
if(cljs.core.truth_(inst_47741)){
var statearr_47785_48653 = state_47770__$1;
(statearr_47785_48653[(1)] = (8));

} else {
var statearr_47786_48654 = state_47770__$1;
(statearr_47786_48654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (14))){
var inst_47763 = (state_47770[(2)]);
var inst_47764 = cljs.core.async.close_BANG_(out);
var state_47770__$1 = (function (){var statearr_47788 = state_47770;
(statearr_47788[(13)] = inst_47763);

return statearr_47788;
})();
var statearr_47789_48656 = state_47770__$1;
(statearr_47789_48656[(2)] = inst_47764);

(statearr_47789_48656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (10))){
var inst_47753 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47790_48657 = state_47770__$1;
(statearr_47790_48657[(2)] = inst_47753);

(statearr_47790_48657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (8))){
var inst_47734 = (state_47770[(9)]);
var inst_47738 = (state_47770[(10)]);
var inst_47730 = (state_47770[(8)]);
var inst_47743 = inst_47730.push(inst_47734);
var tmp47787 = inst_47730;
var inst_47730__$1 = tmp47787;
var inst_47731 = inst_47738;
var state_47770__$1 = (function (){var statearr_47791 = state_47770;
(statearr_47791[(14)] = inst_47743);

(statearr_47791[(7)] = inst_47731);

(statearr_47791[(8)] = inst_47730__$1);

return statearr_47791;
})();
var statearr_47792_48659 = state_47770__$1;
(statearr_47792_48659[(2)] = null);

(statearr_47792_48659[(1)] = (2));


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
});})(c__46301__auto___48643,out))
;
return ((function (switch__46200__auto__,c__46301__auto___48643,out){
return (function() {
var cljs$core$async$state_machine__46201__auto__ = null;
var cljs$core$async$state_machine__46201__auto____0 = (function (){
var statearr_47793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47793[(0)] = cljs$core$async$state_machine__46201__auto__);

(statearr_47793[(1)] = (1));

return statearr_47793;
});
var cljs$core$async$state_machine__46201__auto____1 = (function (state_47770){
while(true){
var ret_value__46202__auto__ = (function (){try{while(true){
var result__46203__auto__ = switch__46200__auto__(state_47770);
if(cljs.core.keyword_identical_QMARK_(result__46203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46203__auto__;
}
break;
}
}catch (e47794){if((e47794 instanceof Object)){
var ex__46204__auto__ = e47794;
var statearr_47795_48662 = state_47770;
(statearr_47795_48662[(5)] = ex__46204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48663 = state_47770;
state_47770 = G__48663;
continue;
} else {
return ret_value__46202__auto__;
}
break;
}
});
cljs$core$async$state_machine__46201__auto__ = function(state_47770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46201__auto____1.call(this,state_47770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46201__auto____0;
cljs$core$async$state_machine__46201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46201__auto____1;
return cljs$core$async$state_machine__46201__auto__;
})()
;})(switch__46200__auto__,c__46301__auto___48643,out))
})();
var state__46303__auto__ = (function (){var statearr_47796 = (f__46302__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46302__auto__.cljs$core$IFn$_invoke$arity$0() : f__46302__auto__.call(null));
(statearr_47796[(6)] = c__46301__auto___48643);

return statearr_47796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46303__auto__);
});})(c__46301__auto___48643,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
