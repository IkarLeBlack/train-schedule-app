import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { register } from '@/services/auth.service';

export default function RegisterPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await register(form.email, form.password);
        if (result?.id) {
            alert('Registration successful!');
            router.push('/login');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <Layout>
            <h2 className="text-xl mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
                <button type="submit" className="bg-green-600 text-white py-2 rounded">Register</button>
            </form>
        </Layout>
    );
}
