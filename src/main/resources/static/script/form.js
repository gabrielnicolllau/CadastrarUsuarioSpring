function validateForm() {
    let isValido = true;
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const permissoes = document.getElementById('permissoes');

    document.getElementById('erro-nome').innerText = '';
    document.getElementById('erro-email').innerText = '';
    document.getElementById('erro-senha').innerText = '';
    document.getElementById('erro-permissao').innerText = '';

    if (!nome.value.trim()) {
        document.getElementById('erro-nome').innerText = 'Nome é obrigatório!';
        isValido = false;
    }

    if (!email.value.trim()) {
        document.getElementById('erro-email').innerText = 'Email é obrigatório!';
        isValido = false;
    }

    if (!senha.value.trim()) {
        document.getElementById('erro-senha').innerText = 'Senha é obrigatória!';
        isValido = false;
    }

    if (!permissoes.value.trim()) {
        document.getElementById('erro-permissao').innerText = 'Permissões de acesso são obrigatórias!';
        isValido = false;
    }

    return isValido;
}

document.getElementById('formularioUsuario').addEventListener('submit', async function (event) {
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

        fetch('http://localhost:8080/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(function (res) {
                if (res.ok) {

                    window.alert('Usuário incluído com sucesso!');
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