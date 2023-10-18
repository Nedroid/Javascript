document.write("link sayısı"+document.links.length+"<br>");
document.write("resim sayısı"+document.images.length+"<br>");
document.write("test form eleman sayısı"+document.forms["test"].length+"<br>");
function yaz(){
    var test =document.forms["test"];
    for(var i=0;i<test.length;i++){
        document.write(test.elements[i].value+"<br>");
    }
}