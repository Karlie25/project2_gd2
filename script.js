console.log("this is linked");
window.onload=function(){
	function makeMaroon(){
$(".intro").css("color","maroon");
};
function makeOrangered(){
$(".intro").css("color","orangered");
};
$(".intro").hover(makeMaroon,makeOrangered);
}