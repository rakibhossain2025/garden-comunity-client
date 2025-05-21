import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header'
import MouseMove from './Components/MouseMove'

function App() {
  return (<>
    <MouseMove />
    <Header />
    <Outlet />
  </>)
}

export default App
