
let employee_id=prompt("What is your emplolyee id--:");
let employee_name=prompt("What is your employee name--:");
let employee_designation=prompt("What is your designation--:");

let arrowFun=(employee_id,emplolyee_name,employee_designation)=>{

        let details="Employee id "+employee_id;
        let name_det=" & Employee name is "+emplolyee_name;
        let designation="Employee designation "+employee_designation;
        return(details+name_det+designation);

}

let practise=arrowFun(employee_id,employee_name,employee_designation);

const myElement=document.getElementById("demo").innerHTML=practise;