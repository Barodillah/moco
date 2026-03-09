import React from 'react';


export function Footer() {
    return (
        <footer className="bg-[#FFFCE4] pt-20 pb-10 border-t border-[#50734D]/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo_dark.png" alt="Moco" className="w-8 h-8" />
                            <span className="text-xl font-black text-[#50734D]">Moco</span>
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
}
