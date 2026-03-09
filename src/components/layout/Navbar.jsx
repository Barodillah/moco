import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFCE4]/90 backdrop-blur-md shadow-sm py-3' : 'bg-[#FFFCE4] md:bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo_dark.png" alt="Moco" className="w-8 h-8" />
                    <span className="text-xl font-black text-[#50734D]">Moco</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-[#50734D] font-medium">
                    <Link to="/explore" className="hover:text-[#ABCC6E] transition-colors">Jelajahi</Link>
                    <a href="/#fitur" className="hover:text-[#ABCC6E] transition-colors">Fitur</a>
                    <Link to="/register">
                        <button className="bg-[#50734D] text-[#FFFCE4] px-6 py-2.5 rounded-full hover:bg-[#3d5a3b] transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                            Mulai Gratis <ArrowRight size={18} />
                        </button>
                    </Link>
                    <Link to="/login" className="hover:text-[#ABCC6E] transition-colors font-bold">Login</Link>
                </div>

                <button className="md:hidden text-[#50734D]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#FFFCE4] border-t border-[#50734D]/10 p-6 flex flex-col gap-4 shadow-xl"
                    >
                        <Link to="/explore" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-[#50734D]">Jelajahi</Link>
                        <a href="/#fitur" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-[#50734D]">Fitur</a>
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-[#50734D]">Login</Link>
                        <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                            <button className="bg-[#50734D] w-full text-[#FFFCE4] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4">
                                Mulai Gratis <ArrowRight size={20} />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
