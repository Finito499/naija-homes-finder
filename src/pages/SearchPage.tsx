import React from 'react';
import { Search, Map as MapIcon, List, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PropertyCard } from '@/components/property/PropertyCard';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export const SearchPage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const [view, setView] = React.useState<'list' | 'map'>('list');

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-background border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input className="pl-10" placeholder="Search by city, area, or street..." />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Beds</SelectItem>
                  <SelectItem value="1">1 Bed</SelectItem>
                  <SelectItem value="2">2 Beds</SelectItem>
                  <SelectItem value="3">3+ Beds</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="any">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Budget</SelectItem>
                  <SelectItem value="1m">Under ₦1M</SelectItem>
                  <SelectItem value="3m">₦1M - ₦3M</SelectItem>
                  <SelectItem value="5m">₦3M - ₦5M</SelectItem>
                  <SelectItem value="plus">₦5M+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 flex overflow-hidden">
        {/* Results Side */}
        <div className={`w-full ${view === 'map' ? 'hidden md:block md:w-1/2 lg:w-2/5' : 'w-full'} overflow-y-auto h-[calc(100vh-130px)]`}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl">{MOCK_PROPERTIES.length} Properties found</h2>
              <div className="flex bg-muted p-1 rounded-md">
                <Button 
                  variant={view === 'list' ? 'secondary' : 'ghost'} 
                  size="sm" 
                  onClick={() => setView('list')}
                  className="h-8 px-3"
                >
                  <List className="h-4 w-4 mr-2" /> List
                </Button>
                <Button 
                  variant={view === 'map' ? 'secondary' : 'ghost'} 
                  size="sm" 
                  onClick={() => setView('map')}
                  className="h-8 px-3"
                >
                  <MapIcon className="h-4 w-4 mr-2" /> Map
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {MOCK_PROPERTIES.map(prop => (
                <PropertyCard 
                  key={prop.id} 
                  property={prop} 
                  onClick={() => onNavigate(`property-${prop.id}`)} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Map Side */}
        <div className={`${view === 'map' ? 'w-full md:w-1/2 lg:w-3/5' : 'hidden md:block md:w-1/2 lg:w-3/5'} bg-muted relative`}>
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/map-listing-placeholder-dd797fc3-1778790790815.webp"
            className="w-full h-full object-cover"
            alt="Map View"
          />
          
          {/* Mock Markers */}
          <div className="absolute top-1/4 left-1/3 p-2 bg-primary text-white rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
            ₦4.5M
          </div>
          <div className="absolute top-1/2 left-1/2 p-2 bg-primary text-white rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
            ₦3.2M
          </div>
          <div className="absolute top-1/3 left-2/3 p-2 bg-primary text-white rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
            ₦1.5M
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 md:hidden">
            <Button className="w-full shadow-xl" onClick={() => setView('list')}>
              Switch to List View
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};