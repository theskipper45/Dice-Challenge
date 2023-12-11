var min=1;
var max=7;
var random1=Math.random();
var randomNumber1=Math.floor(random1*(max-min)+min);
var randomimages1="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];

var random2=Math.random();
image1.setAttribute("src",randomimages1);
var randomNumber2=Math.floor(random2*(max-min)+min);
var randomimages2="dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimages2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
function refresh(){
    window.location.reload("Refresh")
  }
