import styles from './styles.module.css'
import type {Metadata } from 'next'

export const metadata:Metadata = {
    title: 'About Us',
    description: 'About us page of my next app',
  }

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
         <nav>
            About Navbar 
         </nav>
         <main className={styles.main}>
            {children}
         </main>
      </>
    )
  }