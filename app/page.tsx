import Link from "next/link";
import { SERVICES, MINERALS, PROCESS_STEPS, FEATURED_ARTICLES, MARKET_TICKER, CONTACT_TYPES } from "@/lib/data";
import TrustStrip from "@/components/home/TrustStrip";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";
import CtaRow from "@/components/section/CtaRow";
import MicroCopy from "@/components/ui/paragraphs/MicroCopy";
import HeaderOne from "@/components/ui/headers/HeaderOne";
import ContentDisplayOne from "@/components/section/ContentDisplayOne";
import ContentDisplayTwo from "@/components/section/ContentDisplayTwo";
import ContentDisplayThree from "@/components/section/ContentDisplayThree";
import ContentDisplayFour from "@/components/section/ContentDisplayFour";
import SectionHeadOne from "@/components/section/SectionHeadOne";
import ContentDisplayBorder from "@/components/section/ContentDisplayBorder";
import CtaPanel from "@/components/section/CtaPanel";

export default function HomePage() {
  return (
    <div className="">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <EyeBrow text="Exploration to market"/>
            <h1>
              We find what&apos;s
              <br />
              beneath. <em>You decide</em>
              <br />
              what it&apos;s worth.
            </h1>
            <LedeParagraph text="Thelonious Mining scouts, assays, mines, stores and reports on precious minerals — so investors, partners and governments make decisions on evidence, not estimates."/>
            <CtaRow Href1="/contact" text1="Request a site feasibility call →"/>
            <MicroCopy text="15-minute call, no obligation. We reply within one business day."/>
          </div>

          <div className="core-wrap">
            <div className="core-scale">
              <span>0m</span>
              <span>80m</span>
              <span>160m</span>
              <span>240m</span>
              <span>320m</span>
              <span>400m</span>
            </div>
            <div className="core-tube">
              {MINERALS.map((m) => (
                <div
                  key={m.slug}
                  className="thelonious"
                  style={{ flex: 1, background: m.color }}
                >
                  <div className="thelonious-tag">
                    <b>{m.name}</b>
                    {m.uses}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <TrustStrip />

      {/* ===== FOOTAGE ===== */}
      <section id="footage">
        <div className="wrap">
          <SectionHeadOne 
          eyebrow="See it, don&apos;t just take our word for it" 
          header="Watch the work. Recorded, on request." 
          paragraph="We&apos;re a young company, so we lead with access instead of history — geologist-narrated footage from active work."/>

          <div className="footage-grid">
            <div className="video-panel">
              <div className="thelonious-bg" />
              <div className="live-badge">
                <span className="live-dot" />
                New footage weekly
              </div>
              <div className="play-btn" />
              <div className="video-caption">
                <b>Field walkthrough — current survey</b>
                6 min · geologist-narrated
              </div>
            </div>
            <div className="footage-side">
              <div>
                <h3>Nothing to hide about the work — just the coordinates</h3>
                <p>
                  No long back catalogue to point to yet, so instead of
                  testimonials, you get direct footage of active work and the
                  option to visit in person, arranged privately per visitor.
                </p>
              </div>
              <Link href="/contact" className="btn btn-ghost" style={{ justifyContent: "center" }}>
                Arrange a private site visit →
              </Link>
            </div>
          </div>

          <div className="confid-note">
            <div className="icon">i</div>
            <p>
              <b>Why we don&apos;t publish exact site coordinates:</b>{" "}
              disclosing active mining locations publicly invites
              claim-jumping and unauthorised entry, so we withhold them by
              policy — standard practice across the industry. Our head office
              address below is always public.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services">
        <div className="wrap">
          <SectionHeadOne 
          eyebrow="what we do"
          header="Five disciplines. One chain of custody, from ground to ledger."
          paragraph="Each service stands alone or connects into the next."
          />

          <div className="log">
            {SERVICES.map((s) => (
              <ContentDisplayOne key={s.slug} slug={s.slug} depth={s.depth} title={s.title} tags={s.tags} shortdesc={s.shortdesc} jointags={true}/>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/services" className="btn btn-ghost">
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MINERALS ===== */}
      <section id="minerals">
        <div className="wrap">
          <SectionHeadOne 
          eyebrow="Minerals we work with"
          header="Seven materials, tracked from deposit to delivery."
          paragraph=""
          />
          <div className="minerals-grid">
            {MINERALS.slice(0, 3).map((m) => (
              <Link href={`/minerals/${m.slug}`} className="mineral-card" key={m.slug}>
                <div>
                  <div className="swatch" style={{ background: m.color }} />
                  <h4>{m.name}</h4>
                  <div className="use">{m.uses}</div>
                </div>
                <div className="status">{m.status}</div>
              </Link>
            ))}
            <Link href="/minerals" className="mineral-card mineral-card-more">
              <span>See all 7 minerals →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process">
        <div className="wrap">
          <SectionHeadOne 
          eyebrow="How a project moves"
          header="From first survey to your monthly report."
          paragraph=""
          />
          <div className="process-list">
            {PROCESS_STEPS.map((step) => (
              <ContentDisplayTwo key={step.title} title={step.title} heading={step.heading} paragraph={step.paragraph}/>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section id="insights">
        <div className="wrap">
          <SectionHeadOne 
          eyebrow="Market Insights"
          header="Current read on the minerals we handle."
          paragraph=""
          />


          {MARKET_TICKER.map((row,index) => (
            <ContentDisplayThree key={row.name} name={row.name} trend={row.trend} pct={row.pct} demand={row.demand} signal={row.signal} count={index}/>
          ))}
          <div style={{ marginTop: 18 }}>
            <Link href="/contact" className="log-link">
              See full market data & all reports →
            </Link>
          </div>

          <div className="insights-cols">
            {FEATURED_ARTICLES.map((a) => (
              <ContentDisplayFour key={a.slug} slug={a.slug} cat={a.cat} title={a.title} sub={a.sub}/>
            ))}
          </div>

          <div className="lead-magnet">
            <div>
              <h4>Get the full quarterly mineral briefing</h4>
              <p>All seven minerals, extraction-cost modelling, and our read on where to invest next — sent free each quarter.</p>
            </div>
            <form className="lead-form">
              <input type="email" placeholder="you@company.com" required />
              <button type="submit">Send it to me</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact">
        <div className="wrap">
          <SectionHeadOne
          eyebrow="start a conversation"
          header="Tell us where you&apos;re standing, and we&apos;ll tell you the next step."
          paragraph=""
          />


          <ContentDisplayBorder values={CONTACT_TYPES}/>

          <CtaPanel
          head= "Prefer to talk it through first?"
          paragraph= "Visit our head office directly, or go to the full contact page for the form and details."
          link= "Go to contact →"
          linkto= "contact"
          />


          {/* <div className="cta-panel" style={{ marginTop: 40 }}>
            <div>
              <h3>Prefer to talk it through first?</h3>
              <p>Visit our head office directly, or go to the full contact page for the form and details.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Go to contact →
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}