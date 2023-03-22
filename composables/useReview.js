export default () => {
    const reviewList = () => useState('review_list')
    
    const setReviews = (newReviewList) => {
        const reviewLists = reviewList()
        reviewLists.value = newReviewList
    }
    
    const getReviews = ({movie_id}) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                const data = await $fetch('/api/reviews/list', {
                    method: 'POST',
                    body: {
                        movie_id: parseInt(movie_id)
                    }
                })

                setReviews(data)

                

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const createReview = ({content, user_name,movie_id}) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log({
                    content,
                    user_name,
                    movie_id
                })
                const data = await $fetch('/api/reviews/new', {
                    method: 'POST',
                    body: {
                        content: content,
                        user_name: user_name,
                        movie_id: parseInt(movie_id)
                    }
                })                
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    
    return {
        getReviews,
        reviewList,
        createReview
    }
}