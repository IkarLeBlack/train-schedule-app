import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Welcome to Train Schedule App 🚄</h1>
                <p>Manage and view train schedules easily.</p>
                <div className="space-x-4">
                    <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                    <Link href="/register" className="text-green-600 hover:underline">Register</Link>
                    <Link href="/trains" className="text-indigo-600 hover:underline">View Trains</Link>
                </div>
            </div>
        </Layout>
    );
}
