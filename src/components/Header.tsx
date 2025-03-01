
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, MessageSquare, User, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Egypt");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top header with logo and search */}
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <button
              className="mr-2 block md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-dubizzle-dark" />
              ) : (
                <Menu className="h-6 w-6 text-dubizzle-dark" />
              )}
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-dubizzle-red">dubizzle</span>
            </Link>
          </div>

          {/* Location selector */}
          <div className="hidden md:flex items-center ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-sm px-2">
                  <MapPin className="h-4 w-4 mr-1 text-dubizzle-red" />
                  {selectedLocation}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                <DropdownMenuItem onClick={() => setSelectedLocation("Egypt")}>
                  Egypt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation("Cairo")}>
                  Cairo
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation("Alexandria")}>
                  Alexandria
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation("Giza")}>
                  Giza
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-4 max-w-xl relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="pl-10 pr-4 py-2 w-full border border-dubizzle-gray rounded-md focus:border-dubizzle-red"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button className="ml-2 bg-dubizzle-red hover:bg-red-700 text-white">
              + Sell
            </Button>
          </div>
        </div>

        {/* Mobile search - only visible on mobile */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 w-full border border-dubizzle-gray rounded-md"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg animate-slide-down overflow-hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <button 
                className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapPin className="h-5 w-5 mr-2 text-dubizzle-red" />
                {selectedLocation}
              </button>
              <Link 
                to="/notifications"
                className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </Link>
              <Link 
                to="/messages"
                className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Messages
              </Link>
              <Link 
                to="/account"
                className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" />
                My Account
              </Link>
            </div>
          </div>
        )}

        {/* Categories navigation */}
        <nav className="hidden md:flex items-center justify-between h-12 border-t border-dubizzle-gray overflow-x-auto no-scrollbar">
          <div className="flex space-x-6">
            <Link to="/properties" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Properties</Link>
            <Link to="/vehicles" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Vehicles</Link>
            <Link to="/mobiles" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Mobiles & Tablets</Link>
            <Link to="/electronics" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Electronics</Link>
            <Link to="/furniture" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Home & Furniture</Link>
            <Link to="/fashion" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Fashion & Beauty</Link>
            <Link to="/pets" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Pets</Link>
            <Link to="/jobs" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Jobs</Link>
            <Link to="/services" className="text-sm font-medium whitespace-nowrap hover:text-dubizzle-red transition-colors">Services</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
