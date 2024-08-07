import './ToDoDetail.css'
// import { useState } from 'react'
// import { useEffect } from 'react';


export default function ToDoDetail(props) {

    console.log('props.tarea.visible----', props.tarea.visible)


    
    const closeClicker = (e) => { // lo hago asi diferente a la funcion clicker para poder añadirle el stop.propagation y que no me ejecute las dos funciones
        // e.stopPropagation(); // 
        props.closeClicker( e, props);
        
    };

return (
    //aqui la funcion onClick va con una arrow function porque la funcion tiene un argumento
    // <section className='taskCard' onClick={(e) => props.clicker(e)}> asi se hacia para ejecutar la funcion del padre a que viene por props con argumento
    <>
    <section > 
        <p onClick={closeClicker}>X</p>
     <p> {props.tarea.task}</p> 
     <p>  {props.tarea.description}</p> 
        </section>
        </>
)
}