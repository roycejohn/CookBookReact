

import logo from '../assets/logo.png';
import { useState } from 'react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <header className='relative'>
            <div className="container mx-auto py-8 flex justify-between items-center">
                <div className="flex items-center">
                    <img className="logo absolute" src={logo} alt="Logo"  />
                </div>

                <nav className="hidden md:flex space-x-4">
                    <a href="/" className="hover:text-gray-100">Home</a>
                    <a href="/recipes" className="hover:text-gray-100">Recipes</a>
                    <a href="/about" className="hover:text-gray-100">About</a>
                </nav>

                <div className=" hidden md:flex px-5">
                    <input
                        type="text"
                        placeholder="Find recipe here"
                        className="px-12 rounded-md text-white focus:outline-none focus:bg-gray-500"
                    />
                    <button type="submit" className="mx-1 border border-green-500 bg-transparent text-green-500 hover:bg-green-700 hover:text-white rounded-md px-3">
                        <i className="fas fa-search"></i>
                    </button>

                    <button className='text-white bg-green-500 ml-12 px-4 py-2 rounded-md hover:bg-green-700'>Sign Up
                    </button>
                    <button className='text-white bg-green-500 ml-4 px-4 py-2 rounded-md hover:bg-green-700'>Log In
                    </button>
                </div>
            
                <div className="md:hidden mx-6">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden py-2 px-4">
                    <input
                        type="text"
                        placeholder="Find recipe here"
                        className="px-12 py-2 ml-12 rounded-md text-white focus:outline-none focus:bg-gray-500"
                    />
                    <button type="submit" className="mx-1 border border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-white rounded-md px-4 py-2">
                        <i className="fas fa-search"></i>
                    </button>
                    <div className='nav-list'>
                        <a href="/" className="block py-2 px-4 font-bold hover:bg-green-500">Home</a>
                        <a href="/recipes" className="block py-2 px-4 font-bold hover:bg-green-500">Recipes</a>
                        <a href="/about" className="block py-2 px-4 font-bold hover:bg-green-500">About</a>
                    </div>
                    <div className='sign-list'>
                        <button className='mx-4 text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700'>Sign Up</button>
                        <button className='text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700'>Log In</button> 
                    </div>
                    
                </div>
            )}
        </header>

        <section className="hero relative flex items-center justify-center bg-cover bg-center" >
            <div className="text-center z-10 relative">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight">Where Flavor Meets Innovation</h1>
                <p className="text-lg md:text-xl text-gray my-4 mx-auto max-w-lg">Dive into a world of culinary delight with our recipe website. Explore a treasure trove of mouthwatering dishes, from quick   weekday meals to indulgent desserts. Discover new flavors, unleash your creativity, and embark on a delicious journey with us.
                </p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Read More</button>
            </div>
        </section>
    </>
    
  );
};

export default Header;
