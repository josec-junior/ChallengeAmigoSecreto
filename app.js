//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function validarEntrada() {
    let entrada = window.document.getElementById("amigo").value;
    if (entrada == "") {
        window.alert("Insira um nome válido!");
        return false;
    } else {
        return true;
    }
}

function adicionarAmigo() {
    let amigoValido = validarEntrada();
    if (amigoValido) {
        let amigo = window.document.getElementById("amigo").value;
        amigos.push(amigo);
    }
    window.document.getElementById("amigo").value = "";
    visualizarAmigos();
}

function visualizarAmigos() {
    let lista = window.document.getElementById("listaAmigos");
    lista.innerHTML = "";
    if (amigos.length > 0) {
        for (let i = 0; i < amigos.length; i++) {
            let amigo = document.createElement("li");
            amigo.textContent = amigos[i];
            lista.appendChild(amigo);
        }
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        window.alert("Não é possível sortear, pois você ainda não adicionou nenhum amigo.");
    } else {
        let indiceAleatorio = parseInt(Math.random() * amigos.length);
        console.log(indiceAleatorio);
        let amigoSorteado = amigos[indiceAleatorio];
        let lista = window.document.getElementById("listaAmigos");
        let resultado = window.document.getElementById("resultado");
        lista.innerHTML = "";
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }
}