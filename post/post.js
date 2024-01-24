const xhttp= new XMLHttpRequest()

xhttp.open("GET","https://jsonplaceholder.typicode.com/posts")
xhttp.send()
console.log(xhttp.readyState)

xhttp.onreadystatechange=()=>{
    if(xhttp.readyState==4 && xhttp.status==200){
        console.log(JSON.parse(xhttp.responseText))
        let posts=JSON.parse(xhttp.responseText)
        htmlData=""
        posts.forEach((item)=>{
            htmlData+=`
            <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            </tr>

            `
            console.log(htmlData)
            result.innerHTML=htmlData
        })
    }
}