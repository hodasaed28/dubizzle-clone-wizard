
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Bed, 
  Bath, 
  Grid 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment with Pool View",
    location: "New Cairo, Cairo",
    price: 5500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    isVerified: true,
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Luxury Villa in Compound",
    location: "Sheikh Zayed, Giza",
    price: 12000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    imageUrl: "https://images.unsplash.com/photo-1628745277895-63ddd8577b2f?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    isVerified: true,
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Cozy Studio in Downtown",
    location: "Downtown, Cairo",
    price: 2200000,
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    isVerified: false,
    date: "3 days ago"
  },
  {
    id: 4,
    title: "Spacious Family House with Garden",
    location: "Maadi, Cairo",
    price: 8500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    isVerified: true,
    date: "Just now"
  }
];

interface PropertyCardProps {
  property: typeof properties[0];
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="listing-card group animate-fade-in">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-dubizzle-red text-dubizzle-red' : 'text-gray-500'}`} 
          />
        </button>
        {property.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-dubizzle-red text-white">
            Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-dubizzle-red transition-colors">
            {property.title}
          </h3>
        </div>
        
        <div className="mb-3">
          <p className="text-2xl font-bold text-dubizzle-dark">
            EGP {formatPrice(property.price)}
          </p>
        </div>
        
        <div className="flex items-center text-dubizzle-text-gray text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 text-dubizzle-red" />
          <span>{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-3 text-sm text-dubizzle-text-gray">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} {property.bedrooms > 1 ? 'beds' : 'bed'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} {property.bathrooms > 1 ? 'baths' : 'bath'}</span>
            </div>
            <div className="flex items-center">
              <Grid className="h-4 w-4 mr-1" />
              <span>{property.area} m²</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-dubizzle-text-gray pt-2 border-t border-dubizzle-gray">
          <div className="flex items-center">
            {property.isVerified && (
              <Badge variant="outline" className="mr-2 text-xs border-green-500 text-green-600">
                Verified
              </Badge>
            )}
            <span>{property.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function PropertyListings() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Properties</h2>
          <Link to="/properties" className="text-dubizzle-red hover:underline flex items-center font-medium">
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
