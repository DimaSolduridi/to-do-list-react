import { TodoItem } from "./TodoItem"
export function TodoList(props){
    return(
        <ul className="list">
            {props.todos.length === 0 && <li>No items to show</li>}
            {props.todos.map(todo => {
            return(
                <TodoItem 
                {...todo}
                key={todo.id}
                toggleTodo={props.toggleTodo}
                deleteTodo={props.deleteTodo}
                />
            )
            })}
          
        </ul>
    )
}