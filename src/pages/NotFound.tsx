
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dubizzle-red/10 mb-6">
            <div className="text-dubizzle-red text-4xl font-bold">404</div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-dubizzle-red hover:bg-red-700 text-white"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-dubizzle-gray-dark hover:bg-dubizzle-gray"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
