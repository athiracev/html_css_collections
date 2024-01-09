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
//     for (s = 1; s <= i; s++) {
//         str += "* "
//     }
//     space=" "
//     for(k=i;k<=5;k++){
//         // for(k=(5-i-1);k>=1;k--) another way
//         space+=" "


//     }
//     console.log(space+str)
// }



//iteration and iterable


// arr="apple"
// ar=[1,2,3,4,5,6,"ball","ice-cream",9,10]
// for(let i of arr){
//     console.log(i)

// }


// for of ( array,string ) array -mutable, string- immutable


// for(let i of ar){
//     console.log(i)

// }


// a = { name: "ball", age: 4, xyz: "tri" }
// for (i in a)

//     console.log(i+" "+a[i])


// a=[1,23,35,5,67,50,30,15,65]
// for(i in a){
//     if(a[i]%5==0){
//         console.log(a[i])
//     }
// }

// for(i of a)
//     if(i%5==0)
//         console.log(i)



// function hello(){
//     console.log("Hi my name is anu")
// }

// hello()




// function add(x,y){
//     c=x+y
//     console.log(c)
// }
// add(3,65)
// add(67,89)


// const a=(x,y)=>{
//     console.log(x+y)

// }
// a(5,6)


// function sum(a,b){
//     c=a+b;
//     return c;
// }
// val=sum(5,7)
// console.log(val)
// if(val%2==0){
//     console.log(val+" is "+"even")
// }else{
//     console.log(val+" is "+"odd")

// }

// let a;
// a=10;
// let a  //redeclaration not possible
// a=15
// console.log(a)

// if(true){
//     let a=10
//     console.log(a)
// }
// console.log(a)// a is not defined

// a=10;
// var a;
// console.log(a)
// display()
// function display(){
//     console.log("hello")
// }

// a=10
// let a;
// console.log(a) //Cannot access 'a' before initialization



// const a;
// a=10;
// console.log(a) // Missing initializer in const declaration

// const a=10;
// console.log(a)

// if(true){
//     const a=10;
//     console.log(a) //block scope
// }

// console.log(a) //a is not defined

// const a=[1,2,3,4,5]
// a[2]='ball'
// console.log(a)//const array variable  value  can be changed

// var a=90;// global scope
// function xyz(){
//     console.log(a)
// }
// xyz()

// if(true){
//     console.log(a)
// }

// console.log(a)


// function xyz(){
// var a=90;// local scope

//     console.log(a)
// }
// xyz()

// if(true){
//     console.log(a)
// }

// console.log(a)


// if(true){
//     var a=80;//block scope
//     console.log(a)
// }
// console.log(a)



// fibnocci series upto the limit
// const no = parseInt(prompt('Enter the limit'));
// let n1 = 0, n2 = 1, next;
// console.log('fibonacci series upto limit')

// for (let i = 1; i <= 10; i++) {
//     if (n1 <= 10) {
//         console.log(n1);
//     }
//     next = n1 + n2
//     n1 = n2;
//     n2 = next;

// }




