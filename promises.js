// const promise = new Promise ((resolve, reject)=>{
//     const allWentWell = false

//     if(allWentWell){
//         resolve("This went well")
//     }else{
//         reject("Something went wrong")
//     }
// })

// console.log(promise);

const promise = new Promise ((resolve, reject)=>{
    const randomNumber = Math.floor(Math.random() * 10)

    setTimeout(()=>{
        if(randomNumber < 4){
            resolve("Nice one sir")
        }else{
            reject("Apparently You are very wrong")
        }
    }, 2000)
})

console.log(promise);