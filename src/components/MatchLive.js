import { useStoreState } from 'easy-peasy'
import React from 'react'
import '../css/MatchLive.css'
export default function MatchLive() {
    const info = useStoreState((state) => state.LiveInfo )
    const  emb = info.embed.slice(137,228)
    
    return (
        <div className="video">
            <p> {info.title} </p>
            
               <div className='frm' >
               <iframe className='frame' src={emb} >
               </iframe>
               </div>
              
            </div>
       
    )
}

//230 132