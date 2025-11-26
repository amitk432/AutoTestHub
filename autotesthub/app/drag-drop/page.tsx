'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function DragDropPage() {
    const [dropped, setDropped] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDropped(true);
    };

    return (
        <div className={styles.container}>
            <h1>Drag & Drop</h1>
            <p>Drag the box into the target area to verify drag events.</p>

            <div className={styles.playground}>
                <div
                    className={styles.draggable}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text', 'dragged')}
                    id="draggable"
                >
                    Drag Me
                </div>

                <div
                    className={`${styles.dropzone} ${dropped ? styles.active : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    id="dropzone"
                >
                    {dropped ? 'Dropped!' : 'Drop Here'}
                </div>
            </div>

            {dropped && <div className={styles.success} id="success-message">Success! Item dropped.</div>}

            <button
                className={styles.reset}
                onClick={() => setDropped(false)}
            >
                Reset
            </button>
        </div>
    );
}
