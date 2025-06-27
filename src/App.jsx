import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import MouseMove from './Components/MouseMove';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <MouseMove />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;


