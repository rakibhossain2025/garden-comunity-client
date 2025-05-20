import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
const fa = fetch('http://localhost:4710/user').then(res => res.json())
console.log(fa)
function App() {
  return (<>
    <Header />
    <Banner />
    <Footer
  </>)
}

export default App
