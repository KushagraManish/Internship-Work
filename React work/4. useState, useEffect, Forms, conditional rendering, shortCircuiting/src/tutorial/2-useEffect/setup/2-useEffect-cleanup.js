import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // Use state to get the width of the window..

  const [size, setSize] = useState(window.innerWidth); // TRIGGERS RE RENDER

  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
      window.addEventListener('resize', checkSize); // Adds event listener for each resize --> problem!
      // solution : remove event listener once our work is done --> cleanup function

      return (() => {
        console.log('Clean up function.')
        window.removeEventListener('resize', checkSize); // remove the event listener after use. --> prevent data leak.
      })

      // Functional flow --> resize --> checkSize --> useState --> triggers rerender --> cleanup function --> triggers re render. 

  })

  return (
    <>
      <h1>Width</h1>
      <h2>{size}px</h2>
      
     


    </>
  );
};

export default UseEffectCleanup;
