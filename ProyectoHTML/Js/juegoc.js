const input = document.querySelector("#input");
const button = document.querySelector("#adivina");
let aleatorio = Math.round(Math.random()*100);


button.addEventListener("click",(e)=>{
     
if(input.value < aleatorio)
 {
    alert("mas arriba");
}
else if (input.value > aleatorio)
{
    alert("mas abajo");
}
else
{
    alert("GANASTEEEEE!!!!!");
}

});
