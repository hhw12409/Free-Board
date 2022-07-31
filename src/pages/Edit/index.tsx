import { useParams } from 'react-router-dom';
import { postAtom } from '../../atoms/atom';
import { useRecoilState } from 'recoil';

function Edit() {
  const [posts, setPosts] = useRecoilState<Post[]>(postAtom);
  const { id } = useParams<string>();
  return (
    <div>
      {posts.map((post) => {
        return post.id === Number(id) ? (
          <form className="write-form" key={post.id}>
            <input placeholder="Title" name="title" value={post.title}></input>
            <input placeholder="Content" name="content" value={post.content}></input>
            <input placeholder="Writer" name="writer" value={post.writer}></input>
            <input placeholder="Date" name="date" value={post.date}></input>
            <div>
              <button>Submit</button>
            </div>
          </form>
        ) : null;
      })}
    </div>
  );
}

export default Edit;
