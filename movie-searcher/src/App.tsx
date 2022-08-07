import { FunctionComponent, useState } from 'react';
import './App.css';
import { MoviesList } from './Component/MoviesList';
import { SearchForm } from './Component/SearchForm';
import { Title } from './Component/Title';
import { Movie } from './Movie';

const App: FunctionComponent = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<Movie[]>([]);

  const handleResults = (movies: Movie[]) => {
    setResults(movies);
    setHasSearched(true);
  }

  const renderResults = () => {
    return results.length === 0 ? <p>No results found</p> : <MoviesList movies={results} />
  }

  return (
    <div className="App">
      <Title title={"Movie Searcher"}></Title>
      <div className='SearchForm-wrapper'>
        {<SearchForm onResults={handleResults} />}
      </div>
      {
        hasSearched ? renderResults() : <small>Please search for a movie</small>
      }
    </div>
  );
}

export default App;
