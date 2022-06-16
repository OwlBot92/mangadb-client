
import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {


  useEffect(() => {
    getData();
  }, []);

  //wrtite a function to make a get request using axios
  const getData = () => {
    //make a get request to the url with the request mode setted to no cors
    axios.get('https://mangadb.pagekite.me/manga', {
      mode: 'no-cors',
    })
      .then(res => {
        console.log(res);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
