import React from "react";

import { useState } from "react";
import {AiOutlineCheck} from 'react-icons/ai'

import {MdPending} from 'react-icons/md'
import './Concluido.css'
// setCheckeds(myCheckds +1)

const Concluido = ({setTarefas, tarefas}) => {


    const [checked, setChecked] = useState(false)
   
  

   
    const ChecarIten = (e) => {
        e.preventDefault()
        setChecked(true) 
       
       
       
        if(!checked) {
            setTarefas(tarefas +1)
            
           
        }
      
  
    

   
    
    }

    return (
        <div >
      {checked ? <AiOutlineCheck onClick={ChecarIten}  className="iconCheck" /> :  <MdPending onClick={ChecarIten} className="iconPeding"/>  }
      </div>
       
        
    )
}

export default Concluido