import './App.css';
import AddVideo from './Components/addVideo';
import Home from './Components/home';
import Navbar from './Components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
    
     <Routes>
      <Route element={ <Home/>} path='/' />
      <Route element={  <AddVideo />} path='/add-video' />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
