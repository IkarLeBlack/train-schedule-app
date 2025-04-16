import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from '@/utils/auth';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        if (!token) router.push('/login');
    }, [router]);

    return <>{children}</>;
}
