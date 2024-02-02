let main_data=fetch("http:/localhost:9002/employee")

.then((response)=>{
    // console.log("just---:",response.json());
    return response.json();
}).then((data)=>{
    console.log(data);
    
    // document.write(data) 

}).catch((error)=>{
    console.log(error);
})


