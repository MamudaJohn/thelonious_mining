import Link from "next/link";
import { SERVICES, MINERALS, PROCESS_STEPS, FEATURED_ARTICLES, MARKET_TICKER } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Exploration to market</div>
            <h1>
              We find what&apos;s
              <br />
              beneath. <em>You decide</em>
              <br />
              what it&apos;s worth.
            </h1>
            <p className="lede">
              Thelonious Mining scouts, assays, mines, stores and reports on
              precious minerals — so investors, partners and governments make
              decisions on evidence, not estimates.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="btn btn-primary">
                Request a site feasibility call →
              </Link>
              <Link href="/insights" className="btn btn-ghost">
                Get the market report
              </Link>
            </div>
            <div className="microcopy">
              <span className="dot" />
              15-minute call, no obligation. We reply within one business day.
            </div>
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
      <div className="trust">
        <div className="wrap">
          <div className="stat">
            <div className="num">2026</div>
            <div className="label">Founded</div>
          </div>
          <div className="stat">
            <div className="num">7</div>
            <div className="label">Minerals in scope</div>
          </div>
          <div className="stat">
            <div className="num">Licensed</div>
            <div className="label">Registered mining operator</div>
          </div>
          <div className="stat">
            <div className="num">By request</div>
            <div className="label">Private site visits</div>
          </div>
        </div>
      </div>

      {/* ===== FOOTAGE ===== */}
      <section id="footage">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">See it, don&apos;t just take our word for it</div>
              <h2>Watch the work. Recorded, on request.</h2>
            </div>
            <p>
              We&apos;re a young company, so we lead with access instead of
              history — geologist-narrated footage from active work.
            </p>
          </div>

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
          <div className="section-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2>Five disciplines. One chain of custody, from ground to ledger.</h2>
            </div>
            <p>Each service stands alone or connects into the next.</p>
          </div>

          <div className="log">
            {SERVICES.map((s) => (
              <div className="log-row" key={s.slug}>
                <div className="log-depth">{s.depth}</div>
                <div>
                  <h3>{s.title}</h3>
                  <span className="tag">{s.tags.join(" · ")}</span>
                  <p style={{ marginTop: 10 }}>{s.shortDesc}</p>
                </div>
                <Link href={`/services/${s.slug}`} className="log-link">
                  Learn more →
                </Link>
              </div>
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
          <div className="section-head">
            <div>
              <div className="eyebrow">Minerals we work with</div>
              <h2>Seven materials, tracked from deposit to delivery.</h2>
            </div>
          </div>
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
          <div className="section-head">
            <div>
              <div className="eyebrow">How a project moves</div>
              <h2>From first survey to your monthly report.</h2>
            </div>
          </div>
          <div className="process-list">
            {PROCESS_STEPS.map((step) => (
              <div className="step" key={step.title}>
                <div className="step-num">{step.title}</div>
                <div>
                  <h3>{step.heading}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section id="insights">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Market insights</div>
              <h2>Current read on the minerals we handle.</h2>
            </div>
          </div>

          <div className="market-panel">
            <div className="ticker-row head">
              <div>Mineral</div>
              <div>Trend (90d)</div>
              <div>Demand</div>
              <div>Signal strength</div>
            </div>
            {MARKET_TICKER.map((row) => (
              <div className="ticker-row" key={row.name}>
                <div>{row.name}</div>
                <div className={row.trend}>
                  {row.trend === "up" ? "▲" : "▼"} {row.pct}
                </div>
                <div>{row.demand}</div>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${row.signal}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <Link href="/insights" className="log-link">
              See full market data & all reports →
            </Link>
          </div>

          <div className="insights-cols">
            {FEATURED_ARTICLES.map((a) => (
              <div className="insight-card" key={a.slug}>
                <div className="cat">{a.cat}</div>
                <h4>{a.title}</h4>
                <p>{a.sub}</p>
                <Link href={`/insights/${a.slug}`} className="log-link" style={{ display: "inline-block", marginTop: 10 }}>
                  Read report →
                </Link>
              </div>
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
          <div className="section-head">
            <div>
              <div className="eyebrow">Start a conversation</div>
              <h2>Tell us where you&apos;re standing, and we&apos;ll tell you the next step.</h2>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h4>Investors</h4>
              <p>Request our current market report and a feasibility read on a mineral or region you&apos;re watching.</p>
              <Link href="/contact">Request market report →</Link>
            </div>
            <div className="contact-card">
              <h4>Companies seeking a site</h4>
              <p>We&apos;ll scout, assess and carry a concession through to government-ready feasibility on your behalf.</p>
              <Link href="/contact">Start a site request →</Link>
            </div>
            <div className="contact-card">
              <h4>Existing operators</h4>
              <p>Hand us day-to-day running of your active site — crew, compliance, output reporting.</p>
              <Link href="/contact">Discuss operations support →</Link>
            </div>
          </div>

          <div className="cta-panel" style={{ marginTop: 40 }}>
            <div>
              <h3>Prefer to talk it through first?</h3>
              <p>Visit our head office directly, or go to the full contact page for the form and details.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Go to contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}