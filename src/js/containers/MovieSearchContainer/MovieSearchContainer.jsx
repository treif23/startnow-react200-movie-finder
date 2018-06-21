import React from 'react';

import {
    updateMovieDescription,
    searchMovie,
    //updateSanDiego
} from '../../actions';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    componentDidMount() {
        console.log('HERE');
    }

    handleSearchInput(event) {

        const { dispatch } = this.props;
        const { value } = event.target;
        console.log('hello')

        dispatch(searchMovie(value));
        console.log(this.props)
    }

    handleSearch(event) {
        // dispatch was provided by connect()
        const { dispatch, searchText } = this.props;
        dispatch(updateMovieDescription(searchText));
        console.log(this.props);
    }


    render() {
        const { movies } = this.props;
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
                <div id='info' className='row'>

                    <div className='col-6'>
                        {movies.length > 0 && <img src={movies[0].Poster} />}
                    </div>
                    <div id='movie' className='col-6'>
                        {movies.length > 0 && <p id='title1'>{movies[0].Title}</p>}
                        {movies.length > 0 && <p>{movies[0].Year}</p>}
                        <a className="btn btn-primary col-lg-3" role="button">More Details</a>
                    </div>


                </div>
            </div>

        )
    }
}

export default MovieSearchContainer;