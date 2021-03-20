import url from './url';

const getList = async () => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  const {movies} = data.data;
  
  return movies;
};

export default getList;

