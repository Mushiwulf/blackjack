$(function() {
    var deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    createShoe = function(deck, numberOfDecks) {
        var shoe = [];
        if (numberOfDecks === 1) {
            shoe = deck;
            return shoe;
        } else {

            for (var i = 1; i<=numberOfDecks; i++) {
                shoe=shoe.concat(deck);
            } return shoe;
        }

    };
    dealInitialHand = function(players) {
        var shoe = createShoe(deck, 2);
        for (var i=0; i<=1; i++) {
            for (var j=0; j <=players; j++) {
                var hand
            }
        }
    };

    console.log(createShoe(deck, 4));

});