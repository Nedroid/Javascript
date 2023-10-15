var taban=0,yuksek=0,yaricap=0;
function curcleAlan(yc)
{
    return 3*yc*yc;
}
function curcleCevre(yc)
{
    return 3,14*2*yc;
}
function ucgenAlan(tU,tY)
{
    return tU*tY/2
}
function yaz(deger)
{
    document.write(deger+"<br>")
}
yaricap=Number(prompt("daire yariçapini giriniz "));
yaricap=curcleAlan(yaricap);
yaz(yaricap);