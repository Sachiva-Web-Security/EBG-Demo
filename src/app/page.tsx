"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const sectors = [
  "Europe",
  "Economy",
  "Industry",
  "Innovation",
  "Land",
  "Health",
  "Technology",
];
const media = [
  [
    "EBG Secretariat welcomes members at the annual forum",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Collaboration drives competitive growth",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Renewed trade relationships flourish",
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Well-run events strengthen engagement",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=85",
  ],
];
const events = [
  [
    "Nov 06",
    "Networking",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=650&q=85",
  ],
  [
    "Nov 12",
    "Trends",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=650&q=85",
  ],
  [
    "Nov 22",
    "European Business Forum",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=650&q=85",
  ],
  [
    "Nov 29",
    "Taskforce",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=650&q=85",
  ],
];
const Arrow = ({ left = false }: { left?: boolean }) => (
  <span>{left ? "←" : "→"}</span>
);
export default function Home() {
  const [sector, setSector] = useState(0),
    [video, setVideo] = useState(0);
  return (
    <main>
      <Header homeHref="#home" />
      <section className="hero" id="home">
        <video
          key={video}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideo((video + 1) % 2)}
          onError={() => setVideo((video + 1) % 2)}
        >
          <source
            src={
              video === 0
                ? "/assets/hero_video1.mp4"
                : "/assets/hero_video2.mp4"
            }
            type="video/mp4"
          />
        </video>
        <div className="hero-copy">
          <p className="eyebrow">EBG Federation</p>
          <h1>
            Global Economy.
            <br />
            Strategic Partnership.
          </h1>
          <p>
            Connecting businesses. Creating opportunities.
            <br />
            Synergy between Europe &amp; India.
          </p>
          <div className="hero-actions">
            <a className="button gold" href="#impact">
              Become a Member
            </a>
            <a className="button light" href="#publications">
              Publications
            </a>
          </div>
        </div>
        {/* <div className="stats">
          <div>
            <strong>25+</strong>
            <span>Years</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Sectors</span>
          </div>
          <div>
            <strong>400+</strong>
            <span>Members</span>
          </div>
        </div> */}
        <a className="scroll" href="#impact">
          Scroll to explore ↓
        </a>
      </section>
      <section className="sectors section" id="sectors">
        <div className="wrap sector-top">
          <div>
            <p className="kicker">Connected through opportunity</p>
            <h2>
              Europe & India
              <br />
              Connected Across
              <br />
              Borders
            </h2>
            <h3>Industry Sector</h3>
          </div>
          <div className="globe">
            <span />
          </div>
          <div className="location">
            <p>Marseille</p>
            <strong>43.5858° N</strong>
            <strong>7.0255° E</strong>
            <p>New Delhi</p>
            <strong>28.6139° N</strong>
            <strong>77.2090° E</strong>
          </div>
        </div>
        <div className="sector-tabs wrap">
          {sectors.map((x, i) => (
            <button
              key={x}
              className={sector === i ? "active" : ""}
              onMouseEnter={() => setSector(i)}
              onClick={() => setSector(i)}
            >
              <small>0{i + 1}</small>
              {x}
              <span>{i % 2 ? "Trade & policy" : "Business sector"}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="section media wrap" id="media">
        <div className="section-side">
          <p className="kicker">In the spotlight</p>
          <h2>
            High-End
            <br />
            Media
            <br />
            Coverage
          </h2>
          <div className="rounds">
            <button>
              <Arrow left />
            </button>
            <button>
              <Arrow />
            </button>
          </div>
        </div>
        <div className="media-grid">
          {media.map((x, i) => (
            <article className={i === 0 ? "featured" : ""} key={x[0]}>
              <img src={x[1]} alt="Business meeting" />
              <small>{i === 0 ? "Newsroom" : "Press release"}</small>
              <h3>{x[0]}</h3>
              <a href="#">
                Learn More <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="events section" id="events">
        <div className="wrap event-layout">
          <div className="section-side">
            <p className="kicker">What&apos;s happening</p>
            <h2>Events</h2>
            <p>
              Our rewarding business meets, activities and government networking
              sessions are curated to create stronger bonds.
            </p>
            <a className="button outline" href="/events">
              Learn more
            </a>
          </div>
          <div className="event-cards">
            <div className="timeline">
              <span>2026</span>
              <i />
              <b>November</b>
            </div>
            {events.map((x, i) => (
              <article key={x[1]}>
                <img src={x[2]} alt="EBG event" />
                <small>{x[0]}</small>
                <h3>{x[1]}</h3>
                <p>
                  {i % 2
                    ? "Conversations and insights among industry leaders"
                    : "Business connections that move ideas forward"}
                </p>
                <a href="/events">
                  Event details <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="publications section wrap" id="publications">
        <div className="section-side">
          <p className="kicker">Knowledge hub</p>
          <h2>
            Publication
            <br />
            Pages
          </h2>
          <p>
            Find new review initiatives in impactful reports, and subscribe to
            newsletter experiences.
          </p>
          <a className="button outline" href="/position-papers" target="_blank">
            Download Now
          </a>
        </div>
        <div className="magazines">
          {[
            "European Business Magazine",
            "European Business Magazine",
            "European Business 2025",
            "European Business 2026",
          ].map((x, i) => (
            <article key={i}>
              <div className={"cover cover-" + i}>
                <span>Business</span>
                <b>{i === 2 ? "INDIA" : "EUROPE"}</b>
                <small>EBG Federation</small>
              </div>
              <h3>{x}</h3>
              <p>Download Link</p>
            </article>
          ))}
        </div>
      </section>
      <Footer homeHref="#home" />
    </main>
  );
}
