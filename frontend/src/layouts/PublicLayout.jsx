import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full">
        <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
