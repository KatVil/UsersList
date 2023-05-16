import React from 'react';
import {Users} from '../Users/Users';

export const Userlist = ({users}) =>{
    return (
        <>
        <div className='card-container'>
            {users.map((user) => (
                <div key={user.id + Math.random()}>
                    <Users users={user} />
                </div>
            ))}
          </div>
      </>
    );
}
