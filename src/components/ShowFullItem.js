import React from 'react'
import ShowItem from './ShowItem'

export default function ShowFullItem(props) {
  return (
    <div className='full-item'>
        
        <ShowItem mainItem={props.item} key={props.item.id} showFullItem={props.showFullItem} onAdd={props.onAdd} />
    </div>
  )
}
