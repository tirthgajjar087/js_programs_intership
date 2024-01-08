"use strict";

let user_det={
    first_name:"",
    lastname:"",
    password:"",
    msg:function(){
        return this.first_name+ " " + this.lastname
    }

}

let first_name=prompt("Enter first_name----:");
let lastname=prompt("Enter last name-----:");
let password=prompt("Enter password-----:");

user_det.first_name=first_name;
user_det.lastname=lastname;
user_det.password=password;

console.log("main--->",user_det);



let try_this=(first_name)=>{

    return this.first_name;
}


gs

document.getElementById("demo").innerHTML=user_det.msg();

document.getElementById("demo1").innerHTML=try_this("tirth");
