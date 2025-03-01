
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ChevronRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample vehicles data
const vehicles = [
  {
    id: 1,
    title: "2020 Mercedes-Benz C200",
    location: "Nasr City, Cairo",
    price: 1250000,
    year: 2020,
    kilometers: 45000,
    transmission: "Automatic",
    fuelType: "Petrol",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    condition: "Excellent",
    date: "3 days ago"
  },
  {
    id: 2,
    title: "2019 BMW X5 xDrive40i",
    location: "New Cairo, Cairo",
    price: 1850000,
    year: 2019,
    kilometers: 62000,
    transmission: "Automatic",
    fuelType: "Petrol",
    imageUrl: "https://images.unsplash.com/photo-1543854589-fdd815246282?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    condition: "Excellent",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "2018 Toyota Corolla",
    location: "Dokki, Giza",
    price: 450000,
    year: 2018,
    kilometers: 85000,
    transmission: "Automatic",
    fuelType: "Petrol",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    condition: "Good",
    date: "2 days ago"
  },
  {
    id: 4,
    title: "2021 Hyundai Tucson",
    location: "6th of October, Giza",
    price: 750000,
    year: 2021,
    kilometers: 28000,
    transmission: "Automatic",
    fuelType: "Petrol",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    condition: "Excellent",
    date: "Just now"
  }
];

interface VehicleCardProps {
  vehicle: typeof vehicles[0];
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="listing-card group animate-fade-in">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.imageUrl}
          alt={vehicle.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-dubizzle-red text-dubizzle-red' : 'text-gray-500'}`} 
          />
        </button>
        {vehicle.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-dubizzle-red text-white">
            Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-dubizzle-red transition-colors">
            {vehicle.title}
          </h3>
        </div>
        
        <div className="mb-3">
          <p className="text-2xl font-bold text-dubizzle-dark">
            EGP {formatPrice(vehicle.price)}
          </p>
        </div>
        
        <div className="flex items-center text-dubizzle-text-gray text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 text-dubizzle-red" />
          <span>{vehicle.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-3 text-sm text-dubizzle-text-gray">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center">
              <span>{vehicle.kilometers.toLocaleString()} km</span>
            </div>
            <div className="flex items-center">
              <span>{vehicle.transmission}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-dubizzle-text-gray pt-2 border-t border-dubizzle-gray">
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2 text-xs border-blue-500 text-blue-600">
              {vehicle.condition}
            </Badge>
            <span>{vehicle.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function VehicleListings() {
  return (
    <section className="py-12 bg-dubizzle-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Vehicles</h2>
          <Link to="/vehicles" className="text-dubizzle-red hover:underline flex items-center font-medium">
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`}>
              <VehicleCard vehicle={vehicle} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
