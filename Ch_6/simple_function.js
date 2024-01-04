// program for calculate how many hour & mintues to cook a maggi

let maggi=prompt("How many piece of maggi you will add in tapeli--:");
let pani= prompt("How many liters you have to add for cook maggi---:");
let tapeli=parseInt(prompt("How many tapeli you needed for cooked maggie----:"));


function cookMaggi(maggi,pani,tapeli){
  
        let hours=(maggi/60)*2;
        let rhours=Math.floor(hours);
        let mintues=Math.round((hours-rhours)*60);

            console.log("Your maggi will be ready in "+rhours+" hours "+mintues+" Mintues"+
            "\n\nYour incredition is--:"+maggi+" piece of maggi "
            +pani+" cupes of water"
            +" using "+((isNaN(tapeli))?0:tapeli)+" tapeli")
            console.log("Hello i am cooke magii function ");
    
}

cookMaggi(maggi,pani,tapeli);



