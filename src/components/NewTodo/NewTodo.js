import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState();
    const handleChange = (event) => {
        setTodo(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTodo(todo);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo : </label>
                <input type="text" name="" id="" value={todo} onChange={handleChange}/>
                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;