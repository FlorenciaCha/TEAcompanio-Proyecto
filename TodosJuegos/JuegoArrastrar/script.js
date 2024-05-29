//arreglo para saber cuales divs estan ocupados
let arreglo = ["","","",""];

//funcion que evita que se abra como enlace
function allowDrop(ev){
    ev.preventDefault();
}


//que sucede cuando se arrastra un elemento
function drag(ev)
{
    //metodo que establece el tipo de datos y el valor de dato arrastrado 
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    //mediante ev.target tomo el valor del id del div que puede ser 0 o 1 0 2
    if(arreglo[parseInt(ev.target.id)]=="")
    {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

    if(arreglo[0]!=""&& arreglo[1]!=""&& arreglo[2]!="" &&arreglo[3]!= ""){
        if(arreglo[2]=="remera" && arreglo[3]=="campera"&& arreglo[1]=="medias"&&arreglo[0]=="vestido"){
            document.querySelector("h1").innerHTML = "Muy Bien!!!"
        }
        else{
            document.querySelector("h1").innerHTML = "Intentá de nuevo!!!"
        }
    }
}

function resetGame(){
    window.location.reload(); // recarga la pagina para reiniciar el juego
}