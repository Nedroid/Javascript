var alt_x=Number(prompt("iki sayı arasındaki toplanacak ilk sayi giriniz"));
var alt_y=Number(prompt("İkinci sayı arasındaki toplanacak ikinci sayiyi giriniz"));
var sum_x_y=0,change=0;
if (alt_x>alt_y)
{
change=alt_y;
alt_y=alt_x;
alt_x=change;
}
for(;alt_x<=alt_y;alt_x++)
{
    sum_x_y=sum_x_y+alt_x;
}
document.write(sum_x_y);