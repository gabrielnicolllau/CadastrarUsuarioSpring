// Função para validar o formulário
function validateForm() {
    let isValid = true;
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const permissoes = document.getElementById('permissoes');

    // Resetando as mensagens de erro
    document.getElementById('nomeError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('senhaError').innerText = '';
    document.getElementById('permissoesError').innerText = '';

    // Validando nome
    if (!nome.value.trim()) {
        document.getElementById('nomeError').innerText = 'Nome é obrigatório!';
        isValid = false;
    }

    // Validando email
    if (!email.value.trim()) {
        document.getElementById('emailError').innerText = 'Email é obrigatório!';
        isValid = false;
    }

    // Validando senha
    if (!senha.value.trim()) {
        document.getElementById('senhaError').innerText = 'Senha é obrigatória!';
        isValid = false;
    }

    // Validando permissões
    if (!permissoes.value.trim()) {
        document.getElementById('permissoesError').innerText = 'Permissões de acesso são obrigatórias!';
        isValid = false;
    }

    return isValid;
}

// Função para salvar o usuário via Fetch API
document.getElementById('usuarioForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    if (validateForm()) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const permissoes = document.getElementById('permissoes').value;

        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            permissoes: permissoes
        };

        // Envia o objeto 'usuario' para a API
        fetch('http://localhost:8080/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(function (res) {
                if (res.ok) {
                    // Redireciona para a lista após o sucesso
                    window.location.href = './list.html';
                } else {
                    console.error("Erro ao salvar o usuário.");
                }
            })
            .catch(function (err) {
                console.error("Erro na requisição:", err);
            });
    }
});