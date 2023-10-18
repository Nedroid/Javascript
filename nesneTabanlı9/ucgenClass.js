class Ucgen{
    static genislik=0;
    static yukseklik=0;
    alan(){
        return(this.genislik*this.yukseklik/2)
    }
}
var u1=new Ucgen();
u1.genislik=Number(prompt("genişlik=?"));
u1.yukseklik=Number(prompt("yukseklik=?"));
document.write("Alan="+u1.alan());