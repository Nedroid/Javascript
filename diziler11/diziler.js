var fener =["ahmet","mehmet","veli"]
var hafta=new Array(7);
var arkadas=new Array();
hafta[0]="pazartesi";
hafta[1]="salı";

 var rakamlar=new Array(0,1,2,3,4,5,6,7);
 for (var i=0;i<=4;i++){
    arkadas[i]=prompt(i+". arkadaşı giriniz")

 }
 for(var y=0 ;y<=4;y++){
 document.write(arkadas[y]+"<br>");
 }