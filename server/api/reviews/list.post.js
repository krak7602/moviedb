import {getReviewsByMovie} from "../../db/review"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {movie_id} = body

    if(!movie_id) {
        return sendError(event, createError({
            statusCode:400,
            statusMessage: 'Invalid params'
        }))
    }

    const reviews = await getReviewsByMovie(movie_id)

    return {
        ...reviews
    }
})