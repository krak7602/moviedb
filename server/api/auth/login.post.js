import {getUserByUsername} from "../../db/users.js"
import bcrypt from "bcrypt"
import {sendError} from "h3"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {username, password} = body

    if(!username || !password) {
        return sendError(event, createError({
            statusCode:400,
            statusMessage: 'Invalid params'
        }))
    }

    const user = await getUserByUsername(username)
    if(!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode:400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    return {
        ...user,
        loginStatus: 1
    }
})