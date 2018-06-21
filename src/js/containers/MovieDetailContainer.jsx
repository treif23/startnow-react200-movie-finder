import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                  <p id='title1'>MOVIE TITLE</p>
                  <p>(MOVIE YEAR)</p>
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