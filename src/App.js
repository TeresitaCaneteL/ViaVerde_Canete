import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting="Bienvenido a mi página"/>
    </div>
  );
}

export default App;
