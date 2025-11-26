'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button';

const skillOptions = ['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'Docker'];

export default function FormsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: 5,
        startDate: '',
        skills: [] as string[],
        resume: null as File | null,
    });

    const handleSkillToggle = (skill: string) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify({
            ...formData,
            resume: formData.resume?.name || 'No file'
        }, null, 2));
    };

    return (
        <div className={styles.container}>
            <h1>Complex Forms</h1>
            <p>Test interactions with sliders, date pickers, multi-selects, and file uploads.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>

                <div className={styles.group}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        id="email"
                        placeholder="your@email.com"
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
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        id="date"
                    />
                </div>

                <div className={styles.group}>
                    <label>Skills (Select multiple)</label>
                    <div className={styles.skillsGrid}>
                        {skillOptions.map(skill => (
                            <button
                                key={skill}
                                type="button"
                                className={`${styles.skillChip} ${formData.skills.includes(skill) ? styles.selected : ''}`}
                                onClick={() => handleSkillToggle(skill)}
                                id={`skill-${skill.toLowerCase()}`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.group}>
                    <label>Upload Resume</label>
                    <input
                        type="file"
                        className={styles.file}
                        id="resume"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                        accept=".pdf,.doc,.docx"
                    />
                    {formData.resume && (
                        <div className={styles.fileName}>{formData.resume.name}</div>
                    )}
                </div>

                <Button type="submit">Submit Application</Button>
            </form>
        </div>
    );
}
