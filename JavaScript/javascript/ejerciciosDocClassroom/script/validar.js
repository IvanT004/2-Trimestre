function validar(elementos){

    let estanCorrectos = true;

    for(var i=0; i<elementos.length;i++){
        if(elementos[i].value == "" || elementos[i]== "off"){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacio"
        estanCorrectos = false;
    }

    }
        

    return estanCorrectos
}