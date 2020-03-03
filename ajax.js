// Ajax vanilla

var xhr = new XMLHttpRequest();

xhr.open("GET","https://api.github.com/users/viniciusdefault");
xhr.send(null);

xhr.onreadystatechange = () => {
    xhr.readyState === 4  ? console.log(JSON.parse(xhr.responseText)) : ''
}

// Promisses
// Resolve : retorna quando o resultado for de sucesso
// Reject : retorna quando o resultado não foi de sucesso


