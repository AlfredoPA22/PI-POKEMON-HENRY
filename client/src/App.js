import './App.css';
import { Routes,Route } from 'react-router-dom';
import Landing from './components/landingPage/Landing';
import Home from './components/homePage/Home';
import PokemonDetail from './components/detailPage/PokemonDetail'
import FormPage from './components/formPage/FormPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<PokemonDetail/>}/>
        <Route path='/Form' element={<FormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
