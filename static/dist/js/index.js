<<<<<<< HEAD
function getTime(){var e=new Date,t=e.getHours(),o=e.getMinutes(),n=e.getSeconds(),s=2*Math.ceil(t/2+1/3600);24==s&&(s=0),floor($time,s);var m=3600*t+60*o+n;m=3600*s-m,t=Math.floor(m/3600),o=Math.floor((m-3600*t)/60),n=Math.floor(m-3600*t-60*o),floor($hours,t),floor($minute,o),floor($second,n)}function floor(e,t){t<10?e.innerHTML="0"+t:e.innerHTML=t}$(function(){getTime(),setInterval(function(){getTime()},1e3),touch.on($top,"touchstart",function(e){})});var $time=document.getElementsByClassName("time")[0],$hours=document.getElementsByClassName("hours")[0],$minute=document.getElementsByClassName("minute")[0],$second=document.getElementsByClassName("second")[0],$top=document.getElementsByClassName("top")[0];initTopHoverTree("tophovertree",500,30,20);
=======

// @description    选项卡模块less
// @author         lily
// @time           2016/12/8 16:50
// @version        1.0

$(function () {
    getTime();
    setInterval(function () {
        getTime();
    },1000);
    touch.on($top,"tap",function (ev) {
       $("body,html").animate({
           scrollTop:0
       },300)
    })



})
var $time = document.getElementsByClassName("time")[0];
var $hours = document.getElementsByClassName("hours")[0];
var $minute = document.getElementsByClassName("minute")[0];
var $second = document.getElementsByClassName("second")[0];
var $top = document.getElementsByClassName("top")[0];
function getTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var timeT = Math.ceil( hours/2 + 1/3600 )*2;
    if(timeT == 24){
        timeT = 0;
    }
    floor($time,timeT);
    var times = hours*3600 + minutes*60 + seconds;
    times = timeT*3600 - times
    hours = Math.floor(times/3600);
    minutes = Math.floor((times - hours*3600)/60);
    seconds = Math.floor(times - hours*3600 - minutes*60);
    floor($hours,hours);
    floor($minute,minutes);
    floor($second,seconds);
}
function floor(obj,times) {
    if(times < 10){
        obj.innerHTML = "0" + times;
    }else {
        obj.innerHTML = times;
    }
}
>>>>>>> 2709d3bd6ec652b802ea8705ebc38d82c450f713
