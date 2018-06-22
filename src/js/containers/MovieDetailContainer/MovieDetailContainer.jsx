import React from 'react';
import { updateMovieDetails } from '../../actions';


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    console.log('++++++++++', id);
    dispatch(updateMovieDetails(id))
    console.log('DETAILS', this.props)
  }

  render() {
    const { selectedMovie } = this.props;
    return (
      <div>
        <h1>Movie Detail Container</h1>
        <p>Viewing movie {this.props.match.params.id}</p>
        <div className='container'>
          <div id='info' className='row'>

            <div className='col-5'>
              <div> IMAGE!! <div>
              </div>
                <div id='movie' className='col-5'>  
                  {selectedMovie && <p id='title1'>{selectedMovie.Title}</p>}
                  {selectedMovie && <p>{selectedMovie.Year}</p>}
                  <p>MOVIE DESCRIPTION</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;