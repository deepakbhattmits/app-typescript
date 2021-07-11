/** @format */

import { FC, useState } from 'react';

// import { Router } from 'react-router-dom';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { ITodo } from './components/model/todo.model';
import './App.css';

const App: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	// const todos = [{ id: 't1', text: 'finish the course' }];
	const addTodoHandler = (text: string) => {
		const newTodo = { id: Math.random().toString(), text: text };
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};
	const removeHandler = (id: string) => {
		setTodos((prevTodos) => prevTodos.filter((el: ITodo) => el.id !== id));
	};
	return (
		<div className='App'>
			<NewTodo addTodo={addTodoHandler} />
			<TodoList items={todos} removeHandler={removeHandler} />
		</div>
	);
};

export default App;
