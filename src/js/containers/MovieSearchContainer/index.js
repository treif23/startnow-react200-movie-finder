import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
import * as SearchActions from '../../actions';


function mapStoreToProps(store) {

    return {

        searchText: store.search.searchText,
        title: store.search.title,
        year: store.search.year,
        poster: store.search.poster,
        movies: store.search.movies

    };
}



export default connect(mapStoreToProps)(MovieSearchContainer);

console.log('OK');