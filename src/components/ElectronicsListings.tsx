
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample electronics data
const electronics = [
  {
    id: 1,
    title: "Apple iPhone 13 Pro 256GB",
    location: "Heliopolis, Cairo",
    price: 22000,
    condition: "Used - Like New",
    imageUrl: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    date: "1 day ago"
  },
  {
    id: 2,
    title: "Samsung 55\" QLED 4K Smart TV",
    location: "Maadi, Cairo",
    price: 15000,
    condition: "New",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    date: "3 days ago"
  },
  {
    id: 3,
    title: "MacBook Pro 13\" M1 2020",
    location: "New Cairo, Cairo",
    price: 32000,
    condition: "Used - Excellent",
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&q=75&fit=crop&w=600",
    isFeatured: true,
    date: "2 days ago"
  },
  {
    id: 4,
    title: "Sony PlayStation 5 with 2 Controllers",
    location: "Dokki, Giza",
    price: 18500,
    condition: "Used - Good",
    imageUrl: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&q=75&fit=crop&w=600",
    isFeatured: false,
    date: "1 week ago"
  }
];

interface ElectronicsCardProps {
  item: typeof electronics[0];
}

const ElectronicsCard: React.FC<ElectronicsCardProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="listing-card group animate-fade-in">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
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
        {item.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-dubizzle-red text-white">
            Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-dubizzle-red transition-colors">
            {item.title}
          </h3>
        </div>
        
        <div className="mb-3">
          <p className="text-2xl font-bold text-dubizzle-dark">
            EGP {formatPrice(item.price)}
          </p>
        </div>
        
        <div className="flex items-center text-dubizzle-text-gray text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 text-dubizzle-red" />
          <span>{item.location}</span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-dubizzle-text-gray pt-2 border-t border-dubizzle-gray">
          <div className="flex items-center">
            <Badge 
              variant="outline" 
              className={`mr-2 text-xs ${
                item.condition.includes('New') 
                  ? 'border-green-500 text-green-600' 
                  : 'border-blue-500 text-blue-600'
              }`}
            >
              {item.condition}
            </Badge>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ElectronicsListings() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Electronics & Gadgets</h2>
          <Link to="/electronics" className="text-dubizzle-red hover:underline flex items-center font-medium">
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {electronics.map((item) => (
            <Link key={item.id} to={`/electronics/${item.id}`}>
              <ElectronicsCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
