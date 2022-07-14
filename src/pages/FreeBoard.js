import { Link } from 'react-router-dom';

function FreeBoard({posts}) {

  return (
    <div>
      {
        posts.map((post) => {
          return (
            <div className='freeboard-page' key={ posts.id }>
              <h1> { post.title }</h1>
              <p>{ post.date }</p>
              <p>{ post.content }</p>
              <h3>{ post.writer }</h3>
              <button>Delete</button>
              <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
              <button>Change English name</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FreeBoard;