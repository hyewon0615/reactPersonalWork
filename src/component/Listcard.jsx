import './Listcard.css'

function Listcard({ todo, removeBtn, changeBtn }) {
    return (<div className='List'>
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
                                <button onClick={() => (removeBtn(item.id))}>삭제</button>
                                <button onClick={() => (changeBtn(item.id))}>완료</button>
                            </div>

                        </div>)
                })
        }
    </div>)
}

export default Listcard