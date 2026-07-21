import Link from "next/link";
import styles from "./sectors.module.css";

const sectors = [
  [
    "01",
    "AG",
    "Agriculture & Agrochemicals",
    "Food security, crop science and sustainable agricultural policy.",
  ],
  [
    "02",
    "AB",
    "Alcoholic Beverages",
    "Responsible growth, regulation and market access.",
  ],
  [
    "03",
    "AU",
    "Automotive",
    "Mobility, manufacturing and the road to electrification.",
  ],
  [
    "04",
    "AV",
    "Aviation",
    "Connecting markets through safer, smarter aviation.",
  ],
  ["05", "BK", "Banking", "Financial resilience and cross-border capital."],
  [
    "06",
    "CS",
    "CSR & Sustainability",
    "Purpose-led enterprise and measurable impact.",
  ],
  [
    "07",
    "CP",
    "Chemicals & Petrochemicals",
    "Innovation, safety and competitive manufacturing.",
  ],
  ["08", "DF", "Defence", "Strategic collaboration and advanced capability."],
  [
    "09",
    "DX",
    "Digital Transformation",
    "Technology policy for an intelligent economy.",
  ],
  ["10", "FM", "FMCG", "Consumer growth, standards and responsible markets."],
  [
    "11",
    "FS",
    "Financial Services",
    "Deepening access, trust and financial inclusion.",
  ],
  [
    "12",
    "MH",
    "Medical Devices & Healthcare",
    "Better systems and accessible patient outcomes.",
  ],
  ["13", "OG", "Oil & Gas", "Energy security through a balanced transition."],
  [
    "14",
    "PH",
    "Pharmaceuticals",
    "Research, quality and global healthcare access.",
  ],
  ["15", "PW", "Power", "Reliable infrastructure for a low-carbon future."],
  ["16", "RW", "Railway", "Modern mobility and connected infrastructure."],
  ["17", "RT", "Retail", "Consumer confidence and the future of commerce."],
];

export default function SectorsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <img
            src="/assets/EBG%20Logo%20-%20March%202026_edited.avif"
            alt="EBG Federation"
          />
        </Link>
        <nav>
          <Link href="/#about">About</Link>
          <Link href="/#impact">Membership</Link>
          <Link className={styles.active} href="/sectors">
            Sectors
          </Link>
          <Link href="/events">Events</Link>
          <Link href="/#publications">Position Papers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className={styles.join} href="/#impact">
          Become a Member <span>→</span>
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.grid} />
        <div className={styles.heroInner}>
          <p className={styles.overline}>
            <span /> Sectors · 03
          </p>
          <h1>
            Expertise that
            <br />
            moves <em>industries</em>
            <br />
            forward.
          </h1>
          <div className={styles.heroBottom}>
            <p>
              Our Sector Committees unite industry leaders around common
              challenges, shape practical policy recommendations and contribute
              to EBG&apos;s annual Position Paper.
            </p>
            <div>
              <strong>17</strong>
              <span>
                Sector
                <br />
                committees
              </span>
            </div>
            <div>
              <strong>23</strong>
              <span>
                Annual position
                <br />
                papers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.overline}>
            <span /> Collective intelligence
          </p>
          <h2>
            Where shared challenges
            <br />
            become <em>shared progress.</em>
          </h2>
        </div>
        <p>
          Each committee brings together leaders from the same industry to
          exchange best practices, identify regulatory priorities and build a
          unified voice. Their work translates business experience into
          realistic, actionable recommendations for policymakers.
        </p>
      </section>

      <section className={styles.directory}>
        <div className={styles.directoryHead}>
          <h2>Sector Directory.</h2>
          <p>
            Explore the working groups shaping
            <br />
            India&apos;s European business landscape.
          </p>
        </div>
        <div className={styles.cards}>
          {sectors.map(([number, mark, title, copy]) => (
            <article key={title}>
              <div className={styles.cardTop}>
                <span>{number}</span>
                <i>{mark}</i>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#policy">
                Explore committee <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.policy} id="policy">
        <div className={styles.policyInner}>
          <div className={styles.photo}>
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1500&q=90"
              alt="EBG policy gathering"
            />
            <span>Annual policy platform</span>
          </div>
          <div className={styles.policyCopy}>
            <p className={styles.overline}>
              <span /> Position Paper · 2026
            </p>
            <h2>
              One voice.
              <br />
              <em>Seventeen sectors.</em>
            </h2>
            <p>
              Every committee contributes evidence, experience and
              recommendations to EBG&apos;s flagship annual Position
              Paper—turning collective expertise into a clear reform agenda.
            </p>
            <Link href="/#publications">Explore position papers →</Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.grid} />
        <div className={styles.ctaInner}>
          <p className={styles.overline}>Participate · Influence · Lead</p>
          <h2>
            Bring your expertise
            <br />
            to the <em>table.</em>
          </h2>
          <div>
            <p>
              Members help define priorities, participate in policy dialogue
              <br />
              and shape the future of their industry.
            </p>
            <Link href="/contact">Join a sector committee →</Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/">
          <img
            src="/assets/EBG%20Logo%20-%20March%202026_edited.avif"
            alt="EBG Federation"
          />
        </Link>
        <p>© 2026 EBG Federation. All rights reserved.</p>
        <div>
          <Link href="/events">Events</Link>
          <Link href="/#publications">Position Papers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
