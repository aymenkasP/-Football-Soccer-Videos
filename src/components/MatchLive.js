import { useStoreState } from 'easy-peasy'
import React from 'react'

export default function MatchLive() {
    const info = useStoreState((state) => state.LiveInfo )
    
    console.log(info.embed)
    return (
        <div>
            <p> {info.title} </p>
            <div>
               
            </div>
        </div>
    )
}
