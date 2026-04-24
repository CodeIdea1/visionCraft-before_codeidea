'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className={styles.mainNav}>
        <div className={styles.mainNavContent}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#eyeglasses">Eyeglasses</a></li>
            <li><a href="#sunglasses">Sunglasses</a></li>
            <li><a href="#ai-glasses">AI Glasses</a></li>
            <li><a href="#premium-brands">Premium Brands</a></li>
            <li><a href="#lenses">Lenses</a></li>
          </ul>
          <div className={styles.icons}>
            <div className={styles.searchContainer}>
              <button 
                className={`${styles.searchButton} ${isSearchOpen ? styles.searchButtonActive : ''}`} 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <input 
                type="text" 
                className={`${styles.searchInput} ${isSearchOpen ? styles.searchInputOpen : ''}`}
                placeholder="Search glasses..."
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
            </div>
            <button className={styles.iconButton} onClick={() => setIsFavoritesOpen(true)} aria-label="Favorites">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button className={styles.iconButton} onClick={() => setIsCartOpen(true)} aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className={styles.badge}>0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div className={`${styles.sidebar} ${isCartOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Shopping Cart</h3>
          <button className={styles.closeButton} onClick={() => setIsCartOpen(false)} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.emptyState}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>Your cart is empty</p>
          </div>
        </div>
      </div>

      {/* Favorites Sidebar */}
      <div className={`${styles.sidebar} ${isFavoritesOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Favorites</h3>
          <button className={styles.closeButton} onClick={() => setIsFavoritesOpen(false)} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.emptyState}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p>No favorites yet</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isCartOpen || isFavoritesOpen) && (
        <div className={styles.overlay} onClick={() => { setIsCartOpen(false); setIsFavoritesOpen(false); }} />
      )}
    </>
  );
};

export default Navbar;
