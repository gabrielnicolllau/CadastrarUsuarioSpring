// Função para listar os usuários via Fetch API
async function listarUsuarios() {
    try {
        const response = await fetch('http://localhost:8080/usuarios');
        const usuarios = await response.json();
        const listaDeUsuarios = document.getElementById('listaDeUsuarios');
        const tabelaCabecalho = document.getElementById('tabelaCabecalho');
        const mensagemNenhumUsuario = document.getElementById('mensagemNenhumUsuario');

        if (usuarios.length === 0) {
            tabelaCabecalho.style.display = 'none';
            mensagemNenhumUsuario.style.display = 'block';
        } else {
            tabelaCabecalho.style.display = 'table-header-group';
            mensagemNenhumUsuario.style.display = 'none';

            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                `;
                listaDeUsuarios.appendChild(row);
            });
        }
    } catch (error) {
        console.error("Erro ao carregar os usuários:", error);
    }
}

window.onload = listarUsuarios;