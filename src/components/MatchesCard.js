import React from 'react'
import Card from './Card'

function MatchesCard({data}) {
    return (
        <div className="cards">

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
