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

popatbhai.call(jethalal,"hello jethalal");

popatbhai.apply(iyer,["hellp Iyer"])