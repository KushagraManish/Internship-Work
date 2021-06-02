import React, { useState } from 'react';

const UseStateCounter = () => {
  

  const [num , setNum] = useState(0);
  // setting up the number initally. 

  const setValue = (value) => {setNum(value >= 0 ? value : 0);}
  const increaseDelay = () => {
    return setTimeout(() => {
      setNum(
        // This arrow function automatically gets the old state value from the hooks.
        (prevState)=> {
        return prevState+1; // Passing another arrow function as callback
      })
    }, 2000) //To counter synchronus nature --> Increase should not wait for setTimeOut to execute. 
            //        --> Variable should change in background.

    // Old execution --> for each click--> execute timeout for 2000 --> increment 
    // New execution --> execute timeout for 2000 for one time --> increment the number of clicks.
  }
  return (
    <>  
      <section style = {{margin : '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{num}</h1>
        
        <button className = 'btn' onClick = {() => setValue(num-1)}>Decrease</button>
        <button className = 'btn' onClick = {() => setValue(0)}>Reset</button>
        <button className = 'btn'onClick = {() => setValue(num + 1)}>Increase</button>
        <button className = 'btn'onClick = {() => increaseDelay()}>Increase with delay</button>
      </section>
    </>
  );
};

export default UseStateCounter;
