import React, { useContext } from 'react'
import { Properties } from './Main'
import Data from './Data'

const Price = () => {

const data = useContext(Properties)

const price_filter = [...new Set(Data.map((elem)=> elem.price))]

const filter_item = (rate) => {

  
    const item = data.prce.filter((fil)=>{
        return fil.price === rate
    })
    data.setcard(item)
}

  return (
    <div className='btn_group'>
 {
  price_filter.map((elem)=> {
    return   <button className=' pri_btn' 
    onClick={()=>filter_item(elem)}
    >{elem}</button>
  })
 }

    {/* <button className=' pri_btn' 
    onClick={()=>filter_item('$50')}
    >$50</button>
    <button className=' pri_btn' 
    onClick={()=>filter_item('$100')}
    >$100</button>
    <button className=' pri_btn' 
    onClick={()=>filter_item('$150')}
    >$150</button> */}
</div>
  )
}

export default Price