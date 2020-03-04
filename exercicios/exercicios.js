// 1º exercício
// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
// segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    var minhaPromisse = new Promise (function(resolve, reject) {
        if (idade > 18) {
            setTimeout(() =>{console.log(`o usuario é maior de idade pois tem ${idade}`)})
        }
    })
}
minhaPromisse()

checaIdade(20)
.then(function(response) {
    console.log("Maior que 18");
})
.catch(function(error) {
    console.log("Menor que 18");
});

// 2º exercício
// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.
// <input type="text" name="user">
// <button onclick="">Adicionar</button>
// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
// <ul>
//  <li>repo1</li>
//  <li>repo2</li>
//  <li>repo3</li>
//  <li>repo4</li>
//  <li>repo5</li>
// </ul>
// 3º exercício
// A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// <li>Carregando...</li>
// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
// Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.