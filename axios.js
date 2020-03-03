axios.get("https://api.github.com/users/viniciusdefault")
    .then((response) => {
        console.log(response.data.avatar_url)
    })
    .then((erro) => {
        console.warn(erro)
    })