// Compiled by ClojureScript 1.10.520 {}
goog.provide('rock_paper_scissors.rps');
goog.require('cljs.core');
rock_paper_scissors.rps._LT__hand = (function rock_paper_scissors$rps$_LT__hand(hand){
var G__34277 = hand;
var G__34277__$1 = (((G__34277 instanceof cljs.core.Keyword))?G__34277.fqn:null);
switch (G__34277__$1) {
case "rock-paper-scissors.rps/rock":
return (0);

break;
case "rock-paper-scissors.rps/scissors":
return (1);

break;
case "rock-paper-scissors.rps/paper":
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34277__$1)].join('')));

}
});
rock_paper_scissors.rps.__GT_hand = (function rock_paper_scissors$rps$__GT_hand(num){
var G__34279 = num;
switch (G__34279) {
case (0):
return new cljs.core.Keyword("rock-paper-scissors.rps","rock","rock-paper-scissors.rps/rock",-1641505450);

break;
case (1):
return new cljs.core.Keyword("rock-paper-scissors.rps","scissors","rock-paper-scissors.rps/scissors",-821058625);

break;
case (2):
return new cljs.core.Keyword("rock-paper-scissors.rps","paper","rock-paper-scissors.rps/paper",651717010);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34279)].join('')));

}
});
rock_paper_scissors.rps.fight = (function rock_paper_scissors$rps$fight(you,enemy){
var result = (function rock_paper_scissors$rps$fight_$_result(n){
var G__34282 = n;
switch (G__34282) {
case (0):
return new cljs.core.Keyword("rock-paper-scissors.rps","draw","rock-paper-scissors.rps/draw",-1909488511);

break;
case (1):
return new cljs.core.Keyword("rock-paper-scissors.rps","lose","rock-paper-scissors.rps/lose",1128238341);

break;
case (2):
return new cljs.core.Keyword("rock-paper-scissors.rps","win","rock-paper-scissors.rps/win",-2123171864);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34282)].join('')));

}
});
return result.call(null,cljs.core.mod.call(null,((rock_paper_scissors.rps._LT__hand.call(null,you) - rock_paper_scissors.rps._LT__hand.call(null,enemy)) + (3)),(3)));
});

//# sourceMappingURL=rps.js.map?rel=1563379455186
