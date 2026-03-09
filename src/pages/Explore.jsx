import React, { useState } from 'react';
import { Search, Filter, Eye, Compass, TrendingUp, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded Mock Data for Explore Page
const LIBRARY_BOOKS = [
    { id: 1, title: "Seni Membaca Alam", author: "Arif Budiman", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400", category: "Edukasi", views: "1.2k", rating: 4.8 },
    { id: 2, title: "Panduan UI/UX Modern", author: "Rina Wijaya", cover: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400", category: "Desain", views: "850", rating: 4.9 },
    { id: 3, title: "Kumpulan Puisi Senja", author: "Sapardi Jr.", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400", category: "Sastra", views: "2.4k", rating: 4.7 },
    { id: 4, title: "Masakan Nusantara", author: "Chef Juna", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400", category: "Kuliner", views: "3.1k", rating: 4.5 },
    { id: 5, title: "Misteri Labirin Tua", author: "Eko Prasetyo", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400", category: "Fiksi", views: "1.5k", rating: 4.6 },
    { id: 6, title: "Sejarah Dunia Moco", author: "Dr. Historian", cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400", category: "Edukasi", views: "900", rating: 4.4 },
    { id: 7, title: "Desain Arsitektur Modern", author: "Budi Santoso", cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400", category: "Desain", views: "2.1k", rating: 4.9 },
    { id: 8, title: "Kisah Sang Pelaut", author: "Kapten Ahab", cover: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&q=80&w=400", category: "Fiksi", views: "3.5k", rating: 4.8 },
    { id: 9, title: "Kue Tradisional", author: "Ibu Sisca", cover: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400", category: "Kuliner", views: "1.8k", rating: 4.7 },
    { id: 10, title: "Sajak Kemerdekaan", author: "Chairil Muda", cover: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=400", category: "Sastra", views: "1.1k", rating: 4.6 },
];

const CATEGORIES = ["Semua", "Edukasi", "Desain", "Sastra", "Kuliner", "Fiksi"];

export function Explore() {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = LIBRARY_BOOKS.filter(book => {
        const matchesCategory = activeCategory === "Semua" || book.category === activeCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#FFFCE4] min-h-screen pb-24">
            {/* Library Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ABCC6E]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5FCB5]/30 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/60 text-[#50734D] px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-[#50734D]/10 shadow-sm">
                            <Compass size={16} className="text-[#ABCC6E]" /> Jelajahi Dunia Literasi Digital
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[#50734D] leading-tight mb-6">
                            Perpustakaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50734D] to-[#ABCC6E]">Tanpa Batas.</span>
                        </h1>
                        <p className="text-lg text-[#50734D]/70 mb-10">
                            Temukan ribuan karya, ide, dan cerita dari para kreator di seluruh dunia.
                            Tenggelam dalam pengalaman membaca interaktif seolah memegang buku nyata.
                        </p>

                        {/* Search Bar - Premium UI */}
                        <div className="relative max-w-2xl mx-auto group">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <Search size={24} className="text-[#50734D]/40 group-focus-within:text-[#ABCC6E] transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari judul buku, penulis, atau topik..."
                                className="w-full bg-white pl-16 pr-6 py-5 rounded-[32px] shadow-xl border border-[#50734D]/5 focus:outline-none focus:ring-4 focus:ring-[#ABCC6E]/20 text-[#50734D] placeholder:text-[#50734D]/30 font-medium text-lg transition-all"
                            />
                            <div className="absolute inset-y-2 right-2 flex items-center">
                                <button className="bg-[#50734D] text-[#FFFCE4] px-6 py-3 rounded-full font-bold hover:bg-[#3d5a3b] transition-colors flex items-center gap-2">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div className="flex items-center gap-3 w-full overflow-x-auto pb-2 scrollbar-none">
                        <Filter size={20} className="text-[#50734D]/50 shrink-0 mr-2" />
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-[#ABCC6E] text-[#50734D] shadow-md'
                                    : 'bg-white text-[#50734D]/60 hover:bg-[#F5FCB5] border border-[#50734D]/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="shrink-0 hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#50734D]/10 text-sm font-bold text-[#50734D]">
                        <TrendingUp size={16} className="text-[#ABCC6E]" />
                        <span>Terpopuler</span>
                    </div>
                </div>

                {/* Library Shelves Grid */}
                {filteredBooks.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12"
                    >
                        <AnimatePresence>
                            {filteredBooks.map((book, index) => (
                                <motion.div
                                    key={book.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative"
                                >
                                    {/* Book 3D Effect Wrapper */}
                                    <div className="relative aspect-[3/4] rounded-r-2xl rounded-l-md overflow-hidden shadow-[5px_5px_15px_rgba(80,115,77,0.2)] group-hover:shadow-[10px_10px_25px_rgba(80,115,77,0.3)] group-hover:-translate-y-2 transition-all duration-300 bg-[#50734D] z-10 perspective-[1000px]">

                                        {/* Spine simulation */}
                                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20 z-20 shadow-[inset_2px_0_5px_rgba(255,255,255,0.3)]"></div>

                                        <img
                                            src={book.cover}
                                            alt={book.title}
                                            className="w-full h-full object-cover origin-left group-hover:rotate-y-[-5deg] transition-transform duration-500"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                                        {/* Badges */}
                                        <div className="absolute top-3 right-3 bg-[#FFFCE4]/90 backdrop-blur-md px-2 py-1 rounded border border-white/50 text-[10px] font-black text-[#50734D] tracking-widest uppercase z-30 shadow-sm">
                                            {book.category}
                                        </div>

                                        {/* Hover Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex gap-2">
                                            <Link to={`/book/${book.id}`} className="flex-1">
                                                <button className="w-full bg-[#ABCC6E] hover:bg-[#F5FCB5] text-[#50734D] py-2 rounded-lg font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-1.5">
                                                    <img src="/logo_dark.png" alt="" className="w-4 h-4" /> Baca
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Shelf simulation */}
                                    <div className="absolute -bottom-3 -left-2 -right-2 h-4 bg-gradient-to-b from-[#50734D]/20 to-transparent rounded-[50%] blur-sm -z-10 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="w-[105%] h-1 bg-[#50734D]/10 mx-auto mt-2 rounded-full -z-10 hidden md:block"></div>

                                    {/* Book Meta */}
                                    <div className="mt-4 px-1 text-center">
                                        <h3 className="font-bold text-[#50734D] text-sm md:text-base line-clamp-1 group-hover:text-[#ABCC6E] transition-colors">{book.title}</h3>
                                        <p className="text-xs text-[#50734D]/60 mt-1">{book.author}</p>
                                        <div className="flex items-center justify-center gap-3 mt-2 text-xs font-bold text-[#50734D]/80">
                                            <span className="flex items-center gap-1"><Eye size={12} className="text-[#ABCC6E]" /> {book.views}</span>
                                            <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400" /> {book.rating}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="py-24 text-center bg-white/50 backdrop-blur-sm rounded-[32px] border-2 border-dashed border-[#50734D]/10">
                        <Sparkles size={48} className="mx-auto text-[#ABCC6E] mb-4 opacity-50" />
                        <h3 className="text-2xl font-bold text-[#50734D] mb-2">Buku Tidak Ditemukan</h3>
                        <p className="text-[#50734D]/60">Coba gunakan kata kunci atau kategori yang berbeda.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("Semua"); }}
                            className="mt-6 px-6 py-2 bg-[#50734D] text-[#FFFCE4] rounded-full font-bold hover:bg-[#3d5a3b]"
                        >
                            Reset Pencarian
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
