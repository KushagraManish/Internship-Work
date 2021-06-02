import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && firstName)
    {
      let person = {id : new Date().getTime().toString() , email, firstName}; // Add object attributes directly.

      setPeople(() => {
        return [...people, person]; // --> Using spread operator to destructure the array.
      })

      setFirstName('');
      setEmail('');

    }
  }
  
  
  
  return(
    <>
      <article>
        <form className = "form" onSubmit={handleSubmit}>
          <div className = 'form-control'>
            <label htmlFor= 'firstName'>Name  :</label>
            <input type = 'text' id = 'firstName' name = 'firstName'
              value = {firstName}
              onChange = {(e) => setFirstName(e.target.value)} 
            />

          </div>

          <div className = 'form-control'>
            <label htmlFor= 'email'>Email  :</label>
            <input type = 'text' id ='email' name = 'email' 
              value = {email}
              onChange = {(e) => setEmail(e.target.value)} 
            />
           
            
          </div>

          <button className="btn">Add Person</button>
        </form>

         {people.map((person) => {

              const {firstName, id, email} = person;

              return (
                <>
                  <div className= "item" key = {id}>
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                  </div>
                </>
              )
            })}
      </article>
    </>
  )
};

export default ControlledInputs;
