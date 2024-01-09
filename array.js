x = "red apple is red"

// r = x.replace("red","sweet")
// r=x.replace(/r.*d/,"red")
// r=x.indexOf("red")
// r=x.indexOf("red",4)
// r=x.length
// r=x.toUpperCase()
// r1=x.toLowerCase()
// console.log(r,r1)
// r=x.split("e")
// r=x.split()
// r=x.split(" ")
// console.log(r)

// str = "apple is red"
// count = 0
// // const vowels = ["a", "e", "i", "o", "u"]

// for (i of str) {
//     if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//         console.log(i)
//         count++
//     }
// }
// console.log("count of vowels: " + count)


// a={name:"anu",age:23,sub:"English"}
// console.log(a['name'])
// a['name']="anusree"
// console.log(a)
// a['phone']=7678764345
// console.log(a)


a={name:"anu",age:23,sub:"English",display:function(){
    return `${this.name} is ${this.age} years old`
}}
console.log(a.name)
r=a.display()
console.log(r)

// i/p inp="apple is red and apple is sweet"
// o/p {apple:2,is:2,...}