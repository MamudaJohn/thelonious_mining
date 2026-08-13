import Link from "next/link";

interface receivedValue {
    Href1 : string,
    text1 : string,
    Href2 : string,
    text2 : string
}


const CtaRow = ({Href1, text1, Href2, text2}: receivedValue) => {
    return (
        <div className="cta-row">
            <Link href={Href1} className="btn btn-primary">
                {text1}
            </Link>
            <Link href={Href2} className="btn btn-ghost">
                {text2}
            </Link>
        </div>

    )
}

export default CtaRow;