let sandwichName=prompt(`\n Whhich sandwich would you prefer`);

let bread=prompt(`\n which type of bread would you refer--:`);

let veggies=prompt("Which veggies would you refer---:");
let saurce=prompt("Which saurce would you refer---:");

let cooksandwich=function(sandwichName,bread,veggies,saurce){
    
    
    let makesandwich="\nYour sandwich name is-----:"+sandwichName+"\n your bread type is--: "+bread+"\n your choice veggies is---:"+veggies+"\n your saurce is---:"+saurce;

    console.log("please wait 10!")
    return makesandwich;
}

cooksandwich(bread,veggies,saurce);
console.log(cooksandwich(sandwichName,bread,veggies,saurce))