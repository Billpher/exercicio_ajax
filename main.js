document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('nome');
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const perfil = document.getElementById('perfil');

    const link = 'https://api.github.com/users/Billpher';

    fetch(link).then(function(resposta) {
        return resposta.json();
    }).then(function(json) {
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        username.innerText = json.login;
        repo.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        perfil.href = json.html_url;
    }).catch(function(error) {
        alert("Erro ao tentar encontrar perfil")
    });
})