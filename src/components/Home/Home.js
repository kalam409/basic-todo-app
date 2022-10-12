import React, { useState } from 'react';
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
const dumyTodos = ['todo1', 'todo2'];
const Home = () => {
    const [todos, setTodos] = useState(dumyTodos);
    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    };
    return (
        <div>
            <NewTodo onTodo ={handleNewTodo}/>
            <Todos todos={todos}/>
        </div>
    );
};

export default Home;