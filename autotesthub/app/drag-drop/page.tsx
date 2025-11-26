'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function DragDropPage() {
    const [dropped, setDropped] = useState(false);
    const [draggedItem, setDraggedItem] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent, item: string) => {
        setDraggedItem(item);
        e.dataTransfer.setData('text', item);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        if (data) {
            setDropped(true);
        }
    };

    const handleReset = () => {
        setDropped(false);
        setDraggedItem(null);
    };

    return (
        <div className={styles.container}>
            <h1>Drag & Drop</h1>
            <p>Drag the neon box into the target zone to test drag events.</p>

            <div className={styles.playground}>
                <div className={styles.sourceZone}>
                    <div className={styles.zoneLabel}>Source</div>
                    {!dropped && (
                        <div
                            className={styles.draggable}
                            draggable
                            onDragStart={(e) => handleDragStart(e, 'neon-box')}
                            id="draggable"
                        >
                            <div className={styles.dragIcon}>⬡</div>
                            <div>Drag Me</div>
                        </div>
                    )}
                </div>

                <div className={styles.arrow}>→</div>

                <div
                    className={`${styles.dropzone} ${dropped ? styles.active : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    id="dropzone"
                >
                    <div className={styles.zoneLabel}>Target</div>
                    {dropped ? (
                        <div className={styles.droppedItem}>
                            <div className={styles.dragIcon}>⬡</div>
                            <div>Dropped!</div>
                        </div>
                    ) : (
                        <div className={styles.dropPlaceholder}>Drop Here</div>
                    )}
                </div>
            </div>

            {dropped && (
                <div className={styles.success} id="success-message">
                    ✓ Success! Item successfully dropped into target zone.
                </div>
            )}

            <button className={styles.reset} onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}
