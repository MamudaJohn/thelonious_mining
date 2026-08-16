
import Link from "next/link";
import GreenButton from "../buttons/GreenButton";

interface valuesReceived {
    slug?: string | null;
    depth: string;
    title?: string | null;
    tags?: string[] | null;
    shortdesc?: string | null;
    jointags?: boolean | null;
    className?: string | null;
}

const DropDownContent = ({
    slug = null,
    depth,
    title = null,
    tags = null,
    shortdesc = null,
    jointags = null,
    className = null 
}: valuesReceived) => {
    
    // Fallback block to safely extract active items
    const activeTags = tags || [];
    const activeSlug = slug || "unknown";

    return (
        <details className={`log-row ${className}`} key={activeSlug}>
            {/* Renders nothing if depth is null */}
            {depth && <summary className="log-depth">{depth}</summary>}
            
            <div>
                {/* Renders nothing if title is null */}
                {title && <h3>{title}</h3>}
                
                {
                    jointags ? (
                        activeTags.length > 0 && <span className="tag">{activeTags.join(" · ")}</span>
                    ) : (
                        activeTags.length > 0 && <GreenButton text={activeTags} />
                    )
                }
                
                {/* Renders nothing if shortparagraph is null */}
                {shortdesc && <p >{shortdesc}</p>}
            </div>
            
            {jointags ? (
                    <Link href={`/services/${activeSlug}`} className="log-link">
                        Learn more →
                    </Link>
                ) : ("")
            }
            {/* <Link href={`/services/${activeSlug}`} className="log-link">
                Learn more →
            </Link> */}
        </details>
    );
};

export default DropDownContent;

