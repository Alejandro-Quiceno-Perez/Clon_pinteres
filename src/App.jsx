import React, { useState, useEffect, useRef } from 'react'
import { createApi } from 'unsplash-js'
import './App.css'
import { Header } from './components/Header'
import Masonry from '@mui/lab/Masonry';
import { Card } from './components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useBookStore } from './store/bookStore';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: import.meta.env.VITE_ACCESSKEY,
});




function App() {
  const [data, setData] = useState([]);
  console.log("data", data)

  const [hasMore, setHasMore] = useState(true);
  const val = useBookStore(state => state.value);

  let index = useRef(1);

  useEffect(() => {
    index.current = 1;
    setHasMore(true);

    api.search
      .getPhotos({ query: val, perPage: "20", page: index.current })
      .then(result => {
        setData(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [val]);

  const moreData = () => {
    index.current += 1;

    if (index.current == 3) {
      setHasMore(false);
    }

    api.search
      .getPhotos({ query: val, perPage: "20", page: index.current })
      .then(result => {
        setData(data.concat(result.response.results));
      })
      .catch(() => {
        console.log("something went wrong!");
      });

  }

  return (
    <div className='container'>
      <Header />
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        hasMore={hasMore}
        next={moreData}
        loader={<h4>Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >

        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          spacing={{ xs: 0, sm: 1, md: 2, lg: 3, xl: 4 }}
          className='masonry'>
          {
            data.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </Masonry>

      </InfiniteScroll>
    </div>
  )
}


export default App
