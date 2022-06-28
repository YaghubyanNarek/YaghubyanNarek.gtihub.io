import React from 'react'

export default function ShowItem(props) {
  return (
    <div>
        <img src={"./img/" + props.mainItem.img} />
    </div>
  )
}
