import {searchMovie} from "../../db/movie.js"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {param} = body

    // if(!param) {
    //     return sendError(event, createError({
    //         statusCode:400,
    //         statusMessage: 'Invalid params'
    //     }))
    // }

    const movies = await searchMovie(param)

    return {
        ...movies
    }
})