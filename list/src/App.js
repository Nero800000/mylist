 import {useState, useEffect} from 'react'
import './App.css';
import Button from './components/Button';
import Edit from './components/Edit';
import Concluido from './components/Concluido';




function App() {
  const [text, setText] = useState('')
  const [edit, setEdit] = useState('')
  const [tarefas, setTarefas] = useState(0)



  
  const [tudo, SettudoList] = useState([])

 
  useEffect(()=> {
          if(localStorage.list) {
            const itens = JSON.parse(localStorage.getItem('list'))
            SettudoList(itens) 
          }
     

}, [])
  


  const MyClick =  (e)  => {
  e.preventDefault()
  if(!text) {
    return false
  }
  let MyArray = [...tudo,text]
    localStorage.setItem('list', JSON.stringify(MyArray))
  SettudoList([...tudo,text])

  setText('')


  }

  
  return (

    <div className="App">
     <form className='formulario'>
      <h1>lista de tarefas</h1>
       <input  onChange={(e)=>  setText(e.target.value)} value={text}/>
       <button className='btn' onClick={MyClick} >Add</button>
       <p> de {tudo.length} tarefas  você concluiu {tarefas} </p>

        <div>{tudo && tudo.map((list,index) => {
          return (
               <div key={index} className="Mylist">  
                
               <input defaultValue={list} onChange={(e)=> setEdit(e.target.value)}/>
               <Concluido  setTarefas={setTarefas} tarefas={tarefas}/>
               
                <Edit  Myindex={index}  Mytudo={tudo} Edit={edit} SetTudo={SettudoList}>edit</Edit> <Button Myindex={index} Mytudo={tudo} SetTudo={SettudoList}/>
               
             
              </div>
          )
      
        })}    </div>
       
      
          

     </form>
    
    </div>
  );
}

export default App;
