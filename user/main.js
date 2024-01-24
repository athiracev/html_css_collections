//instantiate xmlhttprequest object

const xhttp= new XMLHttpRequest()

// initialize api call using Object

xhttp.open("GET","https://jsonplaceholder.typicode.com/users")

// initialize  api request

xhttp.send()

console.log(xhttp.readyState)

xhttp.onreadystatechange=()=>{
    if(xhttp.readyState==4 && xhttp.status==200){
        console.log(JSON.parse(xhttp.responseText))
        let users=JSON.parse(xhttp.responseText)
        htmlData=""
        users.forEach((item) => {

            htmlData+=`
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.website}</td>
        <td>${item.address.city}</td>
        <td>${item.address.street}</td>
        <td>${item.address.suite}</td>
        <td>${item.address.zipcode}</td>
        </tr>
        `
            
        });
        
        console.log(htmlData)
        result.innerHTML=htmlData

    }
}