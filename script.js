// Função para inverter o esquema de cores em toda a página
function inverterCores() {
    // Seleciona todos os elementos da página
    const elementos = document.querySelectorAll('*');

    // Itera sobre os elementos
    elementos.forEach(elemento => {
        // Verifica a cor atual do texto do elemento
        const corTextoAtual = getComputedStyle(elemento).color;

        // Verifica a cor atual do fundo do elemento
        const corFundoAtual = getComputedStyle(elemento).backgroundColor;

        // Converte as cores hexadecimais para RGB
        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Inverte a cor do texto do elemento
        if (corTextoAtual === hexToRgb('#000080')) { // Cor #000080
            elemento.style.color = '#f0f0f0';
        } else if (corTextoAtual === hexToRgb('#f0f0f0')) { // Cor #f0f0f0
            elemento.style.color = '#000080';
        }

        // Inverte a cor de fundo do elemento
        if (corFundoAtual === hexToRgb('#000080')) { // Cor #000080
            elemento.style.backgroundColor = '#f0f0f0';
        } else if (corFundoAtual === hexToRgb('#f0f0f0')) { // Cor #f0f0f0
            elemento.style.backgroundColor = '#000080';
        }
        const botaoInverterCores = document.getElementById('botao-inverter-cores');
        const textoBotao = botaoInverterCores.textContent;
        botaoInverterCores.textContent = textoBotao === 'Tema escuro' ? 'Tema claro' : 'Tema escuro';
    });
}

// Adiciona um evento de clique ao botão
const botaoInverterCores = document.getElementById('botao-inverter-cores');
botaoInverterCores.addEventListener('click', inverterCores);
