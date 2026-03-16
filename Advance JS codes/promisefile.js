//promise file

let promise=new Promise(function(resolve,reject){
    if(true){
        resolve("task done")
    }
    else{
        reject("task failed")
    }
});

promise.then(function(result){
    console.log(result) // task done
}).catch(function(error){
    console.log(error) // task failed
});