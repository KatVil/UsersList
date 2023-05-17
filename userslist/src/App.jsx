import './App.css';
import {Header} from './components/Header/Header'
import {Userlist} from './components/Userlist/Userlist'
import {useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [addUsers, setAddUsers] = useState(10);

  useEffect(() => {
    fetch("'https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => result.map(user=>{user.id = user.id + addUsers
      return user}))
      .then((result) => setUsers(prev => [...prev, ...result]))
  }, [addUsers]);



  return (
    <>
      <Header setAddUsers={setAddUsers} />
      <Userlist users={users}
        addUsers={addUsers} />
    </>
  );
}

export default App;
