var fak=Number(prompt("faktoriyel istenen değerini giriniz"));
var multiple=1;


for(var say=1;say<=fak;say++)
{
    multiple=multiple*say;
}
document.write("multiple="+multiple);
