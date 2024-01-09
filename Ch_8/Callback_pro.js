function sumofnum(a,b){
    console.log("Two number sum is--:",a+b);
}
function subofnum(a,b){
    console.log("substraction of two num is---:",a-b)
}

function mulofnum(a,b){
    console.log("Multipication of two num is---:",a*b)
}

function add(a,b,sum){
    sum(a,b)
}

add(4,2,sumofnum)
add(6,2,subofnum)
add(8,2,mulofnum)
