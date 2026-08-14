import Link from "next/link";

interface valueReceived {
    slug? : string,
    cat? : string,
    title : string,
    sub? : string
}

const ContentDisplayFour = ({slug, cat, title, sub}: valueReceived) => {
    return (
        <div className="insight-card" key={title}>
            {slug && <div className="cat">{cat}</div>}
            {title && <h4>{title}</h4>}
            {sub && <p>{sub}</p>}
            { slug && <Link href={`/insights/${slug}`} className="log-link" style={{ display: "inline-block", marginTop: 10 }}>
                Read report →
            </Link>} 
        </div>
    )
}

export default ContentDisplayFour;