import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete(movie) {
    this.setState(prevState => {
      const movies = this.state.movies.filter(m => m._id !== movie._id);
    });
    return movie;
  }

  handelLike(index){
    if (index){

    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => {
              return (
                <tr key={movie._id} key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <i
                      onClick={() => this.handleDelete(this.handelLike)}
                      className={(!this.state.isLiked) ? 'fa-heart' : 'fa-heart-o'}
                    >
                     
                    </i>
                    </td>
                    <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
