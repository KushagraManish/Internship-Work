import React from 'react'
import ReactDom from 'react-dom'

// Nested components, react tools.


const Greeting = () =>{
  return ( 
    <div>
      <Person />
      <Message />
    </div>
  );
}

// Two child components of the div.

const Person = () => <h1>Person Component</h1>
const Message = () => <p>This is a message</p>

ReactDom.render(<Greeting /> , document.getElementById('root'))
// Render.


