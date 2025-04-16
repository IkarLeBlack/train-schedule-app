import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { login } from '@/services/auth.service';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await login(form.email, form.password);
        if (result.access_token) {
            localStorage.setItem('token', result.access_token);
            localStorage.setItem('user', JSON.stringify({ email: form.email }));
            router.push('/trains');
        } else {
            alert('Login failed');
        }
    };

    return (
        <Layout>
            <h2 className="text-xl mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">Login</button>
            </form>
        </Layout>
    );
}
