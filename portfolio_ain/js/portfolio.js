$(function(){
    const perNum = 90;
    const perNum2 = 60;
    const perNum3 = 50;
    const perNum4 = 10;

    $("#skill_level").waypoint(function(){
        $("#skill_level").addClass("animated fadeIn");
        $(".bar1").circleProgress({
            value: perNum/100,
            startAngle:300,
            size:200,
            fill:{
                color:["blue"]
            },
            animation:{
                duration:1500,
                easing:"swing"

            },
            lineCap:"round",
            reverse:true
        }).on("circle-animation-progress",function(event,progress){
        $(this).find("strong").html(Math.round(perNum*progress)+"<i>%</i>");
    });
    },{
        offset:'75%'
    });

    $("#skill_level").waypoint(function(){
        $("#skill_level").addClass("animated fadeIn");
        $(".bar2").circleProgress({
            value: perNum2/100,
            startAngle:300,
            size:200,
            fill:{
                color:["blue"]
            },
            animation:{
                duration:1500,
                easing:"swing"
            },
            lineCap:"round",
            reverse:true
        }).on("circle-animation-progress",function(event,progress){
        $(this).find("strong").html(Math.round(perNum2*progress)+"<i>%</i>");
    });
    },{
        offset:'75%'
    });

    $("#skill_level").waypoint(function(){
        $("#skill_level").addClass("animated fadeIn");
        $(".bar3").circleProgress({
            value: perNum3/100,
            startAngle:300,
            size:200,
            fill:{
                color:["blue"]
            },
            animation:{
                duration:1500,
                easing:"swing"

            },
            lineCap:"round",
            reverse:true
        }).on("circle-animation-progress",function(event,progress){
        $(this).find("strong").html(Math.round(perNum3*progress)+"<i>%</i>");
    });
    },{
        offset:'75%'
    });

    $("#skill_level").waypoint(function(){
        $("#skill_level").addClass("animated fadeIn");
        $(".bar4").circleProgress({
            value: perNum4/100,
            startAngle:300,
            size:200,
            fill:{
                color:["blue"]
            },
            animation:{
                duration:1500,
                easing:"swing"
            },
            lineCap:"round",
            reverse:true
        }).on("circle-animation-progress",function(event,progress){
        $(this).find("strong").html(Math.round(perNum4*progress)+"<i>%</i>");
    });
    },{
        offset:'75%'
    });

});