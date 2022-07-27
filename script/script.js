//creating variables
var calDisplay = document.getElementById("display");
var music = document.getElementById("play");
var musicDisplay = document.getElementById("musicName");
var musicList = new Array();
var musicDir = new Array();
var leftMove = document.getElementById("left");
var rightMove = document.getElementById("right");
var index = 0;
//adding values
musicList.push("Beep","Error","Metal","TypeWriter");
musicDir.push("music/beep.wav","music/error.wav","music/metal.wav","music/type.wav");


musicDisplay.innerHTML = musicList[index];
//functions
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
};
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
    
};
function back(){
    music.play();
    var num = calDisplay.value;
    calDisplay.value = num.slice(0,-1);
};
function clean(){
    music.play();
    calDisplay.value = "";
    calDisplay.style.color = "#141414";
};

var setMusic = (name,index) => {
    music.src = name;
    musicDisplay.innerText = musicList[index];
};
rightMove.onclick = function() {
    if(index <= 2){        
        index++;
        setMusic(musicDir[index],index);
    }
    else{
        index = 0;
        setMusic(musicDir[index],index);
    }
};
leftMove.onclick = function(){
    if(index == 0){        
        index = 3;
        setMusic(musicDir[index],index);
    }
    else{
        index--;
        setMusic(musicDir[index],index);
    }
};