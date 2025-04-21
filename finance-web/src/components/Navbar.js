import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Finance App</h1>
                <Link href="/dashboard">Dashboard</Link>
            </div>
        </nav>
    );
}
