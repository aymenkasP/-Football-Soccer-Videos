import React from 'react'
import Card from './Card'
import '../css/cards.css'

function MatchesCard({data}) {
    return (
        <div className="cards container">

        {
            data.map((item) => {
               // console.log(item)
               return  <Card  key={item.titel} 
                        info = {item}
                 />
            })
        }
       
            
        </div>
    )
}

export default MatchesCard
