// const promise = new Promise ((resolve, reject)=>{
//     const allWentWell = false

//     if(allWentWell){
//         resolve("This went well")
//     }else{
//         reject("Something went wrong")
//     }
// })

// console.log(promise);

// const promise = new Promise ((resolve, reject)=>{
//     const randomNumber = Math.floor(Math.random() * 10)

//     setTimeout(()=>{
//         if(randomNumber < 4){
//             resolve("Nice one sir")
//         }else{
//             reject("Apparently You are very wrong")
//         }
//     }, 2000)
// })

// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

const promiseOne = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve("system one resolved")
    }, 2000)
})

const promiseTwo = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        reject("system two rejected")
    }, 2500)
})

Promise.all([promiseOne, promiseTwo])
.then((data) => console.log(data[0], data[1]))
.catch((error)=>{
    console.log(error);
})