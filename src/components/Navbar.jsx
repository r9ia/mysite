import {useState, useEffect} from "react";

import NavButton from "./NavButton";
import NavLink from "./NavLink";

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

  //checks if the screen is mobile, sets mobile to true if it is
  const [mobile, setMobile] = useState(window.innerWidth < 728);


  useEffect(() =>
    //defining function that updates mobile
    {
      const handleResize = () => {
        setMobile(window.innerWidth < 728);
      };
      handleResize(); //running function

      //whenever the window resizes, handleResize runs
      window.addEventListener("resize", handleResize);

      //cleanupppp
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (

    <div
      className=" fixed z-10 min-w-screen text-white
    transition-all ease-in-out duration-300 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgb(0,0,0)_125%)]"
      id="navbar"
    >

      {mobile ? (
        <h1>hey</h1>

      ):(

      <div className="w-[80%] items-center flex p-4 text-2xl m-auto justify-between pt-8"> 
        <div className="gap-6 flex ">
          <NavButton Text="Logo" Id="landing" />
          <NavButton Text="About" Id="about" />
          <NavButton Text="Projects" Id="works" />
          <NavButton Text="Contacts" Id="contact" />
        </div>

        <div className="flex gap-4">

          <NavLink Name="Linkedin" Link="https://www.linkedin.com/in/georgia-wu/" Source="/linkedin.svg"/>
          <NavLink Name="Github" Link="https://github.com/r9ia" Source="/github.svg"/>
          <NavLink Name="Devpost" Link="https://devpost.com/_rgia" Source="/devpost.svg"/>
          <NavLink Name="Instagram" Link="https://www.instagram.com/georgia.wmj/" Source="/insta.svg"/>
          <NavLink Name="Mail" Link="mailto:georgiamwu@gmail.com" Source="/mail.svg"/>
          
        </div>
      </div>
        
      )
      }

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
