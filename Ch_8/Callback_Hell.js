function getData(dataID,getNextdata){
    setTimeout(()=>{
        console.log("Your data is",dataID);

        if(getNextdata){
            // console.log("if condition");
            getNextdata();
            //console.log("i am next data",getNextdata());
        }
    },1000)
     
}

getData(1,()=>{
        getData(2,()=>{
            getData(3)
        })
});
