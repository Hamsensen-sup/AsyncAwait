// const loadJokes = async () => {
//     try{
//         const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
//             headers: {
//                 accept: 'application/json'
//             }
//         })
//         const jokeData = await chuckNorrisFetch.json()
//         document.getElementById("loadingJoke").textContent = jokeData.value
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// const loadJokeBtn = addEventListener("click", loadJokes)

const loadJokes = async () => {
    try{
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                accept: 'application/json'
            }
        })
        const jokeData = await chuckNorrisFetch.json()
        document.getElementById("loadingJoke").textContent = jokeData.value
    }
    catch(error){
        console.log(error);
    }
}

const loadJokeBtn = addEventListener("click", loadJokes)