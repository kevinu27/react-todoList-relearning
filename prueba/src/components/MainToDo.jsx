import './MainToDo.css'
import { useState } from 'react'
import { useEffect } from 'react';
import ToDo from './ToDo';


export default function MainToDo(props) {
    const [toDoList, settoDoList] = useState([])

    function clickHandler(e) {
        console.log(e)
    }

const descriptcion = "lo que sea"
useEffect(() => {
    // Código que se ejecuta cuando el componente se monta
console.log('mounted')
settoDoList(
    [
        {
        task: "limpiar",
        description: "limpiar salon"

        },
        {
            task: "arreglar impresora",
            description: "cambiar extrusor"

        },
    ]
)
    // return () => {
    //   // Código que se ejecuta cuando el componente se desmonta (opcional)
    // };
  }, []);

return (
    <section className='listHolder'>
    {toDoList.map((tarea, index) => (

<ToDo key={index} tarea={tarea} clicker={clickHandler}></ToDo> //aqui el chiclk handler lopaso como props con la prop clicker

))}
    </section>
)
}