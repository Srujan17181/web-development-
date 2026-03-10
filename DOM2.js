document.querySelector(".btn").addEventListener("click",function (){
    var text=document.getElementById("text")
    text.innerHTML="Hello Srujan"
    
})

document.querySelector(".background-btn").addEventListener("click",function (){
    var body=document.querySelector("body")
    body.style.backgroundColor="red"
})

var count=0

var countvalue=document.getElementById("count")

var increase_btn=document.getElementById("in")

increase_btn.addEventListener("click",function (){
    count++
    countvalue.textContent=count
})

var decrease_btn=document.getElementById("de")

decrease_btn.addEventListener("click",function (){
    if (count>0){
        count--
        countvalue.textContent=count
    }
    else{
        countvalue.textContent=count
    }
    
})



