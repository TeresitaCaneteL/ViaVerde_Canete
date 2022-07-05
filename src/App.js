import './App.css';
import Navbar from './components/nav/Navbar';
import ItemDetail from './components/itemDetail/ItemDetail';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer/>
     <Routes>
     <Route path="/detail/:charId" element={<ItemDetail/>}></Route>
     </Routes>


    </div>
  );
}

export default App;
