var container= document.querySelector('.rocketcon');
var bullet= document.querySelector('.bullett');
var left= 0;
var bottom= 0;
const rect= container.getBoundingClientRect();
console.log(rect);
document.addEventListener('keydown', function(e) {
    if(e.code== 'ArrowRight'){
        left+= 50;
        container.style.left= left;
    }
    else if(e.code== 'ArrowLeft'){
        left-= 50;
        container.style.left= left;
    }
    else if(e.code== 'ArrowUp'){
        bottom+= 50;
        container.style.bottom = bottom;

    }
    else if(e.code== 'ArrowDown'){
        bottom-= 50;
        container.style.bottom= bottom;
    }
    else if(e.code== 'Space'){
        bullet.style.opacity= 1;
        bullet.style.bottom=600;

}
})