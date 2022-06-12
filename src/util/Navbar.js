import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <a href='/'>블로그</a>
      <ul>
        <li><a onClick={()=> { navigate('/freeboard') }}>자유게시판</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;