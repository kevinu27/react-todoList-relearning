import './ToDo.css'
// import { useState } from 'react'
// import { useEffect } from 'react';


export default function ToDo(props) {


return (
    //aqui la funcion onClick va con una arrow function porque la funcion tiene un argumento
    <section className='taskCard'onClick={(e) => props.clicker(e)}> 
 <p> {props.tarea.task}</p> 
 <p>  {props.tarea.description}</p> 
    </section>
)
}