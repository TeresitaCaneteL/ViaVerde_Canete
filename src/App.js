import './App.css';
import Navbar from './components/nav/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NotFound from './components/nav/NotFound'
import { CartProvider } from './components/context/Context'
import { Routes, Route} from 'react-router-dom';



function App() {
  return (
    <CartProvider>
    <div className="App">
     <Navbar/>
     <Routes>
     {/*<Route path="/ViaVerde_Canete" element={< ItemListContainer/>}></Route>*/}
     <Route path="/" element={< ItemListContainer/>}>Home</Route>
     <Route path="/category/:catId" element={< ItemListContainer/>}>Home</Route>
     <Route path="/product/:itemId" element={ <ItemDetailContainer />} />
     <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
