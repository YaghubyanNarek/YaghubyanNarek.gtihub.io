import React, { useState } from 'react'

export default function Categories(props) {
    const [categories,SetCategories] = useState([
        {
            key:'all',
            name:'Всё'
        },
        {
            key:'chairs',
            name:'Стуля'
        },
        {
            key:'tables',
            name:'Столы'
        },
        {
            key:'sofa',
            name:'Диваны'
        },
        {
            key:'light',
            name:'Свет'
        },
        {
            key:'beds',
            name:'кровати'
        }

    ])
    const [active,setActive] = useState(false)
  return (
    <div className='categories'>
        {categories.map(el =>(
            <div key={el.key} onClick={()=>{
                props.chooseCategory(el.key)
                setActive(!active)
            }} >{el.name}</div>
        ))}
    </div>
  )
}
