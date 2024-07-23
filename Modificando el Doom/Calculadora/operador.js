let textoC =document.getElementById('textoC');

function borrarTextoC() {
    textoC.innerText = '0';
}

function borrarUltimoT() {
    if (textoC.innerText.length > 1) {
        textoC.innerText = textoC.innerText.slice(0, -1);
    } else {
        textoC.innerText = '0';
    }
}

function agregarNumero(number) {
    if (textoC.innerText === '0') {
        textoC.innerText = number;
    } else {
        textoC.innerText += number;
    }
}

function agregarOperador(operator) {
    const lastChar = textoC.innerText[textoC.innerText.length - 1];
    if ('+-*/'.includes(lastChar)) {
        textoC.innerText = textoC.innerText.slice(0, -1) + operator;
    } else {
        textoC.innerText += operator;
    }
}

function calcular() {
    try {
        textoC.innerText = eval(textoC.innerText);
    } catch {
        textoC.innerText = 'Error';
    }
}

