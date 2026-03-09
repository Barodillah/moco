import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Library, BarChart2, Settings, Menu, X, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Overview' },
        { path: '#', icon: <Library size={20} />, label: 'Koleksi Saya' },
        { path: '#', icon: <BarChart2 size={20} />, label: 'Statistik' },
        { path: '#', icon: <Settings size={20} />, label: 'Pengaturan' },
    ];

    return (
        <div className="min-h-screen bg-[#FFFCE4] flex text-[#50734D] font-sans">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-[#50734D]/20 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-[#50734D]/10 flex flex-col transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                {/* Brand */}
                <div className="h-20 flex items-center px-8 border-b border-[#50734D]/5">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo_dark.png" alt="Moco" className="w-10 h-10" />
                        <span className="text-2xl font-black tracking-tight text-[#50734D]">Moco</span>
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="flex-1 overflow-y-auto py-8 lg:px-6 px-4 space-y-2">
                    <p className="px-4 text-xs font-bold text-[#50734D]/40 uppercase tracking-wider mb-4">Menu Utama</p>
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${isActive
                                    ? 'bg-[#ABCC6E] text-[#50734D] shadow-md shadow-[#ABCC6E]/20'
                                    : 'text-[#50734D]/70 hover:bg-[#F5FCB5] hover:text-[#50734D]'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* User Profile Snippet (Bottom Sidebar) */}
                <div className="p-6 border-t border-[#50734D]/5">
                    <div className="flex items-center gap-3 bg-[#FFFCE4] p-3 rounded-2xl border border-[#50734D]/10">
                        <div className="w-10 h-10 bg-[#50734D] rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold truncate">Budi Santoso</p>
                            <p className="text-xs text-[#50734D]/60 truncate">Kreator Pro</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#50734D]/10 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-[#50734D] hover:bg-[#F5FCB5] rounded-xl transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-xl font-bold hidden sm:block">Dashboard</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2.5 text-[#50734D]/60 hover:text-[#50734D] hover:bg-[#F5FCB5] rounded-full transition-all">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-[#50734D]/10">
                            <div className="text-right">
                                <p className="text-sm font-bold">Budi Santoso</p>
                            </div>
                            <div className="w-9 h-9 bg-slate-200 rounded-full overflow-hidden border-2 border-[#ABCC6E]">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
