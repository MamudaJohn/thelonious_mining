import Link from "next/link"
import { ReactNode } from "react"

interface valueReceived {
        title : string,
        paragraph : string,
        link? : string | null
        linkText? : string | null
}

interface contentDisplayBorder {
    values? : valueReceived[],
    children? : ReactNode
}


// function ContentDisplayBorder({title, paragraph, link = null, linkText=null}: valueReceived) {
function ContentDisplayBorder({values, children}: contentDisplayBorder) {

  return (
    <div className="contact-grid">
            {children || values?.map((value) => (
                <div key={value.title} className="contact-card">
                    <h4>{value.title}</h4>
                    <p>{value.paragraph}</p>
                    <Link href={`/${value.link}`}>{value.linkText ?? null}</Link>
                </div>
            ))}
    </div>
  )
}

export default ContentDisplayBorder
