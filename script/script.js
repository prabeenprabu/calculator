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
musicList.push("Beep", "Error", "Metal", "TypeWriter", "Mugunth");
musicDir.push(
    "music/beep.wav",
    "music/error.wav",
    "music/metal.wav",
    "music/type.wav",
    "music/mugunth.wav"
);

//adding music to the button click
let buttons = document.getElementsByTagName("button");
buttons[0].style.backgroundColor = "#355ad4";
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        music.play();
    });
}

//mute music

musicDisplay.onclick = () => (music.muted = !music.muted);

musicDisplay.innerHTML = musicList[index];
//functions
function display(val) {
    // music.play();
    if (calDisplay.value.startsWith("E")) {
        clean();
        calDisplay.value += val;
    } else if (val == "<") {
        calDisplay.value += "(";
    } else if (val == ">") {
        calDisplay.value += ")";
    } else {
        calDisplay.value += val;
    }
}
function answer() {
    // music.play();
    if (calDisplay.value != "") {
        if (calDisplay.value.startsWith("0")) {
            calDisplay.value = eval(calDisplay.value.slice(1));
        } else {
            calDisplay.value = eval(calDisplay.value);
        }
    } else {
        calDisplay.style.color = "red";
        calDisplay.value = "Enter Value !";
    }
}
function back() {
    // music.play();
    //getting the display content
    var num = calDisplay.value;
    //re add the got content without last character
    calDisplay.value = num.slice(0, -1);
}

// function to clean the display box
function clean() {
    // music.play();
    calDisplay.value = "";
    calDisplay.style.color = "#141414";
}

var setMusic = (name, index) => {
    music.src = name;
    musicDisplay.innerText = musicList[index];
};
rightMove.onclick = function () {
    if (index <= 3) {
        index++;
        setMusic(musicDir[index], index);
    } else {
        index = 0;
        setMusic(musicDir[index], index);
    }
};
leftMove.onclick = function () {
    if (index == 0) {
        index = 4;
        setMusic(musicDir[index], index);
    } else {
        index--;
        setMusic(musicDir[index], index);
    }
};

//factorial button coding
function fact() {
    music.play();
    const num = calDisplay.value;
    clean();
    calDisplay.value = factorial(num);
}

//factorial function
function factorial(n) {
    let k = 1;

    if (n == 0) return 0;
    else {
        while (n != 1) {
            k *= n;
            n--;
        }
        return k;
    }
}

// square root function
function root() {
    let ans = calDisplay.value;
    clean();
    calDisplay.value = Math.sqrt(ans);
}

//--------------theme---------------
//theme list
let themes = new Array("default", "dark");
let count = 0;
// nav buttons
let themeLeft = document.getElementById("leftTheme");
let themeRight = document.getElementById("rightTheme");
//theme lable
let themeLabel = document.getElementById("themeLabel");

//add function for the right and left buttons
themeLeft.addEventListener("click", () => {
    if (count == 0) {
        count = themes.length - 1;
    } else {
        count--;
    }
    themeLabel.innerHTML = themes[count];
});

themeRight.addEventListener("click", () => {
    if (count == themes.length - 1) count = 0;
    else count++;
    themeLabel.innerHTML = themes[count];
});

//themes developments

//------------factorial functions-------------

function product_Range(a, b) {
    var prd = a,
        i = a;

    while (i++ < b) {
        prd *= i;
    }
    return prd;
}

function combination() {
    //getting the value from calculator display
    let val = calDisplay.value.toString();
    let valStr = val.split(".");
    let n = parseInt(valStr[0]);
    let r = parseInt(valStr[1]);
    if (n == r || r == 0) {
        calDisplay.value = 1;
    } else {
        r = r < n - r ? n - r : r;
        let answer = product_Range(r + 1, n) / product_Range(1, n - r);
        clean();
        calDisplay.value = answer;
    }
}

//-----------function for intro closing
let closeBtn = document.querySelector(".fa-xmark");
let container = document.querySelector(".container2");
closeBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
document.onload(container.classList.add("active"));
