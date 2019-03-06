import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';
import Like from './common/Like';
import { paginate } from '../components/utils/paginate';
import Pagination from './common/Pagination';

class Movies extends Component {
 state = {
   movies: getMovies(),
   pageSize: 4,
   currentPage: 1
 };

 handlePageChange = (page) => {
   this.setState({ currentPage: page });
 };

 handleLike(movie) {
   this.setState((prevState) => {
     const movies = prevState.movies;
     const index = movies.indexOf(movie);
     movies[index].liked = !movies[index].liked;
     return { movies };
   });
 }

 // Imperative vs declarative
 handleDelete(movie) {
   // Declarative
   const movies = this.state.movies.filter((m) => m._id !== movie._id);

   this.setState({ movies });
 }

 render() {
   const { movies, pageSize, currentPage } = this.state;

   if (movies.length === 0)
     return <p className='jumbotron'>There are no movies in the db</p>;

   const paginatedMovies = paginate(movies, currentPage, pageSize);

   return (
     <div className='container'>
       <p>There are {movies.length} movies in the database </p>

       <table className='table'>
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
           {paginatedMovies.map((movie) => {
             return (
               <tr key={movie._id}>
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
                 <td />
                 <td>
                   <button
                     onClick={() => this.handleDelete(movie)}
                     className='btn btn-danger btn-sm'
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
         pageSize={pageSize}
         currentPage={currentPage}
         itemsCount={movies.length}
         onPageChange={this.handlePageChange}
       />
     </div>
   );
 }
}

export default Movies;