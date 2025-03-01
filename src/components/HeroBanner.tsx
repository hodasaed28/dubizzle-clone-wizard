
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const bannerImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&q=75&fit=crop&w=1400",
  "https://images.unsplash.com/photo-1628745277895-63ddd8577b2f?auto=format&q=75&fit=crop&w=1400",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&q=75&fit=crop&w=1400"
];

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
      {/* Banner image */}
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
          Find Your Perfect Deal on dubizzle
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-slide-up animation-delay-100">
          Egypt's largest marketplace to buy and sell anything - from properties and cars to electronics and furniture
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
          <Button size="lg" className="bg-dubizzle-red hover:bg-red-700 text-white">
            Explore Properties
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-dubizzle-dark">
            Sell Your Items
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
