import {prisma} from ".";

export const createReview = (reviewData) => {
    return prisma.review.create({
        data: reviewData
    })
}

export const getReviewsByMovie = (movieId) => {
    return prisma.review.findMany({
        where: {
            movie_id: parseInt(movieId)
        }
    })
}