
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
function shuffleShoe(shoe){
    var shuffledShoe =[];
    for(i=shoe.length;i >=0; i--){
        var random = Math.floor(Math.random()*i);
        shuffledShoe = shuffledShoe.concat(shoe.splice(random, 1));
    }
    console.log(shuffledShoe);
    console.log(shuffledShoe.length);
}
shuffleShoe(shoe);