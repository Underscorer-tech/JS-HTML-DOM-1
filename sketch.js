var icon1 = document.getElementById("icon");
var side = document.getElementById("sidebar");
var tabs = document.getElementById("tabs")
var t = 0;
var wh = window.innerHeight;
 tabs.style.display="none"
//////////////////////

function draw() {


    var wh = window.innerHeight;

      

    side.addEventListener("mouseover", r1);
    side.addEventListener("mouseout", r2);
    tabs.addEventListener("mouseover", r1);
    tabs.addEventListener("mouseout", r2);

}

function r1() {

    if (t == 0) {
        icon1.style.transform = 'rotate(90deg)'
        side.style.width = '20%';
        t = 1;
        tabs.style.display="block";  
    }

}

function r2() {

    if (t == 1) {
        icon1.style.transform = 'rotate(180deg)'
        side.style.width = '0vw';
        t = 0;
        tabs.style.display="none"
    }

}



