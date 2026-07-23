import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  <Header />

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

  <Footer />
 </main>
}





