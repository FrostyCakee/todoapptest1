<script>
    import {goto} from '$app/navigation';
</script>

<div class="my-4 flex justify-end">
    <button 
        on:click={() => {
            goto("/login")
        }}
        type="submit" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Log In
    </button>

    <button 
        on:click={() => {
            goto("/registration")
        }}
        type="submit" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Register
    </button>
</div>