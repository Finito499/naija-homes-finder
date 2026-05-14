import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ShieldCheck, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PropertyCard } from '@/components/property/PropertyCard';
import { MOCK_PROPERTIES } from '@/lib/mock-data';

export const LandingPage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/hero-apartment-39601842-1778790789635.webp"
            alt="Hero"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Find Your Dream Home <br />in <span className="text-primary">Nigeria</span>
          </motion.h1>
          <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto">
            The most reliable platform to rent verified apartments, houses, and studios across Lagos, Abuja, and beyond.
          </p>
          
          <div className="max-w-4xl mx-auto bg-background rounded-xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-2 border-b md:border-b-0 md:border-r">
              <MapPin className="text-muted-foreground h-5 w-5" />
              <Input className="border-none focus-visible:ring-0 text-foreground" placeholder="City (Lagos, Abuja...)" />
            </div>
            <div className="flex-1 flex items-center px-4 gap-2 border-b md:border-b-0 md:border-r">
              <Home className="text-muted-foreground h-5 w-5" />
              <Input className="border-none focus-visible:ring-0 text-foreground" placeholder="Beds (1, 2, 3+)" />
            </div>
            <Button size="lg" className="md:px-10 h-12" onClick={() => onNavigate('search')}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Properties', value: '10,000+' },
              { label: 'Verified Landlords', value: '2,500+' },
              { label: 'Happy Tenants', value: '50,000+' },
              { label: 'Cities', value: '24' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked listings with high demand and verified status.</p>
            </div>
            <Button variant="ghost" onClick={() => onNavigate('search')}>
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_PROPERTIES.map(prop => (
              <PropertyCard 
                key={prop.id} 
                property={prop} 
                onClick={() => onNavigate(`property-${prop.id}`)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Landlord CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-16 text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you a Landlord?</h2>
                <p className="text-lg mb-8 opacity-90">
                  List your property on RentGo Afrika and reach thousands of verified tenants. We handle the verification so you can lease with peace of mind.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6" />
                    <span>NIN & Phone Verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Search className="h-6 w-6" />
                    <span>Property Analytics</span>
                  </div>
                </div>
                <Button variant="secondary" size="lg" onClick={() => onNavigate('auth')}>
                  Start Listing Today
                </Button>
              </div>
              <div className="flex-1 hidden md:block">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/landlord-verification-cc74beec-1778790789332.webp"
                  className="w-full h-full object-cover"
                  alt="Landlord"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};