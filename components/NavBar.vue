<template>
    <div class=" grid grid-cols-12 mx-auto ">
        
        <NuxtLink class="col-span-2" to="/">
            <img class=" h-12 px-2 my-2 rounded-md" src="@/assets/MovieDB.jpg" alt="IMDB Logo"/>
        </NuxtLink>
        <div class="col-span-2 col-start-3 my-5 text-xl">Hi, {{ user }}</div>
        
        <div class="flex col-end-9 col-span-2 my-4 pl-3">
            <!-- <input class="h-9 rounded-l-full bg-slate-700 text-end text-neutral-100 " type="text" name="" id="" placeholder="" /> -->
            <UISearchInput label="" placeholder="Search a movie" v-model="data.param"/>
            <!-- <button class="bg-slate-600 rounded-r-full px-2 text-neutral-100" @click="searchMovie">Search</button> -->
            <UISearchButton class="ml-2" @click="searchMovie" liquid :disabled="isButtonDisabled">
                Search
            </UISearchButton>
        </div>
        <button class=" col-start-12  w-20 my-6 mr-1 flex justify-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 font-sm" @click="logout">Logout</button>
    </div>
</template>

<script setup>
    const {loginUserName} = useAuth()
    const user = loginUserName()

    const data = reactive({
    param: ''
    })



async function searchMovie() {

    const {getMovies} = useMovie()
    // alert(JSON.stringify(param))
    try {
        await getMovies({
            param: data.param
        })
        // navigateTo('/movie')
    }
    catch(error) {
        console.log(error)
    }
    const isButtonDisabled = computed(() => {
    return (!data.username || !data.password)
    })
}

function logout() {
    user.value = null;     
    navigateTo('/')   
}
</script>
