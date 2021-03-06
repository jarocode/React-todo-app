import React, {useState, useContext} from 'react';
import Todo from './Todo';
import {TodoContext} from '../TodoContext'

const Todostate = () => {
    const {todos, inputText} = useContext(TodoContext);
    const [todosValue, setTodosValue] = todos;
    
    const handleComplete = (index) => {
        const newTodo = [...todosValue];
        newTodo[index].completed = !newTodo[index].completed;
        setTodosValue(newTodo);
    }
    
    
    const handleRemove = async (index, id) => {
        await fetch(`/addTodo/${id}`, {
            method: 'DELETE'
        });
        
        const newTodo = [...todosValue];
        newTodo.splice(index, 1);
        setTodosValue(newTodo);
    }
    
    return ( 
        <div>
            {todosValue.map((todo, index) => (
                <Todo 
                todo={todo.todo} 
                completed={todo.completed} 
                key={todo._id}
                ind = {todo._id}
                index={index}
                handleComplete={handleComplete}
                handleRemove = {handleRemove}
                />
            ))}
        </div>
     );
}
 
export default Todostate;