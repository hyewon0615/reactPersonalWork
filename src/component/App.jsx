import React from 'react'
import './App.css';
import { useState } from 'react';
import Listcard from './Listcard';
import Input from './Input'


function App() {
  const [todo, setTodo] = useState([])

  return (
    <div className='container'>
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Input todo={todo} setTodo= {setTodo}/>
      <Listcard todo={todo} setTodo={setTodo}/> 
    </div>
  )
}
// 컴포넌트를 분리할 때 1번부터 2번까지 하나로 하는 게

export default App