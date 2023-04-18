<script>
    import { supabase } from "../supabase.js";
    import "../app.css";
	import Auth from "../components/Auth.svelte";
    //import { user } from "../stores/authStore.js";
	import { loadTodos } from "../stores/todoStore.js";
	import Navbar from "../components/Navbar.svelte";
	import Reg from "../components/Reg.svelte";
	import Navbar1 from "../components/Navbar1.svelte";

	let user;

    supabase.auth.onAuthStateChange((_, session) => {
        user = session?.user;
        if(session?.user){
            loadTodos();
        }
    })
    
    async function loadUser() {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
        console.error(error);
        } else {
        user = data;
        }
    }

    loadUser();
</script>

<div class="container mx-auto my-6 max-w-lg">
    {#if user}
	    <Navbar/>
        <slot></slot>
    {:else}
        <Navbar1/>
        <slot></slot>
        <!-- <Auth/>
        <Reg/> -->
	{/if}
</div>