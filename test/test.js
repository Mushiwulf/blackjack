var assert = require("assert");
var blackjack = require("../blackjack.js");


describe('Blackjack Game', function(){
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

        //need a before each?
        it('should return a shuffledShoe the same length as the shoe', function(){
            assert.equal(makeShoe(1).length, shuffleShoe(makeShoe(1)).length);
            assert.equal(makeShoe(2).length, shuffleShoe(makeShoe(2)).length);
        })

    });
    describe('initialDeal', function(){
        it('should have removed two cards from the shuffledShoe', function(){
            assert.equal(48, initialDeal(shuffleShoe(makeShoe(1))).length);


        });
        it('should deal two cards each to the player rand the dealer', function() {
            assert.equal(2, playerHand.length);
            assert.equal(2, dealerHand.length);
             //need to figure out this set of tests
         //
        });

    })
});
var deck = [11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10
    ,11,2,3,4,5,6,7,8,9,10,10,10,10];
var playerHand = [];
var dealerHand = [];
function makeShoe(numberOfDecks) {
    var shoe =[];
    for (var i = 1; i <= numberOfDecks; i++) {
        shoe = shoe.concat(deck);
    }

    return shoe;
}
function shuffleShoe(shoe){
    var shuffledShoe=[];
    for(i=shoe.length;i >=0; i--){
        var random = Math.floor(Math.random()*i);
        shuffledShoe = shuffledShoe.concat(shoe.splice(random, 1));
    }
    return shuffledShoe;
}
function initialDeal(shuffledShoe) {
    for (i=1; i<= 2; i++) {
        playerHand = playerHand.concat(shuffledShoe.shift());
        dealerHand = dealerHand.concat(shuffledShoe.shift());
    }
    console.log(playerHand);
    return shuffledShoe;
}
