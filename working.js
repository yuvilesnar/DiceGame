
function loader(){
var rand1 = Math.floor((Math.random()*(6-1))+1);
var randimg = "dice"+rand1+".png";
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',randimg);
var rand2 = Math.floor((Math.random()*(6-1))+1);
var randimg2 = "dice"+rand2+".png";
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src',randimg2);
if(rand1 == rand2){
    var word = "Draw🎌";
    document.querySelector('h1').innerHTML = word;
}
else if(rand1 > rand2){
    document.querySelector('h1').innerHTML = "🚩player1 wins";
}
else {
    document.querySelector('h1').innerHTML = "player2 wins🚩";
}
}
