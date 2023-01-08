import React, {  useState } from 'react'
import {  getSpotifyTrack } from '../../utils/fetchFromApi';
import Posts from '../Posts/Posts';
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchBarHandler = (event) => {
        setSearchQuery(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        getSpotifyTrack(searchQuery).then(({ tracks }) => { 
            const { items } = tracks;
            setTracks(items);
            setIsLoading(false);
        })
    }
    
  return (
      <div>
          <form onSubmit={onSubmitHandler}>
            
              <input name="" value={searchQuery} onChange={searchBarHandler} />
              <button type="submit" >search</button>
          </form>

          { 
              isLoading?<div>
                Loading ...
              </div>:          <div>
              <Posts tracks={ tracks}/>
          </div>
          }

      </div>
  )
}

export default Navbar