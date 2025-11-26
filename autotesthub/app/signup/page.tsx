'use client';
import { useState } from 'react';
import { supabase } from '@/services/supabase/client';
import { Button } from '@/components/Button';
import styles from '@/styles/Auth.module.css';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({ email, password });

        if (error) {
            setError(error.message);
        } else {
            alert('Signup successful! Please check your email for confirmation.');
            router.push('/login');
        }
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={handleSignup} className={styles.form}>
                {error && <div className={styles.error}>{error}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                </Button>
            </form>
        </div>
    );
}
