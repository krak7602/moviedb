<template>
    <div class="flex h-screen">
        <div class="relative flex-1 w-0 lg-block">
            <img class="absolute inset-0 object-cover w-full h-full" src="@/assets/movieadd.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
                <div>
                    <div class="pt-5 space-y-6">
                        <UIInput label="Movie Name" placeholder="e.g., Titanic" />
                        <UIInput label="Rating" placeholder="e.g., 8.5" />
                        <UIInput label="Synopsis" class="" placeholder="e.g., Lorem Epsum" />
                        <UIInput label="Producer" placeholder="e.g., Jerry Bruckheimer" />
                        <UIInput label="Director" placeholder="e.g., Steven Spielberg" />
                        <UIInput label="Stars" placeholder="e.g., Tom Cruise, Sandra Bullock" />
                        <UIInput label="Genres" placeholder="e.g., Action, Drama" />
                        <!-- <input type="file" ref="imageInput" hidden accept="image/png, image/gif, image/jpeg"> -->
                        <UIInput label="Movie Image" type="file"/>
                        <UIButton  liquid >
                            Add Movie
                        </UIButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
