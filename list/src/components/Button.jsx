import React from "react";
import {BsTrash} from 'react-icons/bs'
import './Button.css'
//        Mytudo.splice(Myindex,1)

// 
const Button = ({Myindex, Mytudo,SetTudo}) => {
   
    const RemoveItem = (e) => {
        e.preventDefault()
       
       const tudo =  Mytudo.filter((tudo,index)=> index !==Myindex)
       localStorage.setItem('list', JSON.stringify(tudo))
       SetTudo(tudo)
      
      
               

    
    }
      return(
          <BsTrash  onClick={RemoveItem} className='icon'/> 
      )
}

export default Button