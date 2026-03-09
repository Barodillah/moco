import React, { useState } from 'react';
import { Upload, Book, Trash2, Link as LinkIcon, ExternalLink, Activity, Users, Eye, Plus, FileText, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Dashboard() {
    const [books, setBooks] = useState([
        { id: '1', title: 'Panduan UI/UX Modern 2026', filename: 'panduan-ui-ux.pdf', views: 1205, date: 'Mar 09, 2026', cover: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400' },
        { id: '2', title: 'Laporan Tahunan Q1', filename: 'report-q1.pdf', views: 432, date: 'Feb 28, 2026', cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' }
    ]);
    const [isUploading, setIsUploading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { label: 'Total Views', value: '1,637', icon: <Eye size={20} />, trend: '+12.5%' },
        { label: 'Flipbooks', value: books.length.toString(), icon: <Book size={20} />, trend: '+2' },
        { label: 'Pengunjung Aktif', value: '42', icon: <Users size={20} />, trend: '+5.2%' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-[#50734D] tracking-tight">Dashboard Overview</h1>
                        <p className="text-[#50734D]/70 mt-2 text-lg">Selamat datang kembali! Lihat performa flipbook Anda hari ini.</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsUploading(!isUploading)}
                        className="bg-[#ABCC6E] text-[#50734D] px-6 py-3.5 rounded-2xl font-bold hover:bg-[#9aba5e] transition-colors shadow-lg shadow-[#ABCC6E]/30 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        <Plus size={20} />
                        Buat Flipbook Baru
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="bg-white p-6 rounded-[28px] shadow-sm border border-[#50734D]/5 flex items-center justify-between group hover:shadow-md transition-shadow"
                        >
                            <div>
                                <p className="text-[#50734D]/60 font-medium text-sm mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-black text-[#50734D]">{stat.value}</h3>
                                <p className="text-[#ABCC6E] text-sm font-bold mt-2 flex items-center gap-1">
                                    <Activity size={14} /> {stat.trend} bulan ini
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-[#F5FCB5] rounded-2xl flex items-center justify-center text-[#50734D] group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Upload Form Animation */}
                <AnimatePresence>
                    {isUploading && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-[#50734D] p-8 md:p-10 rounded-[32px] shadow-xl relative overflow-hidden text-[#FFFCE4]">
                                {/* Decorative */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ABCC6E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                    <Upload size={24} className="text-[#ABCC6E]" /> Unggah PDF Baru
                                </h2>

                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-[#FFFCE4]/90 block">Judul Flipbook</label>
                                        <input
                                            type="text"
                                            placeholder="Masukkan judul yang menarik..."
                                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[#FFFCE4] placeholder:text-white/40 focus:outline-none focus:border-[#ABCC6E] focus:bg-white/15 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-[#FFFCE4]/90 block">Pilih File PDF</label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                className="w-full bg-white/5 border-2 border-dashed border-white/20 rounded-xl px-4 py-8 text-[#FFFCE4] focus:outline-none hover:bg-white/10 hover:border-[#ABCC6E]/50 transition-all cursor-pointer file:hidden text-center"
                                            />
                                            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                                                <FileText size={24} className="text-white/50 mb-2" />
                                                <span className="text-sm text-white/70 font-medium">Klik atau drop PDF di sini</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-3 relative z-10 justify-end border-t border-white/10 pt-6">
                                    <button
                                        onClick={() => setIsUploading(false)}
                                        className="px-6 py-2.5 rounded-xl font-bold text-[#FFFCE4]/70 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={() => setIsUploading(false)}
                                        className="bg-[#ABCC6E] text-[#50734D] px-8 py-2.5 rounded-xl font-bold hover:bg-white transition-colors"
                                    >
                                        Proses Konversi
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Library Section */}
                <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-[#50734D]/5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-[#50734D]">Koleksi Flipbook</h2>

                        <div className="flex gap-3 w-full sm:w-auto">
                            <div className="relative flex-1 sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#50734D]/40" size={18} />
                                <input
                                    type="text"
                                    placeholder="Cari buku..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#FFFCE4]/50 border border-[#50734D]/10 pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#ABCC6E] focus:bg-[#FFFCE4] transition-all text-sm font-medium text-[#50734D]"
                                />
                            </div>
                            <button className="bg-[#F5FCB5] text-[#50734D] p-2.5 rounded-xl hover:bg-[#ABCC6E]/40 transition-colors border border-[#50734D]/5">
                                <Settings size={20} />
                            </button>
                        </div>
                    </div>

                    {books.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {books.map((book, index) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={book.id}
                                    className="group rounded-2xl border border-[#50734D]/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col h-full"
                                >
                                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                                        <img
                                            src={book.cover}
                                            alt={book.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#50734D] shadow-sm flex items-center gap-1.5">
                                            <Eye size={12} /> {book.views}
                                        </div>
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[#50734D] text-lg mb-1 line-clamp-2 leading-tight group-hover:text-[#ABCC6E] transition-colors">{book.title}</h3>
                                        <p className="text-xs font-medium text-[#50734D]/50 mb-4">{book.date}</p>

                                        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-[#50734D]/5 pt-4">
                                            <Link to={`/book/example`} className="col-span-1">
                                                <button className="w-full flex items-center justify-center p-2 rounded-xl bg-[#50734D]/5 text-[#50734D] hover:bg-[#ABCC6E] hover:text-[#50734D] transition-colors tooltip" title="Lihat Flipbook">
                                                    <ExternalLink size={18} />
                                                </button>
                                            </Link>
                                            <button className="col-span-1 flex items-center justify-center p-2 rounded-xl bg-[#50734D]/5 text-[#50734D] hover:bg-[#F5FCB5] hover:text-[#50734D] transition-colors" title="Salin Tautan">
                                                <LinkIcon size={18} />
                                            </button>
                                            <button className="col-span-1 flex items-center justify-center p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors" title="Hapus">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 flex flex-col items-center justify-center text-center bg-[#FFFCE4]/30 rounded-2xl border-2 border-dashed border-[#50734D]/10">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#ABCC6E] mb-6 shadow-sm">
                                <Book size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#50734D] mb-2">Koleksi Masih Kosong</h3>
                            <p className="text-[#50734D]/60 max-w-sm mb-6">Unggah dokumen PDF pertama Anda dan ubah menjadi pengalaman membaca yang interaktif.</p>
                            <button
                                onClick={() => setIsUploading(true)}
                                className="bg-[#50734D] text-[#FFFCE4] px-8 py-3 rounded-full font-bold hover:bg-[#3d5a3b] transition-colors shadow-lg"
                            >
                                Mulai Unggah
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
