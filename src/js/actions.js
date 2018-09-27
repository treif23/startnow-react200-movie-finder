const axios = require('axios');



export function searchMovie(searchText){
    return {
        type: 'SEARCH_MOVIE',
        payload: {searchText}
    };
    
}

export function updateMovieDescription(searchText) {

    return {
        type: 'UPDATE_MOVIE_DESCRIPTION',
        payload: axios.get('https://www.omdbapi.com/?s='+searchText+'&apikey=8730e0e').then(response => response.data)   
    };
}

export function updateMovieDetails(id) {

    return {
        type: 'UPDATE_MOVIE_DETAILS',
        payload: axios.get('https://www.omdbapi.com/?i='+id+'&apikey=8730e0e')
        .then(response => {
        return response.data
     }) 
    };
}