import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Episode = ({AndMorty}) => {

    const [isEpisode , seisEpisode] = useState([])

    useEffect(()=>{
        axios.get(AndMorty)
        .then(res=>seisEpisode(res.data))
    },[])
    //console.log(isEpisode)
      return (
        <div>
            
           
        </div>
    );
};

export default Episode;