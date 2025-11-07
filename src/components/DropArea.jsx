import React, { useState } from 'react'
import './DropArea.css'

const DropArea = ({onDrop}) => {
    const [showDrop, setshowDrop] = useState(false)
  return (
    <section 
    onDragEnter={()=>{setshowDrop(true)}}
    onDragLeave={()=>{setshowDrop(false)}} 
    onDrop={() => {
        onDrop();
        setshowDrop(false)
    }}
    onDragOver={(e)=>{e.preventDefault()}}
    className={showDrop ? 'drop_area' : 'hide_drop'}
    >
    Drop Here
    </section>
  )
}

export default DropArea