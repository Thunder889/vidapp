import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieServices';

class Movies extends Component {

state = {
    movie: getMovies()
}

handleDelete(){ 
    console.log('delete me')
}

    render() {
      return (
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movies => {
                    return(
                    <tr key='movie._id'>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button onClick={() => this.handleDelete(movie)}
                              className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                  </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default Movies;