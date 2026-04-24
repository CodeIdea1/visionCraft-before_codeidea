'use client';

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [formData, setFormData] = useState({ email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter submitted:', formData);
    setFormData({ email: '' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.logo}>👓 NewGlasses</h3>
          <p className={styles.description}>
            Premium eyewear with quality lenses and competitive prices
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaLinkedinIn /></a>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Lenses</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Our Services</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Free Consultation</a></li>
            <li><a href="#">Fast Delivery</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Warranty</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>JOIN OUR NEWSLETTER</h4>
          <p className={styles.formDescription}>and grab your welcome reward.</p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              required
            />
            <button type="submit" className={styles.submitBtn}>SUBMIT</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2024 NewGlasses. All rights reserved</p>
      </div>
    </footer>
  );
}
