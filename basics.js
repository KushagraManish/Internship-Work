// Program to demonstrate the basics in JS
// Run using node basics.js

//Simple array declaration with objects.
employeeArray = [
    {
        id : 3939,
        name : 'Ravi',
        work : 'SWE'
    },
    {
        id : 39392,
        name : 'Nizar',
        work : 'Senior SWE'
    },
    {
        id : 39239,
        name : 'Nikki',
        work : 'System Engineer'
    }
   
]


let arrayTraversal = function(array){
    //for each object in array print a template string with the employee description.
    array.forEach(function(arrayObject){
        console.log(`Employee id : ${arrayObject.id}   EmployeeName : ${arrayObject.name} Employee Work : ${arrayObject.work}`)

    })
}

//function call to print the employee object template string.
arrayTraversal(employeeArray)


//Simple function to find and change the object id
let changeWork = function(array , inputId , newWork)
{
    employee = array.find(function(arrayItem){
        return arrayItem.id === inputId
    })

    employee.work = newWork


}

changeWork(39239, 'Systems Manager')

console.log(employeeArray)


//splice function

employeeArray.splice(1,1, {id : 389383 , name : 'Kirti' , work : 'System Designer'})

//change the second element and replace it with given object



//sort employeeArray by id

let sortArray = function(array){
    array.sort(function(arrayItem1 , arrayItem2){
        if(arrayItem1.id < arrayItem2.id)
        
        {
            return -1;
        }else if(arrayItem1.id > arrayItem2.id)
        {
            return 1;
        }else{
            return 0;
        }
    })
}

sortArray(employeeArray);

console.log(employeeArray);

//Map, Reduce , Filter

//Map : Used to apply a function to each element in an array

let numbers = [1,2 , 3 ,4,5,6]

let square = function(nums){
    return nums*nums;
}

let squredNumbers  = numbers.map(square);

console.log(squaredNumbers)
//return [1, 4, 9, 25 , 36]


// Reduce : Used to return one value after applying some function to an array

// Two arguement given to the reduce function : accumulator , currentValue [element]


const sum = numbers.reduce((sum, number) =>   { // Arrow function syntax
    return sum + number
}, 0 )//Initial value of accumulator (sum =0 )


// Filter :  Used to return the array with all elements satisfying a particular condition

let numbersGreaterThanTwo = numbers.filter(function(number){
    return number > 2;
})

console.log(numbersGreaterThanTwo);

// String Methods

// UpperCase, LowerCase

let str = "Kushagra"

let strCaps = str.toUpperCase()
let strSmall = str.toLowerCase()

console.log(strCaps)
console.log(strSmall)

// Includes method : to identify substring

console.log(str.toLowerCase.includes('Kushagra'.toLowerCase())) //use toLowerCase to remove case sensititivity

//prints true

// this keyword

account = {
    name : 'Kushagra Manish',
    expense : [
      {
        descr : 'food',
        amount : 1000
      },
      {
        descr : 'foods',
        amount : 130
    
      },
      {
        descr : 'groceries',
        amount : 499
        
      }],
      
      income : [
        
        
        {
           source: 'work1',
           amount : 300
        } , 
        
        {
          source: 'work2',
           amount : 1000
        } , 
        
        {
          source: 'work3',
           amount : 3000
        }],
        
        
       addIncomes : function(){
              let sums =0
         this.income.forEach(function(incomes)
         {
           sums += incomes.amount;
         })
         
         return sums;
       }, 
           
           incomeSummary : function(){
                  return `${this.addIncomes()} is the total income of ${this.name}`
           }
,
        addExpenses : function(){
        //Using this keyword with reduce.
            return this.expense.reduce(function(accumulator, currentValue){
                return accumulator + currentValue.amount;
            })
        }
  }
  
  console.log(account.addIncomes());
  console.log(account.incomeSummary());
  
  //Arrow functions simple examples.


  addNums = (num1, num2) =>{
      return num1 + num2;
  }

  console.log(addNums(2,3));

  // Classes in Js

  class Car{
      constructor(name, year)
      {
          this.name = name
          this.year = year
      }

      ageYears()
      {
          let date = new Date();
          return date.getFullYear() - this.year
      }

  }

  car = new Car('Ford', 2014)

  console.log(car.ageYears())


  // Edge case : null


  console.log({} === {}) // false : No two objects are exactly equal unless declared so

  //undefined != null


  // Getters and Settters

let person = {
    fname : 'Sahil',
    lname : 'Bisht',
    age : 23,
    set Age(Age){
        this.age = Age
    },
    get fullName(){
        return this.fname + this.lname;
    }
}

person.Age = 25;
console.log(person);
console.log(person.fullName);

// object constructor and prototypes

//Basic constructor prototype
let Person = function(name, age, addr, dob)
{
    this.name = name,
    this.age = age, 
    this.addr = addr,
    this.dob = dob
}

// New prototype
let mother = new Person("Hu", 34 , "Kochi" , "4-5-2000");

// Can add property to a prototype as: 

Person.prototype.introduction = function(){
    console.log(`Name : ${this.name} Age : ${this.age}`)
}

mother.introduction();

// Asynchronus Functions

//Passing one function as arguement to another

myFunction = () =>{
    return "Hello"
}
// Making arrow functions a habbit.

setTimeout(myFunction, 3000);

// Async JS
// Local storage APIs
// Form Validation









