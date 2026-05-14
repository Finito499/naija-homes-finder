import React from 'react';
import { Home, Search, PlusCircle, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface NavbarProps {
  user: any;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onNavigate, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('landing')}
        >
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">RentGo <span className="text-foreground">Afrika</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => onNavigate('search')}>Browse</Button>
          {user?.role === 'landlord' && (
            <Button variant="ghost" onClick={() => onNavigate('dashboard')}>Manage Listings</Button>
          )}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src={user.avatar || ''} />
                    <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('verification')}>
                  Verification Status
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => onNavigate('auth')}>Login</Button>
              <Button onClick={() => onNavigate('auth')}>Get Started</Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('search'); setIsMenuOpen(false); }}>
            <Search className="mr-2 h-4 w-4" /> Browse
          </Button>
          {user?.role === 'landlord' && (
            <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }}>
              <PlusCircle className="mr-2 h-4 w-4" /> Manage Listings
            </Button>
          )}
          {!user ? (
            <Button className="w-full" onClick={() => { onNavigate('auth'); setIsMenuOpen(false); }}>Login / Sign Up</Button>
          ) : (
            <Button variant="outline" className="w-full" onClick={() => { onLogout(); setIsMenuOpen(false); }}>Log Out</Button>
          )}
        </div>
      )}
    </nav>
  );
};