import Link from "next/link";

interface valuesReceived {
    slug : string,
    depth : string,
    title : string,
    tags : string[],
    shortDesc : string,
    jointags? : boolean
}

const ContentDisplayOne = ({slug,depth,title,tags,shortDesc, jointags}: valuesReceived) => {
    return (
        <div className="log-row" key={slug}>
            <div className="log-depth">{depth}</div>
            <div>
                <h3>{title}</h3>
                {
                    jointags? (
                        <span className="tag">{tags.join(" · ")}</span>
                    ) : (
                        <span className="cta-row">
                        {tags.map( tag => <span key={tag} className="tag">{tag}</span>)}
                        </span>
                    )
                }
                <p style={{ marginTop: 10 }}>{shortDesc}</p>
            </div>
            <Link href={`/services/${slug}`} className="log-link">
                Learn more →
            </Link>
        </div>
    )
}

export default ContentDisplayOne;