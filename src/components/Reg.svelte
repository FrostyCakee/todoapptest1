<script>
    import {supabase} from "../supabase.js";
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';

    async function handleReg() {
      console.log("reg", email, password);
      const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    //if(error)
      if (data) {
        console.log("reg ok", data);
        goto("/todo")
      } else {
        console.log("reg err ", error);
      }
    }
    
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Register form</h1>

<form on:submit|preventDefault={handleReg}>
        <div class="flex flex-col text-sm mb-2">
            <label class="font-bold mb-2 text-grey-800" for="email">Email</label>
            <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" name="email" type="email" placeholder="Your email" bind:value={email} required />
        </div>
        <div class="flex flex-col text-sm mb-2">
            <label class="font-bold mb-2 text-grey-800" for="password">Password</label>
            <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" name="password" type="password" placeholder="Your password" bind:value={password} required />
        </div>

        <div class="flex flex-col items-center">
        <button type="submit" class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Register
        </button>
        </div>
</form>