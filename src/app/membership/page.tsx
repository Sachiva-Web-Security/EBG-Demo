"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Globe2,
  Handshake,
  Landmark,
  Network,
} from "lucide-react";
import styles from "./membership.module.css";

const members = [
  "BARCO",
  "BBVA",
  "Barclays",
  "Carlsberg",
  "Citi",
  "Commerzbank",
  "DBS",
  "Deloitte.",
  "Deoleo",
  "Deutsche Bank",
  "EY",
  "FLIR",
  "Mazars",
  "Fronius",
  "G4S",
  "GEMINI",
  "Getzner",
  "Gulf",
  "HSBC",
  "ICICI Bank",
  "IDH",
  "KFW",
  "Knight Frank",
  "LANXESS",
  "Medtronic",
  "Pernod Ricard",
  "Red Bull",
  "RÖDL",
  "Rolls-Royce",
  "Rosenberger",
  "SAAB",
  "Samson",
  "Standard Chartered",
  "TMF Group",
  "UNI Abex",
  "WEYTEC",
];

const benefits = [
  {
    Icon: Landmark,
    title: "Policy influence",
    copy: "Contribute directly to practical recommendations shared with government and regulatory stakeholders.",
  },
  {
    Icon: Network,
    title: "Trusted network",
    copy: "Build relationships with senior leaders across European, British, American and Indian enterprises.",
  },
  {
    Icon: Globe2,
    title: "Market intelligence",
    copy: "Access sector-specific insight, regulatory developments and Indo-European business perspectives.",
  },
  {
    Icon: Handshake,
    title: "Meaningful access",
    copy: "Join curated roundtables, working sessions, delegations and flagship annual gatherings.",
  },
];

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);
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
          <Link className={styles.active} href="/membership">
            Membership
          </Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/events">Events</Link>
          <Link href="/#publications">Position Papers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className={styles.join} href="#apply">
          Become a Member <span>→</span>
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.grid} />
        <div className={styles.heroInner}>
          <p className={styles.overline}>
            <span /> Membership · 02
          </p>
          <h1>
            Leadership is
            <br />
            stronger when it is
            <br />
            <em>connected.</em>
          </h1>
          <div className={styles.heroBottom}>
            <p>
              Join the platform where industry expertise becomes collective
              influence—and where Europe&apos;s most ambitious businesses help
              shape India&apos;s growth story.
            </p>
            <a href="#apply">
              Start your application <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div>
          <p className={styles.overline}>
            <span /> The federation
          </p>
          <h2>
            Cross-industry.
            <br />
            Cross-border.
            <br />
            <em>One voice.</em>
          </h2>
        </div>
        <div className={styles.overviewCopy}>
          <p>
            EBG Federation represents more than 400 successful executives across
            a wide range of industries. Through its Delhi and Mumbai chapters,
            the network helps European, British and American companies turn
            local knowledge, trusted contacts and collective advocacy into
            meaningful progress.
          </p>
          <div className={styles.metrics}>
            <div>
              <strong>400+</strong>
              <span>
                Member
                <br />
                executives
              </span>
            </div>
            <div>
              <strong>17</strong>
              <span>
                Sector
                <br />
                committees
              </span>
            </div>
            <div>
              <strong>25+</strong>
              <span>
                Years in
                <br />
                India
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.benefitsHead}>
          <p className={styles.overline}>Why EBG</p>
          <h2>
            Membership that
            <br />
            <em>moves business.</em>
          </h2>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map(({ Icon, title, copy }, i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <i>
                <Icon aria-hidden="true" />
              </i>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.network}>
        <div className={styles.networkHead}>
          <div>
            <p className={styles.overline}>
              <span /> Our members
            </p>
            <h2>
              A network built
              <br />
              on credibility.
            </h2>
          </div>
          <p>
            Global organisations and specialist enterprises meet here as
            peers—connected by shared ambition and a commitment to the
            Indo-European opportunity.
          </p>
        </div>
        <div className={styles.logos}>
          {members.map((member, i) => (
            <div key={member} className={i % 7 === 0 ? styles.accent : ""}>
              <span>{member}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.criteria}>
        <div className={styles.criteriaInner}>
          <p className={styles.overline}>
            <span /> Membership criteria
          </p>
          <h2>
            Built for businesses
            <br />
            with a <em>European connection.</em>
          </h2>
          <div className={styles.criteriaGrid}>
            <div>
              <CircleCheck />
              <p>
                European, British or American corporation operating or
                establishing business in India.
              </p>
            </div>
            <div>
              <CircleCheck />
              <p>
                Organisation aligned with responsible growth, constructive
                policy dialogue and collaboration.
              </p>
            </div>
            <div>
              <CircleCheck />
              <p>
                Senior leadership commitment to participate in the
                federation&apos;s committees and initiatives.
              </p>
            </div>
          </div>
          <Link href="#apply">Discuss your eligibility →</Link>
        </div>
      </section>

      <section className={styles.apply} id="apply">
        <div className={styles.applyInner}>
          <aside>
            <p className={styles.overline}>
              <span /> Apply for membership
            </p>
            <h2>
              Your seat at
              <br />
              the table.
            </h2>
            <p>
              Tell us about your organisation and our membership team will
              contact you to discuss the most relevant chapter and sector
              committee.
            </p>
            <div>
              <Building2 />
              <span>
                Delhi Secretariat
                <br />
                <a href="mailto:admin@ebgindia.org">admin@ebgindia.org</a>
              </span>
            </div>
          </aside>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <CircleCheck />
                <p className={styles.overline}>Application received</p>
                <h3>Thank you for your interest.</h3>
                <p>
                  Our membership team will review your details and contact you
                  shortly.
                </p>
                <button onClick={() => setSubmitted(false)}>
                  Submit another application
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className={styles.row}>
                  <label>
                    First name
                    <input required placeholder="First name" />
                  </label>
                  <label>
                    Last name
                    <input required placeholder="Last name" />
                  </label>
                </div>
                <label>
                  Company name
                  <input required placeholder="Organisation" />
                </label>
                <div className={styles.row}>
                  <label>
                    Work email
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                    />
                  </label>
                  <label>
                    Phone number
                    <input required type="tel" placeholder="+91" />
                  </label>
                </div>
                <label>
                  Address in India
                  <input required placeholder="City and registered address" />
                </label>
                <div className={styles.row}>
                  <label>
                    Main sector
                    <select required defaultValue="">
                      <option value="" disabled>
                        Select sector
                      </option>
                      <option>Automotive</option>
                      <option>Banking & Finance</option>
                      <option>Digital Transformation</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    Preferred chapter
                    <select required defaultValue="">
                      <option value="" disabled>
                        Select chapter
                      </option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                    </select>
                  </label>
                </div>
                <label>
                  Tell us about your organisation
                  <textarea
                    rows={4}
                    placeholder="Business activity and membership interest"
                  />
                </label>
                <div className={styles.formEnd}>
                  <p>
                    By submitting, you agree to be contacted regarding EBG
                    membership.
                  </p>
                  <button>
                    Submit application <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
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
