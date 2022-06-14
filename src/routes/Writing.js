function Writing() {
  return (
    <form className="write-form">
      <input placeholder="Title" name="title"></input>
      <input placeholder="Content" name="content"></input>
      <input placeholder="Writer" name="writer"></input>
      <input placeholder="Date" name="date"></input>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Writing;