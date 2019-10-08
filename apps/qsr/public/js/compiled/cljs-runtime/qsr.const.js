goog.provide('qsr.const$');
goog.require('cljs.core');
qsr.const$.words = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["He said to me, Why don't you NYAN? _[::::](_'w')_","GO is GOD.","It's a beautiful day outside.","\"format C: /Y\"","Lunch is around the corner.","You know what?","Shall we take a break?","Count the toasts you've eaten in your life!","Unleash the fire!","You forget a thousand things every day, pal.","Squish that cat."], null);
qsr.const$.random_word = (function qsr$const$random_word(){
var idx = cljs.core.rand_int(cljs.core.count(qsr.const$.words));
return (qsr.const$.words.cljs$core$IFn$_invoke$arity$1 ? qsr.const$.words.cljs$core$IFn$_invoke$arity$1(idx) : qsr.const$.words.call(null,idx));
});

//# sourceMappingURL=qsr.const.js.map
