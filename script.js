function encriptar() {
    let text = document.getElementById("input-text").value;
    let textoEncriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let text = document.getElementById("input-text").value;
    let textoDesencriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
}

function copiar() {
    let text = document.getElementById("output-text");
    text.select();
    document.execCommand("copy");
}


