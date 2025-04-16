import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState<{ email: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };

    const isOnTrainsPage = router.pathname === '/trains';

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Train Schedule App</h1>
                <nav className="space-x-4 flex items-center">
                    <Link href="/">Home</Link>
                    {!isOnTrainsPage && <Link href="/trains">Trains</Link>}
                    {user ? (
                        <>
                            <span className="text-sm">👤 {user.email}</span>
                            <button
                                onClick={handleLogout}
                                className="ml-2 px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white text-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </nav>
            </header>

            <main className="p-6">{children}</main>
        </div>
    );
};

export default Layout;

