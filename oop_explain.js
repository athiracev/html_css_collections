// class Student{

//     // members
//     // properties/member variable
//     name="Athira"
//     age=23
//     qualification="MCA"
//     // methods /member methods
//     display(){
//         console.log("Students Details")
//         console.log("Student name is :"+this.name)
//     }    
// }
// var obj=new Student()
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.qualification)
// // console.log(obj.name)
// obj.display()


// class Employee{
//     employees = [
//         { id: 1, ename: 'Vikram', age: 23, dept: "mech", salary: 25000 },
//         { id: 2, ename: 'Vijay', age: 25, dept: "btech", salary: 55000 },
//         { id: 3, ename: 'Surya', age: 20, dept: "mca", salary: 67000 },
//         { id: 4, ename: 'Ranveer', age: 21, dept: "mca", salary: 20000 },
//         { id: 5, ename: 'Alia', age: 19, dept: "bcom", salary: 89000 }
//     ]  
// }
// var obj=new Employee()
// console.log(obj)


class Student{
    // constructor4
    constructor(nm,ag,qua){
        this.name=nm
        this.age=ag
        this.qualification=qua

    }
    
} 

var obj= new Student("Athira",20,"mca")

// console.log(obj)

var obj1= new Student("Anu",20,"bca")

// console.log(obj1)


class Employee{

    //default constructor
    // constructor(){
    //     console.log("object created")
    // }

    constructor(nm,occu){
        this.name=nm
        this.occupation=occu

    }
    // name="Anu"
    // occupation="Engineer"
    display(){
        console.log(this.name+" is an "+this.occupation)
    }   
}

// obj= new Employee("Anu","Artist")
// obj.display()
// obj1=new Employee("Athira","Engineer")
// obj1.display()


// Inheritance

// class A{
//     name="Anu"
//     display(){
//         console.log("Hi nice tio meet you,my name is "+this.name)
//     }
    
// }
// // m=new Main()
// // console.log(m.qualification)///not possible
// class B extends A{

//     qualification="MBA"
        
// }

// obj= new B()
// console.log(obj.qualification)
// console.log(obj.name)
// console.log(obj)



// class Main{
//     constructor(nm){
//         this.name=nm

//     }
//     display(){
//         console.log("main class constructor")
//     }
// }
// m=new Main("Main")//this will print
// console.log(m.name)

// class Sub{
//     title="hsg"
// }


// obj=new Main("Sub ")//this will print
// console.log(obj.name)



// find total average of mark and avg of every students

class Students{
    constructor(nm,m1,m2,m3){

        this.name=nm
        this.mark1=m1
        this.mark2=m2
        this.mark3=m3

    }

    avg(){
        const av=(this.mark1+this.mark2+this.mark3)/3
        console.log(av)
    }

    // totalAvg(){

    //     const total= this.av()/3
    //     console.log(total)

    // }
}

obj=new Students("Anu",56,67,89)
console.log(obj)

obj.avg()

obj1=new Students("Athira",60,60,60)
console.log(obj1)
obj1.avg()
// obj1.totalAvg()


/////////////////////// refer setter and getter /////////////////////////

//__proto__ -- this helps to acquire the properties of parent variable

var baleno={
    manufacturer:"Suzuki",
    model:"baleno",
    fuel_type:["petrol","diesel","cng"],
    transmission:["manual","automatic"],
    colours:["black","red","white"]
}

var glanza={
    manufacturer:"Toyoto",
    name:"Glanza"

    
}

glanza.__proto__=baleno
console.log("The fuel types of glanza is: ",glanza.fuel_type)
console.log("The color types of glanza is: ",glanza.colours)
console.log("The manufacturer types of glanza is: ",glanza.manufacturer)
console.log("The name  of glanza is: ",glanza.name)



//create a class Bank for creating user accounts with details[id,name,bal,tran_history].Difine methods 
// for credit(deposite) and debit(withdraw )

class Bank{
    constructor(_id,name){
        this.id=_id
        this.user=name
        this.balance=0
        this.transactions=[]  
    }
    credit(amnt){  //deposit amount

        this.balance+=amnt
        this.transactions.push({transaction_type:"CREDIT",amount:amnt})

    }
    debit(amnt){ // withdraw amount
        this.balance-=amnt
        this.transactions.push({transaction_type:"DEBIT",amount:amnt})
    }
  
}

acc=new Bank(1,"arya")
console.log(acc)

acc.credit(2000)
console.log(acc)

acc.credit(8000)
console.log(acc)

acc.debit(2000)
console.log(acc)

acc.debit(5000)
console.log(acc)

acc.credit(8000)
console.log(acc)


// polymorphism////////////////////////////////////////////////
// method overroding/function overriding(no default polymorphism in js)
// to achieve this spread operator is used


function add(a,b){
    console.log(a+b)
    console.log("2 args")
}

function add(a,b,c){
    console.log(a+b+c)
    console.log("3 args")
}
function add(a,b,c,d){
    console.log(a+b+c+d)
    console.log("4 args")
}

add(70,50)
add(20,40,90)
add(4,5,7,3)









// solution by using spread operator

// function add(...args){
//     console.log(args)
//     console.log(args.reduce((prev,next)=>prev+next))
// }

// add(70,50)
// add(20,40,90)
// add(4,5,7,3)


