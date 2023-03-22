<template>
    <div class="flex h-screen">
        <div class="relative flex-1 w-0 lg-block">
            <img class="absolute inset-0 object-cover w-full h-full" src="@/assets/admin.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
                <div>
                    <div class="pt-5 space-y-6">
                        <UIInput label="Admin Username" placeholder="username" />
                        <UIInput label="Password" placeholder="********"  type="password"/>
                        <UIButton  liquid >
                            Login
                        </UIButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
