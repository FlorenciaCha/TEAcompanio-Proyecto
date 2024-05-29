//cargo en un arreglo las imagenes. Este sera el orden que se mostrara
let emociones = ["1.png", "2.png", "3.png", "5.png","6.png", "7.png", "8.png"];

//arreglo que guarda la opcion correcta
let correcta = [2,1,0,0,1,2,1];

//arreglo que guarda la cantedad de utiles a mostrar en cada ugada
let opciones = [];

//cargo en el arreglo opciones a mostrar en cada jugada
opciones.push(["Enojo","Sorpresa","Alegria"]);
opciones.push(["Tristeza", "Enojo" ,"Sorpresa"]);
opciones.push(["Tristeza", "Alegria" ,"Enojo"]);
opciones.push(["Risa" , "Desagrado", "Sorpresa"]);
opciones.push(["Enojo", "Temor", "Alegria"]);
opciones.push(["Enojo", "Risa", "Sorpresa"]);
opciones.push(["Alegria", "Desagrado", "Tristeza"]);

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
    cargarEmociones();
}

//funcion que carga los siguientes utiles y sus opciones
function cargarEmociones(){
    //control si se acabaron los utiles
    if(emociones.length <= posActual){
        terminarJuego();
    }
    else{  //cargo as opciones
        //limpiar las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgUtiles").src = "img/" + emociones[posActual];
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
    setTimeout(cargarEmociones,1000);
}

function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = emociones.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}