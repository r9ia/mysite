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
      className=" fixed z-10 min-w-screen
    transition-all ease-in-out duration-300 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgb(0,0,0)_125%)]"
      id="navbar">
    
      <div class="w-[80%] items-center flex p-4 text-white text-2xl m-auto justify-between pt-8">

        <div class="gap-6 flex ">
          <button
            className="px-6 bg-orange-500 rounded-4xl hover:bg-orange-600"
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            className="px-8 py-2  bg-orange-500 rounded-4xl hover:bg-pink-400"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </button>

          <button
            className="px-8 py-2  bg-orange-500 rounded-4xl hover:bg-pink-600"
            onClick={() => {
              document
                .getElementById("works")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Works
          </button>

          <button
            className="px-8 py-2 bg-orange-500 rounded-4xl hover:bg-pink-800"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contacts
          </button>
        </div>

        <div className="flex gap-4">

          <a href="https://www.linkedin.com/in/georgia-wu/" target="_blank">
            <img
              src="/linkedin.svg"
              alt="access my linkedin"
              className="w-10 h-10"
            ></img>
          </a>

          <a href="https://github.com/r9ia" target="_blank">
            <img
              src="/github.svg"
              alt="access my github"
              className="w-10 h-10"
            ></img>
          </a>

          <a href="https://devpost.com/_rgia" target="_blank">
            <img
              src="/devpost.svg"
              alt="access my devpost"
              className="w-10 h-10"
            ></img>
          </a>

          <a href="https://www.instagram.com/georgia.wmj/" target="_blank">
            <img
              src="/insta.svg"
              alt="access my instagram"
              className="w-10 h-10"
            ></img>
          </a>

          <a href="mailto:georgiamwu@gmail.com" target="_blank">
            <img
              src="/mail.svg"
              alt="access my gmail"
              className="w-10 h-10"
            ></img>
          </a>
        </div>
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
