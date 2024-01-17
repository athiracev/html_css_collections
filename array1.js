// array element count/////////////////////////////////////////////////////////////////////

// const arr = ["red", "green", "red", "white", "white", "yellow", "yellow", "green", "red"];

// // object to store counts
// const countObj = {};

// for (let i = 0; i < arr.length; i++) {
//   const currentElement = arr[i];
//   if (!countObj[currentElement]) {
//     countObj[currentElement] = 1;
//   } else {
//     countObj[currentElement]++;
//   }
//   console.log(currentElement);
// }
// for (const element in countObj) {
//   console.log(element + " : " + countObj[element] + " times");
// }


// string word count////////////////////////////////////////////


// inp="apple is red and apple is sweet"
// words= inp.split(" ")
// console.log(words)
// res={}
// for(let i of words){
//   if(i in res){
//     res[i]+=1
//   }
//   else{
//     res[i]=1
//   }
// }
// console.log(res)


// a=["apple",2,"ball","cat","doll",6]
// console.log(a[2])
// a[2]="kiwi"
// console.log(a)
// a[6]="hat"
// console.log(a)
// a[9]="hello"
// console.log(a)
// console.log(a.length)

// a=["apple",2,"ball","cat","doll",6]

// slice
// res=a.slice(2,5)
// console.log(res)

//toString()
// res=a.toString()
// console.log(res)

//join
// res=a.toString()
// res=a.join(" ")
// console.log(res)

//push()
// res=a.push("anu")
// console.log(a)
// console.log(res)

//pop()
// res=a.pop()
// console.log(a)
// console.log(res)


//delete keyword
// delete a[2]
// console.log(a)

//shift -- perform pop from left side
// res=a.shift()
// console.log(a)
// console.log(res)

//unshift-- perform push from left side
// res=a.unshift("amal")
// console.log(a)
// console.log(res)

//concat  refer splice
// b=[1,2,3,4,5]
// res=a.concat(b)
// res=b.concat(a)
// console.log(res)

// obj={name:"Anu","Age":24,Hair:"Curley"}
// console.log(obj)
// let {name,Age,Hair}=obj
// console.log(name)
// console.log(Age)
// console.log(Hair)


// splice


// arr =["anu","anjana","amar","amal","aisu"]
// res=arr.splice(2,2)  //remove 2 elements from index 2 ,2  elements are removed
// res=arr.splice(2,2,"akansha","athira","amaya")
// console.log(res) 
// console.log(arr)


//indexOf

// a= "Hi my name is Athira Narayanan"
// res=a.indexOf("Athira")
// console.log(res)
// res=a.indexOf("a",14)
// console.log(res)
// res=a.indexOf("a")
// console.log(res)


// a=[1,2,3]
// res=["apple","amul",...a]
// console.log(res)

// b={name:"Anu",age:23}
// c={class:"MCA",...b}
// console.log(c)
// console.log(b)



//////////////////////////
// array iteration methods
//////////////////////////
// forEach()
// Map()
// filter()
// find()
// reduce()
// every()
// some()
// sort()
// etc


// without using function/////////////////////////////

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];
// for(num of a){

//     fact=1
//     for(i=1;i<=num;i++){

//       fact*=i

//     }
//     console.log(fact)

// }



// using forEach////////////////////////////////

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];

// function fact(num){
//     f=1
//     for(i=1;i<=num;i++){
//         f*=i
//     }
//     console.log(f)

// }

// a.forEach(fact) used to iterate array element into a fun  array.forEach(callback)
///////////////////////////////////////////////////////////////////////////////////


// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];

// a.forEach((num)=>{
//     f=1
//     for(i=1;i<=num;i++){
//         f*=i
//     }
//     console.log(f)
// })



// print square of each element

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];
// a.forEach((num)=>console.log((num**2)))


// map it iterate an array elemnt and pass it into a fun and return that array of results
//////////////////////////////////////////////////////////////////////////////////////

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];
// function fact(num){
// f=1;
// for(i=1;i<=num;i++){
//     f*=i

// }
// return f
// }
// res=a.map(fact)
// console.log(res)

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];

// res=a.map((num)=>{

//     f=1;
//     for(i=1;i<=num;i++){
//         f*=i
//     }
//     return f

// })
// console.log(res)

// const a = [1, 2, 34, 5, 78, 10, 234, 56, -12];
// res=a.map((num)=>console.log(num**2))


// filter()  it iterates array elements to a fun and returns array with elements that passes a test
//////////////////////////////////////////////////////////////////////////////////////////////////

// a=[1,-9,8,69,-90]
// res=a.filter((num)=>num%2==0)
// console.log(res)

// find()

//   it iterate array elements to a function and returns first element that satisfy the condition
/////////////////////////////////////////////////////////////////////////////////////////////////

// a=[1,4,56,78,-90,87]
// // res=a.find((item)=>item==-90)
// res=a.find((item)=>item>56)
// console.log(res)

// reduce()   it iterates an array element into the function and return a single value
////////////////////////////////////////////////////////////////////////////////////////

// a=[1,4,56,78,-90,87]

// res=a.reduce((prev,next)=>prev+next)
// console.log(res)

// biggest of the given array elements
///////////////////////////////////////
// a=[1,4,56,78,-90,87]
// const a = [4, 2, 7, 1, 9, 12, 50];

// const max = a.reduce((prev, next) => prev > next ? prev : next);

// console.log("The biggest element in the array is:", max);


// const a = [4, 2, 7, 1, 9, 12, 50];

// const min = a.reduce((prev, next) => prev < next ? prev : next);

// console.log("The biggest element in the array is:", min);


// a = ["Stranger Things", "Little Women", "Dark", "Vampire Diaries", "Breaking Bad","Sex Education"];
// a.sort()
// a.reverse()

// console.log(a);

// a = [4, 2, 7, 1, 9, -12, 50];
// // a.sort((x,y)=>x-y)
// a.sort((x,y)=>y-x)  //consider x and y as adjacent elements
// console.log(a);



//get an array of cubes of every odd numbers from given array

// a=[2,5,7,9,34,56,78,79,90,89,75]
// res=a.filter(num=>num%2!=0)
// r=res.map((n)=>n**3)
// console.log(r);




//  chaning using dot operator
// a=[2,5,7,9,34,56,78,79,90,89,75]
// res=a.filter(num=>num%2!=0).map(n=>n**3)
// console.log(res);


//every()  iterates an array into a fn and returns true if every element passes a test
//////////////////////////////////////////////////////////////////////////////////////


// a=[2,5,7,9,34,56,78,79,90,89,-75]
// res=a.every(item=>item>0)
// console.log(res);

//some()   iterates an array into a fn and returns true if any element passes a test
//////////////////////////////////////////////////////////////////////////////////////


// a=[2,5,7,9,34,56,78,79,90,89,-75]
// res=a.some(item=>item>0)
// console.log(res);


let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);

class Employee{
  name="Akash"
  age=37
  dept="accounting"
}