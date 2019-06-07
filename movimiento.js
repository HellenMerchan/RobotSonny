
var paso = false;


function movimiento() {
    var piernaIzq = document.getElementById("pierna-izq");
    var piernaDer = document.getElementById("pierna-der");
    var pieIzq = document.getElementById("pie-izq");
    var pieDer = document.getElementById("pie-der");
    var brazoIzq = document.getElementById("brazo-izq");
    var brazoDer = document.getElementById("brazo-der");
    var ojoDer = document.getElementById("ojo-der");
    var ojoIzq = document.getElementById("ojo-izq");
    var boca = document.getElementById("boca");
    var manoIzq = document.getElementById("mano-izq");
    var manoDer = document.getElementById("mano-der");


    if(paso==true){
        piernaIzq.style.height="100px";
        piernaDer.style.height="147px";
        

        pieIzq.style.height="5px";
        pieIzq.style.marginTop="95px";
        pieDer.style.height="25px";
        pieDer.style.marginTop="140px";

        brazoIzq.style.zIndex="-1";
        brazoIzq.style.height="60px";
        brazoIzq.style.marginTop="30px";

        brazoDer.style.zIndex="2";
        brazoDer.style.height="100px";
        brazoDer.style.marginTop="15px";

        manoIzq.style.marginTop="76px";
        manoDer.style.marginTop="96px";


        ojoIzq.style.height="10px";
        ojoDer.style.height="10px";

        boca.style.background="red";


        paso=false;

    } else {
        piernaIzq.style.height="147px";
        piernaDer.style.height="100px";

        
        pieIzq.style.height="25px";
        pieIzq.style.marginTop="140px";

        pieDer.style.height="5px";
        pieDer.style.marginTop="95px";

        brazoIzq.style.zIndex="2";
        brazoIzq.style.height="100px";
        brazoIzq.style.marginTop="15px";

        manoIzq.style.marginTop="96px";
        manoDer.style.marginTop="76px";

        brazoDer.style.zIndex="-1";
        brazoDer.style.height="70px";
        brazoDer.style.marginTop="15px";

        ojoIzq.style.height="5px";
        ojoDer.style.height="5px";

        boca.style.background="white";

        paso=true;
    }
  

}

setInterval(movimiento, 500);

