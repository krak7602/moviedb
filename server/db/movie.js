import {prisma} from "."

export const createMovie = (movieData) => {
    return prisma.movie.create({
        data:movieData
    })
}

export const searchMovie = (param) => {
    return prisma.movie.findMany({
        where: {
            name: {
                contains: param,
            },
        },
    })
}

export const getMovieById = (movieId) => {
    return prisma.user.findUnique({
        where: {
            id: movieId
        }
    })
}