import TodoItem from "../TodoItemComponent/TodoItem";
import "./TodoList.css"


const TodoList = (props) => {
    return (
        <div>
            <ul className="TodoListUl">
               {
                props.customers.map((customer,index)=> <TodoItem deleteItem = {props.deleteItem} key = {index} customer= {customer} /> )
               }
            </ul>
        </div>
    )
}
export default TodoList;