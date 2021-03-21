import { ReactComponent as SearchIcon } from '../Icons/searchIcon.svg';
import { searchContainer, searchInput } from './SearchForm.module.scss';

export default function SearchForm () {
  return (
    <div className={searchContainer}>
      <label htmlFor="findingMovie"><SearchIcon /></label>
      <input 
        className={searchInput} 
        id="findingMovie" 
        type="search" 
        placeholder="Search the Movie!" 
      />
    </div>
  );
}