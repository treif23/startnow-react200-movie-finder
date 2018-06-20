import React from 'react';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
            <div className='row'>
            <div className='col-12'>
                <h1 id='title'>Movie Search Container</h1>
                </div>
                <div className="input-group mb-3">
                        <input type="text" id="bar" className="col-8" placeholder="Movie Title" aria-label="Recipient's username" aria-describedby="basic-addon2"
                           ></input>
                        <div className="input-group-append">
                            <button id='search' className="btn btn-outline-secondary"  type="button">Go!</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default MovieSearchContainer;