import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className='navbar'>
        <a href='/'>블로그</a>
        <ul>
          <li><a onClick={()=> { navigate('/freeboard') }}>자유게시판</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/freeboard' element={<FreeBoard/>}></Route>
      
      </Routes>
    </div>    
  );
}


function FreeBoard() {
  return (
    <div>Freeboard page</div>
  )
}

function MainPage() {
  return (
    <div>MainPage</div>
  )
}
export default App;
