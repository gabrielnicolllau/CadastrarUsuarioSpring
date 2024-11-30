// Função para listar os usuários via Fetch API
async function listarUsuarios() {
    try {
        const response = await fetch('http://localhost:8080/usuarios');
        const usuarios = await response.json();
        const tableBody = document.getElementById('usuarioTableBody');

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.email}</td>
                    `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Erro ao carregar os usuários:", error);
    }
}

// Chama a função para listar os usuários ao carregar a página
window.onload = listarUsuarios;