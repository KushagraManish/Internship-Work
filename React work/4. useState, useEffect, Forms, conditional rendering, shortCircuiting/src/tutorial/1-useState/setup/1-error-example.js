import React from 'react';

let title = "random title"

const handleClick =() => {
  title = "hello people"
  console.log(title)
};



const ErrorExample = () => {
    let title = 'random title'

  return (<React.Fragment>
  

   <h2>{title}</h2>; {/*not re-rendered --> need useState*/}
   <button onClick = {handleClick} type = "button" className = 'btn'>Change Title</button>

  </React.Fragment>)
};

export default ErrorExample;
