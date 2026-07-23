"use client";

import Link from "next/link";
import { FormEvent } from "react";
import styles from "./Footer.module.css";

export interface FooterProps {
  /** Logo href. Defaults to "/" so it works on every page. */
  homeHref?: string;
}

export default function Footer({ homeHref = "/" }: FooterProps) {
  return (
    <footer className={styles.homeFooter}>
      <div className={styles.homeMap} />
      <div className={styles.homeGrid}>
        <Link className={`${styles.homeLogo} logo`} href={homeHref}>
          <img
            src="/assets/EBG%20Logo%20-%20March%202026_edited.avif"
            alt="EBG Federation"
          />
        </Link>
        <div>
          <h3>Quick Links</h3>
          <Link href={homeHref}>Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/position-papers">Publications</Link>
        </div>
        <div>
          <h3>Resource Links</h3>
          <Link href="/sectors">Sector Committees</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className={styles.homeNewsletter}>
          <h3>Newsletter Signup</h3>
          <p>Stay in the loop with our events and newsletters.</p>
          <form onSubmit={(e: FormEvent) => e.preventDefault()}>
            <input type="email" placeholder="Email address" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
      <div className={styles.homeBottom}>
        <span>© 2026 EBG Federation</span>
        <span>Europe • India • Business</span>
      </div>
    </footer>
  );
}