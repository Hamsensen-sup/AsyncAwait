const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true

            if(preHeatOven){
                resolve("preheat oven over 480deg")
            }
            else{
                reject("task one failed")
            }
        }, 1000)
    })
}

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true

            if(addChoco){
                resolve("place butter and chocolate chips, stir until melted")
            }
            else{
                reject("task two failed")
            }
        }, 1000)
    })
}

const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true

            if(addSaltFlour){
                resolve("add flour, coco and salt and stir until smooth")
            }
            else{
                reject("task three failed")
            }
        }, 1000)
    })
}

const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true

            if(bakeMixture){
                resolve("bake for 24 minutes for really gooey center")
            }
            else{
                reject("task four failed")
            }
        }, 1000)
    })
}


const bakeChocolateBrownies = async () => {
    try{
        const task1 = await preHeatOven()
        console.log(task1);

        const task2 = await addSugarAndChocoChips()
        console.log(task2);

        const task3 = await addFlourCocoaAndSalt()
        console.log(task3);

        const task4 = await bakeMixture()
        console.log(task4);

        console.log("^__^ enjoy your perfect chocolate brownies ^__^");
    }
    catch(error){
        console.log(error);
    }

    
}

bakeChocolateBrownies()