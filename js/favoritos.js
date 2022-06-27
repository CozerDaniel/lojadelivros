//AUTERAR O VALOR CONFORME AUMENTA A QUANTIDADE
const valorUnit = document.querySelector('.card-preco-oculto');
const preco = document.querySelector('.card-preco');
const quantidade = document.querySelector('.card-quantidade');

const mudarPreco = (preco, quantidade) => {
    const p = preco;
    const p1 = parseFloat(p);


    const q = quantidade;
    const q1 = parseInt(q);

    return resultado = preco * quantidade;
    
}

//calcula o valor pago com relação a quantidade escolhida
quantidade.addEventListener('click', () => {
    preco.innerText = mudarPreco(valorUnit.textContent, quantidade.value);

})