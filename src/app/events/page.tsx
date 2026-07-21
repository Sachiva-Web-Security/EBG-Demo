import Link from "next/link";
import styles from "./events.module.css";

const events = [
  ["2026","NOV 19","23rd Annual Position Paper Launch","The Leela · New Delhi","FLAGSHIP"],
  ["2026","SEP 04","Maharashtra–Europe Summit","Trident · Mumbai","REGIONAL"],
  ["2026","JUL 22","European Ambassadors' Roundtable","EBG Chambers · Delhi","CLOSED-DOOR"],
  ["2026","MAY 14","EV Transition Working Session","Automotive Committee · Pune","COMMITTEE"],
  ["2026","MAR 08","Pharma Regulatory Dialogue","Ministry of Health · Delhi","ADVOCACY"],
  ["2025","DEC 03","22nd Annual Position Paper","ITC Maurya · Delhi","FLAGSHIP"],
  ["2025","OCT 21","Banking Sector Council","Mumbai","COMMITTEE"],
  ["2025","AUG 15","Independence Day Reception","Ambassador's Residence","DIPLOMATIC"],
];

export default function EventsPage(){
 return <main className={styles.page}>
  <header className={styles.header}>
   <Link className={styles.brand} href="/"><img src="/assets/EBG%20Logo%20-%20March%202026_edited.avif" alt="EBG Federation"/></Link>
   <nav><Link href="/#about">About</Link><Link href="/#impact">Membership</Link><Link href="/#sectors">Sectors</Link><Link href="/events">Events</Link><Link href="/#publications">Position Papers</Link><Link href="/contact">Contact</Link></nav>
   <Link className={styles.join} href="/#impact">Become a Member <span>→</span></Link>
  </header>

  <section className={styles.hero}>
   <div className={styles.grid}/>
   <div className={styles.heroInner}><p className={styles.overline}><span/> Events · 04</p><h1>The rooms where<br/><em>consequential things<br/>happen.</em></h1><p className={styles.lead}>From flagship annual summits to closed-door ministerial roundtables,<br/>EBG convenes the most consequential Indo-European gatherings in India.</p></div>
  </section>

  <section className={styles.feature}>
   <div className={styles.featureInner}>
    <div className={styles.featureImage}><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=90" alt="European business summit"/><span>Featured</span></div>
    <div className={styles.featureCopy}><p>19.11.2026 · New Delhi</p><h2>23rd Annual Position Paper Launch</h2><div/><p>Ministers, ambassadors and captains of industry gather for India&apos;s premier bilateral gathering. Live release of the 23rd Position Paper across 17 sectors.</p><a href="#chronicle">View recap →</a></div>
   </div>
  </section>

  <section className={styles.chronicle} id="chronicle">
   <div className={styles.chronicleHead}><h2>The Chronicle.</h2><div><button className={styles.selected}>All</button><button>Flagship</button><button>Committee</button><button>Diplomatic</button><button>Regional</button></div></div>
   <div className={styles.eventList}>{events.map(([year,date,title,place,type])=><article key={title}><b>{year}</b><time>{date}</time><div><h3>{title}</h3><p>{place}</p></div><span>{type}</span><i>→</i></article>)}</div>
  </section>

  <footer className={styles.footer} id="contact">
   <div className={styles.grid}/>
   <div className={styles.footerInner}><p className={styles.overline}>Est. 1997 · Delhi · Mumbai</p><h2>Where<br/><em>Europe</em><br/>meets <em>India.</em></h2>
    <div className={styles.footerInfo}><div className={styles.about}><img src="/assets/EBG%20Logo%20-%20March%202026_edited.avif" alt="EBG Federation"/><p>The definitive advocacy platform representing European corporates in India. Strengthening Indo-European relations since 1997.</p><div className={styles.socials}><span>in</span><span>×</span><span>f</span><span>v</span></div></div><div><h3>Navigate</h3><Link href="/#about">About</Link><Link href="/#impact">Membership</Link><Link href="/#sectors">Sectors</Link><Link href="/events">Events</Link><Link href="/#publications">Papers</Link></div><div><h3>Contact</h3><p>122, Hans Bhawan<br/>(Wing 1) First floor<br/>Bahadur Shah Zafar Marg<br/>IP Estate, Delhi 110002</p><p>rhythm.sehra@ebgindia.org<br/>tania@ebgindia.org</p></div></div>
    <div className={styles.legal}><span>© 2026 EBG Federation. All rights reserved.</span><span>Privacy &nbsp;&nbsp; Terms &nbsp;&nbsp; 28° 37′ N · 77° 14′ E</span></div>
   </div>
  </footer>
 </main>
}

