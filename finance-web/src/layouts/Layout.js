import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full flex flex-col">
                <Navbar />
                <main className="p-4">{children}</main>
                <Footer />
            </div>
        </div>
    );
}
