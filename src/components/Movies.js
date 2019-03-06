import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Like from "./common/Like";
import Pagination from './common/Pagination'
import {paginate} from './utils/paginate'

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete(movie) {
    
      const movies = this.state.movies.filter(m => m._id !== movie._id);
    
    this.setState({movies})
  }

  handleLike(movie) {
    console.log(movie)
    this.setState(prevState => {
      const movies = prevState.movies;
      const index = movies.indexOf(movie);
      movies[index].liked = !movies[index].liked;
      return {movies}
    });
  } 

  handlePageChange(){
    
  }

  render() {

    const {pageSize, currentPage, movies} = this.state


    if(this.state.movies.length == 0)return <p className='asd'  >There are no movies in our database</p>

    const paginatedMovies = paginate(movies, currentPage, pageSize);
    console.log(paginatedMovies)

    return (
      <div>
        <p>We have {this.state.movies.length} in our database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
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
                    <Like 
                        liked={movie.liked}
                        onLikeClicked={() => this.handleLike(movie)}
                            />
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
        <Pagination
        itemsCount={lenght}
        currentPage={currentPage}
        pageSize={pageSize}
        onPangeChange={this.handlePageChange}/>
        <React.Fragment/>
      </div>
    );
  }
}

export default Movies;
