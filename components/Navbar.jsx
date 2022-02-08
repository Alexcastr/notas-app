import Link from 'next/link';


const Navbar = () => {
    return <nav>
        <Link href="/"><a> Home</a>
        </Link>
        <Link href="/new">
            <a> Creando</a>
        </Link>
    </nav>;
  };
  
export default Navbar;