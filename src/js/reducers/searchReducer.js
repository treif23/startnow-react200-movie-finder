const defaultState = {
    searchText: '',
    title: '',
    year: '',
    poster: '',
    imdbID: '',
    movies: []
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SEARCH_MOVIE': {
            return {
                ...state,
                searchText: payload.searchText
            };
        }
        case 'UPDATE_MOVIE_DESCRIPTION_FULFILLED': {
            //payload == response
console.log("INSIDE ACTION", payload)
            return {

                ...state,
                movies: payload.Search,

            };
        }
        case 'UPDATE_MOVIE_DETAILS_FULFILLED': {
            console.log('INSIDE DETAILS ACTION')
            return {
                ...state,
                selectedMovie: payload
               
            };
            console.log(imdbID)
        }

        default: {
            return { ...state };
        }

    }
}