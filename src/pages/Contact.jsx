//svg icons for contact
import Devpost from "/devpost.svg";
import Github from "/github.svg";
import Linkedin from "/linkedin.svg";
import Email from "/mail.svg";
import Instagram from "/insta.svg";

//tab for each socmed
import ContactTab from '../components/ContactTab.jsx'

function Contact() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-[url('/followWindows.jpeg')] bg-cover bg-center p-8 "
      id="contact"
    >
      <div className="flex bg-green-200 p-4 rounded-3xl w-9/10 h-8/10 flex-wrap justify-evenly backdrop-blur-[10px] bg-white/6">
        <div className=" text-black text-center p-12 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-7xl font-bold">
            My Contacts
          </h1> 
          <p>Feel free to contact me anytime </p>
        </div>

        <div className=" p-6 rounded-xl items-center bg-[rgba(255,255,255,0.15)] 
         backdrop-blur-4 
         rounded-4xl
         border border-[rgba(255,255,255,0.3)] 
         relative overflow-hidden
         w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          
            <ContactTab Logo={Linkedin} Social="Linkedin" Handle="www.linkedin.com/in/georgia-wu"/>
            <ContactTab Logo={Github} Social="Github" Handle="https://github.com/r9ia"/>
            <ContactTab Logo={Devpost} Social="Devpost" Handle="https://devpost.com/_rgia"/>
            <ContactTab Logo={Instagram} Social="Instagram" Handle="@georgia.wmj"/>
            <ContactTab Logo={Email} Social="Email" Handle="georgiamwu@gmail.com"/>

        </div>
      </div>
    </div>
  );
}

export default Contact;
