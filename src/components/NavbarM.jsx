import {useState} from "react";

import NavButton from "./NavButton";
import NavLink from "./NavLink";

function NavbarM(){

    //mobile menu check if open/close
    const [menu, setMenu] = useState(false);
    function toggleMenu(){
      setMenu(prev => !prev); //setMenu is opposite of what it was b4
    }
    
    return <>
    <div className="w-[90%] m-auto flex justify-between p-4 text-xl">
          <NavButton Text="Logo" Id="landing" />
          <button className="bg-orange-500 rounded-3xl text-2xl z-12 hover:bg-orange-700"
          onClick={toggleMenu}> <pre> ☰ </pre></button>
        </div>

        
          <div className={`fixed inset-0 backdrop-blur-[10px] bg-white/6 min-w-screen min-h-screen transition-all duration-300 ease-in-out
          ${menu ? "opacity-100 pointer-events-auto" : "opacity-0  pointer-events-none"}
  }`}>
            <div className="flex flex-col items-center pt-24 gap-8">
              <NavButton Text="About" Id="about" onClick={toggleMenu}/>
              <NavButton Text="Projects" Id="works" onClick={toggleMenu}/>
              <NavButton Text="Contacts" Id="contact" onClick={toggleMenu}/>
            </div>
            <div className="flex justify-center gap-8 pt-16">
              <NavLink Name="Linkedin" Link="https://www.linkedin.com/in/georgia-wu/" Source="/linkedin.svg"/>
              <NavLink Name="Github" Link="https://github.com/r9ia" Source="/github.svg"/>
              <NavLink Name="Devpost" Link="https://devpost.com/_rgia" Source="/devpost.svg"/>
              <NavLink Name="Instagram" Link="https://www.instagram.com/georgia.wmj/" Source="/insta.svg"/>
              <NavLink Name="Mail" Link="mailto:georgiamwu@gmail.com" Source="/mail.svg"/>
            </div>
          </div>

        
    </>
    
}

export default NavbarM;