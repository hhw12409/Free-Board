import { Link } from 'react-router-dom';
import { postAtom } from '../../atoms/atom';
import { useRecoilValue } from 'recoil';

function FreeBoard() {
  const posts = useRecoilValue<Post[]>(postAtom);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="freeboard-page" key={post.id}>
            <h1> {post.title}</h1>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <h3>{post.writer}</h3>
            <button>Delete</button>
            <Link to={`/edit/${post.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default FreeBoard;
