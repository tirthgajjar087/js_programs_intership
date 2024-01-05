// program for calculate how many hour & mintues to cook a maggi

let maggi=prompt("How many piece of maggi you will added in tapeli--:");
let pani= prompt("How many liters you have to add for cook maggi---:");
let tapeli=prompt("How many tapeli you needed for cooked maggie----:");




function cookMaggi(maggi,pani,tapeli){


    let hours=(maggi/60)*2.5;
    console.log("houe",hours)
    let rhours=Math.floor(hours);
    console.log("houe",rhours)
    
    let mintues=Math.round((hours-rhours)*60);
    
    console.log("\nYour maggi will be ready in "+rhours+" hours "+mintues+" Mintues"+
    "\n\nYour incredition is--:"+maggi+" piece of maggi "
    +pani+" cupes of water"
    +" using "+((isNaN(tapeli))?0:tapeli)+" tapeli")
    console.log("Hello i am cooke magii function ");
    
    function testing(){
        console.log("just trying inner function")
    }
    testing()
}


cookMaggi(maggi,pani,tapeli);


