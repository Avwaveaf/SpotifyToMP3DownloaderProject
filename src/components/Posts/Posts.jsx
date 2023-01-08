import React, { useEffect, useState } from 'react';
import { downloadTracksFromApi } from '../../utils/fetchFromApi';

import './posts.style.scss'

const Posts = ({ tracks }) => {
    const [downloadId, setDownloadId] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getDataFromApi = async () => {
            if (downloadId) {
                setIsLoading(true)
                await downloadTracksFromApi(downloadId).then(({ link }) => {
                    setUrl(link);
                    setIsLoading(false);
                });
            }
        };
        getDataFromApi();
    }, [downloadId]);


    if (tracks) { 
        if (isLoading) { 
            return <div>
                is Loading...
            </div>
        }
            return <div>
            <div className='download_button_container'>
            { 
                url ? <a href={ url} className="download_button">Download Now</a>:""
            }
        </div>
            {tracks.map(({data}) =>{
                const {id, name, artists} = data
                return <div key={id}>
                    <h1>{name }</h1>
                    <p>{artists.items.map(({profile,uri}) => { 
                        return <span key={uri}>{ profile.name}</span>
                    })}</p>
                    <button onClick={() => {
                        setDownloadId(id);
                        
                    }}>Download</button>
        
  
                </div>
            })}
        </div>
    }

}

export default Posts