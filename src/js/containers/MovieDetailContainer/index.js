import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';
import * as SearchActions from '../../actions';


function mapStoreToProps(store) {

    return {

        searchText: store.search.searchText,
        title: store.search.title,
        year: store.search.year,
        poster: store.search.poster,
        movies: store.search.movies,
        selectedMovie: store.search.selectedMovie

    };
}



export default connect(mapStoreToProps)(MovieDetailContainer);

console.log('OK');