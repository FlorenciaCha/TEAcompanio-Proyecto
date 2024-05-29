//cargo en un arreglo las imagenes. Este sera el orden que se mostrara
let utiles = ["1.png", "2.png", "3.png", "4.png", "5.png"];

//arreglo que guarda la opcion correcta
let correcta = [1,2,1,0,2];

//arreglo que guarda la cantedad de utiles a mostrar en cada ugada
let opciones = [];

//cargo en el arreglo opciones a mostrar en cada jugada
opciones.push(["5 Mochilas","3 Mochilas","2 Mochilas"]);
opciones.push(["1 Tijera", "6 Tigeras" ,"5 Tigeras"]);
opciones.push(["8 Cuadernos", "9 Cuadernos" ,"6 Cuadernos"]);
opciones.push(["4 Crayones" , "3 Crayones", "5 Crayones"]);
opciones.push(["3 Gomas de borrar", "5 Gomas de borrar", "6 Gomas de borrar"]);

//Variable que guarda la posicion actual
let posActual = 0;

//Varable que guard la cantidad acertada hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego()
{
    //resetear las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activar las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarUtiles();
}

//funcion que carga los siguientes utiles y sus opciones
function cargarUtiles(){
    //control si se acabaron los utiles
    if(utiles.length <= posActual){
        terminarJuego();
    }
    else{  //cargo as opciones
        //limpiar las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgUtiles").src = "img/" + utiles[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida)
{
    if(opElegida == correcta[posActual])  // acerto
    {
        //agregar las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }
    else  // no acerto
    {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta 
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //esperamos 1 segundo y pasamos a la siguiente imagen y sus opciones
    setTimeout(cargarUtiles,1000);
}

function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = utiles.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}