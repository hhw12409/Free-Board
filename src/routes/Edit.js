function Edit(props) {

  console.log(props.posts)

  return (
    <form className="write-form">
      {
        <>
          <input type="hidden" value={props.posts.id}></input>
          <input placeholder="Title" name="title" value={props.posts.title}></input>
          <input placeholder="Content" name="content" value={props.posts.content}></input>
          <input placeholder="Writer" name="writer" value={props.posts.writer}></input>
          <input placeholder="Date" name="date" value={props.posts.date}></input>
        </>
      }
      
      <div>
        <button>Edit</button>
      </div>
    </form>
  )
}

export default Edit;