
import { Link } from "react-router-dom";
import { Home, Car, Smartphone, Tv, ShoppingBag, Briefcase, DollarSign } from "lucide-react";

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon, title, path }) => {
  return (
    <Link to={path} className="category-card group">
      <div className="w-16 h-16 rounded-full bg-dubizzle-gray flex items-center justify-center mb-3 group-hover:bg-dubizzle-gray-dark transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm font-medium text-center">{title}</span>
    </Link>
  );
};

export function FeaturedCategories() {
  const categories = [
    {
      icon: <Home className="h-7 w-7 text-dubizzle-red" />,
      title: "Properties",
      path: "/properties",
    },
    {
      icon: <Car className="h-7 w-7 text-dubizzle-red" />,
      title: "Vehicles",
      path: "/vehicles",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-dubizzle-red" />,
      title: "Mobiles",
      path: "/mobiles",
    },
    {
      icon: <Tv className="h-7 w-7 text-dubizzle-red" />,
      title: "Electronics",
      path: "/electronics",
    },
    {
      icon: <ShoppingBag className="h-7 w-7 text-dubizzle-red" />,
      title: "Fashion",
      path: "/fashion",
    },
    {
      icon: <Briefcase className="h-7 w-7 text-dubizzle-red" />,
      title: "Jobs",
      path: "/jobs",
    },
    {
      icon: <DollarSign className="h-7 w-7 text-dubizzle-red" />,
      title: "Services",
      path: "/services",
    },
  ];

  return (
    <section className="py-12 bg-dubizzle-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              path={category.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
