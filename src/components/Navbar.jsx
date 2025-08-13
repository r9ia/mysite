import { Link } from "react-router-dom";

function Navbar(){

    return ( 
    <div className="flex justify-between items-center p-10 text-white text-3xl">
      <button className="px-12 py-2 bg-blue-500 rounded-4xl hover:bg-blue-600 mr-10">
        Home
      </button>

      <div className="space-x-5">
        <button className="px-12 py-2 bg-green-500 rounded-4xl hover:bg-green-600">
        About
      </button>
      <button className="px-12 py-2 bg-green-500 rounded-4xl hover:bg-green-600">
        Works
      </button>
      <button className="px-12 py-2 bg-red-500 rounded-4xl hover:bg-red-900">
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