import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  

  const [person , setPerson] = useState({}) // passing an empty object.
  const [people, setPeople] = useState([]);


  const handleChange = (e) => {
    const attribute = e.target.name;
    const value = e.target.value;

    setPerson({...person, [attribute] : value}); // dynamic object properties.
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    

    if(person.firstName && person.age && person.email )
    {
      person.id = new Date().getTime().toString();
      setPeople([...people, person]);
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
             
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
            
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
             
              onChange={handleChange}
            />
          </div>

          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
