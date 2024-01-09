let check_pro=true;

let promise_status=()=>{
     return new Promise(function(resolve,reject){
        if(check_pro){
            resolve("Successful")
        }
        else{
            reject("Unsuccessful")
        }
    })
}


console.log(promise_status());

promise_status()
.then(
    function successValue(result){
        console.log("Then block---",result);
    }
)
.catch(
    function errorValue(error){
        console.log("catch block---",error);
    }
)