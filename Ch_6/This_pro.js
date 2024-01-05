let user_det={
    first_name:"",
    lastname:"",
    password:"",
    msg:function(){
        console.log(`welcome ${this.first_name}`);
    }

}

let first_name=prompt("Enter first_name----:");
let lastname=prompt("Enter last name-----:");
let password=prompt("Enter password-----:");

user_det.first_name=first_name;
user_det.lastname=lastname;
user_det.password=password;

console.log(user_det);

