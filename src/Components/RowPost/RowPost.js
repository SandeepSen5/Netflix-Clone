import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { imageUrl,API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovie] = useState([])
    const [urlId,setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovie(response.data.results)
        }).catch(err => {
            // alert('Networ Error');
        })
    }, [])

    const opts = {
        height: '390',
        width: '100% ',
        playerVars: {
            autoplay:1,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length1!==0){
                setUrlId(response.data.results[0]) 
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPosters' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='posters' />
                )}

            </div>
           { urlId &&  <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}



export default RowPost


