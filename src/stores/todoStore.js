import { writable } from 'svelte/store';
import { supabase } from "../supabase.js";
export const todos = writable([]);

export const name = writable('Svelte');

export const loadTodos = async () => {
   const {data, error} = await supabase.from('todos').select();

   if(error){
    return console.error(error);
   }
   todos.set(data);
}

export const addTodo = async (text, description, user_id) => {
   const {data, error} = await supabase.from('todos').insert([{text, description, completed: false, user_id}])

   if(error){
    return console.error(error);
   } else {
    loadTodos();
   }

    console.log(data);
    // todos.update((cur) => [...cur, data[0]]);
    
};

export const deleteTodo = async (id) => {
    const {error} = await supabase.from('todos').delete().match({id});

    if(error){
        return console.error(error);
       } else {
        loadTodos();
       }
//     todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
        const {error} = await supabase.from('todos').update({completed: !currentState}).match({id});
    
        if(error){
            return console.error(error);
        }else {
            loadTodos();
           }
    
}