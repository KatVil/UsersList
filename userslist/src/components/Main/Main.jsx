import {useState, useEffect} from 'react';
import React from 'react';
import {Header} from '../Header/Header'
import { Userlist } from '../Userlist/Userlist';

export const Main =() => {
    const [addUsers, setAddUsers] = useState(10);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((result) => result.map(user=>{user.id = user.id + addUsers
          return user}))
          .then((result) => setUsers(prev => [...prev, ...result]))
      }, [addUsers]);
    return (
        <>
        <Header setAddUsers={setAddUsers} />
            <Userlist users={users}
        addUsers={addUsers} /></>

        
    );
}
