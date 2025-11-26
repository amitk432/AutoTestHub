'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Authentication', href: '/login' }, // Linking to login as entry point
    { label: 'Drag & Drop', href: '/drag-drop' },
    { label: 'Dynamic Tables', href: '/tables' },
    { label: 'Complex Forms', href: '/forms' },
    { label: 'Shadow DOM', href: '/shadow-dom' },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                AutoTestHub
            </div>
            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className={styles.footer}>
                v1.0.0
            </div>
        </aside>
    );
};
