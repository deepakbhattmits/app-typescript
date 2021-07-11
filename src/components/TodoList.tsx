/** @format */

import { FC } from 'react';
import './TodoList.css';
interface ITodoListProp {
	items: { id: string; text: string }[];
	removeHandler: (id: string) => void;
}
const TodoList: FC<ITodoListProp> = ({ items, removeHandler }) => {
	return (
		<ul>
			{items.map((el) => (
				<li key={el.id}>
					{el.text}
					<button onClick={() => removeHandler(el.id)}>Delete Todo</button>
				</li>
			))}
		</ul>
	);
};
export default TodoList;
