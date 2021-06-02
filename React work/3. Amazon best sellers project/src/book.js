// REFACTORED

const Book = (prop) =>{ 
  
  const bookObj = prop.book
  // method 2 : img , title, author = prop [pass img, title and author as attribute to the prop.] --> DESTRUCTURING.

  console.log(bookObj)
  return (
    <article className = "book">
      
      
      <img src = {bookObj.img} alt = "Some test"/>
      <h3>{bookObj.title}</h3>
       <p className = 'author'/*style = {{color : 'black' , fontSize : '0.75rem' , marginTop : '0.25rem' }} */>{bookObj.author}</p>

    </article>

    //Props are passed as an object with attributes. --> props.attribute is passed in the arrow function {component}.
  );

  
}

export  default Book ; // DEFAULT EXPORT --> ANY NAME!