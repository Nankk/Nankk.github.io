// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__39435 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__39435,(0),null);
var zpath = cljs.core.nth.call(null,vec__39435,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__39438 = zprint.zutil.zfirst.call(null,zloc);
var G__39438__$1 = (((G__39438 == null))?null:zprint.zutil.right_STAR_.call(null,G__39438));
var G__39438__$2 = (((G__39438__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__39438__$1));
var G__39438__$3 = (((G__39438__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__39438__$2));
if((G__39438__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__39438__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__39439 = zprint.zutil.zfirst.call(null,zloc);
var G__39439__$1 = (((G__39439 == null))?null:zprint.zutil.right_STAR_.call(null,G__39439));
var G__39439__$2 = (((G__39439__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__39439__$1));
var G__39439__$3 = (((G__39439__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__39439__$2));
var G__39439__$4 = (((G__39439__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__39439__$3));
var G__39439__$5 = (((G__39439__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__39439__$4));
if((G__39439__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__39439__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__39440 = zprint.zutil.zrightnws.call(null,nloc);
var G__39441 = nloc;
nloc = G__39440;
ploc = G__39441;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__39442 = zprint.zutil.zleftnws.call(null,nloc);
var G__39443 = nloc;
nloc = G__39442;
ploc = G__39443;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5733__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__39444 = zprint.zutil.zrightnws.call(null,nloc);
var G__39445 = (i - (1));
nloc = G__39444;
i = G__39445;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__39446 = zprint.zutil.zrightnws.call(null,nloc);
var G__39447 = (i + (1));
nloc = G__39446;
i = G__39447;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__39448 = zprint.zutil.right_STAR_.call(null,nloc);
var G__39449 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,(function (){var and__4120__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__39448;
out = G__39449;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__39450 = zprint.zutil.right_STAR_.call(null,nloc);
var G__39451 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__39450;
out = G__39451;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__39452 = zprint.zutil.right_STAR_.call(null,nloc);
var G__39453 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__39452;
out = G__39453;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__39454 = zprint.zutil.right_STAR_.call(null,nloc);
var G__39455 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__39454;
out = G__39455;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_(zprint.zutil.rightmost_QMARK_.call(null,nloc))){
return nloc;
} else {
var G__39456 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__39456;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return zprint.zutil.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = zprint.zutil.right_STAR_.call(null,nloc);
var G__39457 = xloc;
var G__39458 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__39457;
index = G__39458;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__39459 = zprint.zutil.up_STAR_.call(null,nloc);
var G__39460 = (0);
var G__39461 = cljs.core.cons.call(null,left,out);
nloc = G__39459;
left = G__39460;
out = G__39461;
continue;
}
} else {
var G__39462 = zprint.zutil.left_STAR_.call(null,nloc);
var G__39463 = (left + (1));
var G__39464 = out;
nloc = G__39462;
left = G__39463;
out = G__39464;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__39465 = zprint.zutil.up_STAR_.call(null,nloc);
var G__39466 = (0);
var G__39467 = cljs.core.cons.call(null,left,out);
nloc = G__39465;
left = G__39466;
out = G__39467;
continue;
}
} else {
var G__39468 = zprint.zutil.left_STAR_.call(null,nloc);
var G__39469 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__39470 = out;
nloc = G__39468;
left = G__39469;
out = G__39470;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__39471 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__39471;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__39472 = zprint.zutil.right_STAR_.call(null,nloc);
var G__39473 = (remaining_right - (1));
nloc = G__39472;
remaining_right = G__39473;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__39474 = zprint.zutil.left_STAR_.call(null,nloc);
var G__39475 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__39474;
spaces = G__39475;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__39476 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__39476;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__39480 = cljs.core.first.call(null,pair_seq__$1);
var seq__39481 = cljs.core.seq.call(null,vec__39480);
var first__39482 = cljs.core.first.call(null,seq__39481);
var seq__39481__$1 = cljs.core.next.call(null,seq__39481);
var k = first__39482;
var rest_of_pair = seq__39481__$1;
var pair = vec__39480;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__39483 = ns;
var G__39484 = cljs.core.next.call(null,pair_seq__$1);
var G__39485 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__39483;
pair_seq__$1 = G__39484;
out = G__39485;
continue;
} else {
return null;
}
} else {
var G__39486 = current_ns;
var G__39487 = cljs.core.next.call(null,pair_seq__$1);
var G__39488 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__39486;
pair_seq__$1 = G__39487;
out = G__39488;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__39489 = ns;
var G__39490 = cljs.core.next.call(null,pair_seq__$1);
var G__39491 = cljs.core.conj.call(null,out,pair);
ns = G__39489;
pair_seq__$1 = G__39490;
out = G__39491;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__39492 = zprint.zfns.zstring;
var znumstr_orig_val__39493 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__39494 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__39495 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__39496 = zprint.zfns.zsexpr;
var zseqnws_orig_val__39497 = zprint.zfns.zseqnws;
var zmap_right_orig_val__39498 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__39499 = zprint.zfns.zfocus_style;
var zfirst_orig_val__39500 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__39501 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__39502 = zprint.zfns.zsecond;
var zthird_orig_val__39503 = zprint.zfns.zthird;
var zfourth_orig_val__39504 = zprint.zfns.zfourth;
var znthnext_orig_val__39505 = zprint.zfns.znthnext;
var zcount_orig_val__39506 = zprint.zfns.zcount;
var zmap_orig_val__39507 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__39508 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__39509 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__39510 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__39511 = zprint.zfns.zfocus;
var zfind_path_orig_val__39512 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__39513 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__39514 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__39515 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__39516 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__39517 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__39518 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__39519 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__39520 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__39521 = zprint.zfns.ztag;
var zlast_orig_val__39522 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__39523 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__39524 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__39525 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__39526 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__39527 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__39528 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__39529 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__39530 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__39531 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__39532 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__39533 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__39534 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__39535 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__39536 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__39537 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__39538 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__39539 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__39540 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__39541 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__39542 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__39543 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__39544 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__39545 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__39546 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__39547 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__39548 = zprint.zfns.zfind;
var ztake_append_orig_val__39549 = zprint.zfns.ztake_append;
var zstring_temp_val__39550 = rewrite_clj.zip.string;
var znumstr_temp_val__39551 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__39552 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__39553 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__39554 = zprint.zutil.sexpr;
var zseqnws_temp_val__39555 = zprint.zutil.zseqnws;
var zmap_right_temp_val__39556 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__39557 = zprint.zutil.zfocus_style;
var zfirst_temp_val__39558 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__39559 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__39560 = zprint.zutil.zsecond;
var zthird_temp_val__39561 = zprint.zutil.zthird;
var zfourth_temp_val__39562 = zprint.zutil.zfourth;
var znthnext_temp_val__39563 = zprint.zutil.znthnext;
var zcount_temp_val__39564 = zprint.zutil.zcount;
var zmap_temp_val__39565 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__39566 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__39567 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__39568 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__39569 = zprint.zutil.zfocus;
var zfind_path_temp_val__39570 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__39571 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__39572 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__39573 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__39574 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__39575 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__39576 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__39577 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__39578 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__39579 = zprint.zutil.ztag;
var zlast_temp_val__39580 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__39581 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__39582 = cljs.core.constantly.call(null,false);
var zderef_temp_val__39583 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__39584 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__39585 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__39586 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__39587 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__39588 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__39589 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__39590 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__39591 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__39592 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__39593 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__39594 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__39595 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__39596 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__39597 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__39598 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__39599 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__39600 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__39601 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__39602 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__39603 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__39604 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__39605 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__39606 = zprint.zutil.zfind;
var ztake_append_temp_val__39607 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__39550;

zprint.zfns.znumstr = znumstr_temp_val__39551;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__39552;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__39553;

zprint.zfns.zsexpr = zsexpr_temp_val__39554;

zprint.zfns.zseqnws = zseqnws_temp_val__39555;

zprint.zfns.zmap_right = zmap_right_temp_val__39556;

zprint.zfns.zfocus_style = zfocus_style_temp_val__39557;

zprint.zfns.zfirst = zfirst_temp_val__39558;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__39559;

zprint.zfns.zsecond = zsecond_temp_val__39560;

zprint.zfns.zthird = zthird_temp_val__39561;

zprint.zfns.zfourth = zfourth_temp_val__39562;

zprint.zfns.znthnext = znthnext_temp_val__39563;

zprint.zfns.zcount = zcount_temp_val__39564;

zprint.zfns.zmap = zmap_temp_val__39565;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__39566;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__39567;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__39568;

zprint.zfns.zfocus = zfocus_temp_val__39569;

zprint.zfns.zfind_path = zfind_path_temp_val__39570;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__39571;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__39572;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__39573;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__39574;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__39575;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__39576;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__39577;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__39578;

zprint.zfns.ztag = ztag_temp_val__39579;

zprint.zfns.zlast = zlast_temp_val__39580;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__39581;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__39582;

zprint.zfns.zderef = zderef_temp_val__39583;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__39584;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__39585;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__39586;

zprint.zfns.zexpandarray = zexpandarray_temp_val__39587;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__39588;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__39589;

zprint.zfns.zmap_all = zmap_all_temp_val__39590;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__39591;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__39592;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__39593;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__39594;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__39595;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__39596;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__39597;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__39598;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__39599;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__39600;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__39601;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__39602;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__39603;

zprint.zfns.zlift_ns = zlift_ns_temp_val__39604;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__39605;

zprint.zfns.zfind = zfind_temp_val__39606;

zprint.zfns.ztake_append = ztake_append_temp_val__39607;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__39549;

zprint.zfns.zfind = zfind_orig_val__39548;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__39547;

zprint.zfns.zlift_ns = zlift_ns_orig_val__39546;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__39545;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__39544;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__39543;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__39542;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__39541;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__39540;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__39539;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__39538;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__39537;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__39536;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__39535;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__39534;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__39533;

zprint.zfns.zmap_all = zmap_all_orig_val__39532;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__39531;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__39530;

zprint.zfns.zexpandarray = zexpandarray_orig_val__39529;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__39528;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__39527;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__39526;

zprint.zfns.zderef = zderef_orig_val__39525;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__39524;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__39523;

zprint.zfns.zlast = zlast_orig_val__39522;

zprint.zfns.ztag = ztag_orig_val__39521;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__39520;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__39519;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__39518;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__39517;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__39516;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__39515;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__39514;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__39513;

zprint.zfns.zfind_path = zfind_path_orig_val__39512;

zprint.zfns.zfocus = zfocus_orig_val__39511;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__39510;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__39509;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__39508;

zprint.zfns.zmap = zmap_orig_val__39507;

zprint.zfns.zcount = zcount_orig_val__39506;

zprint.zfns.znthnext = znthnext_orig_val__39505;

zprint.zfns.zfourth = zfourth_orig_val__39504;

zprint.zfns.zthird = zthird_orig_val__39503;

zprint.zfns.zsecond = zsecond_orig_val__39502;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__39501;

zprint.zfns.zfirst = zfirst_orig_val__39500;

zprint.zfns.zfocus_style = zfocus_style_orig_val__39499;

zprint.zfns.zmap_right = zmap_right_orig_val__39498;

zprint.zfns.zseqnws = zseqnws_orig_val__39497;

zprint.zfns.zsexpr = zsexpr_orig_val__39496;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__39495;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__39494;

zprint.zfns.znumstr = znumstr_orig_val__39493;

zprint.zfns.zstring = zstring_orig_val__39492;
}});

//# sourceMappingURL=zutil.js.map?rel=1563379472431
