import Link from "next/link";
import { MINERALS, SERVICES } from "@/lib/data";
import styles from "./page.module.css";
import EyeBrow from "@/components/ui/paragraphs/EyeBrow";
import LedeParagraph from "@/components/ui/paragraphs/Lede";

export default function MineralIndexPage() {
  return (
    <>
        <section className="hero1">
            <div className="wrap">
            <div className="hero1-grid">
                <EyeBrow text={"Full mineral index"} />
                <h1>Seven materials, tracked from deposit to delivery.</h1>
                {/* <GreenButton text={service.tags} /> */}
                <LedeParagraph text={"Every mineral we handle, with current production status and a direct line to enquire about supply."} />
                {/* <CtaRow Href1={"/contact"} text1={"Request this service →"}  Href2={"/services"} text2={"See all services"} /> */}
            </div>
            </div>
        </section>
        <div className="wrap">
            <div className="minerals-grid">
                {MINERALS.map((m) => (
                <Link href={`/minerals/${m.slug}`} className="mineral-card" key={m.slug}>
                    <div>
                    <div className="swatch" style={{ background: m.color }} />
                    <h4>{m.name}</h4>
                    <div className="use">{m.uses}</div>
                    </div>
                    <div className="status">{m.status}</div>
                </Link>
                ))}
            </div>
        </div>
    </>
  );
}