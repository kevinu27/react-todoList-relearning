import './ToDoDetail.css'
// import { useState } from 'react'
// import { useEffect } from 'react';


export default function ToDoDetail(props) {

    console.log('props.tarea.visible----', props.tarea.visible)

return (
    //aqui la funcion onClick va con una arrow function porque la funcion tiene un argumento
    // <section className='taskCard' onClick={(e) => props.clicker(e)}> asi se hacia para ejecutar la funcion del padre a que viene por props con argumento
    <>
    <section > 
        <p >X</p>
     <p> {props.tarea.task}</p> 
     <p>  {props.tarea.description}</p> 
        </section>
        </>
 
)
}