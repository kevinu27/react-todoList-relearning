import './MainToDo.css'
import { useState } from 'react'
import { useEffect } from 'react';
import ToDo from './ToDo';


export default function MainToDo(props) {
    const [toDoList, settoDoList] = useState([])//inicio el estado como una array en vez de dejarlo solo porque si no da problemas con el map()

    function clickHandler(e) {
        console.log(e)
        console.log('clickhandler')
    }
    function clickHandlerDelete(e, props ) {
        console.log(e)
        console.log('---', props.index)
        console.log('---', props.tarea.task)
        console.log('delete')
        // primero al settoDoList le pasa el prevList que react lo detecta como el estado que ya tiene y se lo pasa como arrow funtion
        //para que se ejecute la funcion de la arrow function si no me equivoco, despues dentro del filter:
        //el item es el elemento que itera y como en map el segundo elemento que se le pasa lo detecta como numero que de iteraciones que lleva
        // en este caso entonces mejor que no se modifique el orden del array del estado toDoList
        //si se cambiase el orden entonces habria que ponerle el id a mano
        settoDoList(prevList => prevList.filter((item, i) => i !== props.index));


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

<ToDo key={index} index={index} tarea={tarea} clicker={clickHandler} delete= {clickHandlerDelete}></ToDo> //aqui el chiclk handler lopaso como props con la prop clickerel 
//index={index} ques estoy pasando aqui y al que se le asigna la posicion del array que esta itetando lo esta generando el map(), que cuando le pasas un segundo argumento a un map
//te devuelve la posicion que está iterando

))}
    </section>
)
}