<template>
    <div v-if="user" class="min-h-full">
        <div>
            <div>
                <NavBar />
            </div>
            <div class="flex">
                <div v-for="movie in movies" @click="gotoMovie(movie.id)">
                    <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                        <MovieCard :name="movie.name" :rating="movie.rating" :id="movie.id"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AuthPage v-else />
</template>

<script setup>

    const {loginUserName} = useAuth()
    const user = loginUserName()


    // const searchKey = reactive({
    //     value: ''
    // })

    // async function movieLoad () {
    //     const movieData = await $fetch('/api/movies/search', {
    //         method: 'POST',
    //         body: {
    //             param: searchKey.value
    //         }
    //     })

    //     alert(JSON.stringify(movieData))
    // }

    // onBeforeMount(() => {
    //     movieLoad() 
    // })

    // const movieData = computed(async () => {
    //     const dat = await $fetch('/api/movies/search', {
    //         method: 'POST',
    //         body: {
    //             param: searchKey.value
    //         }
    //     })
    //     return dat.response
    // })

    const {movieList} = useMovie()
    const movies = movieList()

    function gotoMovie(id) {
        navigateTo({
            path: `/movie/${id}`
        })
    }
 

</script>
