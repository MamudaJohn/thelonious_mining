interface valueReceived {
    text : string
}

const MicroCopy = ({text}: valueReceived) => {
    return (
        <div className="microcopy">
            <span className="dot" />
            {text}
        </div>
    )
} 

export default MicroCopy;