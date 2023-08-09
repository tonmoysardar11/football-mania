
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Leagues from './components/pages/Leagues';
import Country from './components/pages/Country';
import Teams from './components/pages/Teams';
import Transfer from './components/pages/Transfer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/> } />
      <Route exact path='/league' element={<Leagues/> } />
      <Route exact path='/country' element={<Country/> } />
      <Route exact path='/teams' element={<Teams/> } />
      <Route exact path='/transfers' element={<Transfer/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
