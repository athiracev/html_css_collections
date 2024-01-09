


employees = [
    { id: 1, ename: 'Dileep', age: 23, dept: "mech", salary: 25000 },
    { id: 2, ename: 'Sagar', age: 25, dept: "btech", salary: 55000 },
    { id: 3, ename: 'Ammu', age: 20, dept: "mca", salary: 67000 },
    { id: 4, ename: 'Raju', age: 21, dept: "mca", salary: 20000 },
    { id: 5, ename: 'Gopu', age: 19, dept: "bcom", salary: 89000 }
]
// print names of every employee in given dataset

// employees.forEach(item => console.log(item.ename));

// print each employees name and age as Anju is 23 years old

// res = employees.filter(item => console.log(item.ename + " is " + item.age + " years old"));

// print the details of employees who's name is Ammu

// res = employees.find(item => item.ename == 'Ammu')
// console.log(res);


// create an array of departments from given dataset


// "in"  check if the given element is in that array eg for(i in dept)
// includes ---check if this is included



// res = employees.map(item => (item.dept));
// console.log(res);
// dept = []
// for (i of res) {
//     if (dept.includes(i)) {
//         continue
//     }
//     else {
//         dept.push(i)
//     }
// }
// console.log(dept)

// print employees having salary >40000

// res = employees.filter(item => (item.salary > 40000)).forEach(item => console.log(item.ename));

// print employee with highest salary

// res =employees.reduce((prev, next) => prev.salary > next.salary ? prev : next)
// console.log(res.ename);



// print names of every employees//////////////////////////////////////////////

// employees.map(item=>console.log(item.ename));

// employees.forEach(item=>console.log(item.ename));

// employees.filter(item=>console.log(item.ename));


// print name of  every students whos age>20 ///////////////////////////////////

// res=employees.filter(item=>item.age>20).forEach(item=>console.log(item.ename));


// print names of every studens from mca//////////////////////////////////////////////

//  employees.filter(item => item.dept == 'mca').forEach(item => console.log(item.ename));


// find students details whos id=4/////////////////////////////////////////////////

// res=employees.filter(item=>item.id== 4)
// console.log(res);

// create an array of dept from given data set///////////////////

// res = employees.map(item=>item.dept)
// console.log(res);
// dept=[]
// for(i of res){
//     if(dept.includes(i)){
//         continue
//     }else{
//         dept.push(i)
//     }
// }console.log(dept);



// sort the data set in the ascending order of students age////////////////////////////////

// employees.sort((a,b)=>a.age-b.age)
// console.log(employees);



// sort the data set in the ascending order of students name////////////////////////////////

// a=employees.sort((a,b)=>a.ename.localeCompare(b.ename))
// console.log(employees)










