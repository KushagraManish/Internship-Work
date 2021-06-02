// v1 : Simple dom


// import React from 'react'
// import ReactDom from 'react-dom'

// // Amazon best selling books app with react.

// // // Simple basic concepts.

// // // 3 Components : Image, Title , Author --> Refactor. 


// // const Image = () => <img src = "https://images-eu.ssl-images-amazon.com/images/I/814zov0PvQL._AC_UL200_SR200,200_.jpg" alt = "Some test"/>
// // const Title = () => {
// //   return <h3>Some book</h3>
// // }

// // const Author = () => {
// //   return <p>Author</p>
// // }

// // /// Making the book component combining other components.

// // const Book = () =>{ 
// //   return (
// //     <article>
// //       <Image></Image>
// //       <Title />
// //       <Author/>
// //     </article>
// //   );

  
// // }


// // //// Making the final book list.
// // const BookList = () => {
// //   return (
// //     <section>
// //         <Book />
// //         <Book />
// //         <Book />
// //         <Book />
// //         <Book />
// //     </section>
// //   )
// // }

// // ReactDom.render(<BookList />, document.getElementById('root'))


// // v2 : Adding CSS to React Projects. 


// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'
// // Amazon best selling books app with react.

// // Simple basic concepts.

// // 3 Components : Image, Title , Author --> Refactor. 


// const Image = () => <img src = "https://images-eu.ssl-images-amazon.com/images/I/814zov0PvQL._AC_UL200_SR200,200_.jpg" alt = "Some test"/>
// const Title = () => {
//   return <h3>Some book</h3>
// }

// const Author = () => {
//   return <p>Author</p>
// }

// /// Making the book component combining other components.

// const Book = () =>{ 
//   return (
//     <article className = "book">
//       <Image></Image>
//       <Title />
//       <Author/>
//     </article>
//   );

  
// }


// //// Making the final book list.
// const BookList = () => {
//   return (
//     <section className = 'booklist'>
//         <Book />
//         <Book />
//         <Book />
//         <Book />
//         <Book />
//     </section>
//   )
// }

// ReactDom.render(<BookList />, document.getElementById('root'))

// // v3 : Adding jsx css

// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'
// // Amazon best selling books app with react.

// // Simple basic concepts.

// // 3 Components : Image, Title , Author --> Refactor. 

// // Using JS with JSX --> Way more dynamic --> Less hard coding.

// //JS Vars.

// const img = "https://images-eu.ssl-images-amazon.com/images/I/814zov0PvQL._AC_UL200_SR200,200_.jpg"
// const title = 'Book Title'
// const author = 'Kushagra Manish'



// // JSX React Components.

// const Image = () => <img src = {img} alt = "Some test"/>


// const Title = () => {
//   return <h3>{title}</h3> // Displaying using JS.
// }



// const Author = () => {
//   return <p /*style = {{color : 'black' , fontSize : '0.75rem' , marginTop : '0.25rem' }} */>{author}</p> /// JSX CSS --> Sets CSS from the JS Object.

//   // Inline css > CSS Files.  --> BE CAREFUL. 

//   /// Libraries add CSS Properties inline.


// }

// /// Making the book component combining other components.

// const Book = () =>{ 
//   return (
//     <article className = "book">
//       <Image></Image>
//       <Title />
//       <Author/>
//     </article>
//   );

  
// }


// //// Making the final book list.
// const BookList = () => {
//   return (
//     <section className = 'booklist'>
//         <Book />
        
//     </section>
//   )
// }

// ReactDom.render(<BookList />, document.getElementById('root'))






// v4: Adding props : Better code quality.



import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {books} from './books.js'

// Amazon best selling books app with react.

// Simple basic concepts.

// 3 Components : Image, Title , Author --> Refactor. 

// Using JS with JSX --> Way more dynamic --> Less hard coding.

//JS Vars.

// // const img = "https://images-eu.ssl-images-amazon.com/images/I/814zov0PvQL._AC_UL200_SR200,200_.jpg"
// // const title = 'Book Title'
// // const author = 'Kushagra Manish'

// // Refactoring variables as an object.


// // Need to add unique prop keys. --> To keep track of all CRUD done in application.


// // JSX React Components.

// const Image = (props) => <img src = {props.url} alt = "Some test"/> // Props arrow function syntax.


// const Title = (props) => {
//   return <h3>{props.titl}</h3> // Displaying using JS. --> Props usage.
// }



// const Author = (props) => {
//   return <p className = 'author'/*style = {{color : 'black' , fontSize : '0.75rem' , marginTop : '0.25rem' }} */>{props.autho}</p> /// JSX CSS --> Sets CSS from the JS Object.

//   // Inline css > CSS Files.  --> BE CAREFUL. 

//   /// Libraries add CSS Properties inline.


// }

/// Making the book component combining other components.
/// Using the book object.
import Book from './book.js'


//// Making the final book list.
const BookList = (props) => {
  return (
    // Final rendering each object from the book array and passing it as return value to the individual book component.
    // BookArray --> {Array Object} --> Passed to map --> returns an array of Book components with attributes of each array item ==> 
    // ==> Rendered by react finally. 

    <section className = 'booklist'>
        {props.bookArray.map((book) =>  <Book book = {book} key = {book.id}></Book>)} 

{/* CAN USE ...operator to do implicit destructuring */}


       
        
    </section>
  )
}

ReactDom.render(<BookList bookArray = {books}/>, document.getElementById('root')) 
// Passing the bookArray as object
// attribute to bookList
// prop.


// Events in react.

// clickHandler = () => title;

// <button onClick = () => clickHandler(title)) ></button> --> Only executes when the button is clicked.

// <button onMouseOver = () => clickHandler(author))></button> --> Only executes on mouse hover.

// Need callbacks to ensure CLICK HANDLER executed only when the event is fired.

