import Link from "next/link";

interface valuesReceived {
    title : string
    heading? : string,
    desc? : string,
}

const ContentDisplayTwo = ({title, heading,desc}: valuesReceived) => {
    return (
        <div className="step" key={title}>
            <div className="step-num">{title}</div>
            <div>
                {heading && <h3>{heading}</h3>}
                {desc && <p>{desc}</p>}
            </div>
        </div>
    )
}

export default ContentDisplayTwo;