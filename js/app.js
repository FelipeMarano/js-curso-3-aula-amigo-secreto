let amigos = []; // criando um array para sortear os nomes

function adicionar () {
    let amigo = document.getElementById ("nome-amigo"); // la no HTML
    if (amigo.value == "") {
        alert ("Informe o nome do amigo!"); // caso não tenha nome, dar um alerta
        return; // para não executar as funções abaixo
    }
    
    let lista = document.getElementById ("lista-amigos"); // la no HTML
    
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
    let sorteio = document.getElementById ("lista-sorteio"); // la no HMTL
    for (let i = 0; i < amigos.length; i++) {  // para ir do começo (0) ate o final do "amigos" (i++ = para ir adicionando mais)
        if (i == amigos.length -1) { // para verificar se ele chegou no final (para nao dar "undefined" no ultimo sorteado)
            sorteio.innerHTML = sorteio.innerHTML + amigos [i] + "-->" + amigos [0] + "<br>";
        } else { 
           sorteio.innerHTML = sorteio.innerHTML + amigos [i] + "-->" + amigos [i + 1] + "<br>"; 
            // para mostrar na tela quem sorteou quem // pega o primeiro amigo para o proximo da lista (ex:felipe --> ana)
        }
    }                                                           
    
}

function embaralha(lista) { // função pegada na internet para embaralhar os nomes da lista

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () { // fazer todas as funções para vazio para reiniciar
    amigos = [];
    document.getElementById ("lista-amigos") = "";
    document.getElementById ("lista-sorteio") = "";
}
