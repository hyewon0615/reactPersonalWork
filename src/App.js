import React from 'react'
import './App.css';
import { useState } from 'react';
import Listcard from './component/Listcard';
import Donelist from './component/Donelist';


function App() {
  const [todo, setTodo] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const contentHandler = (event) => { setContent(event.target.value) }
  const titleHandler = (event) => { setTitle(event.target.value) }



  const addListBtnEvent = (event) => {
    event.preventDefault()

    const warning = document.querySelector('.warning')
    const warning2 = document.querySelector('.warning2')

    if ((title === '' || content === '') && (title.length > 15 || content.length > 100)) {
      warning2.classList.add('colorChange')
      warning.classList.add('colorChange')

    } else if (title.length > 15 || content.length > 100) {
      warning.classList.remove('colorChange')
      warning2.classList.add('colorChange')

    } else if (title === '' || content === '') {
      warning2.classList.remove('colorChange')
      warning.classList.add('colorChange')
    } else {
      const newlist = {
        id: todo.length + 1,
        title: title,
        content,
        isDone: false
      };
      setTodo([...todo, newlist])
      setTitle('')
      setContent('')
      warning.classList.remove('colorChange')
      warning2.classList.remove('colorChange')
    }

  };

  const removeListBtnEvent = (id) => {
    const newTodo = todo.filter(to => to.id !== id)
    setTodo(newTodo)
  }

  const changeDoneState = (id) => {
    const changeTodo = todo.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: !item.isDone }
      } else {
        return item
      }

    })
    setTodo(changeTodo)
  }

  return (
    <div className='container'>

      <header>
        <h1>TO DO LIST</h1>

      </header>

      <form onSubmit={addListBtnEvent}>
        <div className='formInput'>
          <div>제목:<input
            className='title'
            value={title}
            onChange={titleHandler}
          /></div>

          <div>내용:<input
            className='content'
            value={content}
            onChange={contentHandler} /></div>
        </div>
        <div className='formBottom'>
          <div className='formP'>
            <p className='warning '>공란없이 입력해주세요</p>
            <p className='warning2 '>제목은 15자, 내용은 100자 이내로 작성해주세요. 현재 제목{title.length}자 내용{content.length}자</p>
          </div>
          <button >추가</button>
        </div>

      </form>
      <h2>🔥 working 🔥</h2>
      <Listcard
        todo={todo}
        removeBtn={removeListBtnEvent}
        changeBtn={changeDoneState} />
      <h2>✨ Done ✨</h2>
      <Donelist
        todo={todo}
        removeBtn={removeListBtnEvent}
        changeBtn={changeDoneState} />
        
        {/* 컴포넌트 나누고 보니까 Listcard랑Donelist같은 props를 받으니까 하나로 하는 게 낫지 않았을까 싶네.. */}



    </div>
  )
}



export default App