import React from 'react';
import { Bed, Bath, Move, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:shadow-lg group"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur text-foreground border-none">
          {property.type}
        </Badge>
        <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold">
          ₦{property.price.toLocaleString()}
          <span className="text-xs font-normal opacity-80"> / year</span>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
          <MapPin className="h-3 w-3" />
          {property.location}
        </div>
        <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" /> {property.bedrooms} Bed
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" /> {property.bathrooms} Bath
          </div>
          <div className="flex items-center gap-1">
            <Move className="h-4 w-4" /> {property.sqft} sqft
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-2">
        <div className="flex items-center gap-2 mt-4">
          <img src={property.landlord.avatar} alt="" className="h-6 w-6 rounded-full" />
          <span className="text-xs font-medium">{property.landlord.name}</span>
          {property.landlord.verified && (
            <CheckCircle className="h-3 w-3 text-green-500" />
          )}
        </div>
      </CardFooter>
    </Card>
  );
};