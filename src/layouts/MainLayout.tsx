import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
