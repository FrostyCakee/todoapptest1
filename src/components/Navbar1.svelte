<script>
    import {supabase} from "../supabase.js";
    import {goto} from '$app/navigation';
    const logout = () => {
        console.log("log out");
        supabase.auth.signOut();
    }
</script>

<div class="my-4 flex justify-end">
    <!-- <div class="flex flex-col items-center">
    <button href="/login" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Log In
    </button>
    <a href="/login">
        login
    </a>
    </div> -->

    <button 
    on:click={() => {
        // Hide form by unsetting query param new
        goto("/login")
    }}
type="submit" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
    Log In
</button>

<button 
on:click={() => {
    // Hide form by unsetting query param new
    goto("/registration")
}}
type="submit" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
Register
</button>

    <!-- <button
    class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
    on:click={logout}>
        Log Out
    </button> -->
</div>