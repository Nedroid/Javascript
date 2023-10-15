var sum =0 ;
for(x=0;x<=5;x=x+1)
{
    document.write("Merhaba<br>");
    sum=sum + x ;
    if(x==4)continue;
    document.write("<br>" +x + "<br>");
}
document.write(sum);