import ContentDisplayOne from "@/components/section/ContentDisplayOne";
import CtaRow from "@/components/section/CtaRow";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";
import MicroCopy from "@/components/ui/paragraphs/MicroCopy";
import { SERVICES } from "@/lib/data";

interface PageProps {
    params : Promise<{
        slug: string;
    }>
}


export default async function ServicesPages({ params }: PageProps) {
    const resolvedParams = await params
    const currentSlug = resolvedParams.slug

    const item = SERVICES.find((service)=> (service.slug === currentSlug))
    console.log(item)
  return (
    <div>
        <EyeBrow text={`${item?.depth}`}/>
        <h1>{item?.title}</h1>
        <LedeParagraph text={item?.shortDesc?? ""}/>
        <CtaRow 
        Href1="/contact" 
        text1="Request this service →" 
        Href2="/insights" 
        text2="See all services"/>
        <MicroCopy text="15-minute call, no obligation. We reply within one business day."/>
              
      <ContentDisplayOne 
      slug="Happy" 
      depth="run"
      title="wee"
      tags={["name","word"]}
      shortDesc="This is very interesting" 
      />
    </div>
  )
}



