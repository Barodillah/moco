import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login
        setTimeout(() => {
            navigate('/dashboard');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#FFFCE4] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ABCC6E]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#FFDEAD]/30 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 border border-[#50734D]/5"
            >
                {/* Left Side - Image/Branding */}
                <div className="hidden md:flex md:w-1/2 bg-[#50734D] p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ABCC6E]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5FCB5]/10 rounded-full blur-2xl" />

                    <div className="relative z-10">
                        <Link to="/" className="flex items-center gap-2 text-[#FFFCE4] hover:text-[#ABCC6E] transition-colors inline-block w-fit">
                            <img src="/logo_light.png" alt="Moco" className="w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tight">Moco</span>
                        </Link>
                    </div>

                    <div className="relative z-10 mt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-[#ABCC6E]/20 text-[#FFFCE4] px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-[#FFFCE4]/10"
                        >
                            <Sparkles size={16} className="text-[#F5FCB5]" /> Selamat Datang Kembali
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFCE4] leading-tight mb-6">
                            Lanjutkan <br />
                            <span className="text-[#ABCC6E]">Karya Hebatmu.</span>
                        </h2>
                        <p className="text-[#FFFCE4]/70 text-lg max-w-md">
                            Akses dashboard Anda dan kelola publikasi flipbook interaktif dengan mudah.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 flex items-center gap-4 text-[#FFFCE4]/50 text-sm">
                        <span>© 2026 Moco</span>
                        <span className="w-1.5 h-1.5 bg-[#ABCC6E] rounded-full"></span>
                        <span>Platform Penerbitan Digital</span>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-10 sm:p-16 flex flex-col justify-center bg-white relative">
                    <div className="md:hidden flex items-center gap-2 mb-8 text-[#50734D]">
                        <img src="/logo_dark.png" alt="Moco" className="w-10 h-10" />
                        <span className="text-2xl font-bold">Moco</span>
                    </div>

                    <div className="mb-10 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-[#50734D] mb-3">Login ke Akun</h3>
                        <p className="text-[#50734D]/60 text-lg">Masukkan kredensial Anda untuk melanjutkan</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                    className="w-full pl-12 pr-4 py-4 bg-[#FFFCE4]/50 border-2 border-[#50734D]/10 rounded-2xl focus:outline-none focus:border-[#ABCC6E] focus:bg-white transition-all text-[#50734D] placeholder:text-[#50734D]/30 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-sm font-bold text-[#50734D]" htmlFor="password">
                                    Password
                                </label>
                                <Link className="text-sm font-bold text-[#ABCC6E] hover:text-[#50734D] transition-colors" to="#">
                                    Lupa Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#50734D]/40">
                                    <Lock size={20} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-[#FFFCE4]/50 border-2 border-[#50734D]/10 rounded-2xl focus:outline-none focus:border-[#ABCC6E] focus:bg-white transition-all text-[#50734D] placeholder:text-[#50734D]/30 font-medium font-mono"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#50734D] text-[#FFFCE4] py-4 rounded-2xl font-bold text-lg hover:bg-[#3d5a3b] transition-colors shadow-lg shadow-[#50734D]/30 flex items-center justify-center gap-2 mt-4 group disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-[#FFFCE4]/30 border-t-[#FFFCE4] rounded-full animate-spin" />
                            ) : (
                                <>Masuk Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </motion.button>
                    </form>

                    <p className="mt-10 text-center text-[#50734D]/60 font-medium text-sm md:text-base">
                        Belum punya akun?{' '}
                        <Link to="/register" className="font-bold text-[#50734D] hover:text-[#ABCC6E] transition-colors underline decoration-2 underline-offset-4 decoration-[#ABCC6E]/30 hover:decoration-[#ABCC6E]">
                            Daftar di sini
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
