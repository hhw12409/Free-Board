import { useSetRecoilState } from 'recoil';
import { postAtom } from '../../atoms/atom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Write() {
  const navigate = useNavigate();
  const setPost = useSetRecoilState(postAtom);
  const { register, handleSubmit } = useForm<Post>();

  const handleValid = ({ title, content, writer, date, enName }: Post) => {
    setPost((prev) => [{ id: Date.now(), title, content, date, writer, enName }, ...prev]);
    navigate(-1);
  };
  return (
    <form className="write-form" onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('title', {
          required: true,
        })}
        placeholder="Title"
      />
      <input {...register('content', { required: true })} placeholder="Content" name="content" />
      <input {...register('writer')} placeholder="Writer" name="writer" />
      <input {...register('date')} placeholder="Date" name="date" />
      <input {...register('enName')} placeholder="English-Name" name="enName" />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Write;
