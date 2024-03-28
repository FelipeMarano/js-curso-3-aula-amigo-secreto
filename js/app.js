function adicionar () {
    let amigo = document.getElementById ("nome-amigo");
    let lista = document.getElementById ("lista-amigos");
    if (lista.textContent == "") { // quando for colocar o primeiro nome, fazer isso:
        lista.textContent = amigo.value; // o texto da "lista" vai receber o valor do "amigo" (vai mudar o texto)
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value; // quando for adicionar outro nome
    }

    amigo.value = "" // para limpar e colocar outro nome
}