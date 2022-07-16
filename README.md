# Javascript Promices | Koseksi 

### Promices In Detail
- Promices are mostly we are using in async calls. 
- While call the API from javascript, taking time to get the responce.
- For calling calling APIs in javascript we are using one of the approuch is called promices.
- A promice have one executer function it will called once promice created
- In side promice function u need to call resolve or reject then only the promice will give error or data.
- And a promice contains one executer function , it will called by calling promice using .then() method.
- We can optimixe the data using .then multiple times.

### Steps:
- To create promice by using construtor function in js file, Like below syntax.

```bash
  let promise = new Promise((resolve, reject)=> {
    // Here we need to write code
  });
```

### Example 01
```bash

  let promise = new Promise((resolve, reject)=> {
      resolve('completed');
      reject(new Error('rejected'))
  });

  promise.then(res=>{
      console.log(res);
  }).catch(error=>{
      console.log(error.message)
  })

```

### Example 02
```bash

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

```