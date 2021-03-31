import { useStoreState } from 'easy-peasy'
import React from 'react'

export default function MatchLive() {
    const info = useStoreState((state) => state.LiveInfo )
    const  emb = info.embed.slice(137,228)
    
    return (
        <div>
            <p> {info.title} </p>
            <div>
               {console.log(emb)}
               <div className='video' ><iframe className='frame' src={emb} >
               </iframe></div>
              
            </div>
        </div>
    )
}

//230 132