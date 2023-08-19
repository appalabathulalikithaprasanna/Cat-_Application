let onbulb=document.getElementById("onbulb");
let imagecat = document.getElementById("imagecat");
let switchon=document.getElementById("switchon");
let buttonon=document.getElementById("buttonon");
let buttonoff=document.getElementById("buttonoff");
function onbutton1(){
   onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
   imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
   switchon.textContent="Switch On";
   switchon.style.color= red;
   document.getElementById("buttonon").style.backgroundColor="green";
   
}
function offbutton1() {
   onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
   imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
   switchon.textContent="Switch Off";
}