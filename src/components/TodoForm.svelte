<script>
    import {addTodo} from "../stores/todoStore.js";
	import { supabase } from "../supabase.js";
    let todo = '';
    let description = '';
    const handleSubmit = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) console.alert("no add ", error)
        else {
            addTodo(todo, description, data.user.id);
            todo = '';
            description = '';
            console.log("submitting");
        }
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-gray-800" for ="todo">Your ToDos</label>
        <input type="text" bind:value={todo} name="todo" placeholder="What needs to be done?" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg mb-2"/>
        <input type="text" bind:value={description} name="description" placeholder="Description?" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"/>
    </div>
    <button type="submit" claSS="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
</form>