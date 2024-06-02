const numbers = [1, 2, 3, 4, 5];

let calculateSum =()=>{
    let sum = 0;
    numbers.forEach((ele)=>{
         sum = sum +ele;
         
        })
       
        return sum
}
console.log(calculateSum(numbers))