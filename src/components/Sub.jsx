import React from 'react'
import Distant from './Distant'

function Sub({ treasure }) {
    
  return (
    <div>
        <p>This is the sub component</p>
        <Distant treasure={treasure} />    
    </div>
  )
}

export default Sub