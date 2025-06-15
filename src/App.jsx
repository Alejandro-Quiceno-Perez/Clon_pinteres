import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'
import './App.css'
import { Header } from './components/Header'
import Masonry from '@mui/lab/Masonry';
import { Card } from './components/Card';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "KtaB5EHOXWfajUWBfDAdbUTlZEnLKc-Q0tER76-au_Q"
});

function App() {
  const [data, setData] = useState([]);
  console.log("data", data)

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", perPage: "20" })
      .then(result => {
        setData(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return (
    <div className='container'>
      <Header />
      <Masonry columns={5} spacing={3} className='masonry'>
        {
          data.map((item) => (
            <Card key={item.id} item={item}/>
          ))
        }
      </Masonry>
    </div>
  )
}


export default App
