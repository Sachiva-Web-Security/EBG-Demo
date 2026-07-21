"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Eye,
  Feather,
  Globe2,
  Scale,
} from "lucide-react";
import styles from "./position-papers.module.css";

const papers = [
  {
    year: "2025",
    edition: "23rd Edition",
    title: "Enabling the Next Chapter",
    sectors: "17 sectors",
    tone: "gold",
  },
  {
    year: "2024",
    edition: "22nd Edition",
    title: "Partnership for Progress",
    sectors: "16 sectors",
    tone: "navy",
  },
  {
    year: "2022",
    edition: "20th Edition",
    title: "Rebuild. Reform. Reimagine.",
    sectors: "14 sectors",
    tone: "stone",
  },
  {
    year: "2020",
    edition: "18th Edition",
    title: "Resilient Business",
    sectors: "13 sectors",
    tone: "blue",
  },
  {
    year: "2019",
    edition: "17th Edition",
    title: "A Shared Growth Agenda",
    sectors: "12 sectors",
    tone: "sand",
  },
];
const sectors = [
  "Agrochemicals",
  "Automotive",
  "Aviation",
  "Banking",
  "Chemicals",
  "CSR & Sustainability",
  "Defence",
  "Digital Transformation",
  "Financial Services",
  "FMCG",
  "Healthcare",
  "Oil & Gas",
  "Pharmaceuticals",
  "Power",
  "Railway",
  "Retail",
  "Beverages",
];

export default function PositionPapersPage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? papers : papers.filter((p) => Number(p.year) >= 2024);
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
          <Link href="/membership">Membership</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/events">Events</Link>
          <Link className={styles.active} href="/position-papers">
            Position Papers
          </Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className={styles.join} href="/membership">
          Become a Member <span>→</span>
        </Link>
      </header>
      <section className={styles.hero}>
        <div className={styles.grid} />
        <div className={styles.heroInner}>
          <p className={styles.overline}>
            <span /> Position Papers · 05
          </p>
          <h1>
            Evidence into
            <br />
            <em>influence.</em>
            <br />
            Insight into action.
          </h1>
          <div className={styles.heroBottom}>
            <p>
              For more than two decades, EBG&apos;s annual Position Paper has
              translated the collective experience of European business into
              realistic, actionable reforms for India.
            </p>
            <div>
              <strong>23</strong>
              <span>
                Consecutive
                <br />
                annual editions
              </span>
            </div>
            <div>
              <strong>17</strong>
              <span>
                Industries
                <br />
                represented
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.context}>
        <div>
          <p className={styles.overline}>
            <span /> The advocacy platform
          </p>
          <h2>
            A collective voice,
            <br />
            <em>grounded in business.</em>
          </h2>
        </div>
        <div>
          <p>
            Founded as the European Business Group in 1997, EBG is recognised as
            an industry advocacy platform representing European companies and
            Indo-European joint ventures in India.
          </p>
          <p>
            Each annual Position Paper brings together the priorities of our
            member companies, highlights barriers faced by businesses operating
            or expanding in India, and proposes reforms within reach of
            government and industry.
          </p>
        </div>
      </section>
      <section className={styles.pillars}>
        <article>
          <Globe2 />
          <span>01</span>
          <h3>Economic Reports</h3>
          <p>
            Research-led perspectives on the forces shaping bilateral trade and
            investment.
          </p>
        </article>
        <article>
          <Feather />
          <span>02</span>
          <h3>Policy Updates</h3>
          <p>
            Clear interpretation of regulatory developments and their business
            impact.
          </p>
        </article>
        <article>
          <Eye />
          <span>03</span>
          <h3>Member Insights</h3>
          <p>
            On-the-ground experience from leaders operating across India&apos;s
            economy.
          </p>
        </article>
        <article>
          <Scale />
          <span>04</span>
          <h3>Advocacy Actions</h3>
          <p>
            Practical recommendations designed for dialogue, adoption and
            measurable change.
          </p>
        </article>
      </section>
      <section className={styles.feature}>
        <div className={styles.featureInner}>
          <div className={styles.coverLarge}>
            <div className={styles.coverBrand}>EBG Federation</div>
            <span>23rd Annual</span>
            <h2>
              Position
              <br />
              Paper
            </h2>
            <b>2025</b>
            <small>Enabling the next chapter of Indo-European business</small>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.overline}>
              <span /> Latest edition · 2025
            </p>
            <h2>
              Seventeen sectors.
              <br />
              <em>One reform agenda.</em>
            </h2>
            <p>
              Released on 19 November, the 23rd edition presents industry
              insights and recommendations across the full breadth of EBG&apos;s
              committee network. It is shared with key stakeholders throughout
              the Government of India.
            </p>
            <div className={styles.actions}>
              <button>
                <ArrowDownToLine /> Download paper
              </button>
              <Link href="/events">
                View launch event <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.archive}>
        <div className={styles.archiveHead}>
          <div>
            <p className={styles.overline}>
              <span /> Archive
            </p>
            <h2>The Editions.</h2>
          </div>
          <div>
            <button
              className={filter === "All" ? styles.selected : ""}
              onClick={() => setFilter("All")}
            >
              All editions
            </button>
            <button
              className={filter === "Recent" ? styles.selected : ""}
              onClick={() => setFilter("Recent")}
            >
              Recent
            </button>
          </div>
        </div>
        <div className={styles.paperGrid}>
          {visible.map((paper, i) => (
            <article key={paper.year}>
              <div className={styles.miniCover + " " + styles[paper.tone]}>
                <span>EBG</span>
                <b>{paper.year}</b>
                <h3>
                  Position
                  <br />
                  Paper
                </h3>
                <small>{paper.title}</small>
              </div>
              <div className={styles.paperMeta}>
                <p>
                  {paper.edition} · {paper.sectors}
                </p>
                <h3>Position Paper {paper.year}</h3>
                <button>
                  Read & download <ArrowRight />
                </button>
              </div>
              <i>0{i + 1}</i>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.sectors}>
        <div className={styles.sectorHead}>
          <div>
            <p className={styles.overline}>
              <span /> 2025 coverage
            </p>
            <h2>
              Industry priorities,
              <br />
              viewed <em>together.</em>
            </h2>
          </div>
        </div>
        <div className={styles.sectorList}>
          {sectors.map((sector, i) => (
            <span key={sector}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {sector}
            </span>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.grid} />
        <div className={styles.ctaInner}>
          <p className={styles.overline}>Contribute · Advocate · Influence</p>
          <h2>
            Help write the
            <br />
            <em>next chapter.</em>
          </h2>
          <div>
            <p>
              EBG members contribute directly to sector recommendations
              <br />
              through year-round committee participation.
            </p>
            <Link href="/membership">Explore membership →</Link>
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
          <Link href="/sectors">Sectors</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
