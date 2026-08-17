interface valueReceived {
    h1: string;
    title?: string | null;
    paragraph: string;
}

function ParagraphGrid({h1, title=null, paragraph}: valueReceived) {
  return (
    <div className="mineral-card">
        <div>
            <div className="status">{h1}</div>
            {title &&  <h4>{title}</h4> }
            <div className="use"> 
            {paragraph}
            </div>
        </div>
    </div>
  )
}

export default ParagraphGrid
