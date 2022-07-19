import { ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import post from "../../data/post";

function Edit() {
  const [posts, setPosts] = useState<Post[]>(post);
  const { id } = useParams();
  return (
    <div>
      {posts.map((post) => {
        {
          return <div>{post.id}</div>;
        }
      })}
    </div>
  );
}

export default Edit;
