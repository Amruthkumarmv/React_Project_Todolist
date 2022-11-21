import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    let todoStyle = {
        background: "skyblue",


        // border: "2px solid red"
    }
    return (
        <>
            <div className="mb-5 py-3 px-3 mx-5 my-5 rounded" style={todoStyle}>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className='btn btn-sm btn-dark' onClick={() => { onDelete(todo) }} >Delete</button>

            </div>
            <hr />
        </>
    )
}
