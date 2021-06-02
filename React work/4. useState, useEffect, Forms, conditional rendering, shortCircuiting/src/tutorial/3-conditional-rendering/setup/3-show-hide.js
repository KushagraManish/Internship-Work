import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow]  = useState(false);
  
  let btnText = show ? 'Hide' : 'Show'
  

  return ( 
  <>  
    <button className = "btn" onClick = {() => setShow(!show)}>
      
      {btnText}

    </button>
    {show && <Item/>} {/*toggling with &&  */}


  </>
    
    )
};

const Item = () =>{

  const [size , setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return ()=> {
      window.removeEventListener('resize', checkSize);

    };
  }, []);
  



  return (
    <div style = {{marginTop : '2rem'}}>
      <h1>Window </h1>
      <h2>Size : {size}</h2>
    </div>
  )
}

export default ShowHide;
