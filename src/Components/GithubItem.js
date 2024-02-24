import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { getCommitsFetch } from '../Slices/CommitsSlice';

const GithubItem = ({ repo, id }) => {

    const owner = repo.owner.login;
    const name = repo.name;
    const [selected, setSelected] = useState('Commits');
    const commits = useSelector((state) => state.commits.commits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommitsFetch(owner, name))
    }, [dispatch, name, owner, selected])

    // console.log(commits);

    return (
        <Accordion>
            <div style={{ marginBlock: "20px" }}>
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>
                        <div className='repo-wrapper'>
                            <div className='column-left'>
                                <img src={repo.owner.avatar_url} alt={repo.name} />
                            </div>
                            <div className='details-wrapper'>
                                <h1>{repo.name}</h1>
                                <h5>{repo.description}</h5>
                                <div className='small-details'>
                                    <div>
                                        <span>Starred Count: <b>{repo.stargazers_count}</b></span>
                                        <span>Issues Count: <b>{repo.open_issues}</b></span>
                                    </div>
                                    <p>Last pushed <b>{repo.updated_at.slice(0, 10)}</b> by <b>Owner</b></p>
                                </div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='options'>
                            <select onChange={(e) => setSelected(e.target.value)}>
                                <option value="Commits">Commits</option>
                                <option value="Additions">Additions</option>
                                <option value="Deletions">Deletions</option>
                            </select>
                        </div>
                        <div>
                            <h5>{selected}</h5>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </Accordion>
    );
}

export default GithubItem