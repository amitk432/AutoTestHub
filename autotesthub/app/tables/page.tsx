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
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState({ name: '', role: '' });

    useEffect(() => {
        // Simulate network delay
        setTimeout(() => {
            setData(initialData);
            setLoading(false);
        }, 1500);
    }, []);

    const handleEdit = (user: User) => {
        setEditingId(user.id);
        setEditForm({ name: user.name, role: user.role });
    };

    const handleSave = (id: number) => {
        setData(prev => prev.map(user =>
            user.id === id
                ? { ...user, name: editForm.name, role: editForm.role }
                : user
        ));
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this user?')) {
            setData(prev => prev.filter(user => user.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <h1>Dynamic Tables</h1>
            <p>Data loads asynchronously. Test wait conditions, editing, and cell verification.</p>

            {loading ? (
                <div className={styles.loading} id="loading">
                    <div className={styles.spinner}></div>
                    Loading data...
                </div>
            ) : (
                <div className={styles.tableWrapper}>
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
                                    <td>
                                        {editingId === user.id ? (
                                            <input
                                                type="text"
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                className={styles.editInput}
                                            />
                                        ) : (
                                            user.name
                                        )}
                                    </td>
                                    <td>
                                        {editingId === user.id ? (
                                            <select
                                                value={editForm.role}
                                                onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                                                className={styles.editInput}
                                            >
                                                <option value="Admin">Admin</option>
                                                <option value="Editor">Editor</option>
                                                <option value="Viewer">Viewer</option>
                                            </select>
                                        ) : (
                                            user.role
                                        )}
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        {editingId === user.id ? (
                                            <div className={styles.actionGroup}>
                                                <button
                                                    className={styles.saveBtn}
                                                    onClick={() => handleSave(user.id)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className={styles.cancelBtn}
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <div className={styles.actionGroup}>
                                                <button
                                                    className={styles.editBtn}
                                                    onClick={() => handleEdit(user)}
                                                    id={`edit-${user.id}`}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className={styles.deleteBtn}
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
