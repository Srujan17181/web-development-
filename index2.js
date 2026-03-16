
$("document").ready(function (){
    $(".addButton").on("click",function (){
        var inputValue=$("#inputText").val()
        $(".task").html("<li>"+inputValue +"<button>delete</button>"+"</li>")
    })
})


