import data from "../data/post.js";
import { useNavigate } from 'react-router-dom';

function FreeBoard() {

  const navigate = useNavigate();

  return (
    <div>
      {
        data.map((data, index) => {
          return (
            <div className='freeboard-page' key={ index }>
              <h1> { data.title }</h1>
              <p>{ data.date }</p>
              <p>{ data.content }</p>
              <h3>{ data.writer }</h3>
              <button>Delete</button>
              <button onClick={() => {
                { navigate('/Edit') }
              }}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FreeBoard;