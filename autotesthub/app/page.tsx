'use client';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>AutoTestHub</span>
        </h1>
        <p className={styles.description}>
          A unified automation testing sandbox for verifying your scripts.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Authentication &rarr;</h2>
            <p>Test login and signup flows with real Supabase backend.</p>
            <div className={styles.actions}>
              <Link href="/login"><Button>Login</Button></Link>
              <Link href="/signup"><Button variant="secondary">Signup</Button></Link>
            </div>
          </div>

          <div className={styles.card}>
            <h2>UI Interactions &rarr;</h2>
            <p>Test hover effects, button states, and responsive design.</p>
            <div className={styles.actions}>
              <Button onClick={() => alert('Clicked!')}>Click Me</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Alerts & Modals &rarr;</h2>
            <p>Trigger alerts and modals for testing popups.</p>
            <div className={styles.actions}>
              <Button variant="secondary" onClick={() => alert('This is an alert!')}>
                Trigger Alert
              </Button>
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Test Modal"
      >
        <p>This is a modal dialog for testing purposes. You can verify that it overlays the content and blocks interaction with the background.</p>
      </Modal>
    </div>
  );
}
