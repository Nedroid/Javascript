var yas=Number(prompt("yaşınıızı giriniz"));
if(yas<=2)
{ document.write("bebek");
}
else if (yas<=12)
{
    document.write("ÇOCUK");
}
else if(yas<=40)
{
    document.write("GENÇ");
}
else if(yas<=60)
{
    document.write("YETİŞKİN");
}
else
{
    document.write("YAŞLı");
}