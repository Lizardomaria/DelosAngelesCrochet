// 1. Seu número oficial sem caracteres especiais
const seu_numero_whatsapp = "5521995635596"; 

// 2. Captura todos os botões com a sua classe comum
const botoesComprar = document.querySelectorAll('.btn-comprar-brinco');

// 3. Cria o ouvinte de clique para cada botão do site
botoesComprar.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        
        // Encontra o card de produto correspondente ao botão clicado
        const cardProduto = evento.target.closest('.card-brinco');
        
        // Captura o texto de dentro deste card específico
        const nomeProduto = cardProduto.querySelector('.nome-brinco').textContent.trim();
        const precoProduto = cardProduto.querySelector('.preco-brinco').textContent.trim();
        
        // Monta a mensagem personalizada
        const textoMensagem = `Olá, De los Ángeles! Gostaria de encomendar o produto: *${nomeProduto}* (no valor de ${precoProduto}).`;
        
        // Transforma o texto para o formato de link
        const mensagemCodificada = encodeURIComponent(textoMensagem);
        
        // Cria a URL final apontando para o seu WhatsApp
        const urlWhatsApp = `https://wa.me/${seu_numero_whatsapp}?text=${mensagemCodificada}`;
        
        // 🌟 ALTERADO: Abre o link obrigatoriamente em uma NOVA ABA ('_blank')
        window.open(urlWhatsApp, '_blank');
    });
});