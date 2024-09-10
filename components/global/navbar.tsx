import Link from "next/link";
import Image from 'next/image';

 const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white">
      <div className = "flex items-center p-2">
      <Image src="/images/image3.png" alt="LiveDocs Logo" width={40} height={40} />
      <Link href="/">
        <p className="text-black text-xl font-bold">LiveDocs</p>
      </Link>
      </div>
      <div className="flex">
        <Link href="/Home">
          <p className="text-black">Home</p>
        </Link>
        <Link href="/Features">
          <p className="text-black ml-4">Features</p>
        </Link>
        <Link href="/Documents">
          <p className="text-black ml-4">Documents</p>
        </Link>
        <Link href="/Meetings">
          <p className="text-black ml-4">Meetings</p>
        </Link>
        <Link href="/About Us">
          <p className="text-black ml-4">About Us</p>
        </Link>
      </div>

      <div className="flex"> 
      <button className= "text-black px-4 py-2 rounded-lg">
        Sign Up 
      </button>
      <button className= "bg-purple-600 text-black px-4 py-2 rounded-lg ml-4">
        GET STARTED
      </button>
    
    </div>
    </nav>
  );
} 
export default Navbar;