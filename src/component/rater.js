import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Rater(props) {
  let value=props.rating;
  let arr=[];
  for (let i=1;i<=5;i++){
    if(i<=value) {
    arr.push(<span className="fa fa-star checked" ></span>)
  }
    else{
      arr.push(<span className="fa fa-star "></span>)
    }
  }
  return <div>{arr}</div>;
  
}
