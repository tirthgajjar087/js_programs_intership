function fact(n){

    if(n===0){
        return 1;
    }
    else{
        return n*fact(n-1)
    }

}


function caltotal(n,total=0)
{
    if(n===0){
        return total;
    }
    else{
        console.log("n is--:",n)
        return caltotal(n-1,total=total+n) 
    }
}


let number=prompt("Enter choice number---:");

let result=fact(number)
console.log("Your result is--",result,"your number is",number)

let maintotal=caltotal(3);

console.log("Your total is----",maintotal)