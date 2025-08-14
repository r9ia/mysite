import { Link } from "react-router-dom";



function Navbar(){

    return ( 
    <div className="fixed flex justify-between items-center p-4 text-white text-3xl z-10  min-w-screen">

      <button className="px-12 py-2 bg-orange-500 rounded-4xl hover:bg-orange-600 mr-10"
      onClick={() => {
        window.scroll({
            top:0,
            behavior: 'smooth'
        })
        }}>
        Home
      </button>

      <div className="space-x-5">
        <button className="px-8 py-2 text-black bg-pink-200 rounded-4xl hover:bg-pink-400"
        onClick={() =>{
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}>
        About
      </button>

      <button className="px-8 py-2 text-black bg-pink-400 rounded-4xl hover:bg-pink-600"
      onClick={() =>{
          document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
        }}>
        Works
      </button>

      <button className="px-8 py-2 text-black bg-pink-600 rounded-4xl hover:bg-pink-800"
      onClick={() =>{
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>
        Contact
      </button>
      </div>
      
    </div> );
}

export default Navbar

/*<Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link> */