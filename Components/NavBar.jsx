import Link from "next/link";
import Image from 'next/image'


const NavBar = () => {
    return (
        <nav>
            <div className="logo">
            <Image src="/logo.png" alt="logo" width={200}
      height={150}/>
            </div>
            
           <Link href="/"><a>Home </a></Link>
           <Link href="/About"><a>About </a></Link>
            <Link href="/Contact"><a>Contact </a></Link>
        </nav>
    )
}

export default NavBar
