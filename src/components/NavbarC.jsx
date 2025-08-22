
function NavbarC(){
    return <div class="w-[80%] flex p-4 text-2xl m-auto justify-between pt-8"> 
          <div class="gap-6 flex ">
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
}

export default NavbarC
