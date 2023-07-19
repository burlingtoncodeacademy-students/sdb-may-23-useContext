import React from 'react'
import Sub from './Sub'

function Main({ treasure }) {
  
  return (
    <div>
        <p>This is the main component</p>
        <Sub treasure={treasure} />
    </div>
  )
}

export default Main