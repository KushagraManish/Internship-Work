import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

 const [text, setText] = useState('');
 const [isError, setIsError] =  useState(false); 
  // const firstValue = text || 'hello world'; // returns first val if true, second if false.
  // const secondValue = text && 'hello world'; // returns second value if true, first value if false.

  const toggleError =() => { setIsError(!isError);}
  return (
    <>
      <h1> {text || 'john doe'}</h1>
      <button className = 'btn' onClick = {() => toggleError()}>Toggle Error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error</p> : <p>There is no error</p>}
    </>
  )
};

export default ShortCircuit;
