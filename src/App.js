import './App.css';
import GithubItem from './Components/GithubItem';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepoFetch } from './Slices/RepoSlice';

function App() {
  const repos = useSelector((state) => state.repos.repos);
  const [page, setPage] = useState(1); // for pagination
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepoFetch({ page }));
  }, [dispatch, page]);
  // console.log(repos);

  // function to decrease page number
  const handlePrevPage = () => {
    if (page <= 1) {
      return
    }
    setPage(page - 1);
  }
  // function to increase page number
  const handleNextPage = () => {
    setPage(page + 1);
  }

  return (
    <div className="App">
      <div className='repos-wrapper'>
        <h1>Most Starred Repos</h1>
        <hr />
        {
          repos?.map((repo, index) => (
            <div key={index}>
              <GithubItem repo={repo} id={index} />
            </div>
          ))
        }
      </div>
      <div className='pagination'>
        <button onClick={handlePrevPage}>&larr;</button>
        <span>{page}</span>
        <button onClick={handleNextPage}>&rarr;</button>
      </div>
    </div>
  );
}

export default App;
