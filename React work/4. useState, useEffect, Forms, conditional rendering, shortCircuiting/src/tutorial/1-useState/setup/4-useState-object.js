import React, { useState } from 'react';

// Always use the spread operator when working with objects in react.




const UseStateObject = () => {

  const person = {
    name : 'SomeName',
    age : 25,
    message : 'This is my message.'
  }

  const [human, setHuman] = React.useState(person);
  // can also use three seperate hooks and states. 
  
  const changeMessage = () => {
    setHuman({ ...person, message : 'New Message'});
    // spread operator to extract the attributes,
    // and change the selected attribute. 
    console.log(person)
  };

  return (
    <>
      <h3>{human.name}</h3>
      <h3>{human.age}</h3>
      <h4>{human.message}</h4>

      <button className = 'btn' type = "button" onClick = {changeMessage}>
        Change Message
      </button>
    </>
  )
};

export default UseStateObject;
