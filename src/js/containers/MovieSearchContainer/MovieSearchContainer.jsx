import React from 'react';
import { Link } from 'react-router-dom';

import {
    updateMovieDescription,
    searchMovie,
    updateMovieDetails
    //updateSanDiego
} from '../../actions';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleDetails = this.handleDetails.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleDetails(event) {
        const { dispatch, imdbID } = this.props;
        dispatch(updateMovieDetails(imdbID));
    }

    handleSearchInput(event) {

        const { dispatch } = this.props;
        const { value } = event.target;

        dispatch(searchMovie(value));
     
    }

    handleSearch(event) {
        // dispatch was provided by connect()
        const { dispatch, searchText } = this.props;
        dispatch(updateMovieDescription(searchText));
       
    }


    render() {
        const { movies } = this.props;
        console.log('RENDER METHOD', this.props.movies)
        if (movies.length == 0) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 id='title'>Movie Search Container</h1>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" id="bar" className="col-8" placeholder="Movie Title" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleSearchInput}
                            ></input>
                            <div className="input-group-append">
                                <button id='search' className="btn btn-outline-secondary" type="button" onClick={this.handleSearch}>Go!</button>

                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 id='title'>Movie Search Container</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" id="bar" className="col-8" placeholder="Movie Title" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleSearchInput}
                        ></input>
                        <div className="input-group-append">
                            <button id='search' className="btn btn-outline-secondary" type="button" onClick={this.handleSearch}>Go!</button>

                        </div>

                    </div>
                </div>
                {movies.map((movie, imdbID) => (
                    <div key={movie.imdbID} id='info' className='row'>

                        <div className='col-5'>
                            {movie.Poster && <img src={movie.Poster} />}
                        </div>
                        <div id='movie' className='col-5'>
                            {movie.Title && <p id='title1'>{movie.Title}</p>}
                            {movie.Year && <p>({movie.Year})</p>}
                            <Link to={`/movie/${movie.imdbID}`}>
                            <button className="btn btn-primary col-lg-4" role="button" onClick={this.handleDetails}>More Details</button>
                            </Link>
                        </div>

                    </div>
                ))}

            </div>

        )
    }
}

export default MovieSearchContainer;