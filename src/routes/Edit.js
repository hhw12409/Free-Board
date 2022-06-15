function Edit() {
  return (
    <form className="write-form">
      <input placeholder="Title" name="title"></input>
      <input placeholder="Content" name="content"></input>
      <input placeholder="Writer" name="writer"></input>
      <input placeholder="Date" name="date"></input>
      <div>
        <button>Edit</button>
      </div>
    </form>
  )
}

export default Edit;