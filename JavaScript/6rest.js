function nums(...numbers){
    console.log(numbers);
    console.log(...numbers);
}

function getnums(...numbers){
    return numbers;
}

nums(1,2);
nums(1,2,3,4,5);

const aaa = getnums(1,2,3,4,5);
console.log(aaa);