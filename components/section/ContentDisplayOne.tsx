import Link from "next/link";

interface valuesReceived {
    slug : string,
    depth : string,
    title : string,
    tags : string[],
    shortDesc : string
}

const ContentDisplayOne = ({slug,depth,title,tags,shortDesc}: valuesReceived) => {
    return (
        <div className="log-row" key={slug}>
            <div className="log-depth">{depth}</div>
            <div>
                <h3>{title}</h3>
                <span className="tag">{tags.join(" · ")}</span>
                <p style={{ marginTop: 10 }}>{shortDesc}</p>
            </div>
            <Link href={`/services/${slug}`} className="log-link">
                Learn more →
            </Link>
        </div>
    )
}

export default ContentDisplayOne;