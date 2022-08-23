import React,{useState,createContext} from 'react'
import Category from './Category';
import List from './List';
import Data from './Data'
import Price from './Price';


const Properties = createContext()

const Main = () => {

  const [allcards, setallcards] = useState(Data)
  const [pri, setpri] = useState()

  return (
    <div className='main_css'>
      <Properties.Provider 
       value={{
        cards:allcards, setcard:setallcards,
        prce:pri, setprce:setpri
        }}>

        <Category/>
        <Price/>
        <List/>

        </Properties.Provider>
    </div>
  )
}

export default Main
export {Properties}