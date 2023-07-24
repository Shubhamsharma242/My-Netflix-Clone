import React from "react";
import Card from "../Card/Card";
// import image from '../../img/image.jpg'
const imageUrl ="https://image.tmdb.org/t/p/original";
const Row = ({ title,arrMovie=[] }) => {

console.log(arrMovie)
  return (
  <div className="row">
    <h2>{title}</h2>
   <div>

    {
        arrMovie.map((item,index)=>(
            <Card key={index} img={`${imageUrl}/${item.poster_path}`}/>
        ))
    }
   
   </div>
  
  </div>
  )
};

export default Row;
