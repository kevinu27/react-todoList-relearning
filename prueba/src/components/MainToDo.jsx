import './MainToDo.css'
import { useState } from 'react'
import { useEffect } from 'react';
import ToDo from './ToDo';
import ToDoDetail from './ToDoDetail';
import AddToDo from './AddToDo'



export default function MainToDo(props) {
    const [toDoList, settoDoList] = useState([])//inicio el estado como una array en vez de dejarlo solo porque si no da problemas con el map()
    const [detailVisible, setDetailVisible] = useState({ task: null, visible: false });

    function clickHandler(e, props) {

        const clickedTask = props.tarea;
        setDetailVisible(prevState => ({
            task: clickedTask,
            visible: prevState.task === clickedTask ? !prevState.visible : true 
            //aqui con el valor anterior del estado comprueba si era igual al estado de ahora, si lo es lo cambio al contrario, 
            //si no es igual porque es la primera iteración lo pongo a true
        }));

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


    function closeClickerHandler(e, props) {

        console.log('ddfsdfdsf---', props.tarea)
        const clickedTask = props.tarea;

        setDetailVisible(prevState => ({
            task: clickedTask,
            visible: prevState.task === clickedTask ? !prevState.visible : true 
            //aqui con el valor anterior del estado comprueba si era igual al estado de ahora, si lo es lo cambio al contrario, 
            //si no es igual porque es la primera iteración lo pongo a true
            //pongo parentesis antes del objeto para que entienda que es un objeto y los corchetes de arrow function de mas de una linea que se le pone a las arrow functions creo
        }))

    }


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

  function saveTask(name, description) {
    const actualToDoList = [...toDoList, {
        task: name,
        description: description
    }]
    // console.log('actualToDoList', actualToDoList)
    settoDoList(actualToDoList)
    // console.log('click saveTask toDoList', toDoList)

}

return (
    <>
    
<AddToDo save={saveTask}></AddToDo>
    <section className='mainTodo'>
    < div className='listHolder'>
    {toDoList.map((tarea, index) => (

<ToDo key={index} index={index} tarea={tarea} clicker={clickHandler} delete= {clickHandlerDelete}></ToDo> //aqui el chiclk handler lopaso como props con la prop clicker el 
//index={index} ques estoy pasando aqui y al que se le asigna la posicion del array que esta iterando lo esta generando el map(), que cuando le pasas un segundo argumento a un map
//te devuelve la posicion que está iterando

))}
</div>
<div>

{detailVisible.visible && detailVisible.task ? 
    <ToDoDetail tarea={detailVisible.task} closeClicker={closeClickerHandler} ></ToDoDetail> : null
}
</div>
    </section>
    </>
)
}