import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/Atif-dhedhi-ai/repos")
      const data = await response.json();
      console.log(data)
      setRepos(data)
    }  
    getRepos()
  }, [])
  return (
    <div>
      <h1> List of My Repositories</h1>
      <ul>
        {repos.map((repoObj, ind)=>{
          return (<li key={ind}> {<a href={repoObj.html_url} target="#blank" >{repoObj.name}</a>} </li>)
        })}
     </ul>
    </div>
  );
}

export default App;
