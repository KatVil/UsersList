import './App.css';
import {Header} from './components/Header/Header'
import {Userlist} from './components/Userlist/Userlist'
import {useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const add = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUsers(prev => [...prev, ...json]));
  };

  return (
    <>
      <Header add={add} />
      <Userlist users={users} />
    </>
  );
}

export default App;
