var menuBar = document.querySelector('.header__nav--respon');
var menuList = document.querySelector('.menu__respon');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.close')
console.log(menuList);

menuBar.onclick = function() {
   menuList.style.right = '0';
   overlay.style.visibility = 'visible';
   document.body.style.overflow = 'hidden';
}

closeBtn.onclick = function(){
    menuList.style.right = '-100%';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}

overlay.onclick = function(){
    menuList.style.right = '-100%';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}