function Register() {
  return (
    <form className="register-form">
      <input type="text" placeholder="Please write your ID ..." name="id"></input>
      <input type="password" placeholder="Please write your Password ..." name="pw"></input>
      <input type="text" placeholder="Name" name="name"></input>
      <div>
        <button>Register</button>
      </div>
    </form>
  )
}

export default Register;