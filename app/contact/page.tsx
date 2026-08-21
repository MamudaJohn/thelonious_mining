import ContentDisplayBorder from "@/components/section/ContentDisplayBorder";
import CtaPanel from "@/components/section/CtaPanel";
import SectionHeadOne from "@/components/section/SectionHeadOne";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";
import MicroCopy from "@/components/ui/paragraphs/MicroCopy";
import ParagraphGrid from "@/components/ui/paragraphs/ParagraphGrid";
import { contactaddress, STEP1 } from "@/lib/data";
import Link from "next/link";
import { Children } from "react";

function AboutPage() {
  return (
    <>
        <section className="hero1" id="hero1">
            <div className="wrap">
            <div className="hero1-grid">
                <EyeBrow text={"Start a conversation"} />
                <h1>{"Tell us where you're standing, and we'll tell you the next step."}</h1>
                <LedeParagraph text={"Pick the option below that fits, or just send a message. A member of the relevant team will follow up within one business day."} />
            </div>
            </div>
        </section>
        <section id="contact">
            <div className="wrap">
                <SectionHeadOne
                eyebrow="start a conversation"
                header="Tell us where you&apos;re standing, and we&apos;ll tell you the next step."
                paragraph=""
                />
    
                <ContentDisplayBorder values={STEP1} contact={true}/>
    
                <div className="cta-panel1" style={{ marginTop: 40 }}>
                    <SectionHeadOne  eyebrow="Step 2" header="Send us the details"/>
                    <form className="">
                        <div className="lead-form1">
                            <div className="">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" placeholder="Full Name" required id="fullname" />
                            </div>
                            <div className="">
                                <label htmlFor="CompanyName">Company Name</label>
                                <input type="text" placeholder="Company Name" required id="CompanyName" />
                            </div>
                            <div className="">
                                <label htmlFor="Email">Email</label>
                                <input type="email" placeholder="Email" required id="Email" />
                            </div>
                            <div className="">
                                <label htmlFor="fullname">Phone (OPTIONAL)</label>
                                <input type="email" placeholder="+234" required id="fullname" />
                            </div>
                        </div>
                        <div className="lead-form2">
                            <div className="">
                                <label htmlFor="fullname">What is this about</label>
                                <select id="choices" name="choices">
                                    <option value="option1">Exploration & Site Scouting</option>
                                    <option value="option2">Active Mining & Mineral Storage</option>
                                    <option value="option3">Site Scouting for Partner Companies</option>
                                    <option value="option3">Market Survey & Investment Analysis</option>
                                    <option value="option3">Mining Operations Management</option>
                                    <option value="option3">Something Else</option>
                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="message">Your Message:</label>
                                <textarea id="message" name="message" rows={5} cols={40} placeholder="Tell us what you need, a mineral, a region, a timeline, or whatever is relevant."></textarea>    
                            </div>
                            <MicroCopy text="We reply within one business day. No spam, no mailing lists you didn't ask for"/>
                        </div>
                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                    </form>
                </div>  
                 
            </div>
        </section>

        <section id="contact">
            <div className="wrap">
                <SectionHeadOne
                eyebrow="Prefer to skip the form?"
                header="Reach us directly."
                paragraph=""
                />
                <ContentDisplayBorder values={contactaddress} />
                    {/* {contactaddress.map((item) => (
                        <ParagraphGrid
                        key={item.title}
                        h1={item.h1}
                        title={item.title}
                        paragraph={item.paragraph}
                        />
                    ))} */}
                <div className="confid-note">
            <div className="icon">i</div>
            <p>
              <b>A note on site visits:</b>{" "}we don&apos;t publish exact mine site coordinates publicly, for security reasons. If your enquiry needs an in-person site visit, we&apos;ll arrange that privately once we understand what you need.
            </p>
          </div>
    
            </div>
        </section>
    </>
  )
}

export default AboutPage;