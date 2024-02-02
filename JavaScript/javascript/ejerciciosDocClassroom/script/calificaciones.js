var notas = [];
var i = 0;
var nota = 0;

function recorrer(){
        for(var posicion = 0; posicion < notas.length; posicion++){
        document.getElementById("mostrar").innerHTML = "Se ha registrado la nota " + notas[posicion];
        }
        document.getElementById("contenido").innerHTML += notas[i]+ ","
        i++;
}

function comprobador(){
     
    nota = parseInt(document.getElementById("nota").value);

    if(nota >=0 && nota<=10){

        notas.push(nota);
        recorrer();
        
    }else{

        document.getElementById("mostrar").innerHTML = "No se pueden introducir notas negativas o superiores a 10. Por favor, intentelo de nuevo" 
    }

}

/*NO FUNCIONA BORRAR MIRAR*/
function eliminar(){

    notas.pop();
    recorrer(nota);
}

/*NO FUNCIONA MEDIA MIRAR*/
function media(){

    recorrer();
    var media_not = (media_not + notas[posicion])/ notas.length+1;
}