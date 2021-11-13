/** @format */

export interface ITodo {
	id: string;
	text: string;
}
export interface INewTodoProp {
	addTodo: (text: string) => void
  }