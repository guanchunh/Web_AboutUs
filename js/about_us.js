$('#bookshelf').click(function(){ 

    $(this).hide(); 
    $("#big_bookshelf").show(); 
    $("body").css("background-image","none");
   
    $( "#bottom" ).remove();
})