import React, { useState } from 'react'
// import img from './OIP.jpg';


export const Addtodo = (props) => {
    let addTodoStyle = {
        background: "#FF6786",

    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3 px-5 py-3 rounded' style={addTodoStyle}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit} >

                <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-md btn-secondary">Add To-Do</button>
            </form>
        </div>
    )
}
