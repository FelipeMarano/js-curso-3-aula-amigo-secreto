let amigos = []; // criando um array para sortear os nomes

function adicionar () {
    let amigo = document.getElementById ("nome-amigo");
    let lista = document.getElementById ("lista-amigos");
    
    amigos.push (amigo.value); // para puxar o array e adicionar o "amigo" dentro dele
    
    if (lista.textContent == "") { // quando for colocar o primeiro nome, fazer isso:
        lista.textContent = amigo.value; // o texto da "lista" vai receber o valor do "amigo" (vai mudar o texto)
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value; // quando for adicionar outro nome
    }

    amigo.value = "" // para limpar e colocar outro nome
}

function sortear () { 
    embaralha (amigos); // pegando a função "embaralha" da internet e usando ela na "sortear"

}

function embaralha(lista) { // função pegada na internet

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
