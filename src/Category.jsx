import React, { useContext } from 'react'
import Data from './Data'
import { Properties } from './Main'

const Category = () => {
const data = useContext(Properties)

const cate_filter = ['All',...new Set(Data.map((elem)=>elem.category))]
 console.log(cate_filter);

  const filter_item = (elem) => {
    if (elem === 'All') {
      data.setcard(Data)
      return;
    }

       const  item = Data.filter((element)=>{
        return  element.category === elem
       }
       )
       data.setcard(item)
       data.setprce(item)
  }

  return (
    <div className='btn_group'>

{
  cate_filter.map((elem,ind)=>{
    return  <button className='btn_css' 
    key={ind}
    onClick={()=>filter_item(elem)}
    > {elem}</button>
  })
}
    </div>
  )
}

export default Category