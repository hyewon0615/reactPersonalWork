import './Listcard.css'

function Listcard({ todo, setTodo }) {
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
    return (<div>
        <h2>🔥 working 🔥</h2>
        <div className='List'>
            {
                todo
                    .filter((item) => {
                        return item.isDone === false
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
                                    <button onClick={() => (removeListBtnEvent(item.id))}>삭제</button>
                                    <button onClick={() => (changeDoneState(item.id))}>완료</button>
                                </div>

                            </div>)
                    })
            }
        </div>
        <h2>✨ Done ✨</h2>
        <div className='List'>
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
                                <button onClick={() => (removeListBtnEvent(item.id))}>삭제</button>
                                <button onClick={() => (changeDoneState(item.id))}>취소</button>
                            </div>

                        </div>)
                })
        }
    </div>

    </div>


    )
}

export default Listcard