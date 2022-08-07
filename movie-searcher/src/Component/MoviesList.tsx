import { FunctionComponent } from "react";
import { Movie } from "../Movie";
import { MovieDetails } from "./MovieDetails";

type MovieListProps = {
    movies: Movie[];
}

export const MoviesList: FunctionComponent<MovieListProps> = ({ movies }) => {
    return (
        <div className='MoviesList'>
            {
                movies.map(movie => {
                    return (
                        <div key={movie.imdbID} className='MoviesList-item'>
                            <MovieDetails movie={movie} />
                        </div>
                    )
                })
            }
        </div>
    )
}