class Daire{
    constructor(yaricap){
        this.yaricap=yaricap;
    }
    alan(){
        return 3.14*this.yaricap*this.yaricap;
    }
    cevre(){
        return 2*3.14*this.yaricap;
    }
    
}
var d1=new Daire(2);
document.write("daire alan="+d1.alan())