const xhttp= new XMLHttpRequest()

xhttp.open("GET","https://jsonplaceholder.typicode.com/comments")

xhttp.send()
console.log(xhttp.readyState)

xhttp.onreadystatechange=()=>{
    if(xhttp.readyState==4 && xhttp.status==200){
        console.log(JSON.parse(xhttp.responseText))
        let comment=JSON.parse(xhttp.responseText)
        htmlData=""

        
    }
}