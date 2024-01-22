
var ElementList = [""]

function add() {

    var elemento = document.getElementById("introducido").value;
    ElementList.push(elemento);
    document.getElementById("escribir").innerHTML = ElementList;
}

function remove(){

    var elemento = document.getElementById("introducido").value;
    ElementList.shift(elemento);
    document.getElementById("escribir").innerHTML = ElementList;
}

function dec(){

        ElementList.sort(function(a, b){return b - a});
    
}

function crec(){

    document.write(ElementList.sort(function(a, b){return a - b}))

}

