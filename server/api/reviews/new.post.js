import {sendError} from "h3"
import { createReview } from "~~/server/db/review";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {content, user_name, movie_id} = body


    if(!content || !user_name || !movie_id) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid Params"}))
    }

    const reviewData = {
        content,
        user_name,
        movie_id
    }

    const review = await createReview(reviewData)

    return {
        body: body
    }
})