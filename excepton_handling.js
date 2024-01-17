try{
    // exp="%10+2*1.8"
    exp=10+2*1.8

    res=eval(exp)
    console.log(res)
}
// catch{
//     console.log("something went wrong")
// }
catch(err){
    console.log("something went wrong",err)

}
finally{
    console.log("program ended")
}


