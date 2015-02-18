
var thingy = [2,3,4,5,11,5,6,7,11];
console.log(thingy);
var spot = thingy.indexOf(11);
thingy[spot] = 1;
console.log(thingy);
spot = thingy.indexOf(11);
thingy[spot] = 1;
console.log(thingy);
var shoe=[1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10];
var shoe2=[1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10
    ,1,2,3,4,5,6,7,8,9,10,10,10,10];
var playerHand =[];
var dealerHand =[];
var shuffledShoe =[];
function shuffleShoe(shoe){

    for(i=shoe.length;i >=0; i--){
        var random = Math.floor(Math.random()*i);
        shuffledShoe = shuffledShoe.concat(shoe.splice(random, 1));
    }
    console.log(shoe);
    console.log(shoe2);
    console.log(shuffledShoe);
    console.log(shuffledShoe.length);
    if (shoe2 === shuffledShoe) {
        console.log("Didn't shuffle very well");
    } else {
        console.log("Good shuffle");
    }
}
function initialDeal() {
    for (i=1; i<= 2; i++) {
        playerHand = playerHand.concat(shuffledShoe.shift());
        dealerHand = dealerHand.concat(shuffledShoe.shift());
    }
}
shuffleShoe(shoe);
initialDeal();
console.log("Player holds " + playerHand + " Dealer holds " + dealerHand + " Deck holds " + shuffledShoe.length + " cards.");