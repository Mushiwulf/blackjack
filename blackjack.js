
    var deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    function createShoe(deck, numberOfDecks) {
        var shoe = [];
        if (numberOfDecks === 1) {
            shoe = deck;
            return shoe;
        } else {

            for (var i = 1; i<=numberOfDecks; i++) {
                shoe=shoe.concat(deck);
            } return shoe;
        }

    }
    function testDeal(){
        var shoe = createShoe(deck,1);
        var dealerHand = shoe.shift();
        var playerHand = shoe.shift();
        console.log("Dealer has " + dealerHand + ", Player has "+playerHand);
    }
    function dealInitialHand(players) {
        var shoe = createShoe(deck, 2);
        for (var i=0; i<=1; i++) {
            for (var j=0; j <=players; j++) {
                var hand
            }
        }
    }
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    shuffle(deck);
    console.log(deck);
    testDeal();

