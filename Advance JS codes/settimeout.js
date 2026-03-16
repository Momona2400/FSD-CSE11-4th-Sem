//timeout function

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("task done")
    },10)
});

promise.then(function(result){
    console.log(result) // task done
}).catch(function(error){
    console.log(error) // task failed
});