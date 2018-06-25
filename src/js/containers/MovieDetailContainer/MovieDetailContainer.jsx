import React from 'react';
import { updateMovieDetails } from '../../actions';


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(updateMovieDetails(id))
  }

  render() {
    const { selectedMovie } = this.props;
    return (
      <div>
        <h1>Movie Detail Container</h1>
        <div className='container'>
          <div id='info' className='row'>

            <div className='col-5'>
              {selectedMovie && <img id='poster' src={selectedMovie.Poster} />}
              </div>
              <div id='movie1' class='info2' className='col-5'>
                {selectedMovie && <h5 id='title1'>{selectedMovie.Title}</h5>}
                {selectedMovie && <p>({selectedMovie.Year})</p>}
                {selectedMovie && <p>Director: {selectedMovie.Director}</p>}
                {selectedMovie && <p>Actors: {selectedMovie.Actors}</p>}
                {selectedMovie && <p>Rotten Tomatoes Score: {selectedMovie.Ratings[1].Value}</p>}
                {selectedMovie && <p>{selectedMovie.Plot}</p>}
              
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default MovieDetailContainer;