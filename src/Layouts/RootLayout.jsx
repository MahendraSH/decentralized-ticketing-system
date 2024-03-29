import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" bg-background text-foreground capitalize">
      <Navbar />
      <main className="  min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
