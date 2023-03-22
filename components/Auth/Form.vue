<template>
    <div>
        <div class="pt-5 space-y-6">
            <UIInput label="Username" placeholder="username" v-model="data.username"/>
            <UIInput label="Password" placeholder="********"  type="password" v-model="data.password"/>
            <UIButton @click="handleLogin"  liquid :disabled="isButtonDisabled">
                Login
            </UIButton>
            <UIRegisterButton @click="navigateTo('/register')" liquid>
                Register User
            </UIRegisterButton>
        </div>
    </div>
</template>

<script setup>
const data = reactive({
    password: '',
    username: ''
})

async function handleLogin() {
    const {login} = useAuth()
    const {getMovies} = useMovie()
    try {
        await getMovies({
            param: ''
        })
        await login({
            username: data.username,
            password: data.password
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
</script>