var textoEntrada = document.getElementById("entrada-texto");
var textoSalida = document.getElementById("salida-texto");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var botonCopiar = document.getElementById("boton-copiar");

var a = 'ai'
var e = 'enter'
var i = 'imes'
var o = 'ober'
var u = 'ufat'


function encriptado() {

    var text = textoEntrada.value;
    const regex = /^[a-z0-9 ]+$/;

    if (regex.test(text)) {
        textoSalida.value = textoEntrada.value.replace(/e/g, e);
        textoSalida.value = textoSalida.value.replace(/i/g, i);
        textoSalida.value = textoSalida.value.replace(/a/g, a);
        textoSalida.value = textoSalida.value.replace(/o/g, o);
        textoSalida.value = textoSalida.value.replace(/u/g, u);
        document.getElementById("ilustracion").style.display = "none";
    } else {
        alert('Ingrese un carácter valido');
        text = '';
    }
}

function desencriptado() {
    textoSalida.value = textoEntrada.value.replace(/ufat/g, 'u');
    textoSalida.value = textoSalida.value.replace(/ai/g, 'a');
    textoSalida.value = textoSalida.value.replace(/imes/g, 'i');
    textoSalida.value = textoSalida.value.replace(/ober/g, 'o');
    textoSalida.value = textoSalida.value.replace(/enter/g, 'e');
}

function copiado() {
    textoSalida.select();
    document.execCommand('copy');
}

encriptar.addEventListener("click", encriptado);
desencriptar.addEventListener("click", desencriptado);
botonCopiar.addEventListener("click", copiado);