import {sendError} from "h3"
import { createMovie } from "~~/server/db/movie";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {name, rating, synopsis, director, producer, Stars, genres} = body


    if(!name || !rating || !synopsis || !director || !producer || !Stars || !genres) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid Params"}))
    }

    const movieData = {
        name,
        rating,
        synopsis,
        director,
        producer,
        Stars,
        genres
    }

    const movie = await createMovie(movieData)

    return {
        body: body
    }
})