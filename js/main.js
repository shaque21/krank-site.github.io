
// header shadow
var header = document.querySelector('#header');

window.addEventListener('scroll', function () {
if (window.pageYOffset > 40) {
    header.classList.add('bg-white', 'shadow');
} else {
    header.classList.remove('bg-white', 'shadow');
}
});

// change category icon 

var leftIcon = document.querySelector('.category-btn .fa-bars');
var rightIcon = document.querySelector('.category-btn .fa-angle-down');
changeBarIcon = function(barIcon){
    leftIcon.classList.toggle('fa-times');
    rightIcon.classList.toggle('fa-angle-up');
}

// change menu icon and bg color

var bgMenuColor = document.querySelector('.bg-menu-color');
changeIcon = function(icon){
    icon.classList.toggle('fa-times');
    bgMenuColor.classList.add('bg-light');
}

// product details page

// change image section
    let bigImg = document.querySelector('.big-img img');
    function showImg(pic) {
        bigImg.src = pic;
    }

    
// // exzoom js start
$(function(){
    $(".zoom-img").imagezoomsl({
        cursorshadecolor:'#fff',
        statusdivbackground:'#C0C0C0',
        textdnbackground:'#fff',
    });
});

$('.qty-input').bootstrapNumber();
// end product details page


function myFunction() {
    var showHide = document.getElementById('toggle1');
    var x = document.querySelector(".current-password");
    if (x.type === "password") {
    x.type = "text";
    showHide.classList.add('hide1'); 
    } else {
    x.type = "password";
    showHide.classList.remove('hide1');
    }
}
function newPass(){
    var showHide = document.getElementById('toggle2');
    var x = document.querySelector(".new-password");
    if (x.type === "password") {
    x.type = "text";
    showHide.classList.add('hide2'); 
    } else {
    x.type = "password";
    showHide.classList.remove('hide2');
    }
}
function confirmPass(){
    var showHide = document.getElementById('toggle3');
    var x = document.querySelector(".confirm-password");
    if (x.type === "password") {
    x.type = "text";
    showHide.classList.add('hide3'); 
    } else {
    x.type = "password";
    showHide.classList.remove('hide3');
    }
}





