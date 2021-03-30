import React from 'react'
import '../css/card.css'

function Card({info}) {

   
    return (
        <div className='card'>

      
        <p className="title">
            {info.title}
        </p>
            <div className='card_img'>
              <img src ={info.thumbnail} alt ={info.title} />   
            </div>



                {
                  //match info  
                }

           <div className='match_info'>
           <p>{info.date}</p>
             <p> {info.competition.name} </p>
           </div>
            
        </div>
    )
}

export default Card
