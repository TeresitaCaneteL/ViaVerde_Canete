import './App.css';
import Navbar from './components/nav/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NotFound from './components/nav/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
     <Route path="/ViaVerde_Canete" element={< ItemListContainer/>}></Route>
     <Route path="/" element={< ItemListContainer/>}>Home</Route>
     <Route path="/product/:itemId" element={ <ItemDetailContainer />} />
     <Route path="*" element={<NotFound/>}></Route>
     </Routes>


    </div>
  );
}

export default App;
