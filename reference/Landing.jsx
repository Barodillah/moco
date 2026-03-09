import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Upload,
    Share2,
    Zap,
    ChevronRight,
    Menu,
    X,
    Search,
    ArrowRight,
    Eye,
    Layers,
    Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data untuk Explore Buku
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

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFCE4]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#50734D] rounded-xl flex items-center justify-center text-[#FFFCE4] shadow-lg">
                        <BookOpen size={24} />
                    </div>
                    <span className="text-2xl font-bold text-[#50734D] tracking-tight">Moco</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-[#50734D] font-medium">
                    <a href="#" className="hover:text-[#ABCC6E] transition-colors">Jelajahi</a>
                    <a href="#" className="hover:text-[#ABCC6E] transition-colors">Fitur</a>
                    <a href="#" className="hover:text-[#ABCC6E] transition-colors">Harga</a>
                    <button className="bg-[#50734D] text-[#FFFCE4] px-6 py-2.5 rounded-full hover:bg-[#3d5a3b] transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                        Mulai Gratis <ArrowRight size={18} />
                    </button>
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
                        <a href="#" className="text-xl font-medium text-[#50734D]">Jelajahi</a>
                        <a href="#" className="text-xl font-medium text-[#50734D]">Fitur</a>
                        <a href="#" className="text-xl font-medium text-[#50734D]">Harga</a>
                        <button className="bg-[#50734D] text-[#FFFCE4] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4">
                            Mulai Gratis <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

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
                        <button className="bg-[#50734D] text-[#FFFCE4] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#3d5a3b] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                            <Upload size={20} /> Unggah PDF Sekarang
                        </button>
                        <button className="bg-white border-2 border-[#50734D]/10 text-[#50734D] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#F5FCB5] transition-all flex items-center justify-center gap-2">
                            <Eye size={20} /> Lihat Demo
                        </button>
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
                        <button className="bg-[#F5FCB5] text-[#50734D] font-bold px-6 py-3 rounded-full hover:bg-[#ABCC6E] transition-all whitespace-nowrap">
                            Lihat Semua
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {MOCK_BOOKS.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                <div className="absolute top-3 right-3 bg-[#FFFCE4]/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-[#50734D] tracking-widest uppercase">
                                    {book.category}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform">
                                    <button className="w-full bg-[#ABCC6E] text-[#50734D] py-2 rounded-lg font-bold text-sm">
                                        Baca Sekarang
                                    </button>
                                </div>
                            </div>
                            <h3 className="font-bold text-[#50734D] mb-1 truncate">{book.title}</h3>
                            <p className="text-xs text-[#50734D]/60 flex items-center justify-between">
                                <span>{book.author}</span>
                                <span className="flex items-center gap-1 font-bold text-[#50734D]/80">
                                    <Eye size={14} /> {book.views}
                                </span>
                            </p>
                        </motion.div>
                    ))}
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
        <section className="py-24 bg-[#FFFCE4]">
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
                        <button className="bg-[#ABCC6E] text-[#50734D] px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#FFFCE4] transition-all shadow-2xl flex items-center gap-3">
                            Daftar Sekarang <ChevronRight size={24} />
                        </button>
                        <p className="text-[#FFFCE4]/50 text-center mt-4 text-sm font-medium">Tanpa biaya pendaftaran. Selamanya gratis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#FFFCE4] pt-20 pb-10 border-t border-[#50734D]/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#50734D] rounded-lg flex items-center justify-center text-[#FFFCE4]">
                                <BookOpen size={18} />
                            </div>
                            <span className="text-xl font-bold text-[#50734D]">Moco</span>
                        </div>
                        <p className="text-[#50734D]/60 text-sm leading-relaxed">
                            Moco adalah platform penerbitan digital yang membantu penulis dan institusi mengubah PDF menjadi flipbook interaktif.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#50734D] mb-6">Produk</h4>
                        <ul className="space-y-4 text-[#50734D]/70 text-sm">
                            <li><a href="#" className="hover:text-[#ABCC6E]">Flipbook Maker</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Statistik</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Integrasi API</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Iklan & Monetisasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#50734D] mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-[#50734D]/70 text-sm">
                            <li><a href="#" className="hover:text-[#ABCC6E]">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Blog</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Karir</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#50734D] mb-6">Legal</h4>
                        <ul className="space-y-4 text-[#50734D]/70 text-sm">
                            <li><a href="#" className="hover:text-[#ABCC6E]">Ketentuan Layanan</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Kebijakan Privasi</a></li>
                            <li><a href="#" className="hover:text-[#ABCC6E]">Kebijakan Cookie</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#50734D]/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#50734D]/50 text-xs">© 2026 Moco Flipbook Digital. Dibuat dengan penuh ❤️ di Indonesia.</p>
                    <div className="flex gap-6 grayscale opacity-50">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="stripe" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" className="h-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <div className="min-h-screen bg-[#FFFCE4] font-sans selection:bg-[#ABCC6E] selection:text-[#50734D]">
            <Navbar />
            <main>
                <Hero />
                <ExploreSection />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}