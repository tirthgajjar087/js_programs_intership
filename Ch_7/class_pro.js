class testA{
    constructor(brand,carType,carColor){
        this.brandName=brand;
        this.carType=carType,
        this.carColor=carColor;
        console.log("I am class A")
    }
    displayName(){
        return 'My own car name is--'+this.brandName + " And car type is--"+this.carType+""+" and car color is---"+this.carColor;
    }
}

class testB extends testA{

    constructor(brand,carType,carColor){
        super(brand,carType,carColor);
        console.log("Hey i am test B")
    
    }
    car(){
        console.log("-------- I am in class B");
    }
}

let maincar=new testA("Suzuki","SUV","black");

console.log(maincar.displayName())
console.log(maincar.car())
