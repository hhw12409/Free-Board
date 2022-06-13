import data from "../data/post.js";

console.log(data)

function FreeBoard() {
  return (
    <div>
      {
        data.map((data, index) => {
          return (
            <div className='freeboard-page'>
              <h1> { data.title }</h1>
              <p>{ data.date }</p>
              <p>{ data.content }</p>
              <h3>{ data.writer }</h3>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FreeBoard;