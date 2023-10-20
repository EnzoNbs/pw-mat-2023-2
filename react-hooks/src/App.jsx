import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import Exercicio03 from './exercicios/03'
import Exercicio04 from './exercicios/04'
import Exercicio05 from './exercicios/05'

function App() {

  return (
    <>
      <h1>Exercicios de React Hooks</h1>

      <BrowserRouter>
        <ul style={{listStyleType: 'none' /* Lista sem marcadores*/}}>
          <li> <Link to="/">Página Inicial</Link></li>
          <li> <Link to="/01">Exercicio 01</Link></li>
          <li> <Link to="/02">Exercicio 02</Link></li>
          <li> <Link to="/03">Exercicio 03</Link></li>
          <li> <Link to="/04">Exercicio 04</Link></li>
          <li> <Link to="/05">Exercicio 05</Link></li>
        </ul>

        <hr />

        <div style={{border: '1px solid blue', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/01" element={<Exercicio01 />}></Route>
          <Route path="/02" element={<Exercicio02 />}></Route>
          <Route path="/03" element={<Exercicio03 />}></Route>
          <Route path="/04" element={<Exercicio04 />}></Route>
          <Route path="/05" element={<Exercicio05 />}></Route>
          
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
