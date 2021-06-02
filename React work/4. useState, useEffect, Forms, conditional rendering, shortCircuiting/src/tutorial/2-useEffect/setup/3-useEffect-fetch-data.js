import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users)
    setUsers(users);
  }

  useEffect( () => {
    getUsers();
    
  }, []) // To avoid infinite loop since setUsers 
  // would be called on each render and cause rerender.

  
      
  return(
    <>

      <h2>Github Users</h2>
      <ul className = "users">
        {users.map((user) => {
          const {id, login , avatar_url,html_url} = user;

          return (
            <li key = {id}>
              <img src = {avatar_url} alt = "User"></img>
              <div>
                <h4>{login}</h4>
                <a href = {html_url}>Profile</a>
              </div>
            </li>
          )

        })}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
