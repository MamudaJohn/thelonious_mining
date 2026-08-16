import Link from "next/link";

interface valueReceived {
    head?: string | null;
    paragraph?: string | null;
    link?: string | null;
    linkto?: string | null;
}

function CtaPanel({head=null, paragraph=null, link=null, linkto=null}: valueReceived) {
  return (
    <div className="cta-panel" style={{ marginTop: 40 }}>
        <div>
            <h3>{head}</h3>
            <p>{paragraph}</p>
        </div>
        <Link href={`/${linkto}`} className="btn btn-primary">
            {link}
        </Link>
    </div>
  )
}


export default CtaPanel;
