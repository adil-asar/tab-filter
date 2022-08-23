import React,{useContext} from 'react'
import Card from './Card'
import { Properties } from './Main'

const List = () => {


  const data = useContext(Properties)


  return (

    <div className='list_css'>
        {
        data.cards.map(card =>{
          return <Card 
          key={card.id}
          card={card}
          />
        })
      }
       
    </div>
  )
}

export default List
