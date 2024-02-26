var http= new XMLHttpRequest();
function getnews(country)
{
http.open("GET",`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=8390efb6993c4988ab2e67aeeb6ddfc3`);
http.send();
var items;
var container;
var eg=document.getElementById("eg");
var fr=document.getElementById("fr");
var uk=document.getElementById("uk");
var us=document.getElementById("us");
var jp=document.getElementById("jp");
}


eg.addEventListener("click",function(){
    getnews("eg");
});
fr.addEventListener("click",function(){
    getnews("fr");
});
uk.addEventListener("click",function(){
    getnews("uk");
});
us.addEventListener("click",function(){
    getnews("us");
});
jp.addEventListener("click",function(){
    getnews("jp");
});

http.addEventListener("readystatechange",function(){
    if(http.readyState==4)
    {
        items=JSON.parse(http.response).articles;
        display();
    }
}
);

function display()
{
    for(var i=0;i<items.length;i++)
    {
        container+=`
        <div id =item class="item">
        <img src=${items[i].urlToImage}>
                <h3>${items[i].title}</h3>
                <p>
                ${items[i].description}</p>
                </div>
        `;
    }
    document.getElementById("container").innerHTML=container;


}
getnews("us");