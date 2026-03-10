import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-black'>
            {/* footer top container */}
            <div className='container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr]  gap-12 text-[#A1A1AA] text-base py-10 lg:py-20'>
                {/* col 1 */}
                <div className='xl:pr-20'>
                    <h2 className='font-bold text-2xl text-white mb-4'>CS — Ticket System</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                {/* col 2 */}
                <div>
                    <h2 className='font-medium text-xl text-white mb-4'>Company</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                {/* col 3 */}
                <div>
                    <h2 className='font-medium text-xl text-white mb-4'>Services</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                {/* col 4 */}
                <div>
                    <h2 className='font-medium text-xl text-white mb-4'>Information</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                {/* col 5 */}
                <div>
                    <h2 className='font-medium text-xl text-white mb-4'>Social Links</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <FaSquareXTwitter />
                            @CS — Ticket System
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaLinkedin />
                            @CS — Ticket System
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaFacebook />
                            @CS — Ticket System
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaEnvelope />
                            support@cst.com
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom container */}
            <div className='container mx-auto border-t border-[#E5E7EB]/20'>
                <p className='text-base text-[#FAFAFA] text-center py-7'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;