<script>
	import { deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
    export let todo;
    
</script>

<li class="bg-white flex flex-col shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <div class="flex items-center">
        <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id, todo.completed)}
        class="mr-2 form-checkbox h-5 w-5"/>

        
        <span class={`flex-1 text-gray-800 font-bold ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
        <span class={`flex-1 text-gray-800`}>{todo.due_date}</span>
        <button
        type="button"
        class="text-sm bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        on:click={() => deleteTodo(todo.id)}>Delete</button>
        

        <div><span class={`flex-1 text-gray-500 ml-4`}>Id: {todo.id}</span></div>
    </div>
    <div>
        <span class={`flex-1 text-gray-500 ml-7`}>{todo.description}</span>
    </div>    

</li>