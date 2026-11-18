
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">DibiTech.</h2>

      <div className="nav-menu">
        <a href="#home">Home</a>
        <a href="#products">Explore</a>
        <a href="#categories">Categories</a>
      </div>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
