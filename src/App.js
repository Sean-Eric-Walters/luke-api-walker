import React, {useState} from 'react';
import { Router } from '@reach/router';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [resource, setResource] = useState("");
  const [idAPI, setIdAPI] = useState("");

  const setInput = (newResource, newIdAPI) => {
    setResource(newResource);
    setIdAPI(newIdAPI)
  }
  

  return (
    <div>
      <Search setInput = {setInput}/>
      <Router>
        <Result resource={resource} idAPI={idAPI} path={`/${resource}/${idAPI}`}/>
      </Router>
    </div>
  );
}

export default App;
