import React from 'react'
import './Listcard.css'

function Donelist({ todo, removeBtn, changeBtn }) {
    return (<div className='List'>
        {
            todo
                .filter((item) => {
                    return item.isDone === true
                })
                .map(function (item) {
                    return (
                        <div key={item.id} className='box'>
                            <div className='cardContent'>
                                <h2>{item.title}</h2>
                                <p className='contentP'>{item.content}</p>
                                <>{item.isDone}</>
                            </div>
                            <div className='cardBtn'>
                                <button onClick={() => (removeBtn(item.id))}>삭제</button>
                                <button onClick={() => (changeBtn(item.id))}>취소</button>
                            </div>

                        </div>)
                })
        }
    </div>)
}

export default Donelist