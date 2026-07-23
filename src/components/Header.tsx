"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/sectors", label: "Sectors" },
  { href: "/events", label: "Events" },
  { href: "/position-papers", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export interface HeaderProps {
  /** Logo href. Defaults to "/" so it works on every page. */
  homeHref?: string;
}

export default function Header({ homeHref = "/" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  // Toggle glass background once the user scrolls past the bar height.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.shell}>
      <div className={`${styles.bar} ${scrolled ? styles.barScrolled : ""}`}>
        <Link className={styles.logo} href={homeHref} aria-label="EBG Federation home">
          <img
            src="/assets/logobg.png"
            alt="EBG Federation"
          />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className={styles.cta} href="/membership">
          Become a Member <span>→</span>
        </Link>

        <button
          className={styles.menu}
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? "×" : "☰"}
        </button>

        <div
          className={`${styles.menuPanel} ${menu ? styles.menuPanelOpen : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenu(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}