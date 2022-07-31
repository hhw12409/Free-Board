function Register() {
  return (
    <form className="register-form">
      <input type="text" placeholder="Please write your ID ..." name="id" />
      <input type="password" placeholder="Please write your Password ..." name="pw" />
      <input type="password" placeholder="Please write your Password onemore..." name="pw-check" />
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Nickname" name="nickname" />
      <div>
        <button>Register</button>
      </div>
    </form>
  );
}

export default Register;
