"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CircleCheck,
  Globe2,
  Handshake,
  Landmark,
  Mail,
  Network,
  ShieldCheck,
  Users,
   CalendarDays,
} from "lucide-react";



import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    copy: "Contribute directly to pivotal conversations that shape economic and regulatory environments.",
  },
  {
    Icon: Network,
    title: "Trusted network",
    copy: "Build relationships with senior leaders across Europe, the U.S. and Latin America.",
  },
  {
    Icon: Globe2,
    title: "Market intelligence",
    copy: "Access timely market insight, regulatory developments and cross-border business opportunities.",
  },
  {
    Icon: Handshake,
    title: "Meaningful access",
    copy: "Join member roundtables, working sessions, discussions and flagship events.",
  },
];

const criteria = [
  {
    Icon: ShieldCheck,
    copy: "Champion values of relevance, expertise and credibility in business and policy.",
  },
  {
    Icon: Users,
    copy: "Drive sustainable growth, constructive policy dialogue and collaboration.",
  },
  {
    Icon: Globe2,
    copy: "Connect leaders to opportunities that accelerate international connections and influence.",
  },
];

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className={styles.page}>
      <Header />

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
              Start your application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

<section className={styles.overview}>
  <div className={styles.overviewContainer}>
  {/* Decorative Elements */}

  <div className={styles.leftSide}>
    <p className={styles.overline}>
      <span></span>
      THE FEDERATION
    </p>

    <h2>
      Cross-Industry.
      <br />
      Cross-Border.
      <br />
      <em>One Voice.</em>
    </h2>
  </div>

  <div className={styles.rightSide}>
    <div className={styles.infoCard}>
      <p>
        EBG Federation represents more than 400 successful executives across a
        wide range of industries. Through its Central and National chapters,
        the network fosters European, British and American companies with
        cross-border innovation, market connect and collective advocacy that
        move real progress.
      </p>

      <div className={styles.line}></div>
    </div>
  </div>
  </div>
</section>



      <section className={styles.benefits}>
  <div className={styles.benefitsHero}>
    <div className={styles.benefitsContent}>
      <p className={styles.overline}>Why EBG</p>

      <h2>
        Membership that
        <br />
        <em>moves business.</em>
      </h2>

      <div className={styles.goldLine}></div>

      <p className={styles.benefitsText}>
        EBG connects ambitious organizations to the people, insights and
        opportunities that drive impact across borders and industries.
      </p>
    </div>
  </div>

  <div className={styles.benefitGrid}>
    {benefits.map(({ Icon, title, copy }, i) => (
      <article key={title}>
        

        <div className={styles.smallLine}></div>

        <h3>{title}</h3>
        <p>{copy}</p>

        <div className={styles.cardGlow}></div>
      </article>
    ))}
  </div>

  <div className={styles.bottomButton}>
    <button>Become a Member →</button>
  </div>
</section>



      <section className={styles.network}>
        <div className={styles.networkHead}>
  <div>
    <p className={styles.overline}>
      <span /> Our members
    </p>

    <h2>
      <span className={styles.dark}>A NETWORK BUILT</span>
      <br />
      <span className={styles.gold}>ON CREDIBILITY.</span>
    </h2>
  </div>

  <p>
    We bring organisations and executives together across key
    sectors, connected by common ambition and a commitment to shared
    progress.
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
            <span /> Membership matters
          </p>
          <h2>
            Built for businesses
            <br />
            with a <em>European connection.</em>
          </h2>
          <div className={styles.criteriaGrid}>
  {criteria.map(({ Icon, copy }, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.cardTop} />

      <div className={styles.iconCircle}>
        <Icon aria-hidden="true" />
      </div>

      <div className={styles.cardDivider} />

      <p>{copy}</p>
    </div>
  ))}
</div>
          <Link href="#apply">
            Learn more or apply <ArrowRight size={16} />
          </Link>
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
              the <span className={styles.goldText}>table.</span>
            </h2>
            <span className={styles.lead} />
            <p>
              Take action and a step towards real impact. We look forward to
              welcoming you because we believe in doing business shoulder to
              shoulder.
            </p>
            <div>
              <span className={styles.mailIcon}>
                <Mail size={18} />
              </span>
              <span>
                Send us an email
                <br />
                <a href="mailto:info@ebgfed.org">info@ebgfed.org</a>
              </span>
            </div>

            {/* Decorative dotted globe */}
            <svg
              className={styles.worldMap}
              viewBox="0 0 600 420"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="applyDotGrid"
                  width="11"
                  height="11"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1.3" cy="1.3" r="1.3" fill="rgba(255,255,255,0.16)" />
                </pattern>
                <clipPath id="applyGlobeClip">
                  <circle cx="130" cy="360" r="250" />
                </clipPath>
                <radialGradient id="applyGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <g clipPath="url(#applyGlobeClip)">
                <rect x="-60" y="110" width="660" height="340" fill="url(#applyDotGrid)" />
              </g>
              <path
                d="M175 265 C 260 215, 350 190, 445 130"
                stroke="var(--gold)"
                strokeOpacity="0.45"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M175 265 C 225 245, 265 225, 305 218"
                stroke="var(--gold)"
                strokeOpacity="0.45"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M175 265 C 148 205, 128 150, 112 95"
                stroke="var(--gold)"
                strokeOpacity="0.3"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="175" cy="265" r="24" fill="url(#applyGlow)" />
              <circle cx="175" cy="265" r="4" fill="var(--gold)" />
              <circle cx="445" cy="130" r="3.5" fill="var(--gold)" />
              <circle cx="305" cy="218" r="3.5" fill="var(--gold)" />
              <circle cx="112" cy="95" r="3.5" fill="var(--gold)" />
              <circle cx="390" cy="345" r="3" fill="var(--gold)" />
            </svg>
          </aside>

          <div className={styles.formCard}>
            <span className={styles.avatar}>
              <Users size={20} />
            </span>

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
                    First name<span className={styles.req} />
                    <input required placeholder="First name" />
                  </label>
                  <label>
                    Company name<span className={styles.req} />
                    <input required placeholder="Company" />
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Work email<span className={styles.req} />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                    />
                  </label>
                  <label>
                    Phone number<span className={styles.req} />
                    <input required type="tel" placeholder="+91" />
                  </label>
                </div>
                <label>
                  Address in India<span className={styles.req} />
                  <input required placeholder="City and registered address" />
                </label>
                <div className={styles.row}>
                  <label>
                    I&apos;m looking for<span className={styles.req} />
                    <span className={styles.selectWrap}>
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
                      <ChevronDown size={16} className={styles.chevron} />
                    </span>
                  </label>
                  <label>
                    Preferred chapter<span className={styles.req} />
                    <span className={styles.selectWrap}>
                      <select required defaultValue="">
                        <option value="" disabled>
                          Select chapter
                        </option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                      </select>
                      <ChevronDown size={16} className={styles.chevron} />
                    </span>
                  </label>
                </div>
                <label>
                  Tell us about your organisation<span className={styles.req} />
                  <textarea
                    rows={4}
                    placeholder="Business activity and membership interest"
                  />
                </label>
                <div className={styles.formEnd}>
                  <div className={styles.consent}>
                    <span className={styles.shieldWrap}>
                      <ShieldCheck size={18} />
                    </span>
                    <p>
                      By submitting, you agree to be contacted regarding EBG
                      membership.
                    </p>
                  </div>
                  <button>
                    Submit application <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}