var assert = require("assert");
var blackjack = require("../blackjack.js");


describe('Blackjack Game', function(){
    beforeEach(function(){
        playerHand=[];
        dealerHand=[];
        playerActive=false;
    });
    describe('deck', function(){
        it('should exist', function(){
            assert.equal(typeof deck, 'object');
        });
        it('should have a length of 52', function(){
            assert.equal(deck.length, 52);
        });
    });
    describe('makeShoe', function(){
        it('should be a function', function(){
            assert.equal(typeof makeShoe, 'function');
        });
        it('should have a length equal to deck*numberOfDecks', function(){
            assert.deepEqual(makeShoe(1).length, 52);
            assert.deepEqual(makeShoe(2).length, 104);
            assert.deepEqual(makeShoe(6).length, 312);
        })
    });
    describe('shuffleDeck', function(){
        it('should return a shuffledShoe the same length as the shoe', function(){
            assert.equal(makeShoe(1).length, shuffleShoe(makeShoe(1)).length);
            assert.equal(makeShoe(2).length, shuffleShoe(makeShoe(2)).length);
        })

    });
    describe('initialDeal', function(){
         it('should have removed four cards from the shuffledShoe and dealt the right cards out', function(){
            var shuffledShoe = shuffleShoe(makeShoe(1));
            var card1 = shuffledShoe[0];
            var card2 = shuffledShoe[1];
            var card3 = shuffledShoe[2];
            var card4 = shuffledShoe[3];
            assert.equal(48, initialDeal(shuffledShoe).length);
            assert.equal(card1, playerHand[0]);
            assert.equal(card2, dealerHand[0]);
            assert.equal(card3, playerHand[1]);
            assert.equal(card4, dealerHand[1]);
        });
        it('should deal two cards each to the player and the dealer', function() {
            initialDeal(shuffleShoe(makeShoe(1)));
            assert.equal(2, playerHand.length);
            assert.equal(2, dealerHand.length);
        });
        it('should activate the player after the deal', function(){
            initialDeal(shuffleShoe(makeShoe(1)));
            assert.equal(playerActive, true);
        });

    });
    describe('scoreHand', function(){
        it('should check the dealerHand score', function(){
            assert.equal(scoreHand([5,5]), 10);
            assert.equal(scoreHand([10,8]), 18);
            assert.equal(scoreHand([3,5,8,2]), 18);
            assert.equal(scoreHand([6,5,10]), 21);
        });
    });
    describe('testFor21', function(){
        it('should check for 21', function(){
            assert.equal(testFor21(scoreHand([10,11])), true);
            assert.equal(testFor21(scoreHand([5,5])), false);
        })
    });
    describe('testForSplit', function(){
        it('should check that both cards are the same', function(){
            assert.equal(testForSplit([6,6]), true);
            assert.equal(testForSplit([6,7]), false);
        })
    });
    describe('testForBust', function(){
        it('should check to see if score is higher than 21', function(){
            assert.equal(testForBust(22), true);
            assert.equal(testForBust(18), false);
        })
    });
    describe('testForUnreducedAces', function(){
        it('should find if a busting hand has aces that could be reduced in score value', function(){
            assert.equal(testForUnreducedAces([10,5,11]), true);
            assert.equal(testForUnreducedAces([10,10,10]), false);
        })
    });
    describe('reduceAce', function(){
        it('should take the first ace and reduce the score value from 11 to 1', function(){
            assert.deepEqual(reduceAce([10,10,11]), [10,10,1]);
            assert.deepEqual(reduceAce([9,11,11]), [9,1,11]);
        })
    });
    describe('doubleDown', function(){
        it('should deal one card and then advance the turn', function(){
            initialDeal(shuffleShoe(makeShoe(1)));
            doubleDown();
            assert.equal(playerHand.length, 3);
            assert.equal(playerActive, false);
        })
    });
    describe('dealCard', function(){
        it('should deal one card to the correct player', function(){
            initialDeal(shuffleShoe(makeShoe(1)));
            dealCard("player");
            assert.equal(playerHand.length, 3);
            assert.equal(shuffledShoe.length, 47);
            dealCard("player");
            assert.equal(playerHand.length, 4);
            assert.equal(shuffledShoe.length, 46);
            dealCard("dealer");
            assert.equal(dealerHand.length, 3);
            assert.equal(shuffledShoe.length, 45);
        })
    });
    describe('evaluateHand', function(){
        it('should score the hand and then decide if the hand is busted', function(){
            assert.equal(evaluateHand([10,10,10]), "busted");
        });
        it('should check a busted hand for unreduced aces, reduce and ace and return the score', function(){
            assert.equal(evaluateHand([10,10,11]), 21);
            assert.equal(evaluateHand([10,11,2]), 13);
        })
    });

});
var deck = [11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10];
var playerHand = [];
var dealerHand = [];
var shuffledShoe = [];
var playerActive = false;
function makeShoe(numberOfDecks) {
    var shoe =[];
    for (var i = 1; i <= numberOfDecks; i++) {
        shoe = shoe.concat(deck);
    }
    return shoe;
}
function shuffleShoe(shoe){
    shuffledShoe=[];
    for(var i=shoe.length;i >=0; i--){
        var random = Math.floor(Math.random()*i);
        shuffledShoe = shuffledShoe.concat(shoe.splice(random, 1));
    }
    return shuffledShoe;
}
function initialDeal(shuffledShoe) {
    for (var i=1; i<= 2; i++) {
        playerHand = playerHand.concat(shuffledShoe.shift());
        dealerHand = dealerHand.concat(shuffledShoe.shift());
    }
    playerActive = true;
    return shuffledShoe;
}
function scoreHand(hand){
    var score=0;
    for (var i=0; i<hand.length; i++){
         score = score + hand[i];
    } return score;

}
function testFor21(score){
    return score == 21;
}
function testForSplit(hand){
    return hand[0] == hand [1];
}
function testForBust(score){
    return score > 21;
}
function testForUnreducedAces(hand){
    return hand.indexOf(11) != -1;
}
function reduceAce(hand){
    var firstAceLocation = hand.indexOf(11);
    hand[firstAceLocation] = 1;
    return hand;
}
function dealCard(hand){
    if (hand == "player"){
        playerHand = playerHand.concat(shuffledShoe.shift());
    } else if (hand == "dealer") {
        dealerHand = dealerHand.concat(shuffledShoe.shift());
    }
}
function evaluateHand(hand){
    if (testForBust(scoreHand(hand))){
        if (testForUnreducedAces(hand)) {
            reduceAce(hand);
            return testForBust(evaluateHand(hand)) ? "busted" : scoreHand(hand);
        }
        return "busted";
    } else {
        return scoreHand(hand);
    }
}
function doubleDown(){
    dealCard("player");
    playerActive = false;
}
