import { Injectable } from '@angular/core';
import { Movie } from '../app/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    new Movie('MovieOne','2021','DirectorOne'),
    new Movie('MovieTwo','2022','DirectorTwo'),
    new Movie('MovieThree','2023','DirectorThree'),
    new Movie('MovieFour','2024','DirectorFour')
  ];
  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
}
