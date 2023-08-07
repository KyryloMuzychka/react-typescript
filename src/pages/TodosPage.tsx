import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<ITodo[]>(savedTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo
            }))
    }

    const removeHandler = (id: number) => {
        // const shouldRemove = window.confirm('Are you sure?') // or next line here is the same with previous declaration of 'confirm'
        const shouldRemove = confirm('Are you sure?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
        </React.Fragment>
    );
};