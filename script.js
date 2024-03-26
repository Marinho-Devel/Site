// Função para inverter o esquema de cores
function inverterCores() {
    // Obtém os elementos com as cores a serem invertidas
    const elementosComCores = document.querySelectorAll('.inverter-cor');

    // Itera sobre os elementos
    elementosComCores.forEach(elemento => {
        // Verifica a cor atual do elemento
        const corAtual = getComputedStyle(elemento).color;

        // Inverte a cor do elemento
        if (corAtual === 'rgb(0, 0, 128)') { // Cor #000080
            elemento.style.color = '#f0f0f0';
        } else if (corAtual === 'rgb(240, 240, 240)') { // Cor #f0f0f0
            elemento.style.color = '#000080';
        }
    });
}

// Adiciona um evento de clique ao botão
const botaoInverterCores = document.getElementById('botao-inverter-cores');
botaoInverterCores.addEventListener('click', inverterCores);
