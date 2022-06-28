import React from 'react'
import Item from './Item'

export default function Items(props) {
  return (
    <main>
        {props.items.map(el =>(
            <Item item ={el} showFullItem={props.showFullItem} key={el.id} onAdd={props.onAdd}/>
        ))}
    </main>
  )
}
