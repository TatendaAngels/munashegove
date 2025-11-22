import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">KPA</span>
            </div>
            <div>
              <div className="font-bold text-lg">Key Pencil Art</div>
              <div className="text-xs text-gray-400">By Brendain Hyundai</div>
            </div>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="text-8xl font-bold mb-4">404</div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
          <Link to="/">
            <button className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
              <Home className="w-5 h-5" />
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
