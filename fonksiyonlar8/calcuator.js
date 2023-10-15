var ilk_sayi=Number(prompt("ilksayiyi giriniz"));
var ikinci_sayi=Number(prompt("ikinci sayiyi giriniz"));
var islem=prompt("islem giriniz");
var calculator;
if(islem=="+")
{
   calculator= topla(ilk_sayi,ikinci_sayi);
}
document.write(calculator);