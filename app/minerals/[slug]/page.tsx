import GreenButton from "@/components/buttons/GreenButton";
import ContentDisplayFour from "@/components/section/ContentDisplayFour";
import ContentDisplayOne from "@/components/section/ContentDisplayOne";
import ContentDisplayThree from "@/components/section/ContentDisplayThree";
import CtaPanel from "@/components/section/CtaPanel";
import CtaRow from "@/components/section/CtaRow";
import DropDownContent from "@/components/section/DropDownContent";
import SectionHeadOne from "@/components/section/SectionHeadOne";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";
import MicroCopy from "@/components/ui/paragraphs/MicroCopy";
import { MARKET_TICKER, MINERALS } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";



type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MINERALS.map((mineral) => ({ slug: mineral.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = MINERALS.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.uses,
  };
}

export default async function MineralPage({params}: Params) {
      const resolvedParams = await params;
      const currentSlug = resolvedParams.slug;
    
      const mineral = MINERALS.find((mineral) => mineral.slug === currentSlug);
    
      if (!mineral) {
        notFound();
      }
    
    
    return (
        <>
            <section className="hero1">
                <div className="wrap">
                <div className="hero1-grid">
                    <EyeBrow text={`${mineral.depth} / Service`} />
                    <h1>{mineral.name}</h1>
                    <GreenButton text={mineral.uses} />
                    <LedeParagraph text={mineral.ledeparagraph} />
                    <CtaRow Href1={"/contact"} text1={"Enquire about supply →"}  Href2={"/minerals"} text2={"See all minerals"} />
                    <MicroCopy text="We reply within one business day"/>
                </div>
                </div>
            </section>
            
            <section id="capabilities">
                <div className="wrap">
                <SectionHeadOne
                    eyebrow="What&apos;s included"
                    header="Screening land before capital moves."
                    paragraph="Every engagement starts here — de-risking a site before anyone commits to it." 
                />
                <div className="log">
                {mineral.capabilities.map((item, i) => (
                    <ContentDisplayOne
                    key={i} 
                    depth={`0${i+1}`} 
                    title={item.title} 
                    shortdesc={item.paragraph}/>
                ))}
                </div>
                </div>
            </section>


            <section id="insights">
                <div className="wrap">
                <SectionHeadOne 
                eyebrow="Market Insights"
                header="Current read on the minerals we handle."
                paragraph=""
                />


                {MARKET_TICKER.map((row,index) => {
                    if (row.name == "Mineral" || row.name == mineral.name)
                        return(
                        <ContentDisplayThree key={row.name} name={row.name} trend={row.trend} pct={row.pct} demand={row.demand} signal={row.signal} count={index}/>
                    )
                })}

                </div>
            </section>

            
            <section id="minerals">
                <div className="wrap">
                <SectionHeadOne
                    eyebrow="FAQ"
                    header=""
                />
                {mineral.FaqQuestion.map((item) => (
                <DropDownContent
                key={item.eyebrow}
                    depth = {item.eyebrow}
                    title = {item.eyebrow}
                    shortdesc = {item.title}
                />
                ))}

                <CtaPanel
                head= {`Interested in ${mineral.name}?`}
                paragraph= "Tell us the volume and specification you need, we'll confirm current availability and assay documentation."
                link= "Enquire now →"
                linkto= "contact"
                />
                
                <div style={{ marginTop: 32 }} className="cta-row">
                    {generateStaticParams().slice(0, 3).map((name) => (
                    <Link href="/minerals" className="btn btn-ghost1" key={name.slug}>
                        {name.slug} →
                    </Link>          
                    ))}
                </div>
                </div>

            </section>
        </>
    )
}


