import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={'Bienvenido'}/>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='CartWidget'>
        <CartWidget />
      </div>
    </div>

  );
}

export default App;
