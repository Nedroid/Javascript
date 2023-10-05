var sayi=Number(prompt("Sayınızı giriniz"));
if(sayi<0)
{
    document.write(sayi + "sayı 0'dan küçüktür");
    <br></br>;
    document.write("Lütfen 0'dan büyük Sayı Giriniz");

}
else
{
    var kare=sayi*sayi;
    document.write("<b>" + kare);
}