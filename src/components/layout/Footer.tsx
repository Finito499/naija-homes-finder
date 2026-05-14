import React from 'react';
import { Home, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight text-primary">RentGo <span className="text-foreground">Afrika</span></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nigeria's most trusted property rental platform. Connecting landlords and tenants with transparency and ease.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Search Properties</a></li>
              <li><a href="#" className="hover:text-primary">For Landlords</a></li>
              <li><a href="#" className="hover:text-primary">How it Works</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 800 RENTGO</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@rentgo.ng</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon"><Twitter className="h-5 w-5" /></Button>
              <Button variant="ghost" size="icon"><Facebook className="h-5 w-5" /></Button>
              <Button variant="ghost" size="icon"><Instagram className="h-5 w-5" /></Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RentGo Afrika NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

import { Button } from '@/components/ui/button';