<script>
    import {supabase} from "../supabase.js";
    import { goto } from '$app/navigation';
  

    // let loading = false;
    let email = '';
    let password = '';

    // const handleLogin = async () => {
    //     try {
    //     loading = true;
    //     console.log(email);
    //     const {error} = await supabase.auth.signInWithOtp({email});

    //     if(error) throw error;
    //     alert('Check your email for the login link!')
    //     }catch(error){
    //         console.error(error)
    //         alert(error.error_description || error.message)
    //     }finally {
    //         loading = false;
    //     }
    // }

    async function handleLogin() {
      console.log("auth", email, password);
      const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  
      if (data) {
        console.log("auth ok", data);
        goto("/todo")
      } else {
        console.log("auth err ", error);
      }
    }
    
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via your email & password.</p>

<form on:submit|preventDefault={handleLogin}>
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
        Log In
    </button>
    </div>
</form>