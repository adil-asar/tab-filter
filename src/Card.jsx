import React from 'react'

const Card = ({card}) => {
  return (
    <div className='card_css'>
<img src={card.img} alt="" className='img_css' />
<h2 className='title'>
    {card.title}
</h2>
<p className="desc">
{card.desc}
</p>
<div className="footer">
    <span> {card.price} </span>
    <span>{card.category}</span>
</div>

    </div>
  )
}

export default Card