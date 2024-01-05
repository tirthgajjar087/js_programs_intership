function outerFun(){
    let num1=10;
    let num2=20;

        function innerFun(){
            let result=num1+num2;
            console.log("our reuslt is---",result)
        }
        innerFun();
}

outerFun()