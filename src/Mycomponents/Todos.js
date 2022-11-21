import React from 'react'
import { TodoItem } from './TodoItem';


export const Todos = (props) => {
    return (
        <div className='container my-3'>
            <h3 className=' my-3'>Todo List </h3>
            {props.todos.length == 0 ? "No Todos to display" :

                props.todos.map((todo1) => {
                    return (

                        <TodoItem todo={todo1} key={todo1.sno} onDelete={props.onDelete} />


                    )

                })

            }

        </div>
    )
}
