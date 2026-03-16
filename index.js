$("button").click(function(){
    $("h1").css("color","red")
    $("h1").toggle();
})

$("h1").click(function (){
    $(this).toggle();
})