import React from "react";
import './Edit.css'

const Edit = ({Myindex,Mytudo,Edit,SetTudo}) => {
    const editList = (e) => {
       
        const Redirect = () => {
            const url = 'http://localhost:3000/'
            window.open(`${url}`)
        }
        if(!Edit) {
            return false && Redirect()
        }
        e.preventDefault()
       Mytudo.splice(Myindex,1, Edit)
      console.log(Mytudo)
      localStorage.setItem('list', JSON.stringify(Mytudo))
        
      SetTudo(Mytudo)
    }
    return (
        <button className="edit" onClick={editList}>edit</button>
    )
}

export default Edit