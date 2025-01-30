'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, Info, Film, ImageIcon, Bell, Phone } from 'lucide-react'
import styles from '../styles/header.module.css'
import { Button } from './ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Falis Leo" width={120} height={50} />
          
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>

        {/* Navigation Menu */}
        <nav 
          id="mobile-menu"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
        >
          <div className={styles.navContent}>
            <Link href="/" className={styles.navLink} onClick={toggleMenu}>
              <Home className={styles.navIcon} />
              Home
            </Link>
            <Link href="/about" className={styles.navLink} onClick={toggleMenu}>
              <Info className={styles.navIcon} />
              About us
            </Link>
            <Link href="/movies" className={styles.navLink} onClick={toggleMenu}>
              <Film className={styles.navIcon} />
              Movies
            </Link>
            <Link href="/gallery" className={styles.navLink} onClick={toggleMenu}>
              <ImageIcon className={styles.navIcon} />
              Gallery
            </Link>
            <Link href="/announcements" className={styles.navLink} onClick={toggleMenu}>
              <Bell className={styles.navIcon} />
              Announcements
            </Link>
            <Button>
              <Phone className={styles.buttonIcon} />
              Contact Us
            </Button>
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  )
}

