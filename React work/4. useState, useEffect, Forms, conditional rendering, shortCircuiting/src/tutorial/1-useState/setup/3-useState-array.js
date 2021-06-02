import React from 'react';
import { data } from '../../../data';

// Using arrays in useState

const UseStateArray = () => {
  
  

  const [people , setPeople] = React.useState(data);


  const removeItem = (id) => {
    return setPeople ((oldPeople) => {
     return oldPeople.filter((person) => person.id !== id)
      
    }) // Using functional updates --> Passing the main changed value to hook as a callback return.
  }


  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key = {id} className = 'item'>
            <h4>{name}</h4>
            <button className = "btn"  onClick = {() => {removeItem(id)}}>Remove item</button>
          </div>
        )
      })} 

      
      {/* Setting filtered array as the new arguement to the state.*/}
      <button className ='btn' onClick = {() => {setPeople([])}}>
        Clear Items
      </button>
    </>
  )
  
  //return <h2>useState array example</h2>;
};

export default UseStateArray;
