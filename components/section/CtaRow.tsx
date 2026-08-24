import Link from "next/link";

interface receivedValue {
    Href1 : string,
    text1 : string,
    Href2? : string | null,
    text2? : string | null
}


const CtaRow = ({Href1, text1, Href2=null, text2=null}: receivedValue) => {
    return (
        <div className="cta-row">
            <Link href={Href1} className="btn btn-primary">
                {text1}
            </Link>

            {Href2&& (
                <Link href={Href2} className="btn btn-ghost">
                    {text2}
                </Link>
            )}
        </div>

    )
}

export default CtaRow;