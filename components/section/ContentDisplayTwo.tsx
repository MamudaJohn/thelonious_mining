import Link from "next/link";

interface valuesReceived {
    title : string
    heading? : string,
    paragraph? : string,
}

const ContentDisplayTwo = ({title, heading,paragraph}: valuesReceived) => {
    return (
        <div className="step" key={title}>
            <div className="step-num">{title}</div>
            <div>
                {heading && <h3>{heading}</h3>}
                {paragraph && <p>{paragraph}</p>}
            </div>
        </div>
    )
}

export default ContentDisplayTwo;