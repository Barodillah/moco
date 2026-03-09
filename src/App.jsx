import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { BookViewer } from './pages/BookViewer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text-main font-sans selection:bg-brand-light selection:text-white">
        <Routes>
          {/* Auth Routes (Standalone) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public Routes with Navbar/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Route>

          {/* Dashboard Routes with Sidebar/Header */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Book Viewer (Standalone Layout) */}
          <Route path="/book/:id" element={<BookViewer />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
