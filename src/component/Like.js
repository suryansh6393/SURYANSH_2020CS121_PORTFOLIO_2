import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Like(props) {
    const [color,setColor]=useState(null);
    const[like,setLike]=useState(parseInt(100));
    const onclick=()=>
    {
        if(color=="orange"){
            setColor('black');
            setLike(like-1);

        }
        else{
            setColor('orange');
            setLike(like+1);
        }
    }
  return (
    <div>
        <div  className='mt-5 ms-5'>
            <span className='me-2'>Like:{like}</span>
            <FontAwesomeIcon icon={faThumbsUp} size='xl' color={color} onClick={onclick}/>
        </div>
    </div>
  )
}
