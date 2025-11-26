'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function ShadowDomPage() {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hostRef.current && !hostRef.current.shadowRoot) {
            const shadow = hostRef.current.attachShadow({ mode: 'open' });

            const container = document.createElement('div');
            container.style.padding = '20px';
            container.style.background = '#334155';
            container.style.borderRadius = '8px';
            container.style.color = 'white';

            const title = document.createElement('h3');
            title.textContent = 'Inside Shadow DOM';

            const button = document.createElement('button');
            button.textContent = 'Shadow Button';
            button.id = 'shadow-btn';
            button.style.padding = '8px 16px';
            button.style.background = '#818cf8';
            button.style.border = 'none';
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            button.onclick = () => alert('Shadow Button Clicked!');

            container.appendChild(title);
            container.appendChild(button);
            shadow.appendChild(container);
        }
    }, []);

    return (
        <div className={styles.container}>
            <h1>Shadow DOM & iFrames</h1>
            <p>Elements below are isolated. Test your ability to pierce the Shadow DOM.</p>

            <div className={styles.section}>
                <h2>Shadow Host</h2>
                <div ref={hostRef} id="shadow-host"></div>
            </div>
        </div>
    );
}
