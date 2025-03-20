import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to Finance App</h1>
            <p className="text-lg mt-2">Manage your money with ease.</p>
            <div className="mt-4">
                <Link href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</Link>
                <Link href="/auth/register" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</Link>
            </div>
        </div>
    );
}
