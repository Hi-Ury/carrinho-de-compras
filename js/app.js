let lista = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let divisao = produto.split('-');

    let novoItem = document.createElement('section');
    let novoNome = document.createElement('span');
    let novaQuantidade = document.createElement('span');
    let novoValor = document.createElement('span');
    
    novoNome.textContent = divisao[0];
    novoValor.textContent = divisao[1];

    if (quantidade <= 0) {
        quantidade = 1;
    };

    novaQuantidade.textContent = `${quantidade}x `;

    novoValor.classList.add('texto-azul');
    novaQuantidade.classList.add('texto-azul');
    novoItem.classList.add('carrinho__produtos__produto');
    
    novoItem.appendChild(novaQuantidade);
    novoItem.appendChild(novoNome);
    novoItem.appendChild(novoValor);

    lista.appendChild(novoItem);
    
    let valorInicial = parseFloat(valorTotal.textContent.replace('R$', ''));
    let valorProduto = parseFloat(divisao[1].replace('R$', ''));
    let valorQuantidade = parseInt(quantidade);

    let soma = valorInicial + valorProduto * valorQuantidade;
    valorTotal.textContent = `R$${soma}`

}

function limpar() {
    lista.innerHTML = "";
    valorTotal.textContent = 'R$0'
}
