import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LandingPage } from '@/pages/LandingPage';
import { SearchPage } from '@/pages/SearchPage';
import { PropertyDetails } from '@/pages/PropertyDetails';
import { AuthPage } from '@/pages/AuthPage';
import { LandlordDashboard } from '@/pages/LandlordDashboard';
import { VerificationPage } from '@/pages/VerificationPage';
import { User } from '@/types';

function App() {
  const [currentPage, setCurrentPage] = React.useState<string>('landing');
  const [user, setUser] = React.useState<User | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = (role: 'tenant' | 'landlord') => {
    setUser({
      id: '1',
      name: role === 'landlord' ? 'Chidi Okafor' : 'Kemi Adeyemi',
      email: role === 'landlord' ? 'chidi@landlord.ng' : 'kemi@tenant.ng',
      role,
      isVerified: role === 'landlord' ? false : true,
    });
    handleNavigate(role === 'landlord' ? 'dashboard' : 'search');
  };

  const handleLogout = () => {
    setUser(null);
    handleNavigate('landing');
  };

  const renderPage = () => {
    if (currentPage.startsWith('property-')) {
      const id = currentPage.split('-')[1];
      return <PropertyDetails id={id} onBack={() => handleNavigate('search')} />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'search':
        return <SearchPage onNavigate={handleNavigate} />;
      case 'auth':
        return <AuthPage onLogin={handleLogin} />;
      case 'dashboard':
        return <LandlordDashboard />;
      case 'verification':
        return <VerificationPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onNavigate={handleNavigate} onLogout={handleLogout} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;