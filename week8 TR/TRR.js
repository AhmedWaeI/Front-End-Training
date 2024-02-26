items= Array.from(document.querySelectorAll('.item img'));
container=document.querySelector('.container');
contentoflightbox=document.querySelector('.content');
leftbtn=document.querySelector('.fa-chevron-left');
rightbtn=document.querySelector('.fa-chevron-right');
closebtn=document.querySelector('.exit');
var index;
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e)
    {
       
        zoom();
        index=items.indexOf(e.target);
        contentoflightbox.style.backgroundImage=`url(${e.target.getAttribute('src')})`;


    })
}
leftbtn.addEventListener('click',goprev);
rightbtn.addEventListener('click',gonext);
closebtn.addEventListener('click',function()
{
    container.style.display="none";
})
function zoom()
{
   container.style.display="block";
}
function goprev()
{
    if(index==0)
    {
        index=items.length-1;
    }
    else{
    index--;
    }
    contentoflightbox.style.backgroundImage=`url(${items[index].getAttribute('src')})`;
}
function gonext()
{
    if(index==items.length-1)
    {
        index=0;
    }
    else{
    index++;
    }
    contentoflightbox.style.backgroundImage=`url(${items[index].getAttribute('src')})`;
}