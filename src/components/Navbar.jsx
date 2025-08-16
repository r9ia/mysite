function Navbar() {
  //scroll to hide header
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-40vh";
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <div
      className="fixed flex items-center p-4 pl-24 text-white text-2xl z-10 min-w-screen
    transition-all ease-in-out duration-300 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgb(0,0,0)_150%)]"
      id="navbar"
    >
      <button
        className="px-8 py-2 bg-orange-500 rounded-4xl hover:bg-orange-600 mr-10"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Home
      </button>

      <div className="space-x-5">
        <button
          className="px-8 py-2 text-black bg-orange-500 rounded-4xl hover:bg-pink-400"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </button>

        <button
          className="px-8 py-2 text-black bg-orange-500 rounded-4xl hover:bg-pink-600"
          onClick={() => {
            document
              .getElementById("works")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Works
        </button>

        <button
          className="px-8 py-2 text-black bg-orange-500 rounded-4xl hover:bg-pink-800"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;

/*<Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link> 
      
      let prevScrollPos = windows.pageYOffset;
      window.onscroll= function(){
    let currentScrollPos = windows.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById('navbar')
    }

  }*/
