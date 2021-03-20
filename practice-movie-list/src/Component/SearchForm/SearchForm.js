
export default function SearchForm () {


  return (
    <div>
      <form>
        <label htmlFor="findingMovie">영화 검색</label>
        <input id="findingMovie" type="text" />
        <button type="button">Search!</button>
      </form>
    </div>
  );
}