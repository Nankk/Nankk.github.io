goog.provide('day8.re_frame_10x.utils.animated');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
var module$node_modules$react_flip_move$dist$react_flip_move_cjs=shadow.js.require("module$node_modules$react_flip_move$dist$react_flip_move_cjs", {});
day8.re_frame_10x.utils.animated.component = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.adapt_react_class(module$node_modules$react_flip_move$dist$react_flip_move_cjs);
/**
 * mimic v-box style properties for standard :div
 *           note1: typicaly you should also set :class "rc-v-box display-flex"
 *           note2: re-com.box/justify-style & align-style for others
 */
day8.re_frame_10x.utils.animated.rc_v_box_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column nowrap",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start"], null);
/**
 * return merged component attributes suitable for animated v-box.
 * See https://github.com/joshwcomeau/react-flip-move#options
 * for supported props other then :style
 */
day8.re_frame_10x.utils.animated.v_box_options = (function day8$re_frame_10x$utils$animated$v_box_options(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__37561_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.animated.rc_v_box_style,p1__37561_SHARP_], 0));
})),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-box display-flex");
});
/**
 * mimic h-box style properties for standard :div
 *                note1: typicaly you should also set :class "rc-v-box display-flex"
 *                note2: re-com.box/justify-style & align-style for others
 */
day8.re_frame_10x.utils.animated.rc_h_box_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row nowrap",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start"], null);
/**
 * return merged component attributes suitable for animated h-box.
 * See https://github.com/joshwcomeau/react-flip-move#options
 * for supported props other then :style
 */
day8.re_frame_10x.utils.animated.h_box_options = (function day8$re_frame_10x$utils$animated$h_box_options(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__37563_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.animated.rc_h_box_style,p1__37563_SHARP_], 0));
})),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-box display-flex");
});

//# sourceMappingURL=day8.re_frame_10x.utils.animated.js.map
