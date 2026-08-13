interface valueReceived {
    text : string
}

function EyeBrow({text}: valueReceived){
    return (
        <div className="eyebrow">{text}</div>
    )
}

export default EyeBrow