<template>
    <div>
        <NavBar />
    </div>
    <div v-for="movie in movies">
        <div v-if="movie.id==$route.params.id">
            <div class="flex">
                <img class=" h-64 w-44 ml-10 rounded-xl" :src="movieID(movie.id)" :alt="movie.id" />
                <!-- :src="require(`../../assets/${movie.id}.jpg`)" -->
                <!-- src="@/assets/{{movie.id}}.jpg" -->
                <div class="pl-3">
                    <h1 class="text-4xl pb-1 pt-2">{{ movie.name }}</h1>
                    <h1 class="text-lg pb-2">Rating: {{ movie.rating }}</h1>
                    <h1 class="text-lg pb-2">Producer: {{ movie.producer }}</h1>
                    <h1 class="text-lg pb-2"> Director: {{ movie.director }}</h1>
                    <h1 class="text-lg pb-2">Stars: {{ movie.Stars }}</h1>
                    <h1 class="text-lg pb-2">Genres: {{ movie.genres }}</h1>
                </div>
            </div>
            <div class="pl-12 pt-4">
                <h1 class="text-3xl pb-2">Synopsis</h1>
                <h1>{{ movie.synopsis }}</h1>
            </div>
            <div class="pl-12 pt-4 flex">
                <h1 class="text-3xl pb-2">Reviews</h1>
                <UIReviewButton class="ml-6 w-40 " @click="listReviews($route.params.id)" liquid :disabled="isButtonDisabled">
                    Refresh Reviews
                </UIReviewButton>
                <UICreateRevButton class=" ml-6 w-40" @click="handleCreateReview($route.params.id)" liquid>
                    Create Review
                </UICreateRevButton>
            </div>
            <div class="m-8 ml-12">
                <UICreateRevinput v-model="data.content" />
            </div>
            <div v-for="review in reviews">
                <!-- <h1>{{ review.content }}</h1> -->
                <!-- <Review :content="review.content" /> -->
                <div class="p-5 ml-12 align-middle m-4 bg-slate-500 rounded-xl text-white ">
                    <div class="pb-2">{{ review.user_name }}</div>
                    <div class="text-xl" >{{ review.content }}</div>
                </div>
            </div> 
            
        </div>
    </div>
        <!-- <div v-if="review">
            
        </div>
         -->

    
    
</template>

<script setup>

    const {movieList} = useMovie()
    const {reviewList, createReview} = useReview()
    const {loginUsername} = useAuth()
    const movies = movieList()
    // const reviews = computed(()=>reviewList())
    const reviews = reviewList()
    // watch(reviews)
    const username = loginUsername()

    const data = reactive({
        content: ''
    })

    function movieID(id) {
        console.log('/'+id+'.png')
        return ("/"+id+".png")
    }

    async function listReviews(id) {
    try {
        
        const {getReviews} = useReview()
        await getReviews({
            movie_id:parseInt(id)
        })
    }
    catch(error) {
        console.log(error)
    }
    }

    async function handleCreateReview(id) {
        try {
            
            await createReview({
                content: data.content,
                user_name : username.value,
                movie_id:parseInt(id)
            })
            data.content = ''
            // navigateTo('/movie')
        }
        catch(error) {
            console.log(error)
        }
    }

//     function getImgUrl(pet) {
//     var images = require.context('@/assets/', false, /\.jpg$/)
//     return images('./' + pet + ".jpg")
//   }


</script>