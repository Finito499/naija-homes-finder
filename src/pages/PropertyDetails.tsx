import React from 'react';
import { Bed, Bath, Move, MapPin, CheckCircle, Share2, Heart, Phone, Mail, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Property } from '@/types';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { toast } from 'sonner';

export const PropertyDetails: React.FC<{ id: string, onBack: () => void }> = ({ id, onBack }) => {
  const property = MOCK_PROPERTIES.find(p => p.id === id) || MOCK_PROPERTIES[0];

  const handleContact = () => {
    toast.success('Landlord has been notified! They will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={onBack}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Search
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery & Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={property.images[0]} 
                className="col-span-2 rounded-2xl w-full h-[400px] object-cover"
                alt={property.title}
              />
              {property.images[1] && (
                <img 
                  src={property.images[1]} 
                  className="rounded-2xl w-full h-[200px] object-cover"
                  alt="Interior"
                />
              )}
              <div className="relative rounded-2xl bg-slate-800 flex items-center justify-center text-white h-[200px]">
                <span className="text-lg font-bold">+3 More Photos</span>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{property.type}</Badge>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground gap-1">
                    <MapPin className="h-4 w-4" /> {property.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon"><Heart className="h-4 w-4 text-red-500" /></Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6 border-y my-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                  <div className="font-bold text-lg">{property.bedrooms}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                  <div className="font-bold text-lg">{property.bathrooms}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Area</div>
                  <div className="font-bold text-lg">{property.sqft} sqft</div>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-6">
                  ₦{property.price.toLocaleString()}
                  <span className="text-base font-normal text-muted-foreground"> / year</span>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full h-12" onClick={handleContact}>Contact Landlord</Button>
                  <Button variant="outline" className="w-full h-12">Schedule a Tour</Button>
                </div>

                <Separator className="my-6" />

                <div className="flex items-center gap-4">
                  <img src={property.landlord.avatar} className="h-12 w-12 rounded-full" alt="Landlord" />
                  <div>
                    <div className="font-bold flex items-center gap-1">
                      {property.landlord.name}
                      {property.landlord.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="text-sm text-muted-foreground">Verified Landlord</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-bold mb-2">Safety Tips</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                <li>Always inspect the property in person.</li>
                <li>Don't pay upfront before seeing the house.</li>
                <li>Only deal with verified landlords on RentGo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};