
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { PropertyListings } from "@/components/PropertyListings";
import { VehicleListings } from "@/components/VehicleListings";
import { ElectronicsListings } from "@/components/ElectronicsListings";
import { MobileAppPromo } from "@/components/MobileAppPromo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedCategories />
        <PropertyListings />
        <VehicleListings />
        <ElectronicsListings />
        <MobileAppPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
