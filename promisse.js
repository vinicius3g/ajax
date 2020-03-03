var minhaPromisse = () => {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.github.com/users/viniciusdefault");
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4)  {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject("erro na requisição")
                }
            } 
        }
    });
}
minhaPromisse()
// o then é executado  quando o resolve da promisse for chamado 
    .then((response) => {
        console.log(response)
    })
    .then((erro) => {
        console.warn(erro)
    })