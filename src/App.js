import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './util/Navbar';
import MainPage from './routes/MainPage';
import NotFound from './routes/NotFound';
import FreeBoard from './routes/FreeBoard';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/freeboard' element={<FreeBoard/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>    
  );
}

export default App;
