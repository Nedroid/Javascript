function yaz(){
    alert("click yaptın kanki");
    var ad=document.getElementById("txtAd").value;
    alert("Adınız="+ad);
}
function karesi(){
    var sayi=document.getElementById("txtSayi").value;
    if(sayi==""){
        alert("Lütfen Sayı Giriniz");
    }else if (sayi<0){
        alert(" Sayı sıfırdan büyük olmalı "); 
    }
            else{
                    var kare=Math.pow(sayi,2);
                    document.getElementById("spanSonuc").innerHTML=kare;
                }
              
}
function topla(){
    var top1=Number(document.getElementById('txtToplanan').value);
    var top2=Number(document.getElementById('txtToplayan').value);
    if(top1==0){
        alert( "Sayı giriniz");
        document.getElementById("txtToplanan").style.background="red"
    }
    if(top2==0){
        alert( "Sayı giriniz");
        document.getElementById("txtToplayan").style.background="red"
        document.getElementById("txtToplayan").focus()
    }else{
    var sonuc =0;
    sonuc=top1+top2;
    document.getElementById("spanToplam").innerHTML=sonuc;
    document.getElementById("txtToplayan").style.background="yellow"
    document.getElementById("txtToplanan").style.background="yellow"
}}