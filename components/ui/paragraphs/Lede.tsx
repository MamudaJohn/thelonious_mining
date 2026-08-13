interface valueReceived {
    text : string
}

const LedeParagraph = ({text}: valueReceived) => {
    return (
        <p className="lede">
            {text}
        </p>

    )
}

export default LedeParagraph

