import React, { useState } from 'react';

// useState returns an array. --> [default args , function]









const UseStateBasics = () => {


  const [text, setText] = useState('Random Text'); // returns text, setText function.
  // Basic useState example.

  const handleClick = () =>
  {
    setText(text === 'Random Text' ? 'Hello World' : 'Random Text')
  }

  return(
    <React.Fragment> 
      <h2>{text}</h2>
      <button className ="btn" type = "button" onClick = {handleClick}>Change Title</button>
    </React.Fragment>
  );

};

export default UseStateBasics;

// Hooks rules.

// --> use keyword
// --> component mmust be uppercase
// --> must be in component body
// --> cannot call conditionally.

