const url = "https://swapi.dev/api/people"

fetch(url)
    .then((response) => {
        return response.json()

    })
    .then((data) => {
        return data.results;
    })
    .then((finalData) => {
        console.log(finalData[0])
    })

    .catch((erro) => {
        console.log(`Opa, aconteceu um erro: \n${erro} `);
    })



