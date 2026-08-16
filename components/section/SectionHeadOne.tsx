import EyeBrow from "../ui/paragraphs/EyeBrow";

interface valueReceived {
    eyebrow : string,
    header : string,
    paragraph? : string | null
}

const SectionHeadOne = ({eyebrow, header, paragraph=null}: valueReceived) => {
    return (
        <div className="section-head">
            <div>
              <EyeBrow text={eyebrow} />
              { paragraph ? (
                  <h2>{header}</h2>
              ) : (
                  <h2 className="hh2">{header}</h2>
              )}
            </div>
            {paragraph && <p>{paragraph}</p>}
        </div>
    )
}

export default SectionHeadOne;