import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/detail:productid' element={<ItemDetailContainer />} />            
          </Routes>
        </BrowserRouter>
        <CartWidget />
    </div>

  );
}

export default App;
