import { FunctionComponent } from "react";
import { Movie } from "../Movie";

const POSTER_PLACEHOLDER = "https://www.vvfire.com/wp-content/uploads/2015/02/placeholder-128x128.jpg";

type MovieDetailsProps = {
    movie: Movie;
}

export const MovieDetails: FunctionComponent<MovieDetailsProps> = ({ movie }) => {
    const { Poster, Title, Year, Plot, imdbRating } = movie;

    return (
        <article className="media">
            <figure className="media-left">
                <p className="image">
                    <img alt={Title} src={Poster === "N/A" ? POSTER_PLACEHOLDER : Poster} />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{Title}</strong> <small>{Year}</small>
                        <br />
                        {Plot}
                        <br />
                        <small>Rating: {imdbRating}</small>
                    </p>
                </div>
            </div>
        </article>
    )
}

