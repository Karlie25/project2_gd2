console.log("this is linked");
window.onload=function(){
$(".lotus-center").draggable();
$(".lotus-left").draggable();
$(".lotus-right").draggable();
$(".coin-photo").draggable();
function makeHotpink(){
$(".introduction").css("color","hotpink");
};
function makeLightblue(){
$(".introduction").css("color","lightblue");
};
$(".introduction").hover(makeHotpink,makeLightblue);
}


