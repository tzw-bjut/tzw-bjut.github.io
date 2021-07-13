//高考倒计时
function getRTime(){
    var EndTime= new Date("2021/12/25 00:00:00"); //截止时间
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    
    if(t>0){
        var d=Math.floor(t/1000/60/60/24);
        var h=Math.floor(t/1000/60/60%24);
        var m=Math.floor(t/1000/60%60);
        var s=Math.floor(t/1000%60);
        $('#CountMsg').show()
        document.getElementById("t_d").innerHTML = d + " 天";
        document.getElementById("t_h").innerHTML = h + " 时";
        document.getElementById("t_m").innerHTML = m + " 分";
        document.getElementById("t_s").innerHTML = s + " 秒";
    }else{
        clearInterval(timer)
    }
}
timer= setInterval(getRTime,1000);