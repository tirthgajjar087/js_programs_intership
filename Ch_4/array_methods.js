let number=[10,20,30,40,50,60];
let number2=[1,2,3,4,5,6];

let result_con=number.concat(number2);
// let result_copywithin=number.copyWithin(0,5);
let result_entries=number.entries();
let result_every=number.every(element=> element<40);

let result_filter=number.filter((number)=>number>40);

let result_find=number.find(element=>element>20)
let result_fill=number.fill('090',0,3);

console.log("Your main number arrya is--------------->",number);
console.log("Your number 2 value is------------------>",number2)

console.log("\nYour concate value is---:",result_con);
// console.log("\nYour copywith in value is---:",result_copywithin);

  
console.log("\nYour entries value is---:",result_entries);
console.log("\nYour every value is---:",result_every);
console.log("\nYour fill value is---:",result_fill);
console.log("\nYour filter value is--:",result_filter)
console.log("\nYour find value is--:",result_find)
console.log("\n Your ")









