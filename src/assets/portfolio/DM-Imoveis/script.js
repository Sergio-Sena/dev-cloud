// Dados fictícios de clientes
const clientes = [
    { nome: "João Silva", produto: "Sofá 3 Lugares", valor: 2400, parcelas: "6x R$ 400", vencimento: "10/02/2025", status: "em-dia" },
    { nome: "Maria Santos", produto: "Guarda-Roupa", valor: 3200, parcelas: "8x R$ 400", vencimento: "06/02/2025", status: "vence-hoje" },
    { nome: "Pedro Oliveira", produto: "Mesa de Jantar", valor: 1800, parcelas: "6x R$ 300", vencimento: "15/02/2025", status: "em-dia" },
    { nome: "Ana Costa", produto: "Rack para TV", valor: 1200, parcelas: "4x R$ 300", vencimento: "03/02/2025", status: "atrasado" },
    { nome: "Carlos Souza", produto: "Cama Box Casal", valor: 2800, parcelas: "10x R$ 280", vencimento: "12/02/2025", status: "em-dia" },
    { nome: "Juliana Lima", produto: "Estante", valor: 1500, parcelas: "5x R$ 300", vencimento: "06/02/2025", status: "vence-hoje" },
    { nome: "Roberto Alves", produto: "Poltrona Reclinável", valor: 1600, parcelas: "4x R$ 400", vencimento: "20/02/2025", status: "em-dia" },
    { nome: "Fernanda Rocha", produto: "Conjunto de Cadeiras", valor: 900, parcelas: "3x R$ 300", vencimento: "01/02/2025", status: "atrasado" },
    { nome: "Lucas Martins", produto: "Aparador", valor: 1100, parcelas: "4x R$ 275", vencimento: "18/02/2025", status: "em-dia" },
    { nome: "Patricia Dias", produto: "Criado-Mudo", valor: 600, parcelas: "2x R$ 300", vencimento: "08/02/2025", status: "em-dia" }
];

let sortDirection = {};

// Renderizar tabela
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(cliente => {
        const row = document.createElement('tr');
        
        const statusText = {
            'em-dia': 'Em Dia',
            'vence-hoje': 'Vence Hoje',
            'atrasado': 'Atrasado'
        };

        row.innerHTML = `
            <td data-label="Nome"><strong>${cliente.nome}</strong></td>
            <td data-label="Produto">${cliente.produto}</td>
            <td data-label="Valor Total"><strong>R$ ${cliente.valor.toLocaleString('pt-BR')}</strong></td>
            <td data-label="Parcelas">${cliente.parcelas}</td>
            <td data-label="Próximo Venc.">${cliente.vencimento}</td>
            <td data-label="Status"><span class="status status-${cliente.status}">${statusText[cliente.status]}</span></td>
            <td>
                <button class="action-btn btn-view">👁️ Ver</button>
                <button class="action-btn btn-edit">✏️ Editar</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Função para remover acentos (busca inteligente)
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Busca em tempo real (com ou sem acento)
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = removerAcentos(e.target.value.toLowerCase());
    
    const filtered = clientes.filter(cliente => {
        const nome = removerAcentos(cliente.nome.toLowerCase());
        const produto = removerAcentos(cliente.produto.toLowerCase());
        const valor = cliente.valor.toString();
        const parcelas = cliente.parcelas.toLowerCase();
        
        return nome.includes(searchTerm) ||
               produto.includes(searchTerm) ||
               valor.includes(searchTerm) ||
               parcelas.includes(searchTerm);
    });
    
    renderTable(filtered);
});

// Ordenação por coluna
function sortTable(columnIndex) {
    const table = document.getElementById('clientesTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Determinar direção da ordenação
    if (!sortDirection[columnIndex]) {
        sortDirection[columnIndex] = 'asc';
    } else {
        sortDirection[columnIndex] = sortDirection[columnIndex] === 'asc' ? 'desc' : 'asc';
    }
    
    const direction = sortDirection[columnIndex];
    
    // Ordenar linhas
    rows.sort((a, b) => {
        let aValue = a.cells[columnIndex].textContent.trim();
        let bValue = b.cells[columnIndex].textContent.trim();
        
        // Remover formatação de moeda para comparação numérica
        if (columnIndex === 2) { // Coluna de valor
            aValue = parseFloat(aValue.replace('R$', '').replace(/\./g, '').replace(',', '.'));
            bValue = parseFloat(bValue.replace('R$', '').replace(/\./g, '').replace(',', '.'));
        }
        
        // Comparação
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return direction === 'asc' ? aValue - bValue : bValue - aValue;
        } else {
            if (direction === 'asc') {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        }
    });
    
    // Reordenar no DOM
    rows.forEach(row => tbody.appendChild(row));
    
    // Atualizar ícones de ordenação
    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
        const icon = header.querySelector('.sort-icon');
        if (icon) {
            if (index === columnIndex) {
                icon.textContent = direction === 'asc' ? '↑' : '↓';
            } else {
                icon.textContent = '⇅';
            }
        }
    });
}

// Inicializar tabela
renderTable(clientes);

// Adicionar feedback aos botões
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-view')) {
        alert('📋 Funcionalidade "Ver Detalhes" estará disponível no sistema completo!');
    }
    if (e.target.classList.contains('btn-edit')) {
        alert('✏️ Funcionalidade "Editar Cliente" estará disponível no sistema completo!');
    }
    // Apenas botão "Novo Cliente" na toolbar (não o do modal)
    if (e.target.textContent.includes('➕ Novo Cliente')) {
        alert('➕ Funcionalidade "Novo Cliente" estará disponível no sistema completo!');
    }
});

// Funções do Modal de Ajuda
function mostrarAjuda() {
    document.getElementById('helpModal').style.display = 'block';
}

function fecharAjuda() {
    document.getElementById('helpModal').style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target === modal) {
        fecharAjuda();
    }
}

// Fechar modal com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharAjuda();
    }
});
