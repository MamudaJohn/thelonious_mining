interface valueReceived {
    text : string
    classname? : string
}

const LedeParagraph = ({text, classname=""}: valueReceived) => {
    return (
        <p className={classname && "lede"}>
            {text}
        </p>

    )
}

export default LedeParagraph

