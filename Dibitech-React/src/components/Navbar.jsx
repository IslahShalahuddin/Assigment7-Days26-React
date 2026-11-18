import cartIcon from "../assets/iconkeranjang.png";
function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-3 py-3 px-10 bg-[#070b17]">
      <div className="flex items-center gap-3">
        <span className="block w-6 h-6 rounded-sm bg-white"></span>
        <h2 className="text-white text-xl font-semibold sm:text-2xl">DibiTech</h2>
      </div>
      <div className="hidden items-center justify-center gap-7 text-[#928788] md:flex">
        <a href="#home">Home</a>
        <a href="#products">Explore</a>
        <a href="#categories">Categories</a>
      </div>
      <button className="flex items-center justify-center text-white gap-2 rounded-full bg-[#192135] px-5 py-2 hover:bg-[#262b3d]">
        <img src={cartIcon} alt="cart" className="w-5 h-5" />
        Cart
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#1558ff]">0</span>
      </button>
    </nav>
  );
}

export default Navbar;
