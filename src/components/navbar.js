import Link from 'next/link';
import Image from 'next/image';
import logo from '../app/icon.png';
import LinkNav from './link-nav';

/**
 * The navigation bar component
 * @returns {JSX.Element} The navbar component
 */
function Navbar (){
  return (
    // The navigation bar container
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl w-50 h-50">
            {/* The logo link */}
            <Link href="/">
              <Image
                priority // Use priority loading to improve performance
                src={logo.src} // The logo image
                className="w-auto h-auto"
                alt="Logo" // The logo alt text
                width= {50}// The logo width
                height= {50}// The logo height
              ></Image>
            </Link>
          </div>
          <div>
            <ul className="flex items-center space-x-8">
              <li>
                <LinkNav href="/meals">Recetas</LinkNav>
              </li>
              <li>
                <LinkNav href="/community">Comunidad</LinkNav>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;