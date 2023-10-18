var kelime =new Array();
kelime=prompt("Kelimeyi giriniz=")
var boyut=kelime.length;
for(var i=0;i<boyut;i++){
    document.write(kelime[i]+"<br>");

}
document.write("<br>");
for(var i=boyut-1;i>=0;i--){
    document.write(kelime[i]+"<br>");
    
}