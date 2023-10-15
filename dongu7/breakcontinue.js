let sayac=1 ;
let result=0;
do
{   
   // if(sayac==3)break;
    if(sayac==4)continue;
    result=result+sayac;
    document.write("continue demek alt satırı çalıştır demek");
    sayac++;
}while(sayac<=5);
document.write("toplam=" +result);