import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from './Button';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">AutoTestHub</Link>
            </div>
            <div className={styles.links}>
                <Link href="/login" className={styles.link}>Login</Link>
                <Link href="/signup">
                    <Button size="sm">Sign Up</Button>
                </Link>
            </div>
        </nav>
    );
};
