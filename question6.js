const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// [4, 5, 6, 7, 8, 1, 2, 3]

let rearrangeArray =()=>{

let t = numbers.splice(0,3)

 numbers.push(...t)
 return numbers

}
console.log(rearrangeArray(numbers))

