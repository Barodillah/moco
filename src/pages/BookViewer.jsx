import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowLeft, Maximize, Minimize } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AdSlot } from '../components/AdSlot';

// Setup pdf js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PageContent = React.forwardRef(({ pageNumber, width, height }, ref) => {
    const isLeftPage = pageNumber % 2 === 0; // Page 1 is cover (right), Page 2 is left, Page 3 is right...

    return (
        <div ref={ref} className="bg-white flex flex-col items-center justify-center overflow-hidden relative origin-center h-full">
            <Page
                pageNumber={pageNumber}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="pointer-events-none"
                loading={
                    <div className="flex items-center justify-center h-full text-gray-400">Loading page {pageNumber}...</div>
                }
            />
            {/* Realistic inner spine shadow */}
            <div className={`absolute top-0 bottom-0 w-16 z-10 pointer-events-none ${isLeftPage ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-black/20 to-transparent mix-blend-multiply`} />

            {/* Outer edge highlight/shadow to simulate paper thickness */}
            <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]" />
            <div className={`absolute top-0 bottom-0 w-[1px] z-20 ${isLeftPage ? 'left-0 bg-gradient-to-b from-white/50 via-gray-300 to-white/50' : 'right-0 bg-gradient-to-b from-white/50 via-gray-300 to-white/50'}`} />
        </div>
    );
});
PageContent.displayName = "PageContent";



export function BookViewer() {
    const { id } = useParams();
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(400);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const bookRef = useRef(null);
    const viewerRef = useRef(null);

    useEffect(() => {
        // Responsive width calculation based on window size
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setPageWidth(width - 40); // Mobile, single page width
                setIsMobile(true);
            } else if (width < 1024) {
                setPageWidth((width - 80) / 2); // Tablet, half width for 2-pages
                setIsMobile(false);
            } else {
                setPageWidth(420); // Desktop, fixed comfortable width for typical A4 (which makes 840px total spread)
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Listen for fullscreen change events (e.g. user presses Escape)
    useEffect(() => {
        const handleFSChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFSChange);
        return () => document.removeEventListener('fullscreenchange', handleFSChange);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }



    const toggleFullscreen = useCallback(() => {
        if (!viewerRef.current) return;
        if (!document.fullscreenElement) {
            viewerRef.current.requestFullscreen().catch(() => { });
        } else {
            document.exitFullscreen().catch(() => { });
        }
    }, []);

    // Generate an array of page numbers to render
    const pages = Array.from(new Array(numPages || 0), (el, index) => index + 1);

    return (
        <div ref={viewerRef} className="min-h-screen flex flex-col font-sans bg-[#FFFCE4] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ABCC6E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#FFDEAD]/20 rounded-full blur-3xl pointer-events-none" />
            {/* Viewer Header */}
            <header className="bg-white/70 backdrop-blur-xl border-b border-[#50734D]/10 p-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link to="/explore">
                        <button className="p-2.5 rounded-xl text-[#50734D] bg-[#50734D]/5 hover:bg-[#F5FCB5] transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                    </Link>
                    <div className="hidden sm:block">
                        <h1 className="text-lg font-black text-[#50734D] line-clamp-1">Kisah Petualang Rimba {id ? `(#${id})` : ''}</h1>
                        <p className="text-xs font-medium text-[#50734D]/60 mt-0.5">Oleh Anonymous</p>
                    </div>
                </div>

                {/* Ad Placeholder Banner */}
                <div className="hidden md:flex items-center justify-center">
                    <AdSlot
                        adKey="8ecf6e5c3501f41e7294b8c9a40583e1"
                        width={320}
                        height={50}
                        scriptSrc="https://www.highperformanceformat.com/8ecf6e5c3501f41e7294b8c9a40583e1/invoke.js"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button
                        title={isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}
                        onClick={toggleFullscreen}
                        className="p-2.5 rounded-xl text-[#50734D] bg-[#50734D]/5 hover:bg-[#ABCC6E] hover:text-[#50734D] transition-colors"
                    >
                        {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                    </button>
                </div>
            </header>

            {/* Main Viewer Area */}
            <main className="flex-1 overflow-auto flex flex-col items-center justify-center p-4 sm:p-8 relative z-10">
                <div className="flex justify-center items-center w-full max-w-6xl relative">

                    {/* Ad - Sidebar Left */}
                    <div className="hidden xl:flex flex-col items-center justify-center absolute left-0">
                        <AdSlot
                            adKey="99c503affe8dc9428e9e575174d06c4d"
                            width={160}
                            height={600}
                            scriptSrc="https://www.highperformanceformat.com/99c503affe8dc9428e9e575174d06c4d/invoke.js"
                        />
                    </div>

                    <div className="flex-1 flex justify-center drop-shadow-2xl z-10 w-full h-full my-auto transition-transform duration-300">
                        <Document
                            file="/example.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="flex flex-col items-center justify-center py-20 text-[#50734D] animate-pulse">
                                    <div className="w-12 h-12 border-4 border-[#ABCC6E]/30 border-t-[#50734D] rounded-full animate-spin mb-4" />
                                    <p className="font-bold">Memuat Dokumen...</p>
                                </div>
                            }
                            error={<div className="text-red-500 font-medium py-20 bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm">Gagal memuat PDF. Pastikan file example.pdf ada di folder public.</div>}
                        >
                            {numPages && (
                                <div className="flex items-center justify-center py-6">
                                    <HTMLFlipBook
                                        width={pageWidth}
                                        height={pageWidth * 1.414} // Standard A4 ratio
                                        size="fixed"
                                        minWidth={300}
                                        maxWidth={800}
                                        minHeight={400}
                                        maxHeight={1200}
                                        drawShadow={true}
                                        maxShadowOpacity={0.6}
                                        showCover={true}
                                        usePortrait={isMobile}
                                        mobileScrollSupport={true}
                                        ref={bookRef}
                                        className="flipbook-container"
                                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                    >
                                        {pages.map((pageNumber) => (
                                            <PageContent
                                                key={pageNumber}
                                                pageNumber={pageNumber}
                                                width={pageWidth}
                                            />
                                        ))}
                                    </HTMLFlipBook>
                                </div>
                            )}
                        </Document>
                    </div>

                    {/* Ad - Sidebar Right */}
                    <div className="hidden xl:flex flex-col items-center justify-center absolute right-0">
                        <AdSlot
                            adKey="99c503affe8dc9428e9e575174d06c4d"
                            width={160}
                            height={600}
                            scriptSrc="https://www.highperformanceformat.com/99c503affe8dc9428e9e575174d06c4d/invoke.js"
                        />
                    </div>

                </div>

                {/* Navigation Info */}
                {numPages && (
                    <div className="mt-8 flex items-center justify-center gap-4 text-[#50734D] bg-white/60 px-6 py-3 rounded-full backdrop-blur-md border border-[#50734D]/10 shadow-sm relative z-10">
                        <span className="text-sm font-black bg-[#50734D]/10 px-3 py-1 rounded-lg">Halaman: {numPages}</span>
                        <div className="w-1.5 h-1.5 bg-[#ABCC6E] rounded-full hidden sm:block"></div>
                        <span className="text-sm font-medium hidden sm:inline-block">Tarik sudut halaman atau klik ujung layar untuk membalik</span>
                        <span className="text-xs font-medium sm:hidden">Geser untuk membalik halaman</span>
                    </div>
                )}
            </main>
        </div>
    );
}
