console.log("this is linked");
window.onload=function(){
function makeMediumSlateBlue(){
$(".intro").css("color","mediumslateblue");
};
function makeMidnightBlue(){
$(".intro").css("color","midnightBlue");
};
$(".intro").hover(makeMediumSlateBlue,makeMidnightBlue);
}