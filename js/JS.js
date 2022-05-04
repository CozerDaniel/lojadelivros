const itens = [
    {
        id: 0,
        nome: 'Harry Potter',
        img: src="Img/hpcapa.jpg",
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Naruto',
        img: src="Img/narutocapa.jpg",
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Batman',
        img: src="Img/batmancapa.jpg",
        quantidade: 0
    
    },

    {
        id: 3,
        nome: 'Superman',
        img: src="Img/supermancapa.jpg",
        quantidade: 0
    
    },

    {
        id: 4,
        nome: 'Tower of God',
        img: src="Img/towcapa.jpg",
        quantidade: 0
    
    },

    {
        id: 5,
        nome: 'Yu-gi-oh',
        img: src="Img/yugiohcapa.jpg",
        quantidade: 0
    
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val)=>{
       containerProdutos.innerHTML+= `
                         
       <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#"> Adicionar ao carrinho! <a/>
        </div>           
       `; 
    })                         

}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML="";
    itens.map((val)=>{
       if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
        <div class="checkout">                 
        <p>`+val.nome+` - quantidade: `+val.quantidade+`</p>;
        <hr>  
        </div>    
       `;
       } 
    })  

}

var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

}    