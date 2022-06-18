import post from "../data/post.js";
import { useNavigate, Link } from 'react-router-dom';

function FreeBoard() {

  const navigate = useNavigate();

  return (
    <div>
      {
        post.map((post, index) => {
          return (
            <div className='freeboard-page' key={ index }>
              <h1> { post.title }</h1>
              <p>{ post.date }</p>
              <p>{ post.content }</p>
              <h3>{ post.writer }</h3>
              <button>Delete</button>
              <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
              <button>Change Nickname</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FreeBoard;