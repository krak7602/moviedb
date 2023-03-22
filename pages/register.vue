<template>
    <div class="flex h-screen">
        <div class="relative flex-1 w-0 lg-block">
            <img class="absolute inset-0 object-cover w-full h-full" src="@/assets/register.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
                <div class="pt-5 space-y-6">
                    <UIInput label="Name" placeholder="eg. Dohn Joe" v-model="data.name"/>
                    <UIInput label="Email Address" placeholder="eg. dohnjoe@email.com" v-model="data.email"/>
                    <UIInput label="Username (should be unique)" placeholder="username" v-model="data.username"/>
                    <UIInput label="Password" placeholder="********"  type="password" v-model="data.password"/>
                    <UIInput label="Repeat Password" placeholder="********"  type="password" v-model="data.repeatPassword"/>
                    <UIButton @click="handleRegister" liquid >
                        Register
                    </UIButton>
                    <UIRegisterButton @click="navigateTo('/')" liquid >
                        Back To Login
                    </UIRegisterButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = reactive({
    name: '',
    email: '',
    username: '',
    password: '',
    repeatPassword: ''
})

async function handleRegister() {
    const {createUser} = useAuth()
    console.log(data)
    try {
        await createUser({
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            repeatPassword: data.repeatPassword
        })
        navigateTo('/')
    }
    catch(error) {
        console.log(error)
    }
    const isButtonDisabled = computed(() => {
    return (!data.username || !data.password)
    })
}

</script>