import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todoApp.todos);
    const dispatch = useDispatch();

    return (
        <ul className="w-full max-w-md">
            {todos && todos.map(todo => (
                <li key={todo.id} className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                        className="h-5 w-5"
                    />
                    <div className="flex-grow text-sm">
                        <div className={`font-bold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</div>
                        <div className={`${todo.completed ? 'line-through text-gray-500 text-xs' : 'text-gray-500 text-xs'}`}>{todo.description}</div>
                    </div>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                        Delete
                    </button>
                </li>

            ))}
        </ul>
    );
}

export default TodoList;
