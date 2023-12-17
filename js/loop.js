// a=1
// while(a<5){
//     console.log("hey!!!")
//     a++
// }
// console.log("\noops loop ended...")


///////////////////////////////// natural number unto 10////////////////////////////////

// a = 2
// while (a <= 10) {
//     console.log(a)
//     a = a + 2
// }





//////////////////////////////// factorial using while loop//////////////////////////////////////


// n = 6
// res = 1
// while (n > 0) {
//     // 6*5*4*3*2*1
//     res = res * n
//     n--
// }
// console.log(res)


///////////////////////////// 9 multiplication table/////////////////////////////////////////////////

// n = 1
// no = 9
// while (n > 0) {
//     if (n < 11) {
//         console.log(n + "*" + no + "=" + n * no)
//         n++
//     }
// }


// print right half pyramid using for loop

// n = 5
// no = 1
// for (i = 1; i <= 5; i++) {
//     var str = ""

//     for (j = 1; j <= i; j++) {
//         str += "1 "
//     }
//     console.log(str)

// }
// console.log("\n")




// for (i = 1; i <= 5; i++) {
//     var str = " "

//     for (j = 1; j <= i; j++) {
//         str += j + " "
//     }
//     console.log(str)
// }
// console.log("\n")


// for(i=5;i>=1;i--){
//     var str=" "
//     for(j=1;j<=i;j++){
//         str+=j+" "
//     }
//     console.log(str)

// }


// star pyramid

// for (i = 1; i <= 5; i++) {
//     var str = " "
//     for (s = 1; s <= 5; s++) {
//         str += " *"
//     }
//     space=" "
//     for(k=(5-i+1);k>=1;k--){
//         space++


//     }
//     console.log(space+str)
// }



//iteration and iterable


arr="apple"
ar=[1,2,3,4,5,6,"ball","ice-cream",9,10]
for(let i of arr){
    console.log(i)
   
}

for(let i of ar){
    console.log(i)
   
}




