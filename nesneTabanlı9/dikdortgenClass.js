class Dikdortgen{
    constructor(kisakenar,geniskenar){
        this.kisakenar=kisakenar;
        this.geniskenar=geniskenar;
    }
    alan(){
        return this.kisakenar*this.geniskenar;
    }
    cevre(){
        return 2*(this.kisakenar+this.geniskenar);
    }
}
var dik1=new Dikdortgen(3,4);
document.write("Dikdörtgen alan"+dik1.alan());