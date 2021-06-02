// Remove all the boiierplate to start clean.


// create first component.

import { react } from '@babel/types'
import React from 'react' // es6 module import
import ReactDom from 'react-dom'

// Capitalize the function to create a component.
// This is a component.

// stateless functional component.
// always return jsx.

// const Greeting  = () => {
//   // return html {JSX} from a react component.
//   // similar to Jinja templates and Django.
//   // two methods

//   // //1. return html.
//   return <h2>DD</h2>

//   // 2. Using states and props.

//   // return React.createElement('h1', {}, ' Helllo world' )

//   // Gets messy for nested html elements.

//   // return (React.createElement('div', 
//   // {}, 
//   // (React.createElement('h1' , {} , 'Nested html.'))))


//   // Returning html --> more readable.
// }

const render = () =>
{
  ReactDom.render(<Greeting/>, document.getElementById('root'))
}


// Inject it into div with id root. 
// Using reactdom to render it and add to the div root.



// Self closing tag needed.

// JSX Rules. {It does.}

// 1. Always return a single element --> single element can contain
// more than one elements. --> cant return adjacent els.

// 2. Use JSX Fragments instead. 

 const Greeting  = () => {
//  // Using JSX Fragements.

 return <React.Fragment>
   <div>Hello</div>
   <div>World</div>
 </React.Fragment>
}

render();

// 3. JSX Attributes use camelcase {etc : 'className' for class in the html el.s}

// Use paranthesis to return elements.

// All elemenrts need closing tag in jsx.


