import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header'
import MouseMove from './Components/MouseMove'
import { useEffect, useState } from 'react'

function App() {
  const [switchDOL, SetSwitchDOL] = useState(false)
  //DOL === Dark or light
  useEffect(() => {

    if (switchDOL) {
      document.documentElement.classList.add("dark")
    } else {

      document.documentElement.classList.remove("dark")
    }


  }, [switchDOL])

  return (<>
    <MouseMove ></MouseMove>
      <Header switchDOL={switchDOL} SetSwitchDOL={SetSwitchDOL} />
      {/* {switchDOL ? '🌙 Dark Mode' : '☀️ Light Mode'} */}
      <Outlet />
  </>)
}

export default App
