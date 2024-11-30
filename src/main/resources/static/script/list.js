// Função para listar os usuários via Fetch API
async function listarUsuarios() {
    try {
        const response = await fetch('http://localhost:8080/usuarios');
        const usuarios = await response.json();
        const tableBody = document.getElementById('usuarioTableBody');
        const tabelaCabecalho = document.getElementById('tabelaCabecalho');
        const mensagemNenhumUsuario = document.getElementById('mensagemNenhumUsuario');

        // Se não houver usuários, escondemos o cabeçalho da tabela e mostramos a mensagem
        if (usuarios.length === 0) {
            tabelaCabecalho.style.display = 'none'; // Oculta o cabeçalho da tabela
            mensagemNenhumUsuario.style.display = 'block'; // Exibe a mensagem
        } else {
            tabelaCabecalho.style.display = 'table-header-group'; // Garante que o cabeçalho apareça
            mensagemNenhumUsuario.style.display = 'none'; // Oculta a mensagem
            // Preenche a tabela com os usuários
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                `;
                tableBody.appendChild(row);
            });
        }
    } catch (error) {
        console.error("Erro ao carregar os usuários:", error);
    }
}

// Chama a função para listar os usuários ao carregar a página
window.onload = listarUsuarios;