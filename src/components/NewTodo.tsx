/** @format */

import { FC, FormEvent, useRef } from 'react';
import './NewTodo.css';

interface INewTodoProp {
	addTodo: (text: string) => void;
}
const NewTodo: FC<INewTodoProp> = ({ addTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const enteredInputRef = textInputRef.current!.value;
		// console.log('text : ', enteredInputRef);
		if (!!enteredInputRef) {
			addTodo(enteredInputRef);
		} else {
			alert('Field empty');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='todo-text'>Enter task</label>
					<input type='text' id='todo-text' ref={textInputRef} required />
				</div>
				<div>
					<button type='submit'>Add</button>
				</div>
			</form>
		</div>
	);
};
export default NewTodo;
