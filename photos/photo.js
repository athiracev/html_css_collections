res.fetch("https://jsonplaceholder.typicode.com/photos")
console.log(res)
res.then(res => res.json()).then(res => console.log(res)).catch(rej => console.log(rej))