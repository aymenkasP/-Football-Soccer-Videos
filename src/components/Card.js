import React from 'react'

function Card({info}) {

   
    return (
        <div className='card'>
            {info.title}
            <img src ={info.thumbnail} alt ={info.title} />
            {info.date}
        </div>
    )
}

export default Card
