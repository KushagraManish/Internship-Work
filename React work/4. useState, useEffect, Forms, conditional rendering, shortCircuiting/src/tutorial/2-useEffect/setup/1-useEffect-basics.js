import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter : Used to make useEffect fire only on dependency change --> Pass an array of dependencies.
// Empty second params : Fire only once after intital render.

// Change title with useEffect.
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Component rendered.')
    if(value > 1)
    {
      document.title = (`New Messages (${value})`)
    }
  }, [value]) //--> Fires on value change

  useEffect(() => console.log('Hello, init render.'), []) // Runs on initial render only.

  
  console.log('Hello, Console!') // Will render 2 times for each render due to strict mode.

  return (
    <>  
      <h1>{value}</h1>
      <button className ='btn' onClick = {()=>setValue((prevVal)=>prevVal+1)}>Click Me!</button> {/*Functional updates used to increment*/}
    </>
  )
};

export default UseEffectBasics;
