// AUTERAR O VALOR DO LIVRO COM RELAÇÃO A QUANTIDADE.
const preco = document.querySelector(".card-preco");
const quantidade = document.querySelector(".card-quantidade");


const calcularQuantidade = () => {
    const p = 10;

    const q = quantidade.value;
    
    const resultado = p * q;


  console.log(resultado);

}

calcularQuantidade();




// TOTAL SEJA AUTERADO CASO HAJA QUALQUER AUTERAÇÃO NOS FAVORITOS COMO QUANTIDADE DA UNIDADE DO LIVRO, REMOÇÃO DE LIVRO, OU ADIÇÃO DE LIVRO.

// ADICIONAR NO TOPO E NO FINAL DA PÁGINA O NÚMERO DE EXEMPLARES SELECIONADOS;

// SELECIONAR TODOS OS LIVROS QUANDO A OPÇÃO SELEIONAR TUDO FOR CLICADA

