var r = Math.floor(Math.random()*6)+1;
var q = Math.floor(Math.random()*6 )+1;
if(r>q)
{
  document.querySelector("h1").innerHTML="Player1 Won";
}
if(r<q)
{
  document.querySelector("h1").innerHTML="Player2 Won";
}
var randomimg1 = "dice"+r+".png";
var randomimg2 = "dice"+q+".png";
document.querySelector(".img1").src=randomimg1;
document.querySelector(".img2").src=randomimg2;
