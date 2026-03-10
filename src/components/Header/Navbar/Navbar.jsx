import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <>
            <nav className='bg-white border-b border-[#E9E9E9] py-3'>
                {/* NavBar */}
                <div className='container mx-auto flex items-center gap-4 md:gap-0 flex-col lg:flex-row justify-between px-3'>
                    {/* Logo */}
                    <div>
                        <h2 className='font-bold text-2xl text-[#130B2D]'>CS — Ticket System</h2>
                    </div>

                    {/* NavItems */}
                    <div className='flex items-center gap-16'>
                        {/* Items */}
                        <ul className='hidden md:flex items-center gap-8 text-base text-black/90'>
                            <li className='hover:text-[#632EE3]'><a href="">Home</a></li>
                            <li className='hover:text-[#632EE3]'><a href="">FAQ</a></li>
                            <li className='hover:text-[#632EE3]'><a href="">Changelog</a></li>
                            <li className='hover:text-[#632EE3]'><a href="">Blog</a></li>
                            <li className='hover:text-[#632EE3]'><a href="">Download</a></li>
                            <li className='hover:text-[#632EE3]'><a href="">Contact</a></li>
                        </ul>

                        {/* Hamburger Icon */}
                        <div onClick={handleMenu} className='md:hidden border-2 border-black p-1'>
                            <GiHamburgerMenu className='text-[#632EE3]' size={24} />
                        </div>

                        {/* Button */}
                        <button className='flex items-center gap-2 font-semibold text-base text-white px-4 py-3 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer'>
                            <FaPlus size={14} /> New Ticket
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {
                openMenu && (
                    <div className='md:hidden bg-white border border-[#E9E9E9] shadow-lg rounded-lg mt-2'>
                        <ul className='flex flex-col gap-4 px-6 py-5 text-black/90'>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">Home</a></li>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">FAQ</a></li>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">Changelog</a></li>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">Blog</a></li>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">Download</a></li>
                            <li className='hover:bg-[#632EE3] hover:text-white p-3 cursor-pointer'><a href="">Contact</a></li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Navbar;