$("#picture1").mousedown(function () {//当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件
    timeout= setTimeout(function() {
    $('.nav-items').css('opacity','0.2');
    $("#cover:not(#member1)").css('opacity','0.9');
    $('#introduction').css('opacity','0.2');    
    $('#member1').css('transform','scale(1.5)');
    $('#member1').animate({'margin-left':'10vw','margin-top':'-30vw'},3) ;   
    $("#intro").show();
    }, 100);   
    });


    $("#picture1").mouseout(function () { //当在元素上放松鼠标按钮时，会发生 mouseup 事件
        clearTimeout(timeout);
               
        $( "#intro" ).css("display","none");
        $('.nav-items').css('opacity','1');
        $("#cover:not(#member1)").css('opacity','1');
        $('#introduction').css('opacity','1'); 
        $('#member1').css('transform','scale(1)');
        $('#member1').animate({'margin-left':'0vw','margin-top':'0vw'},1) ;
    });

