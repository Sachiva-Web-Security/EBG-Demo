"use client";
import Link from "next/link";
import {useState} from "react";
import styles from "./contact.module.css";

export default function ContactPage(){
 const [sent,setSent]=useState(false);
 return <main className={styles.page}>
  <header className={styles.header}><Link className={styles.brand} href="/"><img src="/assets/EBG%20Logo%20-%20March%202026_edited.avif" alt="EBG Federation"/></Link><nav><Link href="/#about">About</Link><Link href="/#impact">Membership</Link><Link href="/#sectors">Sectors</Link><Link href="/events">Events</Link><Link href="/#publications">Position Papers</Link><Link className={styles.active} href="/contact">Contact</Link></nav><Link className={styles.join} href="/#impact">Become a Member <span>→</span></Link></header>
  <section className={styles.hero}><div className={styles.grid}/><div className={styles.heroInner}><p className={styles.overline}><span/> Contact · 06</p><h1>Let&apos;s begin a<br/><em>consequential</em><br/>conversation.</h1><p>Whether you are exploring membership, policy collaboration, or a strategic partnership,<br/>the right conversation starts here.</p></div></section>

  <section className={styles.contact}>
   <div className={styles.contactInner}>
    <aside><p className={styles.overline}><span/> Reach us</p><h2>Across India.<br/>Connected to Europe.</h2><div className={styles.office}><small>01 · Delhi Secretariat</small><h3>New Delhi</h3><p>122, Hans Bhawan, Wing 1<br/>First Floor, Bahadur Shah Zafar Marg<br/>IP Estate, Delhi 110002</p><a href="mailto:rhythm.sehra@ebgindia.org">rhythm.sehra@ebgindia.org ↗</a></div><div className={styles.office}><small>02 · Western Council</small><h3>Mumbai</h3><p>Serving the European business community<br/>across Maharashtra and Western India.</p><a href="mailto:tania@ebgindia.org">tania@ebgindia.org ↗</a></div>
    <div className={styles.hours}><span>Office hours</span><b>Monday–Friday</b><b>09:30–18:00 IST</b></div></aside>
    <div className={styles.formWrap}>{sent?<div className={styles.success}><span>✓</span><p className={styles.overline}>Message received</p><h2>Thank you for<br/>reaching out.</h2><p>Our secretariat will review your enquiry and respond shortly.</p><button onClick={()=>setSent(false)}>Send another message</button></div>:<><p className={styles.formIntro}>Tell us what brings you here.</p><form onSubmit={e=>{e.preventDefault();setSent(true)}}><div className={styles.row}><label>First name<input required name="firstName" placeholder="Your first name"/></label><label>Last name<input required name="lastName" placeholder="Your last name"/></label></div><label>Work email<input required type="email" name="email" placeholder="name@company.com"/></label><label>Organisation<input required name="organisation" placeholder="Company or organisation"/></label><label>I&apos;m interested in<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>EBG Membership</option><option>Policy & Sector Committees</option><option>Events & Partnerships</option><option>Media Enquiry</option><option>General Enquiry</option></select></label><label>Your message<textarea required name="message" rows={5} placeholder="How can we help?"/></label><div className={styles.formEnd}><p>By submitting this form, you agree to be contacted by the EBG Federation.</p><button type="submit">Send enquiry <span>→</span></button></div></form></>}</div>
   </div>
  </section>

  <section className={styles.connect}><div className={styles.grid}/><div className={styles.connectInner}><p className={styles.overline}>Europe · India · Business</p><h2>Build the bridge.<br/><em>Shape what&apos;s next.</em></h2><div><p>Membership opens the door to policy influence,<br/>sector intelligence and a trusted business network.</p><Link href="/#impact">Explore membership →</Link></div></div></section>
  <footer className={styles.footer}><Link href="/"><img src="/assets/EBG%20Logo%20-%20March%202026_edited.avif" alt="EBG Federation"/></Link><p>© 2026 EBG Federation. All rights reserved.</p><div><Link href="/events">Events</Link><Link href="/#publications">Position Papers</Link><Link href="/contact">Contact</Link></div></footer>
 </main>
}
