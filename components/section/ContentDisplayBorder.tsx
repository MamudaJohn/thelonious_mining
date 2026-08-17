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
    children? : ReactNode,
    contact? : boolean
}


// function ContentDisplayBorder({title, paragraph, link = null, linkText=null}: valueReceived) {
function ContentDisplayBorder({values, children, contact}: contentDisplayBorder) {

  return (
    <div className="contact-grid">
            {children || values?.map((value) => ( 
                <div key={value.title} className="contact-card">
                  {contact ? (
                    <>
                      <span className="custom-radio"></span>
                      
                      <div className="radio-text-content">
                        <h4>{value.title}</h4>
                        <p>{value.paragraph}</p>
                        {value.linkText && (
                          <Link href={`/${value.link}`}>{value.linkText}</Link>
                        )}
                      </div>
                    </>

                  ): (
                    <>
                      <h4>{value.title}</h4>
                      <p>{value.paragraph}</p>
                      <Link href={`/${value.link}`}>{value.linkText ?? null}</Link>
                    </>
                  )}
                </div>
            ))}
    </div>
  )
}

export default ContentDisplayBorder
