import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">블로그</Link>
      <Link to="freeboard">자유게시판</Link>
      <Link to="/write">글쓰기</Link>
      <Link to="register">회원가입</Link>
    </nav>
  );
}

export default Navbar;
