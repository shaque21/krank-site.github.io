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


