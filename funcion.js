function recarga(){
var x =document.getElementById("div");
var pos =0;
var TimerName="4000";
do {
//  setTimeout(5000);
//clearInterval(TimerName);
//alert("hola");
pos = pos + 0.1;
//pos = pos.toString();
console.log(pos);
x.style.opacity = pos;
//$(".w3-top").css('opacity',pos);
//$(".w3-top").css({"opacity":pos});
//pos = parseInt(pos);
}
//x.style.opacity = pos;
//alert("si");
while (pos <= 2);
}

$(document).ready(function() {// en este documento cuando este listo e interpretado

                $(".w3-top").fadeTo(3000, 2, function() {//que en un tiempo de 3 segundos aumente a 2 la opacidad
                  document.querySelector('h1').innerHTML="hola bro";//para seleccionar etiquetas dentro de js
                    //alert("The fadeTo effect has finished!");
});
        });


function multiplica(numero1,numero2){
console.log(numero1 * numero2);

}

function entreunoydiez(numero){

if (numero < 1 )
{
console.log("el numero es menor a cero");

}
if (numero > 0 && numero < 11 ){
console.log("el numero es esta entre esos numeros");

}

if (numero > 10){
console.log("el numero es mayor a 10");

}
}

function encontrar(){
  var  lista=["asado","chorizo","bondiola","entrada"];
  var car={type:"fiat",model:"500",color:"white"};

document.getElementById("d").innerHTML = "si te fijas a la vuelta de la esquina se hace un " + lista[0] ;
alert( "el auto es un  " + car.type + " " +  car.model);


}


function  encontrar2(){
var requestURL = 'localhost:8000/superheroes.json';
var request = new XMLHttpRequest();//la clave que utilizamos para pedir la peticion
request.open('GET',requestURL);//en la peticion decimos que agarre la variable que tiene el json
console.log(request.open('GET',requestURL));
}

console.log("aca vamos al json")
document.querySelector('#boton').addEventListener('click',traerdatos); //id # y clase .detecta un evento click
//del documento selecciono con query selector el id con  # que se llama boton y agrego un evento que va a ser click y cuando sea click llamo la funcion traer traerdatos

////////////////////MI TRABAJO CON JSON------------------------------------------------------------
function traerdatos()
{
console.log('dentro de traerdatos ');
var solicitud = new XMLHttpRequest();
//hace de mandar solicitudes HTTP algo muy fácil.  Sólo crea una instancia del objeto, abre una URL, y envia la solicitud.
//  El estatus HTTP y el contenido del resultado, estan disponibles en el objecto cuando se termina la transacción.

//declaramos una constante xhttp
//iba a ser una nueva instancia de XMLHttpRequest y accedemos a los metodos de XMLHttpRequest en la conxtante declarada

solicitud.open('GET','maderas.json',true); // aca al objeto le selecciono un metodo que va a ser open y que agarren el
solicitud.responseType = 'json';
// archivo 'maderas.json' y le digo que sea asincrono con el true
//en sintesis le estoy pidiendo al server maderas.json y que sea asincrono
solicitud.send();// Envía la petición al servidor para que me traiga lo que yo quiero agarrar con el GET anteriormente

//aca espero la respuesta---------------------------------------------------------
 solicitud.onload = function(){//cuando este cargada toodo el archivo json llamo a una funcion anonima
   ////////---var cabecera=document.queryselector();
console.log("pase la anonima ")
//var variable = xhttp.request;
//var datos = JSON.parse(variable) ;//deja de ser un json y pasa a ser un objeto js
var datos = solicitud.response;

console.log(JSON.stringify(datos['maderas'][0]));
//if (xhttp.readyState == 4 && this.status == 200) //si se completo la solicitud  y el estado de enivo es correcto(200)
//{
//console.log(xhttp.responseText);//que me traiga todo el texto del json
//let datos = JSON.parse(xhttp.responseText);
//console.log(datos);
/*for (let item of datos)
{
console.log(item.Color);

}
*/
//}

}

}
