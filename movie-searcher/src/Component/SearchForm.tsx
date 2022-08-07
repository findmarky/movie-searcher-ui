import { FunctionComponent, useState } from "react";
import { Movie } from "../Movie";

const API_KEY = process.env.REACT_APP_API_KEY;

type SearchFormProps = {
    onResults: (results: Movie[]) => void;
};

export const SearchForm: FunctionComponent<SearchFormProps> = ({ onResults }) => {
    const [inputMovie, setInputMovie] = useState("");

    const onChange = (e: any) => {
        setInputMovie(e.target.value);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [] } = results;
                Promise.all(Search.map((search: { imdbID: string; }) =>
                    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${search.imdbID}`)
                        .then(res => res.json())
                )).then(result => {
                    onResults(result)
                })
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Movie title to search.." />
            <button>
                Search
            </button>
        </form>
    )
}
