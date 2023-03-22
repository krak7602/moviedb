export default () => {

    const loginUserName = () => useState('login_username')
    const loginUserID = () => useState('login_userid')
    const loginUsername = () => useState('login_user_name')
    
    const setUserName = (newUserName) => {
        const authUserName = loginUserName()
        authUserName.value = newUserName
    }

    const setUserID = (newUserID) => {
        const authUserID = loginUserID()
        authUserID.value = newUserID
    }

    const setUsername = (newUsername) => {
        const authUsername = loginUsername()
        authUsername.value = newUsername
    }


    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })

                setUserName(data.name)
                setUserID(data.id)
                setUsername(data.username)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const createUser = ({username, email, password, repeatPassword, name}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/register', {
                    method: 'POST',
                    body: {
                        username,
                        email,
                        password,
                        repeatPassword, 
                        name}
                })                
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }


    return {
        login,
        loginUserName,
        loginUserID,
        loginUsername,
        createUser
    }
}