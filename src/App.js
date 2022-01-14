import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState()

  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    .then(res=>res.json())
    .then(setUser)
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
