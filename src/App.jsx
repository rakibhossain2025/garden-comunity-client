import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import MouseMove from './Components/MouseMove';

function App() {
  return (
    <>
      <MouseMove />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;


