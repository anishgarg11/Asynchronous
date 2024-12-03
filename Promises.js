// let promise = new Promise((resolve, reject) => {
//   console.log("Hello Anish Garg");
// //   reject("error occurred");
//   resolve("success")
// });


// --------------------------------------


// function getData1(dataId1){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId1)
//             resolve("success")
//         }, 2000)
//     })  
// }

// let get1  = getData1(123);



// -------------------------------------


// .then() for resolve and .catch() for reject
const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("I'm Promise");
        // resolve("Success")
        reject("Some error");
    })
}

// For Resolve use .then() Method
let promise = getPromise();
promise.then((res)=>{
    console.log("Resolve .then() Method", res)
})


// For Rejected using .catch() method
promise.catch((err)=>{
    console.log("Rejected .catch() Method", err)
})