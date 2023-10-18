function kontrol(){
    var hataileti,sayiHata;
    hataileti=document.getElementById("hatailetisi");
    hataileti.innerHTML="";

    sayiHata=document.getElementById("txtSayi");
    try {
        if(sayiHata=="")throw "sayı girilmemiş";
        if(isNaN(sayiHata))throw "sayısal değer girilmemiş";
        sayiHata=Number(sayiHata);
        if(sayiHata<0||sayiHata>100)throw "sayı 1-100 arasında olmalı";
    } catch (error) {
        hataileti.innerHTML="hata"+error;
    }
    finally{
        document.getElementById("girilendeger").innerHTML="girilen deger"+sayiHata;
    }
}