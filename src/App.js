import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './util/Navbar';
import MainPage from './routes/MainPage';
import NotFound from './routes/NotFound';
import FreeBoard from './routes/FreeBoard';
import Writing from './routes/Writing';
import Register from './routes/Register';
import Edit from './routes/Edit';
import post from './data/post';
import { useState } from 'react';

function handleEnName(){
  setPosts(posts.enName)
}

function App() {

  const [posts, setPosts] = useState(post);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/freeboard' element={<FreeBoard posts={ posts }/>}/>
        <Route path='/writing' element={<Writing/>}/>
        <Route path='/register' element={<Register/>}/>
        {
          posts.map((_, index) => {
            return (
              <Route path={`/edit/${index}`} element={<Edit posts={ posts[index] }/>}/>
            )
          })
        }
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>    
  );
}

export default App;
