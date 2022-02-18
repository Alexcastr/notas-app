import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {

    const [menuHamb, setMenuHamb] = useState(false)

    return (
        
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Notas APP</span>
      </div>
      <div id="esconder" onClick={()=>{setMenuHamb(!menuHamb)}} className="block lg:hidden">
        <button type="button"  className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div id="expandir" className={`w-full block flex-grow ${menuHamb ? "expandDown": "expandir"}`}>
        <div className="text-sm lg:flex-grow">
        <Link href="/">
         <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
         <i className="text-xl mr-1 fa-solid fa-house"></i> <span>Home</span> 
          </a>
         </Link> 
         <Link href="/new">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          <i className="text-xl mr-1 fa-solid fa-book"></i> <span>Note</span> 
          </a>
          </Link>
          
        </div>
      </div>
    </nav>
    );
  };
  
export default Navbar;