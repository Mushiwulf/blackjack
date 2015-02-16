var assert = require("assert");
var blackjack = require("../blackjack.js");


describe('Blackjack Game', function(){
    describe('deck stuff', function(){
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
        it('should return a shoe', function(){
            //whoops I overwrote this test
        });
        it('should have a length equal to deck*numberOfDecks', function(){
            assert.deepEqual(makeShoe(1).length, 52);
            assert.deepEqual(makeShoe(2).length, 104);
            assert.deepEqual(makeShoe(6).length, 312);
        })
    })
});
var deck = [1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10];
var makeShoe = function(numberOfDecks) {
    var shoe =[];
    for (var i = 1; i <= numberOfDecks; i++) {
        shoe = shoe.concat(deck);
    }

    return shoe;
};
