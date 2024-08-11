import './AddToDo.css'
import { useState } from 'react'
// import { useEffect } from 'react';


export default function AddToDo(props) {

    const [formVisbility, setFormVisbility] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function clickHandler(e) {
        setFormVisbility( prevVisibility => !prevVisibility)
    }
    function clickSaveHandler(e) {
        console.log('click Save')
        props.save(name, description)
        setFormVisbility(false)
        
    }

    function handleChangeName(event){

        setName(event.target.value)
        console.log('name', name )
        
        }
        function handleChangeDescription(event){

            setDescription(event.target.value)
            console.log('description', description )
            }


return (
    //aqui la funcion onClick va con una arrow function porque la funcion tiene un argumento
    // <section className='taskCard' onClick={(e) => props.clicker(e)}> asi se hacia para ejecutar la funcion del padre a que viene por props con argumento
    <div className='formBox'>
        <div className='formulario'>
        <button onClick={clickHandler}>+</button>
{
  formVisbility ?    
        <div className='formularioInner'>  

        <label>Nombre</label>
        <input  type="text" required value ={name}  onChange={handleChangeName}></input>

        <label>Descripcion</label>
        <textarea  type="text" required value ={description}  onChange={handleChangeDescription}></textarea> 

        <button className='saveButton' onClick={clickSaveHandler} >guardar tarea</button>
   </div> : null
}
  
        </div>
    </div>
)
}