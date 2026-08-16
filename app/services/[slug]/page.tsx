import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import styles from "./page.module.css";
import GreenButton from "@/components/buttons/GreenButton";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";
import CtaRow from "@/components/section/CtaRow";
import SectionHeadOne from "@/components/section/SectionHeadOne";
import ContentDisplayOne from "@/components/section/ContentDisplayOne";
import ContentDisplayBorder from "@/components/section/ContentDisplayBorder";
import DropDownContent from "@/components/section/DropDownContent";
import CtaPanel from "@/components/section/CtaPanel";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.shortdesc,
  };
}

export default async function ServicePage({ params }: Params) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const service = SERVICES.find((service) => service.slug === currentSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="hero1">
        <div className="wrap">
          <div className="hero1-grid">
            <EyeBrow text={`${service.depth} / Service`} />
            <h1>{service.title}</h1>
            <GreenButton text={service.tags} />
            <LedeParagraph text={service.lede} />
            <CtaRow Href1={"/contact"} text1={"Request this service →"}  Href2={"/services"} text2={"See all services"} />
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <SectionHeadOne
            eyebrow="What&apos;s included"
            header="Screening land before capital moves."
            paragraph="Every engagement starts here — de-risking a site before anyone commits to it." 
          />
        <div className="log">
          {service.capability.map((item, i) => (
            <ContentDisplayOne 
            key={i} 
            depth={`0${i+1}`} 
            title={item.title} 
            shortdesc={item.paragraph}/>
          ))}
        </div>
        </div>
      </section>


      <section id="services">
        <div className="wrap">
          <SectionHeadOne
            eyebrow="Who&apos;s this for"
            header="Investors and landowners weighing a first move."
          />
          <ContentDisplayBorder>
          {service.audience.map((item) => (

            <ContentDisplayOne 
            className={"contact-card"}
            key={item.title}  
            depth={item.title} 
            shortdesc={item.paragraph}/>))}  
          </ContentDisplayBorder>
          
        </div>
      </section>


      <section id="services">
        <div className="wrap">
          <SectionHeadOne
            eyebrow="FAQ"
            header=""
        />
        {service.faq.map((item) => (
        <DropDownContent
          key={item.q}
            depth = {item.q}
            title = {item.q}
            shortdesc = {item.a}
        />
          ))}

        <CtaPanel
          head= "Interested in this service?"
          paragraph= "Tell us what you need — we'll scope it out."
          link= "Get in touch →"
          linkto= "contact"
          />
          
          <div style={{ marginTop: 32 }} className="cta-row">
            {generateStaticParams().map((name) => (
              <Link href="/services" className="btn btn-ghost1" key={name.slug}>
                {name.slug} →
              </Link>          
            ))}
          </div>
        </div>

      </section>
    </>
  );
}