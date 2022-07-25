var calDisplay = document.getElementById("display");
var music = document.getElementById("play");

function display(val){
    music.play();
    if(calDisplay.value.startsWith('E')){
        clean();
        calDisplay.value += val;
    }
    else if(val == '<'){
        calDisplay.value += "(";
    }
    else if(val == '>'){
        calDisplay.value += ")";
    }
    else{
        calDisplay.value += val;
    }    
}
function answer(){
    music.play();
    if(calDisplay.value != ""){
        if(calDisplay.value.startsWith('0')){
            calDisplay.value = eval(calDisplay.value.slice(1));
        }
        else{
            calDisplay.value = eval(calDisplay.value);
        }
    }
    else{
        calDisplay.style.color = "red"; 
        calDisplay.value = "Enter Value !"
    }
    
}
function back(){
    music.play();
    var num = calDisplay.value;
    calDisplay.value = num.slice(0,-1);
}
function clean(){
    music.play();
    calDisplay.value = "";
    calDisplay.style.color = "#141414";
}