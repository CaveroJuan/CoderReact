import './App.css';
import NavBar from './components/NavBar/NavBar';
import Tienda from './components/Tienda/Tienda';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='PaginaTienda'>
      <NavBar/>
      <Tienda/>
      <Footer/>
    </div>
    
  );
}

export default App;
