// Write down a nested object to store data of company employees
var employee = {
    employeeID : 1,
    name: "Raj",
    age : 25,
    address:{
        street:"Lal Gati",
        city :"Bhopal",
            type:{
                    permanent:"Indore",
                    current:"Bhopal"
                }
    }
}
console.log("***********************************");
console.log("***********************************");
console.log(" Question 5 output  ");
console.log("***********************************");


console.log(employee.address.type.permanent)