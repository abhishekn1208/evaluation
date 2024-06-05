var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}

];
 let storeAnalysis =()=>{

    //1st problem
    // store.forEach((ele)=>{
    //    console.log(`Name :${ele.name}, Rating :${ele.rating}`)
    
    // });

    //2nd. problem
//    let totoalRating = store.reduce((acc,curr)=>
//    acc + curr.rating ,0)
//    return totoalRating/store.length

   //3rd problem
   let minPrice = store.reduce((acc1,curr1)=>{
    let cal = curr1.price < acc1.price ? curr1 :acc1;
    return cal
   },store.price[0])
   return minPrice
 }

let x = storeAnalysis(store)
console.log(x)