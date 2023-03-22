
<template>
    <div class="flex">
        <!-- <NuxtLink to="/movie/1">    -->
        <div class="m-2" >
            <!-- <img class=" h-52 w-36 rounded-t-xl" src="@/assets/avatar.jpg" alt="Movie Image" /> -->

            <img class=" h-52 w-36 rounded-t-xl" :src="movieID" :alt="id" />
            <!-- :src="'@/assets/avatar.jpg'" -->
            <div class="bg-slate-400 rounded-b-xl pb-2 pl-2">
                <div>{{ props.name }} ({{ props.rating }})</div>
            </div>
        </div>
        <!-- </NuxtLink> -->
        <!-- <div class="m-2">
            <img class=" h-52 w-36 rounded-t-xl" src="@/assets/avatar.jpg" alt="Movie Image" />
            <div class="bg-slate-400 rounded-b-xl pb-2 pl-2">
                <div>Name</div>
                <div>Rating</div>
            </div>
            
        </div> -->
        
        
    </div>
    
</template>

<script setup>

// const cloudinary = require('cloudinary').v2;
// :src="`${yourPrefix}/my-image.png`"

// // Configuration 
// cloudinary.config({
//   cloud_name: "dxcrd8trz",
//   api_key: "227156862883393",
//   api_secret: "chiMJbDn5j2ta14vpOVraqTftX0"
// });

const movieID = computed(() => {
    return ("/"+props.id+".png")
})

// const image = require('../assets/1.png')
const props = defineProps(['name', 'rating', 'id'])

// const moviePath = computed(()=> {
//     return '/'+id
// })


// function moviePath(id) {
//     console.log('@/assets/'+id+'.jpg')
//     Image()
//     return Image('@/assets/'+id+'.jpg')
// }
// function getID() {
//     const value  = '/'+props.id
//     console.log(value)
//     return value
// }
</script>