var texto = document.getElementById('texto')
var resultado = document.getElementById('resultado')

function maiuscula() {
    if (texto.value.length == 0) {
        alert('Digite um texto')
    }
    resultado.innerText = texto.value.toLocaleUpperCase()
}

function minuscula() {
    if (texto.value.length == 0) {
        alert('Digite um texto')
    }
    resultado.innerText = texto.value.toLocaleLowerCase()
}

var textArea = document.querySelector('textarea');

textArea.addEventListener('input', function () {
     let caracterMax = textArea.maxLength;

     let digitando = textArea.value.length;

     document.querySelector('h3').innerText =(caracterMax - digitando)
     
})