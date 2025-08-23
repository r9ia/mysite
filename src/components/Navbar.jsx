import { useState, useEffect, useRef } from "react";

import NavbarM from "./NavbarM";
import NavbarC from "./NavbarC";

function Navbar() {
  //scroll to hide header
  const navbarRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (navbarRef.current) {
        if (prevScrollPos > currentScrollPos) {
          navbarRef.current.style.top = "0";
        } else {
          navbarRef.current.style.top = "-40vh";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  //checks if the screen is mobile, sets mobile to true if it is
  const [mobile, setMobile] = useState(window.innerWidth < 1200);

  useEffect(() =>
    //defining function that updates mobile
    {
      const handleResize = () => {
        setMobile(window.innerWidth < 1200);
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
      ref={navbarRef}
    >
      {mobile ? <NavbarM /> : <NavbarC />}
    </div>
  );
}

export default Navbar;
