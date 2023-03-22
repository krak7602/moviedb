export default () => {
    const movieList = () => useState('movie_list')
    
    const setMovies = (newMovieList) => {
        const movieLists = movieList()
        movieLists.value = newMovieList
    }
    
    const getMovies = ({param}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/movies/search', {
                    method: 'POST',
                    body: {
                        param: param
                    }
                })

                setMovies(data)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
    
    return {
        getMovies,
        movieList
    }
}