var dizi=new Array();
var toplam=0;
var ortalama=0;
var n =Number(prompt("Array kac elemanlı olsun "));
/*for(var z=0;z<n;z++){
    dizi[z]=Number(prompt(z+1+".sayıyı giriniz"));
    toplam=toplam + dizi[z];

}
ortalama=toplam/n;
document.write(ortalama);*/
for(var z=0;z<n;z++){
    dizi[z]=Number(prompt(z+1+".sayıyı giriniz"));
   

}
dizi.sort();
for(var az=0;az<n;az++){
   document.write(dizi[az]+"<br>");

}