var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}

];
 let storeAnalysis =()=>{
    // store.forEach((ele)=>{
    //    console.log(`Name :${ele.name}, Rating :${ele.rating}`)
    
    // });
   let totoalRating = store.reduce((acc,curr)=>
   acc + curr.rating ,0)
   return totoalRating/store.length
 }

let x = storeAnalysis(store)
console.log(x)