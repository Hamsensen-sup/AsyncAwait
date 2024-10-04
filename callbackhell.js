function task1(callback){
    setTimeout (()=>{
        console.log("1.niceeee");
        callback();
    }, 600)
}

function task2(callback){
    setTimeout (()=>{
        console.log("2.not nice");
        callback();
    }, 4500)
}

function task3(callback){
    setTimeout (()=>{
        console.log("3.not so nice");
        callback();
    }, 2500)
}
function task4(callback){
    setTimeout (()=>{
        console.log("4.not soooo niceeeee");
        callback();
    }, 1500)
}
function task5(callback){
    setTimeout (()=>{
        console.log("5.ain't nice");
        callback();
    }, 5500)
}
function task6(callback){
    setTimeout (()=>{
        console.log("6.nahhhh that's not nice");
        callback();
    }, 3500)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                    })
                })
            })
        })
    })
})







