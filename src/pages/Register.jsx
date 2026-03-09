import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock register
        setTimeout(() => {
            navigate('/dashboard');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#FFFCE4] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ABCC6E]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F5FCB5]/50 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row-reverse overflow-hidden relative z-10 border border-[#50734D]/5"
            >
                {/* Right Side - Image/Branding (Reversed for Register) */}
                <div className="hidden md:flex md:w-1/2 bg-[#F5FCB5] p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-[#ABCC6E]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-[-10%] w-64 h-64 bg-white/40 rounded-full blur-2xl" />

                    <div className="relative z-10 flex justify-end">
                        <Link to="/" className="flex items-center gap-2 text-[#50734D] hover:text-[#ABCC6E] transition-colors inline-block w-fit">
                            <img src="/logo_dark.png" alt="Moco" className="w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tight">Moco</span>
                        </Link>
                    </div>

                    <div className="relative z-10 mt-16 text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-white/60 text-[#50734D] px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/50"
                        >
                            <Zap size={16} className="text-[#ABCC6E]" /> Cepat & Gratis
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#50734D] leading-tight mb-6">
                            Mulai Perjalanan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50734D] to-[#ABCC6E]">Digitalmu.</span>
                        </h2>
                        <p className="text-[#50734D]/70 text-lg max-w-md ml-auto">
                            Bergabunglah dengan ribuan kreator lain yang telah mengubah cara mereka membagikan dokumen.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 flex items-center justify-end gap-4 text-[#50734D]/50 text-sm font-medium">
                        <span>Platform Penerbitan Digital</span>
                        <span className="w-1.5 h-1.5 bg-[#ABCC6E] rounded-full"></span>
                        <span>© 2026 Moco</span>
                    </div>
                </div>

                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-10 sm:p-14 flex flex-col justify-center bg-white relative">
                    <div className="md:hidden flex items-center gap-2 mb-8 text-[#50734D]">
                        <img src="/logo_dark.png" alt="Moco" className="w-10 h-10" />
                        <span className="text-2xl font-bold">Moco</span>
                    </div>

                    <div className="mb-8 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-[#50734D] mb-3">Daftar Akun Baru</h3>
                        <p className="text-[#50734D]/60 text-lg">Hanya butuh beberapa detik saja</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#50734D] ml-1" htmlFor="name">
                                Nama Lengkap
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#50734D]/40">
                                    <User size={20} />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Budi Santoso"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#FFFCE4]/50 border-2 border-[#50734D]/10 rounded-2xl focus:outline-none focus:border-[#ABCC6E] focus:bg-white transition-all text-[#50734D] placeholder:text-[#50734D]/30 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#50734D] ml-1" htmlFor="email">
                                Alamat Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#50734D]/40">
                                    <Mail size={20} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="nama@email.com"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#FFFCE4]/50 border-2 border-[#50734D]/10 rounded-2xl focus:outline-none focus:border-[#ABCC6E] focus:bg-white transition-all text-[#50734D] placeholder:text-[#50734D]/30 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#50734D] ml-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#50734D]/40">
                                    <Lock size={20} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#FFFCE4]/50 border-2 border-[#50734D]/10 rounded-2xl focus:outline-none focus:border-[#ABCC6E] focus:bg-white transition-all text-[#50734D] placeholder:text-[#50734D]/30 font-medium font-mono"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#ABCC6E] text-[#50734D] py-4 rounded-2xl font-black text-lg hover:bg-[#9aba5e] transition-colors shadow-lg shadow-[#ABCC6E]/30 flex items-center justify-center gap-2 mt-6 group disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-[#50734D]/30 border-t-[#50734D] rounded-full animate-spin" />
                            ) : (
                                <>Buat Akun <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </motion.button>
                    </form>

                    <p className="mt-8 text-center text-[#50734D]/60 font-medium text-sm md:text-base">
                        Sudah punya akun?{' '}
                        <Link to="/login" className="font-bold text-[#50734D] hover:text-[#ABCC6E] transition-colors underline decoration-2 underline-offset-4 decoration-[#ABCC6E]/30 hover:decoration-[#ABCC6E]">
                            Masuk
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
