import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <nav>
                <ul>
                    <li className="mb-2"><Link href="/dashboard">Dashboard</Link></li>
                    <li className="mb-2"><Link href="/dashboard/transactions">Transactions</Link></li>
                    <li className="mb-2"><Link href="/dashboard/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
