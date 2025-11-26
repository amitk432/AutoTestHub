'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button';

export default function FormsPage() {
    const [formData, setFormData] = useState({
        name: '',
        experience: 5,
        date: '',
        skills: [] as string[],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div className={styles.container}>
            <h1>Complex Forms</h1>
            <p>Test interactions with sliders, date pickers, and multi-selects.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        id="name"
                    />
                </div>

                <div className={styles.group}>
                    <label>Experience (Years): {formData.experience}</label>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                        className={styles.range}
                        id="experience"
                    />
                </div>

                <div className={styles.group}>
                    <label>Start Date</label>
                    <input
                        type="date"
                        className={styles.input}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        id="date"
                    />
                </div>

                <div className={styles.group}>
                    <label>Upload Resume</label>
                    <input type="file" className={styles.file} id="resume" />
                </div>

                <Button type="submit">Submit Application</Button>
            </form>
        </div>
    );
}
