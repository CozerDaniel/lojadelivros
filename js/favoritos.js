// TOTAL SEJA AUTERADO CASO HAJA QUALQUER AUTERAÇÃO NOS FAVORITOS COMO QUANTIDADE DA UNIDADE DO LIVRO, REMOÇÃO DE LIVRO, OU ADIÇÃO DE LIVRO.

// ADICIONAR NO TOPO E NO FINAL DA PÁGINA O NÚMERO DE EXEMPLARES SELECIONADOS;

// SELECIONAR TODOS OS LIVROS QUANDO A OPÇÃO SELEIONAR TUDO FOR CLICADA


//AUTERAR O VALOR CONFORME AUMENTA A QUANTIDADE
const valorUnit = document.querySelectorAll('.card-preco-oculto');
const preco = document.querySelectorAll('.card-preco');
const quantidade = document.querySelectorAll('.card-quantidade');

const mudarPreco = (preco, quantidade) => {
    const p = preco;
    const p1 = parseFloat(p);


    const q = quantidade;
    const q1 = parseInt(q);

    return resultado = preco * quantidade;
    
}

const cardQuantidade = (e) => {
    const Qntdd = e.target;
}

//calcula o valor pago com relação a quantidade escolhida
quantidade.addEventListener('click', () => {
    preco.innerText = mudarPreco(valorUnit.textContent, quantidade.value) + ',00';

})

