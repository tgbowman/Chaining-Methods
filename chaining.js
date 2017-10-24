const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let numbers = integers.sort((first, second)=> {return (second - first)})
.filter((integer)=>{return integer < 19}).reduce((integer)=>{return ((integer * 1.5) - 1)})

console.log(numbers)