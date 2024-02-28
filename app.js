//deklarasi variabel
const tombol=document.querySelector(".container-tombol");
const layar=document.querySelector("#layar");

//jika tombol angka di klik oleh user
tombol.addEventListener("click", function(e){
    let tomboldiclick =e.target;
    let nilaitombol = tomboldiclick.innerText;

//jika tombol C di klik oleh user
if(nilaitombol=="C"){
    layar.value="";
}else if (nilaitombol=="DEL"){
    layar.value=layar.value.slice(0,-1);
}else if (nilaitombol=="="){
    layar.value=eval(layar.value);
}else{
    layar.value=layar.value+nilaitombol;
}
});