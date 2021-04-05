console.log("this is linked");
window.onload=function(){
$(".incensestick").draggable();
$(".lighter").draggable();
$(".orange").draggable();
$(".orangesecond").draggable();
$(".orangethird").draggable();
$(".orangefourth").draggable();
$(".kiwi").draggable();
$(".kiwi3").draggable();
$(".grapefruit").draggable();
$(".grapefruit1").draggable();
$(".apple1").draggable();
$(".apple2").draggable();
$(".plum-photo").draggable();
$(".plum2").draggable();
$(".plum3").draggable();
$(".plum4").draggable();
$(".plum5").draggable();
function makeMediumSlateBlue(){
$(".intro").css("color","mediumslateblue");
};
function makeMidnightBlue(){
$(".intro").css("color","midnightBlue");
};
$(".intro").hover(makeMediumSlateBlue,makeMidnightBlue);
}