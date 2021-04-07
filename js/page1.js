$("#circle1").mousedown(function () {//当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件
    timeout= setTimeout(function() {
    $('.nav-items').css('opacity','0.2');
    $("#cover:not(#circle1)").css('opacity','0.9');
    $('#circle2').css('opacity','0.1');
    $('#circle3').css('opacity','0.1');
    $('#game').css('opacity','0.2');
    $("#goal").show();
    $('#circle2').css('margin-top','-60vw');
    }, 100);   
    });
    


    $("#circle1").mouseout(function () { //当在元素上放松鼠标按钮时，会发生 mouseup 事件
        clearTimeout(timeout);
               
        $( "#goal" ).css("display","none");
        $('#circle2').css('margin-top','-5vw');
        $('.nav-items').css('opacity','1');
        $("#cover:not(#circle1)").css('opacity','1');
        $('#circle2').css('opacity','1');
        $('#circle3').css('opacity','1');
        $('#game').css('opacity','1');
    });

    $("#circle2").mousedown(function () {//当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件
        timeout= setTimeout(function() {
        $('.nav-items').css('opacity','0.2');
        $("#cover:not(#circle2)").css('opacity','0.9');
        $('#circle1').css('opacity','0.1');
        $('#circle3').css('opacity','0.1');
        $('#game').css('opacity','0.2');
        $('#circle2').css('margin-top','-21vw');
        $("#why").show();

        }, 100);   
        });

        $("#circle2").mouseout(function () { //当在元素上放松鼠标按钮时，会发生 mouseup 事件
            clearTimeout(timeout);
                   
            $( "#why" ).css("display","none");
            $('#circle2').css('margin-top','-5vw');
            $('.nav-items').css('opacity','1');
            $("#cover:not(#circle2)").css('opacity','1');
            $('#circle1').css('opacity','1');
            $('#circle3').css('opacity','1');
            $('#game').css('opacity','1');
        });

        $("#circle3").mousedown(function () {//当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件
            timeout= setTimeout(function() {
            $('.nav-items').css('opacity','0.2');
            $("#cover:not(#circle3)").css('opacity','0.9');
            $('#circle1').css('opacity','0.1');
            $('#circle2').css('opacity','0.1');
            $('#game').css('opacity','0.2');
            $('#circle2').css('margin-top','-21vw');
            $("#how").show();
    
            }, 100);   
            });
    
            $("#circle3").mouseout(function () { //当在元素上放松鼠标按钮时，会发生 mouseup 事件
                clearTimeout(timeout);
                       
                $( "#how" ).css("display","none");
                $('#circle2').css('margin-top','-5vw');
                $('.nav-items').css('opacity','1');
                $("#cover:not(#circle3)").css('opacity','1');
                $('#circle1').css('opacity','1');
                $('#circle2').css('opacity','1');
                $('#game').css('opacity','1');
            });

