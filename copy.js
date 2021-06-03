// Shallow copy and deep copy.

// Shallow Copy

// Referencing object directly, making it equal.

const human = {
    name : 'Kushagra Manish',
    age : 21,
    city : 'Kochi'
}

const guy = human // Directly referencing object. --> Shallow Copy

guy.name = 'Nikhil' // Changes caused in the original object. -->  Possiblity of data leakage

console.log(human) // human.name == 'Nikhil'


// Use deep copy to actually clone an object --> Create an actual second object.


const employee = {
    name : 'Shruti',
    designation : 'Manager',
    branch : 'Bangalore'
}

// Two ways of deep cloning an object.

// 1. Manual Method : Copy each attribute.

const employeeObject2 = {
    name : employee.name,
    designation : employee.designation,
    branch : employee.branch
}

console.log(employeeObject2)

console.log(employeeObject2 === employee) // Should return false.

// 2. Recursive function with loop


const deepClone = (objectPassed) => {
    if(objectPassed == null || typeof(objectPassed) != 'object')
    {   
        return objectPassed;
    }

    let deepCloneObject = objectPassed.constructor(); // Making deep clone a prototype of the original object.

    for(let key in objectPassed){
        deepCloneObject[key]  = deepClone(objectPassed[key]) // recursive call.
        // Executes until the objectPassed internally = null or a value, then returns.
        /* {{{}}} --> works correctly for nested objects also. --> Need recursion
         to handle cases with objects having other objects as attributes. */
    }

    return deepCloneObject;

}

console.log(deepClone(employee) === employee); // false
console.log(deepClone(employee));



