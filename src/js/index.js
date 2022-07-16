// alert('Hello world !!!');

/** Example 01 starting */
let promise = new Promise((resolve, reject)=> {
    resolve('completed');
    reject(new Error('rejected'))
});

promise.then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error.message)
})

/** Example 01 Ending */


/** Example 02 starting */
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
let promise2 = new Promise((resolve, reject)=> {
    /** Creating request */
    let req = new XMLHttpRequest();

    /** mention type of  request and add url */
    req.open("GET", URL);

    /** Once request done u will get the data by using onload method */
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(new Error("Something Went wrong"));
      }
    };

    /** call the request by using send method */
    req.send();
});

promise2.then(res=>{
   return JSON.parse(res)
}).then(data=>{
   return data.results
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error.message)
})

/** Example 02 Ending */

