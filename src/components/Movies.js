import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieServices';

class Movies extends Component {

state = {
    movie: getMovies()
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
                    <tr>
                    <td>The Flash</td>
                    <td>SF</td>
                    <td>0</td>
                    <td>3</td>
                    <td>
                      <button className='btn btn-danger btn-sm'>Delete</button>
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