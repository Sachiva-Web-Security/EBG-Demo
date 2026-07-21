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
  "/assets/membership_logo_normalized/100.png",
  "/assets/membership_logo_normalized/55.png",
  "/assets/membership_logo_normalized/57.png",
  "/assets/membership_logo_normalized/58.png",
  "/assets/membership_logo_normalized/65.png",
  "/assets/membership_logo_normalized/66.png",
  "/assets/membership_logo_normalized/67.png",
  "/assets/membership_logo_normalized/6c5cca_0fefd5aec7fd45b8a742e3d9edd5a363~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_100e69c269de4652a3dae39486437887~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_10b406f453264c788283b1805308529e~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_155ec5e2aeb343229d0fc693f78de090~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_15ddfd83d16848ec8fe206f4b4b2fa13~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_232bbffb042c43218d0c998344791287~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_232c2c0fde07426a92df62ee7381e839~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_23a89042b84346389fd576cf2b1ad01c~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_2910bf70ef51493eacf6b801eae87b71~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_2979314da39b48bcb82a441ef3f35e66~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_3d8e580ec5324cf5b722067bdcb3a1ea~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_3f36bf997b4842db8960c353027c60ff~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_40d4f49b822545f19366d7403c852ff4~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_47a50265541b44219ae0b518bc5dc149~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_52fec15cc7b84140950dbca544f473ae~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_553f19eb49fd46cdbdfda6e98467800b~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_569bc381b82c4ab5a9dd4fa24134707f~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_5d76855839d94302b656b5db6e2e7e77~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_625f5b30af9c4135805c0f9c694c096f~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_634e478cbcee4b0da9fb8a85f31d3d77~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_63a7053ac1f946eca7dd53c99bd00e91~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_6ab1545c35ba4b73bae9f1060561534c~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_70c4c5ad849741d18d5ce98baad31cc3~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_77f96847775045f68d5a931b91e69a38~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_7a1f32ca165647d4ac13ee75074309ea~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_808dc7b8f8864eb58c4787e0734f856f~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_9a3e3355b320484289e4ecce0c5a2937~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_9b3ea324d892469280340e93deec09c6~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_a08f05abb7d44f47b31ac7e4217a5634~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_a14493300c5744ed90ec896360841c80~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_a4b17435225d4c359966f6ace397deb0~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_a7da283885c14338aee227298d77523e~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_b4ff3afc096348f8a28aa067d686f186~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_b8d55c8b89ed4b9cbf3dc6f111cb853a~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_bda6b649d4864ebf802b6498789c4019~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_c022136eed8341528efbde8bc4fc67de~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_c24e1b082228480bb2d45a2144b07b03~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_d2eaba6274d746a391c2216c1f4bb10e~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_d3063649551345618eafb0eebe53d14c~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_de71b9a6d80c465c97706d185dd4c82a~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_e7f370ebfc6749b5a3ad5917dc3b8a28~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_e804ff4f40ed47a6b12c1bad2090fd46~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_e84dec97fe8047a5b174c1097b2e24f2~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_e998274b3f314c99a1ecde64b850b360~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_ec3d91981c2745d19719efcb722440b6~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_f37d62e5d9a7416c9b022d7e8e000989~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_f6a5f6d5fe644069a72af611bf7a4e00~mv2.png",
  "/assets/membership_logo_normalized/6c5cca_f7e47e54d25349a6b36faebc7a0147a6~mv2.png",
  "/assets/membership_logo_normalized/71.png",
  "/assets/membership_logo_normalized/77.png",
  "/assets/membership_logo_normalized/78.png",
  "/assets/membership_logo_normalized/79.png",
  "/assets/membership_logo_normalized/80.png",
  "/assets/membership_logo_normalized/81.png",
  "/assets/membership_logo_normalized/82.png",
  "/assets/membership_logo_normalized/88.png",
  "/assets/membership_logo_normalized/89.png",
  "/assets/membership_logo_normalized/91.png",
  "/assets/membership_logo_normalized/92.png",
  "/assets/membership_logo_normalized/93.png",
  "/assets/membership_logo_normalized/96.png",
  "/assets/membership_logo_normalized/97.png",
  "/assets/membership_logo_normalized/98.png",
  "/assets/membership_logo_normalized/99.png",
  "/assets/membership_logo_normalized/BBVA.png",
  "/assets/membership_logo_normalized/LA%20Tech%20-%20Logo%20Final_edited.png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px)%20(1)%20(1).png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px)%20(1).png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px)%20(2).png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px)%20(4).png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px)%20(9).png",
  "/assets/membership_logo_normalized/Untitled%20(1080%20x%201080%20px).png",
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
          <Link href="/position-papers">Position Papers</Link>
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
          {members.map((logo, i) => (
            <div key={logo} className={i % 7 === 0 ? styles.accent : ""}>
              <span>EBG Member</span>
              <img
                src={logo}
                alt={"EBG member logo " + (i + 1)}
                loading="lazy"
              />
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
