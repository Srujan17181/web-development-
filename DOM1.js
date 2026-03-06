

function changetag(){
    var change_tag=document.getElementById("title");
    change_tag.innerHTML="good Bye"
}

function input(){
    var clicks=document.querySelector('input');
    clicks.click()
}

function class_select(){
    var class_name=document.getElementsByClassName("item")[0]
    console.log(class_name)
}

function background_color(){
    document.querySelector("button").style.backgroundColor ="red"

}

function add_css(){
    document.getElementById('title').classList.add('colors');
}

function remove_css(){
    document.getElementById('title').classList.remove('colors');
}

function toggle_css(){
    document.getElementById('title').classList.toggle('colors');
}

function attribute(){
    document.querySelector('a').attributes;
}

function Get_attribute(){
    document.querySelector('a').getAttribute('href');
}

function Set_attribute(){
    document.querySelector('a').setAttribute("herf","https://bing.com");
}

