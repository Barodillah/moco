import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 w-full max-w-[1400px] mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
