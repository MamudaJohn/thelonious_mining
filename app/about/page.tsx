import GreenButton from "@/components/buttons/GreenButton"
import ContentDisplayOne from "@/components/section/ContentDisplayOne"
import CtaPanel from "@/components/section/CtaPanel"
import CtaRow from "@/components/section/CtaRow"
import SectionHeadOne from "@/components/section/SectionHeadOne"
import EyeBrow from "@/components/ui/paragraphs/EyeBrow"
import LedeParagraph from "@/components/ui/paragraphs/Lede"
import Link from "next/link"


function AboutPage() {
  return (
    <div className="wrap">
        <section className="hero1" id="hero1">
            <div className="wrap">
            <div className="hero1-grid">
                <EyeBrow text={"About Stratum Resources"} />
                <h1>{"We're new. Here's exactly what that means, and what it doesn't."}</h1>
                <LedeParagraph text={"Thelonious Mining was founded in 2026 to bring exploration, mining, storage and market analysis under one standard of evidence though rigorous enough that you don't have to take our word for any of it."} />
            </div>
            </div>
        </section>


        <section id="principles">
          <div className="wrap">
            <SectionHeadOne
            eyebrow="Why we exist"
            header="Most of this industry asks you to trust a track record. We'd rather earn it in view."
            paragraph="We started Stratum because too many mining engagements run on relationships and reputation instead of evidence anyone can check.."
            />
            <LedeParagraph classname="minilede" text={"We're a young company. We were founded in 2026, with our first concession currently moving through survey and assay. We don't have a decade of completed projects to point to, and we are not going to pretend otherwise. What we can offer instead is a level of transparency that most established operators don't bother with: a verifiable license, named leadership, footage of active work, and a first project we're tracking in the open rather than only announcing once it's finished."} />
          </div>
        </section>


      <section id="principles">
        <div className="wrap">
          <SectionHeadOne
          eyebrow="What we work from"
          header="Four principles that don't bend for a deal."
          paragraph=""
          />
          <div className="minerals-grid">
              <div className="mineral-card">
                <div>
                  <div className="status">01</div>
                  <h4>Evidence over claims</h4>
                  <div className="use"> 
                    Every figure we publish is checkable, assayed, licensed, or independently verified.
                  </div>
                </div>
               </div>
              <div className="mineral-card">
                <div>
                  <div className="status">02</div>
                  <h4>Custody Integrity</h4>
                  <div className="use"> 
                    What we extract is insured and logged from the moment it leaves the ground.
                  </div>
                </div>
              </div>
              <div className="mineral-card">
                <div>
                  <div className="status">03</div>
                  <h4>Security by design</h4>
                  <div className="use"> 
                    Site locations stay confidential by policy, protecting both our work and yours.
                  </div>
                </div>
              </div>
              <div className="mineral-card">
                <div>
                  <div className="status">04</div>
                  <h4>Honest about scale</h4>
                  <div className="use"> 
                    We say plainly what we&apos;ve done and haven&apos;t. There is no inflated history, no invented case studies.
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="principles">
        <div className="wrap">
          <SectionHeadOne
          eyebrow="leadership"
          header="The people behind the license."
          paragraph="Meet the face of the brain of the team. The executive head of this company."
          />
        </div>
      </section>
      <section>
            <div className="wrap info">
              <div className="about_us">
                <EyeBrow text="The only address we publish"/>
                <h3>Head office : visit us directly</h3>
                <div className="about_details">
                  <div className="">
                    <h2>address</h2>
                    <p>82, Mobolaji Bank Anthony Way, Ikeja, Lagos</p>
                  </div>
                  <div className="">
                    <h2>phone</h2>
                    <p>09015581406</p>
                  </div>
                  <div className="">
                    <h2>email</h2>
                    <p>mining@theloniousglobal.com</p>
                  </div>
                  <div className="">
                    <h2>hours</h2>
                    <p>Monday - Friday, 9:00 - 17:00 WAT</p>
                  </div>
                </div>
                  <Link href="/contact" className="nav-cta">
                    Get directions
                  </Link>

              </div>
              <div className="confid-note">
                  <div className="icon">i</div>
                  <p>
                  <b>Why we don&apos;t publish exact site coordinates:</b>{" "}
                  disclosing active mining locations publicly invites
                  claim-jumping and unauthorised entry, so we withhold them by
                  policy. It is a standard practice across the industry. Our head office
                  address below is always public.
                  </p>
              </div>
              <CtaPanel
                        head= "Prefer to talk it through first?"
                        paragraph= "Visit our head office directly, or go to the full contact page for the form and details."
                        link= "Go to contact →"
                        linkto= "contact"
                        />
            </div>
        </section>

      
    </div>
  )
}

export default AboutPage
