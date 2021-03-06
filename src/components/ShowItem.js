import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function ShowItem(props) {
  return (
    <div>
      <img src={"./img/" + props.mainItem.img} onClick={() => {
        props.showFullItem(props.mainItem)
      }} />
      <h2>{props.mainItem.title}</h2>
      <p>{props.mainItem.desc}</p>
      <b>{props.mainItem.price}$</b>
      <FaTimes 
        className='mute-item'
        onClick={() =>{
          props.showFullItem(props.mainItem)
        }}
        />
      <div className='add-to-cart' onClick={() => props.onAdd(props.mainItem)}>+</div>
    </div>
  )
}
