import React, { useContext } from 'react'
import { Context } from '../App'

function Distant() {
    
    const [ treasure, setTreasure ] = useContext(Context)

  return (
    <div>
        <p>This is the distant component. The treasure you win is {treasure}</p>
        <input type="text" onChange={e => setTreasure(e.target.value)}/>
    </div>
  )
}

export default Distant