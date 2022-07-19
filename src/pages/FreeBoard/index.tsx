import { useState } from "react";
import { Link } from "react-router-dom";
import post from "../../data/post";

function FreeBoard() {
  const [posts, setPosts] = useState<Post[]>(post);
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
