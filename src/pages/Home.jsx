import React from 'react';
import { Upload, Share2, Zap, Eye, Layers, Sparkles, ChevronRight, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MOCK_BOOKS = [
    {
        id: 1,
        title: "Seni Membaca Alam",
        author: "Arif Budiman",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        category: "Edukasi",
        views: "1.2k"
    },
    {
        id: 2,
        title: "Panduan UI/UX Modern",
        author: "Rina Wijaya",
        cover: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400",
        category: "Desain",
        views: "850"
    },
    {
        id: 3,
        title: "Kumpulan Puisi Senja",
        author: "Sapardi Jr.",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
        category: "Sastra",
        views: "2.4k"
    },
    {
        id: 4,
        title: "Masakan Nusantara",
        author: "Chef Juna",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
        category: "Kuliner",
        views: "3.1k"
    },
    {
        id: 5,
        title: "Misteri Labirin Tua",
        author: "Eko Prasetyo",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
        category: "Fiksi",
        views: "1.5k"
    }
];

const Hero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#ABCC6E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#FFDEAD]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-[#F5FCB5] text-[#50734D] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#ABCC6E]/30">
                        <Sparkles size={16} /> Transformasi PDF ke Flipbook
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#50734D] leading-[1.1] mb-6">
                        Ubah PDF Anda Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50734D] to-[#ABCC6E]">Pengalaman Nyata.</span>
                    </h1>
                    <p className="text-lg text-[#50734D]/70 mb-8 max-w-xl leading-relaxed">
                        Moco memberikan sentuhan ajaib pada dokumen statis Anda. Rasakan sensasi membalik halaman buku digital secara interaktif dan bagikan ke seluruh dunia hanya dengan satu klik.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/register">
                            <button className="w-full sm:w-auto bg-[#50734D] text-[#FFFCE4] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#3d5a3b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Upload size={20} /> Unggah PDF Sekarang
                            </button>
                        </Link>
                        <Link to="/book/example">
                            <button className="w-full sm:w-auto bg-white border-2 border-[#50734D]/10 text-[#50734D] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#F5FCB5] transition-all flex items-center justify-center gap-2">
                                <Eye size={20} /> Lihat Demo
                            </button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FFFCE4] bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-[#50734D]/60">
                            <span className="text-[#50734D] font-bold">5,000+</span> penulis telah bergabung
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Hero Image / Card Representation */}
                    <div className="bg-[#F5FCB5] rounded-[40px] p-4 shadow-2xl relative z-10 overflow-hidden">
                        <div className="bg-[#FFFCE4] rounded-[32px] overflow-hidden shadow-inner flex aspect-[4/5] relative">
                            <img
                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000"
                                alt="Preview Buku"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#50734D]/60 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold">Kisah Petualang Rimba</h3>
                                <p className="opacity-90">Halaman 12 dari 120</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-[#FFDEAD] rounded-full flex items-center justify-center text-[#50734D]">
                            <Share2 size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-[#50734D]/60 font-medium">Link Siap Dibagikan</p>
                            <p className="text-sm font-bold text-[#50734D]">moco.id/buku-rimba</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-[#ABCC6E]/20"
                    >
                        <div className="w-12 h-12 bg-[#ABCC6E] rounded-xl flex items-center justify-center text-white">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#50734D]">Konversi Instan</p>
                            <p className="text-xs text-[#50734D]/60">Hanya butuh 3 detik!</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const ExploreSection = () => {
    return (
        <section className="py-24 bg-white/50 backdrop-blur-sm relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-[#50734D] mb-4">Jelajahi Koleksi Terpopuler</h2>
                        <p className="text-[#50734D]/70 max-w-lg">Temukan inspirasi dari ribuan buku yang telah diubah menjadi format interaktif oleh komunitas kami.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#50734D]/40" size={20} />
                            <input
                                type="text"
                                placeholder="Cari judul atau genre..."
                                className="bg-[#FFFCE4] border border-[#50734D]/10 pl-12 pr-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ABCC6E] w-full md:w-64 transition-all"
                            />
                        </div>
                        <Link to="/explore">
                            <button className="bg-[#F5FCB5] text-[#50734D] font-bold px-6 py-3 rounded-full hover:bg-[#ABCC6E] transition-all whitespace-nowrap shadow-sm hover:shadow-md">
                                Lihat Semua
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Infinite Marquee Slider */}
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-track {
                        animation: marquee 30s linear infinite;
                    }
                    .marquee-wrapper:hover .marquee-track {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="marquee-wrapper overflow-hidden -mx-6">
                    <div className="marquee-track flex gap-8 w-max px-6">
                        {/* Render books twice for seamless loop */}
                        {[...MOCK_BOOKS, ...MOCK_BOOKS].map((book, index) => (
                            <div key={`${book.id}-${index}`} className="group shrink-0 w-48">
                                {/* 3D Book Card */}
                                <div className="relative aspect-[3/4] rounded-r-2xl rounded-l-md overflow-hidden shadow-[5px_5px_15px_rgba(80,115,77,0.2)] group-hover:shadow-[10px_10px_25px_rgba(80,115,77,0.3)] group-hover:-translate-y-2 transition-all duration-300 bg-[#50734D]">
                                    {/* Spine */}
                                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20 z-20 shadow-[inset_2px_0_5px_rgba(255,255,255,0.3)]" />
                                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                                    {/* Category Badge */}
                                    <div className="absolute top-3 right-3 bg-[#FFFCE4]/90 backdrop-blur-md px-2 py-1 rounded border border-white/50 text-[10px] font-black text-[#50734D] tracking-widest uppercase z-30 shadow-sm">
                                        {book.category}
                                    </div>
                                    {/* Hover Action */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                                        <Link to={`/book/${book.id}`}>
                                            <button className="w-full bg-[#ABCC6E] hover:bg-[#F5FCB5] text-[#50734D] py-2 rounded-lg font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-1.5">
                                                <img src="/logo_dark.png" alt="" className="w-4 h-4" /> Baca
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                {/* Shelf shadow */}
                                <div className="w-[105%] h-1 bg-[#50734D]/10 mx-auto mt-2 rounded-full hidden md:block" />
                                {/* Meta */}
                                <div className="mt-3 px-1 text-center">
                                    <h3 className="font-bold text-[#50734D] text-sm line-clamp-1 group-hover:text-[#ABCC6E] transition-colors">{book.title}</h3>
                                    <p className="text-xs text-[#50734D]/60 mt-1">{book.author}</p>
                                    <div className="flex items-center justify-center gap-3 mt-1.5 text-xs font-bold text-[#50734D]/80">
                                        <span className="flex items-center gap-1"><Eye size={12} className="text-[#ABCC6E]" /> {book.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        {
            title: "Efek Balik Halaman",
            desc: "Simulasi membalik buku fisik yang sangat halus dan realistis di segala perangkat.",
            icon: <Layers size={24} />,
            color: "bg-[#F5FCB5]"
        },
        {
            title: "Berbagi Instan",
            desc: "Setiap buku mendapatkan URL unik yang ramah SEO dan mudah dibagikan.",
            icon: <Share2 size={24} />,
            color: "bg-[#FFDEAD]"
        },
        {
            title: "Optimasi Mobile",
            desc: "Pengalaman membaca yang nyaman di ponsel pintar tanpa perlu install aplikasi.",
            icon: <Zap size={24} />,
            color: "bg-[#ABCC6E]"
        }
    ];

    return (
        <section id="fitur" className="py-24 bg-[#FFFCE4]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#50734D] mb-6">Mengapa Memilih Moco?</h2>
                    <p className="text-[#50734D]/70 text-lg">Kami merancang fitur yang fokus pada kenyamanan membaca dan kemudahan penggunaan bagi para kreator.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-10 rounded-[32px] shadow-sm border border-[#50734D]/5 flex flex-col items-center text-center"
                        >
                            <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-[#50734D] mb-6 shadow-inner`}>
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#50734D] mb-4">{f.title}</h3>
                            <p className="text-[#50734D]/60 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-[#50734D] rounded-[48px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ABCC6E]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFDEAD]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#FFFCE4] mb-6">Siap Menghidupkan PDF Anda?</h2>
                        <p className="text-[#F5FCB5]/80 text-lg max-w-md">Gabung sekarang dan nikmati cara baru membaca buku digital yang lebih berkesan.</p>
                    </div>

                    <div className="relative z-10">
                        <Link to="/register">
                            <button className="bg-[#ABCC6E] text-[#50734D] px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#FFFCE4] transition-all shadow-2xl flex items-center gap-3">
                                Daftar Sekarang <ChevronRight size={24} />
                            </button>
                        </Link>
                        <p className="text-[#FFFCE4]/50 text-center mt-4 text-sm font-medium">Tanpa biaya pendaftaran. Selamanya gratis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ExploreSection />
            <Features />
            <CTA />
        </div>
    );
}
