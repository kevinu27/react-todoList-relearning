import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainToDo from './components/MainToDo'




function App() {
  const [count, setCount] = useState(0)
  function funt() {
    setCount( Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    console.log(count)
   }
   const ramdonArgument = function() {
    setCount( Math.floor(Math.random() * (10 - 1 + 1)) + 1);
   }
  

  return (
    <>
      <div className='app'>
        <Header title="HEADER22" propFunt={()=>funt(ramdonArgument)} />

      </div>
          <MainToDo></MainToDo>
              {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App