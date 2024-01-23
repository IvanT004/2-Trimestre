
var vehiculos = ["coche","bus","moto"]

function mecanismo(){
    document.getElementById("escribir").innerHTML = "";
    for (var i=0;i<colores.length;i++)
    if (i==0)
        document.getElementById("escribir").innerHTML += colores[i];
    else
        document.getElementById("escribir").innerHTML += ", " + colores[i];
}

function add() {

    var elemento = document.getElementById("introducido").value;
    vehiculos.push(elemento);
    mecanismo();
}

function remove(){

    vehiculos.pop(elemento);
    document.getElementById("mostrar").innerHTML = ElementList;
}

function dec(){

        document.write(vehiculos.reverse(function(a, b){return b - a}));
}

function crec(){

    document.write(vehiculos.sort(function(a, b){return a - b}))

}

function search(){

    busqueda = document.getElementById("introducido").value;
    document.getElementById("escribir").innerHTML = "El " + ncolor + " se encuentra en la posicion " + colores.indexOf(busqueda);
}

