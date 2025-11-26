'use client';
import { Button } from '@/components/Button';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>AutoTestHub</span>
        </h1>
        <p className={styles.subtitle}>
          The ultimate playground for testing automation scripts.
        </p>
      </header>

      <div className={styles.grid}>
        <Link href="/drag-drop" className={styles.card}>
          <div className={styles.cardIcon}>✋</div>
          <h2>Drag & Drop</h2>
          <p>Test mouse interactions, drag events, and drop zones.</p>
        </Link>

        <Link href="/tables" className={styles.card}>
          <div className={styles.cardIcon}>📊</div>
          <h2>Dynamic Tables</h2>
          <p>Verify sorting, pagination, and data extraction.</p>
        </Link>

        <Link href="/forms" className={styles.card}>
          <div className={styles.cardIcon}>📝</div>
          <h2>Complex Forms</h2>
          <p>Interact with multi-selects, sliders, and file uploads.</p>
        </Link>

        <Link href="/shadow-dom" className={styles.card}>
          <div className={styles.cardIcon}>👻</div>
          <h2>Shadow DOM</h2>
          <p>Practice selecting elements inside Shadow Roots and iFrames.</p>
        </Link>

        <Link href="/login" className={styles.card}>
          <div className={styles.cardIcon}>🔐</div>
          <h2>Authentication</h2>
          <p>Test login flows and session management.</p>
        </Link>
      </div>
    </div>
  );
}
