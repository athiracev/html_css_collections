login=()=>{
    username=uname.value
    password=pwd.value

    if(!username || !password){
        alert("Enter Valid Username and Password!!!")
    }else{
        localStorage.setItem("username",username)
        // localStorage.setItem("password",password)

        console.log(`Username: ${username},Password: ${password}`)
        window.location="./navbar.html"
    }
}