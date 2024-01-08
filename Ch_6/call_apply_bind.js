let jethalal={
    wife:"daya",
    age:29
    
}

let iyer={
    wife:"babitji",
    age:30        
}


let popatbhai=function(name){
    console.log(name+"-Please help me! send "+this.wife+" bhabhi to cook food")
}

let x="70";
let y=2;

let result=x/y;
console.log("asdasd",result)

popatbhai.call(jethalal,"hello jethalal");

popatbhai.apply(iyer,["hellp Iyer"])