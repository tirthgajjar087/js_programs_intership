var person=[
    {
        first_name:"tirth",
        last_name:"Gajjar",
        age:40,
    },
    {
        first_name:"abc",
        last_name:"xyz",
        age:20,
    },
    {
        first_name:"yasin",
        last_name:"pathan",
        age:40,
    },
    {
        first_name:"mohan",
        last_name:"patel",
        age:20,
    }
]



let number=[10,20,30,40,50,60];

let number2=[1,2,3,4,5,6];


// for concat

let result_con=number.concat(number2);

// For copywithin 
// let result_copywithin=number.copyWithin(0,5);

// for entries
let result_entries=number.entries();

// for every
let result_every=number.every(element=> element<40);

// for filter
let result_filter=person.filter((ele)=>{

    return(ele.age>=20);
});

// For find
let result_find=person.find((element)=>{
    return(element.age>5)
})

// For fill
let result_fill=number.fill(90,0);

// For findLast
let result_findlast=number.findLast((ele)=>ele>40);


// for push
let result_push=number.push(101);

// for unshift
let result_unshift=number.unshift(66);

// For pop
let result_pop=number.pop(); 
// For include
let result_include=number.includes(12);

// For join
let result_join=number.join(" | ")

// For slice
let result_slice= number.slice(4);

            
// for Splice
let result_splice=number2.splice(3,0,9)


console.log("Your main number array is--------------->",number);
console.log("Your number 2 array is------------------>",number2)

console.log("\nYour concate value is---:",result_con);
// console.log("\nYour copywith in value is---:",result_copywithin);


console.log("\nYour entries value is---:",result_entries);
console.log("\nYour every value is---:",result_every);
console.log("\nYour fill value is---:",result_fill);
console.log("\nYour filter value is--:",result_filter)
console.log("\nYour find value is--:",result_find);
console.log("\n Your findLast value is------>",result_findlast);
console.log("\nYour push value is -------:",result_push)
console.log("\nYour unshift value is -------:",result_unshift);
console.log("-------------------")

console.log("\n Your pop funtion is --------:",result_pop,number);
console.log("\n Your include value is------:",result_include);
console.log("\n Your join value is-------:",result_join);
console.log("\n Your slice value is------:",result_slice)
console.log("\n Your slipce value is------:",result_splice);











