
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
       <Routes>
           <Route path='/' element={<Layout/>}>
             <Route index element={<Dashboard/>}/>
           </Route>
       </Routes>
  )
}

export default App
