let menuBtn = false;
document.getElementById('ham-bars').addEventListener('click', () => {
    if(!menuBtn){
        document.getElementById('open').style.display = 'contents';
        document.getElementById('ham-bars').innerHTML = '<i class="fas fa-times"></i>';
        menuBtn = true;
    }
    else{
        document.getElementById('open').style.display = 'none';
        document.getElementById('ham-bars').innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn = false;
    }
});

// ------------------ SLIDER jQuery ---------------------------
document.querySelector('.card').style.marginBottom = "-80px";
document.querySelector('.card').style.marginTop = "-50px";
document.querySelector('.card').style.width = "85%";
document.querySelector('.card').style.height = "80%";

// --------------------GO TO TOP BUTTON -----------------------
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ********************* About to Scroll **************

function home(){
  document.body.scrollTop = 50;
  document.documentElement.scrollTop = 50;
}
function tenWorld(){
  document.body.scrollTop = 670;
  document.documentElement.scrollTop = 670;
}
function fiveIndian(){
  document.body.scrollTop = 1375;
  document.documentElement.scrollTop = 1375;
}
function aboutMe(){
  document.body.scrollTop = 4600;
  document.documentElement.scrollTop = 4600;
}

// *********** Fixing Css **********

for(var i=0; i<3;i++){
  if(window.outerWidth <= 481){
  document.querySelectorAll('.imageLeft')[i].style.margin = "0";
  }
}

for(var i=0; i<2;i++){
  if(window.outerWidth <= 481){
    document.querySelectorAll('.imageRight')[i].style.margin = "0";
    }
}
if(window.outerWidth <= 481){
  document.querySelector('.first-background p').style.width = "340px";
}
if(window.outerWidth <= 320){
  document.querySelector('.first-background p').style.width = "300px";
  document.querySelector('.aboutMe ul li').style.marginLeft = "65px";
}

