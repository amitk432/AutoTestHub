'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface User {
    id: number;
    name: string;
    role: string;
    status: 'Active' | 'Inactive';
}

const initialData: User[] = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Charlie Brown', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Diana Prince', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Evan Wright', role: 'Editor', status: 'Inactive' },
];

export default function TablesPage() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate network delay
        setTimeout(() => {
            setData(initialData);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className={styles.container}>
            <h1>Dynamic Tables</h1>
            <p>Data loads asynchronously. Test wait conditions and cell verification.</p>

            {loading ? (
                <div className={styles.loading} id="loading">Loading data...</div>
            ) : (
                <table className={styles.table} id="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <button className={styles.actionBtn}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
