var assert = require("assert");
var C = require('../blackjack.js');

describe('Blackjack Game', function(){
    describe('deck stuff', function(){
        it('should exist', function(){
            assert.equal(typeof C.deck, 'object');
        })
    })
});
