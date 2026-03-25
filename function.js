// Mini project student grade manager 

var inputName=document.getElementById("username")
var inputMark=document.getElementById("usermark")
var clickBtn=document.getElementById("user-button")

clickBtn.addEventListener("click",()=>{
    var person=(studentinfo(inputName.value,inputMark.value));
    var marksarr=person.marks
    var new_arr=JSON.parse(marksarr)
    document.getElementById("name").innerHTML=person.names;
    document.getElementById("total").innerHTML=total(new_arr);
    document.getElementById("average").innerHTML=calculateaverage(total(new_arr),new_arr.length);
    document.getElementById("grade").innerHTML=grade(calculateaverage(total(new_arr),new_arr.length))
    

})

function studentinfo(name,mark){
    var names=name
    var marks=mark
    return {names,marks}
}

function total(marks){
    var n=0
    for (i=0;i<marks.length;i++){
        n+=marks[i]
    }
    return n

}

function calculateaverage(total,k){
    var average=(total/k)
    return average
}

function grade(marks){

        if(marks>90 && marks<100){
            return "A+ "
        }
        else if(marks >80 && marks<90){
            return "A "
        }
        else if(marks >70 && marks<80){
            return "B+"
        }
        else if(marks >70 && marks<60){
            return "B"
        }
        else if(marks >60 && marks<70){
            return "C+"
        }
        else if(marks >50 && marks<60){
            return "C"
        }
        else{
            return "F"
        }
}






