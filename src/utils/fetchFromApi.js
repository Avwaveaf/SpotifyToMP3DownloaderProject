import axios from "axios";


export const downloadTracksFromApi = async (trackId) => { 
    const BASE_URL = 'https://spotify-downloader.p.rapidapi.com/SpotifytrackDownloader'
    const options = {
    
        params: {id: trackId},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'spotify-downloader.p.rapidapi.com'
        }
      };
    const { data } = await axios.get(`${BASE_URL}`, options);
    return data;
};

export const getSpotifyTrack = async (track) => {
    const options = {
        params: {
          q: track,
          type: 'tracks',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
    const { data } = await axios.get('https://spotify23.p.rapidapi.com/search/', options);
    return data;
};