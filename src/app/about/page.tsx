import Link from "next/link";
import { ArrowRight, Building2, Globe2, Handshake, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import {
  Landmark,
  Users,
  CalendarDays,
  Quote,
  Crown,
  Award,
  MapPinned,
  BriefcaseBusiness,
  ShieldCheck,
  Network,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
  <div className={styles.heroOverlay}></div>

  <div className={styles.heroContent}>
    <p className={styles.overline}>ABOUT EBG • 01</p>

    <h1>
      Business bridges.
      <br />
      <em>Built to endure.</em>
    </h1>

    <p className={styles.heroDescription}>
      EBG Federation is the definitive advocacy platform for European business
      in India—bringing leaders together, influencing policy and strengthening
      one of the world's most consequential economic relationships.
    </p>

    <div className={styles.heroStats}>
      <div className={styles.statCard}>
        <div className={styles.statCard}>
  <Landmark size={28} />
  <div>
    <strong>1997</strong>
    <span>Established in India</span>
  </div>
</div>
      </div>

      <div className={styles.statDivider}></div>

      <div className={styles.statCard}>
       <div className={styles.statCard}>
  <Users size={28} />
  <div>
    <strong>400+</strong>
    <span>Business Leaders</span>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
      <section className={styles.story}>
  <div className={styles.storyLeft}>
    <p className={styles.overline}>
      <span></span>
      Who We Are
    </p>

    <h2>
      A federation
      <br />
      shaped
      <br />
      by <em>shared</em>
      <br />
      <em>ambition.</em>
    </h2>

    <div className={styles.storyLine}></div>

    <div className={styles.storyQuote}>
      <small>OUR PURPOSE</small>

      <p>
        "Connecting business, influencing policy,
        and creating pathways to sustainable growth."
      </p>

      <Link href="/membership">
        Discover Membership <ArrowRight size={18} />
      </Link>
    </div>
  </div>

  <div className={styles.storyRight}>
    <p>
      EBG Federation began as the European Business Group in
      1997. Today, it supports and represents European,
      British and American companies operating in India,
      combining local experience with an international
      perspective.
    </p>

    <p>
      Our government-recognised platform helps members
      navigate complex markets, participate in constructive
      policy dialogue and build relationships that turn
      opportunity into sustained progress.
    </p>

    <div className={styles.storyCards}>
      <article>
        <Users size={32} />
        <h3>Represent</h3>
        <p>
          A strong voice for European business in India.
        </p>
      </article>

      <article>
        <Handshake size={32} />
        <h3>Influence</h3>
        <p>
          Shaping policies that foster innovation and growth.
        </p>
      </article>

      <article>
        <Target size={32} />
        <h3>Impact</h3>
        <p>
          Creating meaningful connections that drive progress.
        </p>
      </article>
    </div>
  </div>
</section>


      <section className={styles.values}>
        <article>
          <span>01</span>
          <Globe2 />
          <h3>Connection</h3>
          <p>
            Linking European enterprise with India&apos;s markets, institutions
            and business leadership.
          </p>
        </article>
        <article>
          <span>02</span>
          <Scale />
          <h3>Advocacy</h3>
          <p>
            Translating industry experience into realistic and actionable policy
            recommendations.
          </p>
        </article>
        <article>
          <span>03</span>
          <Handshake />
          <h3>Collaboration</h3>
          <p>
            Creating trusted environments where peers, partners and policymakers
            can work together.
          </p>
        </article>
        <article>
          <span>04</span>
          <Building2 />
          <h3>Growth</h3>
          <p>
            Helping members build resilient organisations and long-term success
            within India.
          </p>
        </article>
      </section>

      <section className={styles.vision}>
        <div className={styles.visionInner}>
          <div className={styles.visionCopy}>
            <p className={styles.overline}>
              <span /> Proud · Stable · Enduring
            </p>
            <h2>
              Chairman&apos;s
              <br />
              <em>Vision.</em>
            </h2>
            <blockquote>
              “Our role is not simply to connect businesses. It is to create the
              conditions in which partnership becomes progress.”
            </blockquote>
            <p>
              EBG Federation is recognised for building bridges, convening
              decision makers and supporting compelling initiatives. Our
              ambition is to remain an essential partner in strengthening
              India–Europe relations—giving industry a credible voice and giving
              collaboration a place to flourish.
            </p>
            <div className={styles.signature}>
              <span />
              <div>
                <strong>Chairman, EBG Federation</strong>
                <small>New Delhi · India</small>
              </div>
            </div>
          </div>
          <div className={styles.portrait}>
            <div className={styles.orbit} />
            <img
  src="/assets/chairman.jpg"
  alt="Chairman of EBG Federation"
/>
            <p>
              Leadership with perspective.
              <br />
              Partnership with purpose.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineHead}>
          <p className={styles.overline}>
            <span /> Our journey
          </p>
          <h2>
            Built over time.
            <br />
            <em>Focused on what&apos;s next.</em>
          </h2>
        </div>
        <div className={styles.years}>
          <article>
            <b>1997</b>
            <span />
            <h3>European Business Group established in India.</h3>
          </article>
          <article>
            <b>2015</b>
            <span />
            <h3>EBG Federation formed under the Companies Act.</h3>
          </article>
          <article>
            <b>2025</b>
            <span />
            <h3>23rd consecutive Annual Position Paper released.</h3>
          </article>
          <article>
            <b>Today</b>
            <span />
            <h3>A growing cross-industry network across Delhi and Mumbai.</h3>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.grid} />
        <div className={styles.ctaInner}>
          <p className={styles.overline}>Europe · India · Business</p>
          <h2>
            Partnership begins
            <br />
            with a <em>conversation.</em>
          </h2>
          <div>
            <p>
              Explore how EBG can connect your organisation
              <br />
              to insight, influence and opportunity.
            </p>
            <Link href="/contact">Speak with our team →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}