import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Exercicio01 from './exercicios/01'

function App() {

  return (
    <>
      <h1>Exercicios de React Hooks</h1>

      <BrowserRouter>
        <ul style={{listStyleType: 'none' /* Lista sem marcadores*/}}>
          <li> <Link to="/">Página Inicial</Link></li>
          <li> <Link to="/01">Exercicio 01</Link></li>
        </ul>

        <hr />

        <div style={{border: '1px solid blue', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/01" element={<Exercicio01 />}></Route>
          
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
