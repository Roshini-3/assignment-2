const quote=document.getElementById("to");
const author=document.getElementById("do");
const bn=document.getElementById("bn");
bn.addEventListener("click",gquote);
 function gquote(){
    fetch("http://api.quotable.io/random").then(res=>res.json()).then(data=>{
        quote.innerHTML=`"${data.content}"`;
        author.innerHTML=`by - ${data.author}`;
    })
 }