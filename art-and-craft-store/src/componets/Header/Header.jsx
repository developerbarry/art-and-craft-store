import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useState } from 'react';
const Header = () => {

    const [display, setDisplay] = useState(false)


    return (
        <header>

            <div className="shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
                <nav className="container mx-auto relative px-4 py-4 font-yan font-normal flex justify-between items-center bg-white">
                    <Link className="text-3xl text-[#3e454c] font-normal leading-none flex items-center gap-x-3" href="#">
                        <img className="w-16 object-contain" src={logo} alt="" />
                        <span>Art & craft</span>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setDisplay(true)}
                            className="flex items-center text-blue-600 p-3 cursor-pointer">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                        <li><NavLink className="text-sm md:text-xl text-[#3e454c] font-medium hover:text-[#0EB2E7]">Home</NavLink></li>
                        <li><NavLink className="text-sm md:text-xl text-[#3e454c] font-medium hover:text-[#0EB2E7]">All Art & craft Items</NavLink></li>
                        <li><NavLink className="text-sm md:text-xl text-[#3e454c] font-medium hover:text-[#0EB2E7]">Add Craft Item</NavLink></li>
                        <li><NavLink className="text-sm md:text-xl text-[#3e454c] font-medium hover:text-[#0EB2E7]">My Art & Craft List</NavLink></li>
                        <li><NavLink className="text-sm md:text-xl text-[#3e454c] font-medium hover:text-[#0EB2E7]">Contact</NavLink></li>
                    </ul>
                    <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm md:text-xl text-gray-900 font-bold  rounded-xl transition duration-200" >Sign In</Link>
                    <Link className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm md:text-xl text-white font-bold rounded-xl transition duration-200" >Sign up</Link>
                </nav>
            </div>


            {/* Mobile Menu Bar */}
            <div className={`${display === true ? "" : "hidden"} relative z-50`}>
                <div
                    onClick={() => setDisplay(false)}
                    className="fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 font-yan flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none">
                            <img className="w-16 object-contain mb-2" src={logo} alt="logo" />
                            <span>Art & craft</span>
                        </Link>
                        <button
                            onClick={() => setDisplay(false)}
                        >

                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-lg font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-[#0eb2e7] rounded">Home</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-lg font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-[#0eb2e7] rounded">All Art & craft Items</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-lg font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-[#0eb2e7] rounded">Add Craft Item</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-lg font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-[#0eb2e7] rounded">My Art & Craft List</NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-lg font-semibold text-[#3e454c] hover:bg-blue-50 hover:text-[#0eb2e7] rounded">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link className="block px-4 py-4 mb-3 leading-loose text-lg text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">Sign in</Link>
                            <Link className="block px-4 py-3 mb-2 leading-loose text-lg text-center text-white font-semibold bg-[#0eb2e7] hover:bg-[#1195bf]  rounded-xl">Sign Up</Link>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2024</span>
                        </p>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;

