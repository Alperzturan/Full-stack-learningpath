//callback hell

/* function walkDog(callback){
    setTimeout(()=>{
        console.log("Walked the dog");
        callback();
    },1000);
}
function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("Cleaned the kitchen");
        callback();
    },2000);
}
function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("Trash taken out");
        callback();
    },500);
}
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("Chores are completed");
        });
    });
}); */


//promises

/* function walkDog(){
    return new Promise((resolve, reject)=>{
        const walk = true;
        if(walk == true){
            setTimeout(()=>{
                resolve("Walked the dog");
            },1000);
        }else{
            reject("Didnt walked the dog");
        }
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        const clean = true;
        if(clean == true){
            setTimeout(()=>{
                resolve("Cleaned the kitchen");
            },2000);
        }else{
            reject("Didnt cleaned the kitchen");
        } 
    });   
}
function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        const trash = false;
        if(trash == true){
            setTimeout(()=>{
                resolve("Trash taken out");
            },1500);
        }else{
            reject("Trash is not taken out");
        }
    });   
}
walkDog().then(value=>{console.log(value); return cleanKitchen()})
        .then(value=>{console.log(value); return takeOutTrash()})
        .then(value=>{console.log(value); return console.log("All chores are complete")})
        .catch(error=>{console.error(error)}); */



//async await
/* function walkDog(){
    return new Promise((resolve, reject)=>{
        const walk = true;
        if(walk == true){
            setTimeout(()=>{
                resolve("Walked the dog");
            },1000);
        }else{
            reject("Didnt walked the dog");
        }
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        const clean = true;
        if(clean == true){
            setTimeout(()=>{
                resolve("Cleaned the kitchen");
            },2000);
        }else{
            reject("Didnt cleaned the kitchen");
        } 
    });   
}
function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        const trash = true;
        if(trash == true){
            setTimeout(()=>{
                resolve("Trash taken out");
            },1500);
        }else{
            reject("Trash is not taken out");
        }
    });   
}

async function doChores(){
    const walkRes = await walkDog();
    console.log(walkRes);

    const cleanRes = await cleanKitchen();
    console.log(cleanRes);

    const trashRes = await takeOutTrash();
    console.log(trashRes);

    console.log("Chores are done");
}

doChores(); */


//API ve json files

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response=>{
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        return response.json()
    })
    .then(data=>{console.log(data)})
    .catch(error=>{console.error(error)});
 */

pokeFetch();
async function pokeFetch(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
        
        if(!response.ok){
            throw new Error("Could not fetch data");
        }

        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error(error)
    }
    
}


