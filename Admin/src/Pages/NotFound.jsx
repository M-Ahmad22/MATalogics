import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#1f2937]">404</h1>
        <p className="mb-4 text-xl text-[#6b7280]">Oops! Page not found</p>
        <a href="/" className="text-[#0045E6] underline hover:text-[#0039c7]">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
