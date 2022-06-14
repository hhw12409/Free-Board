import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './util/Navbar';
import MainPage from './routes/MainPage';
import NotFound from './routes/NotFound';
import FreeBoard from './routes/FreeBoard';
import Writing from './routes/Writing';
import Register from './routes/Register';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/freeboard' element={<FreeBoard/>}/>
        <Route path='/writing' element={<Writing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>    
  );
}

export default App;
