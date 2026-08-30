"use client";

import React, { useState } from 'react'
import MicroCopy from './ui/paragraphs/MicroCopy'
import SectionHeadOne from './section/SectionHeadOne'
import { sendContactEmail } from '@/app/api/submit-form'
import { STEP1 } from '@/lib/data';



export default function ContactFormSection() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const formElement = e.currentTarget;

        const formData = new FormData(e.currentTarget);

        const result = await sendContactEmail(formData);

        setLoading(false);

        if (result.success) {
            setMessage("Your message has been sent!");
            // e.currentTarget.reset();
            formElement.reset();
            
        }else {
            setMessage(result.error?? "");
        }
    }
  
  
  
    return (
        <section id="contact">
            <form onSubmit={handleSubmit}>
                <div className="wrap">
                    <SectionHeadOne eyebrow="step 1" header="Tell us who is reaching out."/>
                    <div className="contact-grid">
                        {
                        STEP1.map((value) => ( 
                                <div key={value.title} className="contact-card">
                                    <input className="custom-radio" type='radio' name='choices' id="choices" value={value.title}/>
                                    <div className="radio-text-content">
                                        <h4>{value.title}</h4>
                                        <p>{value.paragraph}</p>
                                    </div>
                                </div>
                        ))}
                    </div>

                    <div className="cta-panel1" style={{ marginTop: 40 }}>
                        <SectionHeadOne  eyebrow="Step 2" header="Send us the details"/>
                        {/* <form action={handleSubmit}> */}
                            <div className="lead-form1">
                                <div className="">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" placeholder="Full Name" required id="fullname" name="fullname"/>
                                </div>
                                <div className="">
                                    <label htmlFor="CompanyName">Company Name</label>
                                    <input type="text" placeholder="Company Name" required id="CompanyName" name="CompanyName" />
                                </div>
                                <div className="">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" placeholder="Email" required id="Email" name="email" />
                                </div>
                                <div className="">
                                    <label htmlFor="phone">Phone (OPTIONAL)</label>
                                    <input type="phone" placeholder="+234" required id="phone" name='phone' />
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
                            <input type="submit" disabled={loading} value={loading? "Sending..." : "Send Message"} className="btn btn-primary"/>
                            {message && <p>{message}</p>}
                    </div>  
                </div>
            </form>
        </section>
  )
}

