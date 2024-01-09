
async function try_asyn(){
    console.log("Message-: 1");

    await console.log("Message-: 2");
    console.log("Message-: 3");
    console.log("Message-: 4");
}


try_asyn();

console.log("Message-: 5");
console.log("Message-: 6");
console.log("Message-: 7");

