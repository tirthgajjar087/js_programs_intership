let student = [
    {
        roll_no: 10,
        fname: "Tirth",
        lname: "Gajjar",
        age: 10,
        bday: "30/03/2002",
        std: "10th",
    },
    {
        roll_no: 11,
        fname: "Dirgh",
        lname: "Rami",
        age: 11,
        bday: "16/01/2000",
        std: "11th",

    }, {
        roll_no: 10,
        fname: "Tirth",
        lname: "Gajjar",
        age: 10,
        bday: "30/03/2002",
        std: "10th",
    },
    {
        roll_no: 11,
        fname: "Dirgh",
        lname: "Rami",
        age: 11,
        bday: "16/01/2000",
        std: "11th",

    }, {
        roll_no: 10,
        fname: "Tirth",
        lname: "Gajjar",
        age: 10,
        bday: "30/03/2002",
        std: "10th",
    },
    {
        roll_no: 11,
        fname: "Dirgh",
        lname: "Rami",
        age: 11,
        bday: "16/01/2000",
        std: "11th",

    }
]


localStorage.setItem("User_data", JSON.stringify(student));

console.log(JSON.parse(localStorage.getItem("User_data")))
localStorage.clear();
// console.log(localStorage.getItem("User_data"));
// console.log(localStorage.getItem("User_data-:"))

let print_details = student.map((ele) => {
    return (ele);
})


student.forEach((value, index) => {

    console.log(value, "index value==", index)
})
console.log(print_details);

for (let i in student) {
    console.log(student[i]);
}

let number = [1, 2, 3, 4, 5, 2, 3];

let remove_duplicate = new Set(number);

console.log(remove_duplicate);