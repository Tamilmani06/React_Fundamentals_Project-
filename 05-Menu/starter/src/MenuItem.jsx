import React from 'react'

const MenuItem = ({img,title,price,desc}) => {
  return (
    <article className="menu-item ">
        <img src={img} alt={title } className="img" />
        <div className="item-info"></div>
        <header>
            <h5>{title}</h5>
            <span className='item-price'>${price}</span>
        </header>
        <p className="item-text">{desc}</p>
    </article>
  )
}

export default MenuItem