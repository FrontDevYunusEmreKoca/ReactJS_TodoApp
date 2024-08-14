import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div>
            <li className='TodoItemLiPrp'>{props.customer} <button  onClick={() => props.deleteItem(props.customer)} className='btn btn-danger   TodoItemLiPrpBtn  '><i class="fa-solid fa-trash float-end"></i></button></li>
        </div>
    )
}
export default TodoItem;